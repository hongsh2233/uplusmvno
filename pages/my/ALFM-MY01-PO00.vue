<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      

      <div class="section">
        <h3 class="tit02">요금제 가입 이어하기 안내</h3>

        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_MY01PO00" @click="this.$emit('openAlert', ['MY01PO00', 'btn_MY01PO00', 101]);">Alert</button>
        </div>
      </div>



    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-MY01-PO00',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub', footer: 'none', floatMenu: 'none', title: '마이페이지' },
      acd: [],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

  }
}
</script>