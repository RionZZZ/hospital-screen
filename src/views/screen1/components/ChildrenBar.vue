<template>
  <div class="bar card">
    <div class="title">儿童数</div>
    <ECharts :option="option" width="100%" height="200px" />
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
  background-image: url("@/assets/children_card.png");
  width: 831px;
  height: 247px;
  margin: 12px auto;
}
</style>
