<template>
  <div class="AL-MY-02-006">
    <div class="container">
      <div class="content" id="content">
        <h2 class="title_nav">{{ layout.title }}</h2>

        <div class="crp_wrap">
          <!-- LNB -->
          <PcLnb :currentLink="'/sc/AL-MY-02-004'" />
          <!-- // LNB -->

          <div class="crp_r">
            <h2 class="pc-title">{{ layout.title }}</h2>
            <!-- 내 정보 메뉴 -->
            <MyInfoMenu />
            <!-- // 내 정보 메뉴 -->

            <!-- 로밍 이용 내역 -->
            <div class="content-item">
              <div class="content-inner">
                <div class="cont-head title-main">
                  <h3 class="cont-title-main">
                    최근 3개월간의 <b class="txt-primary">로밍 이용 내역</b>을<br />
                    알려 드려요
                  </h3>
                </div>

                <div class="form_group">
                  <div class="form_item">
                    <div class="form-flex">
                      <InputForm
                        class="combobox-bottom"
                        :option="{ placeholder: '시작일', readonly: true, action: 'datepicker' }"
                        @click="handlePopup('datepicker', true)"
                      />
                      <InputForm
                        class="combobox-bottom"
                        :option="{ placeholder: '종료일', readonly: true, action: 'datepicker' }"
                        @click="handlePopup('datepicker', true)"
                      />
                    </div>
                  </div>
                </div>
                <div class="text_info">한국 시간 기준으로 최근 3개월 동안의 해외 로밍 이용 내역을 확인할 수 있어요</div>

                <div class="btn-area btn-space">
                  <button type="button" class="btn-rounded btn-line" :disabled="false" @click="nextPage">
                    조회하기
                  </button>
                </div>
              </div>
            </div>
            <!-- // 로밍 이용 내역 -->

            <!-- 내역이 없음 -->
            <div class="content-item">
              <div class="content-inner">
                <div class="nodata-area">
                  <!-- 2025-05-21 1747789555 (정C) 문구수정 -->
                  <p class="txt-nodata">선택한 조회 기간에는 이용 내역이 없어요</p>
                  <!-- //2025-05-21 1747789555 (정C) 문구수정 -->
                </div>
              </div>
            </div>
            <!-- // 내역이 없음 -->

            <!-- 고객정보 -->
            <div class="content-item">
              <div class="content-inner">
                <CardGroup :card-object="cardObject">
                  <template #name="{ item }">
                    {{ item.name }}
                    <button v-if="item.tooltip" type="button" class="btn-tooltip" @click="tooltipOpen = true"></button>
                  </template>
                </CardGroup>
              </div>
            </div>
            <!-- // 고객정보 -->

            <div class="content-item">
              <div class="content-inner">
                <Tab :titles="['데이터 이용 내역', '사용 요금 조회']">
                  <!-- 데이터 이용 내역 -->
                  <template #content1>
                    <ul>
                      <li
                        v-for="(roamingPass, index) in roamingPasses"
                        :key="roamingPass.id || index"
                        class="consect-cardlist"
                      >
                        <CardGroup :card-object="roamingPass.mainCard" />

                        <p class="consent-tit">사용량 정보</p>
                        <div class="consent-container consent-inner">
                          <CardGroup :card-object="roamingPass.subCard">
                            <template #default="{ item }">
                              <div class="fl-ac">
                                <p v-html="item.value" />
                              </div>
                            </template>
                          </CardGroup>
                        </div>
                      </li>
                    </ul>

                    <div class="btn-area cnt">
                      <button type="button" class="btn-circle more">더 볼래요</button>

                      <button type="button" class="btn-circle fold">접을래요</button>
                    </div>
                  </template>
                  <!-- // 데이터 이용 내역 -->

                  <!-- 사용 요금 조회 -->
                  <template #content2>
                    <div class="cont-head title-main">
                      <h3 class="cont-title-main">
                        선택하신 기간 동안 사용하신 <br />
                        로밍 요금은
                        <b v-if="charge" class="txt-primary">51,660원</b>
                        <b v-else class="txt-primary">발행 전</b>
                        이예요
                      </h3>
                    </div>

                    <!-- 청구 정보-->
                    <CardGroup :card-object="cardObject2" @onClickChip="handleClickChip" />

                    <div class="btn-area" v-if="front.isMobile()">
                      <button type="button" class="btn-rounded">
                        <NuxtLink to="/sc/AL-MY-02-006-1">영수증 이메일로 발송하기</NuxtLink>
                      </button>
                    </div>

                    <div class="btn-area" v-else>
                      <button type="button" class="btn-rounded" @click="handlePopup('pop1', true)">
                        영수증 이메일로 발송하기
                      </button>
                    </div>
                  </template>
                  <!-- // 사용 요금 조회 -->
                </Tab>
              </div>
            </div>

            <!-- 꼭 알아두세요 -->
            <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
              <template #content>
                <ul class="text-list bull">
                  <li>방문한 국가가 확인되지 않으면 고객센터(1234-1234)로 연락해 주세요</li>
                  <li>음성 통화 요금은 실제 청구 금액과 다를 수 있으니 참고해 주세요</li>
                  <li>
                    해외 통신사업자에게 받은 사용 자료를 기준으로 요금을 계산하기 때문에 해외로밍 이용일로부터 1~2개월이
                    지난 후에 청구서를 받을 수 있어요.<br />
                    이용 기간에 따라 두 달에 걸쳐 청구될 수 있으니 양해해 주세요
                  </li>
                </ul>
              </template>
            </Accodian>
            <!-- //꼭 알아두세요  -->
          </div>
        </div>
      </div>
      <!-- // content -->
    </div>
    <!-- // container -->

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

    <!-- 상세 설정 팝업 -->
    <Popup title="상세 설정" :is-open="isPopupOpen" @update:is-open="isPopupOpen = $event" confirmText="확인">
      <PopupListItem
        v-model="selectState.select1"
        :ListItemData="dataSelectList"
        :option="{ multiple: false }"
        @select="console.log(selectState.select1)"
      />
    </Popup>
    <!-- // 상세 설정 팝업 -->

    <!-- 영수증 발송 -->
    <Popup
      title="영수증 이메일 발송"
      :isOpen="popState.pop1"
      @update:isOpen="(val) => handlePopup('pop1', val)"
      :isPopFooter="false"
      @confirm="clickConfirm"
      class="pcpopup"
    >
      <ALMY020061 />
    </Popup>
    <!-- // 영수증 발송 -->
  </div>
