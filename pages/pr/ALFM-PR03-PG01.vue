<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">개통방식을 <br>선택해 주세요</div>

      <div class="section">

        <RadioActive
          :data="{
            option: { type:'ty05', itemList: 1, },
            data: [
              { checked:false, id:'step02_01', value:'USIM 가입', info:'기기가 있다면, 빠르고! 간편한!', img:'/images/component/img_usim_join.png' },
              { checked:false, id:'step02_02', value:'eSIM 가입', info:'1개의 휴대폰에 2개의 전화번호!', img:'/images/component/img_esim_join.png' },
            ]
          }"
          @checkItem="next = $event"
        />
        
      </div> 

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c02" v-bind:disabled="prev == false">이전으로</button>
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
  name: 'ALFM-PR03-PG01',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: '개통방식 선택', floatMenu: 'none' },
      prev: true,
      next: false
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
  