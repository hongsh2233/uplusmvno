<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">Button & link</div>

      <div class="section">
        <h3 class="tit02">button - xs</h3>
        <button type="button" class="btn-rounded btn-xs">button</button>
        <button type="button" class="btn-rounded btn-xs outline">button outline</button>
        
      </div>
      <div class="section">
        <h3 class="tit02">button - md</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button type="button" class="btn-rounded">white</button>
          <button type="button" class="btn-rounded" disabled>white - disabled </button>
          <button type="button" class="btn-rounded primary">primary</button>
          <button type="button" class="btn-rounded primary" disabled>primary - disabled </button>
          <button type="button" class="btn-rounded btn-line">line</button>
        </div>
      </div>

      <div class="section">
        <h3 class="tit02">button wrap</h3>
        <div class="btn-area">
          <button type="button" class="btn-rounded">white</button>
        </div>
        <br/>
        <div class="btn-area">
          <button type="button" class="btn-rounded">white</button>
          <button type="button" class="btn-rounded primary">primary</button>
        </div>
        <br/>
        <div class="btn-area">
          <button type="button" class="btn-rounded white">white</button>
          <button type="button" class="btn-rounded btn-line">white</button>
          <button type="button" class="btn-rounded primary">primary</button>
        </div>
      </div>

      <div class="section">
        <h3 class="tit02">tooltip</h3>
        <button class="btn-tooltip">미납요금</button>
      </div>

    </div> <!-- // content -->
  </div> <!-- // container -->
</template>

<script setup>

  const emit = defineEmits(['setLayout']);

  const layout = reactive({ header: 'sub', footer: '', title: '', floatMenu: '', });

  onMounted(() => {
    emit('setLayout', layout);
  });
</script>
<style scoped>

</style>