<template>
   <div  class="bm-pin-group" :class="pinGroupStyle" :style="{ 'gap': pinGroupProps.gap || '8px' }" >
     <slot></slot>
   </div>
    
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name:'bm-pin-group',
})
</script>
<script lang="ts" setup scoped>
import "./style/index.less";
import { computed } from "vue";
type PinGroupProps = {
 direction?: 'horizontal' | 'vertical';
 up?: boolean;
 bottom?: boolean;
 left?: boolean;
 right?: boolean;
 gap?: string;
 sleep?: boolean;
 sub?: boolean;
};

const pinGroupProps = defineProps<PinGroupProps>();
const pinGroupStyle = computed(() => {
  return {
     'bm-pin-group--horizontal': pinGroupProps.direction === 'horizontal',
     'bm-pin-group--vertical': pinGroupProps.direction === 'vertical',
     'bm-pin-group--up': pinGroupProps.up || false,
     'bm-pin-group--bottom': pinGroupProps.bottom || false,
     'bm-pin-group--left': pinGroupProps.left || false,
     'bm-pin-group--right': pinGroupProps.right || false,
     'bm-pin-group--sleep': pinGroupProps.sleep || false,
     'bm-pin-group-sub': pinGroupProps.sub || false,
  };
});


</script>
 