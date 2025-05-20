<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">알뜰폰닷컴 홈페이지 서비스의 <br>약관/방침을 읽고 동의해주세요</div>

      <div class="section">
        <div class="terms_consent">
          <div class="cst_box check_st">
            <input type="checkbox" id="check_all" name="all" v-model="agreeAll" @change="agreeAllChange">
            <label for="check_all"><b>전체 약관에 모두 동의합니다.</b></label>
          </div>

          <div class="cst_list list01">
            <div class="cst_panel">
              <ul>
                <li>
                  <div class="check_st ty02">
                    <input type="checkbox" id="check_consent00_01" name="" v-model="agree[0]" @change="agreeCheck">
                    <label for="check_consent00_01">사이트 이용약관 (필수)</label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
                <li>
                  <div class="check_st ty02">
                    <input type="checkbox" id="check_consent00_02" name="" v-model="agree[1]" @change="agreeCheck">
                    <label for="check_consent00_02">개인정보 수집이용 (필수)</label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
                <li>
                  <div class="check_st ty02">
                    <input type="checkbox" id="check_consent00_03" name="" v-model="agree[2]" @change="agreeCheck">
                    <label for="check_consent00_03">개인정보 제3자 제공안내 <span>(선택)</span></label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
                <li>
                  <div class="check_st ty02">
                    <input type="checkbox" id="check_consent00_04" name="" v-model="agree[3]" @change="agreeCheck">
                    <label for="check_consent00_04">광고성 정보 수신 <span>(선택)</span></label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
              </ul>
            </div>
          </div>
        </div> <!-- // terms_consent -->
      </div> <!-- // section -->
      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" role="button" class="btn lg c01"  @click="snackbar = true" v-bind:disabled="!next">동의하고 다음으로</button>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->

      <!-- toast message 추가 23/11/16 -->
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{message}}
      </v-snackbar>

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-LG04-PG03',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '이용약관 동의' },
      agreeAll: false,
      agree: [false, false, false, false],
      next: false,
      snackbar: false,
      timeout: 3000,
      message: '2024년 00월 00일 알뜰폰닷컴 홈페이지의 광고성 수신동의가 완료되었습니다.',
    }
  },
  watch:{
    agree: {
      handler(a){
        if( !a[0] || !a[1] )  this.next = false;
        if( a[0] && a[1] ) this.next = true;
      }, deep:true
    }
  },
  methods:{
    agreeAllChange(){
      const status = this.agreeAll;
      this.agree = this.agree.map( a => a = status );
    },
    agreeCheck(){
      const agreeChk = this.agree.filter( a => a == true );
      this.agreeAll = ( agreeChk.length == this.agree.length ) ? true : false;
    },
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  }
}
</script>
