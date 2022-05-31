//@deno-types https://unpkg.com/browse/@vaadin/router@1.7.4/interfaces.d.ts
import { Router } from "https://cdn.skypack.dev/@vaadin/router";
import { routes as HelloRoutes } from '../hello/routes.ts'
import { routes as BonjourRoutes } from '../bonjour/routes.ts'

const router = new Router(document.getElementById("outlet"));

router.setRoutes([
  ...HelloRoutes,
  ...BonjourRoutes
]);
