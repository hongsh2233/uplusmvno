<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{ type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">
        축하합니다! <br /><span class="fc01">가입신청</span>이 완료되었습니다
        <p class="sub">마이페이지에서 eSIM을 활성화 시켜 보세요!</p>
        <!-- class="sub" :: eSIM 가입신청 완료 시 노출 -->
      </div>

      <div class="char_join">
        <div class="txt">
          가입신청 상세 내용은 <br />
          마이페이지에서 확인할 수 있어요!!
        </div>
        <Lottie name="complete" />
      </div>

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <!-- button 명 수정 및 추가 23/11/15 -->
            <div class="btn_group">
              <!-- 가입신청 완료 시 노출-->
              <button type="button" class="btn lg c01" @click="overlay = !overlay">
                신청내역 조회하기
              </button>
            </div>
            <div class="btn_group">
              <!-- eSIM 가입신청 완료 시 노출 -->
              <button type="button" class="btn lg c01">eSIM 안내 확인하기</button>
            </div>
            <div class="btn_group">
              <button type="button" class="btn lg c02">홈으로</button>
            </div>
            <div class="btn_group">
              <button type="button" class="btn lg c02">가족/친구 추천하러 가기</button>
            </div>
          </div>
        </div>
      </div>
      <!-- // bottom_float -->

      <!-- 개통 wating overlay -->
      <v-overlay v-model="overlay" class="wating">
        <Lottie name="loading" />
        <p class="text">개통 신청이 진행 중 입니다<br />잠시만 기다려 주세요</p>
      </v-overlay>
      <!-- //개통 wating overlay -->
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script>
import Lottie from "@/components/Lottie";

export default {
  name: "ALFM-PR03-PG19",
  emits: ["setLayout", "openPopup"],
  data() {
    return {
      layout: { header: "sub2", footer: "none", floatMenu: "none", title: "가입신청 완료" },
      overlay: false,
    };
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 50000);
    },
  },
  mounted() {
    this.$emit("setLayout", this.layout);
  },
  components: {
    Lottie,
  },
};
</script>
