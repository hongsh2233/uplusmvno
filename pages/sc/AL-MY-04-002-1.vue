<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>
      <ALMY040021/>
    </div>
  </div>
  <!-- // container -->
</template>

<script setup>
  import ALMY040021 from "@/components/v2/pages/paymentchange/ALMY040021";

  import { useRouter } from "vue-router";

  // 헤더 정보
  const emit = defineEmits(["setLayout"]);
  const router = useRouter();
  
  const layout = ref({
    header: "sub",
    footer: front.isMobile() ? "none" : "",
    floatMenu: "none",
    title: "납부 방법 변경",
  });

onMounted(() => {
  if (front.isMobile()) {
    emit("setLayout", layout);
  } else {
    router.push("/sc/AL-MY-04-002");
  }
});
</script>
