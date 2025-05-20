s<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <ALMY070021/>

    </div>
  </div>
</template>

<script setup>
  import ALMY070021 from "@/components/v2/pages/usimsafe/ALMY070021";
  import { useRouter } from "vue-router";

  const emit = defineEmits(["setLayout"]);
  const router = useRouter();

  // 헤더 정보
  const layout = ref({
    header: "sub",
    footer: "",
    floatMenu: "none",
    title: "유심보호서비스 신청 완료",
  });

  // HOOK
  
  onMounted(() => {
    if (front.isMobile()) {
      emit("setLayout", layout);
    } else {
      router.push("/sc/AL-MY-07-001");
    }
  });
</script>
