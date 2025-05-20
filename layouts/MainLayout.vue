<template>
  <div>
    <div class="loading" v-if="loading">
      <div class="lottie"><Lottie name="loading" /></div>
      <span class="blind">loading</span>
    </div>

    <div class="skip">
      <NuxtLink to="#content">본문 바로가기</NuxtLink>
    </div>

    <!-- 24.11.04 알닷케어 화면일 시 class 'selfcare' 추가 -->
    <div class="wrap" :class="[{ selfcare: this.$route.path.startsWith('/sc/AL-MY') }, layout.wrapClass]">
      <SelfcareHeader :layout="layout" />
      <NuxtPage
        ref="MainLayout"
        :frontData="frontData"
        :popupItem="popupItem"
        @setLayout="layout = $event"
        @openPopup="openPopup($event)"
        @openAlert="openAlert($event)"
      />

      <MainFooter :layout="layout" />
      <BottomCategory v-if="categoryFlag" :class="{ categoryFlag: 'menu' }" />
      <AsideFloat :layout="layout" />
    </div>

    <Popup
      :frontData="frontData"
      :popupItem="popupItem"
      @openPopup="openPopup($event)"
      @closePopup="closePopup($event)"
      @openAlert="openAlert($event)"
    />

    <Alert :alertItem="alertItem" @closeAlert="closeAlert($event)" @closePopup="closePopup($event)" />
  </div>
</template>

<script>
import frontData from "@/assets/frontData.js";

import SelfcareHeader from "@/layouts/SelfcareHeader";
import AsideFloat from "@/layouts/AsideFloat";
import MainFooter from "@/layouts/MainFooter";
import BottomCategory from "@/components/BottomCategory";

import Popup from "@/components/Popup";
import Alert from "@/components/Alert";
import Lottie from "@/components/Lottie";

export default {
  name: "MainLayout",
  data() {
    return {
      layout: {
        header: "none",
        footer: "none",
        title: "안내",
        floatMenu: "none",
      },
      loading: false,
      popupItem: {},
      alertItem: { option: { isOpen: false } },
      frontData: frontData,

      categoryFlag: false,
    };
  },
  // watch: {
  //   popupItem: {
  //     handler(a){
  //       console.log('MainLayout.watch.popupItem', a );
  //     }, deep: true,
  //   }
  // },
  methods: {
    layoutInit() {
      this.bottomCheck();
      this.getFullH();
    },

    /**
     * 호출방법 : this.$emit('openPopup', ['BU01PO00', 'btn_BU01PO00', 101]);
     * @param {*} $event ==> ['BU01PO00', 'btn_BU01PO00', 101]
     */
    openPopup($event) {
      const popupItem = {
        isOpen: true,
        id: $event[0],
        lastFocus: $event[1],
        idx: $event[2],
      };
      this.popupItem[popupItem.id] = popupItem;
    },
    closePopup($event) {
      delete this.popupItem[$event];
    },

    /**
     * 호출방법 : this.$emit('openAlert', ['BU01PO00', 'btn_BU01PO00', 101]);
     * @param {*} $event ==> ['CS05PO00D', 'btn_CS05PO00D', 101]
     */
    openAlert($event) {
      const alertItem = this.frontData.alert[$event[0]];
      alertItem.isOpen = true;
      alertItem.lastFocus = $event[1];
      alertItem.idx = $event[2];

      this.alertItem = alertItem;
    },
    closeAlert($event) {
      $event.isOpen = false;
      this.alertItem = $event;
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
    Popup,
    Alert,
    Lottie,
  },
};
</script>
