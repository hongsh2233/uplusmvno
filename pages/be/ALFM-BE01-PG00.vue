<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav" v-html="layout.title"></h2>

      <div class="section">
        <div class="cir_icon_link">
          <ul>
            <li><NuxtLink :to="{}" class="icon_link youtube"><span>YouTube</span></NuxtLink></li>
            <li><NuxtLink :to="{}" class="icon_link blog"><span>네이버 블로그</span></NuxtLink></li>
            <li><NuxtLink :to="{}" class="icon_link insta"><span>인스타그램</span></NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">YouTube</h3>
          <NuxtLink :to="{}" class="more">더보기</NuxtLink>
        </div>
        <SwiperCard :data="frontData.swiper.youtube" :option="{ type: 'youtube' }" />

      </div>

      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">네이버 블로그</h3>
          <NuxtLink :to="{}" class="more">더보기</NuxtLink>
        </div>
        <SwiperCard :data="frontData.swiper.naver" :option="{ type: 'naver' }" />

      </div>
      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">인스타그램</h3>
          <NuxtLink :to="{}" class="more">더보기</NuxtLink>
        </div>
        <SwiperCard :data="frontData.swiper.instagram" :option="{ type: 'instagram' }" />

      </div>

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
export default {
  name: 'ALFM-BE01-PG00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '알뜰폰닷컴 활용하기' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>
