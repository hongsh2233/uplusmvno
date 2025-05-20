<template>
  <div class="first-content-item confirm-area payment-method">
    <div class="content-inner">
      <div class="cont-head">
        <h3 class="cont-title-main">
          납부 방법이 <br /><strong class="txt-primary">변경</strong>되었어요
        </h3>
      </div>
    </div>

    <p class="icon">
      <!-- 24.10.25 완료 이미지 변경 -->
      <img class="change" src="/images/v2/content/img_payment_icon_re.png" alt="돈 이미지" />
      <img
        class="glitter-m"
        src="/images/v2/content/img_payment_glitter_m.png"
        alt="반짝이 이미지"
      />
      <img
        class="glitter-s"
        src="/images/v2/content/img_payment_glitter_s.png"
        alt="반짝이 이미지"
      />
      <img class="card" src="/images/v2/content/img_payment_card.png" alt="카드 이미지" />
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
        <!--납부 변경 Card -->
        <!--// 납부 변경 Card -->
        <div class="gray-notice-box">
          <ul class="text-list bull">
            <li>
              카드 -> 은행 or 은행 -> 카드로 납부 방법을 변경하셨다면, 변경 신청 익월부터
              반영됩니다.
            </li>
            <li>은행(계좌변경), 카드(카드변경)은 약 2~3일 이내 반영됩니다.</li>
          </ul>
        </div>
      </div>
    </div>

    <BottomFixMenu
      :btnText="'확인'"
      :link="'/sc/AL-MY-04-002'"
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

// 납부 방법 변경 목업 데이터
const cardObject1 = ref([
  {
    title: "이전 납부 방법",
    sub: "",
    chip: "",
    url: "https://www.naver.com",
    list: [
      { name: "납부 방법", value: "신한카드/신용카드" },
      { name: "카드(계좌) 번호", value: "451*-****-****-3224" },
      { name: "소유주(예금주)", value: "김*닷" },
      { name: "결제일(출금일)", value: "1차(9일)" },
    ],
  },
  {
    title: "변경된 납부 방법",
    sub: "",
    chip: "",
    url: "https://www.naver.com",
    list: [
      { name: "납부 방법", value: "신한카드/신용카드", class: "txt-orange" },
      { name: "카드(계좌) 번호", value: "451*-****-****-3224", class: "txt-orange" },
      { name: "소유주(예금주)", value: "김*닷", class: "txt-orange" },
      { name: "결제일(출금일)", value: "4차(3차 결제일+평일3일)", class: "txt-orange" },
    ],
  },
]);

// 발행확인
const nextReissueConfirm = () => {
  console.log("발행확인");
  emit("nextStep");
};
</script>
