import { type Ref } from "lit/directives/ref.js?dts";
import { isLocal } from '../../shared/environment.ts';
import { Page, VideoEntry } from "./api/model.ts";
import { MockController, RealController } from './api/controller.ts'
import { styles } from "./assets/styles.ts";

const API = isLocal() ? MockController : RealController;

// Lit Imports
const { LitElement, html } = await import("lit");
const { ref, createRef } = await import("lit/directives/ref.js?dts");
const { customElement } = await import("lit/decorators/custom-element.js?dts");
const { map } = await import("lit/directives/map.js?dts");
const { when } = await import("lit/directives/when.js?dts");

@customElement("video-list")
export class VideoList extends LitElement {

  // TODO: This is needed until
  // https://github.com/lit/lit-element/issues/1030 is resolved
  static properties = { entries: {}, term: {}, location: { type: Object } };
  static styles = styles;
  private api = new API(this);

  declare entries: Page<VideoEntry>;
  declare input: Ref<HTMLInputElement>;
  declare location: any;

  constructor(){
    super()
    this.input = createRef<HTMLInputElement>();
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("video-list:update-term", this.search);
  }

  disconnectedCallback() {
    this.removeEventListener("video-list:update-term", this.search);
    super.disconnectedCallback();
  }

  async search(evt: CustomEvent) {
    await this.api.updateTerm(evt.detail);
  }

  emitSearch(detail: string) {
    this.dispatchEvent(
      new CustomEvent("video-list:update-term", {
        bubbles: true,
        composed: true,
        detail,
      }),
    );
  }

  onChange() {
    this.emitSearch(this.input.value?.value ?? '')
  }

  renderEntry(entry: VideoEntry) {
    return html`<li class="card-holder display-flex">
        <article class="media-card position-relative box-shadow-medium" data-bi-name="card">
          <figure class="media-card-image ">
            ${when(!!entry.publishTime,
              () => html`<img src="/assets/published.png" alt="Published" />`,
              () => html`<img src="/assets/unpublished.png" alt="Unpublished" />`
            )}
          </figure>
          <div class="media-card-content padding-xxs display-flex flex-direction-column justify-content-space-between">
            <div class="media-card-content-titles">
              <p class="margin-bottom-xxs color-text-subtle">
                <span>Last Modified: ${new Date(entry.updateTime!).toDateString()}</span>
              </p>
              <a href="/video/${entry.id}" class="media-card-content-titles">
                <span class="title font-size-h5 font-weight-semibold">${entry.title}</span>
              </a>
            </div>
            <p class="font-size-sm color-text-subtle margin-top-xs display-flex justify-content-space-between">
                <span>${entry.createdBy?.name}</span>
                <span>Created: ${new Date(entry.createTime!).toDateString()}</span>
            </p>
          </div>
        </article>
      </li>
    `
  }

  renderEntries() {
    return html`${map(this.api.page.items, this.renderEntry)}`;
  }

  render() {
    const text = this.location.params["id"]
    return html`
    <link rel="stylesheet" href="https://unpkg.com/@microsoft/atlas-css@3.16.0/dist/index.css">
      <div class="section">
        <p>Available Videos (${this.api.page.totalCount})</p>
        <input ${ref(this.input)} class="input" id="input-demo" type="text" placeholder="Search by name or id"
          @input="${this.onChange}" value="${this.api.term}"/>
        <ol class="list-style-none display-flex flex-wrap-wrap justify-content-space-between margin-top-xxs">
          ${when(this.api.page.items.length > 0,
            () => this.renderEntries(),
            () => html`<li>Empty List</li>`)}
        </ol>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "video-list": VideoList;
  }

  interface HTMLElementEventMap {
    "video-list:update-term": CustomEvent<VideoEntry>;
  }
}