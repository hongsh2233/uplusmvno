<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">⁠편의점을 <br>선택해주세요</div>

      <div class="section">
        <RadioActive
          :data="{
            option: { type:'ty02', itemList: 1, },
            data: [
//              { checked:false, id:'ty02_radio_01', value:'GS25 바로픽업', img:'/images/component/img_gs25.png' },
//              { checked:false, id:'ty01_radio_02', value:'세븐일레븐 바로픽업', img:'/images/component/img_seven_eleven.png' },
              { checked:false, id:'ty01_radio_03', value:'이마트24 바로픽업', img:'/images/component/img_emart.png' },
//              { checked:false, id:'ty01_radio_04', value:'CU 바로픽업', img:'/images/component/img_cu.png' },
//              { checked:false, id:'ty01_radio_05', value:'스토리웨이 바로픽업', img:'/images/component/img_story.png' },
            ]
          }"
          @checkItem="ALFMBU02PG00 = $event"
        />
      </div>

      <div class="convenience-store">
        <h3>편의점 픽업이란?</h3>
        <p class="sub">유심 기프티콘(모바일 교환권)을<br class="pc_hide" /> 온라인에서 선 구매 후 편의점에서<br class="pc_show" /> 간편하게<br class="pc_hide" /> <strong class="point">원칩 유심</strong>으로 교환할 수 있는 서비스입니다. </p>
        <p class="img pc_show"><img src="/images/content/img_convenience_store_pc.png" alt="emart24" /></p>
        <p class="img pc_hide"><img src="/images/content/img_convenience_store.png" alt="emart24" /></p>
        <div class="notice">
          <p class="notice__title">사용방법</p>
          <ol class="notice__list">
            <li><strong class="num">1</strong> 이마트24 바로 픽업을 선택하여 가까운 편의점 확인 후 재고를 파악</li>
            <li><strong class="num">2</strong> 결재 후 유심 구매 기프티콘을 SMS로 수령</li>
            <li><strong class="num">3</strong> 해당 편의점으로 가서 기프티콘을 보여주고 유심으로 교환</li>
          </ol>
          <p class="tip">편의점에 재고가 없을 경우에는 다른 지점으로 내방하셔도 됩니다.</p>
        </div>
      </div>

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01" v-bind:disabled="nextBtn == false">다음으로</button>
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
  name: 'ALFM-BU02-PG00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: 'none', floatMenu: 'none', title: '배송 방법 선택' },
      ALFMBU02PG00: '',
      nextBtn: false,
    }
  },
  watch: {
    ALFMBU02PG00(){
      this.nextBtn = true ;
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
