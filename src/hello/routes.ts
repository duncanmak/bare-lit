export const routes = [
  {
    path: "/",
    component: "hello-world",
    action: async () => {
      await import("../hello/main.ts");
    },
  },
];
