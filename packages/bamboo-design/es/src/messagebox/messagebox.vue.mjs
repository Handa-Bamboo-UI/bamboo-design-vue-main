import { defineComponent as $, computed as u, ref as k, resolveComponent as x, createElementBlock as i, openBlock as t, createVNode as m, Transition as v, withCtx as d, createCommentVNode as s, withModifiers as j, normalizeClass as _, createElementVNode as a, toDisplayString as f, createBlock as l, renderSlot as I, resolveDynamicComponent as K, withKeys as L, createTextVNode as h } from "vue";
import "./styles/index.css";
const R = { class: "message-box-container" }, S = { class: "message-box__header" }, q = { class: "message-box__header-title" }, P = { class: "message-middle-container" }, U = { class: "message-box__icon" }, A = { class: "message-box__text" }, F = { key: 0 }, G = { class: "message-box__footer" }, Q = /* @__PURE__ */ $({
  __name: "messagebox",
  props: {
    visible: { type: Boolean },
    type: { default: "alert" },
    title: {},
    message: {},
    confirmButtonText: { default: "确定" },
    cancelButtonText: { default: "取消" },
    showCancelButton: { type: Boolean },
    closeOnClickModal: { type: Boolean, default: !0 },
    closeOnPressEscape: { type: Boolean },
    autoClose: { type: Boolean, default: !0 },
    delay: {},
    placeholder: {},
    defaultValue: { default: "" },
    zIndex: {},
    customIcon: {},
    size: { default: "m" }
  },
  emits: ["update:visible", "confirm", "cancel", "close"],
  setup(e, { emit: C }) {
    const B = u(() => {
      if (o.title)
        return o.title;
      switch (o.type) {
        case "prompt":
          return "请输入";
        case "alert":
          return "提示";
        case "error":
          return "错误";
        case "success":
          return "成功";
        case "check":
          return "确认";
        case "info":
          return "信息";
        default:
          return "标题";
      }
    }), w = u(() => {
      if (o.message)
        return o.message;
      switch (o.type) {
        case "prompt":
          return "请输入信息";
        case "alert":
          return "好像有什么问题";
        case "error":
          return "发生了错误";
        case "success":
          return "操作成功";
        case "check":
          return "请再次仔细确认";
        case "info":
          return "有些信息需要被传达";
        default:
          return "消息内容";
      }
    }), z = u(() => `message-box__content--${o.type}`), o = e, V = u(() => `message-box-${o.size}`), n = C, b = k(o.defaultValue || ""), M = k(), T = () => {
      o.closeOnClickModal && y();
    }, D = () => {
      n("close"), n("update:visible", !1);
    }, y = () => {
      n("cancel"), n("update:visible", !1);
    }, g = () => {
      n("confirm", b.value), n("update:visible", !1);
    };
    return (N, c) => {
      const r = x("bm-icon"), E = x("bm-input"), p = x("bm-button");
      return t(), i("div", R, [
        m(v, { name: "messagefade" }, {
          default: d(() => [
            e.visible ? (t(), i("div", {
              key: 0,
              class: "message-box-mask",
              onClick: T
            })) : s("", !0)
          ]),
          _: 1
        }),
        m(v, { name: "boxfade" }, {
          default: d(() => [
            e.visible ? (t(), i("div", {
              key: 0,
              class: _(["message-box", V.value]),
              onClick: c[1] || (c[1] = j(() => {
              }, ["stop"]))
            }, [
              e.autoClose ? (t(), i("button", {
                key: 0,
                class: "message-box__close",
                onClick: D,
                "aria-label": "关闭弹窗"
              }, [...c[2] || (c[2] = [
                a("svg", {
                  width: "28",
                  height: "28",
                  viewBox: "0 0 48 48",
                  fill: "none"
                }, [
                  a("path", {
                    d: "M8 8L40 40",
                    stroke: "#ffffff",
                    "stroke-width": "4",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  a("path", {
                    d: "M8 40L40 8",
                    stroke: "#ffffff",
                    "stroke-width": "4",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ], -1)
              ])])) : s("", !0),
              a("div", S, [
                a("h3", q, f(B.value), 1)
              ]),
              a("div", P, [
                a("div", U, [
                  e.type === "info" ? (t(), l(r, {
                    key: 0,
                    type: "fa-circle-info",
                    class: "message-box__icon",
                    color: "var(--bm-color-default-text)",
                    size: "5x"
                  })) : s("", !0),
                  e.type === "alert" ? (t(), l(r, {
                    key: 1,
                    type: "fa-bell",
                    class: "message-box__icon",
                    color: "var(--bm-color-default-text)",
                    size: "5x"
                  })) : s("", !0),
                  e.type === "prompt" ? (t(), l(r, {
                    key: 2,
                    type: "fa-pencil",
                    class: "message-box__icon",
                    color: "var(--bm-color-default-text)",
                    size: "5x"
                  })) : s("", !0),
                  e.type === "error" ? (t(), l(r, {
                    key: 3,
                    type: "fa-exclamation-triangle",
                    class: "message-box__icon",
                    color: "var(--bm-color-default-text)",
                    size: "5x"
                  })) : s("", !0),
                  e.type === "success" ? (t(), l(r, {
                    key: 4,
                    type: "fa-check-circle",
                    class: "message-box__icon",
                    color: "var(--bm-color-default-text)",
                    size: "5x"
                  })) : s("", !0),
                  e.type === "check" ? (t(), l(r, {
                    key: 5,
                    type: "fa-question-circle",
                    class: "message-box__icon",
                    color: "var(--bm-color-default-text)",
                    size: "5x"
                  })) : s("", !0)
                ]),
                a("div", A, [
                  a("div", {
                    class: _(["message-box__content", z.value])
                  }, [
                    I(N.$slots, "default", {}, () => [
                      typeof e.message == "string" || e.message === void 0 ? (t(), i("span", F, f(w.value), 1)) : e.message ? (t(), l(K(e.message), { key: 1 })) : s("", !0)
                    ])
                  ], 2),
                  e.type === "prompt" ? (t(), l(E, {
                    key: 0,
                    class: "message-box__input",
                    modelValue: b.value,
                    "onUpdate:modelValue": c[0] || (c[0] = (O) => b.value = O),
                    placeholder: e.placeholder,
                    onKeyup: L(g, ["enter"]),
                    ref_key: "inputRef",
                    ref: M,
                    "aria-label": "输入内容"
                  }, null, 8, ["modelValue", "placeholder"])) : s("", !0)
                ])
              ]),
              a("div", G, [
                m(p, {
                  type: "primary",
                  class: "message-box__footer-btn message-box__footer-btn--confirm",
                  onClick: g
                }, {
                  default: d(() => [
                    h(f(e.confirmButtonText), 1)
                  ]),
                  _: 1
                }),
                m(p, {
                  type: "default",
                  class: "message-box__footer-btn message-box__footer-btn--cancel",
                  onClick: y
                }, {
                  default: d(() => [
                    h(f(e.cancelButtonText), 1)
                  ]),
                  _: 1
                })
              ])
            ], 2)) : s("", !0)
          ]),
          _: 3
        })
      ]);
    };
  }
});
export {
  Q as default
};
