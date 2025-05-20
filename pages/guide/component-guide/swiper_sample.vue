<template>
    
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>
      
      <div class="page_info">swiper</div>

      <div class="section ty02">
        <div class="tit_wrap">
          <h3 class="tit03">내가 찜한 요금제 (7개)</h3>
          <NuxtLink :to="{}" class="more">더보기</NuxtLink>
        </div>

        <!-- 내가 찜한 요금제 -->
        <div class="swiper cardSwiper">
          <swiper
            :slides-per-view="2.5"
            :space-between="1"
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange">
            <swiper-slide v-for="n of 7" :key="n">
                <div class="swiper-wrapper">
                  <a href="javascript:void(0);">
                    <div class="plan_item">
                      <div class="card_top">
                        <div class="partner">
                          <img src="/images/data/logo_s_partner06.png" alt="프리티">
                          <div class="star"><span class="blind">별점</span><span class="score">4.5</span></div>
                        </div>
                      </div>
                      <div class="card_mid">
                        <span class="plan_tit">데이터안심15G+</span>
                        <strong class="plan_tit_sub">월 11GB + 매일 2GB + 3Mbps</strong>
                      </div>
                      <div class="combi">
                        <div class="combi_inner">
                          <strong>월 10,890원</strong>
                          <span class="period">6개월 이후 38,900원</span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <!-- Slide {{ n }} -->
                </div>
            </swiper-slide>
          </swiper>
          <!-- swiper_control -->
          <div class="card_swiper_control">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <!-- //swiper_control -->
        </div>
      </div> <!-- // section -->

      <div class="section ty02">
        <h3 class="tit02">card Swiper (3개)</h3>

        <div class="swiper cardSwiper">
          <swiper
            :slides-per-view="2.5"
            :space-between="1"
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange">
            <swiper-slide v-for="n of 3" :key="n">
                <div class="swiper-wrapper">
                  <a href="javascript:void(0);">
                    <div class="plan_item">
                      <div class="card_top">
                        <div class="partner">
                          <img src="/images/data/logo_s_partner06.png" alt="프리티">
                          <div class="star"><span class="blind">별점</span><span class="score">4.5</span></div>
                        </div>
                      </div>
                      <div class="card_mid">
                        <span class="plan_tit">데이터안심15G+</span>
                        <strong class="plan_tit_sub">월 11GB + 매일 2GB + 3Mbps</strong>
                      </div>
                      <div class="combi">
                        <div class="combi_inner">
                          <strong>월 10,890원</strong>
                          <span class="period">6개월 이후 38,900원</span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <!-- Slide {{ n }} -->
                </div>
            </swiper-slide>
          </swiper>
          <!-- swiper_control -->
          <div class="card_swiper_control">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <!-- //swiper_control -->
        </div>

      </div> <!-- // section -->        

      <div class="section ty02">
        <h3 class="tit02">card Swiper (2개)</h3>

        <div class="swiper cardSwiper">
          <swiper
            :slides-per-view="2.5"
            :space-between="1"
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange">
            <swiper-slide v-for="n of 2" :key="n">
                <div class="swiper-wrapper">
                  <a href="javascript:void(0);">
                    <div class="plan_item">
                      <div class="card_top">
                        <div class="partner">
                          <img src="/images/data/logo_s_partner06.png" alt="프리티">
                          <div class="star"><span class="blind">별점</span><span class="score">4.5</span></div>
                        </div>
                      </div>
                      <div class="card_mid">
                        <span class="plan_tit">데이터안심15G+</span>
                        <strong class="plan_tit_sub">월 11GB + 매일 2GB + 3Mbps</strong>
                      </div>
                      <div class="combi">
                        <div class="combi_inner">
                          <strong>월 10,890원</strong>
                          <span class="period">6개월 이후 38,900원</span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <!-- Slide {{ n }} -->
                </div>
            </swiper-slide>
          </swiper>

          <!-- swiper_control -->
          <div class="card_swiper_control">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <!-- //swiper_control -->
        </div>

      </div> <!-- // section -->

      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">YouTube</h3>
          <NuxtLink :to="{}" class="more">더보기</NuxtLink>
        </div>

        <div class="swiper cardSwiper ty02">
          <swiper
            :slides-per-view="2.2"
            :space-between="1"
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange">
            <swiper-slide v-for="n of 4" :key="n">
              <div class="thum_item">
                <div class="thum_img">
                  <iframe src="https://www.youtube.com/embed/xt9WafOY8d0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                </div>
                <NuxtLink :to="{}" class="thum_con">
                  <strong>편의점 알뜰폰 유심 사봄 feat.원칩</strong>
                  <span>2023.02.02</span>
                </NuxtLink>
              </div>
            </swiper-slide>
          </swiper>
          <!-- swiper_control -->
          <div class="card_swiper_control">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <!-- //swiper_control -->
        </div>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit03">다른 이벤트도 둘러보세요</h3>

        <div class="swiper cardSwiper">
          <swiper
            :slides-per-view="2.5"
            :space-between="1"
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange">
            <swiper-slide v-for="n of 4" :key="n">
              <NuxtLink :to="{}" class="link_list"><span class="blind">이벤트 상세페이지 이동</span>
                <div class="thum_item no_border">
                  <div class="thum_img">
                    <img src="/images/data/img_card_thum07.png" alt="혜택 이벤트 썸네일">
                  </div>
                  <div class="thum_con">
                    <strong>무제한이 9천원대! 오직 알뜰폰닷컴에서만<br>무제한이 9천원대! 오직 알뜰폰닷컴에서만</strong>
                  </div>
                </div>
              </NuxtLink>
            </swiper-slide>
          </swiper>
          <!-- swiper_control -->
          <div class="card_swiper_control">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <!-- //swiper_control -->
        </div>
      </div> <!-- // section -->

      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">인스타그램</h3>
          <NuxtLink :to="{}" class="more">더보기</NuxtLink>
        </div>

        <div class="swiper cardSwiper ty03">
          <swiper
            :slides-per-view="3.8"
            :space-between="1"
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange">
            <swiper-slide v-for="n of 7" :key="n">
              <NuxtLink :to="{}" class="link_list">
                <div class="thum_item insta_thum">
                  <div class="thum_img">
                    <img src="/images/data/img_card_thum10.png" alt="인스타그램 썸네일">
                  </div>
                  <div class="thum_con">
                    <ul class="sns_post">
                      <li>@aiden_group</li>
                      <li>2023.02.02</li>
                    </ul>
                  </div>
                </div>
              </NuxtLink>
            </swiper-slide>
          </swiper>
          <!-- swiper_control -->
          <div class="card_swiper_control">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <!-- //swiper_control -->
        </div>
      </div> <!-- // section -->
        
      <div class="section">
        <h3 class="tit02">flow Swiper</h3>

        <div class="swiper flowSwiper">
          <swiper
            :slides-per-view="5.3"
            :space-between="1"
            :autoplay="{delay: 0, disableOnInteraction: true}"
            :modules="modules"
            :loop=true
            :speed="3000"
            @swiper="onSwiper"
            @slideChange="onSlideChange">
            <swiper-slide v-for="n in flow_swiper" :key="n">
              <NuxtLink :to=n.to><img :src=n.src :alt=n.alt></NuxtLink>
            </swiper-slide>
          </swiper>
        </div>
          
      </div> <!-- // section -->
        
      <div class="section">
        <h3 class="tit02">banner Swiper</h3>

        <div class="swiper bnrSwiper">
          <div class="swiper-wrapper">
            <swiper
            :slides-per-view="1"
            :space-between="1"
            :pagination="{ clickable: true }"
            :autoplay="{delay: 1000, disableOnInteraction: false}"
            :modules="modules"
            effect="fade"
            :speed="1200"
            @swiper="onSwiper"
            @slideChange="onSlideChange">
              <swiper-slide v-for="bnr in bnr_swiper" :key="bnr">
                <NuxtLink :to=bnr.to>
                  <img :src=bnr.src :alt=bnr.alt class="pc_hide">
                  <img :src=bnr.pc_src :alt=bnr.alt class="pc_show">
                </NuxtLink>
              </swiper-slide>
            </swiper>
          </div>
          <div class="swiper-pagination"></div>
        </div>
          
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div> <!-- // container -->

