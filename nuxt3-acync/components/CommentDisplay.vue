<template>
  <dev>
    <p>{{ props.comment }}</p>
  </dev>
</template>

<script setup lang="ts">
const props = defineProps<{
  comment: string | undefined
}>();
</script>

<style scoped>
p {
  text-align: center;
  margin: 10px 0 0;
}
</style>