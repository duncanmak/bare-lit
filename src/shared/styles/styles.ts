// const { css } = await import("https://cdn.skypack.dev/lit?dts");
import { css } from "https://cdn.skypack.dev/lit?dts";

export const styles = css`
          .section {
            max-width: 90%;
            margin: auto;
          }
          .card-holder {
            padding: 0.75rem;
          }
          @media print, screen and (min-width: 768px) {
            .card-holder {
              width: 33.333%;
            }
          }
        `