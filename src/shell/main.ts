//@deno-types https://unpkg.com/browse/@vaadin/router@1.7.4/interfaces.d.ts
import { Router } from "https://cdn.skypack.dev/@vaadin/router";

const router = new Router(document.getElementById("outlet"));
router.setRoutes([
  {
    path: "/",
    component: "hello-world",
    action: async () => {
      await import("../hello/main.ts");
    },
  },
  {
    path: "/bonjour",
    component: "bonjour-monde",
    action: async () => {
      await import("../bonjour/main.ts");
    },
  },
]);
