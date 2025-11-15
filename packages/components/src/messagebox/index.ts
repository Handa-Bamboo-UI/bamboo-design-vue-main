import MessageBoxComponent from "./messagebox.vue";
import { createVNode, render, App, ref, nextTick, reactive, watchEffect } from "vue";
import BmIcon from '../Icon/Icon.vue'; 
import BmButton from '../button/button.vue';
import type {
  MessageBoxOptions,
  MessageBoxProps,
  MessageBoxResult,
  MessageBoxType,
} from "./props";
import { DEFAULT_CONFIG } from "./props";

let instanceCount = 0;
let globalConfig = { ...DEFAULT_CONFIG };
 declare global {
   interface Window {
     _appContext: App['_context'];
   }
 }
 
 

export function createMessageBox(
  type: string,
  options: Record<string, any> = {}
): Promise<any> {
  return new Promise((resolve, reject) => {
 
    const visible = ref(false);

    const props = reactive({
      ...options,
      type,
      visible: visible.value,
      onConfirm: (value?: string) => {
        resolve({ action: "confirm", value });
        visible.value = false;
      },
      onCancel: () => {
        reject({ action: "cancel" });
        visible.value = false;
      },
      onClose: () => {
        reject({ action: "close" });
        visible.value = false;
      },
      "onUpdate:visible": (newVisible: boolean) => {
        visible.value = newVisible;
        if (!newVisible) {
          setTimeout(() => destroyInstance(), 300);
        }
      },
      zIndex: 1000 + instanceCount,
    });

    const container = document.createElement("div");
    document.body.appendChild(container);
    instanceCount++;

    let vnode = createVNode(MessageBoxComponent, props);
 
    render(vnode, container);


    watchEffect(() => {
      vnode = createVNode(MessageBoxComponent, { ...props, visible: visible.value });
      render(vnode, container);
    });

    const destroyInstance = () => {
      render(null, container);
      document.body.removeChild(container);
      instanceCount--;
    };


    nextTick(() => {
      visible.value = true;
    });
  });
}



export const MessageBox = {
  info(options: MessageBoxOptions = {}) {
    return createMessageBox("info", options);
  },
  alert(options: MessageBoxOptions = {}) {
    return createMessageBox("alert", options);
  },
  prompt(options: MessageBoxOptions = {}) {
    return createMessageBox("prompt", options);
  },
  error(options: MessageBoxOptions = {}) {
    return createMessageBox("error", options);
  },
  setDefaults: (config: Partial<MessageBoxOptions>) => {
    globalConfig = { ...globalConfig, ...config };
  },
  closeAll: () => {
    document
      .querySelectorAll<HTMLDivElement>('[id^="message-box-"]')
      .forEach((el) => {
        const vnode = (el as any)._vnode;
        if (vnode?.component) {
          vnode.component.emit("update:visible", false);
        }
      });
  },
  message: message,
  
};
export const MessageBoxPlugin = {
  install: (app: App) => {
 
    app.component("bm-message", MessageBoxComponent);
    app.config.globalProperties.$alert = MessageBox.alert;
    app.config.globalProperties.$error = MessageBox.error;
    app.config.globalProperties.$prompt = MessageBox.prompt;
    app.config.globalProperties.$message = message;
    app.provide("messageBox", MessageBox);
    app.provide("message", message);
  },
};
export function message(
  type: MessageBoxType | MessageBoxOptions | string,
  options?: MessageBoxOptions | string
): Promise<MessageBoxResult> {
  let finalType: MessageBoxType = "alert";
  let finalOptions: MessageBoxOptions = {};
  if (options === undefined) {
    if (typeof type === "string") {
      finalOptions = { message: type };
    } else {
      finalType = "alert";
      finalOptions = type as MessageBoxOptions;
    }
  } else {
    const firstParam = type as string;
    const validTypes: MessageBoxType[] = ["alert", "error", "prompt", "info"];
    if (validTypes.includes(firstParam as MessageBoxType)) {
      finalType = firstParam as MessageBoxType;
      if (typeof options === "string") {
        finalOptions = { message: options };
      } else {
        finalOptions = options as MessageBoxOptions;
      }
    } else {
      finalOptions = { message: firstParam };
      if (typeof options === "object" && options !== null) {
        finalOptions = { ...finalOptions, ...options };
      }
    }
  }
  switch (finalType) {
    case "alert":
      return MessageBox.alert(finalOptions);
    case "error":
      return MessageBox.error(finalOptions);
    case "prompt":
      return MessageBox.prompt(finalOptions);
    case "info":
      return MessageBox.info(finalOptions);
      default:
        return MessageBox.alert(finalOptions);
  }
}
export default MessageBoxPlugin;
