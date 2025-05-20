<template>
  <div class="AL-MY-02-006">
    <div class="container deps4">
      <div class="content" id="content">
        <h2 class="title_nav">{{ layout.title }}</h2>

        <ALMY020062 />
      </div>
    </div>
  </div>
</template>

<script setup>
import ALMY020062 from "@/pages/sc/popup/ALMY020062";
import { useRouter } from "vue-router";

const router = useRouter();

// 헤더 정보
const layout = ref({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "영수증 발송 완료",
  wrapClass: "selfcare roaming",
});

// HOOK
const emit = defineEmits(["setLayout"]);

onMounted(() => {
  if (front.isMobile()) {
    emit("setLayout", layout);
  } else {
    router.push("/sc/AL-MY-02-006");
  }
});
</script>

<style lang="scss">
@use "@/assets/scss/pages/sc/page-al-my-02-006.scss" as *;
</style>
