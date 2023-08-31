<script setup lang="ts">
import { defineComponent, defineProps } from "vue";
import { useStore } from "vuex";
import { getPopulationByProvinces } from "@/api/getPopulationByProvinces";

defineComponent({
  name: "ProvincesItem",
});

const props = defineProps({
  province: {
    type: String,
    required: true,
  },
  isChecked: {
    type: Boolean,
    required: false,
    default: false,
  },
  code: {
    type: Number,
    required: true,
  },
});

const store = useStore();
function updateSelectedProvinces(e) {
  const isChecked = e.target.checked;
  if (isChecked) {
    getPopulationByProvinces(props.code)
      .then((res) => {
        store.commit("setSelectedProvinces", {
          province: props.province,
          population: res.data.result.data,
        });
      })
      .catch((err) => alert(`Failed to get population data, code: ${err}`));
  } else {
    store.commit("removeSelectedProvince", props.province);
  }
}
</script>

<template>
  <div class="flex justify-center items-center w-40">
    <input
      type="checkbox"
      :id="province"
      :value="province"
      :checked="isChecked"
      @change="updateSelectedProvinces($event)"
      class="mr-2 w-5 h-5"
    />
    <label :for="province">{{ province }}</label>
  </div>
</template>
