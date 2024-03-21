//注册组件
import _Button from "./src/button.vue"; //导入组件
import type { App, Plugin } from "vue"; //只导入vue方法的类型
//这样做可以在类型检查阶段使用这些类型，而不会在最终的编译输出中包含它们。
type SFCWithInstall<T> = T & Plugin; 

const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => { 
    const name = (comp as any).name;
    //注册组件
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};

export const Button = withInstall(_Button);
export default Button;