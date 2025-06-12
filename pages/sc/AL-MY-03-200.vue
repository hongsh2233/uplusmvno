<template>
  <div class="AL-MY-03-200">
    <div class="container">
      <div class="content" id="content">
        <h2 class="title_nav">{{ layout.title }}</h2>

        <div class="crp_wrap">
          <!-- LNB -->
          <PcLnb :currentLink="'/sc/AL-MY-05-001'" />
          <!-- // LNB -->

          <!-- crp_r -->
          <div class="crp_r">
            <h2 class="pc-title">{{ layout.title }}</h2>
            <!-- 내 정보 메뉴 -->
            <MyInfoMenu />
            <!-- // 내 정보 메뉴 -->

            <!-- section -->
            <div class="content-item">
              <div class="content-inner">
                <Tab :titles="['충전하기', '충전내역 조회']" :active-tab-index="0">
                  <!-- 충전하기 -->
                  <template #content1>
                    <div class="con">
                      <!-- con01 -->
                      <div class="inner-section mgt0">
                        <!-- 토글 -->
                        <ul class="toggle-list">
                          <li v-for="(data, idx) in alarm.alarmChk" :key="idx" class="mgt0">
                            <input type="checkbox" :id="'chk_toggle_01' + idx" class="blind" name="" />
                            <label :for="'chk_toggle_01' + idx" class="check-toggle">
                              <span class="toggle-slider"></span>
                              {{ data.title }}
                            </label>
                          </li>
                        </ul>
                        <!-- // 토글 -->

                        <div class="cont-head title-main mgt32">
                          <h3 class="cont-title-main">
                            이용 중인 선불요금제 금액은<br />
                            <b class="txt-primary">38,300원</b>이에요
                          </h3>

                          <span class="title-exp">이용기간(이용 중) 2023. 11. 29~2023. 12. 29</span>
                        </div>

                        <CardGroup :card-object="cardObject1">
                          <template #default="{ item }">
                            <p :class="item?.class">
                              {{ item?.value }}
                            </p>
                          </template>
                        </CardGroup>

                        <div class="gray-notice-box">
                          <ul class="text-list bull">
                            <li>
                              국제전화, 정보이용료, 수신자 부담(콜렉트콜), 114 직접 연결 수수료 및 통화료, 114 전화번호
                              안내 서비스는 기본 제공량에 포함되지 않으며 추가 충전을 통해 이용하실 수 있습니다.
                            </li>
                          </ul>
                        </div>

                        <div class="btn-area btn-space mgb0 join-btn-wr" :class="[isMobile && 'flex-reverse']">
                          <button type="button" class="btn-rounded" :class="[!isMobile && 'btn-sm']">
                            실시간 사용량 보기
                          </button>
                          <button type="button" class="btn-rounded btn-line" :class="[!isMobile && 'btn-sm']">
                            기간 연장하기
                          </button>
                        </div>
                      </div>

                      <!-- 이용중인 선불 요금제가 없음 -->
                      <div class="inner-section">
                        <div class="cont-head title-main">
                          <h3 class="cont-title-main">이용 중인 선불요금제가 없어요</h3>
                        </div>
                        <MessageResult :description="'이용 중인 선불 요금제가 없어요'" />

                        <div class="btn-area btn-space mgb0">
                          <button type="button" class="btn-rounded btn-line" :class="[!isMobile && 'btn-sm']">
                            선불 요금제 보러가기
                          </button>
                        </div>
                      </div>
                      <!-- // 이용중인 선불 요금제가 없음 -->

                      <!-- 선불요금제 충전-선불 종량 -->

                      <div class="inner-section">
                        <div class="cont-head title-main">
                          <h3 class="cont-title-main">
                            이용 중인 선불요금제 금액은<br />
                            <b class="txt-primary">20,100원</b>이에요
                          </h3>

                          <span class="title-exp">이용기간(이용 중) 2023. 11. 29~2023. 12. 29</span>
                        </div>

                        <CardGroup :card-object="cardObject4">
                          <template #default="{ item }">
                            <p :class="item?.class">
                              {{ item?.value }}
                            </p>
                          </template>
                        </CardGroup>

                        <div class="gray-notice-box">
                          <ul class="text-list bull">
                            <li>
                              충전 잔액이 부족한 경우 이용이 어려울 수 있습니다.<br />
                              미리 잔액을 확인해 주세요.
                            </li>
                          </ul>
                        </div>

                        <div class="btn-area btn-space mgb0 join-btn-wr" :class="[isMobile && 'flex-reverse']">
                          <button type="button" class="btn-rounded" :class="[!isMobile && 'btn-sm']">
                            실시간 사용량 보기
                          </button>
                          <button type="button" class="btn-rounded btn-line" :class="[!isMobile && 'btn-sm']">
                            금액 충전하기
                          </button>
                        </div>
                      </div>
                      <!-- // 선불요금제 충전-선불 종량 -->
                      <!-- // con01 -->

                      <!-- con02 -->
                      <div class="inner-section">
                        <div class="cont-head title-main mgt32">
                          <h3 class="cont-title-main"><b class="txt-primary">추가 충전</b> 내역이에요</h3>
                        </div>

                        <CardGroup :card-object="cardObject2" />

                        <div class="consent-container consent-inner">
                          <CardGroup :card-object="cardObject3" />
                        </div>

                        <div class="btn-area btn-space mgb0">
                          <button type="button" class="btn-rounded btn-line" :class="[!isMobile && 'btn-sm']">
                            추가 충전하기
                          </button>
                        </div>
                      </div>

                      <!-- 이용중인 선불 요금제가 없음 -->
                      <div class="inner-section">
                        <div class="cont-head title-main">
                          <h3 class="cont-title-main"><b class="txt-primary">추가 충전</b> 내역이에요</h3>
                        </div>
                        <MessageResult :description="'금액을 추가로 충전해서 사용하실 수 있어요'" />

                        <div class="btn-area btn-space mgb0">
                          <button type="button" class="btn-rounded btn-line" :class="[!isMobile && 'btn-sm']">
                            추가 충전하기
                          </button>
                        </div>
                      </div>
                      <!-- // 이용중인 선불 요금제가 없음 -->
                      <!-- // con02 -->
                    </div>

                    <!-- 선불 요금제 기간 연장하기 팝업  -->
                    <Popup
                      title="선불 요금제 기간 연장하기"
                      :isOpen="popupQuery === '1' && popupOpen"
                      @update:isOpen="popupOpen = false"
                      popType="full no-title"
                      :confirmText="'기간 연장하기'"
                    >
                      <ALMY03200P01 />
                    </Popup>
                    <!-- // 선불 요금제 기간 연장하기 팝업 -->

                    <!-- 신청완료01 팝업 -->
                    <Popup
                      title="신청완료"
                      :isOpen="popupQuery === '2' && popupOpen"
                      @update:isOpen="popupOpen = false"
                      class="pcpopup"
                      :isPopFooter="false"
                    >
                      <ALMY03200P02 />
                    </Popup>
                    <!-- // 신청완료01 팝업 -->

                    <!-- 선불 충전하기 추가충전 팝업  -->
                    <Popup
                      title="선불 요금제 기간 연장하기"
                      :isOpen="popupQuery === '3' && popupOpen"
                      popType="full no-title"
                      @update:isOpen="popupOpen = false"
                      :confirmText="'충전하기'"
                    >
                      <ALMY03200P03 />
                    </Popup>
                    <!-- // 선불 충전하기 추가충전 팝업 -->

                    <!-- 신청완료02 팝업 -->
                    <Popup
                      title="신청완료"
                      :isOpen="popupQuery === '4' && popupOpen"
                      @update:isOpen="popupOpen = false"
                      class="pcpopup"
                      :isPopFooter="false"
                    >
                      <ALMY03200P04 />
                    </Popup>
                    <!-- // 신청완료02 팝업 -->
                  </template>
                  <!-- // 충전하기 -->

                  <!-- 충전내역 조회 -->
                  <template #content2></template>
                  <!-- // 충전내역 조회 -->
                </Tab>
              </div>
              <!-- // content-inner -->
            </div>
            <!-- // section -->

            <!-- 이동 링크 목록 -->
            <ShortcutMenu :links="linksArray" class="mgt24" />
            <!-- // 이동 링크 목록 -->

            <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
              <template #content>
                <ul class="text-list bull">
                  <li>
                    당월 충전 금액은 개통 취소를 제외한 다른 사유로는 환불 불가하며 당월을 제외한 충전 금액은 사용
                    전까지 환불 및 취소 가능합니다.
                  </li>
                  <li>
                    추가 충전 금액은 이용 기간 만료 후에도 이월되며 추가 충전한 시점부터 1년간 사용 가능합니다.(단, 해지
                    시 환불 불가)
                  </li>
                  <li>해지 취소는 당일만 가능합니다.</li>
                  <li>
                    개통 당월의 경우는 사용 일수에 따라 계산하여 적용되며 해지, 일시정지, 직권 정지되는 경우 당월 해지
                    취소, 정지 해제 시에만 기존 제공량이 제공되며 당월 이후에는 소멸되며 충전 후 정상 서비스 사용이
                    가능합니다.
                  </li>
                  <li>개통 후 7일 이내 충전이 안 된 경우 개통 취소 또는 직권해지 될 수 있습니다.</li>
                  <li>
                    요금제 내 별도의 명시가 없는 경우 기본 제공 음성, 문자메시지, 데이터 통화 등은 국내에 한해
                    제공됩니다.
                  </li>
                </ul>
              </template>
            </Accodian>
          </div>
          <!-- // crp_r -->
        </div>
        <!-- // crp_wrap -->
      </div>
      <!-- // content -->
    </div>
    <!-- // container -->
  </div>
