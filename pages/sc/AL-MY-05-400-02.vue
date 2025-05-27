<template>
  <div class="popup-al-my-05-400-02 mobile-page-popup">
    <div class="container deps4">
      <div class="content" id="content">
        <h2 class="title_nav">{{ layout.title }}</h2>
        <ALMY05400P02 />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ALMY05400P02 from "@/components/popup/AL-MY-05-400-P02.vue";

const emit = defineEmits(["setLayout"]);

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: "none",
  floatMenu: "none",
  title: "해지 완료",
  wrapClass: "selfcare roaming",
});

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/ro/popup-al-my-05-400-02.scss" as *;
</style>
