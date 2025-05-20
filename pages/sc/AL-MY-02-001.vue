<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-02-001'" />
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
                  오늘 기준으로 <b class="txt-primary">6일</b> 남았어요
                </h3>
                <span class="title-exp">2024.07.01 ~ 2024.07.30</span>
                <!-- 선불고객 일 때-->
                <div class="gray-box">
                  <p class="info-text wallet">충전 잔액 <b class="info-price">10,456원</b></p>
                </div>
                <!--// 선불고객 일 때-->
              </div>
              <ul class="mydata-amount">
                <!-- 24.10.30 원형 차트 디자인 변경 반영 -->
                <li v-for="(data, idx) in usageData" :key="idx">
                  <ChartCircle :usageInfo="data" />
                </li>
              </ul>
            </div>
          </div>
          <div class="content-item">
            <div class="content-inner">
              <Accodian :isExpanded="true">
                <template #title>
                  <div class="cont-head">
                    <h4 class="cont-title">데이터</h4>

                    <!-- 24.10.31 팝업 버튼 추가 -->
                    <button
                      type="button"
                      class="txt-link gray"
                      @click.stop="popState.tooltip = true"
                    >
                      데이터 소진 순서 안내
                    </button>
                  </div>
                </template>
                <template #content>
                  <ul class="chart-list">
                    <!-- 24.12.02 제공량 없는 케이스 추가 -->
                    <li v-for="(item, index) in mockupDatas1" :key="index">
                      <p class="bar-title">
                        {{ item.title }}
                        <strong class="use" v-if="item.noneProvided">{{ item.data1 }} 사용</strong>
                        <strong class="max" v-else-if="item.data0 !== '무제한'"
                          >총 {{ item.data0 }} 제공</strong
                        >
                        <strong class="max" v-else>무제한</strong>
                      </p>
                      <div class="bar-progress" v-if="item.percent !== ''">
                        <span
                          class="progress data"
                          :class="{ unlimited: item.data0 == '무제한' }"
                          :style="{ width: `${item.percent}%` }"
                        ></span>
                      </div>
                      <div class="bar-value" v-if="!item.noneProvided">
                        <span class="use">
                          <!-- 24.11.19 v0.97 수정: 사용량 초과 시 case 추가 -->
                          <b v-if="item.over">초과</b>
                          {{ item.data1 }} 사용
                        </span>
                        <span class="remain"
                          >{{ item.data2 }} <span v-if="item.data2 !== '기본제공'">남음</span></span
                        >
                      </div>
                    </li>
                    <!--// 24.12.02 제공량 없는 케이스 추가 -->
                  </ul>
                  <ul class="text-list bull">
                    <li>
                      기본 제공 데이터를 다 쓰면 최대 <span class="speed">1</span>Mbps 속도로 무제한
                      데이터가 제공됩니다.
                    </li>
                  </ul>
                </template>
              </Accodian>
            </div>
          </div>
          <div class="content-item">
            <div class="content-inner">
              <Accodian :isExpanded="true">
                <template #title>
                  <div class="cont-head">
                    <h4 class="cont-title">음성</h4>
                  </div>
                </template>
                <template #content>
                  <ul class="chart-list">
                    <!-- 24.12.02 제공량 없는 케이스 추가 -->
                    <li v-for="(item, index) in mockupDatas2" :key="index">
                      <p class="bar-title">
                        {{ item.title }}
                        <strong class="use" v-if="item.noneProvided">{{ item.data1 }} 사용</strong>
                        <strong class="max" v-else-if="item.data0 !== '무제한'"
                          >총 {{ item.data0 }} 제공</strong
                        >
                        <strong class="max" v-else>무제한</strong>
                      </p>
                      <div class="bar-progress" v-if="item.percent !== ''">
                        <span
                          class="progress voice"
                          :class="{ unlimited: item.data0 == '무제한' }"
                          :style="{ width: `${item.percent}%` }"
                        ></span>
                      </div>
                      <div class="bar-value" v-if="!item.noneProvided">
                        <span class="use">
                          <!-- 24.11.19 v0.97 수정: 사용량 초과 시 case 추가 -->
                          <b v-if="item.over">초과</b>
                          {{ item.data1 }} 사용
                        </span>
                        <span class="remain"
                          >{{ item.data2 }} <span v-if="item.data2 !== '기본제공'">남음</span></span
                        >
                      </div>
                    </li>
                    <!--// 24.12.02 제공량 없는 케이스 추가 -->
                  </ul>
                </template>
              </Accodian>
            </div>
          </div>
          <div class="content-item">
            <div class="content-inner">
              <Accodian :isExpanded="true">
                <template #title>
                  <div class="cont-head">
                    <h4 class="cont-title">문자 메세지</h4>
                  </div>
                </template>
                <template #content>
                  <ul class="chart-list">
                    <!-- 24.12.02 제공량 없는 케이스 추가 -->
                    <li v-for="(item, index) in mockupDatas3" :key="index">
                      <p class="bar-title">
                        {{ item.title }}
                        <strong class="use" v-if="item.noneProvided">{{ item.data1 }} 사용</strong>
                        <strong class="max" v-else-if="item.data0 !== '무제한'"
                          >총 {{ item.data0 }} 제공</strong
                        >
                        <strong class="max" v-else>무제한</strong>
                      </p>
                      <div class="bar-progress" v-if="item.percent !== ''">
                        <span
                          class="progress message"
                          :class="{ unlimited: item.data0 == '무제한' }"
                          :style="{ width: `${item.percent}%` }"
                        ></span>
                      </div>
                      <div class="bar-value" v-if="!item.noneProvided">
                        <span class="use">
                          <!-- 24.11.19 v0.97 수정: 사용량 초과 시 case 추가 -->
                          <b v-if="item.over">초과</b>
                          {{ item.data1 }} 사용
                        </span>
                        <span class="remain"
                          >{{ item.data2 }} <span v-if="item.data2 !== '기본제공'">남음</span></span
                        >
                      </div>
                    </li>
                    <!--// 24.12.02 제공량 없는 케이스 추가 -->
                  </ul>
                </template>
              </Accodian>
            </div>
          </div>

          <!-- 24.11.25 v0.98 링 추가 -->
          <div class="content-item">
            <div class="content-inner">
              <Accodian :isExpanded="true">
                <template #title>
                  <div class="cont-head">
                    <h4 class="cont-title">링</h4>
                  </div>
                </template>
                <template #content>
                  <ul class="chart-list">
                    <!-- 24.12.02 제공량 없는 케이스 추가 -->
                    <li v-for="(item, index) in mockupDatas4" :key="index">
                      <p class="bar-title">
                        {{ item.title }}
                        <strong class="use" v-if="item.noneProvided">{{ item.data1 }} 사용</strong>
                        <strong class="max" v-else-if="item.data0 !== '무제한'"
                          >총 {{ item.data0 }} 제공</strong
                        >
                        <strong class="max" v-else>무제한</strong>
                      </p>
                      <div class="bar-progress" v-if="item.percent !== ''">
                        <span
                          class="progress ring"
                          :class="{ unlimited: item.data0 == '무제한' }"
                          :style="{ width: `${item.percent}%` }"
                        ></span>
                      </div>
                      <div class="bar-value" v-if="!item.noneProvided">
                        <span class="use">
                          <b v-if="item.over">초과</b>
                          {{ item.data1 }} 사용
                        </span>
                        <span class="remain"
                          >{{ item.data2 }} <span v-if="item.data2 !== '기본제공'">남음</span></span
                        >
                      </div>
                    </li>
                    <!--// 24.12.02 제공량 없는 케이스 추가 -->
                  </ul>
                </template>
              </Accodian>
            </div>
          </div>
          <!--// 24.11.25 v0.98 링 추가 -->

          <!-- 이동 링크 목록 -->
          <!-- 후불목록 -->
          <!-- <ShortcutMenu :links="linksArray1"/> -->

          <!-- 선불목록 -->
          <ShortcutMenu :links="linksArray2" />
          <!--// 이동 링크 목록 -->

          <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
            <template #content>
              <!-- 24.11.01 내용 변경 -->
              <ul class="text-list bull">
                <!-- 24.11.19 v0.97 수정 -->
                <li>
                  알닷에서 제공하는 실시간 사용량은 참고용으로 사용 중인 파트너사 홈페이지와
                  일치하지 않을 수 있습니다.
                </li>
                <li>정확한 데이터는 해당 파트너사 홈페이지를 통해서 확인하시기 바랍니다.</li>
                <!--// 24.11.19 v0.97 수정 -->
                <li>서비스 혜택에 따라 지급된 추가 데이터는 합산되어 보여집니다.</li>
                <li>남은 사용량 표시는 시스템 전산반영으로 인해 지연될 수 있습니다.</li>
                <li>
                  요금제를 변경하신 경우, 실시간 잔여량은 요금제를 변경한 다음 날부터 정상적으로
                  표시됩니다.
                </li>
                <li>
                  월 중간에 가입 혹은 요금제 변경 시에는 요금 및 기본제공량이 날짜 계산되며, 초과
                  이용분에 대한 추가요금이 발생할 수 있습니다.
                </li>
                <li>
                  사용하신 서비스 종류에 따라 실시간 확인이 되지 않는 요금이 있으므로 청구요금과
                  차이가 있을 수 있습니다. (국제전화, 수신자부담, 해외로밍, 정보이용료 등은 실시간
                  조회불가로 제외되었음을 알려드립니다.)
                </li>
                <li>
                  제휴카드 할인내역은 표기되지 않으며, 카드사 이용요금 명세서에서 확인하시기
                  바랍니다.
                </li>
                <li>
                  제휴카드 신청 고객은 해당 카드로 납부 방법을 변경하셔야 할인이 적용됩니다.
                  <p>
                    <NuxtLink :to="'sc/AL-MY-04-002'" class="txt-link orange"
                      >납부 방법 변경하기</NuxtLink
                    >
                  </p>
                </li>
                <li>
                  타통신사 및 유선전화 통화도 기본제공으로 사용 가능합니다. (유선전화는
                  지역번호(02,031)와 인터넷전화(070)를 말합니다.)
                </li>
                <li>
                  영상통화는 동영상/부가 기본제공량이 1.66배 빨리 줄어듭니다. (부가전화란
                  전국대표번호(15xx,16xx),평생개인번호(0505), 주파수 공용통신(013) 등을 말합니다.)
                </li>
              </ul>
            </template>
          </Accodian>
        </div>

        <!-- 24.10.31 팝업 추가 -->
        <Popup
          title="데이터 소진 순서 안내"
          :isOpen="popState.tooltip"
          :popType="'alert-gray'"
          @update:isOpen="popState.tooltip = $event"
          @confirm="clickConfirm"
        >
          <ul class="policy-wrap">
            <li>
              ※ 기본 데이터 소진 순서<br />

              월 제공 데이터 -> 일 제공 데이터 -> Qos 제공<br />
              예) 월 11GB+ 일 2GB (3Mbps) 요금제 사용 시<br />

              월 11GB 소진 후 일 2GB 씩 소진하고 3Mbps 속도로 제공
            </li>
          </ul>

          <ul class="policy-wrap mgt12">
            <li>
              ※ 추가 데이터 소진 순서<br />
              Case 1) 기본 데이터 소진 전, 추가 데이터를 먼저 소진 합니다.<br />
              Case 2) 월 제공 데이터 소진 -> 일 제공 데이터를 소진 -> 추가 데이터 소진 후 Qos
              제공<br />
            </li>
          </ul>
        </Popup>

        <!-- // content -->
      </div>
    </div>
  </div>
  <!-- // container -->
