<template>
  <div class="container AL-MY-05-001">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-05-001'" />
        <!-- // LNB -->

        <!-- contents -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>

          <!-- 내 정보 메뉴 -->
          <MyInfoMenu />
          <!-- // 내 정보 메뉴 -->

          <!-- T09C03 : 상단 텍스트 & 정보 리스트  -->
          <div class="content-item">
            <div class="content-inner">
              <div class="cont-head title-main">
                <h3 class="cont-title-main">
                  <b class="txt-primary">11</b>개 부가서비스를 <br />
                  이용 중이에요
                </h3>
              </div>

              <div class="inner-section">
                <CardGroup :card-object="cardObject_1" @onClickChip="onClickHandler">
                  <template #default="{ item }">
                    <div class="fl-ac">
                      <p v-html="item?.value"></p>
                    </div>
                  </template>
                </CardGroup>
              </div>
            </div>
          </div>
          <!-- //T09C03 : 상단 텍스트 & 정보 리스트  -->

          <!-- T12C10C03 : 아코디언 정보 리스트 - 유료  -->
          <div class="content-item">
            <div class="content-inner">
              <Accodian :isExpanded="true">
                <template #title>
                  <div class="cont-head">
                    <h3 class="cont-title">유료 부가서비스</h3>
                  </div>
                </template>
                <template #content>
                  <CardGroup :card-object="cardObject_2" class="cotent-item-hr-line" @onClickChip="onClickHandler" />
                  <div class="btn_wrap center more-btn-1">
                    <button type="button" class="btn-circle more">더 볼래요</button>
                  </div>
                </template>
              </Accodian>
            </div>
          </div>
          <!-- //T12C10C03 : 아코디언 정보 리스트 - 유료  -->

          <!-- T12C10C03 : 아코디언 정보 리스트 - 무료 -->
          <div class="content-item">
            <div class="content-inner">
              <Accodian :isExpanded="true">
                <template #title>
                  <div class="cont-head">
                    <h3 class="cont-title">무료 부가서비스</h3>
                  </div>
                </template>
                <template #content>
                  <CardGroup :card-object="cardObject_3" class="cotent-item-hr-line" @onClickChip="onClickHandler" />
                  <div class="btn_wrap center more-btn-1">
                    <button type="button" class="btn-circle more">더 볼래요</button>
                  </div>
                </template>
              </Accodian>
            </div>
          </div>
          <!-- //T12C10C03 : 아코디언 정보 리스트 - 무료 -->

          <!-- T05C07 : 이동 링크 목록 -->
          <ShortcutMenu :links="linksArray" />
          <!-- //T05C07 : 이동 링크 목록 -->

          <!-- T07C10 꼭 알아두세요 -->
          <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
            <template #content>
              <ul class="text-list bull">
                <li>부가서비스 상품에 따라 가입 당일 해지가 불가 할 수 있습니다.</li>
                <li>필수 제공 부가서비스는 해지하실 수 없습니다.</li>
                <li>
                  부가서비스를 월 중간에 신청하거나 해지할 경우 해당 월의 월정액 또는 무료 제공 혜택은 각각 사용
                  일수만큼 계산하여 적용됩니다.
                </li>
              </ul>
            </template>
          </Accodian>
          <!-- //T07C10 꼭 알아두세요 -->
        </div>
        <!-- // contents -->
        <Popup
          title="부가서비스 해지"
          popType="full no-title"
          :isOpen="popupQuery === '1' && popupOpen"
          :isPopFooter="false"
          @update:isOpen="popupOpen = false"
          class="pcpopup type-float-btn-1"
        >
          <ALMY05400P01 />
        </Popup>

        <Popup
          title="해지 완료"
          popType="full no-title"
          :isOpen="popupQuery === '2' && popupOpen"
          :isPopFooter="false"
          @update:isOpen="popupOpen = false"
          class="pcpopup type-float-btn-1"
        >
          <ALMY05400P02 />
        </Popup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PcLnb from "@/components/v2/common/PcLnb.vue";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu.vue";
import CardGroup from "@/components/v2/common/CardGroupRoaming.vue";
import ShortcutMenu from "@/components/v2/common/ShortcutMenu.vue";
import Accodian from "@/components/v2/common/Accodian.vue";
import Popup from "@/components/v2/common/Popup.vue";
import ALMY05400P01 from "@/components/popup/AL-MY-05-400-P01.vue";
import ALMY05400P02 from "@/components/popup/AL-MY-05-400-P02.vue";

// S: 레이아웃 설정 (1-1)
const layout = ref({
  header: "sub",
  footer: "",
  floatMenu: "none",
  title: "부가서비스 조회",
  wrapClass: "selfcare roaming ver-3",
});

