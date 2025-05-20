<template>
  <div class="first-content-item">
    <div class="content-item">
      <div class="content-inner">
        <div class="cont-head title-main">
          <h3 class="cont-title-main">
            일시정지 기간을<br />
            <strong class="txt-primary">설정</strong>해 주세요
          </h3>
          <span class="title-exp"> 일시정지는 1년에 2번, 180일까지 할 수 있어요</span>
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">정지 사유</strong>
          </div>
          <div class="form_group">
            <div class="form_item">
              <div class="btn-flex nowrap">
                <div v-for="item in radioData" :key="item.id" class="radio_item ty05">
                  <input
                    type="radio"
                    name="radio02"
                    :id="item.id"
                    :value="item.value"
                    v-model="radioSelect"
                  />
                  <label :for="item.id">{{ item.text }}</label>
                </div>
              </div>
            </div>
          </div>
          <div class="support-guide">
            <p>
              군 입대, 해외 체류 등의 사유로 서비스를 장기간 이용할 수 없는 경우, 고객센터 상담사를
              통해 원하는 기간만큼 일시정지를 신청할 수 있어요.
            </p>
            <div class="agent-support">
              <span>에스원안심모바일</span>
              <b>114(자사 휴대폰 무료) 02-2275-0068(유료)</b>
            </div>
            <div class="btn-area col" v-if="front.isMobile()">
              <NuxtLink :to="'tel:1800-1577'" class="btn-rounded btn-line">고객센터 연결</NuxtLink>
            </div>
          </div>
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">정지 기간</strong>
          </div>
          <div class="form_group">
            <div class="form_item val_chk">
              <div class="form-flex">
                <InputForm
                  class="combobox-bottom"
                  :option="{ placeholder: '시작일', readonly: true, action: 'datepicker' }"
                  @click="handlePopup('datepicker', true), (dateName = '시작일')"
                />
                <InputForm
                  class="combobox-bottom"
                  :option="{ placeholder: '종료일', readonly: true, action: 'datepicker' }"
                  @click="handlePopup('datepicker', true), (dateName = '종료일')"
                />
              </div>
            </div>
            <div class="error">
              <em>정지 기간을 선택해 주세요.</em>
            </div>
          </div>
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">정지 일수</strong>
          </div>
          <div class="form-flex text">
            <div class="input_box fl-sb">
              <span class="txt-gray">신청일</span>
              <b class="txt-orange">7일</b>
            </div>
            <div class="input_box fl-sb">
              <span class="txt-gray">신청 가능 일수</span>
              <b class="txt-orange">180일</b>
            </div>
          </div>
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">수신 금지 신청</strong>
          </div>
          <div class="gray-notice-box">
            <ul class="text-list bull">
              <li>
                일시정지해도 최초 30일 동안은 받는 통화와 음성 사서함 서비스를 이용할 수 있어요.
              </li>
              <li>
                휴대폰을 잃어버린 경우, 수신자 부담 전화로 요금이 발생할 수 있으므로 받는 전화
                금지를 함께 신청해 주세요.
              </li>
            </ul>
          </div>
          <div class="check-txt check_st">
            <input type="checkbox" id="checkbox01_02" name="" @click="handleTerms" />
            <label for="checkbox01_02">수신 금지 신청할게요</label>
          </div>
        </div>
      </div>
    </div>

    <BottomFixMenu :btnText="'인증하기'" :disabled="false" @click="nextPage" />
    <!-- // bottom_button -->

    <!-- popup datepicker -->
    <Popup
      :title="dateName + '을 선택해 주세요'"
      :isOpen="popState.datepicker"
      :isPopFooter="false"
      @update:isOpen="popState.datepicker = $event"
      @confirm="clickConfirm"
      class="pop-calendar"
    >
      <Datepicker :disabled-dates="disabledDates" @select="selectedDate" />
    </Popup>
    <!-- //popup datepicker -->

    <!-- 일시정지 신청 요청 시 confirm 호출 -->
    <AlertV2
      v-model="alertState.pause"
      :textData="{
        title:
          '약정 기간 중에 일시정지를 할 경우<br/> 정지 기간은 약정 기간에서 제외되며,<br/> 정지한 날짜만큼 약정 기간이 연장돼요',
        description: '일시정지를 신청하시겠습니까?',
      }"
      :confirm="true"
      :buttonText="{ cancel: '취소', confirm: '확인' }"
      @close="handleClose"
      @proceed="handleProceed"
    />
    <!-- //일시정지 신청 요청 시 confirm 호출 -->

    <!-- 일시정지 종료일이 시작일과 같은 경우 -->
    <AlertV2
      v-model="alertState.fail1"
      :textData="{
        title: '일시정지 종료일은<br/> 시작일과 동일하게 설정할 수 없어요',
      }"
      @close="handleClose"
      @proceed="handleProceed"
    />
    <!-- //일시정지 종료일이 시작일과 같은 경우 -->

    <!-- 수신금지를 신청할 경우 -->
    <AlertV2
      v-model="alertState.fail2"
      :textData="{
        title: '수신 금지를 신청할 경우<br/> 일시정지 시작일을 <br/>오늘 날짜로 선택해야 해요',
      }"
      @close="handleClose"
      @proceed="handleProceed"
    />
    <!-- //수신금지를 신청할 경우 -->

    <!-- 일시정지 신청 가능 일수가 초과한 경우 -->
    <AlertV2
      v-model="alertState.fail3"
      :textData="{
        title: '일시정지 신청 가능 일수가<br /> 초과되었어요.',
        description: '종료일을 다시 선택해 주세요.',
      }"
      @close="handleClose"
      @proceed="handleProceed"
    />
    <!-- // 일시정지 신청 가능 일수가 초과한 경우 -->

    <!-- 뒤로가기 선택한 경우 -->
    <AlertV2
      v-model="alertState.back"
      :textData="{
        title: '이 화면에서 나가면<br/> 입력 중인 내용이 모두 사라져요!',
      }"
      :confirm="true"
      :buttonText="{ cancel: '나가기', confirm: '계속진행' }"
      @close="handleClose"
      @proceed="handleProceed"
    />
    <!--// 뒤로가기 선택한 경우 -->

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
</template>

