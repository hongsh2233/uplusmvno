<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>
      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-04-003'" />
        <!-- // LNB -->

        <!-- contents -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>
          <!-- 내 정보 메뉴 -->
          <MyInfoMenu />
          <!-- // 내 정보 메뉴 -->
          <div class="content-item">
            <div class="content-inner">
              <CardGroup :card-object="cardObject" />

              <div class="form-box">
                <div class="title-area">
                  <strong class="title">
                    결제일(출금일)<button
                      type="button"
                      class="btn-tooltip"
                      @click="tooltipOpen = true"
                    ></button>
                  </strong>
                </div>

                <div class="btn-flex col">
                  <div v-for="item in radioData" :key="item.id" class="radio_item ty05">
                    <input type="radio" :id="item.id" name="radio01" :checked="item.checked" />
                    <label :for="item.id">{{ item.text }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--2024.10.10 버튼 위치 변경 -->
          <BottomFixMenu :btnText="'인증하기'" :disabled="false" @click="nextPage" />
          <!-- // bottom_button -->

          <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
            <template #content>
              <!-- 24.11.01 v0.93 꼭 알아두세요 내용 변경 -->
              <ul class="text-list bull">
                <li>
                  현재 납부 방법이 은행 자동이체 또는 신용카드 자동이체인 경우에만 결제일을 변경할
                  수 있습니다.
                </li>
                <li>이번 달 결제일 이전에 오늘 이후 날짜로 변경하면 이번 달부터 적용됩니다.</li>
                <li>
                  이번 달 결제일이 지났거나, 오늘 이전 날짜로 변경하면 다음달 부터 적용됩니다.
                </li>
                <li>
                  결제일이 주말 및 공휴일인 경우 다음 평일에 결제됩니다. <br />예시) 카드 1차
                  결제일인 9일이 토요일이면 다음 평일인 월요일(11일)에 결제되며, 2차 결제일은 15일이
                  됨
                </li>
                <li>
                  이번 달에 여러 차례 결제일을 변경하시는 경우는 ‘이번 달’ 또는 ‘다음달’ 반영 안내
                  메시지가 맞지 않을 수 있습니다.
                </li>
                <li>
                  결제일에 계좌 잔고가 부족하면 일부만 결제하고 나머지는 추가 결제일에 다시
                  결제합니다
                </li>
                <li>납부방법이 변경되면 결제일은 변경될 수 있습니다.</li>
              </ul>
            </template>
          </Accodian>
        </div>
        <!--// contents -->
      </div>

      <!-- 납부 방법 변경 팝업 -->
      <Popup
        v-if="!front.isMobile()"
        :title="'결제일 변경'"
        :isOpen="isReissue"
        :isPopFooter="false"
        @update:isOpen="isReissue = $event"
        class="pcpopup"
      >
        <ALMY040031 />
      </Popup>
      <!-- 납부 방법 변경 팝업 -->

      <!-- 기존 결제일과 동일할 경우 -->
      <AlertV2
        v-model="alertState.check"
        :textData="{
          title: '기존 결제일과 <br />동일해요',
          description: '변경할 결제일을 확인해 주세요',
        }"
        @close="handleClose"
        @proceed="handleProceed"
      />

      <!-- 24.11.19 v0.97 팝업 추가 -->
      <AlertV2
        v-model="alertState.fail1"
        :textData="{
          title: '만 19세 미만 고객은 <br/>결제일 변경을 신청할 수 없어요',
        }"
        @close="handleClose"
        @proceed="handleProceed"
      />
      <AlertV2
        v-model="alertState.fail2"
        :textData="{
          title: '외국인 고객은 <br/>결제일 변경을 신청할 수 없어요',
        }"
        @close="handleClose"
        @proceed="handleProceed"
      />
      <!--// 24.11.19 v0.97 팝업 추가 -->

      <!-- 결제일 툴팁-->
      <Popup
        title="결제일(출금일)"
        :isOpen="tooltipOpen"
        :popType="'alert-gray'"
        @update:isOpen="tooltipOpen = $event"
        @confirm="console.log('confirm')"
      >
        <b
          >납부 방법을 변경하시면 결제일(출금일)이 변경됩니다. 납부 방법 변경 완료 후, ‘결제일 변경’
          메뉴에서 원하시는 결제일로 선택해 주세요</b
        >
        <div class="gray-notice-box">
          <ul class="nmr-list">
            <li>
              <span class="txt-gray">은행</span>
              <p>1차(15일), 2차(28일), 3차(22일), 4차(26일)</p>
            </li>
            <li>
              <span class="txt-gray">신용카드</span>
              <p>
                1차(9일), 2차(1차 결제일+평일 4일), 3차(2차 결제일+평일 3일), 4차(3차 결제일+평일
                3일)
              </p>
            </li>
          </ul>
        </div>
      </Popup>
      <!--// 결제일 툴팁-->

      <!-- 팝업 디자인 검수용입니다.-->
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            style="
              position: fixed;
              z-index: 1;
              bottom: 100px;
              left: 10px;
              font-size: 12px;
              background-color: rgb(255 93 0 / 23%);
              color: #4f4f4f;
            "
          >
            팝업 디자인<br />
            검수용입니다
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in buttonName"
            :key="index"
            :value="index"
            @click="handleAlert(item.alertName, true)"
          >
            <v-list-item-title style="font-size: 13px">{{ item.txt }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!--// 팝업 디자인 검수용입니다.-->
    </div>
  </div>
  <!-- // container -->
</template>

<script setup>
import PcLnb from "@/components/v2/common/PcLnb";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu";
import CardGroup from "@/components/v2/common/CardGroup";
import Accodian from "@/components/v2/common/Accodian";
import Popup from "@/components/v2/common/Popup";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
import AlertV2 from "@/components/v2/common/AlertV2";

import ALMY040031 from "@/components/v2/pages/paymentchange/ALMY040031";

import { useRouter } from "vue-router";

// 헤더 정보
const emit = defineEmits(["setLayout"]);
const router = useRouter();

const layout = ref({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "결제일 변경",
});

// 납부 방법 변경 목업 데이터
const cardObject = ref([
  {
    title: "납부정보",
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

//청구내역 라디오 목업
const radioData = ref([
  { id: "radio01_01", value: "1차(9일)", text: "1차(9일)", checked: true },
  {
    id: "radio01_02",
    value: "2차(1차 결제일+평일4일)",
    text: "2차(1차 결제일+평일4일)",
    checked: false,
  },
  {
    id: "radio01_03",
    value: "3차(2차 결제일+평일3일)",
    text: "3차(2차 결제일+평일3일)",
    checked: false,
  },
  {
    id: "radio01_04",
    value: "4차(3차 결제일+평일3일)",
    text: "4차(3차 결제일+평일3일)",
    checked: false,
  },
]);

// alert
const alertState = ref({
  check: false, // 결제일 동일한 경우
  fail1: false, // 만 19세 미만 고객이 결제일 변경 신청 시
  fail2: false, // 외국인 고객이 결제일 변경 신청 시
});
const buttonName = [
  { txt: "결제일 동일한 경우", alertName: "check" },
  { txt: "만 19세 미만 고객이 결제일 변경 신청 시", alertName: "fail1" },
  { txt: "외국인 고객이 결제일 변경 신청 시", alertName: "fail2" },
];

//얼럿창 open/close
const handleAlert = (dialogName, value) => {
  alertState.value[dialogName] = value;
};
const handleClose = () => {
  console.log("닫기 버튼 클릭");
};

const handleProceed = () => {
  console.log("확인 버튼 클릭");
};

const isReissue = ref(false);
const nextPage = () => {
  // 화면 검수용 임시 라우터 처리
  if (front.isMobile()) {
    router.push("/sc/AL-MY-04-003-1");
  } else {
    // 납부 방법 변경 팝업
    isReissue.value = true;
  }
};

//tooltipOpen
const tooltipOpen = ref(false);

onMounted(() => {
  emit("setLayout", layout);
});
</script>
