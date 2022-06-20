import { Page, VideoEntry } from "./model.ts";

export interface VideoApi {
    listEntries(): Promise<void>;
    updateTerm(term: string): Promise<void>;
}

export type { Page } from './model.ts';
export { VideoEntry } from './model.ts';
