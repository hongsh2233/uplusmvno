<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>


      <div class="section">
        <h3 class="tit02">회원탈퇴 완료</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_MY08PO01" @click="this.$emit('openAlert', ['MY08PO01', 'btn_MY08PO01', 101]);">Alert</button>
        </div>
      </div>

      <!-- 추가 ; 23/11/17 -->
      <div class="section">
        <h3 class="tit02">회원탈퇴 안내</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_MY08PO01B" @click="this.$emit('openAlert', ['MY08PO01B', 'btn_MY08PO01B', 101]);">Alert</button>
        </div>
      </div>
      <!-- //추가 ; 23/11/17 -->


    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-MY08-PO01',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '회원탈퇴 완료' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    // this.$emit('openAlert', ['MY08PO01', 'btn_MY08PO01', 101]);
  },
}
</script>
