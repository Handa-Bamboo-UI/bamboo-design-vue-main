import { defineComponent as p, computed as c, resolveComponent as k, createElementBlock as l, openBlock as t, normalizeClass as i, createBlock as b, createCommentVNode as n, renderSlot as r, createTextVNode as y, createVNode as v, Transition as h, withCtx as _ } from "vue";
import "./style/index.css";
const B = ["href"], T = {
  key: 1,
  class: "text"
}, O = ["data-bubble"], x = {
  key: 1,
  class: "text"
}, z = p({
  name: "bm-button"
}), C = /* @__PURE__ */ p({
  ...z,
  props: {
    type: {},
    outline: { type: Boolean },
    size: {},
    disabled: { type: Boolean },
    href: {},
    newWindow: { type: Boolean },
    enterAnimate: { type: Boolean },
    thinFont: { type: Boolean },
    iconType: {},
    iconOnly: { type: Boolean },
    reverse: { type: Boolean },
    darkMode: { type: Boolean },
    block: { type: Boolean },
    loading: { type: Boolean },
    bubble: {},
    bubbleReverse: { type: Boolean },
    bubbleType: {},
    menu: { type: Boolean }
  },
  setup(m) {
    const e = m, u = c(() => ({
      [`bm-button--${e.type || "default"}`]: e.type || "primary",
      [`bm-button--${e.size || "m"}`]: e.size || "m",
      "bm-button--outline": e.outline || !1,
      "bm-button--disabled": e.disabled || !1,
      "bm-button--block": e.block || !1,
      "bm-button--thinFont": e.thinFont || !1,
      "bm-button--icon": e.iconType || !1,
      "bm-button--darkMode": e.darkMode || !1,
      "bm-button--iconOnly": e.iconOnly || !1,
      "bm-button--reverse": e.reverse || !1,
      "bm-button--enterAnimate": e.enterAnimate || !1,
      "bm-button--loading": e.type == "link" ? !1 : e.loading,
      "bm-button--bubble": e.type == "link" ? !1 : e.bubble || !1,
      "bm-button--bubbleReverse": e.type == "link" ? !1 : e.bubbleReverse || !1,
      [`bm-button-bubble--${e.bubbleType || "none"}`]: e.type == "link" ? !1 : e.bubble || !1
    })), d = c(() => ({
      "bm-button--block": e.block || !1
    })), f = (s) => {
      e.href && (s.preventDefault(), window.open(e.href, e.newWindow ? "_blank" : "_self"));
    };
    return (s, a) => {
      const o = k("bm-icon");
      return t(), l("div", {
        class: i(d.value)
      }, [
        e.type === "link" ? (t(), l("div", {
          key: 0,
          onClick: f,
          href: e.href,
          class: i(["bm-button custom-link", u.value])
        }, [
          (e.iconType || e.iconOnly) && !e.reverse ? (t(), b(o, {
            key: 0,
            class: "bm-btn-icon",
            type: e.iconType || "fa-check",
            size: "1x"
          }, null, 8, ["type"])) : n("", !0),
          e.iconOnly ? n("", !0) : (t(), l("div", T, [
            r(s.$slots, "default", {}, () => [
              a[0] || (a[0] = y("默认按钮", -1))
            ])
          ])),
          (e.iconType || e.iconOnly) && e.reverse ? (t(), b(o, {
            key: 2,
            class: "bm-btn-icon",
            type: e.iconType || "fa-check",
            size: "1x"
          }, null, 8, ["type"])) : n("", !0)
        ], 10, B)) : (t(), l("button", {
          key: 1,
          class: i(["bm-button", u.value]),
          "data-bubble": e.bubble
        }, [
          v(h, { name: "loading" }, {
            default: _(() => [
              e.loading ? (t(), b(o, {
                key: 0,
                class: "bm-btn-icon spinner",
                type: "fa-refresh",
                size: "1x"
              })) : n("", !0)
            ]),
            _: 1
          }),
          (e.iconType || e.iconOnly) && !e.reverse && !e.loading ? (t(), b(o, {
            key: 0,
            class: "bm-btn-icon",
            type: e.iconType || "fa-check",
            size: "1x"
          }, null, 8, ["type"])) : n("", !0),
          !e.iconOnly || e.menu ? (t(), l("div", x, [
            r(s.$slots, "default", {}, () => [
              a[1] || (a[1] = y("默认按钮", -1))
            ])
          ])) : n("", !0),
          (e.iconType || e.iconOnly) && e.reverse && !e.loading ? (t(), b(o, {
            key: 2,
            class: "bm-btn-icon",
            type: e.iconType || "fa-check",
            size: "1x"
          }, null, 8, ["type"])) : n("", !0)
        ], 10, O))
      ], 2);
    };
  }
});
export {
  C as default
};
