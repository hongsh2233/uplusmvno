<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">USIM을<br> 어떻게 받으시겠어요? </div>

      <div class="section">


        <RadioActive
          :data="{
            option: { type:'ty05', itemList: 1, },
            data: [
              { checked:false, id:'step03_01', value:'택배 배송', info:'3일 정보 소요될 수 있어요.', img:'/images/component/img_package.png' },
              { checked:false, id:'step03_02', value:'원칩 지금배송', info:'바로 받아볼 수 있고, NFC도 지원돼요!', img:'/images/component/img_quick.png' },
            ]
          }"
          @checkItem="checked = $event"
        />
      </div> <!-- // section-->

      <div class="section" v-if="delivery1">
        <div class="bottom_link_item">
          <div class="box_gray">
            <ul class="text_list bull">
              <li>파트너사 배송(택배)로 전환되며, 파트너사 정책에 따라 유심 카드 구매 비용은 첫 달 청구서에 청구될 수 있어요.</li>
            </ul>
          </div>
          <strong>USIM없이 eSIM으로 개통하시겠어요?</strong>
          <NuxtLink :to="{}" class="btn_text">eSIM 지원 휴대폰 확인하러 가기</NuxtLink>
        </div>
      </div> 
      <!-- // section-->
      <div class="section" v-if="delivery2">
        <div class="bottom_link_item">
          <div class="box_gray">
            <ul class="text_list bull">
              <li>원칩 지금배송 유심을 받으신 후, 가입 신청 이어하기를 통해 가입 신청을 계속 진행해 주세요.</li>
            </ul>
          </div>
          <strong>USIM없이 eSIM으로 개통하시겠어요?</strong>
          <NuxtLink :to="{}" class="btn_text">eSIM 지원 휴대폰 확인하러 가기</NuxtLink>
        </div>
      </div> 
      <!-- // section-->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c02" v-bind:disabled="prev == false">이전으로</button>
              <button type="button" class="btn lg c01" v-bind:disabled="next == false">{{ nextBtn }}</button>
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
  name: 'ALFM-PR03-PG02-1',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: 'USIM 배송 선택', floatMenu: 'none' },
      prev: true,
      next: false,
      nextBtn: '다음으로',
      checked: '',
      delivery1: false,
      delivery2: false,
    }
  },
  watch: {
    checked(a){
      this.delivery1 = ( a == 'step03_01' ) ? true : false;
      this.delivery2 = ( a == 'step03_02' ) ? true : false;
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
  
