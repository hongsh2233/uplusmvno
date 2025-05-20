<template>
  <div v-if="front.isMobile()" class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <ALMY040031 />
    </div>
  </div>
  <!-- // container -->
</template>

<script setup>
import ALMY040031 from "@/components/v2/pages/paymentchange/ALMY040031";

import { ref, onMounted, defineEmits } from "vue";
import { useRouter } from "vue-router"; // Import the useRouter function

// 헤더 정보
const layout = ref({
  header: "sub2",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "결제일 변경",
});

// HOOK
const emit = defineEmits(["setLayout", "openAlert", "closeAlert"]);
const router = useRouter(); // Initialize the router

onMounted(() => {
  if (front.isMobile()) {
    emit("setLayout", layout);
  } else {
    router.push("/sc/AL-MY-04-003");
  }
});
</script>
