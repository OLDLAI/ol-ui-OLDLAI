import { App } from "vue";
import * as components from "./src/index";
export * from "./src/index";


export default {
  install: (app: App) => {
    for (let c in components) {
      app.use(components[c]);
    }
  },
}; 