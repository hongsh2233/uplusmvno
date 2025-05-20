<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">법정대리인(보호자) 동의를 <br>진행해 주세요</div>

      <div class="section">

        <div class="form_group">
          <strong class="form_label">Name</strong>
          <div class="form_item">
            <InputBox :option="{ placeholder:'Enter a name' }" @inputValue="console.log($event)" />
          </div>
          <div class="error">Please enter your name.</div>
          <div class="error">Please enter your name correctly.</div>
        </div>


        <div class="form_group">
          <strong class="form_label">Alien Registration Number</strong>
          <div class="form_item">
            <InputBox :option="{ placeholder:'Six digits' }" @inputValue="console.log($event)" />
            <span class="mark_div">-</span>
            <InputBox :option="{ type:'password', placeholder:'Seven digits' }" @inputValue="console.log($event)" />
          </div>
          <div class="error">Please enter your alien registration number.</div>
          <div class="error">Please enter your alien registration number correctly.</div>
        </div>


        <div class="form_group">
          <strong class="form_label">Date of issue</strong>
          <div class="form_item">
            <InputBox :option="{ placeholder:'YYYYMMDD Eight digits' }" @inputValue="console.log($event)" />
          </div>
          <div class="error">Please enter the date of issuance of the alien registration card.</div>
          <div class="error">Please enter the 8-digit alien registration card issuance date correctly.</div>
        </div>


        <div class="form_group">
          <div class="form_item">
            <v-expansion-panels class="acd_wrap" v-model="acd">
              <v-expansion-panel class="acd_item ty02">
                <div class="acd_title">
                  <div class="acd_tab">
                    <div class="check_st">
                        <input type="checkbox" id="check_consent01_all" name="">
                        <label for="check_consent01_all">I agree to collection and use of alien registration number. (Required)</label>
                    </div>
                  </div>
                  <v-expansion-panel-title></v-expansion-panel-title>
                </div>
                <div class="acd_panel">
                  <v-expansion-panel-text>
                    <ul class="text_list bull">
                      <li>
                        수집·이용 목적: 본인확인, 본인인증, 미환급금 안내, 실명인증
                      </li>
                      <li>
                        수집 정보의 항목: 외국인 등록번호 (본인, 대리인 신분확인 이미지 및 내용 포함)
                      </li>
                      <li>
                        정보의 보유 및 이용기간: 서비스 가입기간 동안 이용하고, 요금 정산과 오납 분쟁 대비를 위하여 해지 후 요금 완납 후 6개월까지 이용
                      </li>
                    </ul>
                  </v-expansion-panel-text>
                </div>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
          <div class="error">Please agree to the terms and conditions.</div>
        </div>


        <div class="form_group">
          <strong class="form_label">Phone number you can be reached</strong>
          <div class="form_item">
            <InputBox :option="{ placeholder:'Enter only numbers without &lsquo;-&rsquo;' }" @inputValue="console.log($event)" />
          </div>
          <div class="error">Please enter a number where the guardian can be contacted.</div>
        </div>


        <div class="form_group">
          <div class="form_item">
            <v-expansion-panels class="acd_wrap" v-model="acd2">
              <v-expansion-panel class="acd_item ty02">
                <div class="acd_title">
                  <div class="acd_tab">
                    <div class="check_st">
                        <input type="checkbox" id="check_consent02_all" name="">
                        <label for="check_consent02_all">Confirm and agree to what the legal representative needs to know. (Required)</label>
                    </div>
                  </div>
                  <v-expansion-panel-title></v-expansion-panel-title>
                </div>
                <div class="acd_panel">
                  <v-expansion-panel-text>
                    <ul class="text_list bull">
                      <li>
                        만 14세 미만의 미성년자가 휴대폰 및 서비스를 이용하기 위해 작성하거나 알아야 할 신청서, 이용약관, 의무약정 등의 모든 내용을 보호자인 제가 확인하였고 동의합니다.
                      </li>
                      <li>
                        서비스 가입, 이용요금, 기기 할부금 등의 채무에 대하여 보호자인 저에게 연대 보증책임이 있음을 확인하였고 동의합니다.
                      </li>
                      <li>
                        만 14세 미만의 미성년자 대신 보호자인 제가 개인 정보활동 동의서의 모든 내용을 확인하였고 동의합니다.
                      </li>
                    </ul>
                  </v-expansion-panel-text>
                </div>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
          <div class="error">Please agree to the terms and conditions.</div>
        </div>

        <AuthMethod @childCheckValues="handleCheckValuesEvent" />

      </div> <!-- // section -->


      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c02" v-bind:disabled="prev == false">이전으로</button>
              <button type="button" class="btn lg c01" v-bind:disabled="next == false">인증 확인하기</button>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->


    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
import AuthMethod from '@/components/AuthMethod'
import InputBox from '@/components/InputBox'

export default {
  name: 'ALFM-PR03-PG22',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '본인인증' },
      
      acd: [],
      acd2: [],
      prev: true,
      next: false,
      checkValues: {}
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  methods: {
    handleCheckValuesEvent(val) {
      this.checkValues = val;
    }
  },
  components: {
    AuthMethod,
    InputBox,
  }
}
</script>