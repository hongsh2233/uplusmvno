<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>
      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-05-500'" />
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
                  휴대폰 번호를<br />
                  간편하게 <b class="txt-primary">변경</b>하세요
                </h3>
                <ul class="text-list bull">
                  <li>변경 예약 및 취소, 변경 완료를 모두 포함하여 1일 1회, 90일 동안 총 2회까지 변경이 가능해요.</li>
                  <li>유심만 개통한 경우 휴대폰 등록(확정 기변) 후 번호 변경을 하실 수 있어요.</li>
                </ul>
              </div>
              <CardGroup :card-object="cardObject1" />
            </div>
          </div>

          <!-- 빈 콘텐츠 아이템 -->
          <!-- <div class="content-item">
            <div class="content-inner"></div>
          </div> -->
          <!-- //빈 콘텐츠 아이템 -->

          <div class="content-item">
            <div class="content-inner">
              <div class="inner-section">
                <Accodian title="번호 변경 정보" styleClass="acco-gray" :is-expanded="true">
                  <template #content>
                    <div class="consent-container mgt0">
                      <CardGroup :card-object="cardObject2">
                        <template #default="{ item }">
                          <div class="fl-ac">
                            <p v-html="item.value"></p>
                            <NuxtLink to="AL-MY-05-005" v-if="item.value === '미등록'" class="btn-rounded chip"
                              >휴대폰 등록</NuxtLink
                            >
                          </div>
                        </template>
                      </CardGroup>
                    </div>
                  </template>
                </Accodian>
              </div>
              <div class="inner-section">
                <div class="cont-head">
                  <div class="cont-title">번호 변경 안내</div>
                </div>
                <ol class="text-list circle-num type-vertical">
                  <li>
                    <p>희망번호 검색하기</p>
                    <span>휴대폰 번호 뒤 4자리로 검색 후 선택해 주세요.</span>
                  </li>
                  <li>
                    <p>본인확인 인증</p>
                    <span>간단한 인증을 통해 본인확인을 해주세요.</span>
                  </li>
                  <li>
                    <p>번호 변경 완료</p>
                    <span>선택한 번호로 변경을 완료합니다.</span>
                  </li>
                  <li>
                    <p>변경된 번호로 개통하기</p>
                    <span>
                      2G, 3G 휴대폰은 변경된 번호를 휴대폰에 입력하세요. <br />
                      LTE, 5G 휴대폰은 번호 변경 후 30분 이내에 변경된 번호로 휴대폰을 개통하세요.
                    </span>
                  </li>
                </ol>
              </div>
              <div class="inner-section">
                <div class="btn-area">
                  <NuxtLink :to="'/sc/AL-MY-06-002'" class="btn-rounded btn-line">번호 변경 이력 보기</NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <div class="content-item">
            <div class="content-inner">
              <CardGroup :card-object="cardObject3" />
              <p class="notice-txt">일시 정지 해제 후 번호 변경 해주세요.</p>
            </div>
          </div>
          <BottomFixMenu :btnText="'번호 변경'" :disabled="false" @click="nextPage" />
          <!-- // bottom_button -->

          <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
            <template #content>
              <ul class="text-list bull">
                <li>미납요금이 있거나, 휴대폰 일시정지 중에는 번호를 변경할 수 없습니다.</li>
                <li>LTE, 5G 휴대폰의 경우 번호 변경 후 30분 이내 자동 개통 욉니다.</li>
                <li>2G, 3G 휴대폰의 경우 변경된 번호를 휴대폰에 입력해야 변경 됩니다.</li>
                <li>
                  일부 휴대폰은 온라인에서 직접 변경 불가합니다.
                  <p><a class="txt-link orange">온라인 변경 불가 휴대폰 확인하기</a></p>
                </li>
                <li>
                  안드로이드 휴대폰인 경우, 개통 안내 문자메시지를 받게 됩니다. 반드시 30분 안에 전화 키패드에
                  ‘#5487587#682# ‘ 번호 입력 후 ‘개통하시겠습니까?’ 라는 문구가 나타나면 [예]를 선택하세요. 휴대폰
                  전원이 자동으로 꺼졌다 켜지면 해당 번호로 변경된 것입니다.
                </li>
                <li>아이폰/수입폰의 경우 휴대폰을 껐다 켜면 해당 번호로 변경 개통됩니다.</li>
                <li>
                  국가에서 통신사에 부여한 가운데 4자리 번호는 변경 후 24시간 이내에만 취소가 가능하며, 그 외 번호는
                  신청 당일 오전 10시~ 오후 8시 사이에만 취소가 가능합니다.
                </li>
                <li>변경 가능 잔여 횟수가 없을 경우 번호 변경 취소가 불가합니다.</li>
              </ul>
            </template>
          </Accodian>
        </div>
        <!--// contents -->
      </div>
      <Popup
        title="해외 로밍 신청"
        popType="full no-title"
        :isOpen="popState.pop0"
        @update:isOpen="popState.pop0 = $event"
        :isPopFooter="false"
        class="pcpopup"
      >
        <ALMY05500P01 />
      </Popup>
      <!-- 청구서 재발행 / 완료 팝업 -->
      <!-- <Popup
        v-if="!front.isMobile()"
        :title="'납부 방법 변경'"
        :isOpen="isReissue"
        :isPopFooter="false"
        @update:isOpen="isReissue = $event"
        class="pcpopup"
      >
        <ALMY040021 v-if="pageStep === 1" @nextStep="nextPage1" />
        <ALMY040022 v-if="pageStep === 2" @nextStep="nextView" :info="nextViewType" />
        <ALMY040023 v-if="pageStep === 3" @nextStep="nextPage3" />
      </Popup> -->
      <!-- // 청구서 재발행 / 완료 팝업 -->

      <!-- <Popup
        title="결제일(출금일)"
        :isOpen="tooltipOpen"
        :popType="'alert-gray'"
        @update:isOpen="tooltipOpen = $event"
        @confirm="console.log('confirm')"
      >
        <b
          >납부 방법을 변경하시면 결제일(출금일)이 변경됩니다. 납부 방법 변경 완료 후, ‘결제일 변경’ 메뉴에서 원하시는
          결제일로 선택해 주세요</b
        >
        <div class="gray-notice-box">
          <ul class="nmr-list">
            <li>
              <span class="txt-gray">은행</span>
              <p>1차(15일), 2차(28일), 3차(22일), 4차(26일)</p>
            </li>
            <li>
              <span class="txt-gray">신용카드</span>
              <p>1차(9일), 2차(1차 결제일+평일 4일), 3차(2차 결제일+평일 3일), 4차(3차 결제일+평일 3일)</p>
            </li>
          </ul>
        </div>
      </Popup> -->
      <!--// 24.11.25 v0.98 결제일 툴팁-->
    </div>
  </div>
  <!-- // container -->
