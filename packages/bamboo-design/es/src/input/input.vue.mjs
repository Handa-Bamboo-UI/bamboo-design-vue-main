import { defineComponent as d, ref as s, computed as k, onMounted as x, resolveComponent as C, createElementBlock as p, openBlock as a, createCommentVNode as i, normalizeClass as B, createBlock as l, createElementVNode as w } from "vue";
import "./style/index.css";
const T = { class: "input-container" }, z = ["type", "clearable", "value", "placeholder", "maxLength", "minLength", "pattern", "autoComplete"], R = d({
  name: "bm-input"
}), E = /* @__PURE__ */ d({
  ...R,
  props: {
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    clearable: { type: Boolean },
    type: {},
    autosize: { type: Boolean },
    autoComplete: {},
    prefixIcon: {},
    suffixIcon: {},
    maxLength: {},
    showWordLimit: { type: Boolean },
    minLength: {},
    errorAnimate: { type: Boolean },
    inputRule: {},
    ruleJudgeTime: {},
    variant: {},
    value: {},
    iconType: {},
    reverse: { type: Boolean },
    noAnimate: { type: Boolean },
    size: {}
  },
  emits: ["oninput", "onchange"],
  setup(v, { emit: b }) {
    var u = s();
    const e = v, _ = k(() => ({
      "bm-input--disabled": e.disabled,
      "bm-input--readonly": e.readonly,
      "bm-input--clearable": e.clearable,
      "bm-input--autosize": e.autosize,
      "bm-input--show-word-limit": e.showWordLimit,
      "bm-input--primary": e.type === "primary",
      "bm-input--danger": e.type === "danger",
      "bm-input--alert": e.type === "alert",
      "bm-input--s": e.size === "s",
      "bm-input--m": e.size === "m",
      "bm-input--l": e.size === "l"
    })), t = s(), n = s(), f = (r) => {
      t.value?.classList.add("bm-input--focus");
    }, y = (r) => {
      t.value?.classList.remove("bm-input--focus"), e.ruleJudgeTime === "blur" && h();
    };
    function h() {
      e.inputRule && e.inputRule && !t.value?.value && t.value?.classList.add("bm-input--error");
    }
    function c() {
      e.noAnimate ? n.value && (n.value.value = "") : (t.value?.classList.add("bm-input--clearAnimate"), setTimeout(() => {
        n.value && (n.value.value = "");
      }, 250));
    }
    const m = b;
    function L() {
      n.value && (e.showWordLimit && u.value && (u.value.innerHTML = `${n.value.value.length}/${e.maxLength}`), m("oninput", n.value.value));
    }
    function g() {
      n.value && m("onchange", n.value.value);
    }
    return x(() => {
      t.value && t.value.addEventListener("animationend", () => {
        t.value?.classList.remove("bm-input--clearAnimate");
      });
    }), (r, A) => {
      const o = C("bm-icon");
      return a(), p("div", T, [
        e.variant === "text" || !e.variant || e.variant === "password" ? (a(), p("div", {
          key: 0,
          class: B(["bm-input", _.value]),
          ref_key: "inputRef",
          ref: t
        }, [
          e.variant === "password" ? (a(), l(o, {
            key: 0,
            icon: e.iconType || "fa-key",
            class: "bm-input__icon bm-input__icon--clear",
            onClick: c
          }, null, 8, ["icon"])) : i("", !0),
          e.iconType && !e.reverse && e.variant !== "password" ? (a(), l(o, {
            key: 1,
            icon: e.iconType,
            class: "bm-input__icon"
          }, null, 8, ["icon"])) : i("", !0),
          w("input", {
            ref_key: "inputContent",
            ref: n,
            type: e.variant === "password" ? "password" : "text",
            clearable: e.clearable,
            value: e.value,
            placeholder: e.placeholder,
            maxLength: e.maxLength,
            minLength: e.minLength,
            pattern: e.inputRule,
            autoComplete: e.autoComplete,
            class: "bm-input__inner",
            onBlur: y,
            onFocus: f,
            onInput: L,
            onChange: g
          }, null, 40, z),
          e.iconType && e.reverse && !e.clearable && e.variant !== "password" ? (a(), l(o, {
            key: 2,
            icon: e.iconType,
            class: "bm-input__icon bm-input__icon--reverse"
          }, null, 8, ["icon"])) : i("", !0),
          e.clearable ? (a(), l(o, {
            key: 3,
            icon: "fa-xmark",
            class: "bm-input__icon bm-input__icon--clear bm-input__icon--reverse",
            onClick: c
          })) : i("", !0),
          e.showWordLimit ? (a(), p("div", {
            key: 4,
            class: "bm-input__max-length",
            ref_key: "maxLengthRef",
            ref: u
          }, null, 512)) : i("", !0)
        ], 2)) : i("", !0)
      ]);
    };
  }
});
export {
  E as default
};
