<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>


      <div class="section">
        <h3 class="tit02">탈퇴 안내</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_MY08PO00" @click="this.$emit('openPopup', ['MY08PO00', 'btn_MY08PO00', 101]);">Alert</button>
        </div>
      </div>

      <!-- 광고성 정보 수신 알림 ; 23/11/17 -->
      <div class="section">
        <h3 class="tit02">sns 계정 연결 안내</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_MY08PO00B" @click="this.$emit('openAlert', ['MY08PO00B', 'btn_MY08PO00B', 101]);">Alert</button>
        </div>
      </div>

      <!-- 광고성 정보 수신 알림 - 공통 ; 23/11/17 -->
      <div class="section">
        <h3 class="tit02">광고성 정보 수신</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_CM13PO00" @click="this.$emit('openAlert', ['CM13PO00', 'btn_CM13PO00', 101]);">Alert</button>
        </div>
      </div>

      <!-- toast message ; 23/11/17 -->
      <div class="section">
        <h3 class="tit02">toast msg</h3>
        <div class="btn_group">
          <button type="button" class="btn lg c03" @click="snackbar1 = true">광고 수신거부</button>
          <button type="button" class="btn lg c03" @click="snackbar2 = true">광고 수신동의</button>
        </div>
      </div>

      <!-- toast message 추가 23/11/16 -->
      <v-snackbar v-model="snackbar1" :timeout="timeout">
        {{message1}}
      </v-snackbar>
      <v-snackbar v-model="snackbar2" :timeout="timeout">
        {{message2}}
      </v-snackbar>



    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-MY08-PO00',
  emits: ['setLayout', 'openPopup', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '내 정보 수정 안내' },
      snackbar1: false,
      snackbar2: false,
      timeout: 3000,
      message1: `2024년 00월 00일 광고성 $마케팅 정보 수신 매체$ 수신거부가 완료되었습니다.`,
      message2: `2024년 00월 00일 광고성 $마케팅 정보 수신 매체$ 수신동의가 완료되었습니다.`,

    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    // this.$emit('openPopup', ['MY08PO00', 'btn_MY08PO00', 101]);
  }
}
</script>
