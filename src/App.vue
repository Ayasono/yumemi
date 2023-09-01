<template>
  <div id="app">
    <Header />
    <MainSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/VueHeader.vue";
import MainSection from "@/components/MainSection.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    MainSection,
  },
});
</script>
