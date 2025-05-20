s<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <ALMY060051/>

    </div>
  </div>
</template>

<script setup>
  import ALMY060051 from "@/components/v2/pages/lost-device/ALMY060051";
  import { useRouter } from "vue-router";

  const emit = defineEmits(["setLayout"]);
  const router = useRouter();

  // 헤더 정보
  const layout = ref({
    header: "sub",
    footer: "",
    floatMenu: "none",
    title: "휴대폰 분실 등록/해제",
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
