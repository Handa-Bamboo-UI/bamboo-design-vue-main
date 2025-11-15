<template>
        <fa-icon :icon="iconProps.type" :size="iconProps.size || '2x' " :style="iconProps.color?`color:${iconProps.color};`:''" />
</template>
<script lang="ts">
 import { defineComponent } from 'vue'
 export default defineComponent({
    name: 'bm-icon',
 })
</script>
<script lang="ts" setup>
 import "./style/index.less"
type IconProps = {
    type?: string;
    size?: string;
    color?: string;
};
const iconProps = defineProps<IconProps>();
 
</script>