<template>
  <div class="outside card">
    <div class="title">在外住院 111人</div>
    <div class="content">
      <ECharts
        class="pie"
        :option="hospitalOption"
        width="100%"
        height="250px"
      />
      <Circle ref="circleRef" width="100%" height="280px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ECharts from "@/components/e-charts.vue";
import Circle from "@/components/circle.vue";
import { onMounted, ref } from "vue";

const hospitalOption = {
  series: [
    {
      type: "pie",
      radius: "70%",
      label: {
        formatter: "{b}\n{c}",
        fontSize: 14,
        lineHeight: 20,
      },
      labelLine: {
        length: 20,
        length2: 30,
      },
      data: [
        {
          value: 35,
          name: "和平里医院",
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
          value: 46,
          name: "李桥医院",
          itemStyle: {
            color: "#00FFAC",
            shadowColor: "rgba(0, 120, 102, 0.57)",
            shadowBlur: 10,
          },
          label: {
            color: "#00FFAC",
          },
        },
        {
          value: 19,
          name: "精保所",
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
          value: 66,
          name: "火箭军医院",
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
          value: 89,
          name: "309医院",
          itemStyle: {
            color: "#FF876B",
            shadowColor: "#B3604F",
            shadowBlur: 10,
          },
          label: {
            color: "#FE9880",
          },
        },
        {
          value: 89,
          name: "社福",
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
          value: 81,
          name: "三福",
          itemStyle: {
            color: "#FF99C3",
            shadowColor: "rgba(112, 0, 51, 0.50)",
            shadowBlur: 10,
          },
          label: {
            color: "#FEA7CB",
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

const circleRef = ref();
onMounted(() => {
  circleRef.value?.run({
    支气管炎: {
      $count: 66,
    },
    精神发育迟滞: {
      $count: 23,
    },
    肺炎: {
      $count: 96,
    },
    流感: {
      $count: 79,
    },
    兴奋状态: {
      $count: 16,
    },
    上肢骨折: {
      $count: 20,
    },
    下肢骨折: {
      $count: 9,
    },
    流感1: {
      $count: 79,
    },
    兴奋状态2: {
      $count: 16,
    },
    上肢骨折3: {
      $count: 20,
    },
    下肢骨折4: {
      $count: 9,
    },
  });
});
</script>

<style lang="scss" scoped>
.outside {
  background-image: url("@/assets/outside.png");
  align-items: center;
  justify-content: center;
  width: 533px;
  height: 606px;
}
.title {
  padding: 1px;
}
.content {
  background-image: url("@/assets/outside_background.png");
  width: 492px;
  height: 569px;
  margin-top: -4px;
  .pie {
    margin-bottom: -20px;
  }
}
</style>
