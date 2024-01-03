<template>
  <div>
    <div class="trend card">
      <div class="title">代养 71人</div>
      <div class="content">
        <div class="pie">
          <ECharts :option="option" width="100%" height="100%" />
        </div>
      </div>
    </div>
    <div class="trend card children-trend">
      <div class="title">儿童动态</div>
      <div class="content">
        <table class="trend-table">
          <thead>
            <tr>
              <th>科区</th>
              <th>人数</th>
              <th>动态</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data, index) in trendData" :key="index">
              <td>{{ data.area }}</td>
              <td>{{ data.count }}</td>
              <td>{{ data.trend }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ECharts from "@/components/e-charts.vue";

defineProps<{
  option: object;
  trendData: { area: string; count: number; trend: string }[];
}>();
</script>

<style lang="scss" scoped>
.trend {
  background-image: url("@/assets/children_trend.png");
  width: 525px;
  height: 296px;
  align-items: center;
  justify-content: center;
}
.title {
  padding: 1px;
}
.content {
  margin-top: -10px;
}
.pie {
  background-image: url("@/assets/children_trend_background.png");
  width: 484px;
  height: 228px;
}

.children-trend {
  margin-top: 14px;
  .trend-table {
    background-image: url("@/assets/children_trend_table.png");
    width: 484px;
    height: 234px;
    font-size: 17px;
    color: #25ebfe;
    text-align: left;
    thead {
      height: 32px;
    }
    th,
    td {
      font-weight: normal;
      padding-left: 12px;
      &:nth-child(1) {
        width: 232px;
      }
      &:nth-child(2) {
        width: 124px;
      }
    }
  }
}
</style>
