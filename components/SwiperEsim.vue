<template>
  <swiper
    class="swiper cardSwiper ty04"
    :modules="modules"
    :slidesPerView="'auto'"
    :spaceBetween="12"
    :grabCursor="true"
    :observer="true"
    :observeParents="true"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"

    @swiper="onInit"
  >
    <swiper-slide v-for="(a, i) of data" :key="i" tabindex="0" @focus="focus(i)">
      <div class="guid_img_item ty03">
        <strong class="fs12 fc01">{{ a.step }}</strong>
        <h3 class="tit02" v-html="a.title"></h3>
        <div class="guid_img">
          <img :src="a.img" :alt="a.alt" />
        </div>
      </div>
    </swiper-slide>

    <div class="swiper-navigation">
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
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import frontData from "@/assets/frontData.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  name: "SwiperEsim",
  data() {
    return {
      modules: [Navigation, Pagination],
      swiper: Object,
      data: this.option.type == "ios" ? frontData.swiper.esimios : frontData.swiper.esimaos,
    };
  },
  methods:{
    onInit(a){
      this.swiper = a;
    },
    focus(i){
      this.swiper.slideTo(i);
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    option: Object,
  },
};
</script>