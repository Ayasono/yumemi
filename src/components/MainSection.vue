<script setup lang="ts">
import { defineComponent, provide, reactive } from "vue";
import ProvinceMenu from "@/components/ProvinceMenu.vue";
import PopulationChart from "@/components/PopulationChart.vue";
import { getAllProvinces } from "@/api/getAllProvinces";

defineComponent({
  name: "MainSection",
});

const provinces: IGetAllProvincesResponse[] = reactive([]);
getAllProvinces()
  .then((res) => provinces.push(...res.data.result))
  .catch((err) => alert(`Failed to get provinces list, code: ${err}`));

provide("provinces", provinces);

interface IGetAllProvincesResponse {
  prefCode: number;
  prefName: string;
}
</script>

<template>
  <section>
    <ProvinceMenu />
    <PopulationChart />
  </section>
</template>
