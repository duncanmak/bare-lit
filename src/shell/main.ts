import { sections } from './section.ts';

const { LitElement, html } = await import("https://cdn.skypack.dev/lit?dts");
const { customElement } = await import("https://cdn.skypack.dev/lit/decorators?dts");
const { map } = await import("https://cdn.skypack.dev/lit/directives/map.js?dts");

@customElement("shell-component")
class Shell extends LitElement {
  render() {
    return html`
      <nav>
        ${map(sections, ({name}) => html`<a href="/${name}" class="${name}">${name}</a>`)}
      </nav>`;
  }
}

