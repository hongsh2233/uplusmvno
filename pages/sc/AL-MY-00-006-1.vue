<template>
  <div class="container">
    <div class="content pb-0" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-00-006-1'" />
        <!-- // LNB -->

        <!-- contents -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>

          <!-- 2025-03-17 [ui개선건] -->
          <div class="first-content-item confirm-area care-common pb-10">
            <div class="content-item">
              <div class="content-inner common">
                <div class="cont-head">
                  <h3 class="cont-title-main">
                    <p class="point"><em>알닷케어</em>는</p>
                    U<sup>+</sup>알뜰폰 사용 고객만 <br />이용이 가능해요
                  </h3>
                </div>

                <div class="no-certified" v-if="!certifiedFlag">
                  <p class="description">
                    알닷케어는 <strong>U+ 알뜰폰</strong>을 사용하고<br />
                    있다는 것을 <strong>인증받은 고객</strong>만<br class="pc_hide" />
                    이용이<br class="pc_show" />
                    가능합니다.
                  </p>

                  <div class="certified">
                    <p class="title">알뜰폰 고객 <strong>인증</strong>하기</p>
                    <p class="description">
                      U+알뜰폰 고객인데 알닷케어가 보이지 않는다면 아래 인증을 통해<br
                        class="pc_show"
                      />
                      정회원으로 전환해 보세요.
                    </p>
                    <div class="check-txt check_st">
                      <input type="checkbox" id="checkbox01_02" name="" @click="handleTerms" />
                      <label for="checkbox01_02"
                        >알닷케어를 위한 개인정보 제3자<br class="pc_hide" />
                        제공동의 (필수)</label
                      >
                      <button type="button" class="btn-arrow" @click="handlePopup('terms', true)">
                        <span class="blind">약관 보기</span>
                      </button>
                    </div>

                    <div class="btn-area">
                      <button
                        type="button"
                        class="btn-rounded btn c01"
                        @click="selfCertification"
                        :disabled="btnCertified"
                      >
                        본인인증하기
                      </button>
                    </div>
                  </div>
                </div>
                <div class="is-certified" v-else>
                  <p class="description">
                    데이터 사용량, 청구요금 등을 한눈에<br />
                    확인할 수 있는 <strong>알닷케어 서비스</strong>를<br />
                    이용하시겠어요?
                  </p>
                  <div class="certified">
                    <div class="form-box">
                      <div class="title-area completion">
                        <p class="title">본인인증이 <strong class="import">완료</strong>됐어요</p>
                      </div>
                      <ul class="list-group" role="listbox">
                        <li role="none" v-for="(a, i) in dataSelectList" :key="i">
                          <input
                            type="checkbox"
                            :id="`checkbox2_0${i}`"
                            :name="`checkbox2_0${i}`"
                            class="blind"
                            :value="i"
                            v-model="checkboxSelectValue"
                            @change="updateCheckboxSelectValue"
                          />
                          <label :for="`checkbox2_0${i}`" class="line-info">
                            <span v-if="i === 0" class="badge">대표</span>
                            <span class="phone">{{ a.phone }}</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="reverse">
              <BottomFixMenu
                v-if="certifiedFlag && !front.isMobile()"
                :btnText="'알닷케어 이용하기'"
                @click="nextConfirm"
              />
              <!-- // bottom_button -->
            </div>

            <div class="content-item bgnone">
              <div class="content-inner common mt-0">
                <div class="cont-head mb-0">
                  <h3 class="cont-title-main">
                    <p class="point"><em>알닷케어</em>란?</p>
                  </h3>
                </div>
                <div class="description-box">
                  <p class="description">
                    U+ 알뜰폰 사용중인 고객님이라면 누구나,<br />
                    <em class="import">사용량 확인부터 명세서 관리</em>까지<br />
                    한번에 확인할 수 있는 <br class="pc_hide" />
                    U+알뜰폰의 통합 서비스 입니다.
                  </p>
                  <p class="description">
                    콜센터에 전화하는 불편없이 ‘알닷케어’로<br class="pc_hide" />
                    간편하게 확인해보세요.
                  </p>
                </div>

                <div class="care-c-notice-box">
                  <div class="inner">
                    <div class="inner__box">
                      <p class="title">이런 것들을 이용하실 수 있어요!</p>
                      <ol class="order-list">
                        <li>
                          사용현황
                          <p class="tip">실시간 사용량, 실시간 요금, 월별 사용량</p>
                        </li>
                        <li>
                          요금/납부
                          <p class="tip">납부정보 조회 및 변경, 청구 정보 조회</p>
                        </li>
                        <li>
                          가입 정보 관리
                          <p class="tip">가입 정보, 회선관리, 휴대폰 정보 등록</p>
                        </li>
                        <li>
                          분실/정지/해제
                          <p class="tip">휴대폰 분실 등록/해제, 일시정지/해제</p>
                          <!-- <p class="text-bull">*핵심 서비스는 25년 1월 중 오픈예정</p> -->
                        </li>
                      </ol>

                      <div class="btn-group">
                        <NuxtLink
                          to="https://www.uplusmvno.com/benefit/event/detail?mvnopEvetId=EV0000002149"
                          data-gtm-event-name="link_click"
                          data-gtm-event-category="클릭"
                          data-gtm-event-action="이벤트 상세 - 링크 클릭"
                          data-gtm-event-label="컨텐츠 : 알닷케어 상세 보러가기"
                          data-gtm-click-url="https://www.uplusmvno.com/benefit/event/detail?mvnopEvetId=EV0000002149"
                          data-gtm-click-location="이벤트 상세"
                          data-gtm-click-direction="내부"
                          data-gtm-click-text="알닷케어 상세 보러가기"
                          class="btn c08"
                          >상세 보러가기</NuxtLink
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="reverse">
              <ShortcutMenu :links="linksArray" />

              <BottomFixMenu
                v-if="certifiedFlag && front.isMobile()"
                :btnText="'알닷케어 이용하기'"
                @click="nextConfirm"
              />
              <!-- // bottom_button -->
            </div>
          </div>
        </div>
        <!-- // content -->
      </div>

      <!-- U+알뜰폰 사용 고객 -->
      <AlertV2
        v-model="alertState.check"
        :textData="{
          title: 'U+알뜰폰 사용 고객으로<br />확인되었어요',
          description: '이제 알닷케어 서비스를<br />이용해 보세요',
        }"
        @close="handleClose"
      />
      <!-- // U+알뜰폰 사용 고객 -->

      <!-- 24.11.25 v0.98 약관 공통 팝업 예시 -->
      <Popup
        title="개인정보 제3자 제공 동의"
        :isOpen="popState.terms"
        :popType="'alert-gray'"
        @update:isOpen="popState.terms = $event"
        @confirm="clickConfirm"
      >
        <div class="policy-wrap">
          <h4 class="policy-tit">제1조 (목적)</h4>
          <div class="policy-cnts">
            <ul class="text-list bull">
              <li>
                본 약관은 주식회사 엘지유플러스(이하 "회사"라 한다.)에서 알뜰폰사업자인 파트너사와
                전기통신서비스 도매제공 협정서 및 개인정보처리 위탁계약에 따라 제공하는 알닷
                서비스를 이용함에 있어 회원과 회사간의 권리, 의무 및 책임사항, 서비스 이용조건 및
                절차 등 기본적인 사항을 규정함을 목적으로 합니다.
              </li>
            </ul>
          </div>
          <h4 class="policy-tit">제2조 (용어의 정의)</h4>
          <div class="policy-cnts">
            <p class="policy-txt">1. 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
            <ol class="text-list">
              <li>
                (1) 상품: 알닷 내에서 거래의 대상이 되는 유무선 및 결합 서비스, 유심 등 알닷에서
                판매되는 재화와 용역을 말합니다.
              </li>
              <li>
                (2) 이용자: 알닷에 접속하여 본 약관에 동의하고 알닷이 제공하는 서비스를 받는 회원 및
                비회원을 말합니다.
              </li>
            </ol>
          </div>
        </div>
      </Popup>
      <!--// 24.11.25 v0.98 약관 공통 팝업 예시 -->

      <!-- BO 약관데이터 호출 -->
      <Popup
        title="약관상세"
        :isOpen="popState.termsSample"
        :popType="'alert-gray'"
        @update:isOpen="popState.termsSample = $event"
        @confirm="clickConfirm"
      >
        내용 전문보기 팝업
      </Popup>
      <!--// BO 약관데이터 호출 -->

      <!-- 광고성 수신동의 스낵바 -->
      <v-snackbar v-model="snackbar.visible" :timeout="snackbar.timeout" class="notice">
        {{ snackbar.message }}
      </v-snackbar>
      <!--// 광고성 수신동의 스낵바 -->
    </div>
  </div>
  <!-- // container -->
