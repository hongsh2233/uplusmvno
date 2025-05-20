<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <ALMY05009/>

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


  onMounted(() => {
    if (front.isMobile()) {
      emit("setLayout", layout);
    } else {
      router.push("/sc/AL-MY-05-005");
    }
  });
</script>
