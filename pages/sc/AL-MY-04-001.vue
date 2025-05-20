<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-04-001'" />
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
                  지난 1년의 <b class="txt-primary">납부내역</b>을<br />
                  확인할 수 있어요
                </h3>
              </div>
              <Accodian title="납부정보" styleClass="acco-gray">
                <template #content>
                  <CardGroup :card-object="cardObject" />
                </template>
              </Accodian>
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
              <CardGroup :card-object="cardObject2" class="card-bill">
                <template #name="{ item }">
                  <div class="name">
                    {{ item.name }}
                    <p class="description-sub">
                      <span class="desc-label">납부일</span>
                      {{ item.date }}
                    </p>
                  </div>
                </template>
                <template #default="{ item }">
                  {{ item.price }}
                  <p class="description-sub">
                    <span class="desc-label">입금 확인일</span>
                    {{ item.onConfirmDate }}
                  </p>
                </template>
              </CardGroup>

              <!-- 24.11.25 v0.98 데이터 없음 -->
              <div class="nodata-area">
                <p class="txt-nodata">선택한 조회 기간에는 납부내역이 없어요</p>
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
                <li>서비스 혜택에 따라 지급된 추가 데이터는 합산되어 보여집니다.</li>
                <li>
                  프로모션(eSIM 다운로드 비용 2,750원 포함) 등 요금할인 내역은 개통 익월 15일
                  이후부터 홈페이지/고객센터앱에서 확인 하실 수 있습니다.(단, 제휴카드 할인은 카드사
                  명세서에서 하실 수 있습니다.)
                </li>
                <li>남은 사용량 표시는 시스템 전산반영으로 인해 지연될 수 있습니다.</li>
                <li>
                  요금제를 변경하신 경우, 실시간 잔여량은 요금제를 변경한 다음 날 부터 정상적으로
                  표시됩니다.
                </li>
                <li>
                  월 중간에 가입 혹은 요금제 변경 시에는 요금 및 기본제공량이 날짜 계산되며, 초과
                  이용분에 대한 추가요금이 발생할 수 있습니다.
                </li>
                <li>
                  사용하신 서비스 종류에 따라 실시간 확인이 되지 않는 요금이 있으므로 청구요금과
                  차이가 있을 수 있습니다.
                </li>
                <li>
                  (국제전화, 수신자부담, 해외로밍, 정보이용료 등은 실시간 조회불가로 제외되었음을
                  알려드립니다.)
                </li>
                <li>
                  제휴카드 할인내역은 표기되지 않으며, 카드사 이용요금 명세서에서 확인하시기
                  바랍니다. 제휴카드 신청 고객은 해당 카드로 납부 방법을 변경하셔야 할인이
                  적용됩니다.
                  <p>
                    <NuxtLink :to="'sc/AL-MY-04-002'" class="txt-link orange"
                      >납부 방법 변경하기</NuxtLink
                    >
                  </p>
                </li>
                <li>
                  타통신사 및 유선전화 통화도 기본제공으로 사용 가능합니다. (유선전화는
                  지역번호(02,031)와 인터넷전화(070)를 말합니다.)
                </li>
                <li>
                  영상통화는 동영상/부가 기본제공량이 1.66배 빨리 줄어듭니다. (부가전화란
                  전국대표번호(15xx,16xx),평생개인번호(0505), 주파수 공용통신(013) 등을 말합니다.)
                </li>
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
        :title="popTitle + ' 선택'"
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
import CardGroup from "@/components/v2/common/CardGroup";
import MonthPicker from "@/components/v2/common/MonthPicker";
import InputForm from "@/components/v2/common/InputForm";
import Popup from "@/components/v2/common/Popup";
import ShortcutMenu from "@/components/v2/common/ShortcutMenu";

const emit = defineEmits(["setLayout"]);
const layout = reactive({ header: "sub", footer: "", title: "납부내역 조회", floatMenu: "none" });

//청구내역 라디오 목업
const radioData = ref([
  { id: "radio01_01", value: "3개월", text: "3개월" },
  { id: "radio01_02", value: "6개월", text: "6개월" },
  { id: "radio01_03", value: "1년", text: "1년" },
  { id: "radio01_04", value: "직접 설정", text: "직접 설정" },
]);
const radioIdx = ref();

const radioSort = ref([
  { id: "radio02_01", value: "최신순", text: "최신순" },
  { id: "radio02_02", value: "과거순", text: "과거순" },
  { id: "radio02_03", value: "금액순", text: "금액순" },
]);

// 납부 정보 목업
const cardObject = ref([
  {
    title: "",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "납부 방법", value: "신한카드/신용카드" },
      { name: "예금주/결제일", value: "예금주(김*닷)/1차(9일)" },
      { name: "청구서 받는 방법", value: "E-MAIL(상세) 청구서" },
    ],
  },
]);

// 납부내역 목업
const cardObject2 = ref([
  {
    title: "",
    sub: "",
    chip: "",
    url: "",
    list: [
      {
        name: "자동이체(카드)",
        price: "10,110원",
        date: "2024.07.09",
        onConfirmDate: "2024.07.11",
      },
      {
        name: "자동이체(카드)",
        price: "10,110원",
        date: "2024.07.09",
        onConfirmDate: "2024.07.11",
      },
      {
        name: "자동이체(카드)",
        price: "10,110원",
        date: "2024.07.09",
        onConfirmDate: "2024.07.11",
      },
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

//하단 링크
const linksArray = [
  { title: "납부 방법 변경하기", link: "/" },
  { title: "결제일 변경하기", link: "/" },
];

onMounted(() => {
  emit("setLayout", layout);
});
</script>
