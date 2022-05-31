export const routes = [
  {
    path: "/bonjour",
    component: "bonjour-monde",
    action: async () => {
      await import("../bonjour/main.ts");
    },
  },
];
