import { config } from './config.ts';

const { LitElement, html } = await import("lit");
const { customElement } = await import("lit/decorators/custom-element.js?dts");
const { map } = await import("lit/directives/map.js?dts");

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

