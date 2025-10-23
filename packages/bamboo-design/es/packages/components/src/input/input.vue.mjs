import { defineComponent as e, computed as i, createElementBlock as u, openBlock as r, createStaticVNode as o } from "vue";
import "./style/index.css";
const y = e({
  name: "bm-input"
}), s = /* @__PURE__ */ e({
  ...y,
  props: {
    type: {}
  },
  setup(n) {
    const t = n;
    return i(() => ({
      [`bm-input--${t.type || "primary"}`]: t.type || "primary"
    })), (m, p) => (r(), u("div", null, [...p[0] || (p[0] = [
      o('<input type="text"> \\ <input type="password"> \\ <input type="email"> \\ <input type="number"> \\ <input type="date"> \\ <input type="time"> \\ <input type="month"> \\ <input type="week"> \\ <input type="color"> \\ <input type="file"> \\ <input type="radio"> \\ <input type="checkbox"> \\ <input type="submit"> \\ <input type="reset"> \\ <input type="button"> \\ <input type="search"> \\ <input type="hidden">', 33)
    ])]));
  }
});
export {
  s as default
};
