<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <swiper
          @swiper="setThumbsSwiper"
          :spaceBetween="10"
          :slidesPerView="5"
          :freeMode="true"
          :watchSlidesProgress="true"
          :modules="[FreeMode, Thumbs]"
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
        </swiper>

        <swiper
          ref="countSwiperBottom"
          @slideChange="onSlideChange"
          :autoHeight="true"
          :spaceBetween="10"
          :pagination="optionsPagination"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="[FreeMode, Pagination, Thumbs]"
          class="countSwiperBottom"
        >
          <swiper-slide style="height: 200px">
            <ul>
              <li style="display: flex">
                최저가 <NumberCounting id="count1-1" number="1536000" />
              </li>
              <li style="display: flex">
                24개월 <NumberCounting id="count1-2" number="3245234" />
              </li>
            </ul>
            <div style="position: relative; margin: 20px">
              <v-btn
                :id="`a-1`"
                :ref="`a-1`"
                class="btn_tooltip"
                :class="{ on: tooltip[0] }"
                title="툴팁"
                @click="tooltip[0] = !tooltip[0]"
                >툴팁</v-btn
              >
              <v-tooltip
                v-model="tooltip[0]"
                :activator="'parent'"
                location="top left"
                offset="-75 3"
                scroll-strategy="close"
                :open-on-hover="false"
                no-click-animation
                contained
                class="tooltip-default"
              >
                <div class="tooltip_content">
                  데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
                </div>
              </v-tooltip>
            </div>
          </swiper-slide>
          <swiper-slide style="height: 100px">
            <NumberCounting id="count2-1" number="9813000" />
            <div style="position: relative; margin: 20px">
              <v-btn
                :id="`a-2`"
                :ref="`a-2`"
                class="btn_tooltip"
                :class="{ on: tooltip[1] }"
                title="툴팁"
                @click="tooltip[1] = !tooltip[1]"
                >툴팁</v-btn
              >
              <v-tooltip
                v-model="tooltip[1]"
                :activator="'parent'"
                location="top left"
                offset="-75 3"
                scroll-strategy="close"
                :open-on-hover="false"
                no-click-animation
                contained
                class="tooltip-default"
              >
                <div class="tooltip_content">
                  데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
                </div>
              </v-tooltip>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { FreeMode, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import NumberCounting from "@/components/NumberCounting";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";

// HOOK
const emit = defineEmits(["setLayout", "onRestart"]);

// Layout reactive state
const layout = ref({
  header: "sub",
  footer: "",
  floatMenu: "none",
  title: "테스트",
});

// counting
function handleRestart(v) {
  nextTick(() => {
    const countElements = Array.from(document.querySelectorAll(".number-counting"));
    countElements.forEach((el) => {
      // 페이지의 모든 컴포넌트 실행 방지(활성탭만)
      if (el.closest(".swiper-slide-active")) {
        if (el) el.__vueParentComponent.exposed.onRestart(v);
      }
    });
  });
}

// tooltip
const tooltip = ref([false, false]);

// Swiper
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
  handleRestart(["all"]);
  tooltip.value = tooltip.value.map(() => false);
};
const onChangeTab = (index) => {
  if (countSwiperBottom.value && countSwiperBottom.value.swiper) {
    countSwiperBottom.value.swiper.slideTo(index);
  }
};

onMounted(() => {
  emit("setLayout", layout);
});
</script>