</template>

<script setup lang="ts">
import type { LayoutOptions } from "@/types/layout";
import PcLnb from "@/components/v2/common/PcLnb.vue";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu.vue";

import Tab from "@/components/v2/common/Tab.vue";
import CardGroup from "@/components/v2/common/CardGroupRoaming.vue";
import ShortcutMenu from "@/components/v2/common/ShortcutMenu.vue";
import Accodian from "@/components/v2/common/Accodian.vue";

import Popup from "@/components/v2/common/Popup.vue";
import ALMY03200P01 from "@/components/popup/AL-MY-03-200-P01.vue";
import ALMY03200P02 from "@/components/popup/AL-MY-03-200-P02.vue";
import ALMY03200P03 from "@/components/popup/AL-MY-03-200-P03.vue";
import ALMY03200P04 from "@/components/popup/AL-MY-03-200-P04.vue";

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "가입 정보",
  wrapClass: "selfcare roaming",
});

const isMobile = ref(front.isMobile());

const alarm = ref({
  alarmChk: [{ title: "기간 충전 알림 설정", consent: true }],
});

const cardObject1 = ref([
  {
    title: "",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "요금제명", value: "선불 데이터 300MB+1Mbps (정액)" },
      { name: "데이터", value: "500MB" },
      { name: "소진 시 1Mbps 속도로 무한 제공", class: { list: "sub-value" } },
      { name: "음성", value: "기본제공" },
      { name: "부가통화 50분", class: { list: "sub-value" } },
      { name: "SMS", value: "기본제공" },
    ],
  },
]);

