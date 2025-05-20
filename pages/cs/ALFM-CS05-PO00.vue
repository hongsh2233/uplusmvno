<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>
      

      <div class="section">
        <h3 class="tit02">인증번호 발송 안내</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_CS05PO00" @click="this.$emit('openAlert', ['CS05PO00', 'btn_CS05PO00', 101]);">Alert</button>
        </div>
      </div>
      <div class="section">
        <h3 class="tit02">고객명 입력 안내</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_CS05PO00B" @click="this.$emit('openAlert', ['CS05PO00B', 'btn_CS05PO00B', 101]);">Alert</button>
        </div>
      </div>
      <div class="section">
        <h3 class="tit02">휴대폰 번호 입력 안내</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_CS05PO00C" @click="this.$emit('openAlert', ['CS05PO00C', 'btn_CS05PO00C', 101]);">Alert</button>
        </div>
      </div>
      <div class="section">
        <h3 class="tit02">인증 완료 안내</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_CS05PO00D" @click="this.$emit('openAlert', ['CS05PO00D', 'btn_CS05PO00D', 101]);">Alert</button>
        </div>
      </div>
      <div class="section">
        <h3 class="tit02">인증 번호 불일치 안내</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_CS05PO00E" @click="this.$emit('openAlert', ['CS05PO00E', 'btn_CS05PO00E', 101]);">Alert</button>
        </div>
      </div>
      


    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-CS05-PO00',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub', footer: 'none', floatMenu: 'none', title: '1:1 문의하기 > 본인인증' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>