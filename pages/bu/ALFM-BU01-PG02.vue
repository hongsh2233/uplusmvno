<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
      <div class="page_info">결제수단을 <br>선택해주세요</div>
        <div class="form_wrap">
          <div class="form_group">
            <div class="form_item">
              <div class="box_gray box_price">
                <span>구매수량</span>
                <div class="count">
                  <strong id='result'>{{ countResult }}</strong>
                  <button class="minus" id="countMinusBtn" @click="minus()" v-bind:disabled=" countResult <= 1 "><span class="blind">빼기</span></button>
                  <button class="plus" id="countPlusBtn" @click="plus()" disabled><span class="blind">추가</span></button>
                </div>
              </div>
            </div>
            <div class="form_item">
              <div class="box_gray box_price">
                <span>결제금액</span>
                <div class="price">
                  <strong>8,800원</strong>
                  <span class="fc02">부가세 포함</span>
                </div>
              </div>
            </div>
          </div>
          <div class="form_group">
            <strong class="form_label">결제수단</strong>
            <div class="form_item">
              <div class="item_list03">
                <ul>
                  <li>
                    <div class="radio_item ty07">
                      <input type="radio" id="ty07_radio_01" name="ty07_radio">
                      <label for="ty07_radio_01" class="img_pay ty01">신용카드</label>
                    </div>
                  </li>
                  <li>
                    <div class="radio_item ty07">
                      <input type="radio" id="ty07_radio_02" name="ty07_radio">
                      <label for="ty07_radio_02" class="img_pay ty02">실시간 계좌이체</label>
                    </div>
                  </li>
                  <li>
                    <div class="radio_item ty07">
                      <input type="radio" id="ty07_radio_03" name="ty07_radio">
                      <label for="ty07_radio_03" class="img_pay ty03">삼성페이</label>
                    </div>
                  </li>
                  <li>
                    <div class="radio_item ty07">
                      <input type="radio" id="ty07_radio_04" name="ty07_radio">
                      <label for="ty07_radio_04" class="img_pay ty04">카카오페이</label>
                    </div>
                  </li>
                  <li>
                    <div class="radio_item ty07">
                      <input type="radio" id="ty07_radio_05" name="ty07_radio">
                      <label for="ty07_radio_05" class="img_pay ty05">네이버페이</label>
                    </div>
                  </li>
                </ul>
              </div> <!-- // item_list03 -->
            </div>

          </div>
        </div>
      </div>
      <div class="section">
        <div class="page_info">유심 구매를 위한 <br>이용 약관이예요</div>
        <div class="terms_consent">
          <div class="cst_box check_st">
            <input type="checkbox" id="check_all02" name="all">
            <label for="check_all02"><b>전체 약관에 모두 동의합니다.</b></label>
          </div>

          <div class="cst_list list01 mgt0">
            <div class="cst_panel">
              <ul>
                <li>
                  <div class="check_st ty02">
                    <input type="checkbox" id="check_consent00_01" name="">
                    <label for="check_consent00_01">개인정보 수집/활용 동의 (필수)</label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
                <li>
                  <div class="check_st ty02">
                    <input type="checkbox" id="check_consent00_02" name="">
                    <label for="check_consent00_02">결제 취소/반품 조건에 대한 동의 (필수)</label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
                <li>
                  <div class="check_st ty02">
                    <input type="checkbox" id="check_consent00_03" name="">
                    <label for="check_consent00_03">개인정보 수집/활용 동의 <span>(선택)</span></label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
                <li>
                  <div class="check_st ty02">
                    <input type="checkbox" id="check_consent00_04" name="">
                    <label for="check_consent00_04">광고성 정보 수신  <span>(선택)</span></label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
              </ul>
            </div>
          </div>
        </div> <!-- // terms_consent -->
      </div>

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01" @click="snackbar = true" disabled>결제하기</button> <!-- disabled 제거하면 toast message 사용 가능 -->
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->

      <!-- toast message 추가 23/11/16 -->
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{message}}
      </v-snackbar>

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-BU02-PG02',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '결제 및 약관동의' },
      countResult: 1,
      snackbar: false,
      timeout: 3000,
      message: '2024년 00월 00일 알뜰폰닷컴 홈페이지의 광고성 수신동의가 완료되었습니다.',
    }
  },
  methods :{
    plus(){
      this.countResult += 1
    },
    minus(){
      this.countResult -= 1
      if( this.countResult < 1 ) this.countResult = 1;
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  }
}
</script>
