<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">사용하고 싶은 희망 번호를 <br>선택해 주세요</div>

      <div class="section">
        <div class="form_wrap" v-if="ALFMPR03PG14 == false">
          <!-- 희망번호 찾기 팝업에서 번호 선택 시 노출 -->
          <div class="form_group">
            <strong class="form_label">희망 번호</strong>
            <div class="form_item">
              <InputBox :option="{ value:'01011111111', placeholder:'희망 번호', disabled:true }" @inputValue="console.log($event)" />
            </div>
          </div>
          <div class="btn_group">
            <button type="button" class="btn md c03">번호찾기</button>
          </div>
          <div class="text_info">개통 시점에 따라 다른 번호로 변경될 수 있습니다.</div>
        </div>
        <div class="terms_consent">
          <div class="cst_box check_st">
            <input type="checkbox" id="item_select01" name="item_select" v-model="ALFMPR03PG14">
            <label for="item_select01">어떤 번호든 좋습니다</label>
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
import InputBox from '@/components/InputBox'

export default {
  name: 'ALFM-PR03-PG14',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '희망번호 선택' },
      prev: true,
      ALFMPR03PG14: false,
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    InputBox,
  },
}
</script>
