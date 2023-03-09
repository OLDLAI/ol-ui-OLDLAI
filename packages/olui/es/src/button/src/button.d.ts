import type { ExtractPropTypes } from 'vue';
import type button from './button.vue';
export declare const buttonTypes: readonly ["default", "primary", "success", "warning", "danger"];
export declare const IColor: readonly ["black", "gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"];
export declare const buttonProps: {
    readonly type: {
        readonly type: StringConstructor;
        readonly values: readonly ["default", "primary", "success", "warning", "danger"];
        readonly default: "default";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly icon: {
        readonly type: StringConstructor;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly value: readonly ["black", "gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"];
        readonly default: "blue";
    };
};
export declare type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export declare type ButtonType = ButtonProps['type'];
export declare type ButtonInstance = InstanceType<typeof button>;
