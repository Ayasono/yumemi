<script setup lang="ts">
import { defineComponent, inject } from "vue";
import ProvinceItem from "@/components/ProvinceItem.vue";

defineComponent({
  name: "ProvinceMenu",
  components: {
    ProvinceItem,
  },
});

const provinces: IProvinceItem[] = inject("provinces");

function updateProvinceList(province: string, isChecked: boolean) {
  console.log(province, isChecked);
}

interface IProvinceItem {
  prefName: string;
  prefCode: number;
}
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div
      class="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-4 sm:h-80 h-40 overflow-y-auto px-10 py-5"
    >
      <ProvinceItem
        v-for="province in provinces"
        :key="province"
        :province="province.prefName"
        :isChecked="false"
        @updateProvinceList="updateProvinceList"
      />
    </div>
  </div>
</template>
