<template>
  <!-- [ALFM-PR02-PO01] 내게 맞는 요금제 case -->
  <ol class="progress_wrap" v-if="barInfo.type == 'ty01'">
    <li class="step on"><span>현재</span><span>1 단계</span></li>
    <li class="step"><span>현재</span><span>2 단계</span></li>
    <li class="step"><span>현재</span><span>3 단계</span></li>
    <li class="step"><span>현재</span><span>4 단계</span></li>
    <li class="step"><span>현재</span><span>5 단계</span></li>
  </ol>

  <!-- [ALFM-PR03-PG00] 가입유형 선택 case -->
  <ol class="progress_wrap" v-if="barInfo.type == 'ty02'">
    <li class="step on"><span>현재</span><span>1 단계</span></li>
    <li class="step"><span>현재</span><span>2 단계</span></li>
    <li class="step"><span>현재</span><span>3 단계</span></li>
    <li class="step"><span>현재</span><span>4 단계</span></li>
    <li class="step"><span>현재</span><span>5 단계</span></li>
    <li class="step"><span>현재</span><span>6 단계</span></li>
    <li class="step"><span>현재</span><span>7 단계</span></li>
    <li class="step"><span>현재</span><span>8 단계</span></li>
    <li class="step"><span>현재</span><span>9 단계</span></li>
    <li class="step"><span>현재</span><span>10 단계</span></li>
    <li class="step"><span>현재</span><span>11 단계</span></li>
    <li class="step"><span>현재</span><span>12 단계</span></li>
    <li class="step"><span>현재</span><span>13 단계</span></li>
  </ol>

  <ol class="progress_wrap" v-if="barInfo.type == 'ty03'">
    <li class="step" :class="{ on: barInfo.step === 1 }"><span>현재</span><span>1 단계</span></li>
    <li class="step" :class="{ on: barInfo.step === 2 }"><span>현재</span><span>2 단계</span></li>
    <li class="step" :class="{ on: barInfo.step === 3 }"><span>현재</span><span>3 단계</span></li>
    <li class="step" :class="{ on: barInfo.step === 4 }"><span>현재</span><span>4 단계</span></li>
    <li class="step" :class="{ on: barInfo.step === 5 }"><span>현재</span><span>5 단계</span></li>
  </ol>
</template>

<script>
export default {
  name: "ProgressBar",
  data() {
    return {
      // wide: false,
      // state: { compare: false, },
    };
  },
  props: {
    barInfo: Object,
  },
};
</script>
