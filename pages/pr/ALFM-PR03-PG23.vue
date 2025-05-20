<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">필요하신 USIM의 종류를 <br>선택해 주세요</div>

      <div class="section">

        <RadioActive
          :data="{
            option: { type:'ty05', itemList: 1, },
            data: [
              { checked:false, id:'step03_01', value:'NFC USIM', info:'교통카드, 삼성페이 모두 가능해요!', img:'/images/component/img_nfc.png' },
              { checked:false, id:'step03_02', value:'일반 USIM', info:'삼성페이는 사용할 수 있어요!', img:'/images/component/img_dft_uim.png' },
            ]
          }"
          @checkItem="checked = $event"
        />
      </div> <!-- // section -->

      <div class="section">
        <div class="box_gray">
          <ul class="text_list bull">
            <li>USIM 종류에 따라 비용이 청구될 수 있어요.</li>
            <li>USIM 비용은 다음달 청구서에 함께 청구 될 거에요.</li>
            <li>택배사의 사정에 따라 USIM 배송이 지연될 수 있어요.</li>
          </ul>
        </div>
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
  name: 'ALFM-PR03-PG23',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: 'USIM 선택' },
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
  