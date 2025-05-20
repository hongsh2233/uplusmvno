<template>
  <!-- 원형 그래프 -->
  <div class="circle-graph-item">  
    <div class="circle-graph">
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle class="graph-bar bg" cx="50" cy="50" r="45" stroke="#EEE" stroke-width="10"/>
        <circle class="graph-bar" ref="circleRef" cx="50" cy="50" r="45" :stroke="strokeColor" stroke-linecap="round" stroke-width="10" style="stroke-dasharray: 282.74; stroke-dashoffset: 282.74;" />
        <defs>
        <!-- <linearGradient id="unlimited_plan" x1="12.5" y1="-2.5" x2="90" y2="100" gradientUnits="userSpaceOnUse"> -->
        <linearGradient id="unlimited_plan" x1="12.5" y1="100" x2="90" y2="-2.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E6E6E6"/><stop offset="0.5" stop-color="#A6A6A6"/><stop offset="1" stop-color="#E6E6E6"/>
        </linearGradient>
        </defs>
      </svg>
    </div>
    <!--// 원형 그래프 -->
    <p class="mydata-amount-tit">{{ usageInfo.type }}</p>
    <div class="mydata-labels">
      <p class="mydata-label-used">
        {{ usageData.usedDisplay }}
        <span class="pc_hide">사용</span>
      </p>
      <p class="mydata-label-total" v-if="usageInfo.total !== Infinity">
        {{ usageData.totalDisplay }}
      </p>
      <p class="mydata-label-total" v-else>무제한</p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    usageInfo: {
      type: Object,
      default: () => ({
        type: '',
        color: '',
        used: 0,
        total: 0 | 'Infinity',
        unit: ''
      })
    },
  });

  //음성일 경우 초 -> mm분 ss초
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    if (remainingSeconds === 0) return `${minutes}분`;
    return `${minutes}분 ${remainingSeconds}초`;
  }

  const usageData = computed(() => {
    const { used, total, type, unit } = props.usageInfo;

    const formatDisplay = (value) => 
      type === "음성" && unit === "초" ? formatTime(value) : `${value}${unit}`;

    return {
      usedDisplay: formatDisplay(used),
      totalDisplay: formatDisplay(total),
    };
  });

  //circle graph drow
  const circleRef = ref(0);
  const strokeColor = ref(props.usageInfo.total === Infinity ? 'url(#unlimited_plan)' : props.usageInfo.color);

  const calcPercentage = (part, total) => {
    if (total === Infinity) return 1;
    return part > total ? 1 : (part / total).toFixed(6);
  }

  const circleRadius = (ref) => {
    const radius = ref.value.getAttribute('r');
    const circumference = 2 * Math.PI * radius;

    return circumference.toFixed(6);
  }
  
  const circleDrow = () => {
    circleRef.value.style.strokeDasharray = circleRadius(circleRef);

    const percent = calcPercentage(props.usageInfo.used, props.usageInfo.total);
    const pathLength = circleRadius(circleRef) - (circleRadius(circleRef) * percent)

    circleRef.value.style.strokeDashoffset = pathLength;
  }

  onMounted(() => {
    circleDrow()
  });

</script>