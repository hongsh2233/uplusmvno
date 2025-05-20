<template>
  
	<div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">Accordion - default</h3>
        <ul>
          <li>
            <strong>*title</strong>
            <p>title="title" / &lt;template #content&gt;</p>
            <br/>
          </li>
          <li>
            <strong>펼침상태</strong>
            <p>isExpanded: true / false</p>
            <br/>
          </li>
        </ul>

        <!-- <GuideView :config="accordionConfig" /> -->

        <div class="content-item">
          <div class="content-inner">
            <Accodian :isExpanded="true">
              <template #title>
                <div class="cont-head">
                  <h4 class="cont-title">타이틀</h4>
                </div>
              </template>
              <template #content>
                <span>**content</span>
              </template>
            </Accodian>
          </div>
        </div>
      </div>

      <div class="section">
        <h3 class="tit02">Accordion - class: acco-notice</h3>
        <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
          <template #content>
            <ul class="text-list bull">
              <li>제휴카드 할인내역은 표기되지 않으며, 카드사 이용요금 명세서에서 확인하시기 바랍니다</li>
              <li>
                제휴카드 신청 고객은 해당 카드로 납부 방법을 변경하셔야 할인이 적용됩니다
                <p><NuxtLink class="txt-link orange">납부 방법 변경하기</NuxtLink></p>
              </li>
              <li>요금제를 변경하신 경우, 실시간 잔여량은 요금제를 변경한 다음 날 부터 정상적으로 표시됩니다</li>
            </ul>
          </template>
        </Accodian>
      </div>

      <div class="section">
        <h3 class="tit02">Accordion - class: acco-details</h3>
        <Accodian styleClass="acco-details">
          <template #title>
            <p class="acco-arrow">휴대폰 이용 내역</p>
            <b class="txt-orange"> 9,546원</b>
          </template>
          <template #content>
            <p style="margin-top: 20px;"><small>24.09.09 디자인 없음</small></p>
          </template>
        </Accodian>
      </div>
      
    </div> <!-- // content -->
	</div> <!-- // container -->

</template>

<script setup>
  import Accodian from "@/components/v2/common/Accodian";

  const emit = defineEmits(['setLayout']);
  const layout = reactive({ header: 'sub', footer: '', title: '', floatMenu: '', });

  const accordionConfig = {
    component: Accodian,
  };

  onMounted(() => {
    emit('setLayout', layout);
  });

</script>