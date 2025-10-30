<template>
  <div>
     <input type="text">
     \
     <input type="password">
     \
     <input type="email">
     \
     <input type="number">
     \
     <input type="date">
     \
     <input type="time">
     \
     <input type="month">
     \
     <input type="week">
     \
     <input type="color">
     \
     <input type="file">
     \
     <input type="radio">
     \
     <input type="checkbox">
     \
     <input type="submit">
     \
     <input type="reset">
     \
     <input type="button">
     \
     <input type="search">
     \
     <input type="hidden">
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "bm-input",
}); 
</script>
<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
type InputProps = {
  type?: string;
};
const inputProps = defineProps<InputProps>();
const inputStyle = computed(() => {
  return {
    [`bm-input--${inputProps.type || "primary"}`]: inputProps.type || "primary",
  };
});
</script>
