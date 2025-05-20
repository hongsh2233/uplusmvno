<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">지금 번호 그대로 사용하기 위해 <br>추가 인증을 진행해 주세요</div>

      <div class="section">
        <div class="form_wrap">

          <div class="form_group">
            <strong class="form_label">현재 요금납부방법</strong> <!-- 09/21 텍스트 수정 -->
            <div class="form_item">
              <button type="button" class="btn_select" ref="btn_payType" @click="$refs.payType.open">선택</button>
            </div>
            <PopupSelect ref="payType" :option="{ data:'payType', popupTitle:'선택', targetBtn:'btn_payType' }" @selectItem="selectItem = $event.value" />
          </div>

          <!-- 계좌번호 선택할 때 -->
          <div class="form_group" id="select_account" v-show="selectItem == 0">
            <strong class="form_label">계좌번호 뒤 4자리</strong>
            <div class="form_item"><!-- class="form_item val_chk" 유효성 check -->
              <InputBox :option="{ placeholder:'계좌번호 뒤 4자리 입력' }" @inputValue="console.log($event)" />
            </div>
            <div class="error">계좌번호를 정확히 입력해주세요</div>
          </div>

          <!-- 신용카드 선택할 때 -->
          <div class="form_group" v-show="selectItem == 1">
            <strong class="form_label">신용카드 뒤 4자리</strong>
            <div class="form_item"><!-- class="form_item val_chk" 유효성 check -->
              <InputBox :option="{ placeholder:'신용카드 뒤 4자리 입력' }" @inputValue="console.log($event)" />
            </div>
            <div class="error">신용카드를 정확히 입력해주세요</div>
          </div>
        </div>

      </div>

      <div class="section">
        <!-- 계좌번호 선택할 때 -->
        <div class="box_gray" v-show="selectItem == 0">
          <ul class="text_list bull">
            <li>요금을 납부하는 은행 계좌번호의 뒤 4자리를 입력해 주세요.</li>
            <li>평생 계좌번호는 인증할 수 없어요.</li>
            <li>해당 정보가 정확하지 않을 경우 개통이 지연될 수 있어요.</li>
          </ul>
        </div>
        <!-- 신용카드 선택할 때 -->
        <div class="box_gray" v-show="selectItem == 1">
          <ul class="text_list bull">
            <li>요금을 납부하는 체크카드 또는 신용카드 번호의 뒤 4자리를 입력해 주세요.</li>
            <li>해당 정보가 정확하지 않을 경우 개통이 지연될 수 있어요.</li>
          </ul>
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
  name: 'ALFM-PR03-PG15',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '번호이동 추가인증' },
      selectItem: null,
      prev: true,
      dataPayType: this.frontData.select.payType,
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
