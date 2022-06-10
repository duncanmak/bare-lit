import { isLocal } from "../../shared/environment.ts";
import { MockApi, RealApi } from "./api/api.ts";

const api = isLocal() ? MockApi : RealApi;

const { LitElement, html } = await import("lit");
const { customElement } = await import("lit/decorators/custom-element.js?dts");

await import("time-elements");

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

    const text = this.location.params["name"] || 'Hello';
    return html`
      <p><button @click="${this.onClick}" class="hello">${text}</button></p>
      <p class="hello">${this._text}</p>
<p>
    Time ago:
    <time-ago datetime="1970-01-01T00:00:00.000Z">
      Oops! This browser doesn't support Web Components.
    </time-ago>
  </p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hello-world": HelloWorld;
  }
}
