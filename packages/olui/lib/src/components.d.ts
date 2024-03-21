import { input } from './input/index';
import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    olButton: typeof components.Button;
    olInput: typeof components.Input;
    olIcon: typeof components.Icon;
    olInfinite:typeof components.Infinite
    olInfinite1:typeof components.Infinite1
  }
}

export {};
