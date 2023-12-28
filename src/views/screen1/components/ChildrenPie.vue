<template>
  <div class="children-pie">
    <ECharts :option="option" width="300px" height="260px" />
  </div>
</template>

<script setup lang="ts">
import ECharts from "@/components/e-charts.vue";

defineProps<{ count: number; option: object }>();
</script>

<style lang="scss" scoped>
.children-pie {
  background-image: url("@/assets/children.png");
  width: 854px;
  height: 379px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
