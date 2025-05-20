<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <!-- 1:1 문의 내역 -->
        <div class="box_yellow">
          <div class="my_box">
            <p>
              궁금하신 사항은 <span>1:1 문의하기</span>를 통해 <br>
              확인해 보세요
            </p>
            <button type="button" class="btn sm c01">1:1 문의하기</button>
          </div>
        </div>
      </div>
      <div class="section">
        <v-expansion-panels class="acd_wrap" v-model="acd" multiple>
          <v-expansion-panel class="acd_item ty06">
            <div class="acd_title qna_tit">
              <v-expansion-panel-title>
                <strong> 납기일은 어떻게 되나요?</strong>
                <div class="qna_ty">
                    <div class="bag clr c02">접수완료</div>
                    <span>2022.08.03</span>
                    <span>가입/변경/해지</span>
                </div>
              </v-expansion-panel-title>
            </div>
            <div class="acd_panel qna_con">
              <v-expansion-panel-text>
                <div role="region">
                  <dl class="con_area">
                    <dt class="label">Q</dt>
                    <dd class="txt">혜택으로 받은 포인트는 기간이 정해져있나요?</dd>
                    <dt class="label">A</dt>
                    <dd class="txt">안녕하세요 홍길동 고객님 홈페이지 문의 건 증가로 순차적으로 답변을 하다보니답변이 지연된 점 너그러운 마음으로 양해 부탁드립니다. 고객님께서 “요금제 혜택‘ 관련하여 문의를 하셨는데요. 문의 해주신 요금제와 관련하여 제공되는 혜택은</dd>
                  </dl>
                </div>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
          <v-expansion-panel class="acd_item ty06">
            <div class="acd_title qna_tit">
              <v-expansion-panel-title>
                <strong>미납 문자메시지를 받았어요. 어떻게 해야 하나요?</strong>
                <div class="qna_ty">
                    <div class="bag clr c01">답변완료</div>
                    <span>2022.08.03</span>
                    <span>요금제</span>
                </div>
              </v-expansion-panel-title>
            </div>
            <div class="acd_panel qna_con">
              <v-expansion-panel-text>
                <div role="region">
                  <dl class="con_area">
                    <dt class="label">Q</dt>
                    <dd class="txt">혜택으로 받은 포인트는 기간이 정해져있나요?</dd>
                    <dt class="label">A</dt>
                    <dd class="txt">안녕하세요 홍길동 고객님 홈페이지 문의 건 증가로 순차적으로 답변을 하다보니답변이 지연된 점 너그러운 마음으로 양해 부탁드립니다. 고객님께서 “요금제 혜택‘ 관련하여 문의를 하셨는데요. 문의 해주신 요금제와 관련하여 제공되는 혜택은</dd>
                  </dl>
                </div>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>

        <!-- markup 변경 ; 23/11/08 -->
        <div class="btn_wrap center">
          <button type="button" class="btn round more_d">더 볼래요</button>
        </div>
        <!-- //markup 변경 ; 23/11/08 -->
        <NoData :option="{type:'his', html:'<p>문의하신 내역이 없습니다.</p>'}" />

      </div>

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import NoData from '@/components/NoData'

export default {
  name: 'ALFM-MY06-LT00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '1:1 문의 내역' },
      acd: [],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components: {
    NoData,
  },
}
</script>
