<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">고객님의 이메일 주소를 <br>입력해 주세요</div>

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

        </div>
      </div>

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c02" v-bind:disabled="prev == false">이전으로</button>
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

export default {
  name: 'ALFM-PR03-PG13',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '고객정보 입력' },
      emailSelfInput: true,             // 이메일 도메인 => 직접입력
      emailSelectDomain: '',
      prev: true
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
