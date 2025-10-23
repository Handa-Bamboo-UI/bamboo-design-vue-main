<script lang="ts">
 import { defineComponent } from 'vue'
  

 export default defineComponent({
    name: 'bm-icon',
 })
</script>
<template>
    <div>
        <fa-icon :icon="iconProps.name" />
    </div>
</template>
<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
type IconProps = {
    name: string;
};
const iconProps = defineProps<IconProps>();
 
</script>`