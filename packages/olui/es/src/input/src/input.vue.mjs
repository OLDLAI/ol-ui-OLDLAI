import { defineComponent as _, ref as u, computed as c, resolveComponent as y, openBlock as p, createElementBlock as i, normalizeClass as B, unref as a, createCommentVNode as d, createElementVNode as m, withDirectives as E, isRef as N, vModelText as R, createVNode as b } from "vue";
import { InputProps as w, Emits as z } from "./input.mjs";
import "./style/index.css";
const F = {
  class: "ol-input__inner",
  tabindex: "1"
}, I = ["placeholder"], D = {
  key: 1,
  class: "after-inner"
}, M = _({
  name: "ol-input"
}), j = /* @__PURE__ */ _({
  ...M,
  props: w,
  emits: z,
  setup(f, { emit: n }) {
    const r = f, l = u(), s = u(!1), v = (e) => {
      const t = e.target;
      n("change", t.value);
    }, o = c({
      //双向绑定
      get() {
        return r.modelValue;
      },
      set(e) {
        n("update:modelValue", e);
      }
    }), h = c(() => [
      "ol-input-wrapper",
      {
        "ol-input__focus": s.value,
        "ol-input__hasClear": r.hasClear
      }
    ]), C = () => {
      console.log("clear"), n("update:modelValue", ""), l.value.focus(), l.value.value = "";
    }, V = () => {
      s.value = !0;
    }, g = () => {
      s.value = !1;
    };
    return (e, t) => {
      const k = y("ol-icon");
      return p(), i("div", {
        class: B(a(h))
      }, [
        d("", !0),
        m("div", F, [
          E(m("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (x) => N(o) ? o.value = x : null),
            onFocus: V,
            onBlur: g,
            onInput: v,
            class: "ol-input",
            placeholder: e.placeholder,
            type: "text",
            ref_key: "inputRef",
            ref: l
          }, null, 40, I), [
            [R, a(o)]
          ])
        ]),
        e.hasClear && a(o) ? (p(), i("div", D, [
          b(k, {
            size: 18,
            name: "#icon-guanbi2",
            onClick: C
          })
        ])) : d("", !0)
      ], 2);
    };
  }
});
export {
  j as default
};
