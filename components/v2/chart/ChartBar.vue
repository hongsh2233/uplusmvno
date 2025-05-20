<template>
  <div class="bar-wrap" :class="{more: graph.labels.length > 3}">
    <span class="average-label" v-if="averageInfo">
      평균 사용량 
      <b class="txt-black">
        {{ calcAverage(graph.dataValues).average }}{{ graph.unit }}
      </b>
    </span>
    <div class="bar-chart" ref="barChart">
      <div class="bar-item" 
        v-for="(label, idx) in graph.labels" 
        :style="{height: height(idx) + '%'}"
        :class="isMax(idx)"
      >
        <span class="annotation">{{ `${annotation(idx)}${graph.unit}` }}</span>
        <span class="bar-label">{{ label }}</span>
      </div>
      <span 
        v-if="averageInfo"
        :style="{ bottom: `${percentage}%` }"
        class="average-bar"
      >
      </span>
    </div>
    <!-- <p class="legend">{{ props.legend }}</p> -->
  </div>
</template>

<script setup>
  const props = defineProps({
    averageInfo: false,
    graph: {
      type: Object,
      default: () => ({
        legend:'',
        labels: [],
        unit: '',
        dataValues: [],
      })
    }
  });

  const maxValue = computed(() => {
    return Math.max(...props.graph.dataValues);
  });

  const height = (idx) => {
    if (props.graph.dataValues[idx] !== undefined && maxValue.value > 0) {
      return (props.graph.dataValues[idx] / maxValue.value) * 100;
    }
    return 0;
  };
  const isMax = (idx) => {
    if (props.graph.dataValues[idx] !== undefined && props.graph.dataValues[idx] === maxValue.value) {
      return 'max'
    }
  }
  const annotation = (idx) => {
    if (props.graph.dataValues[idx] !== undefined) {
      return `${props.graph.dataValues[idx]}`
    }
  }

  //평균 사용량
  const percentage = ref(0);
  
  const calcAverage = (values) => {
    const total = values.reduce((sum, value) => sum + value, 0);
    const average = Math.round(total / values.length);
    const maxValue = Math.max(...values);
    percentage.value = maxValue ? Math.round((average / maxValue) * 100) : 0;

    return { average, percentage };
  };


  onMounted(() => {

  })

</script>