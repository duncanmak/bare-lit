import { isLocal } from '../environment.ts';
import { MockApi, RealApi } from './api/api.ts';
const api = isLocal() ? MockApi : RealApi;

const { LitElement, html } = await import("https://cdn.skypack.dev/lit?dts");
const { customElement } = await import("https://cdn.skypack.dev/lit/decorators");

@customElement("hello-world")
export class HelloWorld extends LitElement {

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
      <p><button @click="${this.onClick}">Hello</button></p>
      <p>${this._text}</p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hello-world": HelloWorld;
  }
}