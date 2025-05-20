<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">공통</h2>

      <div class="section">
        <button type="button" class="btn md c03" id="btn_CM09PO00B" @click="this.$emit('openAlert', ['CM09PO00B', 'btn_CM09PO00B', 101]);">가입신청 프로세스 이탈 안내</button>
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->
  
</template>
  
<script>
export default {
  name: 'ALFM-CM09-PG00',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '공통' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    this.$emit('openAlert', ['CM09PO00', 'btn_CM09PO00', 101]);
  },
}
</script>
