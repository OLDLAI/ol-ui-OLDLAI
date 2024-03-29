import * as o from "./src/index.mjs";
import { Button as i } from "./src/button/index.mjs";
import { Input as x } from "./src/input/index.mjs";
import { Icon as s } from "./src/icon/index.mjs";
import { Infinite as l } from "./src/infinite-scrolling/index.mjs";
import { Infinite1 as I } from "./src/virtual-list/index.mjs";
const e = {
  install: (t) => {
    for (let r in o)
      t.use(o[r]);
  }
};
export {
  i as Button,
  s as Icon,
  l as Infinite,
  I as Infinite1,
  x as Input,
  e as default
};
