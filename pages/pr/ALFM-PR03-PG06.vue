<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">가입대상을 <br>선택해 주세요</div>

      <div class="section">

        <RadioActive
          :data="{
            option: { type:'ty03', itemList: 1, },
            data: [
              { checked:false, id:'ty_list_01_01', value:'일반', info:'만 19세 이상의 성인이에요' },
              { checked:false, id:'ty_list_01_02', value:'미성년자', info:'만 19세 미만이에요' },
              { checked:false, id:'ty_list_01_03', value:'외국인(Foreigner)', info:'외국인 번호가 있어요' },
              { checked:false, id:'ty_list_01_04', value:'<span>외국인 미성년자</span><span>(Foreigner Minors)</span>', info:'만 19세 미만이고 외국인 번호가 있어요' },
            ]
          }"
          @checkItem="checked = $event"
        />
        
      </div> <!-- // section -->

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
import RadioActive from '@/components/RadioActive'

export default {
  name: 'ALFM-PR03-PG06',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: '가입대상 선택', floatMenu: 'none' },
      prev: true,
      next: false,
      checked: '',
    }
  },
  watch: {
    checked(){
      this.next = true;
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    RadioActive
  }
}
</script>