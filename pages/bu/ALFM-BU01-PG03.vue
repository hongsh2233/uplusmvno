<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">결제가 <br>완료되었습니다</div>

      <div class="section">
        <h3 class="tit02">배송 정보</h3>
        <div class="list_info_ty01">
          <dl>
            <dt>수령인</dt>
            <dd><span>김알파</span></dd>
          </dl>
          <dl>
            <dt>휴대폰번호</dt>
            <dd>
              <span>010-2222-2222</span>
            </dd>
          </dl>
          <dl>
            <dt>주소</dt>
            <dd>
              <span>03924 서울특별시 마포구 월드컵로 416(상암동, ㈜엘지유플러스 상암사옥) 13층</span>
            </dd>
          </dl>
          <dl>
            <dt>배송시 요청사항</dt>
            <dd>
              <span>배송시 연락주세요.</span>
            </dd>
          </dl>
        </div>
      </div>

      <div class="section">
        <h3 class="tit02">유심비 결제</h3>
        <div class="list_info_ty01">
          <dl>
            <dt>구매수량</dt>
            <dd><span>1</span>개</dd>
          </dl>
          <dl>
            <dt>결제금액</dt>
            <dd><span>8,800</span>원(부가세포함)</dd>
          </dl>
          <dl>
            <dt>결제수단</dt>
            <dd><span>신용카드</span></dd>
          </dl>
        </div>
      </div>

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01">구매 내역 조회하기</button>
            </div>
            <div class="btn_group">
              <button type="button" class="btn lg c02">요금제 가입하러 가기</button>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-BU01-PG03',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '구매 완료' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  }
}
</script>
