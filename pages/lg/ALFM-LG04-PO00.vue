<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">중복된 이메일이 없을 경우</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_LG04PO00" @click="this.$emit('openAlert', ['LG04PO00', 'btn_LG04PO00', 101]);">Alert</button>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">기존 계정 또는 탈퇴한 경우</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_LG04PO00B" @click="this.$emit('openAlert', ['LG04PO00B', 'btn_LG04PO00B', 101]);">Alert</button>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">가입된 회원정보가 있는 경우</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_LG04PO00C" @click="this.$emit('openAlert', ['LG04PO00C', 'btn_LG04PO00C', 101]);">Alert</button>
        </div>
      </div> <!-- // section -->



    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-LG04-PO00',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '회원가입 메인 > 정보입력' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>
