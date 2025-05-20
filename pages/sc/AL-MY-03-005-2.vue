<template>
  <div v-if="front.isMobile()" class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <ALMY030052 />
    </div>
  </div>
  <!-- // container -->
</template>

<script setup>
import ALMY030052 from "@/components/v2/pages/ratepInqry/ALMY030052";

import { ref, onMounted, defineEmits } from "vue";
import { useRouter } from "vue-router"; // Import the useRouter function

// 헤더 정보
const layout = ref({
  header: "sub2",
  footer: "none",
  floatMenu: "none",
  title: "청구서 재발행",
});

// HOOK
const emit = defineEmits(["setLayout", "openAlert", "closeAlert"]);
const router = useRouter(); // Initialize the router

onMounted(() => {
  if (front.isMobile()) {
    emit("setLayout", layout);
  } else {
    router.push("/sc/AL-MY-03-005");
  }
});
</script>
