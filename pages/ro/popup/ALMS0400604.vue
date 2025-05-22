<template>
  <div class="first-content-item confirm-area payment-method">
    <div class="content-inner">
      <div class="cont-head">
        <h3 class="cont-title-main">
          해외 로밍 요금제 설정 정보<br />
          변경이 <strong class="txt-primary">완료</strong>되었어요
        </h3>
      </div>
    </div>

    <p class="icon">
      <img src="/images/v2/content/img_roamingChange.png" alt="이미지" />
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
            <li>로밍 요금제 시작 일시 전까지만 설정 정보를 변경하실 수 있습니다.</li>
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
    title: "로밍 요금제 정보",
    sub: "",
    chip: "",
    list: [
      { name: "신청 회선", value: "010-12**-26**" },
      { name: "요금제명", value: "로밍패스 3GB" },
      { name: "금액", value: "29,000원" },
      { name: "변경일", value: "2025.07.16" },
    ],
  },
  {
    title: "변경된 로밍 설정 정보",
    sub: "",
    chip: "",
    list: [
      { name: "방문 국가", value: "베트남", class: "txt-orange" },
      { name: "기준 시간", value: "한국시간", class: "txt-orange" },
      { name: "이용 시작 일시", value: "2025.04.30 12:01", class: "txt-orange" },
      { name: "이용 기간", value: "90일", class: "txt-orange" },
    ],
  },
]);

// 발행확인
const nextReissueConfirm = () => {
  console.log("발행확인");
  emit("nextStep");
};
</script>
