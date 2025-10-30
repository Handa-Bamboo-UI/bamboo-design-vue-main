<template>
    <div class="bm-pin" :class="pinStyle">
       <bm-button type="primary" :iconType="pinProps.iconType" :icon-only="pinProps.iconOnly || true" :data-number="pinProps.number" ></bm-button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name:'bm-pin',
})
</script>
<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
type PinProps = {
    iconType?: string;
    iconOnly?: boolean;
    up?: boolean;
    left?: boolean;
    right?: boolean;
    bottom?: boolean;
    number?:number;
};
const pinProps = defineProps<PinProps>();
const pinStyle = computed(() => {
  return {
       'bm-pin-up': pinProps.up,
       'bm-pin-left': pinProps.left,
       'bm-pin-right': pinProps.right,
       'bm-pin-bottom': pinProps.bottom,
       'bm-pin-default': !(pinProps.up || pinProps.left || pinProps.right || pinProps.bottom),
  };
});
</script>
 
