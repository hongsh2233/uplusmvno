<template>
  <div class="first-content-item confirm-area">
    <div class="content-inner">
      <div class="cont-head">
        <h3 class="cont-title-main">
          납부 내역 확인서<br />
          <strong class="txt-primary">신청 완료</strong>되었어요
        </h3>
      </div>
    </div>

    <p class="icon">
      <img src="/images/v2/content/img_certificatepayment.png" alt="" />
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

        <div class="form-box mt_24">
          <div class="btn-area">
            <button type="button" class="btn-rounded btn-line" v-if="isMobile">납부 내역 확인서 다운로드</button>
            <button type="button" class="btn-rounded btn-line btn-sm" v-else>미리보기 · 인쇄하기</button>
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

const isMobile = ref(front.isMobile());

// HOOK
const emit = defineEmits(["openAlert", "closeAlert", "nextStep"]);

// 납부 방법 변경 목업 데이터
const cardObject1 = ref([
  {
    sub: "",
    chip: "",
    list: [
      { name: "휴대폰 번호", value: "010-12*-12**" },
      { name: "요금제", value: "[빽다방 100잔] 평생 할인… " },
      { name: "조회기간", value: "2025. 03. 11~2025. 07. 11" },
      { name: "가입상품", value: "모바일" },
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
