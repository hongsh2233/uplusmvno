<template>
  <div class="first-content-item confirm-area receipt-email">
    <div class="content-inner">
      <div class="cont-head">
        <h3 class="cont-title-main">
          신청한 영수증이<br v-if="front.isMobile()" />작성하신 이메일 주소로<br />
          <strong class="txt-primary">발송 완료</strong>되었어요
        </h3>
      </div>
    </div>

    <p class="icon">
      <img src="/images/v2/content/img_bill_update_phone.png" alt="핸드폰 이미지" />
      <img class="bill-mail1" src="/images/v2/content/img_bill_update_mail1.png" alt="메일 이미지" />
      <img class="bill-mail2" src="/images/v2/content/img_bill_update_mail2.png" alt="메일 이미지" />
    </p>

    <div class="content-item">
      <div class="content-inner">
        <CardGroup :card-object="cardObject1">
          <template #default="{ item }">
            <!-- 글씨 색상 class : txt-orange -->
            <p :class="item.class">
              {{ item.value }}
            </p>
          </template>
        </CardGroup>
      </div>
    </div>

    <BottomFixMenu :btnText="'확인'" :disabled="false" @click="nextReissueConfirm" />
    <!-- // bottom_button -->
  </div>
</template>

<script setup>
import CardGroup from "@/components/v2/common/CardGroup";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";

import { ref, defineEmits } from "vue";

// HOOK
const emit = defineEmits(["openAlert", "closeAlert", "nextStep"]);

// 납부 방법 변경 목업 데이터
const cardObject1 = ref([
  {
    title: "",
    sub: "",
    chip: "",
    list: [{ name: "이메일 주소", value: "abc**@lguplus.co.kr" }],
  },
]);

// 발행확인
const nextReissueConfirm = () => {
  console.log("발행확인");
  emit("nextStep");
};
</script>
