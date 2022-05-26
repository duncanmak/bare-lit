import { HelloApi } from "./api.js";

export const MockApi: HelloApi = {
    async hello() {
        return "Mock data";
    }
}