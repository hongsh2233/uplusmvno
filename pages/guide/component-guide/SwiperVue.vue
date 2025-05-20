<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>
        
      <div class="page_info">swiper Vue</div>

      <div class="section ty02">
        <div class="tit_wrap">
          <h3 class="tit03">내가 찜한 요금제 (7개)</h3>
          <NuxtLink :to="{}" class="more">더보기</NuxtLink>
        </div>
        <SwiperCard :data="frontData.swiper.rateplan" :option="{ type: 'rateplan' }" />
      </div>


      <div class="section ty02">
      <h3 class="tit02">card Swiper (3개)</h3>
        <SwiperCard :data="frontData.swiper.rateplan3" :option="{ type: 'rateplan' }" />
      </div>


      <div class="section ty02">
      <h3 class="tit02">card Swiper (2개)</h3>
        <SwiperCard :data="frontData.swiper.rateplan2" :option="{ type: 'rateplan' }" />
      </div>


      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">YouTube</h3>
          <NuxtLink :to="{}" class="more">더보기</NuxtLink>
        </div>
        <SwiperCard :data="frontData.swiper.youtube" :option="{ type: 'youtube' }" />
        
      </div>


      <div class="section">
        <h3 class="tit03">다른 이벤트도 둘러보세요</h3>
        <SwiperCard :data="frontData.swiper.event" :option="{ type: 'event' }" />
      </div>


      <div class="section">
        <h3 class="tit03">인스타그램</h3>
        <SwiperCard :data="frontData.swiper.instagram" :option="{ type: 'instagram' }" />
      </div>


      <div class="section">
        <h3 class="tit02">flow Swiper</h3>
        <SwiperFlow />
      </div>

      <div class="section">
        <h3 class="tit02">banner Swiper</h3>
        <SwiperBnr />
      </div>


      <div class="section">
        <h3 class="tit02">Notice Swiper</h3>
        <div style="width:28rem;">
          <SwiperNotice />
        </div>
      </div>


      <div class="section" style="background:#f1f3f4">
        <h3 class="tit02">main Swiper</h3>
        <SwiperMainBnr />
        <br>
      </div>

      <div class="section">
        <h3 class="tit02">내 휴대폰 설정에서 개통하는 방법</h3>
        <strong>아이폰</strong>
        <SwiperEsim :option="{type: 'ios'}" />

        <strong>갤럭시(안드로이드)</strong>
        <SwiperEsim :option="{type: 'aos'}" />
      </div>


      <div class="section">
        <h3 class="tit02">LG유플러스 상암동 누리꿈점</h3>
        <div style="width:26.6rem;">
          <SwiperShop />
        </div>
      </div>


  
    </div> <!-- // content -->
  </div> <!-- // container -->
  
</template>
  
<script>
import SwiperCard from '@/components/SwiperCard'
import SwiperFlow from '@/components/SwiperFlow'
import SwiperBnr from '@/components/SwiperBnr'
import SwiperNotice from '@/components/SwiperNotice'
import SwiperMainBnr from '@/components/SwiperMainBnr'
import SwiperEsim from '@/components/SwiperEsim'
import SwiperShop from '@/components/SwiperShop'
  
export default {
  name: "GuideSwiper",
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: 'none', title: '' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components: {
    SwiperCard,
    SwiperFlow,
    SwiperBnr,
    SwiperNotice,
    SwiperMainBnr,
    SwiperEsim,
    SwiperShop
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
};
</script>
