import { defineComponent as e, resolveComponent as t, createBlock as r, openBlock as s, normalizeStyle as i } from "vue";
import "./style/index.css";
const l = e({
  name: "bm-icon"
}), f = /* @__PURE__ */ e({
  ...l,
  props: {
    type: {},
    size: {},
    color: {}
  },
  setup(n) {
    const o = n;
    return (p, _) => {
      const c = t("fa-icon");
      return s(), r(c, {
        icon: o.type,
        size: o.size || "2x",
        style: i(o.color ? `color:${o.color};` : "")
      }, null, 8, ["icon", "size", "style"]);
    };
  }
});
export {
  f as default
};
