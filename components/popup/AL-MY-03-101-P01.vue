<template>
  <div class="first-content-item confirm-area care-empty02">
    <div class="content-inner">
      <div class="cont-head">
        <h3 class="cont-title-main">
          요금 납부가<br />
          <strong class="txt-primary">완료</strong>되었어요
        </h3>
      </div>
    </div>

    <p class="icon">
      <img src="/images/v2/content/img_Paybill.png" alt="이미지" />
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
            <button type="button" class="btn-rounded btn-line" :class="[!isMobile && 'btn-sm']">납부 내역 조회</button>
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
    title: "",
    sub: "",
    chip: "",
    list: [
      { name: "납부 금액", value: "89,300원", class: "txt-orange" },
      { name: "납부 후 미납 잔액", value: "0원" },
      { name: "납부 방법", value: "국민카드/신용카드" },
      { name: "할부 기간", value: "일시불" },
    ],
  },
]);

// 발행확인
const nextReissueConfirm = () => {
  console.log("발행확인");
  emit("nextStep");
};
</script>
