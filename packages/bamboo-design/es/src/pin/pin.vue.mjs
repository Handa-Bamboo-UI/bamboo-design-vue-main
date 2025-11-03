import { defineComponent as t, computed as p, resolveComponent as i, createElementBlock as a, openBlock as r, normalizeClass as u, createVNode as m, withCtx as s, renderSlot as y, createTextVNode as c, toDisplayString as f } from "vue";
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
    description: {},
    menu: { type: Boolean },
    enterAnimate: { type: Boolean }
  },
  setup(n) {
    const e = n, o = p(() => ({
      "bm-pin-up": e.up,
      "bm-pin-left": e.left,
      "bm-pin-right": e.right,
      "bm-pin-bottom": e.bottom,
      "bm-pin-default": !(e.up || e.left || e.right || e.bottom)
    }));
    return (b, B) => {
      const l = i("bm-button");
      return r(), a("div", {
        class: u(["bm-pin", o.value])
      }, [
        m(l, {
          enterAnimate: e.enterAnimate || !1,
          type: e.type || "default",
          iconType: e.iconType,
          menu: e.menu || !1,
          iconOnly: e.iconOnly || !1,
          bubble: e.bubble,
          bubbleReverse: e.bubbleReverse || !1,
          bubbleType: e.bubbleType || "none"
        }, {
          default: s(() => [
            y(b.$slots, "default", {}, () => [
              c(f(e.description || "图钉"), 1)
            ])
          ]),
          _: 3
        }, 8, ["enterAnimate", "type", "iconType", "menu", "iconOnly", "bubble", "bubbleReverse", "bubbleType"])
      ], 2);
    };
  }
});
export {
  v as default
};
