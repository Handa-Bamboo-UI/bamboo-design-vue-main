<template>
  <div
    ref="cheese"
    class="bm-cheese"
    :style="`
    grid-template-columns: repeat(${
      colsplit 
    }, 1fr); 
    grid-template-rows: repeat(${
      rowsplit 
    }, 1fr);
    grid-area: ${row || 1}/${
      col || 1
    }/span ${rowSpanInt}/span ${colSpanInt};
    `"
    :class="cheeseStyle"
  >
    <slot v-if="!cheeselayoutProps.fill"></slot>
      <div class="bm-cheese-dev" v-else v-for="index in rowsplit*colsplit" style="width: 100%; height: 100%;">
      </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "bm-cheese",
});
</script>
<script lang="ts" setup>
import "./style/index.less";
import { computed, onMounted, ref, watch, useSlots ,VNode,Component } from "vue";
type CheeseLayoutProps = {
  cut?: string;
  pos?: string;
  dev?: boolean;
  auto?: boolean;
  num?: string;
  fill?: boolean;
};
let row = ref(1),
    col = ref(1),
    spanRow = ref(1),
    spanCol = ref(1),
    rowsplit = ref(1),
    colsplit = ref(1);
 
onMounted(() => {
  watch(() => cheeselayoutProps.pos, (newVal, oldVal) => {
  if (newVal! !== oldVal) {
     window.location.reload();
  }
  
})
watch(() => cheeselayoutProps.cut, (newVal, oldVal) => {
  if (newVal! !== oldVal) {
     window.location.reload();
  }
})
  if (cheeselayoutProps.pos) {
    const position = cheeselayoutProps.pos.split(" ");
    spanRow.value = parseInt(position[2]);
    spanCol.value = parseInt(position[3]);
    row.value = parseInt(position[0]);
    col.value = parseInt(position[1]);
  }
  if (cheeselayoutProps.cut) {
    const cut = cheeselayoutProps.cut.split(" ");
    rowsplit.value = parseInt(cut[0]);
    colsplit.value = parseInt(cut[1]);
  }
 
})

var rowSpanInt = computed(() => {
   if (spanRow.value) {
    return spanRow.value 
  }
  return 1;
});
var colSpanInt = computed(() => {
   if (spanCol.value) {
    return spanCol.value 
  }
  return 1; 
});

const cheeselayoutProps = defineProps<CheeseLayoutProps>();
const cheeseStyle = computed(() => {
  return {
    "bm-cheese-dev": cheeselayoutProps.dev,
  };
});

 
</script>
