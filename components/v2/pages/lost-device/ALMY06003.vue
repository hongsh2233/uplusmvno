<template>
  <div class="first-content-item">
    <div class="content-item">
      <div class="content-inner">
        <div class="cont-head title-main">
          <h3 class="cont-title-main">
            휴대폰(유심) 분실 정보를 <br />
            <strong class="txt-primary">입력</strong>해 주세요
          </h3>
        </div>
        <div class="form-box">
          <CardGroup :card-object="cardObject"></CardGroup>
        </div>
      </div>
    </div>

    <div class="content-item">
      <div class="content-inner">
        <div class="form-box">
          <div class="title-area">
            <strong class="title">분실한 날짜</strong>
          </div>
          <div class="form_group">
            <div class="form_item val_chk">
              <InputForm
                class="combobox-bottom"
                :option="{ value: '2024.06.01', readonly: true, action: 'datepicker' }"
                @click="handlePopup('datepicker', true)"
              />
            </div>
            <div class="error">
              <em>날짜를 선택해 주세요.</em>
              <!-- <em>오늘 또는 이전 날짜를 선택해 주세요.</em> -->
            </div>
          </div>
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">휴대폰(유심) 분실/도난</strong>
          </div>
          <div class="form_group">
            <div class="form_item val_chk">
              <div class="btn-flex">
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
            <div class="error">
              <em>유형을 선택해 주세요.</em>
            </div>
          </div>
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">분실/도난 지역</strong>
          </div>
          <div class="form_group">
            <div class="form_item val_chk">
              <InputForm
                class="combobox-bottom"
                :option="{ placeholder: '예)서울시 마포구 누리꿈 스퀘어' }"
              />
            </div>
            <div class="error">
              <em>분실(도난)지역을 작성해 주세요.</em>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-item">
      <div class="content-inner">
        <div class="form-box">
          <div class="title-area">
            <strong class="title">연락 받을 휴대폰 번호</strong>
          </div>
          <div class="form_group">
            <div class="form_item val_chk">
              <InputForm
                class="combobox-bottom"
                :option="{ placeholder: `‘-’ 없이 숫자만 입력해 주세요` }"
              />
            </div>
            <div class="error">
              <em>휴대폰 번호를 입력해 주세요.</em>
            </div>
          </div>
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">연락 가능한 시간</strong>
          </div>
          <div class="form_group">
            <div class="form_item val_chk">
              <!-- 24.12.12 시작시간, 종료시간 추가 -->
              <InputForm
                class="combobox-bottom"
                :option="{ placeholder: `시작시간`, value: '', readonly: true, action: 'dropdown' }"
                @click="handlePopup('timeSelect', true), (timeType = 'start')"
              />
              <InputForm
                class="combobox-bottom"
                :option="{ placeholder: `종료시간`, value: '', readonly: true, action: 'dropdown' }"
                @click="handlePopup('timeSelect', true), (timeType = 'end')"
              />
              <!--// 24.12.12 시작시간, 종료시간 추가 -->
            </div>
            <div class="error">
              <em>시간을 선택해 주세요.</em>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-item">
      <div class="content-inner">
        <div class="form-box">
          <div class="title-area">
            <strong class="title">분실 처리결과를 확인할 이메일 주소</strong>
          </div>
          <div class="form_group">
            <div class="form_item val_chk">
              <!-- validation 체크 클래스 val_chk -->
              <InputForm
                class="combobox-bottom text"
                :option="{ placeholder: '아이디', value: 'honggildong' }"
                @inputValue="console.log($event)"
              />
              <span class="mark_div">@</span>
              <InputForm
                class="combobox-bottom"
                :option="{
                  placeholder: '이메일 선택',
                  value: 'lguplus.co.kr',
                  readonly: false,
                  action: 'dropdown',
                }"
                @btnClick="handlePopup('emailSelect', true)"
              />
            </div>
            <!-- <div class="error">이메일을 입력해 주세요.</div> -->
            <div class="error">이메일 형식을 확인해 주세요.</div>
          </div>
        </div>

        <div class="form-box">
          <div class="gray-notice-box">
            <div class="title-area">
              <strong class="title">분실폰에 문자를 보내시겠습니까?</strong>
            </div>
            <div class="btn-flex">
              <div v-for="item in radioData3" :key="item.id" class="radio_item ty05">
                <input
                  type="radio"
                  name="radio04"
                  :id="item.id"
                  :value="item.value"
                  v-model="radioSelect3"
                />
                <label :for="item.id">{{ item.text }}</label>
              </div>
            </div>
            <button type="button" class="txt-link gray" @click="handlePopup('message', true)">
              보낼 문자 내용 확인
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="content-item">
      <div class="content-inner">
        <div class="form-box">
          <div class="title-area">
            <strong class="title">일시정지 신청</strong>
          </div>
          <div class="btn-flex">
            <div v-for="item in radioData4" :key="item.id" class="radio_item ty05">
              <input
                type="radio"
                name="radio05"
                :id="item.id"
                :value="item.value"
                v-model="radioSelect4"
              />
              <label :for="item.id">{{ item.text }}</label>
            </div>
          </div>
          <div class="text_info">분실한 휴대폰으로 계속 연락하시려면 발신만 정지하세요</div>
        </div>
      </div>
    </div>

    <!-- 24.12.12 꼭 알아두세요 위치 변경 (AL-MY-06-003 -> ALMY06003 )-->
    <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
      <template #content>
        <ul class="text-list bull">
          <li>분실정지는 월 2회까지 가능합니다.</li>
          <li>
            분실 등록을 하면 자동적으로 휴대폰이 일시정지되어 발신이 금지됩니다. (단, 발신/수신 모두
            정지 신청하신 경우, 문자/통화 등의 수신이 불가합니다.)
          </li>
          <li>
            선불 요금제를 이용하는 경우, 분실 등록을 하여도 일시정지는 불가합니다. 가입하신
            파트너사를 통해 일시 정지하시기 바랍니다.
          </li>
          <li>
            분실 등록을 악용하여 무료 통화 등을 하는 경우 정상 요금이 청구되며 법적 책임을 물을 수
            있습니다.
          </li>
          <li>분실 등록 후 일시정지를 하지 않으면 휴대폰 기본료가 그대로 청구됩니다.</li>
          <li>
            분실폰에 문자 보내기 선택 시, 분실된 휴대폰 습득자로부터 연락을 받을 수 있도록 문자
            메시지가 발송됩니다.
          </li>
          <li>일시정지를 설정하는 경우 부가세 포함 기본요금이 청구됩니다.</li>
          <li>
            월 중간에 일시정지를 설정하는 경우 설정 이전까지는 이용 중인 요금제의 기본요금을 사용
            일수만큼 청구하고, 정지 기간 중에는 부가세 포함 기본요금을 사용 일수만큼 청구합니다.
          </li>
          <li>
            일시정지 신청 이후 30일 동안은 수신이 가능하므로, 타인의 수신자 부담 이용에 의해 요금이
            부과될 수 있습니다. 이를 방지하려면 ‘수신 금지’도 함께 신청하세요.
          </li>
          <li>
            연체 요금이 있는 경우 홈페이지를 통한 일시정지 해제가 불가능합니다. 고객센터로 문의해
            주세요.
          </li>
          <li>
            일시정지 해제 후, 단문 메시지 수신 차단 서비스를 이용하는 고객은 별도로 해제가
            필요합니다.
          </li>
          <li>
            휴대폰 분실신고 시 타 사용자의 USIM 사용은 불가합니다. (USIM 분실 등록은 고객센터로 문의
            바랍니다.)
          </li>
          <li>
            분실 등록 시 프로모션 데이터, 혜택 등은 삭제됩니다. (단, 분실 해제 이후 파트너사
            고객센터로 문의주시면 확인 후, 재등록이 가능합니다.)
          </li>
        </ul>
      </template>
    </Accodian>
    <!-- //24.12.12 꼭 알아두세요 위치 변경 (AL-MY-06-003 -> ALMY06003 )-->

    <BottomFixMenu :btnText="'분실 등록하기'" :disabled="false" @click="nextPage" />
    <!-- // bottom_button -->

    <!-- popup datepicker -->
    <Popup
      :title="'분실한 날짜를 선택해 주세요'"
      :isOpen="popState.datepicker"
      :isPopFooter="false"
      @update:isOpen="popState.datepicker = $event"
      @confirm="clickConfirm"
      class="pop-calendar"
    >
      <Datepicker />
    </Popup>
    <!-- //popup datepicker -->

    <!-- popup - 연락가능한 시간 선택 -->
    <Popup
      :title="'시간 선택'"
      :isOpen="popState.timeSelect"
      @update:isOpen="popState.timeSelect = $event"
      @confirm="clickConfirm"
    >
      <PopupListItem
        v-model="selectedTimeValue"
        :ListItemData="timeType === 'start' ? startTimeList : endTimeList"
        @select="updateTimeSelection(timeType === 'start' ? timeStartValue : timeEndValue)"
      />
    </Popup>
    <!-- //popup - 연락가능한 시간 선택 -->

    <!-- 이메일 팝업 -->
    <Popup
      title="이메일 선택"
      :isOpen="popState.emailSelect"
      @update:isOpen="popState.emailSelect = $event"
      @confirm="clickConfirm"
    >
      <!-- 2024.10.10 이메일 선택 수정 -->
      <PopupListItem
        v-model="emailSelected"
        :ListItemData="emailList"
        :option="{ name: 'email-select' }"
        @select="clickSelectListItem(emailSelected)"
      />
    </Popup>
    <!-- // 이메일 팝업 -->

    <Popup
      title="보낼 문자"
      :isOpen="popState.message"
      :popType="'alert-gray'"
      @update:isOpen="popState.message = $event"
      @confirm="clickConfirm"
    >
      <div class="missing-item-message">
        <p class="text">
          고객님 분실 휴대폰으로<br />
          아래 내용의 문자를 보내드려요
        </p>
        <div class="gray-notice-box">
          <p class="notice-tit">
            휴대폰을 분실하였습니다.<br />
            본 휴대폰을 습득하신 분은 아래의 연락처로<br class="mo_hide" />
            연락(문자/전화/이메일) 부탁드립니다.
          </p>
          <ul class="text-list bull item-info">
            <li>휴대폰 연락처 <span class="txt-black">01000000000</span></li>
            <li>이메일 주소 <span class="txt-black">uplus@uplus.com</span></li>
          </ul>
        </div>
      </div>
    </Popup>

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

    <AlertV2
      v-model="alertState.count"
      :textData="{
        title:
          '휴대폰 분실 등록 시, <br/>휴대폰 사용이 일시정지 돼요<br />(선불 요금제 일시정지 불가능)',
      }"
      :confirm="true"
      :buttonText="{ cancel: '등록 취소', confirm: '분실 등록' }"
      @close="handleClose"
      @proceed="handleProceed"
    >
      <div class="missing-item-count">
        <b><span class="txt-orange">2</span>번 남았어요</b>
      </div>
      <p class="description">휴대폰 분실 등록을 하겠습니까?</p>
      <ul class="text-list bull dividers">
        <li>
          분실 등록 시 프로모션 데이터, 혜택 등은 삭제되나, 파트너사 고객센터로 문의주시면 재등록이
          가능합니다.
        </li>
      </ul>
    </AlertV2>

    <!-- 팝업 디자인 검수용입니다.-->
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          style="
            position: fixed;
            z-index: 3;
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
import Accodian from "@/components/v2/common/Accodian";
import CardGroup from "@/components/v2/common/CardGroup";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
import InputForm from "@/components/v2/common/InputForm";
import Datepicker from "@/components/v2/common/Datepicker";
import Popup from "@/components/v2/common/Popup";
import PopupListItem from "@/components/v2/common/PopupListItem";
import AlertV2 from "@/components/v2/common/AlertV2";

