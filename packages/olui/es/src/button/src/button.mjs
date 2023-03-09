const e = ["default", "primary", "success", "warning", "danger"], t = ["black", "gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"], l = {
  type: {
    type: String,
    values: e,
    default: "default"
  },
  disabled: {
    type: Boolean,
    default: () => !1
  },
  icon: {
    type: String
  },
  loading: {
    type: Boolean,
    default: () => !1
  },
  /* color: {
       type: String as PropType<IColor>,
       default: 'blue'  // 设定默认颜色
    }, */
  color: {
    type: String,
    value: t,
    default: "blue"
    // 设定默认颜色
  }
};
export {
  t as IColor,
  l as buttonProps,
  e as buttonTypes
};
