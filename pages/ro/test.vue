<template>
  <div class="AL-MS-04-005">
    <div class="container deps4">
      <div class="content" id="content">
        <h2 class="title_nav">{{ layout.title }}</h2>
        <!-- 첫 번째 카드 그룹: 팝업 연동 없음 -->
        <CardGroup :card-object="cardObject1" :dataSelectList="dataSelectList1" />

        <!-- 두 번째 카드 그룹: 상세 설정 팝업 연동 -->
        <CardGroup :card-object="cardObject2" :dataSelectList="dataSelectList2" @onClickChip="handleClickChip" />
      </div>
    </div>
  </div>

  <!-- 상세 설정 팝업 -->
  <Popup title="상세 설정 팝업" :is-open="isPopupOpen" @update:is-open="isPopupOpen = $event" confirmText="확인">
    <PopupListItem
      v-model="selectState.select1"
      :ListItemData="dataSelectList2"
      :option="{ multiple: false }"
      @select="console.log(selectState.select1)"
    />
  </Popup>
  <!-- // 상세 설정 팝업 -->
</template>

<script setup>
import CardGroup from "@/components/v2/common/CardGroupRoaming.vue";
import Popup from "@/components/v2/common/Popup";
import PopupListItem from "@/components/v2/common/PopupListItem";
import { ref } from "vue";

const isPopupOpen = ref(false);

const layout = ref({
  header: "sub",
  footer: typeof front !== "undefined" && front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "해외 로밍 신청",
  wrapClass: "selfcare roaming",
});

const cardObject1 = ref([
  {
    title: "요금 정보",
    sub: "",
    chip: "URL",
    url: "", // url이 비어있으므로 CardGroup 내 자체 팝업이 동작
    list: [
      { name: "국제발신", value: "192원" },
      { name: "ㄴ사용일수/건수/량", value: "2일/1건" },
      { name: "SMS", value: "900원" },
      { name: "ㄴ사용일수/건수/량", value: "6건" },
    ],
  },
]);

const cardObject2 = ref([
  {
    title: "요금 정보",
    sub: "",
    chip: "상세 설정",
    url: "", // url이 비어있으므로 CardGroup 내 자체 팝업 대신 상세 설정 팝업이 동작
    list: [
      { name: "국제발신", value: "192원" },
      { name: "ㄴ사용일수/건수/량", value: "2일/1건" },
      { name: "SMS", value: "900원" },
      { name: "ㄴ사용일수/건수/량", value: "6건" },
    ],
  },
]);

const dataSelectList1 = ref([
  { value: 0, name: "네이버", url: "www.naver.com" },
  { value: 1, name: "음성" },
  { value: 2, name: "SNS" },
  { value: 3, name: "데이터" },
  { value: 4, name: "임대로밍" },
]);

const dataSelectList2 = ref([
  { value: 0, name: "전체" },
  { value: 1, name: "음성" },
  { value: 2, name: "SNS" },
  { value: 3, name: "데이터" },
  { value: 4, name: "임대로밍" },
]);

const selectState = ref({
  select1: "",
});

const handleClickChip = (val) => {
  if (val === "상세 설정") {
    isPopupOpen.value = true;
  }
};
</script>
