<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">flag & badge</div>
      
      <div class="section">
        <h3 class="tit02">btn badge</h3>
        <button type="button" class="btn bag c01" :class="{ on : flag[0] }" @click="flag[0] = !flag[0]"><span class="blind">찜하기</span>480</button>
        <button type="button" class="btn bag c02" :class="{ on : flag[1] }" @click="flag[1] = !flag[1]">비교하기</button>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">text badge</h3>
        <span class="bag clr c01">유심판매</span>
        <span class="bag clr c02">바로픽업</span>
        <span class="bag clr c03">답변완료</span>
        <span class="bag clr c04">결합할인</span>
        <span class="bag clr c05">회원가입</span>
        <span class="bag clr c06">혜택</span>
        <span class="bag clr c07">도로명</span>
        <span class="bag clr c08">도로명</span>
        <span class="bag clr c09">도로명</span>
        <span class="bag new">N</span>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">event badge</h3>
        <span class="bag evt dday">D-24</span>
        <span class="bag evt ty01">이번달 이벤트</span>
        <span class="bag evt ty02">친구초대</span>
        <span class="bag evt ty03">제휴 이벤트</span>
        <span class="bag evt ty04">제휴카드</span>
        <span class="bag evt ty05">Event Badge</span>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">Card badge</h3>
        <span class="bag card ty01">U<sup>+</sup>인터넷결합</span>
        <span class="bag card ty02">알닷ONLY</span>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">Card flag (고객지원 > 내 주변 매장찾기)</h3>
        <div class="shop_card">
          <div>
            <div class="card_flag">
              <i class="fla01">알뜰폰+</i>
              <i class="fla02">cs업무</i>
              <i class="fla03">선불유심개통</i>
            </div>
          </div>
        </div>
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'GuideFlag',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },
      flag: [false, false],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>
