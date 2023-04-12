import type { ExtractPropTypes, CSSProperties } from 'vue';
export declare const Props: {
    /** 触发距离 */
    distance: import("../../_utils").BasicType<NumberConstructor, number | null>;
    /** 样式列表 */
    styles: import("../../_utils").BasicType<import("vue").PropType<CSSProperties>, null>;
    /** 是否 loading */
    loading: import("../../_utils").BasicType<BooleanConstructor, boolean>;
    /** 滚动触底时触发的回调 */
    onScrollEnd: import("../../_utils").BasicType<import("vue").PropType<ScrollCallback>, null>;
    /** 滚动时触发的回调 */
    onScrollWhen: import("../../_utils").BasicType<import("vue").PropType<ScrollCallback>, null>;
};
/** infinite-scrolling 组件 props 类型 */
export declare type InfiniteScrollingProps = ExtractPropTypes<typeof Props>;
/**
* 滚动触发的回调类型
*
* @param { number }  distance 滚动距离
*/
export declare type ScrollCallback = (distance: number) => void;
