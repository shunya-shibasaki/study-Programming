<template>
  <swiper 
    :modules="[Navigation]" 
    :slides-per-view="1"
    @slideChange="onSlideChange"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }"
  >
    <swiper-slide v-for="image in images" :key="image.id">
      <ImageComponent :height="calculatedHeight" :src="image.src" />
    </swiper-slide>
  </swiper>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</template>

<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { onMounted, ref } from 'vue'

type Props = {
  parentWidth: number
}

interface SwiperInstance {
  realIndex: number;
}

const props = defineProps<Props>()
console.log('parentWidth---', props.parentWidth)

//data
const images = [
  {
    id: 1,
    src: 'assets\img\カワイクテゴメンネ.jpg',
    comment: 'This is the first image.'
  },
  {
    id: 2,
    src: 'assets\img\image_processing20200630-1-1rg32vr.jpg',
    comment: 'This is the second image.'
  },
  {
    id: 3,
    src: 'assets\img\IMG_3490-1024x683.jpg',
    comment: 'This is the third image.'
  }
];

const emit = defineEmits(['updateComment'])

const onSlideChange = (swiper: SwiperInstance) => {
  console.log('Slide changed');
  const currentComment = images[swiper.realIndex].comment
  emit('updateComment', currentComment)
}

const calculatedHeight = computed(() => {
  return Math.floor(props.parentWidth * (6 / 5));
});

onMounted(() => {
  emit('updateComment', images[0].comment)
})
</script>

<style scoped>
p {
  text-align: center;
  margin: 10px 0 0;
}

.swiper-slide {
  overflow: hidden;
  height: inherit;
}

.swiper-button-next,
.swiper-button-prev {
  color: #000;
  cursor: pointer;
}
</style>
