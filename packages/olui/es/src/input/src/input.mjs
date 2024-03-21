const t = {
  modelValue: {
    type: [Number, String]
  },
  hasClear: {
    type: Boolean,
    default: () => !1
  },
  placeholder: {
    type: String,
    default: () => "请输入"
  }
}, r = {
  "update:modelValue": (e) => typeof e == "string" || typeof e == "number",
  change(e) {
    return typeof e;
  }
};
export {
  r as Emits,
  t as InputProps
};
