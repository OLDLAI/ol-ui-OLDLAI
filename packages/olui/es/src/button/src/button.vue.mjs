import { defineComponent as d, computed as n, openBlock as i, createElementBlock as u, normalizeClass as a, unref as f, renderSlot as m } from "vue";
import { buttonProps as b } from "./button.mjs";
import "./index.less.mjs";
const k = ["disabled"], h = /* @__PURE__ */ d({
  name: "button",
  props: b,
  emits: ["click"],
  setup(s, { expose: r, emit: l }) {
    const t = s, c = n(() => {
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
      l("click");
    };
    return r({
      /** @description button type */
      type: t.type
    }), (e, o) => (i(), u("button", {
      class: a(f(c)),
      onClick: p,
      disabled: t.disabled
    }, [
      m(e.$slots, "default")
    ], 10, k));
  }
});
export {
  h as default
};
