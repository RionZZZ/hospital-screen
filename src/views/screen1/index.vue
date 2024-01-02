<template>
  <div class="background">
    <div class="overview">
      <div class="time"></div>
      <div class="overview-title">全院概况</div>
      <div class="time">{{ currentTime }}</div>
    </div>
    <div class="content">
      <ContentLeft />
      <ContentMiddle />
      <ContentRight />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useScale } from "../../utils/scale.ts";
import ContentLeft from "./components/ContentLeft.vue";
import ContentMiddle from "./components/ContentMiddle.vue";
import ContentRight from "./components/ContentRight.vue";

useScale();

const currentTime = ref();
const getTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = ("0" + (now.getMonth() + 1)).slice(-2);
  const day = ("0" + now.getDate()).slice(-2);
  const hours = ("0" + now.getHours()).slice(-2);
  const minutes = ("0" + now.getMinutes()).slice(-2);
  const seconds = ("0" + now.getSeconds()).slice(-2);
  currentTime.value = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const intervalId = ref();
onMounted(() => {
   intervalId.value = setInterval(getTime, 1000);
});
onBeforeUnmount(() => {
  clearInterval(intervalId.value)
  intervalId.value = null
}),
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 40px;
}
</style>
