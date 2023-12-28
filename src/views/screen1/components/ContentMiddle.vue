<template>
  <div>
    <ChildrenPie :count="222" :option="option" />
  </div>
</template>

<script setup lang="ts">
import ChildrenPie from "./ChildrenPie.vue";

const option = {
  series: [
    {
      type: "pie",
      radius: ["40%", "55%"],
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
                lineHeight: 36
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

<style lang="scss" scoped></style>
