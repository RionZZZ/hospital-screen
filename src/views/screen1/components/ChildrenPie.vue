<template>
  <div class="children-pie">
    <div class="pie">
      <ECharts :option="option" width="100%" height="300px" />
    </div>
    <div class="data">
      <div class="data-item" v-for="(item, index) in data" :key="index">
        <span>{{ item.title }}</span>
        <span class="count">{{ item.count }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ECharts from "@/components/e-charts.vue";

defineProps<{
  count: number;
  option: object;
  data: { title: string; count: number }[];
}>();
</script>

<style lang="scss" scoped>
.children-pie {
  background-image: url("@/assets/children.png");
  width: 854px;
  height: 379px;
  .pie {
    background-image: url("@/assets/children_pie.png");
    background-position: center;
    background-repeat: no-repeat;
    margin: 0 auto;
  }
  .data {
    display: grid;
    justify-content: center;
    margin-top: -24px;
    grid-template-columns: 154px 190px 154px 144px;
    &-item {
      background-image: url("@/assets/children_data.png");
      width: 144px;
      height: 72px;
      font-size: 19px;
      font-weight: 600;
      color: #13c6ff;
      display: flex;
      align-items: center;
      justify-content: center;
      .count {
        color: #00e2ff;
        font-size: 26px;
        padding-left: 10px;
      }
    }
  }
}
</style>
