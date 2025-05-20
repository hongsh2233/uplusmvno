<template>
  <div class="container deps4" @click="closeTooltip">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-06-001'" />
        <!-- // LNB -->

        <!-- contents -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>

          <div class="content-item">
            <div class="content-inner">
              <div class="cont-head title-main">
                <h3 class="cont-title-main">
                  분실 등록 및 해제<br />
                  빠르게 <strong class="txt-primary">신청</strong>하세요
                </h3>
              </div>
              <ul class="text-list bull text-list-content">
                <li>
                  분실 접수를 빠르게 신청하면 부가사용료 및 소액결제 등의 피해를 예방할 수 있어요.
                </li>
              </ul>

              <v-expansion-panels
                v-if="globalState.isLoggedIn"
                class="acd_wrap fraction"
                @click="onPanelChange(toggle)"
                v-model="toggle"
              >
                <v-expansion-panel class="acd_item ty02">
                  <div class="acd_title">
                    현재 분실 등록한 휴대폰(유심)이에요
                    <v-expansion-panel-title
                      ><em class="current">{{ currentPage }}</em
                      >/{{ cardObject.length }}</v-expansion-panel-title
                    >
                  </div>
                  <div class="acd_panel">
                    <div class="consent-container consent-inner">
                      <CardGroup :card-object="cardObject.slice(0, 1)">
                        <template #default="{ item }">
                          <div class="fl-ac">
                            <p v-html="item.value" />
                            <NuxtLink
                              to="AL-MY-05-005"
                              v-if="item.value === '미등록'"
                              class="btn-rounded chip"
                              >휴대폰 등록</NuxtLink
                            >
                          </div>
                        </template>
                      </CardGroup>
                    </div>

                    <v-expansion-panel-text>
                      <div class="consent-container consent-inner">
                        <CardGroup :card-object="cardObject.slice(1)">
                          <template #default="{ item }">
                            <div class="fl-ac">
                              <p v-html="item.value" />
                              <NuxtLink
                                to="AL-MY-05-005"
                                v-if="item.value === '미등록'"
                                class="btn-rounded chip"
                                >휴대폰 등록</NuxtLink
                              >
                            </div>
                          </template>
                        </CardGroup>
                      </div>
                    </v-expansion-panel-text>
                  </div>
                </v-expansion-panel>
              </v-expansion-panels>

              <div class="content-item item-nobox">
                <div class="btn-area">
                  <NuxtLink :to="'/sc/AL-MY-06-002'" class="btn-rounded btn-line"
                    >분실 등록/해제하기</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- 로그인 후 -->
          <div v-if="globalState.isLoggedIn" class="content-item">
            <div class="content-inner">
              <div class="cont-head">
                <h3 class="cont-title">휴대폰 정보 등록 상태</h3>
              </div>
              <ul class="text-list bull dividers">
                <li>
                  분실 신고를 하려면 내가 사용중인 휴대폰의 모델명과 일련번호가 등록돼 있어야 해요.
                  아직 미등록 휴대폰이 있다면, 지금 바로 휴대폰 정보를 등록해 주세요.
                </li>
                <li>알닷케어 미제공 회선의 경우, 휴대폰 정보를 알닷에서 등록할 수 없어요.</li>
              </ul>

              <div class="table ty04">
                <table>
                  <caption>
                    휴대폰정보
                  </caption>
                  <colgroup>
                    <col style="width: 33%" />
                    <col style="width: 33%" />
                    <col style="width: 34%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <td scope="col">
                        <div>
                          전체회선
                          <v-btn
                            id="tooltip0"
                            class="btn_tooltip"
                            :class="{ on: tooltip[0] }"
                            title="툴팁"
                            @click="tooltip[0] = !tooltip[0]"
                            >툴팁</v-btn
                          >
                          <v-tooltip
                            v-model="tooltip[0]"
                            activator="#tooltip0"
                            location="top"
                            offset="0"
                            scroll-strategy="close"
                            :open-on-hover="false"
                            no-click-animation
                            contained
                            class="v-tooltip-item"
                          >
                            <div class="tooltip_content">
                              알닷케어 미제공 파트너사의 회선과 선불 회선도 포함되었어요.
                            </div>
                          </v-tooltip>
                        </div>
                      </td>
                      <td scope="col">
                        휴대폰 정보<br class="pc_hide" />
                        등록
                      </td>
                      <td scope="col">
                        휴대폰 정보<br class="pc_hide" />
                        미등록
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>2건</strong></td>
                      <td><strong>3건</strong></td>
                      <td><strong>1건</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="consent-container consent-inner">
                <CardGroup :card-object="cardObject2">
                  <template #default="{ item }">
                    <div class="fl-ac">
                      <p>{{ item.value }}</p>
                      <NuxtLink
                        to="AL-MY-05-005"
                        v-if="item.value === '미등록'"
                        class="btn-rounded chip"
                        >휴대폰 등록</NuxtLink
                      >
                    </div>
                  </template>
                </CardGroup>
              </div>

              <div class="btn-area cnt">
                <button type="button" class="btn-circle more">더 볼래요</button>

                <button type="button" class="btn-circle fold">접을래요</button>
              </div>
            </div>
          </div>
          <!-- // 로그인 후 -->

          <div class="content-item">
            <div class="content-inner">
              <div class="cont-head">
                <h3 class="cont-title">휴대폰 분실 시 도움이 되는 알닷케어</h3>
              </div>
              <ul class="arrow-banner add-title">
                <li>
                  <NuxtLink :to="''" class="logo-60">
                    <img
                      class="banner-logo"
                      src="/images/v2/content/img_price_search.png"
                      alt="실시간 요금 조회 아이콘"
                    />
                    <span class="tit">실시간 요금 조회</span>
                    <span>휴대폰 요금의 변화가 있을지도 몰라요.</span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="''" class="logo-60">
                    <img
                      class="banner-logo"
                      src="/images/v2/content/img_stop_apply.png"
                      alt="일시정지 신청 아이콘"
                    />
                    <span class="tit">일시정지 신청</span>
                    <span>내 휴대폰을 사용할 수 없게 하세요.</span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <div class="content-item">
            <div class="content-inner">
              <div class="cont-head">
                <h3 class="cont-title">휴대폰 위치 찾기 서비스 안내</h3>
              </div>

              <ul class="text-list bull dividers">
                <li>
                  위치추적 서비스를 이용해서 내 휴대폰이 어디 있는지 확인하고 휴대폰 사용을 제어할
                  수 있어요.
                </li>
              </ul>

              <ul class="arrow-banner flex">
                <li>
                  <NuxtLink target="_blank" to="https://findmymobile.samsung.com/">
                    <img
                      class="banner-logo"
                      src="/images/v2/content/img_logo_samsung.png"
                      alt="삼성 디바이스 찾기 이미지"
                    />
                    <span
                      ><b class="txt-black">삼성 디바이스 찾기 서비스</b>로<br class="pc_hide" />
                      분실된 삼성 휴대폰을 찾아보세요.</span
                    >
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="no-link">
                    <img
                      class="banner-logo"
                      src="/images/v2/content/img_logo_icloud.png"
                      alt="애플 아이클라우드 이미지"
                    />
                    <span
                      ><b class="txt-black">애플 아이클라우드</b>에서 휴대폰과<br class="pc_hide" />
                      연결된 계정 비밀번호를 변경하세요.</span
                    >
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink target="_blank" to="https://www.google.com/android/find">
                    <img
                      class="banner-logo"
                      src="/images/v2/content/img_logo_google.png"
                      alt="구글 계정 위치추적 이미지"
                    />
                    <span
                      ><b class="txt-black">구글 계정 위치 추적</b>으로 분실된<br class="pc_hide" />
                      구글(안드로이드) 휴대폰을 찾아보세요.</span
                    >
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <div class="content-item">
            <div class="content-inner">
              <div class="cont-head">
                <h3 class="cont-title">분실물 보관센터 안내</h3>
              </div>
              <ul class="text-list bull dividers">
                <li>지하철이나 택시에 두고 내린 걸 누군가가 분실물 센터에 맡겼을 수 있어요.</li>
                <li>분실물을 조회해볼 수 있는 사이트에서 내 휴대폰을 찾아보세요.</li>
              </ul>
              <ul class="arrow-banner thumb-banner add-title">
                <li class="total-potal">
                  <NuxtLink target="_blank" to="https://www.lost112.go.kr/">
                    <span class="tit">경찰청 유실물 통합포털</span>
                    <span
                      >관할 경찰서에 분실신고 및 전국의 습득신고 된 휴대폰 정보를 조회할 수
                      있어요.</span
                    >
                    <img
                      class="banner-logo"
                      src="/images/v2/content/img_logo_police.png"
                      alt="삼성 디바이스 찾기 이미지"
                    />
                  </NuxtLink>
                </li>
                <li class="call-center">
                  <NuxtLink target="_blank" to="https://www.handphone.or.kr/">
                    <span class="tit">핸드폰 찾기 콜센터</span>
                    <span>전국 우체국에서 수집된 휴대폰을 보관했다 찾아주는 센터이에요.</span>
                    <img
                      class="banner-logo"
                      src="/images/v2/content/img_logo_handphone.png"
                      alt="애플 아이클라우드 이미지"
                    />
                  </NuxtLink>
                </li>
                <li class="traffic-lost-center">
                  <NuxtLink target="_blank" to="https://www.seoul.go.kr/v2012/find.html">
                    <span class="tit">서울시 대중교통 분실물 센터</span>
                    <span>대중교통(버스, 지하철 등)에서 분실한 물품을 확인할 수 있어요.</span>
                    <img
                      class="banner-logo"
                      src="/images/v2/content/img_logo_seoul.png"
                      alt="구글 계정 위치추적 이미지"
                    />
                  </NuxtLink>
                </li>
                <li class="taxi-lost-center">
                  <NuxtLink
                    target="_blank"
                    to="https://www.stj.or.kr/bbs/board.php?bo_table=sta03_02_2023"
                  >
                    <span class="tit">서울 택시 유실물 센터</span>
                    <span>서울 택시에서 분실한 물품을 확인할 수 있어요.</span>
                    <img
                      class="banner-logo"
                      src="/images/v2/content/img_logo_taxi.png"
                      alt="구글 계정 위치추적 이미지"
                    />
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
            <template #content>
              <ul class="text-list bull">
                <li>분실 등록과 일시정지를 함께 하면 더 안전합니다.</li>
                <li>
                  휴대폰과 유심(가입자 정보 저장) 카드에 저장되어 있는 T머니 또는 신용카드는 해당
                  기관에 별도로 신고하세요.
                </li>
                <li>
                  ‘분실 등록’ 서비스는 유심 이용 휴대폰 등록 (확정 기변) 후 이용하실 수 있습니다.
                </li>
              </ul>
            </template>
          </Accodian>

          <!-- // bottom_button -->
        </div>
        <!-- // contents -->
      </div>
    </div>
  </div>
