import type { ExtractPropTypes } from 'vue'
import type button from './button.vue'

export const buttonTypes = ['default', 'primary', 'success', 'warning', 'danger'] as const
export const IColor = ['black' , 'gray' ,'red' , 'yellow' , 'green','blue','indigo','purple','pink'] as const
/* export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green'|'blue'|'indigo'|'purple'|'pink' */
export const buttonProps = {
  type: {
    type: String,
    values: buttonTypes,
    default: 'default',
  },
  disabled: {
    type: Boolean,
    default: () => false,
  },
  icon: {
    type: String,
  },
  loading: {
    type: Boolean,
    default: (): boolean => false,
  },
  /* color: {
       type: String as PropType<IColor>,
       default: 'blue'  // 设定默认颜色
    }, */
  color: {
    type: String,
    value:IColor,
    default: 'blue'  // 设定默认颜色
   },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonType = ButtonProps['type']

export type ButtonInstance = InstanceType<typeof button>
