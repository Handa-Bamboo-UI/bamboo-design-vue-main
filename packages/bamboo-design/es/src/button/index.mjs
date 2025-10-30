import m from "./button.vue.mjs";
import { Icon as r } from "../Icon/index.mjs";
const s = (t) => (t.install = (n) => {
  const o = t.name;
  n.component(o, t), n.component("bm-icon", r);
}, t), c = s(m);
export {
  c as Button,
  c as default
};
