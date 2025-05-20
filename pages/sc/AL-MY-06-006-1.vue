s<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <ALMY060061/>

    </div>
  </div>
</template>

<script setup>
  import ALMY060061 from "@/components/v2/pages/lost-device/ALMY060061";
  
  import { useRouter } from "vue-router";

  const emit = defineEmits(["setLayout"]);
  const router = useRouter();

  // 헤더 정보
  const layout = ref({
    header: "sub",
    footer: "none",
    floatMenu: "none",
    title: "일시정지 신청 완료 ",
  });

  // HOOK
  
  onMounted(() => {
    if (front.isMobile()) {
      emit("setLayout", layout);
    } else {
      router.push("/sc/AL-MY-06-004");
    }
  });
</script>
