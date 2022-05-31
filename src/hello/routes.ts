export function routes() {
    return [
        {
            path: "/",
            component: "hello-world",
            action: async () => {
                await import("../hello/main.ts");
            },
        }
    ];
}