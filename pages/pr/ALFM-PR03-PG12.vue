<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">가입하려는 분의 <br>주소를 입력해 주세요</div>
      
      <div class="section">
       <!-- Default -->
        <div class="form_wrap">
          <div class="form_group">
            <strong class="form_label">주소</strong>
            <div class="form_item">
              <InputBox :option="{ placeholder:'우편번호', disabled:true }" @inputValue="console.log($event)" />
              <button type="button" class="btn md c03">우편번호 찾기</button>
            </div>
            <div class="form_item">
              <InputBox :option="{ placeholder:'주소', disabled:true }" @inputValue="console.log($event)" />
            </div>
            <div class="form_item">
              <InputBox :option="{ value:'LG유플러스 상암사옥', placeholder:'상세주소 입력' }" @inputValue="console.log($event)" />
            </div>
          </div>
        </div>
      </div>

      <div class="page_wrap">
        <div class="page_info">유심을 배송 받을 수 있는 <br>주소를 입력해 주세요</div>
        <div class="page_tip">
          <div class="form_item">
            <div class="check_st">
              <input type="checkbox" id="checkbox01_01" name="">
              <label for="checkbox01_01">가입자 주소와 같아요</label>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <!-- USIM이 없어요 Case 선택 시 노출 -->
        <div class="form_wrap">
          <div class="form_group">
            <strong class="form_label">주소</strong>
            <div class="form_item">
              <InputBox :option="{ placeholder:'우편번호', disabled:true }" @inputValue="console.log($event)" />
              <button type="button" class="btn md c03">우편번호 찾기</button>
            </div>
            <div class="form_item">
              <InputBox :option="{ placeholder:'주소', disabled:true }" @inputValue="console.log($event)" />
            </div>
            <div class="form_item">
              <InputBox :option="{ value:'LG유플러스 상암사옥', placeholder:'상세주소 입력' }" @inputValue="console.log($event)" />
            </div>
          </div>

          <div class="form_group">
            <strong class="form_label">배송 시 요청사항</strong>
            <div class="form_item">
              <button type="button" class="btn_select" ref="btn_deliveryRequest" @click="$refs.deliveryRequest.open">배송 시 요청사항 선택하기</button>
            </div>
            <div class="form_item" v-if="deliveryRequestSelfInput">
              <InputBox :option="{ placeholder:'40글자 이내로 입력' }" @inputValue="console.log($event)" ref="deliveryRequestSelfInput" />
            </div>
            <PopupSelect ref="deliveryRequest" :option="{ data:'deliveryRequest', popupTitle:'배송 시 요청사항 선택', targetBtn:'btn_deliveryRequest' }" @selectItem="selectDeliveryRequest($event)" />
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
import InputBox from '@/components/InputBox'

export default {
  name: 'ALFM-PR03-PG12',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '고객정보 입력' },
      deliveryRequestSelfInput:false,   //  배송시 요청사항 => 직접입력 선택
      prev: true
    }
  },
  methods: {
    selectDeliveryRequest($event){
      this.deliveryRequestSelfInput = ($event.value==3) ? true : false;
      if( this.deliveryRequestSelfInput ){
        setTimeout(()=>{ this.$refs.deliveryRequestSelfInput.$refs.input.focus() }, 10);
      }
    },
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    PopupSelect,
    InputBox
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>
