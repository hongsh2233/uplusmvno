<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>
      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-03-002'" />
        <!-- // LNB -->

        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>
          <!-- 내 정보 메뉴 -->
          <MyInfoMenu />
          <!-- // 내 정보 메뉴 -->

          <div class="content-item">
            <div class="content-inner">
              <p class="notice-txt">이번달 청구요금은 <span class="txt-orange">발행 전</span> 이예요</p>
              <div class="cont-head">
                <h3 class="cont-title-main">2024년 7월 요금은 <br /><b class="txt-primary">10,100원</b>이예요</h3>
                <span class="title-exp">2024.07.01 ~ 2024.07.30</span>
                <!-- 24.12.12 버튼 클래스 변경-->
                <button type="button" class="btn-rounded chip btn-fix" @click="popupOpen('isOpen1')">
                  청구월 변경
                </button>
              </div>
              <div class="charge-visual">
                <div class="charge-item max">
                  <span class="charge-label">7월</span>
                  <div class="charge-bar" style="width: 100%"></div>
                </div>
                <p class="charge-txt">56,110원</p>

                <div class="charge-item">
                  <span class="charge-label">6월</span>
                  <div class="charge-bar max" style="width: 70%"></div>
                </div>
                <p class="charge-txt">99,000원</p>
              </div>
              <div class="btn-area pc-w-auto">
                <button type="button" class="btn-rounded btn-sm" disabled>요금 바로 납부</button>
                <button type="button" class="btn-rounded btn-sm w-auto">청구서 받는 방법 변경</button>
                <!-- 24.12.18 버튼 추가 -->
                <NuxtLink class="btn-rounded btn-sm w-auto">청구서 재발행</NuxtLink>
              </div>
              <p class="notice-txt">요금 바로 납부하기는 서비스 예정입니다</p>
            </div>
          </div>
          <!-- 2025-06-11 1749616255 (정C) 청구/납부정보 이전으로 위치 변경 -->
          <div class="content-item">
            <div class="content-inner">
              <div class="cont-head">
                <h3 class="cont-title">상세 내역</h3>
              </div>
              <ul class="card-group">
                <li>
                  <Accodian styleClass="acco-details">
                    <template #title>
                      <div class="name acco-arrow">휴대폰 이용 내역</div>
                      <div class="value">
                        <b class="txt-orange">9,546원</b>
                      </div>
                    </template>
                    <template #content>
                      <ul class="card-sub-contents">
                        <li>
                          <div class="name">기본요금</div>
                          <div class="sub-value">9,546원</div>
                        </li>
                        <li>
                          <div class="name">할인요금</div>
                          <div class="sub-value"><b class="txt-black">-16.217원</b></div>
                        </li>
                        <li>
                          <div class="name">ㄴ기본 요금</div>
                          <div class="sub-value">9,546원</div>
                        </li>
                        <li>
                          <div class="name">ㄴ카드할인</div>
                          <div class="sub-value">9,546원</div>
                        </li>
                      </ul>
                    </template>
                  </Accodian>
                </li>
                <!-- 2025-06-11 1749616255 (정C) 알닷 2차 고도화 추가-->
                <li>
                  <Accodian styleClass="acco-details">
                    <template #title>
                      <div class="name acco-arrow">단말기 할부금할부금</div>
                      <div class="value">
                        <b>88,000원</b>
                      </div>
                    </template>
                    <template #content>
                      <ul class="card-sub-contents">
                        <li>
                          <div class="name">월 할부 원금</div>
                          <div class="sub-value">87,000원</div>
                        </li>
                        <li>
                          <div class="name">할부 수수료</div>
                          <div class="sub-value">1,000원</div>
                        </li>
                      </ul>
                    </template>
                  </Accodian>
                </li>
                <!-- //2025-06-11 1749616255 (정C) 닷 2차 고도화 추가 -->
                <li>
                  <Accodian styleClass="acco-details">
                    <template #title>
                      <div class="name acco-arrow">세금 및 공통 요금</div>
                      <div class="value">546원</div>
                    </template>
                    <template #content>
                      <ul class="card-sub-contents">
                        <li>
                          <div class="name">부가가치세</div>
                          <div class="sub-value">9,546원</div>
                        </li>
                      </ul>
                    </template>
                  </Accodian>
                </li>
                <li>
                  <div class="name">
                    <button type="button" class="btn-tooltip" @click="popupOpen('isOpen2')">미납 요금</button>
                  </div>
                  <div class="value">85,530원</div>
                </li>
              </ul>
            </div>
          </div>
          <!-- //2025-06-11 1749616255 (정C) 청구/납부정보 이전으로 위치 변경 -->

          <div class="content-item">
            <div class="content-inner">
              <Accodian :isExpanded="false">
                <template #title>
                  <div class="cont-head">
                    <h3 class="cont-title">청구/납부정보</h3>
                  </div>
                </template>
                <template #content>
                  <CardGroup :card-object="cardObject" />
                </template>
              </Accodian>
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
      </div>

      <!-- 청구 정보 변경 팝업 -->
      <Popup
        class="pop-calendar"
        title="청구월 선택"
        :isOpen="popups.isOpen1"
        @update:isOpen="popups.isOpen1 = $event"
        @click="clickConfirm"
      >
        <MonthPicker @selectItem="callFunction" />
      </Popup>
      <!-- // 청구 정보 변경 팝업 -->

      <!-- 미납 요금 납부 순서 팝업-->
      <Popup
        title="미납요금 납부 순서 정책"
        :isOpen="popups.isOpen2"
        :popType="'alert-gray'"
        @update:isOpen="popups.isOpen2 = $event"
      >
        <ul class="text-list bull">
          <li>고객님의 계좌에서 원하시는 경우 즉시 출금이 가능한 납부 방법입니다.</li>
          <li>은행/신용카드 자동이체 고객의 경우 이중납이 발생하지 않도록 출금 일정을 확인 후 신청하시기 바랍니다.</li>
          <li>신용카드 납부 시 대상요금의 부분납 처리 가능하며, 5만원 미만 금액에 대해서는 할부처리가 불가합니다.</li>
        </ul>
      </Popup>
      <!-- // 미납 요금 납부 순서 팝업 -->
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script setup>
import PcLnb from "@/components/v2/common/PcLnb";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu";
import Accodian from "@/components/v2/common/Accodian";
import CardGroup from "@/components/v2/common/CardGroup";
import ShortcutMenu from "@/components/v2/common/ShortcutMenu";
import Popup from "@/components/v2/common/Popup";
import MonthPicker from "@/components/v2/common/MonthPicker";