const emit = defineEmits(["setLayout"]);
// E: 레이아웃 설정 (1-1)

const route = useRoute();
const popupQuery = ref(route.query.popup);
const popupOpen = ref(true);

// S: JS-T09 - 상단 텍스트 & 정보 리스트
const cardObject_1 = ref([
  {
    title: "",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "유료 부가서비스", value: "1개" },
      { name: "무료 부가서비스", value: "10개" },
    ],
  },
]);
// E: JS-T09 - 상단 텍스트 & 정보 리스트

// S: JS-T12 : 아코디언 정보 리스트
const bottomButtonClickHandler = ({ id, name }: { id: number; name: string }) => {
  console.log(id);
  console.log(name);
};
const cardObject_2 = ref([
  {
    title: `<a href="/" class="link-txt-2">로밍패스 8GB</a>`,
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "신청일", value: "2025. 04. 28" },
      { name: "금액", value: "44,000원", description: "(부가세 포함)", class: { list: "has-description" } },
    ],
    bottomButtons: [
      { id: 1, name: "변경하기", type: "outline-gray", bottomButtonClickHandler },
      { id: 2, name: "해지하기", type: "outline-red", bottomButtonClickHandler },
    ],
  },
  {
    title: `<a href="/" class="link-txt-2">제로 프리미엄(일반형)</a>`,
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "신청일", value: "2025. 04. 28" },
      { name: "금액", value: "44,000원", description: "(부가세 포함)", class: { list: "has-description" } },
    ],
    bottomButtons: [{ id: 2, name: "해지하기", type: "outline-red", bottomButtonClickHandler }],
  },
  {
    title: `<a href="/" class="link-txt-2">로밍패스 8GB</a>`,
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "신청일", value: "2025. 04. 28" },
      { name: "금액", value: "44,000원", description: "(부가세 포함)", class: { list: "has-description" } },
    ],
    bottomButtons: [
      { id: 1, name: "변경하기", type: "outline-gray", bottomButtonClickHandler },
      { id: 2, name: "해지하기", type: "outline-red", bottomButtonClickHandler },
    ],
  },
]);

const cardObject_3 = ref([
  {
    title: `<a href="/" class="link-txt-2">인사말 통화연결음</a>`,
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "신청일", value: "2025. 04. 28" },
      { name: "금액", value: "무료" },
    ],
    bottomButtons: [{ id: 2, name: "해지하기", type: "outline-red", bottomButtonClickHandler }],
  },
  {
    title: `<a href="/" class="link-txt-2">060 발신차단</a>`,
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "신청일", value: "2025. 04. 28" },
      { name: "금액", value: "무료" },
    ],
    bottomButtons: [{ id: 2, name: "해지하기", type: "outline-red", bottomButtonClickHandler }],
  },
  {
    title: `<a href="/" class="link-txt-2">데이터로밍 차단</a>`,
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "신청일", value: "2025. 04. 28" },
      { name: "금액", value: "무료" },
    ],
    bottomButtons: [{ id: 2, name: "해지하기", type: "outline-red", bottomButtonClickHandler }],
  },
  {
    title: `<a href="/" class="link-txt-2">060 발신차단</a>`,
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "신청일", value: "2025. 04. 28" },
      { name: "금액", value: "무료" },
    ],
  },
  {
    title: `<a href="/" class="link-txt-2">060 발신차단</a>`,
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "신청일", value: "2025. 04. 28" },
      { name: "금액", value: "무료" },
    ],
  },
]);
// E: JS-T12 : 아코디언 정보 리스트

// S: JS-P004 : 청구/납부 변경 팝업
const isOpen1 = ref(false);
const isPopCustom = ref(false);

type DataSelectListItem = {
  value: number;
  name: string;
  url?: string;
  selected?: boolean;
};

const dataSelectList = ref<DataSelectListItem[]>([
  { value: 0, name: "납부 방법 변경", url: "https://www.naver.com" },
  { value: 1, name: "결제일 변경", url: "https://www.google.com" },
  { value: 2, name: "청구서 받는 방법 변경", url: "https://www.naver.com" },
]);

const onClickHandler = (val?: string | number) => {
  console.log(val);
  if (val === "변경") isOpen1.value = true;
};
// E: JS-P004 : 청구/납부 변경 팝업

// const current = ref("current");

// JS-T05 이동 링크 목록
const linksArray = [
  { title: "부가서비스 신청/해지 내역 바로가기", link: "/" },
  { title: "전체 부가서비스 보기", link: "/" },
];

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/sc/page-al-my-05-001.scss" as *;
</style>
