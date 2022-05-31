export const routes = [
  {
    path: "/hello",
    component: "hello-world",
    action: async () => {
      await import("../hello/main.ts");
    },
  },
];
