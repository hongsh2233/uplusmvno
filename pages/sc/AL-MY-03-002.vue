<template>
  <div class="container">
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
                  이번달 청구요금은 <br />
                  <b v-if="charge" class="txt-primary">10,100원</b>
                  <b v-else class="txt-primary">발행 전</b>
                  이예요
                </h3>
                <span class="title-exp">2024.06.01 ~ 2024.06.30</span>
                <div v-if="charge" class="btn-area">
                  <!-- 24.12.12 버튼 클래스 변경-->
                  <NuxtLink :to="'/sc/AL-MY-03-002-1'" class="btn-rounded chip btn-fix">청구서 상세</NuxtLink>
                </div>
                <div class="gray-box">
                  <p class="info-text">미납요금이 있어요! <b class="info-price">10,456원</b></p>
                </div>
              </div>
              <!-- 청구 정보-->
              <CardGroup :card-object="cardObject" :dataSelectList="dataSelectList" />
            </div>
          </div>

          <!-- 이동 링크 목록 -->
          <ShortcutMenu :links="linksArray" />
          <!--// 이동 링크 목록 -->

          <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
            <template #content>
              <ul class="text-list bull">
                <li>원단위 절사 등의 사유로 실 청구 금액과 다를 수 있습니다.</li>
                <li>
                  청구서 작성일 이후에 내신 요금은 당월 청구서에 적용되지 않았으며, 현재 미납상태는 청구요금 및
                  납부내역조회에서 확인 가능합니다.
                </li>
                <li>제휴카드 할인 내역은 표기되지 않으며, 카드사 이용요금 명세서에서 확인하시기 바랍니다.</li>
                <li>
                  제휴카드 신청 고객은 해당 카드로 납부 방법을 변경하셔야 할인이 적용됩니다.
                  <p>
                    <NuxtLink :to="'sc/AL-MY-04-002'" class="txt-link orange">납부 방법 변경하기</NuxtLink>
                  </p>
                </li>
                <!-- <li>앱마켓에서 ‘설리번’ 앱 설치 후, 설리번 앱을 실행하여 카메라로 청구서 화면을 촬영하시면 음성으로 안내 받을 수 있습니다</li> -->
              </ul>
            </template>
          </Accodian>
        </div>
        <!-- // contents -->
      </div>
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script setup>
import PcLnb from "@/components/v2/common/PcLnb";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu";
import ShortcutMenu from "@/components/v2/common/ShortcutMenu";
import CardGroup from "@/components/v2/common/CardGroup";
import Accodian from "@/components/v2/common/Accodian";

const emit = defineEmits(["setLayout"]);
const layout = reactive({
  header: "sub",
  footer: "",
  title: "이번 달 청구요금",
  floatMenu: "none",
});

const linksArray = [
  { title: "이번 달 요금 상세 보기", link: "/" },
  { title: "지난 청구내역 한눈에 보기", link: "/sc/AL-MY-03-003" },
  { title: "청구서 재발행하기", link: "/" },
];

// 청구/납부변경 정보 목업 데이터
const dataSelectList = ref([
  { value: 0, name: "납부 방법 변경", url: "/sc/AL-MY-04-002" },
  { value: 1, name: "결제일 변경", url: "/sc/AL-MY-04-003" },
  { value: 2, name: "청구서 받는 방법 변경", url: "/sc/AL-MY-03-004" },
]);

// 청구 정보 목업 데이터
const cardObject = ref([
  {
    title: "청구/납부정보",
    sub: "",
    chip: "변경",
    url: "",
    list: [
      { name: "이용기간", value: "2024.06.01 ~ 2024.06.30" },
      { name: "청구서 작성일", value: "2024.07.04" },
      { name: "납부 방법", value: "신한카드/신용카드" },
      { name: "예금주/결제일", value: "예금주(김*닷)/1차(9일)" },
      { name: "청구서 받는 방법", value: "E-MAIL(상세) 청구서" },
    ],
  },
]);

// 청구요금
const charge = ref(true);

// 팝업
const isOpen = ref(false);
const popupOpen = (items) => {
  isOpen.value = true;
};

onMounted(() => {
  emit("setLayout", layout);
});
</script>
