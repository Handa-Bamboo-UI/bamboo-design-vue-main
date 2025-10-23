import { defineComponent as u, computed as m, createElementBlock as e, openBlock as o, normalizeClass as s, createElementVNode as c, renderSlot as a, createCommentVNode as i } from "vue";
import "./style/index.css";
const b = ["href"], d = { class: "text" }, p = { key: 0 }, y = {
  key: 1,
  class: "text"
}, f = u({
  name: "bm-button"
}), k = /* @__PURE__ */ u({
  ...f,
  props: {
    type: {},
    outline: { type: Boolean },
    size: {},
    disabled: { type: Boolean },
    href: {},
    enterAnimate: { type: Boolean },
    thinFont: { type: Boolean },
    icon: { type: Boolean },
    iconOnly: { type: Boolean }
  },
  setup(r) {
    const t = r, n = m(() => ({
      [`bm-button--${t.type || "default"}`]: t.type || "primary",
      [`bm-button--${t.size || "m"}`]: t.size || "m",
      "bm-button--outline": t.outline || !1,
      "bm-button--disabled": t.disabled || !1,
      "bm-button--enterAnimate": t.enterAnimate || !1,
      "bm-button--thinFont": t.thinFont || !1,
      "bm-button--icon": t.icon || !1
    }));
    return (l, _) => (o(), e("div", null, [
      t.type === "link" ? (o(), e("a", {
        key: 0,
        href: t.href,
        class: s(["bm-button", n.value])
      }, [
        c("div", d, [
          a(l.$slots, "default")
        ])
      ], 10, b)) : (o(), e("button", {
        key: 1,
        class: s(["bm-button", n.value])
      }, [
        t.icon || t.iconOnly ? (o(), e("div", p)) : i("", !0),
        t.iconOnly ? i("", !0) : (o(), e("div", y, [
          a(l.$slots, "default")
        ]))
      ], 2))
    ]));
  }
});
export {
  k as default
};
