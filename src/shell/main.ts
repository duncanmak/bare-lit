import { config } from './config.ts';

const { LitElement, html } = await import("https://cdn.skypack.dev/lit?dts");
const { customElement } = await import(
  "https://cdn.skypack.dev/lit/decorators/custom-element.js"
);
const { map } = await import("https://cdn.skypack.dev/lit/directives/map.js?dts");


const names = config.routes.map(({name}) => name);
@customElement("shell-component")
class Shell extends LitElement {
  render() {
    return html`
      <nav>
        ${map(names, name => html`<a href="/${name}" class="${name}">${name}</a>`)}
      </nav>`;
  }
}

