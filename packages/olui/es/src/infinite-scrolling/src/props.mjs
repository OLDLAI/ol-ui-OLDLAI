import { setNumberProp as e, setObjectProp as r, setBooleanProp as t, setFunctionProp as o } from "../../_utils/props/index.mjs";
const s = {
  /** 触发距离 */
  distance: e(0),
  /** 样式列表 */
  styles: r(),
  /** 是否 loading */
  loading: t(),
  /** 滚动触底时触发的回调 */
  onScrollEnd: o(),
  /** 滚动时触发的回调 */
  onScrollWhen: o()
};
export {
  s as Props
};
