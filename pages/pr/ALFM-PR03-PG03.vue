<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">가지고 계신 USIM의 <br>정보를 입력해 주세요</div>

      <div class="section">
        <div class="info_input_img">
          <img src="/images/component/img_bar_code.png" alt="LG U+ 모두의 유심, 원칩 U+ 알뜰폰(MVNO) 공용, 바코드 예시 유심 모델명 K3620XX 유심 일련번호 00001234">
        </div>
      </div>  <!-- // section -->

      <div class="section">

        <div class="form_wrap">

          <div class="form_group">
            <strong class="form_label">USIM 모델명</strong>
            <div class="form_item">
              <button type="button" class="btn_select" ref="btn_usimModel" @click="$refs.usimModel.open">선택</button>
            </div>
            <PopupSelect ref="usimModel" :option="{ data:'usimModel', popupTitle:'USIM 모델 선택', targetBtn:'btn_usimModel' }" @selectItem="console.log($event)" />
          </div>

          <div class="form_group">
            <strong class="form_label">일련번호</strong>
            <div class="form_item">
              <InputBox :option="{ placeholder:'숫자 8자리 입력' }" @inputValue="console.log($event)" />
            </div>
            <div class="error">USIM 정보를 다시 확인해주세요</div>
          </div>
          
        </div>
      </div> <!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c02" v-bind:disabled="prev == false">이전으로</button>
              <button type="button" class="btn lg c01" v-bind:disabled="next == false">인증하기</button>
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
  name: 'ALFM-PR03-PG03',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: 'USIM 정보 입력', floatMenu: 'none' },
      prev: true,
      next: false,
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
  