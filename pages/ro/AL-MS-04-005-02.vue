<template>
  <div class="AL-MS-04-005-02 mobile-page-popup">
    <div class="container deps4">
      <div class="content" id="content">
        <h2 class="title_nav">{{ layout.title }}</h2>
        <ALMS0400502 />
      </div>
    </div>
    <!-- // container  -->
  </div>
</template>

<script setup>
import ALMS0400502 from "@/pages/ro/popup/ALMS0400502";

import { useRouter } from "vue-router";

// 헤더 정보
const emit = defineEmits(["setLayout"]);
const router = useRouter();

const layout = ref({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "해외 로밍 신청",
  wrapClass: "selfcare roaming",
});

onMounted(() => {
  if (front.isMobile()) {
    emit("setLayout", layout);
  } else {
    router.push("/ro/AL-MS-04-005");
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/ro/popup-al-ms-04-005-02.scss" as *;
</style>
