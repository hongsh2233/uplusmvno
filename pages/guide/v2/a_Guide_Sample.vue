<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info"></div>

      <div class="section">
        <h3 class="tit02"></h3>

      </div>

    </div> <!-- // content -->
  </div> <!-- // container -->

</template>

<script setup>
  const emit = defineEmits(['setLayout']);

  const layout = reactive({ header: 'sub', footer: '', title: '제목', floatMenu: '', });

  onMounted(() => {
    emit('setLayout', layout);
  });
</script>

<style scoped>

</style>