<template>
  <div class="first-content-item confirm-area">
    <div class="content-inner">
      <div class="cont-head">
        <h3 class="cont-title-main">
          통화 내역<br />
          <strong class="txt-primary">신청 완료</strong>되었어요
        </h3>
      </div>
    </div>

    <p class="icon">
      <img src="/images/v2/content/Img_certificatecall.png" alt="이미지" />
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

        <div class="gray-notice-box">
          <ul class="text-list bull">
            <li>신청 후 영업일 기준 5일 이내 등록하신 이메일로 발송됩니다.</li>
          </ul>
        </div>
      </div>
    </div>

    <BottomFixMenu class="pd-0" :btnText="'확인'" :disabled="false" @click="nextReissueConfirm" />
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
    list: [
      { name: "휴대폰 번호", value: "010-12*-12**" },
      { name: "조회기간", value: "2025. 03. 11~2025. 07. 11" },
      { name: "열람내용", value: "문자" },
      { name: "신청일", value: "2025. 07. 18" },
    ],
  },
]);

// 발행확인
const nextReissueConfirm = () => {
  console.log("발행확인");
  emit("nextStep");
};
</script>
