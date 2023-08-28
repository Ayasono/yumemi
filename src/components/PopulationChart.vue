<script setup lang="ts">
import { defineComponent } from "vue";

defineComponent({
  name: "PopulationChart",
});
</script>

<template>
  <figure>
    <figcaption>都道府県人口数一覧</figcaption>
    <div id="chartContainer"></div>
  </figure>
</template>
