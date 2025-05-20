<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">가입하실 분의 <br>본인인증을 진행해 주세요</div>

      <div class="section">

        <div class="form_group">
          <strong class="form_label">이름</strong>
          <div class="form_item">
            <InputBox :option="{ placeholder:'이름 입력' }" @inputValue="console.log($event)" />
          </div>
          <div class="error">이름을 입력해주세요</div>
          <div class="error">이름을 정확히 입력해주세요</div>
        </div>


        <div class="form_group">
          <strong class="form_label">주민등록번호</strong>
          <div class="form_item">
            <InputBox :option="{ placeholder:'앞 6자리 입력' }" @inputValue="console.log($event)" />
            <span class="mark_div">-</span>
            <InputBox :option="{ type:'password', placeholder:'뒤 7자리 입력' }" @inputValue="console.log($event)" />
          </div>
          <div class="error">주민등록번호를 입력해주세요</div>
          <div class="error">주민등록번호를 정확히 입력해주세요</div>
        </div>

      </div> <!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c02" v-bind:disabled="prev == false">이전으로</button>
              <button type="button" class="btn lg c01" v-bind:disabled="next == false">가입자 인증하기</button>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->


    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
import InputBox from '@/components/InputBox'

export default {
  name: 'ALFM-PR03-PG08',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: '본인인증', floatMenu: 'none' },
      prev: true,
      next: false,
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    InputBox,
  },
}
</script>