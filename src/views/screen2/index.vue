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
        <Trend :option="trendOption" :trendData="trendData" />
      </div>
      <div class="content-bottom">
        <Bar :option="option1" />
        <Bar :option="option2" />
        <Bar :option="option3" />
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
import Trend from "./components/Trend.vue";
import Bar from "./components/Bar.vue";

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
      radius: ["48%", "68%"],
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

const trendOption = {
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
          value: 46,
          name: "东城",
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
          value: 35,
          name: "西城",
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
          name: "海淀",
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
          name: "延庆",
          itemStyle: {
            color: "#FF876B",
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

const trendData = [
  {
    area: "养护一区",
    count: 8,
    trend: "隔离",
  },
  {
    area: "养护二区",
    count: 18,
    trend: "隔离",
  },
  {
    area: "养护三区",
    count: 28,
    trend: "住院",
  },
  {
    area: "养护四区",
    count: 38,
    trend: "隔离",
  },
  {
    area: "养护五区",
    count: 48,
    trend: "上学",
  },
  {
    area: "养护六区",
    count: 3,
    trend: "融合",
  },
];

const option1 = {
  legend: {
    show: true,
    top: 10,
    left: 40,
    itemWidth: 8,
    itemHeight: 8,
    textStyle: {
      color: "inherit",
    },
  },
  grid: {
    left: 70,
    top: 50,
    right: 70,
    bottom: 80,
  },
  xAxis: {
    type: "category",
    data: [
      "医疗区",
      "养护一区",
      "养护二区",
      "养护三区",
      "养护四区",
      "养护五区",
      "养护六区",
      "养护七区",
      "康复师范中心",
      "特殊教育中心",
      "救助区",
    ],
    axisLabel: {
      color: "#00E2FF",
      fontSize: 14,
      rotate: 45,
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
      data: [121, 205, 147, 70, 56, 110, 46, 82, 34, 45, 66],
      type: "bar",
      name: "男童",
      stack: "total",
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
      emphasis: {
        focus: "series",
        label: {
          show: true,
          color: "#333",
        },
      },
    },
    {
      data: [21, 115, 187, 123, 88, 52, 98, 31, 45, 111, 189],
      type: "bar",
      name: "女童",
      stack: "total",
      barWidth: 30,
      itemStyle: {
        color: "#F1AD1D",
        shadowColor: "#A46F00",
        shadowBlur: 5,
        opacity: 0.8,
      },
      emphasis: {
        focus: "series",
        label: {
          show: true,
          color: "#333",
        },
      },
    },
  ],
};

const option2 = {
  legend: {
    show: true,
    top: 10,
    left: 40,
    itemWidth: 8,
    itemHeight: 8,
    textStyle: {
      color: "inherit",
    },
  },
  grid: {
    left: 70,
    top: 50,
    right: 70,
    bottom: 80,
  },
  xAxis: {
    type: "category",
    data: [
      "医疗区",
      "养护一区",
      "养护二区",
      "养护三区",
      "养护四区",
      "养护五区",
      "养护六区",
      "养护七区",
      "康复师范中心",
      "特殊教育中心",
      "救助区",
    ],
    axisLabel: {
      color: "#00E2FF",
      fontSize: 14,
      rotate: 45,
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
      data: [121, 205, 147, 70, 56, 110, 46, 82, 34, 45, 66],
      type: "bar",
      name: "0-3岁",
      stack: "total",
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
      emphasis: {
        focus: "series",
        label: {
          show: true,
          color: "#333",
        },
      },
    },
    {
      data: [21, 115, 187, 123, 88, 52, 98, 31, 45, 111, 189],
      type: "bar",
      name: "4-5岁",
      stack: "total",
      barWidth: 30,
      itemStyle: {
        color: "#F1AD1D",
        shadowColor: "#A46F00",
        shadowBlur: 5,
        opacity: 0.8,
      },
      emphasis: {
        focus: "series",
        label: {
          show: true,
          color: "#333",
        },
      },
    },

    {
      data: [51, 15, 12, 99, 34, 10, 16, 52, 24, 35, 77],
      type: "bar",
      name: "6-13岁",
      stack: "total",
      barWidth: 30,
      itemStyle: {
        color: "#00FFAC",
        shadowColor: "rgba(0, 120, 102, 0.57)",
        shadowBlur: 5,
        opacity: 0.8,
      },
      emphasis: {
        focus: "series",
        label: {
          show: true,
          color: "#333",
        },
      },
    },
    {
      data: [2, 15, 18, 23, 18, 2, 8, 14, 35, 21, 19],
      type: "bar",
      name: "14岁以上",
      stack: "total",
      barWidth: 30,
      itemStyle: {
        color: "#FF99C3",
        shadowColor: "rgba(112, 0, 51, 0.50)",
        shadowBlur: 5,
        opacity: 0.8,
      },
      emphasis: {
        focus: "series",
        label: {
          show: true,
          color: "#333",
        },
      },
    },
  ],
};

const option3 = {
  legend: {
    show: true,
    top: 10,
    left: 40,
    itemWidth: 8,
    itemHeight: 8,
    textStyle: {
      color: "inherit",
    },
  },
  grid: {
    left: 70,
    top: 50,
    right: 70,
    bottom: 80,
  },
  xAxis: {
    type: "category",
    data: [
      "医疗区",
      "养护一区",
      "养护二区",
      "养护三区",
      "养护四区",
      "养护五区",
      "养护六区",
      "养护七区",
      "康复师范中心",
      "特殊教育中心",
      "救助区",
    ],
    axisLabel: {
      color: "#00E2FF",
      fontSize: 14,
      rotate: 45,
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
      data: [21, 25, 17, 7, 5, 10, 4, 18, 24, 15, 6],
      type: "bar",
      name: "视力残疾",
      stack: "total",
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
      emphasis: {
        focus: "series",
        label: {
          show: true,
          color: "#333",
        },
      },
    },
    {
      data: [53, 54, 27, 23, 8, 22, 38, 45, 15, 31, 9],
      type: "bar",
      name: "听力残疾",
      stack: "total",
      barWidth: 30,
      itemStyle: {
        color: "#F1AD1D",
        shadowColor: "#A46F00",
        shadowBlur: 5,
        opacity: 0.8,
      },
      emphasis: {
        focus: "series",
        label: {
          show: true,
          color: "#333",
        },
      },
    },

    {
      data: [5, 5, 40, 17, 44, 50, 22, 33, 5, 30, 17],
      type: "bar",
      name: "言语残疾",
      stack: "total",
      barWidth: 30,
      itemStyle: {
        color: "#00FFAC",
        shadowColor: "rgba(0, 120, 102, 0.57)",
        shadowBlur: 5,
        opacity: 0.8,
      },
      emphasis: {
        focus: "series",
        label: {
          show: true,
          color: "#333",
        },
      },
    },
    {
      data: [12, 16, 22, 76, 23, 12, 33, 14, 65, 11, 69],
      type: "bar",
      name: "肢体残疾",
      stack: "total",
      barWidth: 30,
      itemStyle: {
        color: "#FF99C3",
        shadowColor: "rgba(112, 0, 51, 0.50)",
        shadowBlur: 5,
        opacity: 0.8,
      },
      emphasis: {
        focus: "series",
        label: {
          show: true,
          color: "#333",
        },
      },
    },
    {
      data: [52, 34, 22, 76, 23, 12, 28, 14, 65, 11, 69],
      type: "bar",
      name: "智力残疾",
      stack: "total",
      barWidth: 30,
      itemStyle: {
        color: "#D7D7D7",
        shadowColor: "rgba(15, 33, 60, 0.50)",
        shadowBlur: 5,
        opacity: 0.8,
      },
      emphasis: {
        focus: "series",
        label: {
          show: true,
          color: "#333",
        },
      },
    },
    {
      data: [42, 16, 77, 76, 23, 12, 18, 14, 65, 11, 69],
      type: "bar",
      name: "精神残疾",
      stack: "total",
      barWidth: 30,
      itemStyle: {
        color: "rgba(255, 135, 107, 0.85)",
        shadowColor: "#B3604F",
        shadowBlur: 5,
        opacity: 0.8,
      },
      emphasis: {
        focus: "series",
        label: {
          show: true,
          color: "#333",
        },
      },
    },
    {
      data: [12, 6, 21, 7, 16, 22, 27, 4, 15, 8, 39],
      type: "bar",
      name: "多重残疾",
      stack: "total",
      barWidth: 30,
      itemStyle: {
        color: "#8FB7FF",
        shadowColor: "#5E84C5",
        shadowBlur: 5,
        opacity: 0.8,
      },
      emphasis: {
        focus: "series",
        label: {
          show: true,
          color: "#333",
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
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  &-top {
    display: flex;
    justify-content: space-between;
  }
  &-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 45px;
    div + div {
      margin-left: 20px;
    }
  }
}
</style>
