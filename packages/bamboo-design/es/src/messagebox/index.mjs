import d from "./messagebox.vue.mjs";
import { ref as x, reactive as C, createVNode as v, render as m, watchEffect as y, nextTick as P } from "vue";
import { DEFAULT_CONFIG as T } from "./props.mjs";
let u = 0, p = { ...T };
function i(e, o = {}) {
  return new Promise((l, r) => {
    const t = x(!1), c = C({
      ...o,
      type: e,
      visible: t.value,
      onConfirm: (a) => {
        l({ action: "confirm", value: a }), t.value = !1;
      },
      onCancel: () => {
        r({ action: "cancel" }), t.value = !1;
      },
      onClose: () => {
        r({ action: "close" }), t.value = !1;
      },
      "onUpdate:visible": (a) => {
        t.value = a, a || setTimeout(() => b(), 300);
      },
      zIndex: 1e3 + u
    }), s = document.createElement("div");
    document.body.appendChild(s), u++;
    let f = v(d, c);
    m(f, s), y(() => {
      f = v(d, { ...c, visible: t.value }), m(f, s);
    });
    const b = () => {
      m(null, s), document.body.removeChild(s), u--;
    };
    P(() => {
      t.value = !0;
    });
  });
}
const n = {
  info(e = {}) {
    return i("info", e);
  },
  alert(e = {}) {
    return i("alert", e);
  },
  prompt(e = {}) {
    return i("prompt", e);
  },
  error(e = {}) {
    return i("error", e);
  },
  setDefaults: (e) => {
    p = { ...p, ...e };
  },
  closeAll: () => {
    document.querySelectorAll('[id^="message-box-"]').forEach((e) => {
      const o = e._vnode;
      o?.component && o.component.emit("update:visible", !1);
    });
  },
  message: g
}, _ = {
  install: (e) => {
    e.component("bm-message", d), e.config.globalProperties.$alert = n.alert, e.config.globalProperties.$error = n.error, e.config.globalProperties.$prompt = n.prompt, e.config.globalProperties.$message = g, e.provide("messageBox", n), e.provide("message", g);
  }
};
function g(e, o) {
  let l = "alert", r = {};
  if (o === void 0)
    typeof e == "string" ? r = { message: e } : (l = "alert", r = e);
  else {
    const t = e;
    ["alert", "error", "prompt", "info"].includes(t) ? (l = t, typeof o == "string" ? r = { message: o } : r = o) : (r = { message: t }, typeof o == "object" && o !== null && (r = { ...r, ...o }));
  }
  switch (l) {
    case "alert":
      return n.alert(r);
    case "error":
      return n.error(r);
    case "prompt":
      return n.prompt(r);
    case "info":
      return n.info(r);
    default:
      return n.alert(r);
  }
}
export {
  n as MessageBox,
  _ as MessageBoxPlugin,
  i as createMessageBox,
  _ as default,
  g as message
};
