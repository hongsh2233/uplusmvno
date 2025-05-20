<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info"></div>

      <div class="section">
        <h3 class="tit02"></h3> 
        <Datepicker/>
      </div>

    </div> <!-- // content -->
  </div> <!-- // container -->

</template>

<script setup>
  import Datepicker from "@/components/v2/common/Datepicker";

  const emit = defineEmits(['setLayout']);

  const layout = reactive({ header: 'sub', footer: '', title: '', floatMenu: '', });

  onMounted(() => {
    emit('setLayout', layout);
  });
</script>
<style scoped>

</style>