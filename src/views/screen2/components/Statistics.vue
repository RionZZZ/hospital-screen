<template>
  <div class="children-middle">
    <div class="statistics-table">
      <div
        :class="['statistics-item', 'statistics-item-' + (index + 1)]"
        v-for="(data, index) in statisticsData"
        :key="index"
      >
        {{ data.title }} <span class="count">{{ data.count }}</span>
      </div>
    </div>
    <div class="children-pie">
      <ECharts class="pie" :option="option" width="100%" height="100%" />
    </div>
  </div>
</template>
<script setup lang="ts">
import ECharts from "@/components/e-charts.vue";

defineProps<{
  option: object;
  statisticsData: { title: string; count: number }[];
}>();
</script>

<style lang="scss" scoped>
.children-middle {
  width: 640px;
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.statistics-table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  row-gap: 20px;
  .statistics-item {
    width: 144px;
    height: 74px;
    font-size: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    .count {
      font-size: 26px;
      padding-left: 8px;
    }
    &-1 {
      background-image: url("@/assets/statistics_btn_1.png");
      color: #ff7f7f;
      .count: {
        color: #ff665c;
      }
    }
    &-2 {
      background-image: url("@/assets/statistics_btn_2.png");
      color: #ffe313;
    }
    &-3 {
      background-image: url("@/assets/statistics_btn_3.png");
      color: #1dff5b;
    }
    &-4 {
      background-image: url("@/assets/statistics_btn_4.png");
      color: #13c6ff;
      .count: {
        color: #00e2ff;
      }
    }
    &-5 {
      background-image: url("@/assets/statistics_btn_5.png");
      color: #00a2ff;
    }
    &-6 {
      background-image: url("@/assets/statistics_btn_6.png");
      color: #e47eff;
    }
  }
}
.children-pie {
  width: 606px;
  height: 343px;
  background-image: url("@/assets/children_area.png");
  margin-top: 20px;
  .pie {
    margin-top: 15px;
  }
}
</style>
