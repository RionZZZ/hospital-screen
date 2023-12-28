<template>
  <div class="supply">
    <div class="drug card">
      <div class="title">药品</div>
      <div class="content">
        <div class="content-chart">
          <div class="count">{{ count }}种</div>
          <ECharts :option="option" width="412px" height="205px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ECharts from "@/components/e-charts.vue";

defineProps<{ count: number; option: object }>();
</script>

<style lang="scss" scoped>
.supply {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.drug {
  background-image: url("@/assets/supply.png");
  width: 412px;
  height: 432px;
}
.title {
  font-size: 16px;
  padding: 11px;
}
.content {
  .count {
    background-image: url("@/assets/supply_count.png");
    width: 132px;
    height: 52px;
    line-height: 42px;
    font-weight: 600;
    color: #00e2ff;
    font-size: 17px;
    margin: 0 auto;
  }
}
</style>
