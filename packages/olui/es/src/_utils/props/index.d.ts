import type { PropType } from 'vue';
/**
 * 校验器类型
 *
 * @param { * } val 校验的值
 */
export declare type Validator = (val: any) => boolean;
/**
 * 返回值类型接口
 *
 * @param { Object } type 参数类型
 * @param { Function } default 默认值
 * @param { Function } validator 校验器
 */
export interface BasicType<T, F> {
    readonly type: T;
    readonly default: () => F;
    readonly validator?: Validator;
}
/**
 * 设置 boolean 类型的 prop 参数
 *
 * @param { boolean } [defaultVal = false] 默认值
 * @returns { Object } 配置对象
 */
export declare const setBooleanProp: (defaultVal?: boolean) => BasicType<BooleanConstructor, boolean>;
/**
 * 设置 number 类型 props 参数
 *
 * @param { number } [defaultVal] 默认值
 * @returns { Object } 配置对象
 */
export declare const setNumberProp: <T extends number>(defaultVal?: T | null | undefined) => BasicType<NumberConstructor, number | null>;
/**
 * 设置 string 类型的 prop 参数
 *
 * @param { string } [defaultVal] 默认值
 * @param { Function } [validator] 校验器
 * @returns { Object } 配置对象
 */
export declare const setStringProp: <T extends string>(defaultVal?: T | null | undefined, validator?: Validator | undefined) => BasicType<PropType<T>, T | null>;
/**
 * 设置 string & number 类型 props 参数
 *
 * @param { string | number } [defaultVal] 默认值
 * @returns { Object } 配置对象
 */
export declare const setStringNumberProp: <T extends string | number>(defaultVal?: T | undefined) => BasicType<PropType<string | number>, string | number | null>;
/**
 * 设置 object 类型 props 参数
 *
 * @param { Object } [defaultVal] 默认值
 * @returns { Object } 配置对象
 */
export declare const setObjectProp: <T extends object>(defaultVal?: null) => BasicType<PropType<T>, null>;
/**
 * 设置 function 类型 props 参数
 *
 * @param { Function } [defaultVal] 默认值
 * @returns { Object } 配置对象
 */
export declare const setFunctionProp: <T extends Function>(defaultVal?: null) => BasicType<PropType<T>, null>;
/**
 * 设置 array 类型 props 参数
 *
 * @param { Array } [defaultVal] 默认值
 * @returns { Object } 配置对象
 */
export declare const setArrayProp: <T>(defaultVal?: T | null | undefined) => BasicType<PropType<T>, T | null>;
export declare const isNumber: (val: any) => val is number;
export declare const isString: (val: unknown) => val is string;
