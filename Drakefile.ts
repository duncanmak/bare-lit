import {
  desc,
  execute,
  glob,
  run,
  task,
  updateFile,
} from "https://deno.land/x/drake@v1.5.2/mod.ts";
import { copy, emptyDir, expandGlobSync, ensureDir } from "https://deno.land/std@0.141.0/fs/mod.ts";
import { parse } from "https://deno.land/std@0.141.0/path/mod.ts";
import { bundle } from "https://deno.land/x/emit@0.2.0/mod.ts";
import { runServer } from './bin/server.ts';

const SECTIONS = [...Deno.readDirSync("./src/sections")].reduce(
  (acc: string[], i) => i.isDirectory ? [i.name, ...acc] : acc, []);

function installSection(section: string, filename: string) {
  if (filename === "./build/index.html") {
    const changed = updateFile(
      filename,
      /\/shell.bundle.js/,
      `/${section}.bundle.js`
    );
    if (changed)
      console.log(`Loading ${section} in ${filename}`);
  } else {
    console.log(`Don't know how to install ${section} in ${filename}`);
  }
}

async function refreshImportMap() {
  const indexHtml = await Deno.readTextFile('./src/index.html');

  const begin = indexHtml.indexOf(`<script type="importmap">`);
  const start = indexHtml.indexOf('{', begin);
  const end = indexHtml.indexOf('</script>', start);

  // make sure that it's valid JSON
  const importMap = JSON.parse(indexHtml.substring(start, end));
  await Deno.writeTextFile("./src/import-map.json", JSON.stringify(importMap, null, 2));
}

async function buildAppJs(section: string = 'shell') {
  await execute(`./src/sections/${section}/config.ts`);
  const { run } = await import('./src/generate-app.ts');
  await run(section);
  const { code } = await bundle('./src/app.tmp.ts');
  await Deno.writeTextFile('./build/app.js', code);
}

desc("Clean build output");
task("clean", [], async () => {
  await emptyDir("build");
  try {
    await Deno.remove("./src/app.tmp.ts");
    await Deno.remove("./src/sections/shell/config.ts");
  } catch {}
});

desc("Build everything");
task("build", ["build-sections"], buildAppJs);

task(
  "build-sections",
  SECTIONS.map((section) => `build-${section}`)
);

for (const section of SECTIONS) {

  const my = `./src/sections/${section}`;

  desc(`Build ${section}`);
  task(`build-${section}`, ['./build', `./build/${section}.bundle.js`]);
  task(`${my}/config.ts`, []);

  task(
    `./build/${section}.bundle.js`,
    glob(`${my}/*.ts`),
    async () => {
      await execute(`${my}/config.ts`);
      const { code } = await bundle(`${my}/main.ts`);
      await Deno.writeTextFile(`./build/${section}.bundle.js`, code);
    }
  );

  task(`copy-${section}-assets`, [], async () => {
    const assets = [...expandGlobSync(`${my}/assets/*`)]

    if (assets.length > 0)
      await ensureDir(`./build/assets/${section}/`);
    for (const f of assets) {
      const path = parse(f.path);
      await copy(f.path, `./build/assets/${section}/${path.base}`, {overwrite: true});
    }
  });

  desc(`Serve ${section}`);
  task(
    `serve-${section}`,
    [`build-${section}`, "./build/index.html", "copy-assets", `copy-${section}-assets`],
    async () => {
      await installSection(section, "./build/index.html");
      await buildAppJs(section);
      runServer();
    }
  );
}

var t = task("./src/sections/shell/config.ts");
t.prereqs = ['./src/sections/shell/generate-config.ts'];
t.action = async () => {
  const { run } = await import("./src/sections/shell/generate-config.ts");
  await run();
};

task("./build/index.html", ["./src/index.html", "./build"], () =>
  copy(`./src/index.html`, "./build/index.html", { overwrite: true })
);

task("copy-assets", ['./build'], async () => {
  await ensureDir("./build/assets");
  await copy(`./src/assets/`, "./build/assets/", { overwrite: true })
});

task('./build', [], () => ensureDir('./build'))

task('refresh-import-map', [], refreshImportMap);

desc("Serve the app");
task("serve", ["build-sections", "serve-shell"]);

await run();

