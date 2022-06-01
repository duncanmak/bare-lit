export const routes = [
  {
    name: "Hello",
    path: "/hello",
    component: "hello-world",
    action: async () => {
      await import("../hello/main.ts");
    },
    showInShell: true
  },
];
