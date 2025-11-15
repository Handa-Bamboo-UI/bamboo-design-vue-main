import { defineComponent as o, computed as r, createElementBlock as l, openBlock as a, normalizeStyle as i, normalizeClass as s, renderSlot as u } from "vue";
import "./style/index.css";
const m = o({
  name: "bm-pin-group"
}), f = /* @__PURE__ */ o({
  ...m,
  props: {
    direction: {},
    up: { type: Boolean },
    bottom: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    gap: {},
    sleep: { type: Boolean },
    sub: { type: Boolean }
  },
  setup(p) {
    const e = p, t = r(() => ({
      "bm-pin-group--horizontal": e.direction === "horizontal",
      "bm-pin-group--vertical": e.direction === "vertical",
      "bm-pin-group--up": e.up || !1,
      "bm-pin-group--bottom": e.bottom || !1,
      "bm-pin-group--left": e.left || !1,
      "bm-pin-group--right": e.right || !1,
      "bm-pin-group--sleep": e.sleep || !1,
      "bm-pin-group-sub": e.sub || !1
    }));
    return (n, c) => (a(), l("div", {
      class: s(["bm-pin-group", t.value]),
      style: i({ gap: e.gap || "8px" })
    }, [
      u(n.$slots, "default")
    ], 6));
  }
});
export {
  f as default
};
