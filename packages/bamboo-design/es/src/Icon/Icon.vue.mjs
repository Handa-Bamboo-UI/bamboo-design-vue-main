import { defineComponent as e, resolveComponent as c, createBlock as i, openBlock as s } from "vue";
import "./style/index.css";
const p = e({
  name: "bm-icon"
}), f = /* @__PURE__ */ e({
  ...p,
  props: {
    type: {},
    size: {}
  },
  setup(n) {
    const o = n;
    return (r, _) => {
      const t = c("fa-icon");
      return s(), i(t, {
        icon: o.type,
        size: o.size || "2x"
      }, null, 8, ["icon", "size"]);
    };
  }
});
export {
  f as default
};
