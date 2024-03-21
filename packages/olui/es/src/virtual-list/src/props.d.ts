import { StyleValue, PropType } from "vue";
declare const listProps: {
    className: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: PropType<StyleValue>;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    dynamic: {
        type: BooleanConstructor;
        default: boolean;
    };
    cache: {
        type: NumberConstructor;
        default: number;
    };
    data: {
        type: ArrayConstructor;
        default: () => never[];
    };
};
export default listProps;
