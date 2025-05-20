<template>
  <div class="AL-MS-04-016 mobile-page-popup">
    <div class="container deps4">
      <div class="content" id="content">
        <h2 class="title_nav">{{ layout.title }}</h2>
        <ALMS040016 />
      </div>
    </div>
    <!-- // container  -->
  </div>
</template>

<script setup>
import ALMS040016 from "@/pages/ro/popup/ALMS040016";

import { useRouter } from "vue-router";

// 헤더 정보
const emit = defineEmits(["setLayout"]);
const router = useRouter();

const layout = ref({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "해외 로밍 해지",
  wrapClass: "selfcare roaming",
});

onMounted(() => {
  if (front.isMobile()) {
    emit("setLayout", layout);
  } else {
    router.push("/ro/AL-MS-04-014_00");
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/ro/popup-al-ms-04-016.scss" as *;
</style>
