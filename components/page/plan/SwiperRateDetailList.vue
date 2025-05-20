<template>
  <div class="section section-rate-detail">
    <div class="heading">
      <h4>이 요금제가 좋은 이유</h4>
      <p class="description">
        저렴하고 개통이 편리해서<br class="pc_hide" />
        <span class="point"> 가장 인기 있는</span> 요금제에요.<br />
        최대 500Mbps 속도의 인터넷을 즐기면서, 출퇴근 길에 음악을 들을 수 있어요.
      </p>
    </div>

    <swiper
      class="swiper detail-card"
      v-bind="options"
      @swiper="onInit"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <NuxtLink to="#none" class="rate-item current" @click.prevent="handleCurrent">
          <span class="order-num">1</span>
          <p class="partner"><img src="/images/data/logo_partner04.png" alt="U+ U mobile" /></p>
          <p class="rate-info">마블링 프라임 100분 15GB + 3Mbps</p>

          <div class="rate">
            <p class="rate__month">월 14,200원</p>
            <p class="rate__term">7개월 이후 32,900원</p>
          </div>

          <div class="current-rate">현재 보고 있는 요금제</div>
        </NuxtLink>
      </swiper-slide>
      <swiper-slide>
        <NuxtLink to="#none" class="rate-item" @click.prevent="handleCurrent">
          <span class="order-num">2</span>
          <p class="partner"><img src="/images/data/logo_partner05.png" alt="WinnerStel" /></p>
          <div class="rate-info">[ERL] 5G 음성 300분 15GB</div>

          <div class="rate">
            <p class="rate__month">월 14,200원</p>
            <p class="rate__term">7개월 이후 32,900원</p>
          </div>
        </NuxtLink>
      </swiper-slide>
      <swiper-slide>
        <NuxtLink to="#none" class="rate-item" @click.prevent="handleCurrent">
          <span class="order-num">3</span>
          <p class="partner"><img src="/images/data/logo_partner06.png" alt="프리티" /></p>
          <p class="rate-info">[KSR] 이야기 데이터 스페셜</p>

          <div class="rate">
            <p class="rate__month">월 14,200원</p>
            <p class="rate__term">7개월 이후 32,900원</p>
          </div>
        </NuxtLink>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  data() {
    return {
      swiper: Object,
      options: {
        slidesPerView: 1.5,
        spaceBetween: front.isMobile() ? 16 : 0,
        grabCursor: true,
        observer: true,
        observeParents: true,
        freeMode: true,
        enabled: front.isMobile() ? true : false,
      },
    };
  },
  props: {
    data: Object,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onInit(a) {
      this.swiper = a;
    },
    onSlideChange: function (a) {},
    focus(i) {
      this.swiper.slideTo(i);
    },

    handleCurrent(e) {
      this.$nextTick(() => {
        const currentItem = e.target.closest(".rate-item");
        if (!currentItem) return;

        const items = Array.from(document.querySelectorAll(".rate-item"));
        items.forEach((item) => item.classList.toggle("current", item === currentItem));
      });
    },
  },
};
</script>
