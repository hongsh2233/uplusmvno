<template>
  <div class="first-content-item confirm-area payment-date">
    <div class="content-inner">
      <div class="cont-head">
        <h3 class="cont-title-main">
          결제일이 <br /><strong class="txt-primary">변경</strong>되었어요
        </h3>
      </div>
    </div>

    <p class="icon">
      <!--24.10.25 이미지 변경-->
      <img class="calendar" src="/images/v2/content/img_calendar.png" alt="달력 이미지" />
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
            <li>이번 달 결제일 이전에 오늘 이후 날짜로 변경하면 이번 달부터 적용돼요.</li>
            <li>이번 달 결제일이 지났거나, 오늘 이전 날짜로 변경하면 다음 달부터 적용돼요.</li>
            <li>결제일이 주말 및 공휴일인 경우 다음 평일에 결제돼요.</li>
          </ul>
        </div>
      </div>
    </div>

    <BottomFixMenu
      :btnText="'확인'"
      :link="'/sc/AL-MY-04-003'"
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
const emit = defineEmits(["openAlert", "closeAlert"]);

// 납부 방법 변경 목업 데이터
const cardObject1 = ref([
  {
    title: "",
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
]);

// 발행확인
const nextReissueConfirm = () => {
  console.log("발행확인");
};
</script>
