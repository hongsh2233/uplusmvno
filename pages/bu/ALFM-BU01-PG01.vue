<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">수령인 정보를 <br>입력해 주세요</div>

      <div class="section">
        <div class="form_wrap">
          <div class="form_group">
            <strong class="form_label">수령인</strong>
            <div class="form_item"> <!-- class="form_item val_chk" 유효성 check -->
              <InputBox :option="{ placeholder:'수령인 입력' }" @inputValue="console.log($event)" />
            </div>
            <div class="error">수령인을 입력해주세요</div>
            <div class="error">수령인을 정확히 입력해주세요</div>
          </div>
          
          <!-- 08/22 기획서 수정으로 삭제 -->
          <!-- <div class="form_group">
            <strong class="form_label">통신사</strong>
            <div class="item_list03">
              <ul>
                <li>
                  <div class="radio_item ty01">
                    <input type="radio" id="item_select_01" value="item_select_01" name="item_select" v-model="ALFMBU01PG01">
                    <label for="item_select_01">LG U+</label>
                  </div>
                </li>
                <li>
                  <div class="radio_item ty01">
                    <input type="radio" id="item_select_02" value="item_select_02" name="item_select" v-model="ALFMBU01PG01">
                    <label for="item_select_02">SKT</label>
                  </div>
                </li>
                <li>
                  <div class="radio_item ty01">
                    <input type="radio" id="item_select_03" value="item_select_03" name="item_select" v-model="ALFMBU01PG01">
                    <label for="item_select_03">KT</label>
                  </div>
                </li>
                <li>
                  <div class="radio_item ty01">
                    <input type="radio" id="item_select_04" value="item_select_04" name="item_select" v-model="ALFMBU01PG01">
                    <label for="item_select_04">LG U+ 알뜰폰</label>
                  </div>
                </li>
                <li>
                  <div class="radio_item ty01">
                    <input type="radio" id="item_select_05" value="item_select_05" name="item_select" v-model="ALFMBU01PG01">
                    <label for="item_select_05">SKT 알뜰폰</label>
                  </div>
                </li>
                <li>
                  <div class="radio_item ty01">
                    <input type="radio" id="item_select_06" value="item_select_06" name="item_select" v-model="ALFMBU01PG01">
                    <label for="item_select_06">KT 알뜰폰</label>
                  </div>
                </li>
                <li>
                  <div class="radio_item ty01">
                    <input type="radio" id="item_select_07" value="item_select_07" name="item_select" v-model="ALFMBU01PG01">
                    <label for="item_select_07">없음</label>
                  </div>
                </li>
              </ul>
            </div>
          </div> -->
          
          <!-- <div class="form_group" v-if="etcTelecom">
            <strong class="form_label">알뜰폰 통신사</strong>
            <div class="form_item">
              <button type="button" class="btn_select" ref="btn_MVNO" @click="$refs.MVNO.open">선택</button>
            </div>
            <PopupSelect ref="MVNO" :option="{ data:'MVNO', popupTitle:'알뜰폰 통신사 선택', targetBtn:'btn_MVNO' }" @selectItem="console.log($event)" />
          </div> -->
          <!-- //08/22 기획서 수정으로 삭제 -->
          
          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            <div class="form_item"> <!-- class="form_item val_chk" 유효성 check -->
              <InputBox :option="{ type:'tel', placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력' }" @inputValue="console.log($event)" />
              <button type="button" class="btn md c03">인증번호 받기</button>
            </div>
            <div class="error">휴대폰 번호가 올바르지 않습니다</div>
            <div class="form_item"> <!-- class="form_item val_chk" 유효성 check -->
              <InputBox :option="{ placeholder:'인증번호', authNum:true }" @inputValue="console.log($event)" />
            </div>
            <div class="error">인증번호를 정확히 입력해주세요</div>
            <div class="text_info">휴대폰으로 전송된 인증번호를 3분안에 입력해 주세요.</div> <!-- 기본 문구 -->
            <!-- <div class="text_info">인증번호 유효시간이 지났습니다. 인증번호를 다시 받아주세요.</div> --> <!-- 인증번호 입력시간 초과시 문구 -->
          </div>

          <div class="btn_group">
            <button type="button" class="btn md c03">인증 확인</button>
          </div>

          <!-- 인증 완료 시 노출 -->
          <div class="btn_group">
            <button type="button" class="btn md c03" disabled>인증 완료</button>
          </div>
        </div>
      </div>
      
      <div class="page_wrap">
        <div class="page_info">배송 정보를 <br>입력해 주세요</div>
        <div class="page_tip">
          <div class="text_info">지금배송 주문가능 지역인지 확인하세요.</div>
        </div>
      </div>
      <div class="section">
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
            <strong class="form_label">배송 시 요청사항 (선택)</strong>
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
              <button type="button" class="btn lg c01" v-bind:disabled="nextBtn == false">다음으로</button>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import PopupSelect from '@/components/PopupSelect';
import InputBox from '@/components/InputBox';

export default {
  name: 'ALFM-BU01-PG01',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '배송정보' },
      
      deliveryRequestSelfInput:false,   //  배송시 요청사항 => 직접입력 선택

      // ALFMBU01PG01: '',
      // etcTelecom: false,
      nextBtn: false,
    }
  },
  watch: {
    // ALFMBU01PG01(a){
    //   this.etcTelecom = ( a == 'item_select_04' || a == 'item_select_05' || a == 'item_select_06' ) ? true : false;
    // },
  },
  methods:{
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
    InputBox,
    PopupSelect
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>
