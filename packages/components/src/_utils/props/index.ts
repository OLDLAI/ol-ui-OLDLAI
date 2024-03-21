/* import { isNumber } from '..' */
import type { PropType } from 'vue'

/**
 * 校验器类型
 *
 * @param { * } val 校验的值
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Validator = (val: any) => boolean

/**
 * 返回值类型接口
 *
 * @param { Object } type 参数类型
 * @param { Function } default 默认值
 * @param { Function } validator 校验器
 */
export interface BasicType<T, F> {
  readonly type: T
  readonly default: () => F
  readonly validator?: Validator
}

/**
 * 设置 boolean 类型的 prop 参数
 *
 * @param { boolean } [defaultVal = false] 默认值
 * @returns { Object } 配置对象
 */
export const setBooleanProp = (
  defaultVal = false
): BasicType<BooleanConstructor, boolean> => {
  return {
    type: Boolean,
    default: (): boolean => defaultVal
  } as const
}

/**
 * 设置 number 类型 props 参数
 *
 * @param { number } [defaultVal] 默认值
 * @returns { Object } 配置对象
 */
export const setNumberProp = <T extends number>(
  defaultVal?: null | T
): BasicType<NumberConstructor, number | null> => {
  return {
    type: Number,
    default: (): T | null => (defaultVal ? defaultVal : null)
  } as const
}

/**
 * 设置 string 类型的 prop 参数
 *
 * @param { string } [defaultVal] 默认值
 * @param { Function } [validator] 校验器
 * @returns { Object } 配置对象
 */
export const setStringProp = <T extends string>(
  defaultVal?: null | T,
  validator?: Validator
): BasicType<PropType<T>, T | null> => {
  if (validator) {
    return {
      type: String as unknown as PropType<T>,
      default: (): T | null => defaultVal || null,
      validator
    } as const
  }

  return {
    type: String as unknown as PropType<T>,
    default: (): T | null => defaultVal || null
  } as const
}

/**
 * 设置 string & number 类型 props 参数
 *
 * @param { string | number } [defaultVal] 默认值
 * @returns { Object } 配置对象
 */
export const setStringNumberProp = <T extends string | number>(
  defaultVal?: T
): BasicType<PropType<string | number>, string | number | null> => {
  return {
    type: [String, Number] as PropType<string | number>,
    default: (): T | null => defaultVal || null
  } as const
}

/**
 * 设置 object 类型 props 参数
 *
 * @param { Object } [defaultVal] 默认值
 * @returns { Object } 配置对象
 */
export const setObjectProp = <T extends object>(
  defaultVal = null
): BasicType<PropType<T>, null> => {
  return {
    type: Object as PropType<T>,
    default: () => defaultVal
  } as const
}

/**
 * 设置 function 类型 props 参数
 *
 * @param { Function } [defaultVal] 默认值
 * @returns { Object } 配置对象
 */
export const setFunctionProp = <T extends Function>(
  defaultVal = null
): BasicType<PropType<T>, null> => {
  return {
    type: Function as PropType<T>,
    default: () => defaultVal
  } as const
}

/**
 * 设置 array 类型 props 参数
 *
 * @param { Array } [defaultVal] 默认值
 * @returns { Object } 配置对象
 */
export const setArrayProp = <T>(
  defaultVal?: null | T
): BasicType<PropType<T>, T | null> => {
  return {
    type: Array as unknown as PropType<T>,
    default: (): T | null => defaultVal || null
  }
}

export const isNumber = (val: any): val is number => typeof val === "number";
export const isString = (val: unknown): val is string => typeof val === "string";