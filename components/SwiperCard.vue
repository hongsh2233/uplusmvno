<template>
  <swiper
    class="swiper cardSwiper small-card"
    :class="{
      ty02: option.type == 'youtube' || option.type == 'naver',
      ty03: option.type == 'instagram',
    }"
    :modules="modules"
    :slidesPerView="'auto'"
    :spaceBetween="12"
    :grabCursor="true"
    :observer="true"
    :observeParents="true"
    :freeMode="true"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    @swiper="onInit"
    @slideChange="onSlideChange"
    @beforeTransitionStart="isEnd"
  >
    <swiper-slide v-for="(a, i) of data" :key="i">
      <!-- 요금제 카드 -->
      <NuxtLink :to="{}" v-if="option.type == 'rateplan'" @focus="focus(i)" class="link"></NuxtLink>
      <div class="plan_item">
        <div class="card_top">
          <div class="partner">
            <img :src="a.img" :alt="a.alt" />
            <div class="star">
              <span class="blind">별점</span><span class="score">{{ a.score }}</span>
            </div>
          </div>
        </div>
        <div class="card_mid">
          <span class="plan_tit">{{ a.title }}</span>
          <strong class="plan_tit_sub">{{ a.desc }}</strong>
          <div class="plan_info">
            <span class="phone"><span class="blind">통화량</span>100분</span>
            <span class="message"><span class="blind">문자량</span>100건</span>
            <span class="cellular"><span class="blind">통신기술</span>LTE</span>
          </div>
        </div>
        <div class="combi">
          <div class="combi_inner">
            <div class="month">
              <strong>{{ a.price }}</strong>
              <v-btn
                class="btn_tooltip btn-tooltip-price"
                :class="{ on: itemShow[i] }"
                @click="toggleTooltipYear(i)"
                >tooltip toggle</v-btn
              >
              <v-tooltip
                v-model="itemShow[i]"
                :activator="'parent'"
                location="top"
                offset="10"
                :open-on-hover="false"
                :no-click-animation="true"
                scroll-strategy="close"
                class="tooltip-default"
                contained
              >
                <div class="tooltip_content">
                  <div class="tooltip-date-sale">
                    <div class="tooltip-date-sale__item">
                      <h4>12개월 할인금액</h4>
                      <div class="amout">총 277,200원</div>
                    </div>
                    <div class="tooltip-date-sale__item">
                      <h4>기본금액</h4>
                      <div class="amout">총 739,200원</div>
                    </div>
                  </div>
                </div>
              </v-tooltip>
            </div>

            <span class="period">{{ a.priceOption }}</span>
          </div>
        </div>
      </div>
      <!-- //요금제 카드 -->

      <!-- youtube -->
      <div class="thum_item youtube_thum" v-if="option.type == 'youtube'">
        <div class="thum_img">
          <iframe
            :src="a.url"
            :title="a.videoTitle"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen=""
          ></iframe>
        </div>
        <NuxtLink :to="{}" class="thum_con" @focus="focus(i)">
          <img :src="a.img" :alt="a.alt" class="thum" />
          <strong>{{ a.title }}</strong>
          <span>{{ a.channel }}</span>
        </NuxtLink>
      </div>
      <!-- //youtube -->

      <!-- event -->
      <NuxtLink :to="{}" class="link_list" v-if="option.type == 'event'" @focus="focus(i)">
        <span class="blind">이벤트 상세페이지 이동</span>
        <div class="thum_item no_border">
          <div class="thum_img">
            <img :src="a.img" :alt="a.alt" />
          </div>
          <div class="thum_con">
            <strong>{{ a.title }}</strong>
          </div>
        </div>
      </NuxtLink>
      <!-- //event -->

      <!-- instagram -->
      <NuxtLink :to="{}" class="link_list" v-if="option.type == 'instagram'" @focus="focus(i)">
        <div class="thum_item insta_thum">
          <div class="thum_img">
            <img :src="a.img" :alt="a.alt" />
          </div>
          <div class="thum_con">
            <ul class="sns_post">
              <li>{{ a.date }}</li>
              <li>{{ a.id }}</li>
            </ul>
          </div>
        </div>
      </NuxtLink>
      <!-- //instagram -->

      <!-- naver -->
      <NuxtLink :to="{}" class="link_list" v-if="option.type == 'naver'" @focus="focus(i)">
        <div class="thum_item naver_thum">
          <div class="thum_top">
            <img :src="a.img" :alt="a.alt" class="thum" />
            <!-- 추가 ; 23/11/24 -->
            <strong class="title">{{ a.title }}</strong>
          </div>
          <div class="thum_img">
            <img :src="a.img" :alt="a.alt" />
          </div>
          <div class="thum_con">
            <strong>{{ a.title }}</strong>
            <ul class="sns_post">
              <li>{{ a.story }}</li>
            </ul>
          </div>
        </div>
      </NuxtLink>
      <!-- //naver -->
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

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  name: "SwiperCard",
  data() {
    return {
      modules: [Navigation, Pagination],
      swiper: Object,
      itemShow: [],
    };
  },
  mounted() {
    this.data.map((item, index) => {
      this.itemShow.push(false);
    });
  },
  methods: {
    toggleTooltipYear(i) {
      this.itemShow[i] = !this.itemShow[i];
    },
    onInit(a) {
      setTimeout(() => {
        this.isBeginning(a);
        this.isEnd(a);
      }, 10);
      this.swiper = a;
    },
    onSlideChange: function (a) {
      const el = a.el;
      const isHTML = document.querySelector("html").classList.contains("pc");
      if (!isHTML) return;

      const wrapW = a.width;

      const swiperW = a.virtualSize;
      const Translate = a.translate;
      const gap = 20;

      if (swiperW + Translate - gap > wrapW) {
        a.activeIndex != 0 ? el.classList.add("activeIndex") : el.classList.remove("activeIndex");
      }

      this.isBeginning(a);
      this.isEnd(a);
    },
    isBeginning(a) {
      const el = a.el;
      if (a.isBeginning) el.classList.add("isBeginning");
      else el.classList.remove("isBeginning");
    },
    isEnd(a) {
      const el = a.el;
      if (a.isEnd) el.classList.add("isEnd");
      else el.classList.remove("isEnd");
    },
    focus(i) {
      // console.log('focus', i, this.swiper );
      // this.swiper.next()
      this.swiper.slideTo(i);
      // swiper.disable() // Swiper를 비활성화합니다
      // swiper.enable()	// Swiper 활성화(비활성화된 경우)
      // changeDirection
      // realIndexChange
    },
  },
  props: {
    data: Object,
    option: Object,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
