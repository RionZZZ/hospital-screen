<template>
  <Circle ref="circleRef" width="350px" height="300px" />
</template>

<script setup lang="ts">
import Circle from "@/components/circle.vue";
import { onMounted, ref } from "vue";

const circleRef = ref();
onMounted(() => {
  circleRef.value?.run({
    视力残疾: {
      $count: 66,
    },
    听力残疾: {
      $count: 23,
    },
    言语残疾: {
      $count: 46,
    },
    肢体残疾: {
      $count: 79,
    },
    智力残疾: {
      $count: 16,
    },
    精神残疾: {
      $count: 20,
    },
    多重残疾: {
      $count: 9,
    },
  });
});
</script>

