import { config as Hello } from "../hello/config.ts";
import { config as Bonjour } from "../bonjour/config.ts";

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
