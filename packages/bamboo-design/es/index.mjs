import * as t from "./src/index.mjs";
import { library as o } from "./node_modules/.pnpm/@fortawesome_fontawesome-svg-core@7.1.0/node_modules/@fortawesome/fontawesome-svg-core/index.mjs";
import { fas as m } from "./node_modules/.pnpm/@fortawesome_free-solid-svg-icons@7.1.0/node_modules/@fortawesome/free-solid-svg-icons/index.mjs";
import { fab as a } from "./node_modules/.pnpm/@fortawesome_free-brands-svg-icons@7.1.0/node_modules/@fortawesome/free-brands-svg-icons/index.mjs";
import { far as i } from "./node_modules/.pnpm/@fortawesome_free-regular-svg-icons@7.1.0/node_modules/@fortawesome/free-regular-svg-icons/index.mjs";
import { FontAwesomeIcon as n } from "./node_modules/.pnpm/@fortawesome_vue-fontawesom_5bedabf27afa8e5afa12efe6d8400b4a/node_modules/@fortawesome/vue-fontawesome/index.es.mjs";
import { Button as b } from "./src/button/index.mjs";
import { Input as j } from "./src/input/index.mjs";
import { Icon as I } from "./src/Icon/index.mjs";
import { Pin as y } from "./src/pin/index.mjs";
import { PinGroup as w } from "./src/pinGroup/index.mjs";
const l = {
  install: (r) => {
    o.add(...Object.values(m)), o.add(...Object.values(a)), o.add(...Object.values(i)), r.component("fa-icon", n);
    for (let e in t)
      r.use(t[e]);
  }
};
export {
  b as Button,
  I as Icon,
  j as Input,
  y as Pin,
  w as PinGroup,
  l as default
};
