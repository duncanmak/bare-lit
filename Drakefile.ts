import { desc, glob, run, sh, task, } from "https://deno.land/x/drake@v1.5.2/mod.ts";
import {
  copy,
  emptyDir,
  ensureDir,
} from "https://deno.land/std@0.141.0/fs/mod.ts";

const SECTIONS = ["hello", "bonjour", "shell"];

desc("Clean build output");
task("clean", [], async () => {
  await emptyDir("build");
});

desc("Build everything");
task(
  "build",
  SECTIONS.map((section) => `build-${section}`),
  () => {}
);

for (const section of SECTIONS) {
  desc(`Build ${section}`);
  task(
    `build-${section}`,
    [`./build/${section}/${section}.bundle.js`],
    () => {}
  );

  task(`./build/${section}`, [], async () => {
    await ensureDir(`./build/${section}`);
  });

  task(`./build/${section}/index.html`, [`./src/${section}/index.html`, `./build/${section}`], async () => {
    await copy(`./src/${section}/index.html`, `build/${section}/index.html`, {
      overwrite: true,
      preserveTimestamps: true,
    });
  });

  task(`./build/${section}/${section}.bundle.js`, [`./build/${section}`, ...glob("./src/${section}/*.ts")], async () => {
    await sh(`deno bundle ./src/${section}/main.ts build/${section}/${section}.bundle.js`);
  });
}

desc("Serve the app")
task("serve", ['./build/shell/index.html', "build"], async () => {
  await sh("deno run --allow-net --allow-read ./bin/server.ts")
});

await run();
