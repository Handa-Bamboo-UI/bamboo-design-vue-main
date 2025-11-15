import type {VNode} from 'vue'
export type MessageBoxType = 'info' | 'alert' | 'prompt' | 'error' | 'success' | 'check'
export interface MessageBoxProps {
    visible?: boolean;
    type?: MessageBoxType;
    title?: string;
    message?: string | VNode;
    confirmButtonText?: string;
    cancelButtonText?: string;
    showCancelButton?: boolean;
    closeOnClickModal?: boolean;
    closeOnPressEscape?: boolean;
    autoClose?: boolean;
    delay?: number;
    placeholder?: string;
    defaultValue?: string;
    zIndex?: number;
    customIcon?: string;
    size?: 's' | 'm' | 'l';
}
export interface MessageBoxOptions extends Omit<MessageBoxProps, 'visible'> {}//Omit排除指定参数，其余参数继承
export interface MessageBoxResult {
    action:'confirm'|'cancel' | 'close';
    value?:string;
}
export const DEFAULT_CONFIG: MessageBoxOptions = {
    type: 'info',
    title:  '标题',
    message: '这是一条提示信息',
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    showCancelButton: false,
    size: 'm',
    closeOnClickModal: true,
    closeOnPressEscape: true,
    autoClose: true,
    delay: 0,
    placeholder: '请输入',
    defaultValue: '',
    customIcon: '',
}