import { defineComponent as v, ref as r, onMounted as I, watch as m, computed as u, createElementBlock as c, openBlock as i, normalizeStyle as $, normalizeClass as g, unref as o, renderSlot as B, Fragment as S, renderList as b } from "vue";
/* empty css                  */
const k = {
  class: "bm-cheese-dev",
  style: { width: "100%", height: "100%" }
}, C = v({
  name: "bm-cheese"
}), F = /* @__PURE__ */ v({
  ...C,
  props: {
    cut: {},
    pos: {},
    dev: { type: Boolean },
    auto: { type: Boolean },
    num: {},
    fill: { type: Boolean }
  },
  setup(h) {
    let d = r(1), f = r(1), n = r(1), l = r(1), s = r(1), p = r(1);
    I(() => {
      if (m(() => t.pos, (e, a) => {
        e !== a && window.location.reload();
      }), m(() => t.cut, (e, a) => {
        e !== a && window.location.reload();
      }), t.pos) {
        const e = t.pos.split(" ");
        n.value = parseInt(e[2]), l.value = parseInt(e[3]), d.value = parseInt(e[0]), f.value = parseInt(e[1]);
      }
      if (t.cut) {
        const e = t.cut.split(" ");
        s.value = parseInt(e[0]), p.value = parseInt(e[1]);
      }
    });
    var w = u(() => n.value ? n.value : 1), y = u(() => l.value ? l.value : 1);
    const t = h, _ = u(() => ({
      "bm-cheese-dev": t.dev
    }));
    return (e, a) => (i(), c("div", {
      ref: "cheese",
      class: g(["bm-cheese", _.value]),
      style: $(`
    grid-template-columns: repeat(${o(p)}, 1fr); 
    grid-template-rows: repeat(${o(s)}, 1fr);
    grid-area: ${o(d) || 1}/${o(f) || 1}/span ${o(w)}/span ${o(y)};
    `)
    }, [
      t.fill ? (i(!0), c(S, { key: 1 }, b(o(s) * o(p), (x) => (i(), c("div", k))), 256)) : B(e.$slots, "default", { key: 0 })
    ], 6));
  }
});
export {
  F as default
};
