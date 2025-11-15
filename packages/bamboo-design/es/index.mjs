import * as o from "./src/index.mjs";
import { library as e } from "./node_modules/.pnpm/@fortawesome_fontawesome-svg-core@7.1.0/node_modules/@fortawesome/fontawesome-svg-core/index.mjs";
import { fas as t } from "./node_modules/.pnpm/@fortawesome_free-solid-svg-icons@7.1.0/node_modules/@fortawesome/free-solid-svg-icons/index.mjs";
import { fab as r } from "./node_modules/.pnpm/@fortawesome_free-brands-svg-icons@7.1.0/node_modules/@fortawesome/free-brands-svg-icons/index.mjs";
import { far as a } from "./node_modules/.pnpm/@fortawesome_free-regular-svg-icons@7.1.0/node_modules/@fortawesome/free-regular-svg-icons/index.mjs";
import { FontAwesomeIcon as c } from "./node_modules/.pnpm/@fortawesome_vue-fontawesom_5bedabf27afa8e5afa12efe6d8400b4a/node_modules/@fortawesome/vue-fontawesome/index.es.mjs";
const l = (n) => typeof n == "object" && n !== null && "install" in n, f = (n) => typeof n == "object" && n !== null && ("setup" in n || "render" in n || "template" in n), y = {
  install: (n) => {
    e.add(...Object.values(t), ...Object.values(r), ...Object.values(a)), n.component("fa-icon", c), Object.entries(o).forEach(([i, s]) => {
      f(s) && i !== "MessageBox" && n.component(i, s), l(s) && i !== "MessageBoxPlugin" && n.use(s);
    });
  }
};
export {
  y as default
};
