<template>

  <swiper
    class="swiper notice"
    :modules="modules"

    slides-per-view="1"
    space-between="0"
    :loop="true"
    :autoplay="isAutoplay"
    :pagination="true"
    :navigation="ISNAVIGATION"
    :observer="true"
    :observeParents="true"

    @swiper="onInit"
  >
    <swiper-slide v-for="(a, i) of data" :key="i">
      <NuxtLink :to="a.to" @focus="focus(i)"><img :src="a.img" :alt="a.alt"></NuxtLink>
    </swiper-slide>

    <div class="play_box">
      <button type="button" class="play_start" v-if="!autoPlay" @click="autoPlay = true"><span class="blind">시작</span></button>
      <button type="button" class="play_stop" v-if="autoPlay" @click="autoPlay = false"><span class="blind">멈춤</span></button>
    </div>
  </swiper>
  
</template>
    
<script>
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import frontData from '@/assets/frontData.js'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

/**
 *
 * @param {*} props
 * isNavigation: 네비게이션 여부(PC에서만 처리)
 * @returns
 */

export default {
  name: "SwiperNotice",
  props: {
    isNavigation: {
      type: Boolean,
      require: false,
      default: true,
    }
  },
  data(){
    return {
      modules: [Pagination, Navigation, Autoplay],
      swiper: Object,
      autoPlay: true,
      isAutoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      data: frontData.swiper.notice,
      ISNAVIGATION: false
    }
  },
  watch:{
    autoPlay(a, b){
      if( b )   this.swiper.autoplay.stop();
      else      this.swiper.autoplay.start();
    }
  },
  created() {
    // Navigation pc, mobile check
    this.ISNAVIGATION = (!front.isMobile()) ? this.isNavigation : false;
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
    SwiperSlide
  },
};
</script>