<template>
  <!-- 개발 붙일때는 new-main_bnr 클래스 꼭 추가해주세요(차후 개발건으로 클래스) -->
  <swiper
    class="swiper main_bnr new-main_bnr"
    :modules="modules"
    slides-per-view="1"
    space-between="5"
    :loop="true"
    :autoplay="isAutoplay"
    :pagination="isPagination"
    :observer="true"
    :observeParents="true"
    :slideToClickedSlide="true"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    @swiper="onInit"
  >
    <!-- pc/mo image 분리 ; 23/11/30 -->
    <swiper-slide v-for="(a, i) of data" :key="i">
      <NuxtLink :to="a.to" @focus="focus(i)">
        <img :src="a.img" :alt="a.alt" class="pc_hide" />
        <img :src="a.pc_img" :alt="a.alt" class="pc_show" />
      </NuxtLink>
    </swiper-slide>

    <div v-if="data.length > 1" class="play_box">
      <button type="button" class="play_start" v-if="!autoPlay" @click="autoPlay = true">
        <span class="blind">시작</span>
      </button>
      <button type="button" class="play_stop" v-if="autoPlay" @click="autoPlay = false">
        <span class="blind">멈춤</span>
      </button>
      <div class="swiper-pagination"></div>
    </div>

    <!-- <div v-if="!front.isMobile() && data.length > 1" class="swiper-navigation custom-navigation">
      <div class="left">
        <button type="button" class="swiper-button-prev"></button>
      </div>
      <div class="right">
        <button type="button" class="swiper-button-next"></button>
      </div>
    </div> -->
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
  name: "SwiperMainBnr",
  data() {
    return {
      modules: [Pagination, Navigation, Autoplay],
      data: frontData.swiper.mainBanner,
      swiper: Object,
      autoPlay: true,
      isAutoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      isPagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
    };
  },
  watch: {
    autoPlay(a, b) {
      if (b) this.swiper.autoplay.stop();
      else this.swiper.autoplay.start();
    },
  },
  created() {
    // if (!front.isMobile()) {
    //   this.isPagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //       return '<button class="' + className + '">' + (index + 1) + "</button>";
    //     }
    //   }
    // }
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
