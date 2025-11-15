<template>
  <div class="input-container">
    <div class="bm-input" ref="inputRef" :class="inputStyle" v-if="inputProps.variant === 'text' || !inputProps.variant || inputProps.variant === 'password'">
        <bm-icon
        v-if="inputProps.variant === 'password'"
        :icon="inputProps.iconType || 'fa-key'"
        class="bm-input__icon bm-input__icon--clear"
        @click="handleClear"
      ></bm-icon>
        <bm-icon
        v-if="inputProps.iconType && !inputProps.reverse && inputProps.variant !== 'password'"
        :icon="inputProps.iconType"
        class="bm-input__icon"
      ></bm-icon>
      <input
        ref="inputContent"
        :type="inputProps.variant === 'password' ? 'password' : 'text'"
        :clearable="inputProps.clearable"
        :value="inputProps.value"
        :placeholder="inputProps.placeholder"
        :maxLength="inputProps.maxLength"
        :minLength="inputProps.minLength"
        :pattern="inputProps.inputRule"
        :autoComplete="inputProps.autoComplete"
        class="bm-input__inner"
        :size="inputProps.size || 'm'"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="oninput"
        @change="onchange"
      />
      <bm-icon
        v-if="
          inputProps.iconType && inputProps.reverse && !inputProps.clearable && inputProps.variant !== 'password'
        "
        :icon="inputProps.iconType"
        class="bm-input__icon bm-input__icon--reverse"
      ></bm-icon>
      <bm-icon
        v-if="inputProps.clearable"
        icon="fa-xmark"
        class="bm-input__icon bm-input__icon--clear bm-input__icon--reverse"
        @click="handleClear"
      ></bm-icon>
    <div v-if="inputProps.showWordLimit" class="bm-input__max-length" ref="maxLengthRef">
         
    </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "bm-input",
});
</script>
<script lang="ts" setup>
import "./style/index.less";
import { computed, onMounted ,watch} from "vue";
var maxLengthRef = ref<HTMLInputElement>();
type inputProps = {
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
};
const inputProps = defineProps<inputProps>();
const inputStyle = computed(() => {
  return {
    "bm-input--disabled": inputProps.disabled,
    "bm-input--readonly": inputProps.readonly,
    "bm-input--clearable": inputProps.clearable,
    "bm-input--autosize": inputProps.autosize,
    "bm-input--show-word-limit": inputProps.showWordLimit,
    "bm-input--primary": inputProps.type === "primary",
    "bm-input--danger": inputProps.type === "danger",
    "bm-input--alert": inputProps.type === "alert",
    "bm-input--s": inputProps.size === "s",
    "bm-input--m": inputProps.size === "m",
    "bm-input--l": inputProps.size === "l",
  };
});
const inputRef = ref<HTMLInputElement>();
const inputContent = ref<HTMLInputElement>();
const handleFocus = (e: FocusEvent) => {
  inputRef.value?.classList.add("bm-input--focus");
};
const handleBlur = (e: FocusEvent) => {
  inputRef.value?.classList.remove("bm-input--focus");
  if (inputProps.ruleJudgeTime === "blur") {
    validateInput();
  }
};
function validateInput() {
  if (inputProps.inputRule) {
    const rule = inputProps.inputRule;
    if (rule && !inputRef.value?.value) {
      inputRef.value?.classList.add("bm-input--error");
    }
  }
}
function handleClear() {
  if (!inputProps.noAnimate) {
    inputRef.value?.classList.add("bm-input--clearAnimate");

  setTimeout(() => {
    if (inputContent.value) {
      inputContent.value.value = "";
    }
  }, 250);
    }
    else{
        if (inputContent.value) {
          inputContent.value.value = "";
        }
    }
}

const emit = defineEmits(["oninput", "onchange"]);
function oninput(){
    if (inputContent.value) {
        if (inputProps.showWordLimit && maxLengthRef.value) {
          maxLengthRef.value.innerHTML = `${inputContent.value.value.length}/${inputProps.maxLength}`;
        }
        emit("oninput", inputContent.value.value);
    }
}
function onchange(){
    if (inputContent.value) {
        emit("onchange", inputContent.value.value);
    }
}
onMounted(() => {
  if (inputRef.value) {
    inputRef.value.addEventListener("animationend", () => {
      inputRef.value?.classList.remove("bm-input--clearAnimate");
    });
  } 
});
</script>
