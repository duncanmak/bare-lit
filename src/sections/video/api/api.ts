import { Page, Video } from './model.ts';

export interface VideoApi {
  set term(value: string);
  get term(): string;
  listEntries(): Promise<Page<Video>>;
}

export type { Page } from './model.ts';
export { Video } from './model.ts';
