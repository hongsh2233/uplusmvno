<template>
  <div class="mobile-page-popup">
    <div class="container deps4">
      <div class="content" id="content">
        <h2 class="title_nav">{{ layout.title }}</h2>
        <ALMY03200P04 />
      </div>
    </div>
    <!-- // container  -->
  </div>
</template>

<script setup lang="ts">
import ALMY03200P04 from "@/components/popup/AL-MY-03-200-P04.vue";

import { useRouter } from "vue-router";
const router = useRouter();

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "신청 완료",
  wrapClass: "selfcare roaming",
});

onMounted(() => {
  if (front.isMobile()) {
    emit("setLayout", layout);
  } else {
    router.push("/sc/AL-MY-03-200");
  }
});
</script>
