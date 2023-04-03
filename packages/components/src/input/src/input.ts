export const InputProps = {
    modelValue: {
      type: String,
    },
    hasClear: {
      type: Boolean,
      default: (): boolean => false,
    },
    placeholder: {
      type: String,
      default: (): string => '请输入',
    },
  }
  
  export const Emits = {
    'update:modelValue': (value: unknown): boolean => {
      return typeof value === 'string' || typeof value === 'number'
    },
    change(value: unknown) {
      return typeof value
    },
}