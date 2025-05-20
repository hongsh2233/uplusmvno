<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">로그인 시 필요한 이메일과 <br>비밀번호를 입력해주세요</div>

      <div class="section">
        <div class="form_wrap">

          <div class="form_group">
            <strong class="form_label">이메일</strong>
            <div class="form_item">
              <InputBox :option="{ placeholder:'아이디' }" @inputValue="console.log($event)" />
              <span class="mark_div">@</span>
              <InputBox :option="{ placeholder:'도메인' }" @inputValue="console.log($event)" ref="emailSelfInput" v-if="emailSelfInput" />
              <InputBox :option="{ value:emailSelectDomain, placeholder:'도메인', disabled:true }" @inputValue="console.log($event)" ref="domain" v-else />
            </div>
            <div class="error"></div>
            <div class="form_item">
              <button type="button" class="btn_select" ref="btn_email" @click="$refs.email.open">직접입력</button>
            </div>
            <PopupSelect ref="email" :option="{ data:'email', popupTitle:'도메인 선택', targetBtn:'btn_email' }" @selectItem="selectDomain($event)" />
          </div>

          <div class="btn_group mgt20">
            <button type="button" class="btn md c03">중복확인</button>
					</div>
          <div class="form_group">
            <div class="form_label">비밀번호</div>
            <div class="form_item"> <!-- class="form_item val_chk" -->
              <InputBox :option="{ type:'password', placeholder:'10~20자의 영문, 숫자 조합' }" @inputValue="console.log($event)" />
            </div>
            <div class="error">10~20자의 영문, 숫자 조합을 사용해주세요</div>

            <div class="form_item"> <!-- class="form_item val_chk" -->
              <InputBox :option="{ type:'password', placeholder:'비밀번호 확인' }" @inputValue="console.log($event)" />
            </div>
            <div class="error">비밀번호가 일치하지 않습니다</div>
          </div>
        </div>
        <!-- 중간 section 삭제 ; 23/11/10  -->

        <div class="box_gray">
          <strong>비밀번호 필수조건</strong>
          <ul class="text_list bull">
            <li>10~20자의 영문과 숫자를 혼용해서 사용해야 합니다.</li>
            <li>동일한 문자/숫자를 연속으로 4자리 이상 포함할 수 없습니다. (예. aaaa, 1111)</li>
            <li>연속된 숫자는 4자리 이상 사용하실 수 없습니다. (예. 1234…..5678)</li>
            <li>아이디가 포함된 비밀번호는 사용할 수 없습니다.</li>
          </ul>
        </div>
      </div><!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01" disabled>다음으로</button>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import PopupSelect from '@/components/PopupSelect';
import InputBox from '@/components/InputBox'

export default {
  name: 'ALFM-LG04-PG02',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '가입 정보 입력' },
      emailSelfInput: true,             // 이메일 도메인 => 직접입력
      emailSelectDomain: '',
    }
  },
  methods: {
    selectDomain($event){
      this.emailSelfInput = ( $event.value == 0 ) ? true : false;
      this.emailSelectDomain = $event.title;
      if( this.emailSelfInput ){
        setTimeout(()=>{ this.$refs.emailSelfInput.$refs.input.focus() }, 10);
      }
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    PopupSelect,
    InputBox,
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>
