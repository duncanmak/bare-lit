import { HelloApi } from "./api.ts";

export const Api: HelloApi = {
    async hello() {
        await new Promise(r => setTimeout(r, 5000));

        return "English mock data";
    }
}