import { useRouter } from "vue-router";
const router = useRouter();
const emit = defineEmits(["nextStep"]);

const cardObject = ref([
  {
    title: "분실한 휴대폰(유심) 정보",
    list: [
      { name: "휴대폰 번호", value: "010-88**-35**" },
      { name: "제조사", value: "애플코리아(유)" },
      { name: "모델명", value: "ULK-A2890-256" },
      { name: "단말 일련번호", value: "****************8043" },
      { name: "유심(개인정보) 카드 번호", value: "*******4601" },
    ],
  },
]);

//팝업 목업
const popState = ref({
  datepicker: false,
  timeSelect: false,
  emailSelect: false,
  message: false,
});

const handlePopup = (popName, val) => {
  popState.value[popName] = val;
};
const clickConfirm = () => {
  console.log("확인");
};

//팝업 - 시간 선택
const timeType = ref("start"); // start(시작시간) / end(종료시간)
const timeStartValue = ref();
const timeEndValue = ref();
const timeList = ref([
  { value: 0, name: "09:00", disabled: false },
  { value: 1, name: "10:00", disabled: false },
  { value: 2, name: "11:00", disabled: false },
  { value: 3, name: "12:00", disabled: false },
  { value: 4, name: "13:00", disabled: false },
  { value: 5, name: "14:00", disabled: false },
  { value: 6, name: "15:00", disabled: false },
  { value: 7, name: "16:00", disabled: false },
  { value: 8, name: "17:00", disabled: false },
  { value: 9, name: "18:00", disabled: false },
]);

