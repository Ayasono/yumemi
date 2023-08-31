<template>
  <select
    v-model="selectedItem"
    class="p-2 rounded border block"
    @change="handleSelect"
  >
    <option v-for="(item, index) in items" :key="index" :value="item.value">
      {{ item.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  items: Array, // 接受数组对象作为参数
  value: String, // 当前选中项的值
});

const emit = defineEmits(["update:value"]);

const selectedItem = ref(props.value);

function handleSelect(e: Event) {
  const value = (e.target as HTMLSelectElement).value;
  selectedItem.value = value;
  emit("update:value", value);
}
</script>
