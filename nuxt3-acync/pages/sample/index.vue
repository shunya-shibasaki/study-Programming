
<script setup lang="ts">
// カスタム要素を読み込む
import { register } from 'swiper/element/bundle';
register();
</script>

<template>
  <!--
    オプションはswiper-containerに渡す。
    ナビゲーションやブレイクポイントなどは、
    JSON.stringify()にオブジェクトを渡したらうまくいった。
  -->
  <swiper-container
    loop="false"
    speed="600"
    slides-per-view="1.5"
    space-between="20"
    :navigation="JSON.stringify({
      nextEl: '#sampleSwiperNext',
      prevEl: '#sampleSwiperPrev'
    })"
    :breakpoints="JSON.stringify({
      641: {
        slidesPerView: 2.5
      }
    })"
    id="sampleSwiper"
  >
    <swiper-slide>
      <img src="~/assets/img/7J9A0877.jpg" alt="" />
    </swiper-slide>

    <swiper-slide>
      <img src="~/assets/img/image_processing20200630-1-1rg32vr.jpg" alt="" />
    </swiper-slide>

    <swiper-slide>
      <img src="~/assets/img/IMG_3490-1024x683.jpg" alt="" />
    </swiper-slide>
  </swiper-container>

  <!-- 今回は適当にスライドボタンを自前で用意 -->
  <div :class="$style.buttons">
    <button type="button" id="sampleSwiperPrev">
      Prev
    </button>

    <button type="button" id="sampleSwiperNext">
      Next
    </button>
  </div>
</template>

<style module>
  img {
    width: 100%;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
</style>