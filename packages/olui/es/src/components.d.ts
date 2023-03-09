import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    olButton: typeof components.Button;
    olIcon: typeof components.Icon;
  }
}
export {};
