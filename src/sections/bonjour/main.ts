import { isLocal } from "../../shared/environment.ts";
import { MockApi, RealApi } from "./api/api.ts";
const api = isLocal() ? MockApi : RealApi;

const { LitElement, html } = await import("lit");
const { customElement } = await import("lit/decorators/custom-element.js?dts");

@customElement("bonjour-monde")
export class BonjourMonde extends LitElement {
  // TODO: This is needed until
  // https://github.com/lit/lit-element/issues/1030 is resolved
  static properties = { _text: {} };
  declare _text: string;

  async onClick(e: Event) {
    console.log(e);
    this._text = await api.hello();
  }

  render() {
    return html`
      <p><button @click="${this.onClick}" class="bonjour">Bonjour</button></p>
      <p class="bonjour">${this._text}</p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bonjour-monde": BonjourMonde;
  }
}
