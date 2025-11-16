import { defineComponent as f, ref as n, onMounted as I, watch as v, computed as i, createElementBlock as p, openBlock as u, createElementVNode as $, normalizeStyle as g, normalizeClass as b, unref as o, renderSlot as B, Fragment as S, renderList as k } from "vue";
/* empty css                  */
const C = {
  class: "bm-cheese-container",
  style: { width: "100%", height: "100%" }
}, x = {
  class: "bm-cheese-dev",
  style: { width: "100%", height: "100%" }
}, z = f({
  name: "bm-cheese"
}), M = /* @__PURE__ */ f({
  ...z,
  props: {
    cut: {},
    pos: {},
    dev: { type: Boolean },
    auto: { type: Boolean },
    num: {},
    fill: { type: Boolean }
  },
  setup(h) {
    let d = n(1), m = n(1), r = n(1), s = n(1), l = n(1), c = n(1);
    I(() => {
      if (v(() => t.pos, (e, a) => {
        e !== a && window.location.reload();
      }), v(() => t.cut, (e, a) => {
        e !== a && window.location.reload();
      }), t.pos) {
        const e = t.pos.split(" ");
        r.value = parseInt(e[2]), s.value = parseInt(e[3]), d.value = parseInt(e[0]), m.value = parseInt(e[1]);
      }
      if (t.cut) {
        const e = t.cut.split(" ");
        l.value = parseInt(e[0]), c.value = parseInt(e[1]);
      }
    });
    var w = i(() => r.value ? r.value : 1), y = i(() => s.value ? s.value : 1);
    const t = h, _ = i(() => ({
      "bm-cheese-dev": t.dev
    }));
    return (e, a) => (u(), p("div", C, [
      $("div", {
        class: b(["bm-cheese", _.value]),
        style: g(`
    grid-template-columns: repeat(${o(c)}, 1fr); 
    grid-template-rows: repeat(${o(l)}, 1fr);
    grid-area: ${o(d) || 1}/${o(m) || 1}/span ${o(w)}/span ${o(y)};
    `)
      }, [
        t.fill ? (u(!0), p(S, { key: 1 }, k(o(l) * o(c), (E) => (u(), p("div", x))), 256)) : B(e.$slots, "default", { key: 0 })
      ], 6)
    ]));
  }
});
export {
  M as default
};
