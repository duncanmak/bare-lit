export function routes() {
    return [
        {
            path: "/bonjour",
            component: "bonjour-monde",
            action: async () => {
              await import("../bonjour/main.ts");
            },
          },
    ];
}