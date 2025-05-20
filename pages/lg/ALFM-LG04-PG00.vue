<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">
        알뜰폰닷컴에서 사용하실<br />
        ID를 만들어 주세요
      </div>

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

<script>
export default {
  name: "ALFM-LG04-PG00",
  emits: ["setLayout", "openPopup"],
  data() {
    return {
      layout: { header: "sub2", footer: "none", floatMenu: "none", title: "ID 만들기" },
    };
  },
  mounted() {
    this.$emit("setLayout", this.layout);
  },
};
</script>
