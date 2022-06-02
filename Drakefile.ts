import {
  desc,
  glob,
  run,
  sh,
  task,
  updateFile,
} from "https://deno.land/x/drake@v1.5.2/mod.ts";
import {
  copy,
  emptyDir,
  ensureDir,
} from "https://deno.land/std@0.141.0/fs/mod.ts";

const SECTIONS = ["hello", "bonjour", "shell"];

async function _copy(...pairs: [string, string][]) {
  const opts = { overwrite: true };
  await Promise.all(pairs.map(([src, dst]) => copy(src, dst, opts)));
}

async function runServer() {
  await sh("deno run --allow-net --allow-read ./bin/server.ts");
}

function installSection(section: string, filename: string) {
  if (filename === "./build/index.html")
    return updateFile(
      filename,
      new RegExp("./shell.bundle.js"),
      `./${section}.bundle.js`
    );
  else if (filename === "./src/app.ts")
    return updateFile(
      filename,
      new RegExp(`import { config } from "./shell/section.ts"`),
      `import { config } from "./${section}/section.ts"`
    );
  else console.log(`Don't know how to install ${section} in ${filename}`);
}

desc("Clean build output");
task("clean", [], async () => {
  await emptyDir("build");
});

desc("Build everything");
task(
  "build",
  SECTIONS.map((section) => `build-${section}`)
);

for (const section of SECTIONS) {
  desc(`Build ${section}`);
  task(`build-${section}`, [`./build/${section}.bundle.js`]);

  task(
    `./build/${section}.bundle.js`,
    [...glob(`./src/${section}/*.ts`)],
    async () => {
      await sh(
        `deno bundle ./src/${section}/main.ts ./build/${section}.bundle.js`
      );
    }
  );

  desc(`Serve ${section}`);
  task(
    `serve-${section}`,
    [`build-${section}`, "./build/index.html"],
    async () => {
      console.log(
        "Replacing index.html",
        await installSection(section, "./build/index.html")
      );
      console.log(
        "Replacing app.ts",
        await installSection(section, "./src/app.ts")
      );
      await sh(`deno bundle ./src/app.ts ./build/app.js`);
      await runServer();
    }
  );
}

task("./build/index.html", ["./src/index.html"], async () => {
  await _copy([`./src/index.html`, "./build/index.html"]);
});

desc("Serve the app");
task("serve", ["build", "./build/index.html", "serve-shell"]);

await run();
