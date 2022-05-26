import { isLocal } from '../environment.ts';
import { MockApi, RealApi } from './api/api.ts';
const api = isLocal() ? MockApi : RealApi;

const { LitElement, html } = await import("https://cdn.skypack.dev/lit?dts");
const { customElement, property } = await import("https://cdn.skypack.dev/lit/decorators");

@customElement("hello-world")
export class HelloWorld extends LitElement {

  @property({type: String})
  _text = "";

  onClick(e: Event) {
    console.log(e);
    this._text = "Clicked";
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