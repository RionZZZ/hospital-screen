<template>
  <div class="info">
    <p class="text">
      全院共有<span class="number">554</span>名男童,
      <span class="number">89</span>名女童,
      <span class="number">153</span>名3岁以下儿童,
      <span class="number">31</span>名4-5岁儿童,
      <span class="number">56</span>名6-13岁儿童,
      <span class="number">34</span>名14及以上儿童,
      <span class="number">90%</span>以上的儿童都有不同程度的残疾
    </p>
  </div>
</template>

<style lang="scss" scoped>
.info {
  background-image: url("@/assets/children_info.png");
  width: 484px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  .text {
    margin: 70px 56px;
    font-size: 17px;
    font-weight: 600;
    color: #00e2ff;
    line-height: 36px;
    .number {
      color: #f1ad1d;
      font-size: 24px;
    }
  }
}
</style>
