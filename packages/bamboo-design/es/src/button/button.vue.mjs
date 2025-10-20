import { defineComponent as e, computed as u, createElementBlock as l, openBlock as r, createElementVNode as c, normalizeClass as m } from "vue";
import "./style/index.css";
const p = e({
  name: "bm-button"
}), d = /* @__PURE__ */ e({
  ...p,
  props: {
    type: {}
  },
  setup(o) {
    const t = o, n = u(() => ({
      [`bm-button--${t.type}`]: t.type
    }));
    return (s, a) => (r(), l("div", null, [
      c("button", {
        class: m(["bm-button", n.value])
      }, "hello button", 2)
    ]));
  }
});
export {
  d as default
};
