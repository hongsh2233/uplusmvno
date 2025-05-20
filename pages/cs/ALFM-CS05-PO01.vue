<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>
      

      <div class="section">
        <h3 class="tit02">이메일 주소 확인</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_CS05PO01" @click="this.$emit('openAlert', ['CS05PO01', 'btn_CS05PO01', 101]);">Alert</button>
        </div>
      </div>
      <div class="section">
        <h3 class="tit02">문의 등록 확인</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_CS05PO01B" @click="this.$emit('openAlert', ['CS05PO01B', 'btn_CS05PO01B', 101]);">Alert</button>
        </div>
      </div>      


    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-CS05-PO01',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub', footer: 'none', floatMenu: 'none', title: '1:1 문의하기 > 등록 > 등록확인' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>