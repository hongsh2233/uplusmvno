<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">Form Popup Select</div>

      
			<div class="section">
				<h3 class="tit02">PopupSelect</h3>

        <div class="form_group">
          <strong class="form_label">현재 요금납부방법을 선택해주세요</strong>
          <div class="form_item">
            <button type="button" class="btn_select" ref="btn_payType" @click="$refs.payType.open">선택하세요</button>
          </div>
          <PopupSelect ref="payType" :option="{ data:'payType', popupTitle:'선택', targetBtn:'btn_payType' }" @selectItem="console.log($event)" />
        </div>

        <div class="form_group">
          <strong class="form_label">알뜰폰 통신사</strong>
          <div class="form_item">
            <button type="button" class="btn_select" ref="btn_MVNO" @click="$refs.MVNO.open">선택</button>
          </div>
          <PopupSelect ref="MVNO" :option="{ data:'MVNO', popupTitle:'알뜰폰 통신사 선택', targetBtn:'btn_MVNO' }" @selectItem="console.log($event)" />
        </div>

        <div class="form_group">
          <div class="form_item">
            <button type="button" class="btn_select boardsort" ref="btn_boardSort" @click="$refs.boardSort.open">전체</button>
            <InputBox :option="{ placeholder:'검색어를 입력해주세요', search:true, }" @inputValue="console.log($event)" />
          </div>
          <PopupSelect ref="boardSort" :option="{ data:'boardSort', popupTitle:'검색 구분', targetBtn:'btn_boardSort' }" @selectItem="console.log($event)" />
        </div>

        <div class="form_group">
          <div class="form_item">
            <button type="button" class="btn_select" ref="btn_subwayArea" @click="$refs.subwayArea.open">지역 선택</button>
          </div>
          <div class="form_item">
            <button type="button" class="btn_select" ref="btn_subwayLine" @click="$refs.subwayLine.open">노선 선택</button>
          </div>
          <div class="form_item">
            <button type="button" class="btn_select" ref="btn_subwayStation" @click="$refs.subwayStation.open">역 선택</button>
          </div>
          <PopupSelect ref="subwayArea" :option="{ data:'subwayArea', popupTitle:'지역 선택', targetBtn:'btn_subwayArea' }" @selectItem="console.log($event)" />
          <PopupSelect ref="subwayLine" :option="{ data:'subwayLine', popupTitle:'노선 선택', targetBtn:'btn_subwayLine' }" @selectItem="console.log($event)" />
          <PopupSelect ref="subwayStation" :option="{ data:'subwayStation', popupTitle:'역 선택', targetBtn:'btn_subwayStation' }" @selectItem="console.log($event)" />
        </div>

        <div class="form_group">
          <strong class="form_label">USIM 모델명</strong>
          <div class="form_item">
            <button type="button" class="btn_select" ref="btn_usimModel" @click="$refs.usimModel.open">선택</button>
          </div>
          <PopupSelect ref="usimModel" :option="{ data:'usimModel', popupTitle:'선택', targetBtn:'btn_usimModel' }" @selectItem="console.log($event)" />
        </div>

        <div class="form_group">
          <strong class="form_label">문의유형</strong>
          <div class="form_item">
            <button type="button" class="btn_select" ref="btn_inquiryType" @click="$refs.inquiryType.open">문의유형 선택</button>
          </div>
          <PopupSelect ref="inquiryType" :option="{ data:'inquiryType', popupTitle:'선택', targetBtn:'btn_inquiryType' }" @selectItem="console.log($event)" />
        </div>

        <div class="list_version">
          <button type="button" class="btn_select" ref="btn_privacyVer" @click="$refs.privacyVer.open">버전 V.20230303</button>
          <PopupSelect ref="privacyVer" :option="{ data:'privacyVer', popupTitle:'선택', targetBtn:'btn_privacyVer' }" @selectItem="console.log($event)" />
        </div>
        
        <div class="form_group">
          <strong class="form_label">모델명을 선택 해 주세요</strong>
          <div class="form_item">
            <button type="button" class="btn_select" ref="btn_iphone" @click="$refs.iphone.open">선택하세요</button>
          </div>
          <PopupSelect ref="iphone" :option="{ data:'iphone', popupTitle:'휴대폰 모델명 선택', targetBtn:'btn_iphone' }" @selectItem="console.log($event)" />
        </div>
        
        <div class="form_group">
          <strong class="form_label">휴대폰 모델명 선택</strong>
          <div class="form_item">
            <button type="button" class="btn_select" ref="btn_galaxy" @click="$refs.galaxy.open">선택하세요</button>
          </div>
          <PopupSelect ref="galaxy" :option="{ data:'galaxy', popupTitle:'휴대폰 모델명 선택', targetBtn:'btn_galaxy' }" @selectItem="console.log($event)" />
        </div>
        
        <div class="form_group">
          <strong class="form_label">은행 계좌번호</strong>
          <div class="form_item">
            <button type="button" class="btn_select" ref="btn_bank" @click="$refs.bank.open">선택</button>
          </div>
          <div class="form_item">
            <InputBox :option="{ placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력' }" @inputValue="console.log($event)" />
          </div>
          <PopupSelect ref="bank" :option="{ data:'bank', popupTitle:'선택', targetBtn:'btn_bank' }" @selectItem="console.log($event)" />
        </div>

        
        
        <div class="form_group">
          <strong class="form_label">배송 시 요청사항 (선택)</strong>
          <div class="form_item">
            <button type="button" class="btn_select" ref="btn_deliveryRequest" @click="$refs.deliveryRequest.open">배송 시 요청사항 선택하기</button>
          </div>
          <div class="form_item" v-if="deliveryRequestSelfInput">
            <InputBox :option="{ placeholder:'40글자 이내로 입력' }" @inputValue="console.log($event)" ref="deliveryRequestSelfInput" />
          </div>
          <PopupSelect ref="deliveryRequest" :option="{ data:'deliveryRequest', popupTitle:'배송 시 요청사항 선택', targetBtn:'btn_deliveryRequest' }" @selectItem="selectDeliveryRequest($event)" />
        </div>
        
        <div class="form_group">
          <strong class="form_label">이메일</strong>
          <div class="form_item">
            <InputBox :option="{ placeholder:'아이디' }" @inputValue="console.log($event)" />
            <span class="mark_div">@</span>
            <InputBox :option="{ placeholder:'도메인' }" @inputValue="console.log($event)" ref="emailSelfInput" v-if="emailSelfInput" />
            <InputBox :option="{ value:emailSelectDomain, placeholder:'도메인', disabled:true }" @inputValue="console.log($event)" ref="domain" v-else />
          </div>
          <div class="error"></div>
          <div class="form_item">
            <button type="button" class="btn_select" ref="btn_email" @click="$refs.email.open">직접입력</button>
          </div>
          <PopupSelect ref="email" :option="{ data:'email', popupTitle:'도메인 선택', targetBtn:'btn_email' }" @selectItem="selectDomain($event)" />
        </div>

			</div> <!-- // section -->


      

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import InputBox from '@/components/InputBox';
import PopupSelect from '@/components/PopupSelect';

export default {
  name: 'GuideFormPopupSelect',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },
      
      deliveryRequestSelfInput:false,   //  배송시 요청사항 => 직접입력 선택

      emailSelfInput: true,             // 이메일 도메인 => 직접입력
      emailSelectDomain: '',            // 이메일 도메인 => 선택한 도메인
    }
  },
  methods: {

    /** 배송시 요청사항 선택 */
    selectDeliveryRequest($event){
      this.deliveryRequestSelfInput = ($event.value==3) ? true : false;
      if( this.deliveryRequestSelfInput ){
        setTimeout(()=>{ this.$refs.deliveryRequestSelfInput.$refs.input.focus() }, 10);
      }
    },

    /** 이메일 도메인 선택 */
    selectDomain($event){
      this.emailSelfInput = ( $event.value == 0 ) ? true : false;
      this.emailSelectDomain = $event.title;
      if( this.emailSelfInput ){
        setTimeout(()=>{ this.$refs.emailSelfInput.$refs.input.focus() }, 10);
      }
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    InputBox,
    PopupSelect
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>