const emit = defineEmits(["setLayout"]);
/* 2025-06-11 1749616255 알닷(정C) 알닷 고도화 2차: title 텍스트 변경 */
const layout = reactive({ header: "sub", footer: "", title: "청구요금 보기", floatMenu: "none" });

//24.12.18 결제일 변경하기 버튼 추가
const linksArray = [
  { title: "납부 방법 변경하기", link: "/" },
  { title: "납부내역 확인하기", link: "/" },
  { title: "지난 청구내역 한눈에 보기", link: "/sc/AL-MY-03-003" },
  { title: "결제일 변경하기", link: "/" },
];

// 팝업
const popups = ref({
  isOpen1: false,
  isOpen2: false,
  isOpen3: false,
});

const popupOpen = (popupKey) => {
  popups.value[popupKey] = true;
};

// 달 선택
const callFunction = (e) => {
  // console.dir(e.target);
};
// 확인 버튼
const clickConfirm = (e) => {
  // console.dir(e.target);
};

// 청구 정보 목업 데이터
const cardObject = ref([
  {
    list: [
      { name: "이용 기간", value: "2024.06.01 ~ 2024.06.30" },
      { name: "청구서 작성일", value: "2024.07.04" },
      { name: "납부 방법", value: "신한카드/신용카드" },
      { name: "예금주/결제일", value: "예금주(김*닷)/1차(9일)" },
      { name: "청구서 받는 방법", value: "E-MAIL(상세) 청구서" },
    ],
  },
]);

onMounted(() => {
  emit("setLayout", layout);
});
</script>