</template>

<script setup>
import PcLnb from "@/components/v2/common/PcLnb";
import ShortcutMenu from "@/components/v2/common/ShortcutMenu";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
import Accodian from "@/components/v2/common/Accodian";
import Popup from "@/components/v2/common/Popup";
import AlertV2 from "@/components/v2/common/AlertV2";

import { useRouter } from "vue-router";

const router = useRouter();
const emit = defineEmits(["setLayout"]);
const layout = reactive({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  title: "알닷케어 안내",
  floatMenu: "none",
});

// alert
const alertState = ref({
  check: false, // 결제일 동일한 경우
});

const handleClose = () => {
  alertState.value.check = false;
  router.push("/sc/AL-MY-01-001");
};

//팝업 목업
const popState = ref({
  terms: false,
  termsSample: false,
});

const handlePopup = (popName, val) => {
  popState.value[popName] = val;
};
const clickConfirm = () => {
  console.log("확인");
};

const receivePromotions = ref(false);

//광고성 수신동의 스낵바
const snackbar = ref({
  visible: false,
  timeout: 3000,
  message: "",
});

const updateSnackbarMessage = (agree) => {
  if (agree) {
    snackbar.value.message = `2024년 00월 00일 고객 혜택 제공을 위한 전체 약관 및 광고성 수신 동의가 완료되었어요.`;
  } else {
    snackbar.value.message = `2024년 00월 00일 고객 혜택 제공을 위한 전체 약관 및 광고성 수신 거부가 완료되었어요.`;
  }
  snackbar.value.visible = true;
};

