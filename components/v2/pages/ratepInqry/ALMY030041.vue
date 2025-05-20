<template>
  <div class="first-content-item confirm-area change">
    <div class="content-inner">
      <div class="cont-head">
        <h3 class="cont-title-main">
          청구서 받는 방법이 <br /><strong class="txt-primary">변경</strong>되었어요
        </h3>
      </div>
    </div>

    <p class="icon">
      <!-- 24.10.25 이미지 수정 반영-->
      <img src="/images/v2/content/img_bill_update_phone.png" alt="핸드폰 이미지" />
      <img class="bill-mail1" src="/images/v2/content/img_bill_update_mail1.png" alt="메일 이미지" />
      <img class="bill-mail2" src="/images/v2/content/img_bill_update_mail2.png" alt="메일 이미지"
      />
    </p>

    <CardGroup :card-object="cardObject" />

    <BottomFixMenu
      :btnText="'확인'"
      :link="'/sc/AL-MY-03-004'"
      :disabled="false"
      @click="nextReissueConfirm"
    />
    <!-- // bottom_button -->
  </div>
</template>

<script setup>
import CardGroup from "@/components/v2/common/CardGroup";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";  

// HOOK
const emit = defineEmits(["openAlert", "closeAlert"]);

// 청구서 조회 완료 목업 데이터
const cardObject = ref([
  {
    list: [
      { name: "청구서 받는 방법", value: "E-MAIL(상세) 청구서" },
      { name: "이메일 주소", value: "abc**@lguplus.co.kr" },
    ],
  },
]);

// 발행확인
const nextReissueConfirm = () => {
  console.log("발행확인");
};
</script>
