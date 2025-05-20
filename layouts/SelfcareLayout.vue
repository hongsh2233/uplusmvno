<template>
  <div>
    <div class="loading" v-if="loading">
      <div class="lottie"><Lottie name="loading" /></div>
      <span class="blind">loading</span>
    </div>

    <div class="skip">
      <NuxtLink to="#content">본문 바로가기</NuxtLink>
    </div>

    <div class="wrap selfcare">
      <SelfcareHeader :layout="layout" />
      <NuxtPage
        ref="MainLayout"
        :popupItem="popupItem"
        @setLayout="layout = $event"
        @openAlert="openAlert($event)"
      />

      <MainFooter :layout="layout" />
      <BottomCategory v-if="categoryFlag" :class="{ categoryFlag: 'menu' }" />
      <AsideFloat :layout="layout" />
    </div>
  </div>
</template>

<script>
import SelfcareHeader from "@/layouts/SelfcareHeader";
import AsideFloat from "@/layouts/AsideFloat";
import MainFooter from "@/layouts/MainFooter";
import BottomCategory from "@/components/BottomCategory";
import Lottie from "@/components/Lottie";

export default {
  name: "SelfcareLayout",
  data() {
    return {
      layout: { header: "none", footer: "none", title: "안내", floatMenu: "none" },
      loading: false,
      popupItem: {},
      alertItem: { option: { isOpen: false } },
      categoryFlag: false,
    };
  },
  methods: {
    layoutInit() {
      this.bottomCheck();
      this.getFullH();
    },
    bottomCheck() {
      setTimeout(() => {
        const bottomFloat = document.querySelector(".bottom_float");
        if (bottomFloat == null) return;

        const paddingB = bottomFloat.querySelector(".inner").offsetHeight;
        const footer = document.querySelector(".footer");
        let target = footer != null ? footer : document.querySelector(".container");

        target.style.paddingBottom = `${paddingB}px`;

        const asideFloat = document.querySelector(".aside_float");
        if (asideFloat == null) return;
        const asideFloatInner = asideFloat.querySelector(".inner");
        asideFloatInner.style.bottom = "";
        let bottom = getComputedStyle(asideFloatInner).bottom.replace("px", "") * 1;

        asideFloatInner.style.bottom = `${paddingB + bottom}px`;
      }, 10);
    },
    getFullH() {
      const fullH = this.$refs.MainLayout.pageRef.$refs.fullH;
      if (fullH == undefined) return;

      const docH = window.innerHeight;
      fullH.style.minHeight = `${docH}px`;
    },
    categoryShow() {
      this.$nextTick(() => {
        if (front.isMobile()) {
          const paths = ["/pr/ALFM-PR01-PG00"];
          const { footer } = this.layout;

          if (footer !== "none" || paths.some((item) => location.pathname === item)) {
            this.categoryFlag = true;
            document.body.classList.add("m-bottom__menu");
          } else {
            document.body.classList.remove("m-bottom__menu");
          }
        }
      });
    },
  },
  mounted() {
    this.layoutInit();
    this.categoryShow();
    window.addEventListener("resize", this.getFullH);

    const path = this.$route.path;
    if (path == "/guide/layout") {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }
  },
  updated() {
    // console.log('updated', this.popupItem);
    this.layoutInit();
  },
  unmounted() {
    window.removeEventListener("resize", this.getFullH);
  },
  components: {
    SelfcareHeader,
    AsideFloat,
    MainFooter,
    BottomCategory,
    Lottie,
  },
};
</script>
