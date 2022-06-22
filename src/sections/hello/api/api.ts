export interface HelloApi {
  hello(): Promise<string>;
}

export { Api as RealApi } from "./impl.ts";
export { Api as MockApi } from "./mock.ts";
