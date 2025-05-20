<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/17 --><!-- component화 ; 23/11/23 -->
      <ProgressBar :barInfo="{type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">가입유형을 <br>선택해 주세요</div>

      <div class="section">
        <RadioActive
          :data="{
            option: { type:'ty05', itemList: 1, },
            data: [
              { checked:false, id:'step01_01', value:`번호이동`, info:'지금 쓰고 있는 내 번호 그대로!', img:'/images/component/img_num_move.png' },
              { checked:false, id:'step01_02', value:'신규가입', info:'새로운 번호가 필요해요!', img:'/images/component/img_num_new.png' },
            ]
          }"
          @checkItem="next = $event"
        />
      </div> 

      <div class="section">
        <div class="box_gray">
          <strong>셀프개통 업무시간 안내</strong>
          <ul class="text_list bull">
            <li>신규가입 : <span class="fc01">24시간, 365일 가능</span></li>
            <li>번호이동 : 오전10시 ~ 오후 8시 (평일/토요일)</li>
          </ul>
        </div>
      </div><!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01" v-bind:disabled="next == false">다음으로</button>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
import ProgressBar from '@/components/ProgressBar'
import RadioActive from '@/components/RadioActive'

export default {
  name: 'ALFM-PR03-PG00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: '가입유형 선택', floatMenu: 'none' },
      next: false,
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    ProgressBar,
    RadioActive
  }
}
</script>
  