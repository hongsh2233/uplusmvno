<template>
  <div class="AL-MS-04-017 mobile-page-popup">
    <div class="container deps4">
      <div class="content" id="content">
        <h2 class="title_nav">{{ layout.title }}</h2>
        <ALMS040017 />
      </div>
    </div>
    <!-- // container  -->
  </div>
</template>

<script setup>
import ALMS040017 from "@/pages/ro/popup/ALMS040017";

import { useRouter } from "vue-router";

// 헤더 정보
const emit = defineEmits(["setLayout"]);
const router = useRouter();

const layout = ref({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "해외 로밍 해지 완료",
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
@use "@/assets/scss/pages/ro/popup-al-ms-04-017.scss" as *;
</style>
