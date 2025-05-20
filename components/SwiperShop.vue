<template>
  
  <swiper
    class="swiper shop_view"
    :modules="modules"

    slides-per-view="1"
    space-between="17"
    :loop="true"
    :pagination="true"
    :observer="true"
    :observeParents="true"
    
    @swiper="onInit"
  >
    <swiper-slide v-for="(a, i) of data" :key="i" tabindex="0" @focus="focus(i)">
      <div class="img">
        <img :src="a.img" :alt="a.alt">
      </div>
    </swiper-slide>
  </swiper>
    
</template>
      
<script>
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import frontData from '@/assets/frontData.js'

import 'swiper/css';
import 'swiper/css/pagination';

export default {
  name: "SwiperShop",
  data(){
    return {
      modules: [Pagination],
      swiper: Object,
      data: frontData.swiper.shop,
    }
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