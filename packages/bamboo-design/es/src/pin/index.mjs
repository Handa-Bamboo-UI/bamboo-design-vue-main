import m from "./pin.vue.mjs";
import { Button as r } from "../button/index.mjs";
const s = (t) => (t.install = (n) => {
  const o = t.name;
  n.component(o, t), n.component("bm-button", r);
}, t), l = s(m);
export {
  l as Pin,
  l as default
};
