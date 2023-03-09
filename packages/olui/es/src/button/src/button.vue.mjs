import { defineComponent as s, computed as n, openBlock as u, createElementBlock as i, normalizeClass as a, unref as f, renderSlot as m } from "vue";
import { buttonProps as b } from "./button.mjs";
import "./index.less.mjs";
const _ = ["disabled"], k = s({
  name: "ol-button"
}), B = /* @__PURE__ */ s({
  ...k,
  props: b,
  emits: ["click"],
  setup(l, { expose: r, emit: c }) {
    const t = l, d = n(() => {
      const { type: e, disabled: o } = t;
      return [
        "ol-button",
        `ol-button-${e}`,
        {
          "ol-button-disabled": o
        }
        /* `
        py-2 
        px-4 
        font-semibold 
        rounded-lg 
        shadow-md 
        text-white 
        bg-${props.color}-500 
        hover:bg-${props.color}-700 
        border-none 
        cursor-pointer 
        ` */
      ];
    });
    n(() => !t.type || t.type === "default" ? "" : "#ffffff");
    const p = () => {
      c("click");
    };
    return r({
      /** @description button type */
      type: t.type
    }), (e, o) => (u(), i("button", {
      class: a(f(d)),
      onClick: p,
      disabled: t.disabled
    }, [
      m(e.$slots, "default")
    ], 10, _));
  }
});
export {
  B as default
};