<script setup>
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
import InputForm from "@/components/v2/common/InputForm";
import Datepicker from "@/components/v2/common/Datepicker";
import Popup from "@/components/v2/common/Popup";
import AlertV2 from "@/components/v2/common/AlertV2";

import { useRouter } from "vue-router";
const router = useRouter();
const emit = defineEmits(["nextStep"]);

//form 목업
const radioData = ref([
  { id: "radio01_01", text: "경제적 사유", value: "val1" },
  { id: "radio01_02", text: "단기 부재", value: "val2" },
  { id: "radio01_03", text: "기타", value: "val3" },
]);
const radioSelect = ref(radioData.value[0].value);

//팝업 목업
const dateName = ref("시작일");
const popState = ref({
  datepicker: false,
  timeSelect: false,
  emailSelect: false,
  message: false,
});

const disabledDates = ref([new Date(2025, 0, 2), new Date(2025, 0, 3)]);

const handlePopup = (dateName, val) => {
  popState.value[dateName] = val;
};

const clickConfirm = () => {
  console.log("확인");
};

let touchStartTime = ref(Date.now());
const selectedDate = (date) => {
  popState.value.datepicker = false;
  touchStartTime = ref(Date.now());
};

const nextPage = () => {
  // 화면 검수용 임시 라우터 처리
  const pageNumber = 1;
  const touchDuration = Date.now() - touchStartTime.value;
  if (front.isMobile() && touchDuration > 300) {
    router.push("AL-MY-06-005-1");
  } else {
    emit("nextStep", pageNumber);
  }
};

// alert
const alertState = ref({
  fail1: false, // 일시정지 종료일과 시작일이 같은 날짜일 때
  fail2: false, // 수신금지 신청한 경우
  fail3: false, // 일시정지 신청 가능 일수가 초과한 경우
  back: false, // 뒤로가기
  pause: false, // 일시정지 신청
});

//alert 화면 검수용 목업
const buttonName = [
  { txt: "일시정지 종료일과 시작일이 같은 날짜일 때", alertName: "fail1" },
  { txt: "수신금지 신청한 경우", alertName: "fail2" },
  { txt: "일시정지 신청 가능 일수가 초과한 경우", alertName: "fail3" },
  { txt: "뒤로가기", alertName: "back" },
  { txt: "일시정지 신청", alertName: "pause" },
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
</script>