</template>

<script setup lang="ts">
import PcLnb from "@/components/v2/common/PcLnb.vue";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu.vue";
import CardGroup from "@/components/v2/common/CardGroupRoaming.vue";
import Popup from "@/components/v2/common/Popup.vue";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu.vue";
import Accodian from "@/components/v2/common/Accodian.vue";
import ALMY05500P01 from "@/components/popup/AL-MY-05-500-P01.vue";

// import ALMY040021 from "@/components/v2/pages/paymentchange/ALMY040021";
// import ALMY040022 from "@/components/v2/pages/paymentchange/ALMY040022";
// import ALMY040023 from "@/components/v2/pages/paymentchange/ALMY040023";

import { useRouter } from "vue-router";

// 헤더 정보
const emit = defineEmits(["setLayout"]);
const router = useRouter();

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: "",
  floatMenu: "",
  title: "번호 변경",
  wrapClass: "selfcare roaming",
});

const cardObject1 = ref([
  {
    title: "단말 정보",
    sub: "",
    chip: [
      {
        name: "휴대폰 재등록",
        value: 1,
        url: null,
      },
    ],
    list: [
      { name: "등록 기기명", value: "iPhone15 Pro Max_1TB" },
      { name: "상태", value: "정상" },
      //미등록시
      // { name: "등록 기기명", value: "미등록" },
      // { name: "상태", value: "-" },
    ],
  },
]);

//분실정보 목업
const cardObject2 = ref([
  {
    list: [
      { name: "신청 번호", value: "010-12**26**", class: { value: "txt-orange" } },
      { name: "이전 번호", value: "10-12**26**" },
      { name: "신청일", value: "2025. 07. 18" },
      { name: "잔여횟수(총 회수)", value: "1/2" },
      // 등록 정보가 없을 경우
      // { name: "신청 번호", value: "-" },
      // { name: "이전 번호", value: "10-12**26**" },
      // { name: "신청일", value: "-" },
      // { name: "잔여횟수(총 회수)", value: "1/2" },
    ],
  },
]);

/*팝업 상태 관리  */
const popState = ref({
  pop0: true,
});

const cardObject3 = ref([
  {
    title: "회선이 일시정지 상태에요!",
    sub: "",
    chip: [
      {
        name: "일시정지 해제",
        value: 1,
        url: null,
      },
    ],
    list: [
      { name: "상태", value: "일시정지" },
      { name: "정지 사유", value: "휴대폰 분실" },
      { name: "정지 일수", value: "30일" },
      { name: "정지 기간", value: "2024. 01. 01 ~ 2024. 02. 01" },
    ],
  },
]);

const isReissue = ref(false);
// const pageStep = ref(1);
const nextPage = () => {
  // 화면 검수용 임시 라우터 처리
  if (front.isMobile()) {
    router.push("/sc/AL-MY-04-002-1");
  } else {
    // 납부 방법 변경 팝업
    isReissue.value = true;
  }
};

// const nextViewType = ref(null);
// const nextView = (page) => {
//   pageStep.value = page;
// };

// const nextPage1 = (value, page) => {
//   nextViewType.value = value;
//   nextView(page);
// };
// const nextPage3 = () => {
//   nextView(1);
//   isReissue.value = false;
// };

//tooltipOpen

// accordion
const toggle = ref<any>(false);

const currentPage = ref(1);

function onPanelChange(newIndex?: number) {
  newIndex === undefined ? (currentPage.value = 1) : (currentPage.value = cardObject2.value.length);
}

// global state 임시
const globalState = reactive({
  isLoggedIn: true,
});

// const tooltipOpen = ref(false);

onMounted(() => {
  emit("setLayout", layout);
});
</script>
