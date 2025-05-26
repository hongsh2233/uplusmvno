<template>
  <div class="popup-al-my-05-500-01 mobile-page-popup">
    <div class="container deps4">
      <div class="content" id="content">
        <h2 class="title_nav">{{ layout.title }}</h2>
        <ALMY05500P04 />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ALMY05500P04 from "@/components/popup/AL-MY-05-500-P04.vue";

const emit = defineEmits(["setLayout"]);

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: "none",
  floatMenu: "none",
  title: "번호 변경",
  wrapClass: "selfcare roaming",
});

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/ro/popup-al-my-05-500-01.scss" as *;
</style>
