//@deno-types https://unpkg.com/browse/@vaadin/router@1.7.4/interfaces.d.ts
import { Router } from "https://cdn.skypack.dev/@vaadin/router";
import { routes as HelloRoutes } from '../hello/routes.ts'
import { routes as BonjourRoutes } from '../bonjour/routes.ts'

const { LitElement, html } = await import("https://cdn.skypack.dev/lit?dts");
const { customElement } = await import("https://cdn.skypack.dev/lit/decorators");
const router = new Router(document.getElementById("outlet"));

@customElement("welcome-element")
class Welcome extends LitElement {
  render() {
    return html`<h1>Welcome</h1>`;
  }
}

const defaultRoute =  {
  path: "/",
  component: "welcome-element",
};

router.setRoutes([
  defaultRoute,
  ...HelloRoutes,
  ...BonjourRoutes
]);
