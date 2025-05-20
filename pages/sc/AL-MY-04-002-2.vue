<template>
  <div v-if="front.isMobile()" class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <ALMY040022 :info="selectedValue" />

      <!-- 24.12.12 꼭 알아두세요 위치 변경 (AL-MY-04-002-2 -> ALMY040022 )-->
      <!-- <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
        <template #content>
          <ul class="text-list bull">
            <li>납부 방법을 변경하시려면 간편 인증(PASS, 토스, 페이코 등), 휴대폰, 신용카드 등 본인인증이 필요합니다.</li>
            <li>상품 가입 명의자와 홈페이지 회원 명의의 은행 계좌나 카드로만 납부 방법을 변경하실 수 있습니다. (단, 외국인은 본인인증 과정에서 불일치가 발생할 경우, 고객센터 상담을 통해 가능합니다)</li>
            <li>‘카드 → 은행’으로 변경 시, 변경 신청 다음 달 1일 예약 변경으로 신청됩니다. (출금일은 변경 신청 다음 달부터 매달 15일에 출금되며, 출금 일이 주말/공휴일이면 다음 평일에 출금됩니다)</li>
            <li>‘은행 → 카드’로 변경 시, 변경 신청 다음 달 1일 예약 변경으로 신청됩니다. (결제일은 변경 신청 다음 달부터 매달 11일 경이며, 변동될 수 있습니다)</li>
            <li>‘은행 → 은행’ 또는 ‘카드 → 카드’로 변경 시, 변경일로부터 2일(영업일 기준) 후에 변경된 은행 계좌 또는 카드로 적용됩니다.</li>
            <li>‘은행 → 은행’ 변경 시, 출금일인 매달 15 일이며 출금일이 주말/공휴일이면 다음 평일에 출금됩니다.</li>
            <li>출금일에 잔고가 부족할 경우, 출금일 이후에 나머지 금액이 출금됩니다.</li>
          </ul>
        </template>
      </Accodian> -->
      <!-- //24.12.12 꼭 알아두세요 위치 변경 (AL-MY-04-002-2 -> ALMY040022 ) -->
    </div>
  </div>
  <!-- // container -->
</template>

<script setup>
import ALMY040022 from "@/components/v2/pages/paymentchange/ALMY040022";
// import Accodian from "@/components/v2/common/Accodian";

import { ref, onMounted, defineEmits } from "vue";
import { useRouter, useRoute } from "vue-router"; // Import the useRouter function

// 헤더 정보
const layout = ref({
  header: "sub2",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "납부 방법 변경",
});

// HOOK
const emit = defineEmits(["setLayout", "openAlert", "closeAlert"]);
const router = useRouter();
const route = useRoute();

const selectedValue = ref(null);

onMounted(() => {
  if (front.isMobile()) {
    emit("setLayout", layout);
    selectedValue.value = route.query.selectedValue || "bank";
  } else {
    router.push("/sc/AL-MY-04-002");
  }
});
</script>