</template>

<script setup>
import ALMY020061 from "@/pages/sc/popup/ALMY020061";
import PcLnb from "@/components/v2/common/PcLnb";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu";
import Datepicker from "@/components/v2/common/Datepicker";
import Popup from "@/components/v2/common/Popup";
import PopupListItem from "@/components/v2/common/PopupListItem";
import CardGroup from "@/components/v2/common/CardGroupRoaming.vue";
import InputForm from "@/components/v2/common/InputForm";
import Tab from "@/components/v2/common/Tab";
import Accodian from "@/components/v2/common/Accodian";

import { ref } from "vue";

const emit = defineEmits(["setLayout"]);
const layout = reactive({
  header: "sub",
  footer: "",
  title: "로밍 이용 내역",
  floatMenu: "none",
  wrapClass: "selfcare roaming",
});

//팝업 목업
const popState = ref({
  pop1: false,
  datepicker: false,
});

const handlePopup = (popName, val) => {
  popState.value[popName] = val;
};
const clickConfirm = () => {
  console.log("확인");
  handlePopup("pop1", false);
};

// 납부 방법 변경 목업 데이터
const cardObject = ref([
  {
    title: "고객 정보",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "고객명", value: "홍*동" },
      { name: "방문 국가", value: "베트남, 미국" },
      { name: "이용 기간", value: "2023.11.29 ~ 2024.11.28" },
      { name: "휴대폰 번호", value: "010-12**-34**" },
    ],
  },
]);

const roamingPasses = ref([
  {
    id: "pass1", // 각 항목을 구분할 고유 ID (key로 사용)
    mainCard: [
      {
        title: "로밍패스 7GB",
        sub: "",
        chip: "",
        url: "",
        list: [
          { name: "방문 국가", value: "미국" },
          { name: "이용 기간", value: "2025.04.12~2025.04.20" },
        ],
      },
    ],
    subCard: [
      {
        list: [
          { name: "기본 사용량(MB)", value: "3,854MB" },
          { name: "현재까지 사용량(MB)", value: "1563.1MB" },
          { name: "마지막 사용일", value: "2025.04.18" },
        ],
      },
    ],
  },
  {
    id: "pass2",
    mainCard: [
      {
        title: "로밍패스 3GB",
        sub: "",
        chip: "",
        url: "",
        list: [
          { name: "방문 국가", value: "일본" },
          { name: "이용 기간", value: "2025.05.01~2025.05.07" },
        ],
      },
    ],
    subCard: [
      {
        list: [
          { name: "기본 사용량(MB)", value: "3,072MB" },
          { name: "현재까지 사용량(MB)", value: "512.5MB" },
          { name: "마지막 사용일", value: "2025.05.05" },
        ],
      },
    ],
  },
  {
    id: "pass3",
    mainCard: [
      {
        title: "로밍패스 10GB (장기)",
        sub: "",
        chip: "",
        url: "",
        list: [
          { name: "방문 국가", value: "유럽 5개국" },
          { name: "이용 기간", value: "2025.06.01~2025.06.30" },
        ],
      },
    ],
    subCard: [
      {
        list: [
          { name: "기본 사용량(MB)", value: "10,240MB" },
          { name: "현재까지 사용량(MB)", value: "0MB" },
          { name: "마지막 사용일", value: "미사용" },
        ],
      },
    ],
  },
  // 필요한 만큼 로밍 패스 정보를 추가합니다.
]);

// 사용 요금 조회
const charge = ref(true);
// 사용 요금 조회 목업 데이터
const cardObject2 = ref([
  {
    title: "요금 정보",
    sub: "",
    chip: "상세 설정",
    url: "",
    list: [
      { name: "국제발신", value: "192원" },
      { name: "사용일수/건수/량", value: "2일/1건", class: { list: "sub-value" } },
      { name: "SMS", value: "900원" },
      { name: "사용일수/건수/량", value: "6건", class: { list: "sub-value" } },
      { name: "로밍패스 13GB", value: "2,200원" },
      { name: "사용일수/건수/량", value: "8건", class: { list: "sub-value" } },
      { name: "하루 데이터 로밍 플러스 (기간형)", value: "2,200원" },
      { name: "사용일수/건수/량", value: "4일", class: { list: "sub-value" } },
      { name: "부가세", value: "2,745원" },
      { name: "총 이용금액", value: "25,830원", class: { list: "total-value" } },
    ],
  },
]);

/*셀렉트 상태 관리 */
const selectState = ref({
  select1: "",
});

// 가입회선 정보 목업
const dataSelectList = ref([
  { value: 0, name: "전체" },
  { value: 1, name: "음성" },
  { value: 2, name: "SNS" },
  { value: 3, name: "데이터" },
  { value: 4, name: "임대로밍" },
]);

const isPopupOpen = ref(false);

const handleClickChip = (val) => {
  if (val === "상세 설정") {
    isPopupOpen.value = true;
  }
};

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss">
@use "@/assets/scss/pages/sc/page-al-my-02-006.scss" as *;
</style>
