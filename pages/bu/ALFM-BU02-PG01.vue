<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">픽업정보를 <br>입력해주세요</div>

      <div class="section">
        <div class="form_wrap">
          <div class="form_group">
            <strong class="form_label">수령인</strong>
            <div class="form_item"> <!-- class="form_item val_chk" 유효성 check -->
              <InputBox :option="{ placeholder:'수령인 입력', }" @inputValue="console.log($event)" />
            </div>
            <div class="error">수령인을 입력해주세요</div>
            <div class="error">수령인을 정확히 입력해주세요</div>
          </div>
          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            <div class="form_item">
              <InputBox :option="{ type:'tel', placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력' }" @inputValue="console.log($event)" />
              <button type="button" class="btn md c03">인증번호 받기</button>
            </div>
            <div class="error">휴대폰 번호가 올바르지 않습니다</div>
            <div class="form_item">
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
          <div class="form_group">
            <strong class="form_label">픽업 가능한 편의점 조회</strong>
            <div class="form_item">
              <button type="button" class="btn md c04">GS25 편의점 조회</button>
            </div>
          </div>

        </div>
      </div>
      <div class="section">
        <div class="box_gray">
          <ul class="text_list bull">
            <li>유심 픽업 가능한 GS25 편의점 조회하여 수신 받은 쿠폰으로 가까운 매장을 방문해주세요.</li>
            <li>매장 방문 전 반드시 매장에 바로픽업이 가능한지 전화로 확인 하시기 바랍니다.</li>
          </ul>
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
import InputBox from '@/components/InputBox';

export default {
  name: 'ALFM-BU02-PG01',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '배송/픽업정보' },

      nextBtn: false,
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
