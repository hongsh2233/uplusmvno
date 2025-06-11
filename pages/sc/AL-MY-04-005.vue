<template>
  <div class="mobile-page-popup">
    <div class="container deps4">
      <div class="content" id="content">
        <h2 class="title_nav">{{ layout.title }}</h2>
        <ALMY04004P01 />
      </div>
    </div>
    <!-- // container  -->
  </div>
</template>

<script setup lang="ts">
import ALMY04004P01 from "@/components/popup/AL-MY-04-004-P01.vue";

import { useRouter } from "vue-router";
const router = useRouter();

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "발급 완료",
  wrapClass: "selfcare roaming",
});

onMounted(() => {
  if (front.isMobile()) {
    emit("setLayout", layout);
  } else {
    router.push("/sc/AL-MY-04-004");
  }
});
</script>
