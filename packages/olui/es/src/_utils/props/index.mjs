const e = (t = !1) => ({
  type: Boolean,
  default: () => t
}), n = (t) => ({
  type: Number,
  default: () => t || null
}), o = (t = null) => ({
  type: Object,
  default: () => t
}), r = (t = null) => ({
  type: Function,
  default: () => t
});
export {
  e as setBooleanProp,
  r as setFunctionProp,
  n as setNumberProp,
  o as setObjectProp
};
