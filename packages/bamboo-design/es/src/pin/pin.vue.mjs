import { defineComponent as t, computed as p, resolveComponent as i, createElementBlock as r, openBlock as u, normalizeClass as a, createVNode as c, withCtx as s, renderSlot as m, createTextVNode as y, toDisplayString as f } from "vue";
import "./style/index.css";
const d = t({
  name: "bm-pin"
}), v = /* @__PURE__ */ t({
  ...d,
  props: {
    iconType: {},
    iconOnly: { type: Boolean },
    up: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    bottom: { type: Boolean },
    number: {},
    type: {},
    bubble: { type: Boolean },
    bubbleReverse: { type: Boolean },
    bubbleType: {},
    description: {}
  },
  setup(o) {
    const e = o, n = p(() => ({
      "bm-pin-up": e.up,
      "bm-pin-left": e.left,
      "bm-pin-right": e.right,
      "bm-pin-bottom": e.bottom,
      "bm-pin-default": !(e.up || e.left || e.right || e.bottom)
    }));
    return (b, _) => {
      const l = i("bm-button");
      return u(), r("div", {
        class: a(["bm-pin", n.value])
      }, [
        c(l, {
          type: e.type || "default",
          iconType: e.iconType,
          iconOnly: e.iconOnly || !1,
          bubble: e.bubble,
          bubbleReverse: e.bubbleReverse || !1,
          bubbleType: e.bubbleType || "none"
        }, {
          default: s(() => [
            m(b.$slots, "default", {}, () => [
              y(f(e.description || "图钉"), 1)
            ])
          ]),
          _: 3
        }, 8, ["type", "iconType", "iconOnly", "bubble", "bubbleReverse", "bubbleType"])
      ], 2);
    };
  }
});
export {
  v as default
};
