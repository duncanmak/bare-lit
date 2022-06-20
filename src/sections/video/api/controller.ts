import type { ReactiveControllerHost, ReactiveController } from "lit";
import { fromResponse } from "../../../shared/helpers.ts";
import { VideoApi, VideoEntry, Page } from "./api.ts";

export class MockController implements ReactiveController, VideoApi {
  host: ReactiveControllerHost;
  page: Page<VideoEntry> = {
    items: [],
    totalCount: 0,
    pageIndex: 0,
    pageSize: 0
  }
  term: string = '';

  constructor(host: ReactiveControllerHost) {
    (this.host = host).addController(this);
  }

  hostConnected() {
    this.listEntries().then((page) => {
      this.host.requestUpdate();
    });
  }

  async listEntries(): Promise<void> {
    const res = await fetch("/assets/video/db.json");
    const json = await (await res.json()).entries;
    const entries: VideoEntry[] = json.map((entry: any) => fromResponse(VideoEntry, entry));
    this.page = {
      items: entries.filter((entry) => entry.title?.match(new RegExp(this.term, 'i'))),
      pageIndex: 1,
      pageSize: 25,
      totalCount: entries.length,
    };
  }

  async updateTerm(term: string): Promise<void>  {
    this.term = term;
    await this.listEntries();
    this.host.requestUpdate();
  }
}

export class RealController implements ReactiveController, VideoApi {
  host: ReactiveControllerHost;
  page: Page<VideoEntry> = {
    items: [],
    totalCount: 0,
    pageIndex: 0,
    pageSize: 0
  }
  term: string = '';

  constructor(host: ReactiveControllerHost) {
    (this.host = host).addController(this);
  }

  hostConnected() {
    this.listEntries().then((_page) => {
      this.host.requestUpdate();
    });
  }

  listEntries(): Promise<void> {
    // if (search) {
    //     url = `${apis.video}/video/entries?pageIndex=${
    //         _pageIndex + 1
    //     }&pageSize=${_pageSize}&scope=${role}&search=${search}&orderby=${orderby}&order=${order}`;
    // } else {
    //     url = `${apis.video}/video/entries?pageIndex=${
    //         _pageIndex + 1
    //     }&pageSize=${_pageSize}&scope=${role}&orderby=${orderby}&order=${order}`;
    // }
    throw new Error("Method not implemented.");
  }

  updateTerm(term: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
