<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info"></div>
      <div class="content-item">
        <div class="content-inner">
          <div class="cont-head">
            <h3 class="cont-title">tab - normal</h3>
          </div>
          <Tab :titles="['tab1', 'tab2']">
            <template #content1>
              content1
            </template>
            <template #content2>
              content2
            </template>
          </Tab>
        </div>
      </div>

      <div class="section">
        <h3 class="cont-title">tab - custom</h3>
        <small>:tabType="커스텀" (기본 normal)</small>
         <!-- 탭 컨텐츠 -->
        <Tab :titles="['title1', 'title2', 'title3']" :tabType="''">
          <template #content1>
            제휴카드 할인내역은 표기되지 않으며, 카드사 이용요금 명세서에서 확인하시기 바랍니다.제휴카드 할인내역은 표기되지 않으며, 카드사 이용요금 명세서에서 확인하시기 바랍니다.
          </template>
          <template #content2>
            제휴카드 신청 고객은 해당 카드로 납부 방법을 변경하셔야 할인이 적용됩니다.제휴카드 신청 고객은 해당 카드로 납부 방법을 변경하셔야 할인이 적용됩니다.
          </template>
          <template #content3>
            요금제를 변경하신 경우, 실시간 잔여량은 요금제를 변경한 다음 날 부터 정상적으로 표시됩니다.요금제를 변경하신 경우, 실시간 잔여량은 요금제를 변경한 다음 날 부터 정상적으로 표시됩니다.
          </template>
        </Tab>
        <!--// 탭 컨텐츠 -->
      </div>

        
    </div> <!-- // content -->
  </div> <!-- // container -->

</template>

<script setup>
  import Tab from "@/components/v2/common/Tab";

  const emit = defineEmits(['setLayout']);

  const layout = reactive({ header: 'sub', footer: '', title: '', floatMenu: '', });

  onMounted(() => {
    emit('setLayout', layout);
  });
</script>
<style scoped>

</style>