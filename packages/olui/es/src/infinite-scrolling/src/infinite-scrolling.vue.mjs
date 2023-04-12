import { defineComponent as u, ref as i, openBlock as c, createElementBlock as a, normalizeStyle as m, renderSlot as _, createCommentVNode as g } from "vue";
import { Props as v } from "./props.mjs";
import "./style/index.css";
const h = {
  key: 0,
  class: "f-infinite-scrolling__loading"
}, S = u({
  name: "ol-infinite"
}), w = /* @__PURE__ */ u({
  ...S,
  props: v,
  setup(f) {
    const n = f, d = () => ({ run: (o, ...t) => {
      o && o(...t);
    } }), { run: r } = d(), l = i(!1), s = i(), p = () => {
      if (n.loading)
        return;
      const e = s.value;
      if (!e)
        return;
      const o = Math.ceil(
        e.scrollTop + e.clientHeight + n.distance
      );
      r(n.onScrollWhen, Math.ceil(e.scrollTop)), o >= e.scrollHeight && !l.value && (l.value = !0, r((t) => {
        n.onScrollEnd(t), l.value = !1;
      }, o));
    };
    return (e, o) => (c(), a("div", {
      ref_key: "scrollEl",
      ref: s,
      class: "f-infinite-scrolling",
      style: m(e.styles),
      onScroll: p
    }, [
      _(e.$slots, "default"),
      e.loading ? (c(), a("div", h, "加载中...")) : g("", !0)
    ], 36));
  }
});
export {
  w as default
};
