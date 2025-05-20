<template>
  <swiper
    class="swiper new-roaming-bnr"
    :modules="[Pagination, Navigation, Autoplay, A11y]"
    :slides-per-view="1"
    :space-between="options.spaceBetween"
    :loop="options.loop"
    :pagination="{
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    }"
    :autoplay="options.autoplay"
    :observer="true"
    :observeParents="true"
    :slideToClickedSlide="true"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    @swiper="onSwiper"
  >
    <swiper-slide v-for="(item, index) in items" :key="index">
      <NuxtLink to="/" @focus="focusHandler(0)">
        <img :src="item.mobileImage" :alt="item.altText" class="pc_hide" />
        <img :src="item.pcImage" :alt="item.altText" class="pc_show" />
      </NuxtLink>
    </swiper-slide>

    <div v-if="items.length > 1" class="play_box">
      <button type="button" class="play_start" v-if="!autoPlayState" @click="autoPlayControlHandler('play')">
        <span class="blind">시작</span>
      </button>
      <button type="button" class="play_stop" v-if="autoPlayState" @click="autoPlayControlHandler('stop')">
        <span class="blind">멈춤</span>
      </button>
      <div class="swiper-pagination"></div>
    </div>
  </swiper>
</template>

<script setup lang="ts">
import { Pagination, Navigation, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import frontData from "@/assets/frontData.js";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

interface BannerItem {
  mobileImage: string;
  pcImage: string;
  altText: string;
}

interface Options {
  spaceBetween?: string | number;
  loop?: boolean;
  autoplay?: {
    delay: number;
    disableOnInteraction: boolean;
  };
}

const props = withDefaults(
  defineProps<{
    options?: Options;
    items: BannerItem[];
  }>(),
  {
    options: () => ({
      spaceBetween: "20px",
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    }),
    items: () => [],
  }
);

const theSwiper = ref<any>(null);
const autoPlayState = ref(false);
const onSwiper = (swiper: any) => {
  theSwiper.value = swiper;
};

const autoPlayControlHandler = (status: string): void => {
  if (status === "stop") {
    theSwiper.value.autoplay.stop();
    autoPlayState.value = false;
  } else {
    theSwiper.value.autoplay.start();
    autoPlayState.value = true;
  }
};
const focusHandler = (idx: number) => {
  theSwiper.value.swiperTo(idx);
};

onMounted(async () => {
  await nextTick(() => {
    autoPlayState.value = theSwiper.value.autoplay.running;
  });
});
</script>
