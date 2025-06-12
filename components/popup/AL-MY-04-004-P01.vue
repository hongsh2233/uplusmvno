<template>
  <div class="first-content-item confirm-area">
    <div class="content-inner">
      <div class="cont-head">
        <h3 class="cont-title-main">
          입금 전용 계좌가<br />
          정상적으로 <strong class="txt-primary">발급</strong>되었어요
        </h3>
      </div>
    </div>

    <p class="icon">
      <img src="/images/v2/content/img_AccountIssuance.png" alt="이미지" />
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
      { name: "고객(납부자) 명", value: "김*닷" },
      { name: "입금계좌", value: "SC은행 00000000000000" },
    ],
  },
]);

// 발행확인
const nextReissueConfirm = () => {
  console.log("발행확인");
  emit("nextStep");
};
</script>
