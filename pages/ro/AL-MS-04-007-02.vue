<template>
  <div class="AL-MS-04-005">
    <div class="container deps4">
      <div class="content" id="content">
        <h2 class="title_nav">{{ layout.title }}</h2>
        <ALMS0400702 />
      </div>
    </div>
    <!-- // container  -->
  </div>
</template>

<script setup>
import ALMS0400702 from "@/pages/ro/popup/ALMS0400702";

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
    router.push("/ro/AL-MS-04-007");
  }
});
</script>

<style lang="scss">
@use "@/assets/scss/pages/ro/page-al-ms-04-005.scss" as *;
</style>
