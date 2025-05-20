<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav" v-html="layout.title"></h2>

      <div class="section">

        <div class="bsc_dtl_tit">
          <span class="date_rel">발표일 <span>2023.10.10</span></span>
          <strong class="tit">[안내] eSIM 안내</strong>
          <span class="date"><span>{{ startDay }}</span> - <span>{{ endDay }}</span></span>
        </div>

        <div class="bsc_dtl_con">
          <div class="win_tit">
            <strong class="win_grt">안녕하세요</strong>
            <strong class="win_evt"><span class="fc01">{{ eventTitle }} {{ eventDay }}</span> 당첨을 축하드립니다</strong>
          </div>
          <!-- //타이틀 -->
          <div class="win_list">
            <ul>
              <li>
                <strong>{{ gifts1 }}</strong>
                <strong class="fc01">{{ number1 }}명</strong>
                <div class="box_gray one_win">
                  <ul>
                    <li v-for="(d, i) in dataGifts1" :key="i">{{ d.name }}({{ d.telecom }}) ({{ d.id }})</li>
                  </ul>
                </div>
              </li>
              <li>
                <strong>{{ gifts2 }}</strong>
                <strong class="fc01">{{ number2 }}명</strong>
                <div class="box_gray">
                  <ul>
                    <li v-for="(d, i) in dataGifts2" :key="i">{{ d.name }}({{ d.telecom }}) ({{ d.id }})</li>
                  </ul>
                </div>
              </li>
              <li>
                <strong>{{ gifts3 }}</strong>
                <strong class="fc01">{{ number3 }}명</strong>
                <div class="box_gray">
                  <ul>
                    <li v-for="(d, i) in dataGifts3" :key="i">{{ d.name }}({{ d.telecom }}) ({{ d.id }})</li>
                  </ul>
                </div>
              </li>
            </ul>
            <div class="text_info">괄호 안 숫자는 당첨자 전화번호 뒷자리입니다</div>
          </div>
          <!-- //당첨자 내역 -->

          <h3 class="tit02">제세공과금 안내</h3>
          <div class="box_gray">
            <ul class="text_list bull">
              <li>제세공과금 대상 경품은 자이언트 로드자전거(SCR2), 코베아 고급 캠핑의자 입니다.</li>
              <li>제세공과금 신고를 위해 당첨자 서류 수취가 필요하며, 서류 미제출 시 자동으로 당첨 취소됩니다.</li>
              <li>제세공과금 신고를 위해 성인만 수령 가능하며, 당첨자가 미성년자일 경우 가족관계증명서 확인 후 대신 수령 가능합니다.</li>
              <li>이벤트 응모 시 가입한 휴대폰번호로 개별 연락을 드리며, 영업일 기준 4일간 (10/4~10/7) 연락이 되지 않는 경우 최종 당첨이 취소됩니다.</li>
              <li>당첨발표일 최초 1회 문자 발송, 이후 유선으로 개별 연락 시도 예정</li>
              <li>제세공과금 관련 안내/문의는 펜타클 uplus_alpha@mz.co.kr/02-2109-2580으로 연락바랍니다.</li>
            </ul>
          </div>
          <!-- //제세공과금 안내 -->
        </div>

        <div class="btn_group">
          <button type="button" class="btn md c05">목록보기</button>
        </div>

      </div>


    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-BE03-PG00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '당첨자 발표' },
      eventTitle: '모두의 유심, 원칩 이벤트',
      eventDay: '(10월)',
      startDay: '2022.10.01',
      endDay: '2022.10.31',
      gifts1: '1.자이언트 로드 자전거',
      number1: '1',
      dataGifts1:[
        { name: '김*우', telecom: '인스코리아', id: '5117',},
      ],
      gifts2: '2.코베아 고급 캠핑 의자',
      number2: '5',
      dataGifts2:[
        { name: '양*주', telecom: '인스코리아', id: '7654',},
        { name: '양*주', telecom: '인스코리아', id: '7654',},
        { name: '김*우', telecom: '인스코리아', id: '5117',},
        { name: '김*우', telecom: '인스코리아', id: '5117',},
        { name: '이*민', telecom: '한국케이블텔레콤 (티플러스)', id: '0924',},
      ],
      gifts3: '3.원터치 텐트',
      number3: '10',
      dataGifts3:[
        { name: '양*주', telecom: '인스코리아', id: '7654',},
        { name: '양*주', telecom: '인스코리아', id: '7654',},
        { name: '김*우', telecom: '인스코리아', id: '5117',},
        { name: '김*우', telecom: '인스코리아', id: '5117',},
        { name: '이*민', telecom: '한국케이블텔레콤 (티플러스)', id: '0924',},
        { name: '김*우', telecom: '인스코리아', id: '5117',},
        { name: '김*우', telecom: '인스코리아', id: '5117',},
        { name: '이*민', telecom: '한국케이블텔레콤 (티플러스)', id: '0924',},
      ],

    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>
