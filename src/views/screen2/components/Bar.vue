<template>
  <div class="bar">
    <ECharts :option="option" width="100%" height="100%" />
  </div>
</template>

<script setup lang="ts">
import ECharts from "@/components/e-charts.vue";

defineProps<{
  option: object;
}>();
</script>

<style lang="scss" scoped>
.bar {
  background-image: url("@/assets/children_bar.png");
  align-items: center;
  justify-content: center;
  width: 588px;
  height: 288px;
}
</style>
