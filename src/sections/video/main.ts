import { type Ref } from 'lit/directives/ref.js?dts';
import { isLocal } from '../../shared/environment.ts';
import { Page, Video } from './api/model.ts';
import { MockController, RealController } from './api/controller.ts';
import { styles } from './assets/styles.ts';
import './video-card.ts';

const API = isLocal() ? MockController : RealController;

// Lit Imports
const { LitElement, html } = await import("lit");
const { ref, createRef } = await import("lit/directives/ref.js?dts");
const { customElement } = await import("lit/decorators/custom-element.js?dts");
const { map } = await import("lit/directives/map.js?dts");
const { when } = await import("lit/directives/when.js?dts");

@customElement('video-list')
export class VideoList extends LitElement {
  // TODO: This is needed until
  // https://github.com/lit/lit-element/issues/1030 is resolved
  static properties = { entries: {}, term: {}, location: { type: Object } };
  static styles = styles;
  private api = new API(this);

  declare entries: Page<Video>;
  declare input: Ref<HTMLInputElement>;
  declare location: any;

  constructor() {
    super();
    this.input = createRef<HTMLInputElement>();
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('video-list:update-term', this.search);
  }

  disconnectedCallback() {
    this.removeEventListener('video-list:update-term', this.search);
    super.disconnectedCallback();
  }

  search = (evt: CustomEvent) => (this.api.term = evt.detail);

  emitSearch(detail: string) {
    this.dispatchEvent(
      new CustomEvent('video-list:update-term', {
        bubbles: true,
        composed: true,
        detail,
      })
    );
  }

  onChange() {
    this.emitSearch(this.input.value?.value ?? '');
  }

  renderEntries() {
    return html`${map(this.api.page.items, (entry) => {
      const { id, title, publishTime, updateTime, createTime, createdBy } =
        entry;
      return html`
        <video-card
          id="${id}"
          title="${title}"
          publish_time="${publishTime}"
          update_time="${updateTime}"
          create_time="${createTime}"
          created_by="${createdBy.name}"
          class="video-card"
        ></video-card>
      `;
    })}`;
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://unpkg.com/@microsoft/atlas-css@3.16.0/dist/index.css"
      />
      <div class="section">
        <p>Available Videos (${this.api.page.totalCount})</p>
        <input
          ${ref(this.input)}
          class="input"
          id="input-demo"
          type="text"
          placeholder="Search by name or id"
          @input="${this.onChange}"
          value="${this.api.term}"
        />
        <ol
          class="card-container list-style-none display-flex flex-wrap-wrap justify-content-space-between margin-top-xxs"
        >
          ${when(
            this.api.page.items.length > 0,
            () => this.renderEntries(),
            () => html`<li>Empty List</li>`
          )}
        </ol>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'video-list': VideoList;
  }

  interface HTMLElementEventMap {
    'video-list:update-term': CustomEvent<Video>;
  }
}
