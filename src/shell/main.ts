//@deno-types https://unpkg.com/browse/@vaadin/router@1.7.4/interfaces.d.ts
import { Router } from "https://cdn.skypack.dev/@vaadin/router";
import { routes as HelloRoutes } from '../hello/section.ts'
import { routes as BonjourRoutes } from '../bonjour/section.ts'

const { LitElement, html } = await import("https://cdn.skypack.dev/lit?dts");
const { customElement } = await import("https://cdn.skypack.dev/lit/decorators");
const { map } = await import("https://cdn.skypack.dev/lit/directives/map.js?dts");

const router = new Router(document.getElementById("outlet"));

const routes = [
  ...HelloRoutes,
  ...BonjourRoutes
]

function inShell(routes: {path: string, name: string, showInShell: boolean}[]) {
  return routes.filter(r => r.showInShell);
}

@customElement("shell-component")
class Shell extends LitElement {
  render() {
    return html`
      <nav>
        ${map(inShell(routes), ({path, name}) => html`<a href=${path} class="${name}">${name}</a>`)}
      </nav>`;
  }
}

const defaultRoute =  {
  path: "/",
  component: "shell-component",
};

router.setRoutes([defaultRoute, ...routes]);
