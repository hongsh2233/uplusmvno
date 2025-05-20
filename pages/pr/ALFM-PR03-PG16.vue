<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">요금을 납부하실 방법을 <br>선택해 주세요</div>

      <div class="section">

        <div class="item_list02">
          <ul>
            <li>
              <div class="radio_item ty01">
                <input type="radio" id="item_select_01" name="item_select" value="item_select_01" v-model="ALFMPR03PG16">
                <label for="item_select_01">신용카드</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty01">
                <input type="radio" id="item_select_02" name="item_select" value="item_select_02" v-model="ALFMPR03PG16">
                <label for="item_select_02">계좌이체</label>
              </div>
            </li>
          </ul>
        </div> <!-- // item_list02 -->
      </div>
      <div class="section">
        <div id="panel_item_select_01" v-if="ALFMPR03PG16 == 'item_select_01'">
          <div class="form_wrap">
            <div class="form_group">
              <strong class="form_label">신용카드 번호</strong>
              <div class="form_item"><!-- class="form_item val_chk" 유효성 check -->
                <InputBox :option="{ placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력' }" @inputValue="console.log($event)" />
              </div>
              <div class="error">신용카드 정보를 다시 입력해주세요</div>
              <div class="form_item"><!-- class="form_item val_chk" 유효성 check -->
                <InputBox :option="{ placeholder:'MMYY', maxLength:4, }" @inputValue="console.log($event)" />
              </div>
              <div class="error">신용카드 정보를 다시 입력해주세요</div>
            </div>
          </div>
        </div>
        <div id="panel_item_select_02" v-if="ALFMPR03PG16 == 'item_select_02'">
          <div class="form_wrap">

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

          </div>
        </div>
      </div>
      <div class="section">
        <div class="terms_consent">
          <div class="cst_box check_st">
            <input type="checkbox" id="check_01" name="agreement">
            <label for="check_01">자동결제 또는 자동이체에 동의합니다. (필수)</label>
          </div>
        </div>
        <div class="btn_group">
          <button type="button" class="btn md c01" disabled>{{ certifyBtn }}</button>
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
import PopupSelect from '@/components/PopupSelect'
import InputBox from '@/components/InputBox'

export default {
  name: 'ALFM-PR03-PG16',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '요금납부정보' },
      prev: true,
      ALFMPR03PG16: 'item_select_01',
      certifyBtn: '카드 등록하기',

    }
  },
  watch: {
    ALFMPR03PG16(a){
      this.certifyBtn = ( a == 'item_select_01' ) ? '카드 등록하기' : '인증하기';
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    PopupSelect,
    InputBox,
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>
