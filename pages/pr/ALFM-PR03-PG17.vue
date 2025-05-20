<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">청구서를 받으실 방법을 <br>선택해 주세요</div>

      <div class="section">

        <div class="item_list02">
          <ul>
            <li>
              <div class="radio_item ty01">
                <input type="radio" id="item_select_01" name="item_select" value="item_select_01" v-model="ALFMPR03PG17_values">
                <label for="item_select_01">이메일(상세내역)</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty01">
                <input type="radio" id="item_select_02" name="item_select" value="item_select_02" v-model="ALFMPR03PG17_values">
                <label for="item_select_02">문자(요약정보)</label>
              </div>
            </li>
          </ul>
        </div> <!-- // item_list02 -->
        <!-- <div id="panel_item_select_01" v-if="ALFMPR03PG17_values == 'item_select_01'">
          <div class="text_info">가입자 정보에 입력한 이메일 주소로 개통일 기준 30일 안에 가입 계약서를 받을 수 있습니다.</div>
        </div>
        <div id="panel_item_select_02" v-if="ALFMPR03PG17_values == 'item_select_02'">
          <div class="text_info">개통일 기준 30일 안에 문자메세지로 가입 계약서를 받을 수 있습니다.</div>
        </div> -->
      </div>

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c02" v-bind:disabled="prev == false">이전으로</button>
              <button type="button" class="btn lg c01">다음으로</button>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-PR03-PG17',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '청구서 수령방법' },
      ALFMPR03PG17_values: 'item_select_01',
      prev: true
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  }
}
</script>
