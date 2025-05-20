<template>
  <!-- <component is="script" src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" /> -->
  <NuxtLayout :name="layout">
    <!-- <NuxtPage :pageinfo="layout" /> -->
  </NuxtLayout>
</template>

<script>
// import { front } from '@/composables/front'
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "App",
  data() {
    return {
      layout: null,
    };
  },
  watch: {
    $route() {
      this.checkPath();
    },
  },
  methods: {
    checkPath() {
      let path = this.$route.path;

      if (path == "/") {
        this.$router.push("/guide/ListGuide").then(() => {
          this.layout = "guide-layout";
        });
      } else {
        path = path.split("/");
        path = path.filter((a) => a != "");

        this.layout =
          path[0] == "guide" && path[1].indexOf("List") == 0
            ? "guide-layout"
            : "main-layout";
      }
    },
    isScroll() {
      const scroll = document.querySelector("html").scrollTop;
      const body = document.querySelector("body");
      const isNoScroll = body.classList.contains("noScroll");

      if (scroll > 10) body.classList.add("scroll");
      if (scroll < 10 && !isNoScroll) body.classList.remove("scroll");
      // ( scroll > 10 && isNoScroll ) ? body.classList.add("scroll") : body.classList.remove("scroll");
    },
  },
  mounted() {
    AOS.init();
    this.checkPath();
    front.device();
    window.addEventListener("scroll", this.isScroll);
  },
  updated() {
    front.device();
  },
  unmounted() {
    window.removeEventListener("scroll", this.isScroll);
  },
};
</script>
<style lang="scss">
// @import url(@/assets/css/style.css);
@use "@/assets/scss/style.scss" as *; 
</style>
