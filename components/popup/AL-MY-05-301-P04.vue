<template>
  <div class="first-content-item confirm-area payment-method">
    <div class="content-inner">
      <div class="cont-head">
        <h3 class="cont-title-main">
          eSIM 변경이<br />
          <strong class="txt-primary">신청</strong>되었어요
        </h3>
      </div>
    </div>

    <p class="icon">
      <img src="/images/v2/content/img_eSIMChange.png" alt="이미지" />
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
            <li>연락받을 전화번호로 처리결과를 안내해 드려요.</li>
            <li>
              eSIM 다운로드 비용이 발생할 수 있으며 다운로드 시마다 비용이 발생하며 요금명세서에 포함되어 청구됩니다.
            </li>
          </ul>
        </div>

        <div class="btn-area btn-space mgb0">
          <button type="button" class="btn-rounded btn-line" :class="[!isMobile && 'btn-sm']">
            eSIM 활성화 가이드 보기
          </button>
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
      { name: "신청 회선", value: "010-****-1234" },
      { name: "eSIM 등록 휴대폰", value: "새 휴대폰 사용" },
      { name: "EID", value: "12345678" },
      { name: "IMEI 1", value: "12345678" },
      { name: "IMEI 2", value: "12345678" },
      { name: "연락 받을 전화번호", value: "010-12**-98**" },
    ],
  },
]);

// 발행확인
const nextReissueConfirm = () => {
  console.log("발행확인");
  emit("nextStep");
};
</script>
