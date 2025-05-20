<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <ALMY060031 />
    </div>
  </div>
</template>

<script setup>
import ALMY060031 from "@/components/v2/pages/lost-device/ALMY060031";
import { useRouter } from "vue-router";

const router = useRouter();
// 헤더 정보
const layout = ref({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "휴대폰(유심) 분실 등록 완료",
});

// HOOK
const emit = defineEmits(["setLayout"]);

onMounted(() => {
  if (front.isMobile()) {
    emit("setLayout", layout);
  } else {
    router.push("/sc/AL-MY-06-002");
  }
});
</script>
