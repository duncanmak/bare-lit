import { config as Hello } from "../hello/config.ts";
import { config as Bonjour } from "../bonjour/config.ts";
import { join, fromFileUrl } from "https://deno.land/std/path/mod.ts";

const sections = [Hello, Bonjour];

const config = {
  name: "shell",
  component: "shell-component",
  routes: sections.map(({ component, name, routes }) => {
    const action = new Function(`return () => import("./" + "${name}.bundle.js")`)();
    return {
      path: `/${name}`,
      children: routes,
      name,
      action,
      component,
    };
  }),
};

await Deno.writeTextFile(
  join(fromFileUrl(import.meta.url), "../config.ts"),
  `export const config = ${toString(config)}`
);

function toString(a: unknown): string {
  if (typeof a == "string") return `"${a}"`;

  if (a instanceof Array) return `[ ${a.map(toString)} ]`;

  if (a instanceof Function) return a.toString();

  if (a === null) return "null";

  if (typeof a == "object")
    return `{ ${Object.entries(a).map(([k, v]) => `${k}: ${toString(v)}`)} }`;

  console.log(typeof a);
  return "error";
}
