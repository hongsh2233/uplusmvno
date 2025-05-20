<template>
  <div class="progress-container top">
    <div class="progress-bar" :style="{ width: computedProgress + '%' }"></div>
  </div>
</template>

<script setup>
  const props = defineProps({
    progress: {
      type: Number,
      default: null // 직접 진행률 입력
    },
    step: {
      type: Object,
      default: () => ({ total: 10, current: 1 }) // 총 스텝 수, 현재 스텝
    }
  });

const computedProgress = computed(() => {
  if (props.progress !== null) {
    return props.progress;
  }
  return (props.step.current / props.step.total) * 100;
});

</script>