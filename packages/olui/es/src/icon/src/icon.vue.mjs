import { defineComponent as s, onMounted as c, computed as t, openBlock as a, createElementBlock as p, normalizeClass as m, unref as n, normalizeStyle as u, createElementVNode as f } from "vue";
import { iconProps as d } from "./icon.mjs";
import "./style/index.css";
const _ = ["xlink:href"], h = s({
  name: "ol-icon"
}), g = /* @__PURE__ */ s({
  ...h,
  props: d,
  setup(r) {
    const e = r;
    c(() => {
      import("https:////at.alicdn.com/t/c/font_3439532_oigkay6g43f.js");
    });
    const i = t(() => {
      const o = typeof e.size == "string" ? e.size : `${e.size}px`;
      return {
        fill: e.color,
        width: o,
        height: o
      };
    }), l = t(() => ["ol-icon", e.class]);
    return (o, z) => (a(), p("svg", {
      class: m(n(l)),
      style: u(n(i)),
      "aria-hidden": "true"
    }, [
      f("use", {
        "xlink:href": `${e.name}`
      }, null, 8, _)
    ], 6));
  }
});
export {
  g as default
};
