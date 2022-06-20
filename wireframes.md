# Wireframes

## Video List

```html
<videos-app entries="entries">

  <video-search
    term="term"
    orderBy="orderBy"
    order="order"
  > <!-- Text Entry / OrderBy Dropdown -->

  <video-list
    entries="entries"
  />
   <!-- entries.map(entry => html` -->
        <video-card
          entry="entry"
        />
  <!--   `) -->
  </video-list>

  <pagination
    index="index"
    size="size"
    count="count"
  />

</video-app>
```

## Video Edit

```html

<video-edit-app entry="entry">
  <video-title-bar
    id="entry.id"
    title="entry.title"
    savable="???"
    publishable="???"
    unpublishable="???"
  />

  <video-information
    created_at="entry.createTime"
    saved_at="entry.createTime"
    published_at="entry.publishTime"
    updated_by="entry.updatedBy"
  />

  <video-preview
    encoding_status="entry.draftVideo.detailedJobStatus"
    duration="entry.draftVideo.durationInMillisecond"
    high_q="entry.draftVideo.highQualityVideoUrl"
    med_q="entry.draftVideo.mediumQualityVideoUrl"
    low_q="entry.draftVideo.lowQualityVideoUrl"
    audio="entry.draftVideo.audioUrl"
  />

  <video-title-entry
     title="entry.title"
  /> <!-- Text Input -->

  <video-owners-entry
    owners="entry.owners"
  > <!-- Text Input with autocomplete feature -->

  <video-file-selector
    filename="entry.originalFileName || entry.TempResouces.map(e=>e.resourceType === 'video'"
    url="entry.externalVideoUrl"
  /> <!-- File Input / Text Input -->

  <video-thumbnail-selector
    thumbnail="entry.draftVideo.thumbnail"
    capture_at="entry.captureAt"
  /> <!-- File Input / Image Slider -->

  <youtube-url-entry
    url="entry.youTubeUrl"
  /> <!-- Text Input -->

  <video-captions-panel
    status="entry.draftVideo.detailedJobStatus.subPlyJob"
    captions="[...entry.draftVideo.captions, ...(entry.TempResouces.map(e=>e.resourceType === 'caption')]"
    request="entry.requestCaptions"
    cancel="entry.cancelCaptions"
  /> <!-- File Input / Request Interface (and includes drop down)-->

</video-edit-app>
```
