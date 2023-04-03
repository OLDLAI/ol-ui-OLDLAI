import { input } from './input/index';
import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    olButton: typeof components.Button;
    olInput: typeof components.Input;
    olIcon: typeof components.Icon;
  }
}
declare module 'https:////at.alicdn.com/t/font_3439532_mj2vbrlosb.js' { 
  const value: any
  export default value
}
export {};
