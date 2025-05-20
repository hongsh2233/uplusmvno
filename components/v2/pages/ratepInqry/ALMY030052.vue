<template>
  <div class="first-content-item confirm-area">
    <div class="content-inner">
      <div class="cont-head">
        <h3 class="cont-title-main">
          청구서가 <br /><strong class="txt-primary">재발행</strong>되었어요
        </h3>
      </div>
    </div>

    <p class="icon">
      <!-- 24.10.25 이미지 수정-->
      <img src="/images/v2/content/img_reissue_letter.png" class="letter" alt="편지 이미지" />
      <img src="/images/v2/content/img_reissue_paper_plane.png" class="paper-plane" alt="종이비행기 이미지" />
    </p>

    <CardGroup :card-object="cardObject" />

    <BottomFixMenu
      :btnText="'확인'"
      :link="'/sc/AL-MY-03-005'"
      :disabled="false"
      @click="nextReissueConfirm"
    />
    <!-- // bottom_button -->
  </div>
</template>

<script setup>
import CardGroup from "@/components/v2/common/CardGroup";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";

import { ref, defineEmits } from "vue";

// HOOK
const emit = defineEmits(["openAlert", "closeAlert", "nextStep"]);

// 가입 정보 목업 데이터
const cardObject = ref([
  {
    list: [
      { name: "청구서 신청 월", value: "2024년 4월" },
      { name: "청구서 받는 방법", value: "E-MAIL(상세) 청구서" },
      { name: "이메일 주소", value: "abc***@lguplus.co.kr" },
    ],
  },
]);

// 발행확인
const nextReissueConfirm = () => {
  console.log("발행확인");

  //화면검수용 임시 라우터 처리
  if (!front.isMobile()) {
    emit("nextStep");
  }
};
</script>
