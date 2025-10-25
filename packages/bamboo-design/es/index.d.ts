import { AllowedComponentProps } from 'vue';
import { App } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { CreateComponentPublicInstanceWithMixins } from 'vue';
import { DefineComponent } from 'vue';
import { GlobalComponents } from 'vue';
import { GlobalDirectives } from 'vue';
import { Plugin as Plugin_2 } from 'vue';
import { PublicProps } from 'vue';
import { VNodeProps } from 'vue';

export declare const Button: SFCWithInstall<{
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
    type?: string;
    outline?: boolean;
    size?: string;
    disabled?: boolean;
    href?: string;
    newWindow?: boolean;
    enterAnimate?: boolean;
    thinFont?: boolean;
    iconType?: string;
    iconOnly?: boolean;
    reverse?: boolean;
    darkMode?: boolean;
    block?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
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
    newWindow?: boolean;
    enterAnimate?: boolean;
    thinFont?: boolean;
    iconType?: string;
    iconOnly?: boolean;
    reverse?: boolean;
    darkMode?: boolean;
    block?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly<{
type?: string;
outline?: boolean;
size?: string;
disabled?: boolean;
href?: string;
newWindow?: boolean;
enterAnimate?: boolean;
thinFont?: boolean;
iconType?: string;
iconOnly?: boolean;
reverse?: boolean;
darkMode?: boolean;
block?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        default?(_: {}): any;
    };
})>;

declare const _default: {
    install: (app: App) => void;
};
export default _default;

export declare const Icon: SFCWithInstall_3<DefineComponent<    {
name: string;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
name: string;
}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>>;

export declare const Input: SFCWithInstall_2<DefineComponent<    {
type?: string;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
type?: string;
}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>>;

declare type SFCWithInstall<T> = T & Plugin_2;

declare type SFCWithInstall_2<T> = T & Plugin_2;

declare type SFCWithInstall_3<T> = T & Plugin_2;

export { }
