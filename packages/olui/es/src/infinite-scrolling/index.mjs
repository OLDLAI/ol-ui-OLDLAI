import e from "./src/infinite-scrolling.vue.mjs";
const s = (n) => (n.install = (t) => {
  const a = n.name;
  t.component(a, n);
}, n), l = s(e);
export {
  l as Infinite,
  l as default
};