</template>

<script>
// import '@/composables/swiper-bundle.min.js';
// import '@/assets/css/swiper-bundle.css';

// core version + navigation, pagination modules:
import { Navigation, Pagination, Scrollbar, EffectFade, Autoplay, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  name: "GuideSwiper",
  emits: ['setLayout', 'openPopup'],
  components: {
    Swiper,
    SwiperSlide
  },
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },
      modules: [Navigation, Pagination, Scrollbar, EffectFade, Autoplay, Parallax],
      flow_swiper: [
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner01.png", alt: "A모바일"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner02.png", alt: "FLASH모바일"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner03.png", alt: "KG모빌리언스"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner04.png", alt: "U+유모바일"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner05.png", alt: "WELL"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner06.png", alt: "freeT"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner07.png", alt: "mobing"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner08.png", alt: "리브모바일"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner09.png", alt: "마블프로듀스"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner10.png", alt: "벨류컴"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner11.png", alt: "슈가모바일"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner12.png", alt: "스노우맨"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner13.png", alt: "스마텔"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner14.png", alt: "아이즈모바일"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner15.png", alt: "앤텔레콤"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner16.png", alt: "에스원안심모바일"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner17.png", alt: "여유텔레콤"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner18.png", alt: "이야기모바일"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner19.png", alt: "이지모바일"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner20.png", alt: "인스모바일"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner21.png", alt: "티플러스"},
        {to: "javascript:void(0);", src: "http://localhost:8000/logo_partner22.png", alt: "헬로모바일"},
      ],
      bnr_swiper: [
        {to: "javascript:void(0);", src: "http://localhost:8000/img_bnr01.jpg", pc_src: "http://localhost:8000/img_bnr01_pc.jpg", alt: "혜택을 가지고 다시 돌아왔어요! 데이터 프리덤 300GB"},
        {to: "javascript:void(0);", src: "http://localhost:8000/img_bnr01.jpg", pc_src: "http://localhost:8000/img_bnr01_pc.jpg", alt: "혜택을 가지고 다시 돌아왔어요! 데이터 프리덤 300GB"},
        {to: "javascript:void(0);", src: "http://localhost:8000/img_bnr01.jpg", pc_src: "http://localhost:8000/img_bnr01_pc.jpg", alt: "혜택을 가지고 다시 돌아왔어요! 데이터 프리덤 300GB"},
        {to: "javascript:void(0);", src: "http://localhost:8000/img_bnr01.jpg", pc_src: "http://localhost:8000/img_bnr01_pc.jpg", alt: "혜택을 가지고 다시 돌아왔어요! 데이터 프리덤 300GB"},
      ]
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    // init Swiper:
    // const swiper = new Swiper('.swiper', {
    //   // configure Swiper to use modules
    //   modules: [Navigation, Pagination],
    // });
  },
  methods: {
    onSwiper: function(swiper) {
      console.log("onSwiper")
    },
    onSlideChange: function() {
      console.log("onSlideChange")
    }
  }
};
</script>
