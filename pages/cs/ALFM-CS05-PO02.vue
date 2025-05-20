<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>
      

      <div class="section">
        <h3 class="tit02">등록 완료 - 미로그인 Case</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_CS05PO02" @click="this.$emit('openAlert', ['CS05PO02', 'btn_CS05PO02', 101]);">Alert</button>
        </div>
      </div>
      <div class="section">
        <h3 class="tit02">등록 완료 - 로그인 Case</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_CS05PO02B" @click="this.$emit('openAlert', ['CS05PO02B', 'btn_CS05PO02B', 101]);">Alert</button>

        </div>
      </div>      


    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-CS05-PO02',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub', footer: 'none', floatMenu: 'none', title: '1:1 문의하기 > 등록 > 완료' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>