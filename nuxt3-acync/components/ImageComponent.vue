<template>
  <picture class="image-wrapper" :style="{ height: height + 'px' }">
    <img :src="src" alt="Image" @load="onImageLoad" />
  </picture>
</template>

<script setup lang="ts">
type Props = {
  height: number;
  src: string
}
const props = defineProps<Props>();

const onImageLoad = () => {
  console.log('Image loaded with height:', props.height);
};

watchEffect(() => {
  console.log('Image height:', props.height); // デバッグ用
});
</script>

<style scoped>
.image-wrapper {
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
</style>
