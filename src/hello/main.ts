import "https://cdn.skypack.dev/trusted-types?dts";

// @deno-types="https://cdn.skypack.dev/lit?dts"
import { LitElement, html } from "https://cdn.skypack.dev/lit";
import { customElement, property } from "https://cdn.skypack.dev/lit/decorators";
import { HelloApi } from "./api/api.ts";
import { isLocal } from '../environment.ts';

const api: HelloApi = await import(isLocal() ? './api/mock.js' : './api/impl.js');

@customElement("hello-world")
export class HelloWorld extends LitElement {


  @property({ type: String }) text: string = "";

  // TODO: Can Event handlers be async?
  async onClick(e: Event) {
    this.text = await api.hello();
  }

  render() {
    return html`
      <p><button @click="${this.onClick}">Hello</button></p>
      <p>${this.text}</p>
    `;
  }
}
