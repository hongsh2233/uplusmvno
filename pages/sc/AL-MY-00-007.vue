<template>
  <div class="AL-MY-00-007">
    <div class="container">
      <div class="content pt-0 pb-0" id="content">
        <div class="certify_wrap">
          <!-- contents -->
          <div class="crp_r">
            <h2 class="pc-title" v-html="layout.title"></h2>

            <!-- 2025-03-17 [ui개선건] -->
            <div class="first-content-item confirm-area care-common pb-10">
              <div class="content-item">
                <div class="content-inner common">
                  <div class="cont-head">
                    <h3 class="cont-title-main">
                      선택하신 서비스는<br />
                      <span class="point"><em>U&#8314;알뜰폰 인증 고객</em>만</span><br />
                      이용이 가능해요
                    </h3>
                  </div>

                  <div class="no-certified">
                    <div class="certified">
                      <p class="title">알뜰폰 고객 <strong>인증</strong>하기</p>
                      <!-- <p class="description">
                        U+알뜰폰 고객인데 알닷케어가 보이지 않는다면 아래 인증을 통해<br class="pc_show" />
                        정회원으로 전환해 보세요.
                      </p> -->
                      <div class="check-txt check_st">
                        <input type="checkbox" id="checkbox01_02" name="" @click="handleTerms" />
                        <label for="checkbox01_02"
                          >알닷 부가서비스 가입 및 알닷케어를 위한 개인정보 제3자 제공동의 (필수)</label
                        >
                        <button type="button" class="btn-arrow" @click="handlePopup('terms', true)">
                          <span class="blind">약관 보기</span>
                        </button>
                      </div>

                      <div class="btn-area">
                        <button
                          type="button"
                          class="btn-rounded btn c08"
                          @click="selfCertification"
                          :disabled="btnCertified"
                        >
                          본인인증하기
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="content-item bgnone-box">
                <div class="care-c-notice-box">
                  <div class="inner">
                    <div class="inner__box">
                      <p class="title">
                        U<sup>+</sup>알뜰폰 사용중인 고객님이라면<br />
                        누구나 이런 것들을 이용할 수<br v-if="front.isMobile()" />
                        있어요!
                      </p>
                      <ol class="order-list">
                        <li>
                          해외 로밍
                          <p class="tip">
                            여행지에 딱 맞는 다양한 로밍 요금제와 로밍 부가 서비스를 신청할 수 있어요.<br />
                            해외여행 다녀오신 후에 로밍 데이터 사용내역 조회, 사용요금 영수증 발급이 가능해요.
                          </p>
                        </li>
                        <li>
                          알닷케어
                          <p class="tip">
                            사용량 확인부터 청구서 관리, 납부내역 조회, 휴대폰 분실/이용정지 신청까지 가능해요! 콜센터에
                            전화하는 불편 없이 ‘알닷케어’로 간편하게 확인해 보세요.
                          </p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <div class="reverse">
                <ShortcutMenu :links="linksArray" />

                <BottomFixMenu v-if="front.isMobile()" :btnText="'알닷 서비스 이용하기'" @click="nextConfirm" />
                <!-- // bottom_button -->
              </div>
            </div>
          </div>
          <!-- // content -->
        </div>

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
                  본 약관은 주식회사 엘지유플러스(이하 "회사"라 한다.)에서 알뜰폰사업자인 파트너사와 전기통신서비스
                  도매제공 협정서 및 개인정보처리 위탁계약에 따라 제공하는 알닷 서비스를 이용함에 있어 회원과 회사간의
                  권리, 의무 및 책임사항, 서비스 이용조건 및 절차 등 기본적인 사항을 규정함을 목적으로 합니다.
                </li>
              </ul>
            </div>
            <h4 class="policy-tit">제2조 (용어의 정의)</h4>
            <div class="policy-cnts">
              <p class="policy-txt">1. 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
              <ol class="text-list">
                <li>
                  (1) 상품: 알닷 내에서 거래의 대상이 되는 유무선 및 결합 서비스, 유심 등 알닷에서 판매되는 재화와
                  용역을 말합니다.
                </li>
                <li>
                  (2) 이용자: 알닷에 접속하여 본 약관에 동의하고 알닷이 제공하는 서비스를 받는 회원 및 비회원을
                  말합니다.
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
  </div>
</template>

<script setup>
import ShortcutMenu from "@/components/v2/common/ShortcutMenu";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
import Popup from "@/components/v2/common/Popup";

import { useRouter } from "vue-router";

const router = useRouter();
const emit = defineEmits(["setLayout"]);
const layout = reactive({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  title: "U&#8314;알뜰폰 인증하기",
  floatMenu: "none",
});

// alert
const alertState = ref({
  check: false, // 결제일 동일한 경우
});

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

// Question
const linksArray = [
  { title: "부가서비스 보러가기", link: "/" },
  { title: "알닷케어 이용하기", link: "/" },
  { title: "모바일 요금제 보러가기", link: "/" },
];

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
<style lang="scss">
@use "@/assets/scss/pages/sc/page-al-my-00-007.scss" as *;
</style>
