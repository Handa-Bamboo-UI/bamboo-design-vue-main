<template>
  <div :class="buttonOuterStyle">
    <!--custom link-->
    <div
      @click="handleClick"
      v-if="buttonProps.type === 'link'"
      :href="buttonProps.href"
      class="bm-button custom-link"
      :class="buttonStyle"
    >
      <bm-icon
        class="bm-btn-icon"
        :type="buttonProps.iconType || 'fa-check'"
        size="1x"
        v-if="
          (buttonProps.iconType || buttonProps.iconOnly) && !buttonProps.reverse
        "
      >
      </bm-icon>
      <div v-if="!buttonProps.iconOnly" class="text">
        <slot>默认按钮</slot>
      </div>
      <bm-icon
        class="bm-btn-icon"
        :type="buttonProps.iconType || 'fa-check'"
        size="1x"
        v-if="
          (buttonProps.iconType || buttonProps.iconOnly) && buttonProps.reverse
        "
      >
      </bm-icon>
    </div>
    <!--default button-->
    <button
      v-else
      class="bm-button"
      :class="buttonStyle"
      :data-bubble="buttonProps.bubble"
    >
      <Transition name="loading">
        <bm-icon
          class="bm-btn-icon spinner"
          type="fa-refresh"
          size="1x"
          v-if="buttonProps.loading"
        >
        </bm-icon>
      </Transition>
      <bm-icon
        class="bm-btn-icon"
        :type="buttonProps.iconType || 'fa-check'" 
        size="1x"
        v-if="
          (buttonProps.iconType || buttonProps.iconOnly) &&
          !buttonProps.reverse &&
          !buttonProps.loading
        "
      >
      </bm-icon>
      <div v-if="!buttonProps.iconOnly ||buttonProps.menu" class="text">
        <slot >默认按钮</slot>
      </div>
      <bm-icon
        class="bm-btn-icon"
        :type="buttonProps.iconType || 'fa-check'"
        size="1x"
        v-if="
          (buttonProps.iconType || buttonProps.iconOnly) &&
          buttonProps.reverse &&
          !buttonProps.loading
        "
      >
      </bm-icon>
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "bm-button",
});
</script>
<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
type ButtonProps = {
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
};
const buttonProps = defineProps<ButtonProps>();
const buttonStyle = computed(() => {
  return {
    [`bm-button--${buttonProps.type || "default"}`]:
      buttonProps.type || "primary",
    [`bm-button--${buttonProps.size || "m"}`]: buttonProps.size || "m",
    [`bm-button--outline`]: buttonProps.outline || false,
    [`bm-button--disabled`]: buttonProps.disabled || false,
    [`bm-button--block`]: buttonProps.block || false,
    [`bm-button--thinFont`]: buttonProps.thinFont || false,
    [`bm-button--icon`]: buttonProps.iconType || false,
    [`bm-button--darkMode`]: buttonProps.darkMode || false,
    [`bm-button--iconOnly`]: buttonProps.iconOnly || false,
    [`bm-button--reverse`]: buttonProps.reverse || false,
    [`bm-button--enterAnimate`]: buttonProps.enterAnimate || false,
    [`bm-button--loading`]:
      buttonProps.type == "link" ? false : buttonProps.loading,
    [`bm-button--bubble`]: buttonProps.type == "link" ? false : buttonProps.bubble || false,
    [`bm-button--bubbleReverse`]: buttonProps.type == "link" ? false : buttonProps.bubbleReverse || false,
    [`bm-button-bubble--${buttonProps.bubbleType || "none"}`]: buttonProps.type == "link" ? false : buttonProps.bubble || false,
  };
});
const buttonOuterStyle = computed(() => {
  return {
    [`bm-button--block`]: buttonProps.block || false,
  };
});
const handleClick = (e: Event) => {
  if (buttonProps.href) {
    e.preventDefault();
    window.open(buttonProps.href, buttonProps.newWindow ? "_blank" : "_self");
  }
};
</script>
