<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>
      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-04-002'" />
        <!-- // LNB -->

        <!-- contents -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>
          <!-- 내 정보 메뉴 -->
          <MyInfoMenu />
          <!-- // 내 정보 메뉴 -->
          <div class="content-item">
            <div class="content-inner">
              <CardGroup :card-object="cardObject1">
                <!-- 24.11.25 v0.98 툴팁 추가 -->
                <template #name="{item}">
                  {{ item.name }}
                  <button v-if="item.tooltip" type="button" class="btn-tooltip" @click="tooltipOpen = true"></button>
                </template>
                <!-- 24.11.25 v0.98 툴팁 추가 -->
                <template #default="{ item }">
                  <!-- 글씨 색상 class : txt-orange -->
                  <p :class="item.class">
                    {{ item.value }}
                  </p>
                </template>
              </CardGroup>
            </div>
          </div>

          <BottomFixMenu :btnText="'납부 방법 변경하기'" :disabled="false" @click="nextPage" />
          <!-- // bottom_button -->
        </div>
        <!--// contents -->
      </div>

      <!-- 청구서 재발행 / 완료 팝업 -->
      <Popup
        v-if="!front.isMobile()"
        :title="'납부 방법 변경'"
        :isOpen="isReissue"
        :isPopFooter="false"
        @update:isOpen="isReissue = $event"
        class="pcpopup"
      >
        <ALMY040021 v-if="pageStep === 1" @nextStep="nextPage1" />
        <ALMY040022 v-if="pageStep === 2" @nextStep="nextView" :info="nextViewType" />
        <ALMY040023 v-if="pageStep === 3" @nextStep="nextPage3" />
      </Popup>
      <!-- // 청구서 재발행 / 완료 팝업 -->

      <!-- 24.11.25 v0.98 결제일 툴팁-->
      <Popup
        title="결제일(출금일)"
        :isOpen="tooltipOpen"
        :popType="'alert-gray'"
        @update:isOpen="tooltipOpen = $event"
        @confirm="console.log('confirm')"
      >
        <b>납부 방법을 변경하시면 결제일(출금일)이 변경됩니다. 납부 방법 변경 완료 후, ‘결제일 변경’ 메뉴에서 원하시는 결제일로 선택해 주세요</b>
        <div class="gray-notice-box">
          <ul class="nmr-list">
            <li>
              <span class="txt-gray">은행</span>
              <p>1차(15일), 2차(28일), 3차(22일), 4차(26일)</p>
            </li>
            <li>
              <span class="txt-gray">신용카드</span>
              <p>1차(9일), 2차(1차 결제일+평일 4일), 3차(2차 결제일+평일 3일), 4차(3차 결제일+평일 3일)</p>
            </li>
          </ul>
        </div>
      </Popup>
      <!--// 24.11.25 v0.98 결제일 툴팁-->

    </div>
  </div>
  <!-- // container -->
</template>

<script setup>
import PcLnb from "@/components/v2/common/PcLnb";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu";
import CardGroup from "@/components/v2/common/CardGroup";
import Popup from "@/components/v2/common/Popup";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";

import ALMY040021 from "@/components/v2/pages/paymentchange/ALMY040021";
import ALMY040022 from "@/components/v2/pages/paymentchange/ALMY040022";
import ALMY040023 from "@/components/v2/pages/paymentchange/ALMY040023";

import { useRouter } from "vue-router";

// 헤더 정보
const emit = defineEmits(["setLayout"]);
const router = useRouter();

const layout = ref({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "납부 방법 변경",
});

// 납부 방법 변경 목업 데이터
const cardObject1 = ref([
  {
    title: "현재 납부 방법",
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
    title: "변경 신청 중인 납부 방법",
    sub: "",
    chip: "",
    url: "https://www.naver.com",
    list: [
      { name: "납부 방법", value: "신한카드/신용카드", class: "txt-orange", tooltip: false },
      { name: "카드(계좌) 번호", value: "451*-****-****-3224", class: "txt-orange", tooltip: false },
      { name: "소유주(예금주)", value: "김*닷", class: "txt-orange", tooltip: false },
      { name: "결제일(출금일)", value: "1차(9일)", class: "txt-orange", tooltip: true },
    ],
  },
]);

const isReissue = ref(false);
const pageStep = ref(1);
const nextPage = () => {
  // 화면 검수용 임시 라우터 처리
  if (front.isMobile()) {
    router.push("/sc/AL-MY-04-002-1");
  } else {
    // 납부 방법 변경 팝업
    isReissue.value = true;
  }
};

const nextViewType = ref(null);
const nextView = (page) => {
  pageStep.value = page;
};

const nextPage1 = (value, page) => {
  nextViewType.value = value;
  nextView(page);
};
const nextPage3 = () => {
  nextView(1);
  isReissue.value = false;
};

//tooltipOpen
const tooltipOpen = ref(false)

onMounted(() => {
  emit("setLayout", layout);
});
</script>
