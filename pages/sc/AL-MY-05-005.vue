<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-05-005'" />
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
                  <strong class="txt-primary">휴대폰 등록</strong>후
                  <br />
                  더 편리한 서비스를 누려보세요
                </h3>
              </div>

              <dl class="gray-notice-box">
                <dt class="noti-title">등록한 휴대폰 정보</dt>
                <!-- <dd class="noti-sb">모바일 운영체제 <strong>iOS</strong></dd> -->
                <dd class="noti-sb">모델명<strong>아이폰 15 Pro Max-256GB</strong></dd>
              </dl>

              <div class="btn-area btn-space">
                <button
                  type="button"
                  class="btn-rounded btn-line"
                  :disabled="false"
                  @click="nextPage"
                >
                  휴대폰 정보 재등록하기
                </button>
              </div>

              <div>
                <p class="icon-txt bell">이런 고객님들께 필요한 서비스예요</p>
                <ul class="text-list bull">
                  <li>
                    자급제 휴대폰으로 분실/파손보험 가입이 필요한 고객님(휴대폰 정보가 등록된 단말만
                    분실 접수가 가능해요)
                  </li>
                  <li>번호를 변경하고 싶으신 고객님</li>
                  <li>유심만 개통 후 일부 서비스 이용이 안되시는 고객님</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="content-item">
            <div class="content-inner">
              <div class="cont-head">
                <h3 class="cont-title">휴대폰 등록 방법 안내</h3>
              </div>

              <!--case 1: 기기 등록을 하지 않은 경우 -->
              <ol class="text-list circle-num">
                <li>
                  <p>본인확인 인증</p>
                  <span>간단한 인증을 통해 본인확인을 해주세요.</span>
                </li>
                <li>
                  <p>고객정보 입력</p>
                  <span>연락받을 휴대폰 번호, 이메일 주소를 등록해 주세요.</span>
                </li>
                <li>
                  <p>휴대폰 정보 입력</p>
                  <span>휴대폰 고유 번호를 등록해 주세요.</span>
                </li>
                <li>
                  <p>등록 완료</p>
                  <span>휴대폰을 1~2회 재시작 해주세요.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <!-- // contents -->
      </div>

      <Popup
        v-if="!front.isMobile()"
        :title="'휴대폰 정보 등록'"
        :isOpen="viewNextPage"
        :isPopFooter="false"
        @update:isOpen="viewNextPage = $event"
        class="pcpopup"
      >
        <Progress :step="{ total: 4, current: pageStep + 1 }" v-if="pageStep !== 4" />
        <ALMY05006 v-if="pageStep === 0" @nextStep="nextView" />
        <ALMY050081 v-if="pageStep === 1" @nextStep="nextView" />
        <ALMY050082 v-if="pageStep === 2" @nextStep="nextView" />
        <ALMY05009 v-if="pageStep === 3" @nextStep="nextView" />
        <ALMY05010 v-if="pageStep === 4" @nextStep="nextView" />
      </Popup>
    </div>
  </div>
</template>

<script setup>
import PcLnb from "@/components/v2/common/PcLnb";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
import Popup from "@/components/v2/common/Popup";
import Progress from "@/components/v2/common/Progress";

import ALMY05006 from "@/components/v2/pages/info-management/ALMY05006";
import ALMY050081 from "@/components/v2/pages/info-management/ALMY050081";
import ALMY050082 from "@/components/v2/pages/info-management/ALMY050082";
import ALMY05009 from "@/components/v2/pages/info-management/ALMY05009";
import ALMY05010 from "@/components/v2/pages/info-management/ALMY05010";

import { useRouter } from "vue-router";

// 헤더 정보
const layout = ref({
  header: "sub",
  footer: "",
  floatMenu: "none",
  title: "휴대폰 정보 등록",
});

// HOOK
const emit = defineEmits(["setLayout"]);
const router = useRouter();

//popup
const viewNextPage = ref(false);
//nextPage
const nextPage = () => {
  // 화면 검수용 임시 라우터 처리
  if (front.isMobile()) {
    router.push("/sc/AL-MY-05-006");
  } else {
    // 납부 방법 변경 팝업
    viewNextPage.value = true;
  }
};

const pageStep = ref(0);
const nextView = (page, alertView) => {
  console.log(page);
  pageStep.value = page;
  viewNextPage.value = !alertView;
};

onMounted(() => {
  emit("setLayout", layout);
});
</script>
