<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">
        <em>박연진</em>님, <br />회원가입을 완료했어요 <br />알뜰폰닷컴의 회원이 되신 것을
        환영합니다!
      </div>

      <div class="join_char">
        <Lottie name="complete" />
      </div>

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <NuxtLink :to="{}" role="button" class="btn lg c01">로그인 하기</NuxtLink>
            </div>
            <div class="btn_group">
              <NuxtLink :to="{}" role="button" class="btn md c02">요금제 보러가기</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!-- // bottom_float -->
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script>
import Lottie from "@/components/Lottie";

export default {
  name: "ALFM-LG04-PG04",
  emits: ["setLayout", "openPopup"],
  data() {
    return {
      layout: { header: "sub2", footer: "none", floatMenu: "none", title: "회원가입 완료" },
    };
  },
  mounted() {
    this.$emit("setLayout", this.layout);
  },
  components: {
    Lottie,
  },
};
</script>
