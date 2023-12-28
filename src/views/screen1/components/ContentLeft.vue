<template>
  <div>
    <Profession :professionPerson="professionPerson"></Profession>
    <div class="data-count">
      <Gender :male="12" :female="55" />
      <Distribution title="年龄区间" :data="ageData" />
      <Distribution title="学历分布" :data="educationData" />
      <Distribution title="职称分布" :data="positionData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Profession from "./Profession.vue";
import Gender from "./Gender.vue";
import Distribution from "./Distribution.vue";

const professionPerson = [
  { title: "总数", count: 111 },
  { title: "医生", count: 23 },
  { title: "护士", count: 26 },
  { title: "药师", count: 8 },
  { title: "教师", count: 12 },
  { title: "康复师", count: 3 },
];
const ageData = [
  {
    subTitle: "35岁以下",
    count: 8,
    percent: "20%",
  },
  {
    subTitle: "36-45岁",
    count: 8,
    percent: "20%",
  },
  {
    subTitle: "46-55岁",
    count: 8,
    percent: "20%",
  },
  {
    subTitle: "55岁以上",
    count: 2,
    percent: "5%",
  },
];

const educationData = [
  {
    subTitle: "博士",
    count: 8,
    percent: "20%",
  },
  {
    subTitle: "硕士",
    count: 8,
    percent: "20%",
  },
  {
    subTitle: "本科",
    count: 8,
    percent: "20%",
  },
  {
    subTitle: "大专及以下",
    count: 2,
    percent: "5%",
  },
];

const positionData = [
  {
    subTitle: "高级职称",
    count: 8,
    percent: "20%",
  },
  {
    subTitle: "中级职称",
    count: 8,
    percent: "20%",
  },
  {
    subTitle: "初级职称",
    count: 8,
    percent: "20%",
  },
];
</script>

<style lang="scss" scoped>
.data-count {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  align-items: center;
  margin-top: 24px;
}
</style>
