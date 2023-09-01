<script setup lang="ts">
import { defineComponent, inject } from "vue";
import ProvinceItem from "@/components/ProvinceItem.vue";

defineComponent({
  name: "ProvinceMenu",
  components: {
    ProvinceItem,
  },
});

const provinces: IProvinceItem[] | undefined = inject("provinces");

interface IProvinceItem {
  prefName: string;
  prefCode: number;
}
</script>

<template>
  <h2
    v-if="provinces?.length === 0"
    class="text-2xl w-full flex justify-center items-center"
  >
    Loading data...
  </h2>
  <div
    v-else
    class="province-items sm:h-72 h-40 w-full overflow-y-auto px-10 py-5"
  >
    <ProvinceItem
      v-for="province in provinces"
      :key="province"
      :province="province.prefName"
      :code="province.prefCode"
      :isChecked="false"
    />
  </div>
</template>

<style scoped lang="scss">
.province-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 10px;
  place-items: center;
}
</style>
