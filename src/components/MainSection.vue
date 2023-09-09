<script setup lang="ts">
import { defineComponent, provide, reactive } from "vue";
import ProvinceMenu from "@/components/ProvinceMenu.vue";
import PopulationChart from "@/components/PopulationChart.vue";
import { getAllProvinces } from "@/api/getAllProvinces";
import { IProvinceItem } from "@/types/ProvinceItemsTypes";

defineComponent({
  name: "MainSection",
});

const provinces: IProvinceItem[] = reactive([]);
getAllProvinces()
  .then((res) => provinces.push(...res.data.result))
  .catch((err) => alert(`Failed to get provinces list, code: ${err}`));

provide("provinces", provinces);
</script>

<template>
  <section>
    <ProvinceMenu />
    <PopulationChart />
  </section>
</template>
