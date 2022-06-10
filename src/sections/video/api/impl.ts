import { VideoApi } from "./api.ts";

export const Api: VideoApi = {
    async getEntries() {
        await new Promise(r => setTimeout(r, 5000));

        
        // if (search) {
        //     url = `${apis.video}/video/entries?pageIndex=${
        //         _pageIndex + 1
        //     }&pageSize=${_pageSize}&scope=${role}&search=${search}&orderby=${orderby}&order=${order}`;
        // } else {
        //     url = `${apis.video}/video/entries?pageIndex=${
        //         _pageIndex + 1
        //     }&pageSize=${_pageSize}&scope=${role}&orderby=${orderby}&order=${order}`;
        // }


        return {
            TODO: "Later"
        };
    }
}