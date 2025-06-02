<template>
  <div class="AL-MY-02-004">
    <div class="container">
      <div class="content" id="content">
        <h2 class="title_nav">{{ layout.title }}</h2>

        <div class="crp_wrap">
          <!-- LNB -->
          <PcLnb :currentLink="'/sc/AL-MY-02-004'" />
          <!-- // LNB -->

          <!-- contents -->
          <div class="crp_r">
            <h2 class="pc-title">{{ layout.title }}</h2>
            <!-- 내 정보 메뉴 -->
            <MyInfoMenu />
            <!-- // 내 정보 메뉴 -->

            <!-- 이용 중인 로밍 요금제에요 -->
            <div class="content-item">
              <div class="content-inner">
                <div class="cont-head title-main">
                  <h3 class="cont-title-main">
                    <b class="txt-primary">이용</b> 중인<br class="mobile_hide" />
                    로밍 요금제에요
                  </h3>
                  <div class="roaming-status-ready">해외 로밍 시작 전이에요</div>
                </div>
                <CardGroup :card-object="cardObject1" :dataSelectList="dataSelectList" @onClickChip="onClickHandler" />
              </div>
            </div>
            <!-- 이용 중인 로밍 요금이 없을 경우 -->
            <div class="content-item">
              <div class="content-inner">
                <div class="cont-head title-main">
                  <h3 class="cont-title-main">
                    <b class="txt-primary">이용</b> 중인<br class="mobile_hide" />
                    로밍 요금제에요
                  </h3>
                </div>
                <MessageResult :description="'이용 중인 로밍 요금제가 없어요'" />
                <div class="btn-area join-btn-wrap">
                  <button type="button" class="btn-rounded btn-line">로밍 부가서비스 가입하기</button>
                </div>
              </div>
            </div>
            <!-- //이용 중인 로밍 요금이 없을 경우 -->
            <!-- //이용 중인 로밍 요금제에요 -->

            <!-- 실시간 데이터 사용량 -->
            <!-- 2025-05-21 1747733504 (정C) 사용기간 추가 및 차트 색상 분가 처리로 인한 인라인 스크립트 추가  -->
            <div class="content-item has-chart">
              <div class="content-inner">
                <div class="cont-head">
                  <h4 class="cont-title">실시간 데이터 사용량</h4>
                  <p class="usage-period-info">2025.08.01 10:30~2025.08.02 10:30</p>
                </div>
                <Accodian :isExpanded="true" readonly>
                  <template #content>
                    <ul class="chart-list">
                      <!-- 24.12.02 제공량 없는 케이스 추가 -->
                      <li v-for="(item, index) in mockupDatas1" :key="index">
                        <p class="bar-title">
                          {{ item.title }}
                          <strong class="use" v-if="item.noneProvided">{{ item.data1 }} 사용</strong>
                          <strong class="max" v-else-if="item.data0 !== '무제한'">총 {{ item.data0 }} 제공</strong>
                          <strong class="max" v-else>무제한</strong>
                        </p>
                        <div class="bar-progress" v-if="String(item.percent) !== ''">
                          <span
                            class="progress data"
                            :class="{
                              unlimited: item.data0 == '무제한',
                              'roaming-type-bar-2': item.title === '테더링 데이터',
                            }"
                            :style="{ width: `${item.percent}%` }"
                          ></span>
                        </div>
                        <div class="bar-value" v-if="!item.noneProvided && !item.isReady">
                          <span class="use">
                            <b v-if="item.over">초과</b>
                            {{ item.data1 }} 사용
                          </span>
                          <span class="remain"
                            >{{ item.data2 }} <span v-if="item.data2 !== '기본제공'">남음</span></span
                          >
                        </div>
                        <div class="bar-value" v-else>
                          <span class="use"> 요금제 시작 대기 중 </span>
                        </div>
                      </li>
                      <!--// 24.12.02 제공량 없는 케이스 추가 -->
                    </ul>
                    <ul class="text-list bull">
                      <li>데이터 소진 시, 제한된 속도로 이용 가능해요</li>
                      <li>마지막 사용일이 2025.07.01이에요</li>
                    </ul>
                  </template>
                </Accodian>
              </div>
            </div>
            <!-- //2025-05-21 1747733504 (정C) 사용기간 추가 및 차트 색상 분가 처리로 인한 인라인 스크립트 추가  -->
            <!-- //실시간 데이터 사용량 -->

            <!-- 현재까지 사용하신 로밍 요금은 -->
            <div class="content-item">
              <div class="content-inner">
                <div class="cont-head title-main">
                  <h3 class="cont-title-main">
                    현재까지 사용하신<br class="pc_hide" />
                    로밍 요금은<br class="mobile_hide" />
                    <b class="txt-primary">51,660원</b>이에요
                  </h3>
                </div>
                <div class="cont-head">
                  <h3 class="cont-title">상세 내역</h3>
                </div>
                <CardGroup :card-object="cardObject2" :dataSelectList="dataSelectList" @onClickChip="onClickHandler" />
              </div>
            </div>
            <!-- //현재까지 사용하신 로밍 요금은 -->

            <!-- 이용 중인 부가서비스 -->
            <div class="content-item">
              <div class="content-inner">
                <div class="cont-head title-main">
                  <h3 class="cont-title-main">이용 중인 부가서비스</h3>
                </div>
                <!-- 청구 정보-->
                <CardGroup
                  class="card-group-type-line"
                  :card-object="cardObject3"
                  :dataSelectList="dataSelectList"
                  @onClickChip="onClickHandler"
                />
              </div>
            </div>

            <!--  이용 중인 부가서비스가 없을 경우 -->
            <div class="content-item">
              <div class="content-inner">
                <div class="cont-head title-main">
                  <h3 class="cont-title-main">이용 중인 부가서비스</h3>
                </div>
                <MessageResult :description="'이용 중인 로밍 부가서비스가 없어요'" />

                <div class="btn-area join-btn-wrap">
                  <button type="button" class="btn-rounded btn-line">로밍 부가서비스 가입하기</button>
                </div>
              </div>
            </div>
            <!-- // 이용 중인 부가서비스가 없을 경우 -->
            <!-- //이용 중인 부가서비스 -->

            <!-- 이동 링크 목록 -->
            <ShortcutMenu :links="linksArray" />
            <!--// 이동 링크 목록 -->

            <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
              <template #content>
                <ul class="text-list bull">
                  <li>방문한 국가가 확인되지 않으면 고객센터(1234-1234)로 연락해 주세요</li>
                  <li>음성 통화 요금은 실제 청구 금액과 다를 수 있으니 참고해 주세요</li>
                  <li>
                    해외 통신사업자에게 받은 사용 자료를 기준으로 요금을 계산하기 때문에 해외로밍 이용일로부터 1~2개월이
                    지난 후에 청구서를 받을 수 있어요. 이용 기간에 따라 두 달에 걸쳐 청구될 수 있으니 양해해 주세요
                  </li>
                </ul>
              </template>
            </Accodian>
          </div>
          <!-- // contents -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LayoutOptions } from "@/types/layout";
