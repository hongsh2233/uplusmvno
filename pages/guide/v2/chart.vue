<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">chart</div>

      <div class="section" style="background-color: #fff;">
        <h3 class="tit02">Bar</h3>
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
      </div>
      <div class="section">
        <h3 class="tit02">circle</h3>
        <li v-for="(data, idx) in usageData" :key="idx">
          <ChartCircle :usageInfo="data" />
        </li>
      </div>
    </div> <!-- // content -->
  </div> <!-- // container -->

</template> 

<script setup>
  import ChartBar from '@/components/v2/chart/ChartBar.vue'
  import ChartCircle from '@/components/v2/chart/ChartCircle.vue'
  
  const emit = defineEmits(['setLayout']);
  const layout = reactive({ header: 'sub', footer: '', title: '', floatMenu: '', });
  

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


  onMounted(() => {
    emit('setLayout', layout);
  });

</script>
<style>
</style>