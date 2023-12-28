<template>
  <div class="background">
    <div class="overview">
      <div class="time"></div>
      <div class="overview-title">全院概况</div>
      <div class="time">2023-12-12 12:12:12</div>
    </div>
    <div class="content">
      <ContentLeft />
      <ContentMiddle />
      <ContentRight />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScale } from "../../utils/scale.ts";
import ContentLeft from "./components/ContentLeft.vue";
import ContentMiddle from "./components/ContentMiddle.vue";
import ContentRight from "./components/ContentRight.vue";

useScale();
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
    width: 250px;
    text-align: right;
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
