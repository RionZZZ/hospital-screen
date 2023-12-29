<template>
  <div>
    <ChildrenPie :count="222" :option="pieOption" :data="childrenData" />
    <ChildrenBar :option="barOption" />
    <div>
      <ChildrenInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChildrenPie from "./ChildrenPie.vue";
import ChildrenBar from "./ChildrenBar.vue";
import ChildrenInfo from "./ChildrenInfo.vue";

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
          name: "男童",
          itemStyle: {
            color: "#00FFAC",
            shadowColor: "rgba(0, 120, 102, 0.57)",
            shadowBlur: 10,
          },
          label: {
            color: "#4FFEB8",
          },
        },
        {
          value: 96,
          name: "女童",
          itemStyle: {
            color: "#F1AD1D",
            shadowColor: "#A46F00",
            shadowBlur: 10,
          },
          label: {
            color: "#F6C638",
          },
        },
        {
          value: [0, 123],
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

const childrenData = [
  { title: "三无", count: 223 },
  { title: "代养", count: 66 },
  { title: "科区", count: 99 },
  { title: "床位", count: 393 },
];

const barOption = {
  grid: {
    left: 120,
    top: 20,
    right: 120,
    bottom: 30,
  },
  xAxis: {
    type: "category",
    data: [
      "<1岁",
      "1-3岁",
      "4-5岁",
      "6-9岁",
      "10-13岁",
      "14-15岁",
      "16-17岁",
      ">18岁",
    ],
    axisLabel: {
      color: "#00E2FF",
      fontSize: 14,
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    type: "value",
    splitNumber: 5,
    axisLabel: {
      color: "#00E2FF",
      fontSize: 14,
    },
    splitLine: {
      lineStyle: {
        color: "#00E2FF",
      },
    },
  },
  series: [
    {
      data: [121, 205, 147, 70, 56, 110, 46, 82],
      type: "bar",
      barWidth: 30,
      itemStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#00F3FF",
            },
            {
              offset: 1,
              color: "#00E2FF",
            },
          ],
        },
        shadowColor: "rgba(255, 255, 255, 0.50)",
        shadowBlur: 5,
        opacity: 0.85,
      },
    },
  ],
};
</script>

<style lang="scss" scoped></style>
