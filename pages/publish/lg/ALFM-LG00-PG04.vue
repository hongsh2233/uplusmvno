<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">알닷에서 사용하실<br class="pc_hide" />ID를 만들어 주세요</div>

      <div class="section">
        <div class="btn_wrap">
          <div class="btn_group">
            <NuxtLink :to="{}" role="button" class="btn md kakao">카카오톡으로 시작하기</NuxtLink>
          </div>
          <div class="btn_group">
            <NuxtLink :to="{}" role="button" class="btn md naver">네이버로 시작하기</NuxtLink>
          </div>
          <div class="btn_group">
            <NuxtLink :to="{}" role="button" class="btn md email">이메일로 시작하기</NuxtLink>
          </div>
        </div>
      </div>
      <!-- // section -->
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits(["setLayout"]);
const layout = reactive({
  header: "sub2",
  footer: "none",
  title: "본인인증",
  floatMenu: "none",
});

onMounted(() => {
  emit("setLayout", layout);
});
</script>
