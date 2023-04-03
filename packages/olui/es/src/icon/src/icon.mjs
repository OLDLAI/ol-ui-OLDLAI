const t = {
  name: {
    type: String
  },
  size: {
    type: Number || String,
    default: () => 22
  },
  class: {
    type: String
  },
  color: {
    type: String
  }
};
export {
  t as iconProps
};
