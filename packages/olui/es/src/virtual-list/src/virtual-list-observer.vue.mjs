import { defineComponent as O, reactive as L, ref as j, computed as l, unref as i, onUpdated as E, watchEffect as R, openBlock as m, createElementBlock as g, normalizeClass as $, normalizeStyle as d, createElementVNode as b, Fragment as k, renderList as B, renderSlot as N } from "vue";
import V from "./props.mjs";
import { isString as z, isNumber as F } from "../../_utils/props/index.mjs";
const J = O({
  name: "ol-infinite1"
}), Y = /* @__PURE__ */ O({
  ...J,
  props: V,
  setup(v) {
    const n = v, t = L({
      start: 0,
      end: 10,
      scrollOffset: 0,
      cacheData: []
    }), p = j(), w = l(() => {
      const { style: e, height: a, width: r } = n, c = z(e) ? JSON.parse(e) : { ...e };
      return {
        height: `${a}px`,
        width: F(r) ? `${r}px` : r,
        ...c
      };
    }), H = l(() => ({
      height: `${i(M)}px`,
      width: "100%"
    })), x = l(() => ({
      willChange: "transform",
      transform: `translateY(${t.scrollOffset}px)`
    })), u = l(() => (console.log(n.data.length), n.data.length)), M = l(() => n.dynamic ? f(i(u)) : i(u) * n.itemHeight), D = l(() => Math.ceil(n.height / n.itemHeight)), y = l(() => n.data.slice(t.start, t.end)), S = (e) => {
      console.log(11111);
      const { scrollTop: a } = e.target;
      if (t.scrollOffset === a)
        return;
      const { cache: r, dynamic: c, itemHeight: s } = n, o = Math.max(1, r);
      let h = c ? _(a) : Math.floor(a / s);
      const C = Math.max(0, Math.min(i(u), h + i(D) + o));
      h > o && (h = h - o);
      const I = c ? f(h) : a - a % s;
      Object.assign(t, {
        start: h,
        end: C,
        scrollOffset: I
      });
    }, _ = (e = 0) => {
      let a = 0, r = t.cacheData.length - 1;
      for (; a <= r; ) {
        const c = a + Math.floor((r - a) / 2), s = f(c), o = f(c + 1);
        if (s <= e && e <= o)
          return c;
        o < e ? a = c + 1 : o > e && (r = c - 1);
      }
      return Math.min(i(u) - i(D), Math.floor(e / n.itemHeight));
    }, f = (e) => {
      const a = t.cacheData.length - 1;
      return Object.hasOwn(t.cacheData, e) ? t.cacheData[e].top : Object.hasOwn(t.cacheData, e - 1) ? t.cacheData[e - 1].bottom : e > a ? t.cacheData[a].bottom + Math.max(0, e - t.cacheData[a].index) * n.itemHeight : e * n.itemHeight;
    };
    return E(() => {
      if (!n.dynamic)
        return;
      [...p.value.children || []].forEach((a, r) => {
        const c = a.getBoundingClientRect().height, s = t.start + r;
        t.cacheData[s].height !== c && (t.cacheData[s].height = c, t.cacheData[s].top = f(s), t.cacheData[s].bottom = t.cacheData[s].top + t.cacheData[s].height);
      });
    }), R(() => {
      y.value.forEach((e, a) => {
        const r = t.start + a;
        Object.hasOwn(t.cacheData, r) || (t.cacheData[r] = {
          top: r * n.itemHeight,
          height: n.itemHeight,
          bottom: (r + 1) * n.itemHeight,
          index: r
        });
      });
    }), (e, a) => (m(), g("div", {
      class: $(["base-virtual-wrapper", e.className]),
      ref: "wrapperRef",
      style: d(i(w)),
      onScroll: S
    }, [
      b("div", {
        class: "base-virtual-inner",
        ref: "innerRef",
        style: d(i(H))
      }, [
        b("div", {
          class: "base-virtual-list",
          style: d(i(x)),
          ref_key: "virtualListRef",
          ref: p
        }, [
          (m(!0), g(k, null, B(i(y), (r, c) => (m(), g("div", {
            key: c + t.start
          }, [
            N(e.$slots, "default", { item: r })
          ]))), 128))
        ], 4)
      ], 4)
    ], 38));
  }
});
export {
  Y as default
};
