export declare const InputProps: {
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
    };
    hasClear: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: () => string;
    };
};
export declare const Emits: {
    'update:modelValue': (value: unknown) => boolean;
    change(value: unknown): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
};
