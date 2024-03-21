const e = {
  className: {
    type: String,
    default: ""
  },
  style: {
    type: [Object, String, Array]
  },
  height: {
    type: Number,
    default: 500
  },
  width: {
    type: [Number, String],
    default: "100%"
  },
  itemHeight: {
    type: Number,
    default: 30
  },
  dynamic: {
    type: Boolean,
    default: !1
  },
  cache: {
    type: Number,
    default: 2
  },
  data: {
    type: Array,
    default: () => []
  }
};
export {
  e as default
};
