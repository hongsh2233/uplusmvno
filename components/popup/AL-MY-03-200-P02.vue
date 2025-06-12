<template>
  <div class="first-content-item confirm-area usimsafe">
    <div class="content-inner">
      <div class="cont-head">
        <h3 class="cont-title-main">
          선불요금제가<br />
          <strong class="txt-primary">기간 연장 완료</strong>되었어요
        </h3>
      </div>
    </div>

    <p class="icon">
      <img src="/images/v2/content/img_period.png" alt="이미지" />
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

    <BottomFixMenu class="pd-0" :btnText="'확인'" :disabled="false" @click="nextReissueConfirm" />
    <!-- // bottom_button -->
  </div>
</template>

<script setup>
import CardGroup from "@/components/v2/common/CardGroup";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";

import { ref, defineEmits } from "vue";

const isMobile = ref(front.isMobile());

// HOOK
const emit = defineEmits(["openAlert", "closeAlert", "nextStep"]);

// 납부 방법 변경 목업 데이터
const cardObject1 = ref([
  {
    title: "",
    sub: "",
    chip: "",
    list: [
      { name: "휴대폰 번호", value: "010-****-1234" },
      { name: "요금제명", value: "선불 데이터 300MB+1Mbps (정액)" },
      { name: "이용기간", value: "2025. 03. 11~2025. 07. 11" },
      { name: "충전 신청일", value: "2025. 07. 18" },
      { name: "충전 기간", value: "1개월(30일)" },
      { name: "충전 금액", value: "38,300원" },
    ],
  },
]);

// 발행확인
const nextReissueConfirm = () => {
  console.log("발행확인");
  emit("nextStep");
};
</script>
