import { defineComponent as s, computed as n, resolveComponent as p, openBlock as l, createElementBlock as f, normalizeClass as _, unref as c, createElementVNode as b, createBlock as k, createCommentVNode as C, renderSlot as y } from "vue";
import { buttonProps as h } from "./button.mjs";
import "./style/index.css";
const B = ["disabled"], E = { class: "ol-button_inner" }, N = s({
  name: "ol-button"
}), z = /* @__PURE__ */ s({
  ...N,
  props: h,
  emits: ["click"],
  setup(r, { emit: i }) {
    const o = r, a = n(() => {
      const { type: e, disabled: t } = o;
      return [
        "ol-button",
        `ol-button-${e}`,
        {
          "ol-button-disabled": t
        }
      ];
    }), d = n(() => !o.type || o.type === "default" ? "" : "#ffffff"), u = () => {
      i("click");
    };
    return (e, t) => {
      const m = p("ol-icon");
      return l(), f("button", {
        class: _(c(a)),
        onClick: u,
        disabled: o.disabled
      }, [
        b("span", E, [
          e.icon ? (l(), k(m, {
            key: 0,
            name: o.icon,
            color: c(d)
          }, null, 8, ["name", "color"])) : C("", !0),
          y(e.$slots, "default")
        ])
      ], 10, B);
    };
  }
});
export {
  z as default
};
