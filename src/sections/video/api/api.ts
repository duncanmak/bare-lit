import { VideoEntry } from "./model.ts";

export interface VideoApi {
    getEntries(): Promise<any>;
}

export { Api as RealApi } from './impl.ts';
export { Api as MockApi } from './mock.ts';