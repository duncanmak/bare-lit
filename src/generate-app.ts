import { join, fromFileUrl } from "https://deno.land/std/path/mod.ts";
import { toString } from './helpers.ts';

// NOTE: may be replaced by Drakefile
import { config } from "./shell/config.ts";

const routes = [
  {
    path: "/",
    component: config.component,
  },
  ...config.routes,
];

await Deno.writeTextFile(
  join(fromFileUrl(import.meta.url), "../app.tmp.ts"),
  `
  const { Router } = await import("https://cdn.skypack.dev/@vaadin/router");
  export const router = new Router(document.getElementById("outlet"));

  router.setRoutes(${toString(routes)});
  `
);