</template>

<script setup>
import PcLnb from "@/components/v2/common/PcLnb";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu";
import ChartCircle from "@/components/v2/chart/ChartCircle";
import Accodian from "@/components/v2/common/Accodian";
import ShortcutMenu from "@/components/v2/common/ShortcutMenu";
import Popup from "@/components/v2/common/Popup";

const emit = defineEmits(["setLayout"]);
const layout = reactive({ header: "sub", footer: "", title: "실시간 사용량", floatMenu: "none" });

const usageData = ref([
  {
    type: "데이터",
    color: "#723ABA",
    used: 50.12,
    total: 120.5,
    unit: "GB",
  },
  {
    type: "음성",
    color: "#EE5380",
    used: 39459,
    total: Infinity,
    unit: "초",
  },
  {
    type: "문자",
    color: "#FF8265",
    used: 48,
    total: 500,
    unit: "건",
  },
]);

const mockupDatas1 = [
  {
    title: "월 기본 제공 데이터",
    data0: "1GB",
    data1: "899MB",
    data2: "0MB 남음",
    percent: 110,
    over: true,
    noneProvided: false,
  },
  {
    title: "데이터 프리덤",
    data0: "무제한",
    data1: "10GB",
    data2: "150GB 남음",
    percent: 100,
    over: false,
    noneProvided: false,
  },
  {
    title: "친구 추천 데이터",
    data0: "1GB",
    data1: "4GB",
    data2: "5GB",
    percent: 40,
    over: false,
    noneProvided: false,
  },
];
const mockupDatas2 = [
  {
    title: "영상/부가 통화",
    data0: "110분",
    data1: "40분",
    data2: "0분",
    percent: 100,
    over: true,
    noneProvided: false,
  },
  {
    title: "집/이동전화",
    data0: "무제한",
    data1: "70분 21초",
    data2: "기본제공",
    percent: 100,
    over: false,
    noneProvided: false,
  },
  {
    title: "영상/부가 통화",
    data0: "110분",
    data1: "11분",
    data2: "29분",
    percent: 20,
    over: false,
    noneProvided: false,
  },
];
const mockupDatas3 = [
  {
    title: "문자",
    data0: "",
    data1: "42건",
    data2: "",
    percent: "",
    over: false,
    noneProvided: true,
  },
  {
    title: "문자",
    data0: "500건",
    data1: "506건",
    data2: "기본제공",
    percent: 100,
    over: true,
    noneProvided: false,
  },
  {
    title: "문자",
    data0: "110건",
    data1: "2건",
    data2: "기본제공",
    percent: 20,
    over: false,
    noneProvided: false,
  },
];
const mockupDatas4 = [
  {
    title: "제공링",
    data0: "29,856건",
    data1: "2,863건",
    data2: "27,002건",
    percent: 30,
    over: false,
    noneProvided: false,
  },
];

//데이터 소진 순서 가이드
const popState = ref({
  tooltip: false, //휴대폰 등록 실패
});

const linksArray1 = [
  { title: "가입 정보 보기", link: "/" },
  { title: "휴대폰 등록하기", link: "/" },
];
const linksArray2 = [
  { title: "최근 3개월 사용량 보기", link: "/" },
  { title: "실시간 요금 보기", link: "/" },
  { title: "청구요금 확인하기", link: "/" },
];

const clickConfirm = () => {
  console.log("확인");
};

onMounted(() => {
  emit("setLayout", layout);
});
</script>
