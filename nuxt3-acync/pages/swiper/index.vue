<template>
  <div class="carousel"
    v-if="carouselSize.width && carouselSize.height"
    :style="{ width: carouselSize.width + 'px', height: carouselSize.height + 'px' }"
  >
    <SwiperComponent @updateComment="updateComment" :parent-width="carouselSize.width" />
    <CommentDisplay :comment="currentComment"/>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useWindowSize } from '@vueuse/core'

const { width: windowWidth, height: windowHeight } = useWindowSize();

const currentComment = ref<string>()

const SIZE_BLOCK_OFFSET = 48 + 16 + 40 + 52 * 2;
const SIZE_INLINE_OFFSET = 185 + 5 + 40 * 2 + 52 * 2;
const aspectRatio = 5 / 6; // アスペクト比を設定

const carouselSize = ref({ width: 0, height: 0})

const updateCarouselSize = () => {
  const width = Math.floor(windowWidth.value - SIZE_INLINE_OFFSET);
  const height = Math.floor(windowHeight.value - SIZE_BLOCK_OFFSET);

  const maxWidth = Math.floor(aspectRatio * height);
  const actualWidth = Math.min(width, maxWidth);
  const actualHeight = Math.floor(actualWidth * (6 / 5));

  carouselSize.value = { width: actualWidth, height: actualHeight };
};

const updateComment = (newComment: string) => {
  currentComment.value = newComment
}

// ウィンドウリサイズ時にサイズを再計算
onMounted(() => {
  updateCarouselSize()
  // window.addEventListener('resize', () => {
  //   windowWidth.value = window.innerWidth;
  //   windowHeight.value = window.innerHeight;
  // });
});

// 画面サイズが変更されたら再計算
watch([windowWidth, windowHeight], updateCarouselSize);
</script>

<style scoped>
.carousel {
  overflow: hidden;
  position: relative;
}
</style>