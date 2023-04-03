import { defineComponent as C, ref as f, computed as _, resolveComponent as b, openBlock as i, createElementBlock as p, normalizeClass as B, unref as l, createCommentVNode as d, createElementVNode as v, withDirectives as E, isRef as N, vModelText as R, createVNode as s } from "vue";
import { InputProps as w, Emits as x } from "./input.mjs";
import "./style/index.css";
const F = {
  class: "ol-input__inner",
  tabindex: "1"
}, I = ["placeholder"], D = {
  key: 1,
  class: "after-inner"
}, M = {
  key: 2,
  class: "after-inner"
}, P = C({
  name: "ol-input"
}), q = /* @__PURE__ */ C({
  ...P,
  props: w,
  emits: x,
  setup(h, { emit: a }) {
    const m = h, r = f(), u = f(!1), k = (e) => {
      const n = e.target;
      a("change", n.value);
    }, o = _({
      //双向绑定
      get() {
        return m.modelValue;
      },
      set(e) {
        a("update:modelValue", e);
      }
    }), g = _(() => [
      "ol-input-wrapper",
      {
        "ol-input__focus": u.value,
        "ol-input__hasClear": m.hasClear
      }
    ]), c = () => {
      console.log("clear"), a("update:modelValue", ""), r.value.focus(), r.value.value = "";
    }, V = () => {
      u.value = !0;
    }, y = () => {
      u.value = !1;
    };
    return (e, n) => {
      const t = b("ol-icon");
      return i(), p("div", {
        class: B(l(g))
      }, [
        d("", !0),
        v("div", F, [
          E(v("input", {
            "onUpdate:modelValue": n[0] || (n[0] = (z) => N(o) ? o.value = z : null),
            onFocus: V,
            onBlur: y,
            onInput: k,
            class: "ol-input",
            placeholder: e.placeholder,
            type: "text",
            ref_key: "inputRef",
            ref: r
          }, null, 40, I), [
            [R, l(o)]
          ])
        ]),
        e.hasClear && l(o) ? (i(), p("div", D, [
          s(t, {
            size: 18,
            name: "icon-guanbi",
            onClick: c
          }),
          s(t)
        ])) : d("", !0),
        e.hasClear && l(o) ? (i(), p("div", M, [
          s(t, {
            size: 18,
            name: "delete-filling",
            onClick: c
          }),
          s(t, {
            size: 18,
            name: "bofang1",
            onClick: c
          })
        ])) : d("", !0)
      ], 2);
    };
  }
});
export {
  q as default
};
