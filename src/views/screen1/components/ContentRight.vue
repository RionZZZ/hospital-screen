<template>
  <div class="medical-supplies card">
    <div class="title">医疗物资构成</div>
    <div class="content">
      <Supply type="药品" :count="123" :option="drugOption" />
      <Supply type="医疗用品" :count="233" :option="medicalOption" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Supply from "./Supply.vue";

const drugOption = {
  series: [
    {
      type: "pie",
      radius: "70%",
      label: {
        formatter: "{b}\n{c}",
        fontSize: 14,
        lineHeight: 24,
      },
      labelLine: {
        length: 20,
        length2: 30,
      },
      data: [
        {
          value: 35,
          name: "精二注射剂",
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
          value: 46,
          name: "精二口服药",
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
          value: 19,
          name: "外用药",
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
          value: 66,
          name: "注射剂",
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
          value: 89,
          name: "口服药",
          itemStyle: {
            color: "rgba(255, 135, 107, 0.85)",
            shadowColor: "#B3604F",
            shadowBlur: 10,
          },
          label: {
            color: "#FE9880",
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

const medicalOption = {
  series: [
    {
      type: "pie",
      radius: "70%",
      label: {
        formatter: "{b}\n{c}",
        fontSize: 14,
        lineHeight: 24,
      },
      labelLine: {
        length: 20,
        length2: 30,
      },
      data: [
        {
          value: 388,
          name: "一次性用品",
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
          name: "硬件",
          itemStyle: {
            color: "#F1AD1D",
            shadowColor: "#A46F00",
            shadowBlur: 10,
          },
          label: {
            color: "#F6C638",
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
.medical-supplies {
  background-image: url("@/assets/medical_supplies.png");
  width: 453px;
  height: 952px;
  .content {
    margin-bottom: 20px;
  }
}
</style>
