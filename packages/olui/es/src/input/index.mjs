import s from "./src/input.vue.mjs";
const e = (n) => (n.install = (t) => {
  const a = n.name;
  t.component(a, n);
}, n), o = e(s);
export {
  o as Input,
  o as default
};
