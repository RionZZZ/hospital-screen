<template>
  <div class="background">
    <div class="overview">
      <div class="time"></div>
      <div class="overview-title">儿童概况</div>
      <div class="time">{{ currentTime }}</div>
    </div>
    <div class="content">
      <div class="content-top">
        <Outside />
        <Statistics :option="pieOption" :statisticsData="statisticsData" />
        <Outside />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useScale } from "../../utils/scale.ts";
import dayjs from "dayjs";
import Outside from "./components/Outside.vue";
import Statistics from "./components/Statistics.vue";

useScale();
const currentTime = ref();
const getTime = () => {
  currentTime.value = dayjs().format("YYYY-MM-DD HH:mm:ss");
};

const intervalId = ref();
onMounted(() => {
  intervalId.value = setInterval(getTime, 1000);
});
onBeforeUnmount(() => {
  clearInterval(intervalId.value);
  intervalId.value = null;
});

const statisticsData = [
  { title: "在区", count: 134 },
  { title: "住院", count: 66 },
  { title: "隔离", count: 32 },
  { title: "融合", count: 2 },
  { title: "散居", count: 4 },
  { title: "上学", count: 12 },
];

const pieOption = {
  series: [
    {
      type: "pie",
      radius: ["45%", "65%"],
      label: {
        formatter: "{b}\n{c}",
        fontSize: 14,
        lineHeight: 24,
      },
      labelLine: {
        length: 20,
        length2: 10,
      },
      data: [
        {
          value: 48,
          name: "医疗区",
          itemStyle: {
            color: "rgba(143, 183, 255, 0.85)",
            shadowColor: "#5E84C5",
            shadowBlur: 10,
          },
          label: {
            color: "#9FC1FE",
          },
        },
        {
          value: 96,
          name: "养护一区",
          itemStyle: {
            color: "#00FFAC",
            shadowColor: "#00FFAC",
            shadowBlur: 10,
          },
          label: {
            color: "#00FFAC",
          },
        },
        {
          value: 96,
          name: "养护二区",
          itemStyle: {
            color: "rgba(93, 112, 146, 0.85)",
            shadowColor: "rgba(23, 37, 57, 0.50)",
            shadowBlur: 10,
          },
          label: {
            color: "rgba(242, 242, 242, 0.65)",
          },
        },
        {
          value: 96,
          name: "养护三区",
          itemStyle: {
            color: "#F1AD1D",
            shadowColor: "#A46F00",
            shadowBlur: 10,
          },
          label: {
            color: "#FFAD00",
          },
        },
        {
          value: 96,
          name: "养护四区",
          itemStyle: {
            color: "rgba(255, 135, 107, 0.85)",
            shadowColor: "#B3604F",
            shadowBlur: 10,
          },
          label: {
            color: "#FE9880",
          },
        },
        {
          value: 96,
          name: "养护五区",
          itemStyle: {
            color: "rgba(0, 243, 255, 0.85)",
            shadowColor: "#00AEC0",
            shadowBlur: 10,
          },
          label: {
            color: "#25EBFE",
          },
        },
        {
          value: 96,
          name: "养护六区",
          itemStyle: {
            color: "#8FB7FF",
            shadowColor: "#5E84C5",
            shadowBlur: 10,
          },
          label: {
            color: "#9FC1FE",
          },
        },
        {
          value: 96,
          name: "养护七区",
          itemStyle: {
            color: "rgba(255, 157, 77, 0.85)",
            shadowColor: "rgba(120, 53, 0, 0.50)",
            shadowBlur: 10,
          },
          label: {
            color: "#FFAD00",
          },
        },
        {
          value: 96,
          name: "康复师范中心",
          itemStyle: {
            color: "rgba(38, 154, 153, 0.85)",
            shadowColor: "rgba(29, 55, 52, 0.50)",
            shadowBlur: 10,
          },
          label: {
            color: "#65D7D5",
          },
        },
        {
          value: 96,
          name: "特殊教育中心",
          itemStyle: {
            color: "rgba(255, 153, 195, 0.85)",
            shadowColor: "rgba(112, 0, 51, 0.50)",
            shadowBlur: 10,
          },
          label: {
            color: "#FEA7CB",
          },
        },
        {
          value: 96,
          name: "救助区",
          itemStyle: {
            color: "#F1AD1D",
            shadowColor: "#A46F00",
            shadowBlur: 10,
          },
          label: {
            color: "#FFAD00",
          },
        },
        {
          value: [0, 233],
          name: "儿童总数",
          label: {
            formatter: "{name|{b}}\n{count|{@[1]}}",
            position: "center",
            rich: {
              name: {
                color: "#13C6FF",
                fontSize: 16,
              },
              count: {
                color: "#22E6FF",
                fontSize: 36,
                lineHeight: 36,
              },
            },
          },
        },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};
</script>

<style lang="scss" scoped>
.background {
  background-image: url("@/assets/background.jpg");
  width: 1920px;
  height: 1080px;
}
.overview {
  background-image: url("@/assets/overview.png");
  width: 1920px;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  &-title {
    font-weight: 600;
    color: #ffffff;
    font-size: 28px;
  }
  .time {
    width: 200px;
    margin-top: -28px;
    font-size: 19px;
    color: #19ecff;
  }
}
.content {
  background-image: url("@/assets/children_background.png");
  width: 1890px;
  height: 996px;
  margin: 0 auto;
  &-top {
    display: flex;
    justify-content: space-between;
  }
}
</style>
