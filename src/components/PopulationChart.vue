<script setup lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  onMounted,
  Ref,
  ref,
  watchEffect,
} from "vue";
import useEchart from "@/hooks/useEchart";
import { useStore } from "vuex";

const store = useStore();

defineComponent({
  name: "PopulationChart",
});

const selectedProvinces = computed(() => store.state.selectedProvinces);

const xAxisData = computed(() => {
  return selectedProvinces.value[0]?.population[0].data.map(
    (item: { year: string }) => item.year
  );
});

const chartContainer: Ref = ref(null);

const option: ComputedRef = computed(() => {
  return {
    title: {
      text: "都道府県人口数一覧",
      subtext: "人口数",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: selectedProvinces.value.map(
        (province: { province: string }) => province.province
      ),
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: xAxisData.value,
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value} 人",
      },
    },
    series: store.getters.getSelectedProvincesYAxisData,
  };
});

onMounted(() => {
  const { setOptions, updateSize } = useEchart(chartContainer.value);
  updateSize();
  watchEffect(async () => {
    if (selectedProvinces.value.length === 0) return;
    setOptions(option.value);
  });
});
</script>

<template>
  <figure>
    <figcaption class="text-xl text-center text-emerald-400">
      都道府県人口数一覧
    </figcaption>
    <div ref="chartContainer" class="w-full h-96"></div>
  </figure>
</template>
