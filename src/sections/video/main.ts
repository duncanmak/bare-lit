import { Ref, ref, createRef } from "https://cdn.skypack.dev/lit/directives/ref.js?dts";
import { isLocal } from '../../shared/environment.ts';
import { AtlasElement } from "../../shared/main.ts";
import { Page, VideoEntry } from "./api/model.ts";
import { MockApi, RealApi } from './api/api.ts';
const api = isLocal() ? MockApi : RealApi;

const { html } = await import("https://cdn.skypack.dev/lit?dts");
const { customElement } = await import("https://cdn.skypack.dev/lit/decorators");
const { map } = await import(
  "https://cdn.skypack.dev/lit/directives/map.js?dts"
);
const { when } = await import(
  "https://cdn.skypack.dev/lit/directives/when.js?dts"
);

@customElement("video-list")
export class VideoList extends AtlasElement {

  // TODO: This is needed until
  // https://github.com/lit/lit-element/issues/1030 is resolved
  static properties = { entries: {}, term: {} };
  declare entries: Page<VideoEntry>;
  declare term: string;
  declare input: Ref<HTMLInputElement>;

  constructor(){
    super()
    this.entries = {
      pageIndex: 0,
      pageSize: 0,
      items: [],
      totalCount: 0
    };
    this.term = '';
    this.input = createRef<HTMLInputElement>();
  }

  async connectedCallback() {
    super.connectedCallback();
    this.entries = await api.getEntries();
  }

  onChange() {
    this.term = this.input.value?.value ?? '';
  }

  renderEntry(entry: VideoEntry) {
    console.log('Value: ', !!entry.publishTime)
    return html`<li class="card-holder display-flex width-full">
        <article class="media-card position-relative" data-bi-name="card">
          <figure class="media-card-image ">
            ${when(!!entry.publishTime,
              () => html`<img src="/published.png" alt="Published" />`,
              () => html`<img src="/unpublished.png" alt="Unpublished" />`
            )}
          </figure>
          <div class="media-card-content">
            <div class="media-card-content-titles">
              <p class="margin-bottom-xxs color-text-subtle">Creation Date: ${entry.createTime}</p>
              <p class="margin-bottom-xxs color-text-subtle">Last Modified: ${entry.updateTime}</p>
              <a href="/video/${entry.id}" class="media-card-content-titles">
                <span class="title font-size-h5 font-weight-semibold">${entry.title}</span>
              </a>
            </div>
            <p class="font-size-sm color-text-subtle margin-top-xxs">
              Created By: ${entry.createdBy?.name}
            </p>
          </div>
        </article>
      </li>
    `
  }

  renderEntries() {
    const entries = this.entries.items.filter((entry) => entry.title?.match(new RegExp(this.term, 'i')))
    return html`${map(entries, this.renderEntry)}`;
  }

  render() {
    return html`
      <div class="section">
        <p>Available Videos (${this.entries.totalCount})</p>
        <input ${ref(this.input)} class="input" id="input-demo" type="text" placeholder="Search by name or id"
          @input="${this.onChange}" value="${this.term}"/>
        <ol class="list-style-none display-flex flex-wrap-wrap justify-content-space-between margin-top-xxs">
          ${when(this.entries.items.length > 0,
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
}