import PcLnb from "@/components/v2/common/PcLnb.vue";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu.vue";
import ShortcutMenu from "@/components/v2/common/ShortcutMenu.vue";
import CardGroup from "@/components/v2/common/CardGroupRoaming.vue";
import Accodian from "@/components/v2/common/Accodian.vue";

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: "",
  floatMenu: "",
  title: "로밍 이용 내역",
  wrapClass: "selfcare roaming",
});

/**
 * @description: "요금제 시작 대기 중"일 경우 > isReady : true
 */

/* 2025-05-20 1747733504 (정C) 테더링 데이터 케이스 추가 */
const mockupDatas1 = [
  {
    title: "기본 제공 데이터",
    data0: "8GB",
    data1: "4GB",
    data2: "4GB",
    percent: 90,
    over: false,
    noneProvided: false,
    isReady: false,
  },
  {
    title: "테더링 데이터",
    data0: "8GB",
    data1: "4GB",
    data2: "4GB",
    percent: 90,
    over: false,
    noneProvided: false,
    isReady: false,
  },
];

const linksArray = [{ title: "과거 로밍 이용 내역 보러 가기", link: "/" }];

// 청구/납부변경 정보 목업 데이터
const dataSelectList = ref([
  { value: 0, name: "납부 방법 변경", url: "/sc/AL-MY-04-002" },
  { value: 1, name: "결제일 변경", url: "/sc/AL-MY-04-003" },
  { value: 2, name: "청구서 받는 방법 변경", url: "/sc/AL-MY-03-004" },
]);

// 청구 정보 목업 데이터
const cardObject = ref([
  {
    title: "로밍패스 8GB",
    sub: "",
    chip: [
      {
        name: "변경",
        value: 1,
        url: null,
      },
      {
        name: "해지",
        value: 2,
        url: null,
      },
    ],
    list: [
      { name: "가입일", value: "2004.06.30" },
      { name: "방문 국가", value: "미국" },
      { name: "이용 시작일", value: "2025.08.01 10:30" },
      { name: "종료 예정일", value: "2025.08.06 10:30" },
      { name: "금액", value: "44,000원", description: "(부가세 포함)", class: { list: "has-description" } },
    ],
  },
]);
const cardObject1 = ref([
  {
    title: "로밍패스 8GB",
    sub: "",
    chip: [
      {
        name: "변경",
        value: 1,
        url: null,
      },
      {
        name: "해지",
        value: 2,
        url: null,
      },
    ],
    list: [
      { name: "가입일", value: "2004.06.30" },
      { name: "방문 국가", value: "미국" },
      { name: "이용 시작일", value: "2025.08.01 10:30" },
      { name: "종료 예정일", value: "2025.08.06 10:30" },
      { name: "금액", value: "44,000원", description: "(부가세 포함)", class: { list: "has-description" } },
    ],
  },
]);

const cardObject2 = ref([
  {
    list: [
      { name: "국제발신", value: "192원" },
      { name: "사용일수/건수/량", value: "2일/1건", class: { list: "sub-value" } },
      { name: "SMS", value: "900원" },
      { name: "사용일수/건수/량", value: "6건", class: { list: "sub-value" } },
      { name: "로밍패스 13GB", value: "2,200원" },
      { name: "사용일수/건수/량", value: "8건", class: { list: "sub-value" } },
      { name: "부가세", value: "2,745원" },
      { name: "총 이용금액", value: "25,830원", class: { list: "total-value" } },
    ],
  },
]);

const cardObject3 = ref([
  {
    title: "로밍 안내 방송1",
    sub: "",
    chip: [
      {
        name: "해지",
        value: 2,
        url: null,
      },
    ],
    list: [{ name: "가입일", value: "2004.06.30" }],
  },
  {
    title: "로밍 안내 방송2",
    sub: "",
    chip: [
      {
        name: "해지",
        value: 2,
        url: null,
      },
    ],
    list: [{ name: "가입일", value: "2004.06.30" }],
  },
  {
    title: "로밍 안내 방송3",
    sub: "",
    chip: [
      {
        name: "해지",
        value: 2,
        url: null,
      },
    ],
    list: [{ name: "가입일", value: "2004.06.30" }],
  },
]);

const onClickHandler = (val?: string | number) => {
  console.log(val);
};
onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/pages/sc/page-al-my-02-004.scss" as *;
</style>
