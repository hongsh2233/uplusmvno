<template>
  <div class="first-content-item">
    <div class="content-item">
      <div class="content-inner">
        <div class="cont-head">
          <h3 class="cont-title-main">
            요금을 납부할<br />
            <strong class="txt-primary">{{ info == "bank" ? "은행 정보" : "카드 정보" }}</strong
            >를 입력해 주세요
          </h3>
        </div>

        <!-- Bank form -->
        <div v-if="info == 'bank'" class="form-box">
          <div class="title-area">
            <strong class="title">은행명</strong>
          </div>
          <InputForm
            class="combobox-bottom"
            :option="{ placeholder: '은행을 선택해 주세요', readonly: true, action: 'dropdown' }"
            @click="handleMonthSel"
          />
        </div>
        <div v-if="info == 'bank'" class="form-box">
          <div class="title-area">
            <strong class="title">계좌번호</strong>
          </div>

          <InputForm
            class="combobox-bottom text"
            :option="{ placeholder: '숫자만 입력해 주세요' }"
          />
        </div>
        <!--// Bank form -->

        <!-- Card form -->
        <div v-if="info == 'card'" class="form-box">
          <div class="title-area">
            <strong class="title">카드번호</strong>
          </div>
          <InputForm
            class="combobox-bottom text"
            :option="{ placeholder: '숫자만 입력해 주세요', value: '1234-****-****-5678' }"
          />
        </div>
        <div v-if="info == 'card'" class="form-box">
          <div class="title-area">
            <strong class="title">카드사</strong>
          </div>

          <InputForm
            class="combobox-bottom text view"
            :option="{ value: '현대카드', readonly: true }"
          />
        </div>
        <div v-if="info == 'card'" class="form-box">
          <div class="title-area">
            <strong class="title">카드 유효기간</strong>
          </div>
          <div class="form-flex">
            <InputForm class="combobox-bottom text" :option="{ placeholder: 'MM' }" />
            <InputForm class="combobox-bottom text" :option="{ placeholder: 'YY', value: '25' }" />
          </div>
        </div>
        <!--// Card form -->
      </div>
    </div>

    <!-- 24.12.12 꼭 알아두세요 위치 변경 (AL-MY-04-002-2 -> ALMY040022 )-->
    <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
      <template #content>
        <!-- 24.11.19 v0.97 v.0.97 101p 유의사항 내용 삭제 -->
        <ul class="text-list bull">
          <li>
            납부 방법을 변경하시려면 간편 인증(PASS, 토스, 페이코 등), 휴대폰, 신용카드 등
            본인인증이 필요합니다.
          </li>
          <li>
            상품 가입 명의자와 홈페이지 회원 명의의 은행 계좌나 카드로만 납부 방법을 변경하실 수
            있습니다. (단, 외국인은 본인인증 과정에서 불일치가 발생할 경우, 고객센터 상담을 통해
            가능합니다)
          </li>
          <li>
            ‘카드 → 은행’으로 변경 시, 변경 신청 다음 달 1일 예약 변경으로 신청됩니다. (출금일은
            변경 신청 다음 달부터 매달 15일에 출금되며, 출금 일이 주말/공휴일이면 다음 평일에
            출금됩니다)
          </li>
          <li>
            ‘은행 → 카드’로 변경 시, 변경 신청 다음 달 1일 예약 변경으로 신청됩니다. (결제일은 변경
            신청 다음 달부터 매달 11일 경이며, 변동될 수 있습니다)
          </li>
          <li>
            ‘은행 → 은행’ 또는 ‘카드 → 카드’로 변경 시, 변경일로부터 2일(영업일 기준) 후에 변경된
            은행 계좌 또는 카드로 적용됩니다.
          </li>
          <li>
            ‘은행 → 은행’ 변경 시, 출금일인 매달 15 일이며 출금일이 주말/공휴일이면 다음 평일에
            출금됩니다.
          </li>
          <li>출금일에 잔고가 부족할 경우, 출금일 이후에 나머지 금액이 출금됩니다.</li>
        </ul>
      </template>
    </Accodian>
    <!-- //24.12.12 꼭 알아두세요 위치 변경 (AL-MY-04-002-2 -> ALMY040022 )-->

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

    <BottomFixMenu :btnText="'인증하기'" :disabled="false" @click="nextPage" />
    <!-- // bottom_button -->

    <!-- 은행명 선택 팝업 -->
    <Popup title="은행명" :isOpen="isOpen" @update:isOpen="isOpen = $event" @confirm="clickConfirm">
      <PopupListItem
        v-model="bankSelected"
        :ListItemData="bankList"
        :option="{ name: 'bank-select', multiple: true }"
        @select="clickSelectListItem"
      />
    </Popup>
    <!-- 은행명 선택 팝업 -->

    <!-- 본인 명의의 은행계좌 또는 신용카드가 아닐 때 -->
    <AlertV2
      v-model="alertState.inconsistency"
      :textData="{
        title: '납부 방법은 본인 명의의 <br/>은행 계좌 또는 신용카드로만 <br/>변경할 수 있어요',
        description: '입력하신 정보를 다시 확인 후 <br/>시도해 주세요',
        attention: '※ 평생 계좌(휴대폰 번호 등) <br/>납부 방법 변경 불가',
      }"
      @close="handleClose"
      @proceed="handleProceed"
    />

    <!-- 24.11.19 v0.97 팝업 추가 -->
    <AlertV2
      v-model="alertState.fail1"
      :textData="{
        title: '만 19세 미만 고객은 <br/>납부 방법 변경을 할 수 없어요',
      }"
      @close="handleClose"
      @proceed="handleProceed"
    />
    <AlertV2
      v-model="alertState.fail2"
      :textData="{
        title: '외국인 고객은 <br/>납부 방법 변경을 할 수 없어요',
      }"
      @close="handleClose"
      @proceed="handleProceed"
    />
    <!--// 24.11.19 v0.97 팝업 추가 -->
  </div>
