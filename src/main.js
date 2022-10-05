import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: 'frontend masters svelte course',
  },
});

export default app;
