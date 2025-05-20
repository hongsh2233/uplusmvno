<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-03-002'" />
        <!-- // LNB -->

        <!-- contents -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>
          <!-- 내 정보 메뉴 -->
          <MyInfoMenu />
          <!-- // 내 정보 메뉴 -->

          <div class="content-item">
            <div class="content-inner">
              <div class="cont-head title-main">
                <h3 class="cont-title-main">
                  지난 1년의 <b class="txt-primary">청구내역</b>을<br />
                  확인할 수 있어요
                </h3>
              </div>
              <!-- form -->
              <div class="form-box">
                <div class="btn-flex nowrap">
                  <div v-for="(item, idx) in radioData" :key="item.id" class="radio_item ty05">
                    <input
                      type="radio"
                      :id="item.id"
                      name="radio01"
                      :value="item.value"
                      :checked="idx === 0"
                      @change="radioIdx = idx"
                    />
                    <label :for="item.id">{{ item.text }}</label>
                  </div>
                </div>
              </div>
              <div class="form-box" v-if="radioIdx === 3">
                <div class="form-flex">
                  <InputForm
                    class="combobox-bottom"
                    :option="{ placeholder: '시작월', readonly: true, action: 'dropdown' }"
                    @click="handleMonthSel('시작월')"
                  />
                  <InputForm
                    class="combobox-bottom"
                    :option="{ placeholder: '종료월', readonly: true, action: 'dropdown' }"
                    @click="handleMonthSel('종료월')"
                  />
                </div>
              </div>
              <div class="form-box" v-if="radioIdx === 3">
                <div class="btn-area">
                  <button type="button" class="btn-rounded btn-line">조회하기</button>
                </div>
              </div>
              <!-- form -->
            </div>
          </div>

          <div class="content-item">
            <div class="content-inner">
              <div class="btn-flex sort">
                <div v-for="(item, idx) in radioSort" :key="item.id" class="radio_item sort-radius">
                  <input
                    type="radio"
                    :id="item.id"
                    name="radio02"
                    :value="item.value"
                    :checked="idx === 0"
                    @change="radioIdx = idx"
                  />
                  <label :for="item.id">{{ item.text }}</label>
                </div>
              </div>

              <CardGroup :card-object="cardObject" class="card-bill">
                <template #name="{ item }">
                  <div class="name">
                    {{ item.name }}
                    <p class="description-sub">
                      {{ item.date }}
                    </p>
                  </div>
                </template>
                <template #default="{ item }">
                  <NuxtLink :to="'/sc/AL-MY-03-002-1'" class="txt-link">{{ item.value }}</NuxtLink>
                  <p class="description" :class="{ 'txt-orange': !item.billPaid }">
                    {{ item.billPaid ? "납부 완료" : "요금 미납" }}
                  </p>
                </template>
              </CardGroup>
              <ul class="text-list bull">
                <li>부가세 포함 금액입니다.</li>
              </ul>

              <!-- 24.11.25 v0.98 데이터 없음 -->
              <div class="nodata-area">
                <p class="txt-nodata">선택한 조회 기간에는 청구내역이 없어요</p>
              </div>
              <!--// 24.11.25 v0.98 데이터 없음 -->
            </div>
          </div>

          <!-- 이동 링크 목록 -->
          <ShortcutMenu :links="linksArray" />
          <!--// 이동 링크 목록 -->

          <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
            <template #content>
              <ul class="text-list bull">
                <!-- 24.11.01 v0.91 꼭 알아두세요 내용 변경 -->
                <li>원 단위 절사, 10원 미만 할인 등의 사유로 실제 청구금액과 다를 수 있습니다.</li>
                <li>제휴카드 할인 내역은 카드사 명세서에서 확인할 수 있습니다.</li>
                <li>요금 상세내역은 각 청구월을 선택하여 확인할 수 있습니다.</li>
              </ul>
            </template>
          </Accodian>
        </div>
        <!-- // content -->
      </div>

      <!-- 팝업 -->
      <!-- 시작월 팝업 -->
      <Popup
        class="pop-calendar"
        :title="popTitle"
        :isOpen="isOpen"
        @update:isOpen="isOpen = $event"
        @confirm="clickConfirm"
      >
        <MonthPicker @selectItem="callFunction" />
      </Popup>
      <!-- 시작월 팝업 -->
    </div>
  </div>
  <!-- // container -->
</template>

<script setup>
import PcLnb from "@/components/v2/common/PcLnb";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu";
import Accodian from "@/components/v2/common/Accodian";
import InputForm from "@/components/v2/common/InputForm";
import CardGroup from "@/components/v2/common/CardGroup";
import MonthPicker from "@/components/v2/common/MonthPicker";
import Popup from "@/components/v2/common/Popup";
import ShortcutMenu from "@/components/v2/common/ShortcutMenu";

const emit = defineEmits(["setLayout"]);
const layout = reactive({ header: "sub", footer: "", title: "지난 청구내역", floatMenu: "none" });

//청구내역 라디오 목업
const radioData = ref([
  { id: "radio01_01", value: "3개월", text: "3개월" },
  { id: "radio01_02", value: "6개월", text: "6개월" },
  { id: "radio01_03", value: "1년", text: "1년" },
  { id: "radio01_04", value: "직접 설정", text: "직접 설정" },
]);

const radioSort = ref([
  { id: "radio02_01", value: "최신순", text: "최신순" },
  { id: "radio02_02", value: "과거순", text: "과거순" },
  { id: "radio02_03", value: "금액순", text: "금액순" },
]);
const radioIdx = ref();

//청구금액 디테일 리스트 목업
const listMocup = ref([
  { title: "7월 청구금액", date: "2024.06.01 ~ 2024.06.30", price: "10,110원", billPaid: false },
  { title: "6월 청구금액", date: "2024.06.01 ~ 2024.06.30", price: "10,110원", billPaid: true },
  { title: "5월 청구금액", date: "2024.06.01 ~ 2024.06.30", price: "10,110원", billPaid: true },
]);

const cardObject = ref([
  {
    title: "",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "7월 청구금액", date: "2024.06.01 ~ 2024.06.30", value: "10,110원", billPaid: false },
      { name: "6월 청구금액", date: "2024.06.01 ~ 2024.06.30", value: "10,110원", billPaid: true },
      { name: "5월 청구금액", date: "2024.06.01 ~ 2024.06.30", value: "10,110원", billPaid: true },
    ],
  },
]);

//팝업
const isOpen = ref(false);
const popTitle = ref("");
const handleMonthSel = (text) => {
  popTitle.value = text;
  isOpen.value = true;
};

// 달 선택
const callFunction = (e) => {
  // console.dir(e.target);
};
// 확인 버튼
const clickConfirm = (e) => {
  // console.dir(e.target);
};

//24.12.18 하단 링크 변경
const linksArray = [
  { title: "청구요금 확인하기", link: "/sc/AL-MY-03-002-1" },
  { title: "납부 내역 확인하기", link: "/sc/AL-MY-04-001" },
];

onMounted(() => {
  emit("setLayout", layout);
});
</script>
