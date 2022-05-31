export const routes = [
  {
    name: "Bonjour",
    showInShell: true,
    path: "/bonjour",
    component: "bonjour-monde",
    action: async () => {
      await import("../bonjour/main.ts");
    },
  },
];
