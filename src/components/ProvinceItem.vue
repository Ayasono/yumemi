<script setup lang="ts">
import { defineComponent, defineProps } from "vue";

defineComponent({
  name: "ProvincesItem",
});

defineProps({
  province: {
    type: String,
    required: true,
  },
  isChecked: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div class="flex justify-center items-center">
    <input
      type="checkbox"
      :id="province"
      :value="province"
      :checked="isChecked"
      @change="
        $emit('updateProvinceList', $event.target.value, $event.target.checked)
      "
      class="mr-2 w-5 h-5"
    />
    <label :for="province">{{ province }}</label>
  </div>
</template>