</template>

<script setup>
import PcLnb from "@/components/v2/common/PcLnb";
import CardGroup from "@/components/v2/common/CardGroup";
import Accodian from "@/components/v2/common/Accodian";

import { useRouter } from "vue-router";

// 헤더 정보
const layout = ref({
  header: "sub",
  footer: "",
  floatMenu: "none",
  title: "휴대폰(유심) 분실 등록/해제",
});

// HOOK
const emit = defineEmits(["setLayout"]);
const router = useRouter();

//분실정보 목업
const cardObject = ref([
  {
    list: [
      { name: "휴대폰 번호", value: "010-12**26**" },
      { name: "분실 등록일", value: "2024.06.03" },
      { name: "휴대폰 등록 정보", value: "iPhone 12 Pro Max 256G<br />(언락,자급제)" },
      { name: "유심(개인정보) 카드 번호", value: "****************4601" },
    ],
  },
  {
    list: [
      { name: "휴대폰 번호", value: "010-12**25**" },
      { name: "분실 등록일", value: "2024.06.03" },
      { name: "휴대폰 등록 정보", value: "iPhone 12 Pro Max 256G<br />(언락,자급제)" },
      { name: "유심(개인정보) 카드 번호", value: "****************4601" },
    ],
  },
]);

const cardObject2 = ref([
  {
    list: [
      { name: "휴대폰 번호", value: "010-12**26**" },
      { name: "휴대폰 등록 정보", value: "미등록" },
    ],
  },
]);

const arrowLink = [
  { name: "실시간 요금 조회", url: "/sc/AL-MY-02-002" },
  { name: "일시정지 신청", url: "/sc/AL-MY-06-004" },
];

// accordion
const toggle = ref(false);
const currentPage = ref(1);

function onPanelChange(newIndex) {
  newIndex === undefined ? (currentPage.value = 1) : (currentPage.value = cardObject.value.length);
}

// tooltip
const tooltip = ref([false]);
function closeTooltip(event) {
  if (!event.target.closest(".btn_tooltip")) {
    tooltip.value = [false];
  }
}

// global state 임시
const globalState = reactive({
  isLoggedIn: true,
});

onMounted(() => {
  emit("setLayout", layout);
});
</script>
