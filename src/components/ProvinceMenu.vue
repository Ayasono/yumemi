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
  <div class="province-items sm:h-80 h-40 w-full overflow-y-auto px-10 py-5">
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
