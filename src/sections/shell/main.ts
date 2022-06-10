import { config } from './config.ts';

const { LitElement, html, css } = await import("lit");
const { customElement } = await import("lit/decorators/custom-element.js?dts");
const { map } = await import("lit/directives/map.js?dts");

const names = config.routes.map(({name}) => name);
@customElement("shell-component")
class Shell extends LitElement {
  static styles = css`
    :host {
      color: var(--theme-score-low, yellow);
    }
  `;

  render() {
    return html`
    <link rel="stylesheet" href="https://unpkg.com/@microsoft/atlas-css@3.16.0/dist/index.css">
    <h1 class="font-size-h1">Shell</h1>
      <ol class="breadcrumbs">
        ${map(names, name => html`<li class="breadcrumbs-item"><a href="/${name}" class="${name}">${name}</a></li>`)}
      </ol>`;
  }
}
