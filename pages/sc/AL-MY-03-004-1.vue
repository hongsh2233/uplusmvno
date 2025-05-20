<template>
  <div v-if="front.isMobile()" class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>
      <ALMY030041/>
    </div>
  </div>
  <!-- // container -->
</template>

<script setup>
  import { useRouter } from "vue-router";
  import ALMY030041 from "@/components/v2/pages/ratepInqry/ALMY030041";
  
  
  const emit = defineEmits(['setLayout']);
  const layout = reactive({ header: 'sub', footer: 'none', title: '청구서 받는 방법 변경', floatMenu: 'none', });

  const router = useRouter();
  onMounted(() => {
    if (front.isMobile()) {
      emit("setLayout", layout);
    } else {
      router.push("/sc/AL-MY-03-004");
    }
  });
</script>
