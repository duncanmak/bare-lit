import { router } from "./router.ts";

// NOTE: may be replaced by Drakefile
import { config } from "./shell/section.ts";

const routes = [
  {
    path: "/",
    component: config.component,
  },
  ...config.routes,
];

console.log(JSON.stringify(routes));

router.setRoutes(routes);