const cardObject4 = ref([
  {
    title: "",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "요금제명", value: "선불 LTE 절약" },
      { name: "월 기본료", value: "9,900원", class: { list: "sub-value" } },
      { name: "데이터", value: "22.53원(MB)" },
      { name: "음성", value: "1.65(초)" },
      { name: "SMS", value: "22원(건)" },
      { name: "충전 날짜", value: "2023. 12. 29" },
      { name: "충전 금액", value: "30,000원" },
    ],
  },
]);

const cardObject2 = ref([
  {
    title: "",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "충전 날짜", value: "2023. 12. 29" },
      { name: "충전 금액", value: "10,000원" },
    ],
  },
]);

const cardObject3 = ref([
  {
    title: "",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "데이터", value: "22.53원(MB)" },
      { name: "음성", value: "1.98(초)" },
      { name: "SMS", value: "16.5원(건)" },
      { name: "잔액", value: "9,830원", class: { list: "total-value" } },
    ],
  },
]);

const linksArray = [
  { title: "선불 요금제 이용기간 안내", link: "/" },
  { title: "선불 요금제 충전내역 보기", link: "/" },
];

const popupOpen = ref(true);
const route = useRoute();
const popupQuery = ref(route.query.popup);

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/sc/page-al-my-03-200.scss" as *;
</style>
