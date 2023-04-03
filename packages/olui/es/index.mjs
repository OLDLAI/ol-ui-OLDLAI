import * as o from "./src/index.mjs";
import { Button as p } from "./src/button/index.mjs";
import { Input as i } from "./src/input/index.mjs";
import { Icon as s } from "./src/icon/index.mjs";
const e = {
  install: (t) => {
    for (let r in o)
      t.use(o[r]);
  }
};
export {
  p as Button,
  s as Icon,
  i as Input,
  e as default
};
