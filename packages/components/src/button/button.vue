<template>
  <div>
    <button class="bm-button" :class="buttonStyle">hello button</button>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: "bm-button",
})
import "./style/index.less";
import { computed } from "vue";
type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();
const buttonStyle = computed(() => {
  return {
    [`bm-button--${buttonProps.type}`]: buttonProps.type,
  };
});
</script>
