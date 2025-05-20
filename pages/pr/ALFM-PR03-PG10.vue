<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">알뜰폰 신청을 위해 <br>약관에 동의해 주세요</div>

      <div class="section">
        <div class="terms_consent">
          <div class="cst_box check_st">
            <input type="checkbox" id="check_all01" name="all" v-model="agreeAll" @change="agreeAllChange">
            <label for="check_all01"><b>전체 약관에 모두 동의합니다.</b></label>
          </div>


          <v-expansion-panels class="acd_wrap" v-model="toggle" multiple>

            <v-expansion-panel class="acd_item ty04">
              <div class="acd_title">
                <div class="acd_tab">
                  <div class="check_st">
                      <input type="checkbox" id="check_consent01_all" name="" v-model="agree1All" @change="agree1AllChange">
                      <label for="check_consent01_all"><b>알뜰폰닷컴 동의항목</b></label>
                  </div>
                </div>
                <v-expansion-panel-title></v-expansion-panel-title>
              </div>
              <div class="acd_panel">
                <v-expansion-panel-text>
                  <ul>
                    <li>
                      <div class="check_st ty02">
                        <input type="checkbox" id="check_consent01_01" name="" v-model="agree1[0]" @change="agree1Check">
                        <label for="check_consent01_01">개인정보 수집·이용동의 (필수)</label>
                      </div>
                      <button type="button"><span class="blind">약관 보기</span></button>
                    </li>
                    <li>
                      <div class="check_st ty02">
                        <input type="checkbox" id="check_consent01_02" name="" v-model="agree1[1]" @change="agree1Check">
                        <label for="check_consent01_02">개인정보 제3자 제공 동의 (필수)</label>
                      </div>
                      <button type="button"><span class="blind">약관 보기</span></button>
                    </li>
                    <li>
                      <div class="check_st ty02">
                        <input type="checkbox" id="check_consent01_03" name="" v-model="agree1[2]" @change="agree1Check">
                        <label for="check_consent01_03">고유식별정보 처리 동의 (필수)</label>
                      </div>
                      <button type="button"><span class="blind">약관 보기</span></button>
                    </li>
                    <li>
                      <div class="check_st ty02">
                        <input type="checkbox" id="check_consent01_04" name="" v-model="agree1[3]" @change="agree1Check">
                        <label for="check_consent01_04">광고성 정보 수신 <span>(선택)</span></label>
                      </div>
                      <button type="button"><span class="blind">약관 보기</span></button>
                    </li>
                  </ul>
                </v-expansion-panel-text>
              </div>
            </v-expansion-panel>

            <v-expansion-panel class="acd_item ty04">
              <div class="acd_title">
                <div class="acd_tab">
                  <div class="check_st">
                    <input type="checkbox" id="check_consent02_all" name="" v-model="agree2All" @change="agree2AllChange">
                    <label for="check_consent02_all"><b>통신사 동의 항목</b></label>
                  </div>
                </div>
                <v-expansion-panel-title></v-expansion-panel-title>
              </div>
              <div class="acd_panel">
                <v-expansion-panel-text>
                  <ul>
                    <li>
                      <div class="check_st ty02">
                        <input type="checkbox" id="check_consent02_01" name="" v-model="agree2[0]" @change="agree2Check">
                        <label for="check_consent02_01">통신 이용 약관 (필수)</label>
                      </div>
                      <button type="button"><span class="blind">약관 보기</span></button>
                    </li>
                    <li>
                      <div class="check_st ty02">
                        <input type="checkbox" id="check_consent02_02" name="" v-model="agree2[1]" @change="agree2Check">
                        <label for="check_consent02_02">개인 수집 이용 동의 (필수)</label>
                      </div>
                      <button type="button"><span class="blind">약관 보기</span></button>
                    </li>
                    <li>
                      <div class="check_st ty02">
                        <input type="checkbox" id="check_consent02_03" name="" v-model="agree2[2]" @change="agree2Check">
                        <label for="check_consent02_03">서비스 제공을 위한 개인정보 제공 이전 동의 (필수)</label>
                      </div>
                      <button type="button"><span class="blind">약관 보기</span></button>
                    </li>
                    <li>
                      <div class="check_st ty02">
                        <input type="checkbox" id="check_consent02_04" name="" v-model="agree2[3]" @change="agree2Check">
                        <label for="check_consent02_04">개인정보 취급 위탁 동의·신용정보 조회에 관한 동의·본인인증 서비스 이용에 대한 동의 (필수)</label>
                      </div>
                      <button type="button"><span class="blind">약관 보기</span></button>
                    </li>
                    <li>
                      <div class="check_st ty02">
                        <input type="checkbox" id="check_consent02_05" name="" v-model="agree2[4]" @change="agree2Check">
                        <label for="check_consent02_05">서비스 계약의 인수관련 동의 (필수)</label>
                      </div>
                      <button type="button"><span class="blind">약관 보기</span></button>
                    </li>
                  </ul>
                </v-expansion-panel-text>
              </div>
            </v-expansion-panel>
                        
          </v-expansion-panels>


        </div> <!-- // terms_consent -->
      </div> <!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c02" v-bind:disabled="prev == false">이전으로</button>
              <button type="button" class="btn lg c01" @click="snackbar = true"  v-bind:disabled = "next == false">다음으로</button>
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
  name: 'ALFM-PR03-PG10',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: '약관 동의', floatMenu: 'none' },
      toggle: [],
      agreeAll: false,
      agree1All: false,
      agree2All: false,
      agree1: [false, false, false, false],
      agree2: [false, false, false, false, false],
      prev: true,
      next: false,
      snackbar: false,
      timeout: 3000,
      message: '2024년 00월 00일 알뜰폰닷컴 홈페이지의 광고성 수신동의가 완료되었습니다.',
    }
  },
  watch:{
    agreeAll(a){
      this.next = a ? true : false;
    }
  },
  methods:{
    agreeAllChange(){
      const status = this.agreeAll;

      this.agree1All = status;
      this.agree2All = status;
      this.agree1 = this.agree1.map( a => a = status );
      this.agree2 = this.agree2.map( a => a = status );
    },
    agree1AllChange(){
      const status = this.agree1All;
      this.agree1 = this.agree1.map( a => a = status );

      this.agreeCheck();
    },
    agree2AllChange(){
      const status = this.agree2All;
      this.agree2 = this.agree2.map( a => a = status );

      this.agreeCheck();
    },
    agree1Check(){
      const agree1Chk = this.agree1.filter( a => a == true );
      this.agree1All = ( agree1Chk.length == this.agree1.length ) ? true : false;

      this.agreeCheck();
    },
    agree2Check(){
      const agree2Chk = this.agree2.filter( a => a == true );
      this.agree2All = ( agree2Chk.length == this.agree2.length ) ? true : false;

      this.agreeCheck();
    },
    agreeCheck(){
      this.agreeAll = ( this.agree1All && this.agree2All ) ? true : false;
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>