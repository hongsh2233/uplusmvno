<template>
  <div class="mobile-page-popup">
    <div class="container deps4">
      <div class="content" id="content">
        <h2 class="title_nav">{{ layout.title }}</h2>
        <ALMY05608P01 />
      </div>
    </div>
    <!-- // container  -->
  </div>
</template>

<script setup lang="ts">
import ALMY05608P01 from "@/components/popup/AL-MY-05-608-P01";

import { useRouter } from "vue-router";

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "증명서 발급 신청",
  wrapClass: "selfcare roaming",
});

onMounted(() => {
  if (front.isMobile()) {
    emit("setLayout", layout);
  } else {
    router.push("/sc/AL-MY-05-608");
  }
});
</script>
