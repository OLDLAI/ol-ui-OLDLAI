import type icon from './icon.vue';
export declare const iconProps: {
    readonly name: {
        readonly type: StringConstructor;
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: () => number;
    };
    readonly class: {
        readonly type: StringConstructor;
    };
    readonly color: {
        readonly type: StringConstructor;
    };
};
export declare type IconInstance = InstanceType<typeof icon>;
