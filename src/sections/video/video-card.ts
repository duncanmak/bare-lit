import { Video } from "./api/model.ts";

const { LitElement, html } = await import("lit");
const { customElement } = await import("lit/decorators/custom-element.js?dts");
const { when } = await import("lit/directives/when.js?dts");

@customElement("video-card")
export class VideoCard extends LitElement {
  // TODO: This is needed until
  // https://github.com/lit/lit-element/issues/1030 is resolved
  static properties = {
    id: { type: String },
    title: { type: String },
    publish_time: { type: String },
    update_time: { type: String },
    create_time: { type: String },
    created_by: { type: Object },
  };

  declare id: string;
  declare title: string;
  declare publish_time: string;
  declare update_time: string;
  declare create_time: string;
  declare created_by: string;

  render() {
    return html`<link
        rel="stylesheet"
        href="https://unpkg.com/@microsoft/atlas-css@3.16.0/dist/index.css"
      />
      <li class="display-flex">
        <article
          class="media-card position-relative box-shadow-medium"
          data-bi-name="card"
        >
          <figure class="media-card-image ">
            ${
      when(
        !!this.publish_time,
        () => html`<img src="/assets/published.png" alt="Published" />`,
        () => html`<img src="/assets/unpublished.png" alt="Unpublished" />`,
      )
    }
          </figure>
          <div
            class="media-card-content padding-xxs display-flex flex-direction-column justify-content-space-between"
          >
            <div class="media-card-content-titles">
              <p class="margin-bottom-xxs color-text-subtle">
                <span
                  >Last Modified: ${Video.displayTime(this.update_time)}</span
                >
              </p>
              <a href="/video/${this.id}" class="media-card-content-titles">
                <span class="title font-size-h5 font-weight-semibold"
                  >${this.title}</span
                >
              </a>
            </div>
            <p
              class="font-size-sm color-text-subtle margin-top-xs display-flex justify-content-space-between"
            >
              <span>${this.created_by}</span>
              <span>Created: ${Video.displayTime(this.create_time)}</span>
            </p>
          </div>
        </article>
      </li> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "video-card": VideoCard;
  }
}
