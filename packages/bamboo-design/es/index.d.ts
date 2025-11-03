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
    loading?: boolean;
    bubble?: string;
    bubbleReverse?: boolean;
    bubbleType?: string;
    menu?: boolean;
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
    loading?: boolean;
    bubble?: string;
    bubbleReverse?: boolean;
    bubbleType?: string;
    menu?: boolean;
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
loading?: boolean;
bubble?: string;
bubbleReverse?: boolean;
bubbleType?: string;
menu?: boolean;
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
type?: string;
size?: string;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
type?: string;
size?: string;
}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>>;

export declare const Input: SFCWithInstall_2<DefineComponent<    {
placeholder?: string;
disabled?: boolean;
readonly?: boolean;
clearable?: boolean;
type?: string;
autosize?: boolean;
autoComplete?: string;
prefixIcon?: string;
suffixIcon?: string;
maxLength?: number;
showWordLimit?: boolean;
minLength?: number;
errorAnimate?: boolean;
inputRule?: string;
ruleJudgeTime?: string;
variant?: string;
value?: string;
iconType?: string;
reverse?: boolean;
noAnimate?: boolean;
size?: string;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
oninput: (...args: any[]) => void;
onchange: (...args: any[]) => void;
}, string, PublicProps, Readonly<{
placeholder?: string;
disabled?: boolean;
readonly?: boolean;
clearable?: boolean;
type?: string;
autosize?: boolean;
autoComplete?: string;
prefixIcon?: string;
suffixIcon?: string;
maxLength?: number;
showWordLimit?: boolean;
minLength?: number;
errorAnimate?: boolean;
inputRule?: string;
ruleJudgeTime?: string;
variant?: string;
value?: string;
iconType?: string;
reverse?: boolean;
noAnimate?: boolean;
size?: string;
}> & Readonly<{
onOninput?: ((...args: any[]) => any) | undefined;
onOnchange?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {
inputRef: HTMLDivElement;
inputContent: HTMLInputElement;
maxLengthRef: HTMLDivElement;
}, HTMLDivElement>>;

export declare type InputProps = InstanceType<typeof Input>;

export declare const PinGroup: SFCWithInstall_4<{
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
    direction?: "horizontal" | "vertical";
    up?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
    gap?: string;
    sleep?: boolean;
    sub?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
    P: {};
    B: {};
    D: {};
    C: {};
    M: {};
    Defaults: {};
    }, Readonly<{
    direction?: "horizontal" | "vertical";
    up?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
    gap?: string;
    sleep?: boolean;
    sub?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly<{
direction?: "horizontal" | "vertical";
up?: boolean;
bottom?: boolean;
left?: boolean;
right?: boolean;
gap?: string;
sleep?: boolean;
sub?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;

declare type SFCWithInstall<T> = T & Plugin_2;

declare type SFCWithInstall_2<T> = T & Plugin_2;

declare type SFCWithInstall_3<T> = T & Plugin_2;

declare type SFCWithInstall_4<T> = T & Plugin_2;

export { }