const updateSnackbar = (agree) => {
  updateSnackbarMessage(agree);
  updateAllCheckbox(agree);
};

const updateAllCheckbox = (agree) => {
  if (agree) {
    checkboxSelectValue.value = [0, 1, 2];
  } else {
    checkboxSelectValue.value = [];
  }
};

const updateCheckboxSelectValue = () => {
  // const arrLength = checkboxSelectValue.value.length;
  // const allChecked = arrLength === dataSelectList.value.length;
  // receivePromotions.value = allChecked;
  // if (arrLength === 0) {
  //   updateSnackbarMessage(false);
  // } else if (arrLength === dataSelectList.value.length) {
  //   updateSnackbarMessage(true);
  // }
};

// Question
const linksArray = [
  { title: "요금제 보러가기", link: "/" },
  { title: "내게 맞는 요금제 찾기", link: "/" },
  { title: "'원칩' 유심 구매하기", link: "/" },
];

// 회선 목업 데이터
const dataSelectList = ref([
  { selected: true, value: 0, phone: "010-12**-56**" },
  { selected: false, value: 1, phone: "010-12**-65**" },
  { selected: false, value: 2, phone: "010-12**-92**" },
]);
// 24.11.18 수정) 회선 선택 목업
const checkboxSelectValue = ref([0]);
// 회선 선택
// const clickSelectListItem = (v) => {
//   dataSelectList.value.forEach((item) => {
//     item.selected = item === v ? true : false;
//   });

//   console.log(v);
// };

// 발행확인
const nextConfirm = () => {
  alertState.value.check = true;
};

// 개인정보 동의
const btnCertified = ref(true);
const handleTerms = (e) => {
  e.target.checked ? (btnCertified.value = false) : (btnCertified.value = true);
};

// 본인인증하기
const certifiedFlag = ref(false);
const selfCertification = () => {
  certifiedFlag.value = true;
};
onMounted(() => {
  emit("setLayout", layout);
});
</script>
