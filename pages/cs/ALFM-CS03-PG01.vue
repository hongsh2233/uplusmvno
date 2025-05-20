<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>
      


      <div class="section">
        <div class="bsc_dtl_tit">
          <strong class="tit">[안내] eSIM 안내<span class="bag clr c06">중요</span></strong>
          <span class="date">2022.02.02</span>
        </div>

        <div class="bsc_dtl_con">
          <p>자사망 기반 알뜰폰 가입자에 가족 결합 허용…인터넷 결합 시 최대 1만3200원 할인</p>
            <img src="/images/data/img_detail.png" alt="U+ 알뜰폰 모델">
            <p>
              LG유플러스(대표 하현회)가 자사망 기반의 알뜰폰 가입자까지 가족결합 할인을 받을 수 있도록 결합 대상을 확대한다고 31일 밝혔다.
              <br><br>
              결합 대상 확대를 통해 가정에서 LG유플러스의 모바일이나 인터넷 서비스를 이용하는 가입자는 LG유플러스의 망 기반의 알뜰폰에 함께 가입한 후 ‘참 쉬운 가족결합’을 신청, 요금 할인을 받을 수 있다.
              <br><br>
              가족 구성원 중 다른 이동통신사를 이용하던 이용자가 LG유플러스 망 알뜰폰으로 바꾸는 경우에도 결합할인을 받을 수 있다. LG유플러스 인터넷과 결합할 경우, 매월 5천500원~1만3천200원 상당의 요금할인이 제공된다.
              <br><br>
              LG유플러스는 이번 결합 대상 확대가 이동통신사보다 저렴한 요금으로 동일한 품질의 통신 서비스를 누릴 수 있는 알뜰폰의 활성화를 지원하기 위함이라고 설명했다.
              <br><br>
              결합할인을 받을 수 있는 상품을 판매하는 알뜰폰 사업자는 U+알뜰폰 파트너스 홈페이지 및 고객센터를 통해 확인할 수 있다.
              <br><br>
              이와 함께 LG유플러스는 오는 10월 10일까지 알뜰폰 판매 이벤트도 진행한다. 이벤트 기간 중 편의점(GS25·CU·세븐일레븐·이마트24), 홈플러스, 다이소, 온라인마켓(U+알뜰폰 파트너스 홈페이지·G마켓·옥션)에서 유심을 구매하고, 알뜰폰 가입자에게는 LG유플러스가 제휴처 상품권 또는 포인트를 선물로 지급한다.
              <br><br>
              박준동 LG유플러스 전략채널그룹장은 “더 많은 이용자가 U+알뜰폰을 이용할 수 있도록 제휴처와 함께 추석맞이 특전을 준비했다”며 “알뜰폰 가입자에게 아쉬움이었던 유무선 결합할인도 9월부터 확대되므로 U+알뜰폰은 지속적으로 이용자에게 더 나은 서비스를 제공하기 위해 노력하겠다”고 말했다.
            </p>
        </div>
        <div class="btn_group">
          <NuxtLink :to="{}" role="button" class="btn md c05">목록 보기</NuxtLink>
        </div>
      </div> <!-- // section -->



    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-CS03-PG01',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '공지사항' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>