const selectedTimeValue = computed({
  get() {
    return timeType.value === "start" ? timeStartValue.value : timeEndValue.value;
  },
  set(newValue) {
    if (timeType.value === "start") {
      timeStartValue.value = newValue;
      timeEndValue.value = undefined; // 시작 시간 변경 시 종료 시간 초기화
    } else if (timeType.value === "end") {
      timeEndValue.value = newValue;
    }
  },
});

//시간 필터링
const startTimeList = computed(() => {
  return timeList.value.filter((item) => item.value !== 9); // 18:00 제외
});

const endTimeList = computed(() => {
  return timeList.value
    .map((item) => {
      if (timeStartValue.value !== undefined && item.value <= timeStartValue.value) {
        return { ...item, disabled: true };
      }
      return { ...item, disabled: false };
    })
    .filter((item) => item.value !== 0); // 09:00 제외
});

const updateTimeSelection = (selectedValue) => {
  if (timeType.value === "start") {
    timeStartValue.value = selectedValue;
    timeEndValue.value = undefined;
  } else if (timeType.value === "end") {
    timeEndValue.value = selectedValue;
  }
};

//팝업 - 이메일
const emailSelected = ref(0);
const emailList = ref([
  { selected: true, value: 0, name: "직접입력" },
  { selected: false, value: 1, name: "naver.com" },
  { selected: false, value: 2, name: "daum.net" },
  { selected: false, value: 3, name: "hanmail.net" },
  { selected: false, value: 4, name: "nate.com" },
  { selected: false, value: 5, name: "gmail.com" },
  { selected: false, value: 6, name: "dreamwiz.com" },
  { selected: false, value: 7, name: "lycos.co.kr" },
  { selected: false, value: 8, name: "chol.com" },
]);

