<template>
  <div
    ref="chartRef"
    :style="{ height: props.height, width: props.width }"
  ></div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch, ref, type Ref } from "vue";
import * as echarts from "echarts";
const chartRef: Ref<HTMLElement | undefined> = ref();
let myChart: echarts.ECharts;
const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  option: {
    type: Object,
    default: () => ({}),
    required: true,
  },
});
onMounted(() => {
  myChart = echarts.init(chartRef.value, { renderer: "svg" });
  myChart.showLoading({
    text: "加载中...",
    color: "#00e2ff",
    textColor: "#000",
    maskColor: "rgba(255, 255, 255, .95)",
    zlevel: 0,
    lineWidth: 2,
  });
  if (!props.loading) {
    myChart.hideLoading();
    myChart.setOption(props.option, true);
  }
});
onBeforeUnmount(() => {
  myChart.dispose();
});
//监听图表数据时候变化，重新渲染图表
watch(
  () => [props.option, props.loading],
  () => {
    if (!props.loading) {
      myChart.hideLoading();
      myChart.setOption(props.option, true);
    }
  },
  { deep: true }
);
</script>
