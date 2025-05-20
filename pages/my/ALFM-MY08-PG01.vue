<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">고객님의 알뜰폰닷컴 회원정보 입니다</h3>
        <div class="list_info_ty01">
          <dl v-for="(d, i) in dataUser" :key="i">
            <dt>{{ d.label }}</dt>
            <dd>{{ d.info }}</dd>
          </dl>
        </div>
        <div class="btn_group mgt20">
          <button type="button" class="btn md c03">본인인증으로 정보 수정하기</button>
        </div>
      </div>
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
            <button type="button" class="btn md c03">이메일 저장하기</button>
          </div>
        </div>
      </div>
      <div class="section">
        <h3 class="tit02">SNS 계정 연결</h3>
        <div class="cir_icon_link">
          <ul>
            <li>
              <NuxtLink href="javascript:void(0);" class="icon_link naver disabled"><span class="blind">네이버</span></NuxtLink><!-- class="disabled" : SNS 미연결 상태 -->
            </li>
            <li>
              <NuxtLink href="javascript:void(0);" class="icon_link kakao"><span class="blind">카카오톡</span></NuxtLink>
            </li>
          </ul>
        </div>
        <div class="box_gray mgt20">
          <ul class="text_list bull">
            <li>자주 사용하는 SNS 계정과 연결 설정을 하여 간편하게 로그인 할 수 있습니다.</li>
            <li>SNS 계정 연결 설정 시, 해당 SNS 계정 인증이 필요합니다.</li>
          </ul>
        </div>
      </div>
      <div class="section">
        <h3 class="tit02">마케팅 정보 수신 및 활용 동의</h3>
        <!-- checkbox item 알림톡 추가 ; 23/111/17 -->
        <div class="item_list03">
          <ul>
            <li>
              <div class="check_st">
                <input type="checkbox" id="checkbox01_01" name="agreement">
                <label for="checkbox01_01">문자 메시지</label>
              </div>
            </li>
            <li>
              <div class="check_st">
                <input type="checkbox" id="checkbox01_02" name="agreement">
                <label for="checkbox01_02">이메일</label>
              </div>
            </li>
            <li>
              <div class="check_st">
                <input type="checkbox" id="checkbox01_03" name="agreement">
                <label for="checkbox01_03">알림톡</label>
              </div>
            </li>
          </ul>
        </div>
        <div class="box_gray mgt20">
          <ul class="text_list bull">
            <li>서비스의 중요 안내사항에 대한 정보는 위 수신 여부와 관계없이 발송됩니다.</li>
          </ul>
        </div>
      </div>
      <div class="section">
        <button type="button" class="btn_text ty03">회원탈퇴</button>
      </div>

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import PopupSelect from '@/components/PopupSelect';

export default {
  name: 'ALFM-MY08-PG01',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '내 정보 수정' },
      emailSelfInput: true,             // 이메일 도메인 => 직접입력
      emailSelectDomain: '',

      dataUser: [
        {label: '이름', info: '홍길동',},
        {label: '전화번호', info: '070-358-3515',},
      ],
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
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>
