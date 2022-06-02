import { config as Hello } from "../hello/section.ts";
import { config as Bonjour } from "../bonjour/section.ts";

export const sections = [Hello, Bonjour];

export const config = {
  name: "shell",
  component: "shell-component",
  routes: sections.map(({ component, name, routes }) => ({
    path: `/${name}`,
    children: routes,
    action: async () => { await import(`./${name}.bundle.js`)},
    component,
  })),
};
