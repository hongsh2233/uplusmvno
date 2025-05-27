<template>
  <div class="popup-al-my-05-400-01 mobile-page-popup">
    <div class="container deps4">
      <div class="content" id="content">
        <h2 class="title_nav">{{ layout.title }}</h2>
        <ALMY05400P01 />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ALMY05400P01 from "@/components/popup/AL-MY-05-400-P01.vue";

const emit = defineEmits(["setLayout"]);

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: "none",
  floatMenu: "none",
  title: "부가서비스 해지",
  wrapClass: "selfcare roaming",
});

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/ro/popup-al-my-05-400-01.scss" as *;
</style>
