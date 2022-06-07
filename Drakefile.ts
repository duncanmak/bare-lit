import {
  desc,
  execute,
  glob,
  run,
  sh,
  task,
  updateFile,
} from "https://deno.land/x/drake@v1.5.2/mod.ts";
import { copy, emptyDir  } from "https://deno.land/std@0.141.0/fs/mod.ts";

const SECTIONS = [...Deno.readDirSync("./src")].reduce(
  (acc: string[], i) => i.isDirectory ? [i.name, ...acc] : acc, []);

async function runServer() {
  await sh("deno run --allow-net --allow-read ./bin/server.ts");
}

function installSection(section: string, filename: string) {
  if (filename === "./build/index.html")
    return updateFile(
      filename,
      /\.\/shell.bundle.js/,
      `./${section}.bundle.js`
    );
  else if (filename === "./src/app.tmp.ts")
    return updateFile(
      filename,
      /import { config } from "\.\/\w+\/config.ts"/,
      `import { config } from "./${section}/config.ts"`
    );
  else console.log(`Don't know how to install ${section} in ${filename}`);
}

async function buildAppJs(section?: string) {
  if (section) execute(`./src/${section}/config.ts`);
  await sh(`deno bundle ./src/app.tmp.ts ./build/app.js`);
}

desc("Clean build output");
task("clean", [], async () => {
  await emptyDir("build");
  try {
    await Deno.remove("./src/app.tmp.ts");
    await Deno.remove("./src/shell/config.ts");
  } catch {}
});

desc("Build everything");
task("build", ["build-sections", "./src/app.tmp.ts"], async () => {
  await buildAppJs();
});

task(
  "build-sections",
  SECTIONS.map((section) => `build-${section}`)
);

for (const section of SECTIONS) {
  desc(`Build ${section}`);
  task(`build-${section}`, [`./build/${section}.bundle.js`]);
  task(`src/${section}/config.ts`, []);

  task(
    `./build/${section}.bundle.js`,
    glob(`./src/${section}/*.ts`),
    async () => {
      await execute(`./src/${section}/config.ts`);
      await sh(
        `deno bundle ./src/${section}/main.ts ./build/${section}.bundle.js`
      );
    }
  );

  desc(`Serve ${section}`);
  task(
    `serve-${section}`,
    [`build-${section}`, "./build/index.html", "./src/app.tmp.ts"],
    async () => {
      console.log(
        "Replacing index.html",
        await installSection(section, "./build/index.html")
      );
      console.log(
        "Replacing app.tmp.ts",
        await installSection(section, "./src/app.tmp.ts")
      );
      await buildAppJs(section);
      await runServer();
    }
  );
}

var t = task("./src/shell/config.ts");
t.prereqs = ['./src/shell/generate-config.ts'];
t.action = async () => {
  await sh("deno run --allow-net --allow-read --allow-write ./src/shell/generate-config.ts");
};

task("./src/app.tmp.ts", ["./src/generate-app.ts"], async () => {
  await sh("deno run --allow-net --allow-read --allow-write ./src/generate-app.ts");
});

task("./build/index.html", ["./src/index.html"], async () =>
  await copy(`./src/index.html`, "./build/index.html", { overwrite: true })
);

task("build-assets", [], async () =>
  await copy(`./assets/`, "./build/", { overwrite: true })
);

desc("Serve the app");
task("serve", ["build-sections", "serve-shell"]);

desc("Serve the app, without building");
task("quick-serve", [], async () => {
  await runServer();
});

await run();
