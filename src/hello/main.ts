//@deno-types="https://unpkg.com/@vaadin/router@1.7.4/interfaces.d.ts"
// import { RouterLocation } from "https://cdn.skypack.dev/@vaadin/router";
import { isLocal } from "../environment.ts";
import { MockApi, RealApi } from "./api/api.ts";

const api = isLocal() ? MockApi : RealApi;

const { LitElement, html } = await import("https://cdn.skypack.dev/lit?dts");
const { customElement } = await import(
  "https://cdn.skypack.dev/lit/decorators"
);

const { router } = await import('./' + 'app.js');


@customElement("hello-world")
export class HelloWorld extends LitElement {

  // @property({type: Object}) location = router.location;

  constructor() {
    super();
    this.location = router.location;
  }

  // TODO: This is needed until
  // https://github.com/lit/lit-element/issues/1030 is resolved
  static properties = { _text: {}, location: { type: Object } };
  declare _text: string;
  declare location: any;

  async onClick(e: Event) {
    console.log(e);
    this._text = await api.hello();
  }


  render() {

    // function renderLabel(s: string) { return  html`<li>${s}</li>`; }

    // function renderNested(obj: any) { 
    //   return html`
    //     <ul>
    //       ${Object.keys(obj).map(x =>[renderOne(x), renderOne(obj[x]) ])}
    //     </ul>`;
    // }

    // function renderOne(x: string | {}): TemplateResult {
    //   return (typeof x === 'string') ? renderLabel(x) : renderNested(x);
    // }

    // const content = {
    //   fruit: ["bananas", { apples: ["green", "red"] }, "pears"],
    //   vegetables: [],
    //   meat: [],
    // };

    const text = this.location.params["name"];
    return html`
      <p><button @click="${this.onClick}" class="hello">${text}</button></p>
      <p class="hello">${this._text}</p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hello-world": HelloWorld;
  }
}
