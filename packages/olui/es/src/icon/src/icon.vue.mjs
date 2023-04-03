import { defineComponent as s, onMounted as l, computed as t, openBlock as a, createElementBlock as p, normalizeClass as m, unref as n, normalizeStyle as u, createElementVNode as f } from "vue";
import { iconProps as d } from "./icon.mjs";
import "./style/index.css";
import "https:////at.alicdn.com/t/font_3439532_mj2vbrlosb.js";
const _ = ["xlink:href"], h = s({
  name: "ol-icon"
}), B = /* @__PURE__ */ s({
  ...h,
  props: d,
  setup(r) {
    const e = r;
    l(() => {
      import("https:////at.alicdn.com/t/c/font_3653999_v9boqzux0j.js");
    });
    const i = t(() => {
      const o = typeof e.size == "string" ? e.size : `${e.size}px`;
      return {
        fill: e.color,
        width: o,
        height: o
      };
    }), c = t(() => ["ol-icon", e.class]);
    return (o, z) => (a(), p("svg", {
      class: m(n(c)),
      style: u(n(i)),
      "aria-hidden": "true"
    }, [
      f("use", {
        "xlink:href": `#icon-${e.name}`
      }, null, 8, _)
    ], 6));
  }
});
export {
  B as default
};
