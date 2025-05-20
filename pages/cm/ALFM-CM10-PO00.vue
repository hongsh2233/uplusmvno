<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">공통</h2>

      <!-- 삭제 23/11/15 -->
      <!-- <div class="section">
        <button type="button" class="btn md c03" id="btn_CM10PO00" @click="this.$emit('openAlert', ['CM10PO00', 'btn_CM10PO00', 101]);">가입신청 이어하기 안내</button>
      </div> --> <!-- // section -->

      <div class="section">
        <h3 class="tit02">요금제 가입안내</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_CM10PO00B" @click="this.$emit('openAlert', ['CM10PO00B', 'btn_CM10PO00B', 101]);">Alert</button>
        </div>
      </div>
      <div class="section">
        <h3 class="tit02">요금제 개통안내</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_CM10PO00C" @click="this.$emit('openAlert', ['CM10PO00C', 'btn_CM10PO00C', 101]);">Alert</button>
        </div>
      </div>


    </div> <!-- // content -->
  </div><!-- // container -->
  
</template>
  
<script>
export default {
  name: 'ALFM-CM10-PG00',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '공통' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    // this.$emit('openAlert', ['CM10PO00', 'btn_CM10PO00', 101]);
  },
}
</script>
