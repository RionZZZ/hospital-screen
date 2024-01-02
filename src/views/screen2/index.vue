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
        <Outside />
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
