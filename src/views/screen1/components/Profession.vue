<script setup lang="ts">
defineProps<{ professionPerson: { title: string; count: number }[] }>();
</script>

<template>
  <div class="profession card">
    <div class="title">专业人员结构</div>
    <div class="table-bg">
      <div class="table">
        <div
          class="data-count"
          v-for="(data, index) in professionPerson"
          :key="index"
        >
          {{ data.title }}: <span class="count">{{ data.count }}</span
          >人
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profession {
  background-image: url("@/assets/profession.png");
  width: 453px;
  height: 248px;
}
.table-bg {
  background-image: url("@/assets/profession_table.png");
  margin: 3px auto;
  width: 423px;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 175px;
  width: 405px;
  background-image: url("@/assets/profession_data.png");
  color: #00e2ff;
  font-size: 16px;
  .data-count {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .count {
    font-size: 26px;
    color: #13c6ff;
    padding-left: 6px;
  }
}
</style>
