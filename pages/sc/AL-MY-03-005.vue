<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-03-005'" />
        <!-- // LNB -->

        <!-- contents -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>
          <!-- 내 정보 메뉴 -->
          <MyInfoMenu />
          <!-- // 내 정보 메뉴 -->

          <div class="content-item">
            <div class="content-inner">
              <CardGroup :card-object="cardObject" :dataSelectList="dataSelectList" />

              <div class="form-box">
                <div class="title-area">
                  <strong class="title">청구서 재발행 신청</strong>
                  <!-- <span class="sub">(3회/잔여 <span class="point">3</span>회)</span> -->
                </div>

                <InputForm
                  class="combobox-bottom"
                  :option="{ placeholder: '신청 월을 선택해 주세요', readonly: true, action:'dropdown' }"
                  @click="handleMonthSel"
                />
              </div>

              <div class="form-box">
                <div class="title-area">
                  <strong class="title">신청 사유</strong>
                </div>

                <div class="btn-flex">
                  <div class="radio_item ty05">
                    <input type="radio" id="radio01_01" name="radio01" checked />
                    <label for="radio01_01">청구서 미도착</label>
                  </div>
                  <div class="radio_item ty05">
                    <input type="radio" id="radio01_02" name="radio01" />
                    <label for="radio01_02">청구서 분실</label>
                  </div>
                  <div class="radio_item ty05">
                    <input type="radio" id="radio01_03" name="radio01" />
                    <label for="radio01_03">단순 요청</label>
                  </div>
                  <div class="radio_item ty05">
                    <input type="radio" id="radio01_04" name="radio01" />
                    <label for="radio01_04">기타</label>
                  </div>
                </div>

                <div class="check-txt check_st">
                  <input type="checkbox" id="checkbox01_02" name="" @click="handleTerms" />
                  <label for="checkbox01_02">개인정보 수집 · 이용 동의(필수)</label>
                </div>
              </div>
            </div>
          </div>

          <BottomFixMenu :btnText="'청구서 재발행하기'" :disabled="false" @click="nextPage" />
          <!-- // bottom_button -->
        </div>
        <!--// contents -->
      </div>

      <!-- 청구서 재발행 월 선택 팝업 -->
      <Popup
        class="pop-calendar"
        title="청구월 선택"
        :isOpen="isOpen"
        @update:isOpen="isOpen = $event"
        @confirm="clickConfirm"
      >
        <MonthPicker @selectItem="callFunction" />
      </Popup>
      <!-- // 청구서 재발행 월 선택 팝업 -->

      <!-- 개인정보 수집/이용동의 팝업 -->
      <Popup
        title="약관 상세"
        :isOpen="isOpen2"
        :popType="'alert-gray'"
        @update:isOpen="isOpen2 = $event"
        @confirm="clickConfirm2"
      >
        <Tems />
      </Popup>
      <!-- // 개인정보 수집/이용동의 팝업 -->

      <!-- 청구서 재발행 / 완료 팝업 -->
      <Popup
        v-if="!front.isMobile()"
        :title="'청구서 재발행'"
        :isOpen="isReissue"
        :isPopFooter="false"
        @update:isOpen="isReissue = $event"
        class="pcpopup"
      >
        <ALMY030051 v-if="nextPageforPC === 1" @nextStep="goToPcPage(2)" />
        <ALMY030052 v-else @nextStep="goToPcPage(1)" />
      </Popup>
      <!-- // 청구서 재발행 / 완료 팝업 -->
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script setup>
import PcLnb from "@/components/v2/common/PcLnb";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu";
import CardGroup from "@/components/v2/common/CardGroup";
import MonthPicker from "@/components/v2/common/MonthPicker";
import Popup from "@/components/v2/common/Popup";
import InputForm from "@/components/v2/common/InputForm";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
import Tems from "@/components/v2/pages/ratepInqry/Tems";
import ALMY030051 from "@/components/v2/pages/ratepInqry/ALMY030051";
import ALMY030052 from "@/components/v2/pages/ratepInqry/ALMY030052";

import { ref, onMounted, defineEmits } from "vue";
import { useRouter } from "vue-router";

// 헤더 정보
const layout = ref({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "청구서 재발행",
});

// HOOK
const emit = defineEmits(["setLayout", "openAlert", "closeAlert"]);
const router = useRouter();

// 가입 정보 목업 데이터
const cardObject = ref([
  {
    title: "현재 청구서 받는 방법",
    sub: "",
    chip: "",
    url: "https://www.naver.com",
    list: [
      { name: "청구서 받는 방법", value: "E-MAIL(상세) 청구서" },
      { name: "이메일 주소", value: "abc**@lguplus.co.kr" },
      { name: "받는 방법 변경일", value: "2024.07.01" },
    ],
  },
]);

// 청구/납부변경 정보 목업 데이터
const dataSelectList = ref([
  { value: 0, name: "납부 방법 변경", url: "https://www.naver.com" },
  { value: 1, name: "결제일 변경", url: "https://www.google.com" },
  { value: 2, name: "청구서 받는 방법 변경", url: "https://www.naver.com" },
]);

const isOpen = ref(false);
const isOpen2 = ref(false);
const handleMonthSel = () => {
  isOpen.value = true;
};

// 달 선택
const callFunction = (e) => {
  console.dir(e.target);
};

// 확인 버튼
const clickConfirm = () => {
  console.log("청구서 재발행 확인");
};

// 개인정보 수집/이용동의
const handleTerms = (e) => {
  if (!e.target.checked) return;
  isOpen2.value = true;
};
const clickConfirm2 = () => {
  console.log("개인정보 확인");
};

const isReissue = ref(false);
const nextPage = () => {
  // pc, mobile 임의 예시
  if (front.isMobile()) {
    router.push("/sc/AL-MY-03-005-1");
  } else {
    // 재발행 팝업
    isReissue.value = true;
  }
};

// 화면 검수용 임시 라우터 처리 (PC)
const nextPageforPC = ref(1);
const goToPcPage = (newStep) => {
  nextPageforPC.value = newStep;
  if (newStep === 1) { isReissue.value = false; }
};

onMounted(() => {
  emit("setLayout", layout);
});
</script>
