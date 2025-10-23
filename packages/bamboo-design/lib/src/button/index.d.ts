import { Plugin } from 'vue';
type SFCWithInstall<T> = T & Plugin;
export declare const Button: SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
        type?: string;
        outline?: boolean;
        size?: string;
        disabled?: boolean;
        href?: string;
        enterAnimate?: boolean;
        thinFont?: boolean;
        icon?: boolean;
        iconOnly?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        type?: string;
        outline?: boolean;
        size?: string;
        disabled?: boolean;
        href?: string;
        enterAnimate?: boolean;
        thinFont?: boolean;
        icon?: boolean;
        iconOnly?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<{
    type?: string;
    outline?: boolean;
    size?: string;
    disabled?: boolean;
    href?: string;
    enterAnimate?: boolean;
    thinFont?: boolean;
    icon?: boolean;
    iconOnly?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        default?(_: {}): any;
    };
})>;
export default Button;
