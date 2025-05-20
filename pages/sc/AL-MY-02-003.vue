<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-02-003'" />
        <!-- // LNB -->

        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>
          <!-- 내 정보 메뉴 -->
          <MyInfoMenu />
          <!-- // 내 정보 메뉴 -->
          <div class="content-item">
            <div class="content-inner">
              <div class="cont-head title-main">
                <h3 class="cont-title-main">
                  <b class="txt-primary">최근 3개월</b>의 사용량을<br />
                  알려드려요
                </h3>
                <span class="title-exp">2024.07.01 ~ 2024.07.30</span>
              </div>

              <!-- 24.10.30 디자인 수정 반영 -->
              <div
                class="chart-list-warp average-wrap"
                v-for="(data, idx) in myDataMockup"
                :key="idx"
              >
                <div class="cont-head">
                  <h3 class="cont-title">{{ data.name }}</h3>
                </div>
                <ChartBar :graph="data.graph" :averageInfo="true" />
              </div>
              <!--// 24.10.30 디자인 수정 반영 -->

              <ul class="text_list bull">
                <li>
                  SMS/LMS/MMS/첨부파일을 포함한 전체 사용<br class="pc_hide" />
                  금액이며,<br class="pc_show" /> 기본 제공량도 포함된 금액입니다.
                </li>
              </ul>
            </div>
          </div>
          <div class="content-item">
            <div class="content-inner">
              <Tab :titles="['요일별', '시간대별']">
                <template #content1>
                  <ChartBar :graph="data1_1" />
                </template>
                <template #content2>
                  <ChartBar :graph="data1_2" />
                </template>
              </Tab>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script setup>
import PcLnb from "@/components/v2/common/PcLnb";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu";
import ChartBar from "@/components/v2/chart/ChartBar";
import Tab from "@/components/v2/common/Tab";

const emit = defineEmits(["setLayout"]);
const layout = reactive({ header: "sub", footer: "", title: "월별 사용량", floatMenu: "none" });

const myDataMockup = ref([
  {
    name: "데이터",
    graph: {
      legend: "최근 3개월 데이터 사용량",
      labels: ["5월", "6월", "7월"],
      unit: "MB",
      dataValues: [20, 463.9, 161.1],
    },
  },
  {
    name: "음성",
    graph: {
      legend: "최근 3개월 음성통화 사용량",
      labels: ["5월", "6월", "7월"],
      unit: "분",
      dataValues: [70, 10, 140],
    },
  },
  {
    name: "문자",
    graph: {
      legend: "최근 3개월 문자 메세지 사용량",
      labels: ["5월", "6월", "7월"],
      unit: "건",
      dataValues: [5, 6, 1],
    },
  },
]);

const data1_1 = ref({
  legend: "3개월 평균 사용량 정보",
  labels: ["일", "월", "화", "수", "목", "금", "토"],
  unit: "%",
  dataValues: [15, 15, 30, 5, 20, 5, 13],
});
const data1_2 = ref({
  legend: "3개월 평균 사용량 정보",
  labels: ["00-06시", "06-12시", "12-18시", "18-24시"],
  unit: "%",
  dataValues: [10, 19, 15, 57.31],
});

onMounted(() => {
  emit("setLayout", layout);
});
</script>
