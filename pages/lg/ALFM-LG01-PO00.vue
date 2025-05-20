<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">회원가입 안내</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_LG01PO00" @click="this.$emit('openAlert', ['LG01PO00', 'btn_LG01PO00', 101]);">Alert</button>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">사이트 이용 제한 안내</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_LG01PO00B" @click="this.$emit('openAlert', ['LG01PO00B', 'btn_LG01PO00B', 101]);">Alert</button>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">소셜회원 안내 팝업</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_LG01PO00S" @click="this.$emit('openAlert', ['LG01PO00S', 'btn_LG01PO00S', 101]);">Alert</button>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">휴먼회원 안내 팝업</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_LG01PO00C" @click="this.$emit('openAlert', ['LG01PO00C', 'btn_LG01PO00C', 101]);">Alert</button>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">로그인 5회 실패 안내 팝업</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_LG01PO00D" @click="this.$emit('openAlert', ['LG01PO00D', 'btn_LG01PO00D', 101]);">Alert</button>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">비밀번호 변경 안내 팝업</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_LG01PO00E" @click="this.$emit('openAlert', ['LG01PO00E', 'btn_LG01PO00E', 101]);">Alert</button>
        </div>
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-LG01-PO00',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none',  floatMenu: 'none', title: '로그인 메인' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>
