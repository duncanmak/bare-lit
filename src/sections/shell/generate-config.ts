import { config as Hello } from "../hello/config.ts";
import { config as Bonjour } from "../bonjour/config.ts";
import { config as Video } from "../video/config.ts";
import { config as Todo } from "../todo/config.ts";
import { toString } from "../../shared/helpers.ts";
import { fromFileUrl, join } from "https://deno.land/std/path/mod.ts";

const sections = [Hello, Bonjour, Video, Todo];

const config = {
  name: "shell",
  component: "shell-component",
  routes: sections.map(({ component, name, routes }) => {
    const action = new Function(
      `return async () => await import("/" + "${name}.bundle.js")`,
    )();
    return {
      path: `/${name}`,
      children: routes,
      name,
      action,
      component,
    };
  }),
};

export async function run() {
  await Deno.writeTextFile(
    join(fromFileUrl(import.meta.url), "../config.ts"),
    `export const config = ${toString(config)}`,
  );
}

if (import.meta.main) await run();
