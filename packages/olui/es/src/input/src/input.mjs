const t = {
  modelValue: {
    type: String
  },
  hasClear: {
    type: Boolean,
    default: () => !1
  },
  placeholder: {
    type: String,
    default: () => "请输入"
  }
}, o = {
  "update:modelValue": (e) => typeof e == "string" || typeof e == "number",
  change(e) {
    return typeof e;
  }
};
export {
  o as Emits,
  t as InputProps
};
