<template>
  <swiper
    class="swiper flowSwiper"
    :modules="modules"
    :slidesPerView="'auto'"
    :space-between="32"
    :centeredSlides="true"
    :loop="true"
    :autoplay="{
      delay: 0,
      disableOnInteraction: true,
    }"
    :speed="5000"
    :allowTouchMove="false"
    @swiper="onInit"
  >
    <swiper-slide v-for="(a, i) of data" :key="i">
      <NuxtLink :to="{}" @focus="focus(i)"><img :src="a.img" :alt="a.alt" /></NuxtLink>
    </swiper-slide>
  </swiper>
</template>
  
<script>
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import frontData from "@/assets/frontData.js";

import "swiper/css";
import "swiper/css/autoplay";

export default {
  name: "SwiperFlow",
  data() {
    return {
      modules: [Autoplay],
      swiper: Object,
      data: frontData.swiper.flow,  // @/assets/frontData.js
    };
  },
  methods:{
    onInit(a){
      this.swiper = a;
    },
    focus(i){
      // this.swiper.autoplay.stop();
      // this.swiper.slideTo(i);
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  }
};
</script>