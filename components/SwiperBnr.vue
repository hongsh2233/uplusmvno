<template>
  <swiper
    class="swiper bnrSwiper"
    :modules="modules"
    :slidesPerView="1"
    :spaceBetween="17"
    :loop="true"
    :autoplay="isAutoplay"
    :observer="true"
    :observeParents="true"
    :pagination="pagination"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    @swiper="onInit"
  >
    <swiper-slide v-for="(a, i) of data" :key="i">
      <NuxtLink :to="a.to" @focus="focus(i)">
        <img :src="a.img" :alt="a.alt" class="pc_hide" />
        <img :src="a.pc_img" :alt="a.alt" class="pc_show" />
      </NuxtLink>
    </swiper-slide>

    <div class="play_box">
      <button type="button" class="play_start" v-if="!autoPlay" @click="autoPlay = true">
        <span class="blind">시작</span>
      </button>
      <button type="button" class="play_stop" v-if="autoPlay" @click="autoPlay = false">
        <span class="blind">멈춤</span>
      </button>
    </div>

    <div v-if="!front.isMobile() && data.length > 1" class="swiper-navigation custom-navigation">
      <div class="left">
        <button type="button" class="swiper-button-prev"></button>
      </div>
      <div class="right">
        <button type="button" class="swiper-button-next"></button>
      </div>
    </div>
  </swiper>
</template>

<script>
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import frontData from "@/assets/frontData.js";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default {
  name: "SwiperBnr",
  data() {
    return {
      modules: [Pagination, Navigation, Autoplay],
      data: frontData.swiper.banner,
      swiper: Object,
      autoPlay: true,
      isAutoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    };
  },
  watch: {
    autoPlay(a, b) {
      if (b) this.swiper.autoplay.stop();
      else this.swiper.autoplay.start();
    },
  },
  methods: {
    onInit(a) {
      this.swiper = a;
    },
    focus(i) {
      this.swiper.slideTo(i);
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
