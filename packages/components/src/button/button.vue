<template>
  <div>
    <a v-if="buttonProps.type === 'link'" :href="buttonProps.href" class="bm-button" :class="buttonStyle">  <div class="text"><slot></slot></div>
    </a>
    <button v-else class="bm-button" :class="buttonStyle"> 
        <div v-if="buttonProps.icon || buttonProps.iconOnly"> </div>
       <div v-if="!buttonProps.iconOnly" class="text"><slot></slot>
      </div>
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
  enterAnimate?: boolean;
  thinFont?: boolean;
  icon?: boolean;
  iconOnly?: boolean;
};
const buttonProps = defineProps<ButtonProps>();
const buttonStyle = computed(() => {
  return {
    [`bm-button--${buttonProps.type || "default"}`]: buttonProps.type || "primary",
    [`bm-button--${buttonProps.size || "m"}`]: buttonProps.size || "m",
    [`bm-button--outline`]: buttonProps.outline || false,
    [`bm-button--disabled`]: buttonProps.disabled || false,
    [`bm-button--enterAnimate`]: buttonProps.enterAnimate || false,
    [`bm-button--thinFont`]: buttonProps.thinFont || false,
    [`bm-button--icon`]: buttonProps.icon || false,
  };
});
</script>
