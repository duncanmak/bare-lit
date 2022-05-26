import { HelloApi } from "./api.js";

export const Api: HelloApi = {
    async hello() {
        await new Promise(r => setTimeout(r, 5000));

        return "Real data";
    }
}