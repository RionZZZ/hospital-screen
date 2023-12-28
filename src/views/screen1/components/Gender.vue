<script setup lang="ts">
defineProps<{ male: number; female: number }>();
</script>

<template>
  <div class="gender card">
    <div class="title">性别</div>
    <div class="content">
      <div class="gender-item">
        <span class="gender-item-type">男性</span>
        <span class="gender-item-count">{{ male }}</span>
        <span class="gender-item-unit">人</span>
      </div>
      <div class="gender-item">
        <span class="gender-item-type">女性</span>
        <span class="gender-item-count">{{ female }}</span>
        <span class="gender-item-unit">人</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gender {
  background-image: url("@/assets/data_card.png");
  width: 216px;
  height: 326px;
  .content {
    margin-bottom: 20px;
  }
  &-item {
    background-image: url("@/assets/gender.png");
    width: 168px;
    height: 92px;
    display: flex;
    align-items: center;
    justify-content: center;
    &-type {
      color: #13c6ff;
      font-size: 19px;
      padding-right: 14px;
    }
    &-count {
      color: #60d9ff;
      font-size: 26px;
      font-weight: 600;
    }
    &-unit {
      color: #60d9ff;
      font-size: 19px;
    }
    & + & {
      margin-top: 25px;
    }
  }
}
</style>
