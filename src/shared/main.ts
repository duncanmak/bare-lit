import { atlas } from './styles/atlas.ts'

const { css } = await import("https://cdn.skypack.dev/lit?dts");
const { LitElement } = await import("https://cdn.skypack.dev/lit?dts");

export class AtlasElement extends LitElement {
    static styles = [
        atlas,
        css`
          .section {
            max-width: 90%;
            margin: auto;
          }
          .card-holder {
            padding: 0.75rem;
            width: 100%
          }
          @media print, screen and (min-width: 768px) {
            .card-holder {
              width: 33.333%;
            }
          }
        `
      ];
}