//@deno-types https://unpkg.com/browse/@vaadin/router@1.7.4/interfaces.d.ts
import { Router } from "https://cdn.skypack.dev/@vaadin/router";

const router = new Router(document.getElementById("outlet"), {
  baseUrl: "/shell",
});
router.setRoutes([
  {
    path: "/hello",
    component: "hello-world",
    action: async () => {
      await import("../hello/main.ts");
    },
  },
]);
