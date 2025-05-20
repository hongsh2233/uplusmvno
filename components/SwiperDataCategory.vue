<template>
  <div class="section">
    <swiper
      @swiper="setThumbsSwiper"
      :freeMode="true"
      :watchSlidesProgress="false"
      :modules="[FreeMode, Thumbs]"
      :allow-touch-move="false"
      class="countSwiperTop"
    >
      <swiper-slide
        tag="button"
        role="button"
        tabindex="0"
        aria-label="24개월 할인 요금제"
        @keydown.enter="onChangeTab(0)"
      >
        24개월 할인 요금제
      </swiper-slide>
      <swiper-slide
        tag="button"
        role="button"
        tabindex="0"
        aria-label="7개월 할인 요금제"
        @keydown.enter="onChangeTab(1)"
      >
        7개월 할인 요금제
      </swiper-slide>

      <div ref="lavalamp" class="lavalamp"></div>
    </swiper>

    <swiper
      ref="countSwiperBottom"
      @slideChange="onSlideChange"
      :autoHeight="true"
      :spaceBetween="16"
      :pagination="optionsPagination"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="[FreeMode, Pagination, Thumbs]"
      class="countSwiperBottom"
    >
      <swiper-slide
        ><!-- 24개월 -->
        <ul class="data-category__list">
          <li v-for="(item, index) in data[0]" :key="item.id">
            <NuxtLink to="/" class="data-category-wrap">
              <div class="data">
                <p class="data__size" v-html="item.size" />
                <p class="data__description" v-html="item.description" />
              </div>
              <div class="price-info">
                <p class="price">
                  <NumberCounting
                    ref="countRefs"
                    :id="`count${index}-1`"
                    :number="item.price"
                    unit="원"
                  />
                </p>
                <div class="sale">
                  <p class="badge">
                    <span>{{ item.date }}</span>
                  </p>
                  <div class="sale__price">
                    총
                    <NumberCounting
                      ref="countRefs"
                      :id="`count${index}-2`"
                      :number="item.salePrice"
                      unit="원"
                    />
                    할인
                    <v-btn
                      :id="`tool-${index}`"
                      :ref="`tool-${index}`"
                      class="btn_tooltip reverse"
                      :class="{ on: item.tooltip }"
                      title="툴팁"
                      @click.prevent="item.tooltip = !item.tooltip"
                      >툴팁</v-btn
                    >
                    <v-tooltip
                      v-model="item.tooltip"
                      :activator="'parent'"
                      location="top left"
                      :offset="front.isMobile() ? '2 14' : '2 350'"
                      scroll-strategy="close"
                      :open-on-hover="false"
                      no-click-animation
                      contained
                      class="tooltip-default"
                    >
                      <div class="tooltip_content">
                        <dl class="tooltip-sale">
                          <div>
                            <dt>할인 이후 금액</dt>
                            <dd>월 36,980원</dd>
                          </div>
                          <div>
                            <dt>할인 가입 금액</dt>
                            <dd>월 36,980원</dd>
                          </div>
                          <div>
                            <dt>할인가</dt>
                            <dd>월 36,980원</dd>
                          </div>
                          <div>
                            <dt>24개월 할인가</dt>
                            <dd>월 36,980원</dd>
                          </div>
                        </dl>
                      </div>
                    </v-tooltip>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide
        ><!-- 7개월 -->
        <ul class="data-category__list">
          <li v-for="(item, index) in data[1]" :key="item.id">
            <NuxtLink to="/" class="data-category-wrap">
              <div class="data">
                <p class="data__size" v-html="item.size" />
                <p class="data__description" v-html="item.description" />
              </div>
              <div class="price-info">
                <p class="price">
                  <NumberCounting
                    ref="countRefs"
                    :id="`count${index}-1`"
                    :number="item.price"
                    unit="원"
                  />
                </p>
                <div class="sale">
                  <p class="badge">
                    <span>{{ item.date }}</span>
                  </p>
                  <div class="sale__price">
                    총
                    <NumberCounting
                      ref="countRefs"
                      :id="`count${index}-2`"
                      :number="item.salePrice"
                      unit="원"
                    />
                    할인
                    <v-btn
                      :id="`tool-${index}`"
                      :ref="`tool-${index}`"
                      class="btn_tooltip reverse"
                      :class="{ on: item.tooltip }"
                      title="툴팁"
                      @click.prevent="item.tooltip = !item.tooltip"
                      >툴팁</v-btn
                    >
                    <v-tooltip
                      v-model="item.tooltip"
                      :activator="'parent'"
                      location="top left"
                      :offset="front.isMobile() ? '2 14' : '2 350'"
                      scroll-strategy="close"
                      :open-on-hover="false"
                      no-click-animation
                      contained
                      class="tooltip-default"
                    >
                      <div class="tooltip_content">
                        <dl class="tooltip-sale">
                          <div>
                            <dt>할인 이후 금액</dt>
                            <dd>월 36,980원</dd>
                          </div>
                          <div>
                            <dt>할인 가입 금액</dt>
                            <dd>월 36,980원</dd>
                          </div>
                          <div>
                            <dt>할인가</dt>
                            <dd>월 36,980원</dd>
                          </div>
                          <div>
                            <dt>24개월 할인가</dt>
                            <dd>월 36,980원</dd>
                          </div>
                        </dl>
                      </div>
                    </v-tooltip>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, defineEmits } from "vue";
import { FreeMode, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import NumberCounting from "@/components/NumberCounting";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";

// HOOK
const emit = defineEmits(["onRestart"]);
const props = defineProps(["data"]);

// counting
const countRefs = ref([]);
const counterRestart = async () => {
  await nextTick();
  if (countRefs.value.length > 0) {
    countRefs.value.forEach((comp) => {
      if (comp && comp.onRestart) {
        comp.onRestart(["all"]);
      }
    });
  }
};

// tooltip
function tooltipRestart() {
  props.data.forEach((category) => {
    category.forEach((item) => {
      if (item.tooltip === true) {
        item.tooltip = false;
      }
    });
  });
}

// Swiper
const lavalamp = ref(null);
const thumbsSwiper = ref(null);
const countSwiperBottom = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
  countSwiperBottom.value = swiper;
};

const optionsPagination = {
  clickable: true,
  renderBullet: (index, className) =>
    `<button class='${className}' role='button' tabindex='0'>${index + 1}</button>`,
};

const onSlideChange = () => {
  counterRestart(["all"]);
  tooltipRestart();
  handleLavalamp();
};

const onChangeTab = (index) => {
  if (countSwiperBottom.value && countSwiperBottom.value.swiper) {
    countSwiperBottom.value.swiper.slideTo(index);
  }
};

const handleLavalamp = () => {
  nextTick(() => {
    if (!lavalamp.value) return;

    // 현재 활성화된 슬라이드 찾기
    const activeSlide = document.querySelector(".countSwiperTop .swiper-slide-thumb-active");
    if (!activeSlide) return;

    const w = activeSlide.offsetWidth;
    const h = activeSlide.offsetHeight;
    const left = activeSlide.offsetLeft;

    lavalamp.value.animate(
      [
        {
          width: `${lavalamp.value.offsetWidth}px`,
          height: `${lavalamp.value.offsetHeight}px`,
          left: `${lavalamp.value.offsetLeft}px`,
        },
        {
          width: `${w}px`,
          height: `${h}px`,
          left: `${left}px`,
        },
      ],
      {
        duration: 300,
        easing: "ease-out",
        fill: "forwards",
      }
    );
  });
};

onMounted(() => {});
</script>
