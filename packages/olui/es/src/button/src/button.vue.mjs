import { defineComponent as s, computed as n, resolveComponent as f, openBlock as l, createElementBlock as _, normalizeClass as b, unref as c, createElementVNode as k, createBlock as C, createCommentVNode as y, renderSlot as h } from "vue";
import { buttonProps as B } from "./button.mjs";
import "./style/index.css";
const E = ["disabled"], N = { class: "ol-button_inner" }, V = s({
  name: "ol-button"
}), P = /* @__PURE__ */ s({
  ...V,
  props: B,
  emits: ["click"],
  setup(r, { expose: i, emit: a }) {
    const o = r, d = n(() => {
      const { type: e, disabled: t } = o;
      return [
        "ol-button",
        `ol-button-${e}`,
        {
          "ol-button-disabled": t
        }
      ];
    }), p = n(() => !o.type || o.type === "default" ? "" : "#ffffff"), u = () => {
      a("click");
    };
    return i({
      /** @description button type */
      type: o.type
    }), (e, t) => {
      const m = f("ol-icon");
      return l(), _("button", {
        class: b(c(d)),
        onClick: u,
        disabled: o.disabled
      }, [
        k("span", N, [
          e.icon ? (l(), C(m, {
            key: 0,
            name: o.icon,
            color: c(p)
          }, null, 8, ["name", "color"])) : y("", !0),
          h(e.$slots, "default")
        ])
      ], 10, E);
    };
  }
});
export {
  P as default
};
