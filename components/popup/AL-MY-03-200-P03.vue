<template>
  <div class="auth-wrap">
    <div class="cont-head title-main">
      <h3 class="cont-title-main">
        선불 요금제를<br />
        <strong class="txt-primary">충전</strong>할 수 있어요
      </h3>
    </div>

    <CardGroup :card-object="cardObject1">
      <template #default="{ item }">
        <!-- 글씨 색상 class : txt-orange -->
        <p :class="item.class">
          {{ item.value }}
        </p>
      </template>
    </CardGroup>

    <div class="form-box">
      <div class="title-area">
        <strong class="title">충전 방식</strong>
      </div>
      <InputForm
        class="combobox-bottom"
        :option="{
          placeholder: '충전 방식을 선택해 주세요',
          readonly: true,
          action: 'dropdown',
        }"
        @Click="handlePopup('dateSelect', true)"
      />
    </div>
  </div>

  <!-- 기간 팝업 -->
  <Popup
    title="충전 방식을 선택해 주세요"
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
</template>

<script setup>
import CardGroup from "@/components/v2/common/CardGroup";
import InputForm from "@/components/v2/common/InputForm";
import Popup from "@/components/v2/common/Popup";
import PopupListItem from "@/components/v2/common/PopupListItem";

import { useRouter } from "vue-router";

const router = useRouter();
const emit = defineEmits(["nextStep"]);

const cardObject1 = ref([
  {
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "휴대폰 번호", value: "010-12**-34**" },
      { name: "요금제명", value: "선불 LTE 절약" },
      { name: "충전 신청일", value: "2025. 05. 20" },
    ],
  },
]);

//팝업 목업
const popState = ref({
  datepicker: false,
});

const handlePopup = (popName, val) => {
  popState.value[popName] = val;
};

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
</script>
<style></style>
