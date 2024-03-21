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
}), u = (t) => typeof t == "number", s = (t) => typeof t == "string";
export {
  u as isNumber,
  s as isString,
  e as setBooleanProp,
  r as setFunctionProp,
  n as setNumberProp,
  o as setObjectProp
};
