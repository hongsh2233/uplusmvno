<template>
  <div class="popup-al-my-05-501-01 mobile-page-popup">
    <div class="container deps4">
      <div class="content" id="content">
        <h2 class="title_nav">{{ layout.title }}</h2>
        <ALMY05501P01 />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ALMY05501P01 from "@/components/popup/AL-MY-05-501-P01.vue";

const emit = defineEmits(["setLayout"]);

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: "none",
  floatMenu: "none",
  title: "취소 완료",
  wrapClass: "selfcare roaming",
});

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/ro/popup-al-my-05-501-01.scss" as *;
</style>
