import { HelloApi } from "./api.ts";

export const Api: HelloApi = {
    async hello() {
        return "French Mock data";
    }
}