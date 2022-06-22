import type { ReactiveControllerHost, ReactiveController } from 'lit';
import type { VideoJson } from './model.ts';
import { VideoApi, Video, Page } from './api.ts';

export class MockController implements ReactiveController, VideoApi {
  page: Page<Video> = {
    items: [],
    totalCount: 0,
    pageIndex: 0,
    pageSize: 0,
  };

  _term: string = '';

  get term() {
    return this._term;
  }

  set term(value: string) {
    this._term = value;
    this.listEntries().then((page) => {
      this.page = page;
      this.host.requestUpdate();
    });
  }

  constructor(public host: ReactiveControllerHost) {
    host.addController(this);
  }

  hostConnected() {
    this.listEntries().then((page) => {
      this.page = page;
      this.host.requestUpdate();
    });
  }

  async listEntries(): Promise<Page<Video>> {
    const res = await fetch('/assets/video/db.json');
    const json = await (await res.json()).entries;
    const entries: Video[] = json.map((entry: VideoJson) =>
      Video.fromJson(entry)
    );
    return {
      items: entries.filter((entry) =>
        entry.title?.match(new RegExp(this._term, 'i'))
      ),
      pageIndex: 1,
      pageSize: 25,
      totalCount: entries.filter((entry) =>
        entry.title?.match(new RegExp(this._term, 'i'))
      ).length,
    };
  }
}

export class RealController implements ReactiveController, VideoApi {
  page: Page<Video> = {
    items: [],
    totalCount: 0,
    pageIndex: 0,
    pageSize: 0,
  };
  term: string = '';

  constructor(public host: ReactiveControllerHost) {
    host.addController(this);
  }

  hostConnected() {
    this.listEntries().then((page) => {
      this.page = page;
      this.host.requestUpdate();
    });
  }

  listEntries(): Promise<Page<Video>> {
    // if (search) {
    //     url = `${apis.video}/video/entries?pageIndex=${
    //         _pageIndex + 1
    //     }&pageSize=${_pageSize}&scope=${role}&search=${search}&orderby=${orderby}&order=${order}`;
    // } else {
    //     url = `${apis.video}/video/entries?pageIndex=${
    //         _pageIndex + 1
    //     }&pageSize=${_pageSize}&scope=${role}&orderby=${orderby}&order=${order}`;
    // }
    throw new Error('Method not implemented.');
  }
}
