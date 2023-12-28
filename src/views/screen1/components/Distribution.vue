<script setup lang="ts">
defineProps<{
  title: string;
  data: { subTitle: string; count: number; percent: string }[];
}>();
</script>

<template>
  <div class="distribution card">
    <div class="title">{{ title }}</div>
    <div class="content">
      <div
        class="distribution-item"
        v-for="(distribution, index) in data"
        :key="index"
      >
        <span class="distribution-item-type">{{ distribution.subTitle }}</span>
        <span class="distribution-item-count"
          >{{ distribution.count }}人({{ distribution.percent }})</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.distribution {
  background-image: url("@/assets/data_card.png");
  width: 216px;
  height: 326px;
  .content {
    margin-bottom: 20px;
  }
  &-item {
    background-image: url("@/assets/distribution.png");
    width: 196px;
    height: 50px;
    display: flex;
    align-items: center;
    &-type {
      color: #a3e9ff;
      font-size: 15px;
      width: 78px;
    }
    &-count {
      color: #13c6ff;
      font-size: 16px;
      padding-left: 12px;
    }
    & + & {
      margin-top: 18px;
    }
  }
}
</style>
