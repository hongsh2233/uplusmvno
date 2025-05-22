<template>
  <div class="first-content-item alms0400502">
    <div class="content-item">
      <div class="content-inner">
        <div class="cont-head">
          <h3 class="cont-title-main">
            해외 로밍 요금제를 <br />
            <strong class="txt-primary">신청</strong>하시겠어요?
          </h3>
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">방문 국가</strong>
          </div>

          <InputFormAutoComplete
            class="combobox-bottom search"
            :option="{ placeholder: '방문 국가를 선택해 주세요', readonly: false, search: true }"
          />
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">요금제 적용 기준 시간</strong>
          </div>

          <div class="btn-flex">
            <div v-for="item in radioData" :key="item.id" class="radio_item ty05">
              <input type="radio" name="radio01" :id="item.id" :value="item.value" v-model="radioSelected" />
              <label :for="item.id">{{ item.text }}</label>
            </div>
          </div>
          <div class="text_info">썸머타임 적용되지 않음</div>
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">이용 시작 시간</strong>
          </div>
          <InputForm
            class="combobox-bottom"
            :option="{ placeholder: '시작일을 선택해 주세요', readonly: true, action: 'datepicker' }"
            @click="handlePopup('datepicker', true)"
          />
          <div class="form_group picker-time">
            <div class="form_item">
              <div class="form-flex">
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
              </div>
            </div>
          </div>
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">이용 기간</strong>
          </div>
          <InputForm
            class="combobox-bottom"
            :option="{
              placeholder: '기간을 선택해 주세요',
              readonly: true,
              action: 'dropdown',
            }"
            @Click="handlePopup('dateSelect', true)"
          />
        </div>
      </div>
    </div>

    <Accodian title="꼭 알아두세요!" styleClass="ro acco-notice" :isExpanded="true">
      <template #content>
        <ul class="text-list bull">
          <li>데이터 로밍 요금제 가입 시, 데이터로밍차단 서비스가 자동으로 해지됩니다.</li>
        </ul>
      </template>
    </Accodian>

    <BottomFixMenu :btnText="'정보 입력 완료'" :disabled="false" />

    <!-- popup datepicker -->
    <Popup
      :title="'시작일을 선택해 주세요 '"
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

    <!-- 기간 팝업 -->
    <Popup
      title="기간을 선택해 주세요"
      :isOpen="popState.dateSelect"
      @update:isOpen="popState.dateSelect = $event"
      @confirm="clickConfirm"
    >
      <PopupListItem
        v-model="dateSelected"
        :ListItemData="dateList"
        :option="{ name: 'date-select' }"
        @select="clickSelectListItem(dateSelected)"
      />
    </Popup>
    <!-- // 기간 팝업 -->
  </div>
</template>

<script setup>
import CardGroup from "@/components/v2/common/CardGroup";
import Accodian from "@/components/v2/common/Accodian";
import InputForm from "@/components/v2/common/InputForm";
import InputFormAutoComplete from "@/components/v2/common/InputFormAutoComplete";
import Datepicker from "@/components/v2/common/Datepicker";
import Popup from "@/components/v2/common/Popup";
import PopupListItem from "@/components/v2/common/PopupListItem";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";

import { ref } from "vue";

const cardObject1 = ref([
  {
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "신청 회선", value: "010-78**-88**" },
      { name: "요금제명", value: "로밍패스 3GB" },
      { name: "이용 기간", value: "최대 30일" },
      { name: "금액", value: "12,900원", description: "(부가세포함)" },
    ],
  },
]);

//라디오 목업
const radioData = ref([
  { id: "radio01_01", value: "한국시간", checked: true, text: "한국시간" },
  { id: "radio01_02", value: "현지 수도 시간", checked: false, text: "현지 수도 시간" },
]);
const radioSelected = ref(radioData.value[0].value);

//팝업 목업
const popState = ref({
  datepicker: false,
  timeSelect: false,
  emailSelect: false,
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
const dateSelected = ref(0);
const dateList = ref([
  { selected: true, value: 0, name: "1일" },
  { selected: false, value: 1, name: "2일" },
  { selected: false, value: 2, name: "3일" },
  { selected: false, value: 3, name: "4일" },
  { selected: false, value: 4, name: "5일" },
  { selected: false, value: 5, name: "6일" },
  { selected: false, value: 6, name: "7일" },
  { selected: false, value: 7, name: "8일" },
  { selected: false, value: 8, name: "9일" },
  { selected: false, value: 9, name: "10일" },
]);

//팝업
const clickSelectListItem = (targetData) => {
  console.log(targetData);
};
</script>

<style scoped>
/* .combobox-container {
  position: relative;
}

.combobox-input {
  width: 100%;
  height: 5.2rem;
  color: var(--txt-black);
  font-size: 1.8rem;
  border: none;
  border-radius: 0;
  border-bottom: var(--border);
  text-align: left;
  padding: 1.4rem 0 1.4rem 0;
}

.combobox-input:focus {
  border-bottom: 0.2rem solid #fc6969;
  outline: none;
}

.combobox-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  list-style-type: none;
  margin: 0;
  padding: 1.6rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.combobox-item {
  margin: 0 0 1.6rem;
  padding: 0 0 1.6rem;
  font-size: 15px;
  cursor: pointer;
  border-bottom: 1px solid #dce0e5;
}

.combobox-item:last-child {
  border-bottom: none;
  margin: 0;
  padding: 0;
}

.no-results {
  padding: 10px 12px;
  font-size: 15px;
  color: #777;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 4px 4px;
  background-color: #fff;
  margin-top: -1px;
} */
</style>