</template>

<script setup>
import Accodian from "@/components/v2/common/Accodian";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
import Popup from "@/components/v2/common/Popup";
import PopupListItem from "@/components/v2/common/PopupListItem";
import InputForm from "@/components/v2/common/InputForm";
import AlertV2 from "@/components/v2/common/AlertV2";

import { useRouter } from "vue-router";
const router = useRouter();
const emit = defineEmits(["nextStep"]);

const props = defineProps({
  info: {
    type: String,
    default: "bank",
  },
});

const isOpen = ref(false);
const handleMonthSel = () => {
  isOpen.value = true;
};

// 요금 납부 방법 데이터
const radioData = ref([
  { id: "radio01_01", name: "radio01", checked: true, text: "은행" },
  { id: "radio01_02", name: "radio01", checked: false, text: "신용카드" },
]);

const handleChecked = (v) => {
  radioData.value.map((a) => {
    a.checked = a === v ? true : false;
    return a;
  });
};

// 은행명 목업 데이터
const bankSelected = ref([]);
const bankList = ref([
  { selected: true, value: 0, name: "국민은행", class: "bk-kb" },
  { selected: false, value: 1, name: "기업은행", class: "bk-ibk" },
  { selected: false, value: 2, name: "KEB하나(구_외환)", class: "bk-hana" },
  { selected: false, value: 3, name: "농협", class: "bk-nh" },
  { selected: false, value: 4, name: "SC은행", class: "bk-sc" },
  { selected: false, value: 5, name: "씨티은행", class: "bk-citi" },
  { selected: false, value: 6, name: "대구은행", class: "bk-dgb" },
  { selected: false, value: 7, name: "우리은행", class: "bk-woori" },
  { selected: false, value: 8, name: "부산은행", class: "bk-busan" },
  { selected: false, value: 9, name: "광주은행", class: "bk-kwangju" },
  { selected: false, value: 10, name: "경남은행", class: "bk-kyoungnam" },
  { selected: false, value: 11, name: "우체국", class: "bk-epost" },
  { selected: false, value: 12, name: "KEB하나", class: "bk-hana" },
  { selected: false, value: 13, name: "신한은행", class: "bk-shinhan" },
]);
onMounted(() => {
  bankSelected.value = bankList.value.filter((item) => item.selected).map((item) => item.value);
});

const clickSelectListItem = (targetData) => {
  // console.log(targetData);
};

// alert
const alertState = ref({
  inconsistency: false, // 본인 명의의 은행계좌 또는 신용카드가 아닐 때
  fail1: false,
  fail2: false,
});

//alert 화면 검수용 목업
const buttonName = [
  { txt: "본인 명의의 은행계좌 또는 신용카드가 아닐 때", alertName: "inconsistency" },
  { txt: "[비제휴] 미성년자 고객의 납부 방법 변경", alertName: "fail1" },
  { txt: "[비제휴] 외국인 고객의 납부 방법 변경", alertName: "fail2" },
];

//얼럿창 open/close
const handleAlert = (dialogName, value) => {
  alertState.value[dialogName] = value;
};

// 확인 버튼
const clickConfirm = () => {
  console.log("청구서 재발행 확인");
};

const handleClose = () => {
  console.log("닫기 버튼 클릭");
};

const handleProceed = () => {
  console.log("확인 버튼 클릭");
};

//AL-MY-04-002-2
const nextPage = () => {
  // 화면 검수용 임시 라우터 처리
  const pageNumber = 3;
  if (front.isMobile()) {
    router.push("/sc/AL-MY-04-002-3");
  } else {
    handleAlert("inconsistency", false);
    emit("nextStep", pageNumber);
  }
};
</script>
