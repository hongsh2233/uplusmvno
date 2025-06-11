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
                <Tab :titles="['충전하기', '충전내역 조회']" :active-tab-index="1">
                  <!-- 충전하기 -->
                  <template #content1></template>
                  <!-- // 충전하기 -->

                  <!-- 충전내역 조회 -->
                  <template #content2>
                    <div class="con">
                      <div class="inner-section mgt0">
                        <div class="cont-head title-main mgt32">
                          <h3 class="cont-title-main">
                            <b class="txt-primary">선불 충전 내역</b>을<br />
                            조회해 보세요
                          </h3>
                        </div>

                        <div class="form-box mgt0">
                          <div class="btn-flex">
                            <div v-for="item in radioData" :key="item.id" class="radio_item ty05">
                              <input
                                type="radio"
                                name="radio01"
                                :id="item.id"
                                :value="item.value"
                                v-model="radioSelected"
                              />
                              <label :for="item.id">{{ item.text }}</label>
                            </div>
                          </div>
                        </div>

                        <ul class="mgt32">
                          <li v-for="(prepaid, index) in prepaid" :key="prepaid.id || index" class="consect-cardlist">
                            <CardGroup :card-object="prepaid.mainCard" />
                          </li>
                        </ul>

                        <div class="btn-area cnt">
                          <button type="button" class="btn-circle more">더 볼래요</button>
                          <button type="button" class="btn-circle fold">접을래요</button>
                        </div>
                      </div>

                      <div class="inner-section">
                        <MessageResult :description="'이용 중인 선불 요금제가 없어요'" />

                        <div class="btn-area btn-space mgb0">
                          <button type="button" class="btn-rounded btn-line" :class="[!isMobile && 'btn-sm']">
                            선불 요금제 보러가기
                          </button>
                        </div>
                      </div>
                    </div>
                  </template>
                  <!-- // 충전내역 조회 -->
                </Tab>
              </div>
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

//라디오 목업
const radioData = ref([
  { id: "radio01_01", value: "전체", checked: true, text: "전체" },
  { id: "radio01_02", value: "정액 충전", checked: false, text: "정액 충전" },
  { id: "radio01_03", value: "추가/금액 충전", checked: false, text: "추가/금액 충전" },
]);
const radioSelected = ref(radioData.value[0].value);

const prepaid = ref([
  {
    id: "pass1", // 각 항목을 구분할 고유 ID (key로 사용)
    mainCard: [
      {
        title: "",
        sub: "",
        chip: "",
        url: "",
        list: [
          { name: "요금제명", value: "선불 자유 데이터" },
          { name: "충전 금액", value: "10,000원" },
          { name: "충전 날짜", value: "2025. 05. 05" },
          { name: "충전 종류", value: "추가/금액 충전" },
          { name: "충전 기간", value: "-" },
          { name: "결제 방법", value: "계좌이체/우리은행/김*닷" },
        ],
      },
    ],
  },
  {
    id: "pass2", // 각 항목을 구분할 고유 ID (key로 사용)
    mainCard: [
      {
        title: "",
        sub: "",
        chip: "",
        url: "",
        list: [
          { name: "요금제명", value: "선불 자유 데이터" },
          { name: "충전 금액", value: "10,000원" },
          { name: "충전 날짜", value: "2025. 05. 05" },
          { name: "충전 종류", value: "추가/금액 충전" },
          { name: "충전 기간", value: "-" },
          { name: "결제 방법", value: "계좌이체/우리은행/김*닷" },
        ],
      },
    ],
  },
  {
    id: "pass3", // 각 항목을 구분할 고유 ID (key로 사용)
    mainCard: [
      {
        title: "",
        sub: "",
        chip: "",
        url: "",
        list: [
          { name: "요금제명", value: "선불 자유 데이터" },
          { name: "충전 금액", value: "10,000원" },
          { name: "충전 날짜", value: "2025. 05. 05" },
          { name: "충전 종류", value: "추가/금액 충전" },
          { name: "충전 기간", value: "-" },
          { name: "결제 방법", value: "계좌이체/우리은행/김*닷" },
        ],
      },
    ],
  },
  // 필요한 만큼 로밍 패스 정보를 추가합니다.
]);

const linksArray = [
  { title: "선불 요금제 이용기간 안내", link: "/" },
  { title: "선불 요금제 충전내역 보기", link: "/" },
];

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/sc/page-al-my-03-200.scss" as *;
</style>
