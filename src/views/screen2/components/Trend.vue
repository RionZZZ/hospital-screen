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
      <div class="content" @mouseleave="startAnimate" @mouseenter="stopAnimate">
        <table class="trend-table" id="trendTable">
          <thead>
            <tr>
              <th>科区</th>
              <th>人数</th>
              <th>动态</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="trend-item"
              v-for="(data, index) in trendData"
              :key="index"
            >
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
import { onMounted, onUnmounted, ref } from "vue";

defineProps<{
  option: object;
  trendData: { area: string; count: number; trend: string }[];
}>();

const scrollTable = () => {
  const table = document.getElementById("trendTable");
  const tableHeight = table.offsetHeight - 34;

  const tableBody = table.getElementsByTagName("tbody")[0];
  const scrollHeight = tableBody.scrollHeight;
  const scrollTop = tableBody.scrollTop;

  if (tableHeight < scrollHeight) {
    const firstTr = tableBody.getElementsByTagName("tr")[0];
    tableBody.scrollTop += 1;
    if (scrollTop > firstTr.offsetHeight) {
      tableBody.removeChild(firstTr);
      tableBody.appendChild(firstTr);
    }
  }
};

const intervalId = ref();
onMounted(() => {
  intervalId.value = setInterval(scrollTable, 50);
});
onUnmounted(() => {
  clearInterval(intervalId.value);
  intervalId.value = null;
});
const stopAnimate = () => {
  console.log("stopAnimate");

  clearInterval(intervalId.value);
  intervalId.value = null;
};
const startAnimate = () => {
  console.log("startAnimate");

  intervalId.value = setInterval(scrollTable, 50);
};
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
    width: 485px;
    height: 233px;
    font-size: 17px;
    color: #25ebfe;
    text-align: left;
    border-collapse: collapse;
    border-radius: 12px;
    overflow: hidden;
    thead {
      display: block;
      height: 34px;
      line-height: 34px;
    }
    tbody {
      display: block;
      height: 200px;
      overflow-y: hidden;
      .trend-item {
        height: 30px;
      }
    }
    th,
    td {
      font-weight: normal;
      padding-left: 12px;
      &:nth-child(1) {
        width: 232px;
      }
      &:nth-child(2) {
        width: 126px;
      }
      &:nth-child(3) {
        width: 126px;
      }
    }
    td {
      border: 1px solid #008ba8;
    }
  }
}
</style>
