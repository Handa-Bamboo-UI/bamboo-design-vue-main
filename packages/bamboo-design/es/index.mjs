import * as a from "./src/index.mjs";
import "./packages/components/src/style/global.css";
import { library as c } from "./node_modules/.pnpm/@fortawesome_fontawesome-svg-core@7.1.0/node_modules/@fortawesome/fontawesome-svg-core/index.mjs";
import { fas as f } from "./node_modules/.pnpm/@fortawesome_free-solid-svg-icons@7.1.0/node_modules/@fortawesome/free-solid-svg-icons/index.mjs";
import { fab as l } from "./node_modules/.pnpm/@fortawesome_free-brands-svg-icons@7.1.0/node_modules/@fortawesome/free-brands-svg-icons/index.mjs";
import { far as m } from "./node_modules/.pnpm/@fortawesome_free-regular-svg-icons@7.1.0/node_modules/@fortawesome/free-regular-svg-icons/index.mjs";
import { FontAwesomeIcon as u } from "./node_modules/.pnpm/@fortawesome_vue-fontawesom_5bedabf27afa8e5afa12efe6d8400b4a/node_modules/@fortawesome/vue-fontawesome/index.es.mjs";
const n = (s) => typeof s == "object" && s !== null && "install" in s, i = (s) => typeof s == "object" && s !== null && ("setup" in s || "render" in s || "template" in s), {
  MessageBox: t,
  MessageBoxPlugin: r
} = a, y = {
  install: (s) => {
    c.add(...Object.values(f), ...Object.values(l), ...Object.values(m)), s.component("fa-icon", u), i(t) && s.component("MessageBox", t), n(r) && s.use(r), Object.entries(a).forEach(([o, e]) => {
      i(e) && o !== "MessageBox" && s.component(o, e), n(e) && o !== "MessageBoxPlugin" && s.use(e);
    });
  }
};
export {
  y as default
};
