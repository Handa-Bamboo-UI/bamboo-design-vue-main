import { defineComponent as n, resolveComponent as t, createElementBlock as r, openBlock as a, createVNode as m } from "vue";
import "./style/index.css";
const i = n({
  name: "bm-icon"
}), f = /* @__PURE__ */ n({
  ...i,
  props: {
    name: {}
  },
  setup(o) {
    const e = o;
    return (p, _) => {
      const c = t("fa-icon");
      return a(), r("div", null, [
        m(c, {
          icon: e.name
        }, null, 8, ["icon"])
      ]);
    };
  }
});
export {
  f as default
};