//팝업
const clickSelectListItem = (targetData) => {
  console.log(targetData);
};

//form 목업
const radioData = ref([
  { id: "radio01_01", text: "분실", value: "val1" },
  { id: "radio01_02", text: "도난", value: "val2" },
]);
const radioSelect = ref(radioData.value[0].value);

const radioData2 = ref([
  { id: "radio02_01", text: "휴대폰 + 유심", value: "val3" },
  { id: "radio02_02", text: "휴대폰", value: "val4" },
  { id: "radio02_03", text: "유심", value: "val5" },
]);
const radioSelect2 = ref(radioData2.value[0].value);

const radioData3 = ref([
  { id: "radio03_01", text: "예", value: "val6" },
  { id: "radio03_02", text: "아니요", value: "val7" },
]);
const radioSelect3 = ref(radioData3.value[0].value);

const radioData4 = ref([
  { id: "radio04_01", text: "발신/수신 모두 정지", value: "val8" },
  { id: "radio04_02", text: "발신만 정지", value: "val9" },
]);
const radioSelect4 = ref(radioData4.value[0].value);

// alert
const alertState = ref({
  back: false, // 뒤로가기
  count: false, // 휴대폰 분실등록 횟수 고지
});

//alert 화면 검수용 목업
const buttonName = [
  { txt: "뒤로가기", alertName: "back" },
  { txt: "휴대폰 분실등록 횟수 고지", alertName: "count" },
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

const nextPage = () => {
  // 화면 검수용 임시 라우터 처리
  const pageNumber = 1;
  if (front.isMobile()) {
    router.push("AL-MY-06-003-1");
  } else {
    emit("nextStep", pageNumber);
  }
};
</script>
