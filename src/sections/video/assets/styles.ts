const { css } = await import("lit");

export const styles = css`
.section {
  max-width: 90%;
  margin: auto;
  margin-top: 1rem;
}
.video-card {
  padding: 0.75rem;
  width: 100%;
}
.media-card, .media-card-image, .media-card-image img {
  width: 100%;
}
@media print, screen and (min-width: 768px) {
  .video-card {
    width: 50%;
  }
}
@media print, screen and (min-width: 1088px) {
  .video-card {
    width: 33%;
  }
}
`;
