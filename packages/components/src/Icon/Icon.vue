<script lang="ts">
 import { defineComponent } from 'vue'
  

 export default defineComponent({
    name: 'bm-icon',
 })
</script>
<template>
    <div>
        <fa-icon :icon="iconProps.name" size="2x" />
    </div>
</template>
<script lang="ts" setup>
 import "./style/index.less"
type IconProps = {
    name: string;
};
const iconProps = defineProps<IconProps>();
 
</script>`