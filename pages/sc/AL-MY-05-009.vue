<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <ALMY05009 />
    </div>
  </div>
</template>

<script setup>
import ALMY05009 from "@/components/v2/pages/info-management/ALMY05009";
import { useRouter } from "vue-router";

const router = useRouter();
// 헤더 정보
const layout = ref({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "휴대폰 정보 등록",
});

// HOOK
const emit = defineEmits(["setLayout"]);

/* 2025-06-10 1749538995 (정C) 쿼리값으로 페이지 이동 안되도록 추가 */
const route = useRoute();
const popupQuery = ref(route.query.mode);
console.log(popupQuery.value);

onMounted(() => {
  /* 2025-06-10 1749538995 (정C) 쿼리값으로 페이지 이동 안되도록 popupQuery.value === "mobile" 추가 */
  if (front.isMobile() || popupQuery.value === "mobile") {
    emit("setLayout", layout);
  } else {
    router.push("/sc/AL-MY-05-005");
  }
});
</script>
