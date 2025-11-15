<template>
    <div class="bm-pin" :class="pinStyle">
       <bm-button :enterAnimate="pinProps.enterAnimate || false" :type="pinProps.type || 'default'" :iconType="pinProps.iconType" :menu="pinProps.menu || false" :iconOnly="pinProps.iconOnly || false" :bubble="pinProps.bubble" :bubbleReverse="pinProps.bubbleReverse || false" :bubbleType="pinProps.bubbleType || 'none'">
        <slot>{{pinProps.description || '图钉'}}</slot>
        </bm-button>
    </div>
</template>
<script lang="ts">
import { defineComponent ,ref} from 'vue'
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
    type?:string;
    bubble?: boolean;
    bubbleReverse?: boolean;
    bubbleType?: string;
    description?:string;
    menu?:boolean;
    enterAnimate?: boolean;
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
 
