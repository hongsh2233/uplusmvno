<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/24 -->
      <ProgressBar :barInfo="{type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">USIM을 <br>가지고 계신가요?</div>

      <div class="section">


        <!-- info 문구 수정, 23/11/29 -->
        <RadioActive
          :data="{
            option: { type:'ty05', itemList: 1, },
            data: [
              { checked:false, id:'step03_01', value:'USIM이 있어요', info:'즉시 셀프개통 할 수 있어요!', img:'/images/component/img_usim.png' },
              { checked:false, id:'step03_02', value:'USIM이 없어요', info:'USIM이 없어도 요금제를 신청할 수 있어요!', img:'/images/component/img_usim_no.png' },
            ]
          }"
          @checkItem="checked = $event"
        />
      </div> <!-- // section-->

      <!-- 삭제 2023/11/14 -->
      <!-- <div class="section bottom_link_item" v-if="usimbuy">
				<div class="box_gray">
					<ul class="text_list bull">
						<li>파트너사 배송(택배)로 전환되며, 파트너사 정책에
              따라 유심 카드 구매 비용은 첫 달 청구서에 청구될 수 있어요.</li>
					</ul>
				</div>
        <strong>잠깐만요!!</strong>
        <span>바로 받아볼 수 있고, NFC도 지원되는 <br> 알뜰폰닷컴의 원칩을 구매 하시겠어요?</span>
        <div class="bnr_area">
          <NuxtLink :to="{}">
            <img src="/images/data/img_bnr03.png" alt="바로배송 2시간이면 OK!">
          </NuxtLink>
        </div>
        <strong>USIM없이 eSIM으로 개통하시겠어요?</strong>
        <NuxtLink :to="{}" class="btn_text">eSIM 지원 휴대폰 확인하러 가기</NuxtLink>
      </div>  -->
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
  name: 'ALFM-PR03-PG02',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: 'USIM 여부 선택', floatMenu: 'none' },
      prev: true,
      next: false,
      nextBtn: '다음으로',
      checked: '',
      //usimbuy: false,
    }
  },
  watch: {
    checked(a){
      // this.usimbuy = ( a == 'step03_02' ) ? true : false;
      // this.nextBtn = ( a == 'step03_02' ) ? '다음으로(택배배송)' : '다음으로';
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
  
