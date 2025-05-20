<template>
  <div class="first-content-item confirm-area payment-method">
    <div class="content-inner">
      <div class="cont-head">
        <h3 class="cont-title-main">
          해외 로밍 요금제 신청이<br />
          <strong class="txt-primary">완료</strong>되었어요
        </h3>
      </div>
    </div>

    <p class="icon">
      <!-- 24.10.25 완료 이미지 변경 -->
      <img src="/images/v2/content/img_roamingApply.png" alt="이미지" />
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
            <li>데이터 로밍 요금제 가입 시, 데이터 로밍 차단 서비스가 자동으로 해지됩니다.</li>
          </ul>
        </div>

        <div class="form-box mt_24">
          <div class="btn-area">
            <button type="button" class="btn-rounded btn-line">로밍 이용 내역 확인하기</button>
          </div>
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
    title: "가입 정보",
    sub: "",
    chip: "",
    list: [
      { name: "신청 회선", value: "010-12**-26**" },
      { name: "요금제명", value: "로밍패스 3GB" },
      { name: "금액", value: "12,900원" },
      { name: "신청일", value: "2025.07.16" },
    ],
  },
  {
    title: "자동 가입/해지 부가서비스",
    sub: "",
    chip: "",
    list: [{ name: "해지", value: "데이터로밍차단" }],
  },
]);

// 발행확인
const nextReissueConfirm = () => {
  console.log("발행확인");
  emit("nextStep");
};
</script>
