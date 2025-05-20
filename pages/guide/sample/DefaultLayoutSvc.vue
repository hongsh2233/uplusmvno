<template>
  <div class="container AL-SVC-02-001">
    <div class="content" id="content">
      <div class="section">
        <SwiperBnr />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SwiperBnr from "@/components/SwiperBnr.vue";
import type { LayoutOptions } from "@/types/layout";

if (front.isMobile()) {
  console.log("모바일");
}

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: "",
  floatMenu: "",
  title: "파트너사 소개",
});

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/guide/pub_guide.scss" as *;
</style>
