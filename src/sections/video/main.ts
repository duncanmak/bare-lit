import { type Ref } from "lit/directives/ref.js?dts";
import { isLocal } from '../../shared/environment.ts';
import { Page, VideoEntry } from "./api/model.ts";
import { MockApi, RealApi } from './api/api.ts';
const api = isLocal() ? MockApi : RealApi;

const { router } = await import('./' + 'app.js');

const { LitElement, html, css } = await import("lit");
const { ref, createRef } = await import("lit/directives/ref.js?dts");
const { customElement } = await import("lit/decorators/custom-element.js?dts");
const { map } = await import("lit/directives/map.js?dts");
const { when } = await import("lit/directives/when.js?dts");

@customElement("video-list")
export class VideoList extends LitElement {

  static styles = css`
    .section {
      max-width: 90%;
      margin: auto;
    }
    .card-holder {
      padding: 0.75rem;
      width: 100%;
    }
    .media-card, .media-card-image, .media-card-image img {
      width: 100%;
    }
    @media print, screen and (min-width: 768px) {
      .card-holder {
        width: 50%;
      }
    }
    @media print, screen and (min-width: 1088px) {
      .card-holder {
        width: 33%;
      }
    }
  `

  constructor(){
    super()
    this.location = router.location;
    this.entries = {
      pageIndex: 0,
      pageSize: 0,
      items: [],
      totalCount: 0
    };
    this.term = '';
    this.input = createRef<HTMLInputElement>();
  }

  // TODO: This is needed until
  // https://github.com/lit/lit-element/issues/1030 is resolved
  static properties = { entries: {}, term: {}, location: { type: Object } };
  declare entries: Page<VideoEntry>;
  declare term: string;
  declare input: Ref<HTMLInputElement>;
  declare location: any;

  async connectedCallback() {
    super.connectedCallback();
    this.entries = await api.getEntries();
  }

  onChange() {
    this.term = this.input.value?.value ?? '';
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
                <span>Created: ${new Date(entry.createTime!).toDateString()}</span>              </p>
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
    const text = this.location.params["id"]
    return html`
    <link rel="stylesheet" href="https://unpkg.com/@microsoft/atlas-css@3.16.0/dist/index.css">
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