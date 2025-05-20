<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">Form</div>
      
      <div class="section">
        <h3 class="tit02">form_wrap</h3>
        <div class="form_wrap">
          <div class="form_group">
            <div class="form_label">수령인</div>
            <div class="form_item">
              <v-text-field placeholder="이름 입력" variant="outlined" required hide-details="auto" clearable></v-text-field>
            </div>
            <div class="form_item">
              <v-text-field type="password" placeholder="비밀번호 입력" variant="outlined" hide-details="auto" clearable></v-text-field>
            </div>
          </div>
          <div class="form_group">
            <div class="form_item">
              <v-text-field placeholder="검색어를 입력해주세요" append-inner-icon="mdi-magnify" variant="outlined" hide-details="auto" clearable></v-text-field>
            </div>
          </div>
          <!-- 휴대폰 번호 인증 요청 -->
          <div class="form_group">
            <div class="form_label">휴대폰 번호</div>
            <div class="form_item">
              <v-text-field placeholder="'-'없이 숫자만 입력" variant="outlined" hide-details="auto" clearable></v-text-field>
              <button type="button" class="btn md c03">인증번호 받기</button>
            </div>
            <div class="form_item auth_num">
              <v-text-field variant="outlined" hide-details="auto" clearable></v-text-field>
              <div class="timer">
                <span>0:01</span>
                <button type="button">시간연장하기</button>
              </div>
            </div>
          </div>
          <!-- 휴대폰 번호 인증 재요청 -->
          <div class="form_group">
            <div class="form_label">휴대폰 번호</div>
            <div class="form_item">
              <v-text-field placeholder="'-'없이 숫자만 입력" variant="outlined" hide-details="auto" clearable></v-text-field>
              <button type="button" class="btn md c03">인증 재요청</button>
            </div>
            <div class="form_item auth_num">
              <v-text-field variant="outlined" hide-details="auto" clearable></v-text-field>
              <div class="timer">
                <span>0:01</span>
                <button type="button">시간연장하기</button>
              </div>
            </div>
          </div>
          <div class="btn_group">
            <button type="button" class="btn lg c03">인증 확인</button>
          </div>
          <!-- 픽업 장소 확인 -->
          <div class="form_group">
            <div class="form_label">픽업 가능한 편의점 조회</div>
            <div class="form_item full">
              <button type="button" class="btn lg c04">GS25 편의점 조회</button>
            </div>
          </div>
          <!-- 주소 입력 -->
          <div class="form_group">
            <div class="form_label">주소</div>
            <div class="form_item">
              <v-text-field placeholder="우편주소" variant="outlined" hide-details="auto" disabled></v-text-field>
              <button type="button" class="btn md c03">우편번호 찾기</button>
            </div>
            <div class="form_item">
              <v-text-field placeholder="주소" variant="outlined" hide-details="auto" readonly></v-text-field>
            </div>
            <div class="form_item">
              <v-text-field v-model="addressEtc" placeholder="상세주소" variant="outlined" hide-details="auto" clearable></v-text-field>
            </div>
          </div>
          <!-- 주민번호 -->
          <div class="form_group">
            <div class="form_label">주민등록번호</div>
            <div class="form_item">
              <v-text-field placeholder="앞 6자리 입력" variant="outlined" hide-details="auto" clearable></v-text-field>
              <span class="mark_div">-</span>
              <v-text-field type="password" placeholder="뒤 7자리 입력" variant="outlined" hide-details="auto" clearable></v-text-field>
            </div>
          </div>
          <!-- 이메일 -->
          <div class="form_group">
            <div class="form_label">이메일</div>
            <div class="form_item">
              <v-text-field placeholder="이메일" variant="outlined" hide-details="auto" clearable></v-text-field>
              <span class="mark_div">@</span>
              <v-text-field placeholder="도메인" variant="outlined" hide-details="auto" clearable></v-text-field>
            </div>
          </div>



        </div>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">input</h3>
          
          <div class="form_group">
            <div class="form_label">수령인</div>
            <div class="form_item">
              <v-text-field placeholder="고객명" variant="outlined" clearable></v-text-field>
            </div>
          </div>
          <v-text-field placeholder="고객명 disabled" variant="outlined" disabled></v-text-field>
          <v-text-field placeholder="고객명 readonly" variant="outlined" readonly></v-text-field>
          <v-text-field prefix="010-***" placeholder="전화번호 입력" variant="outlined"></v-text-field>
          <v-text-field placeholder="검색어를 입력해주세요" append-inner-icon="mdi-magnify" variant="outlined" clearable></v-text-field>
          <v-text-field :rules="[rules.required]" placeholder="필수항목" variant="outlined" clearable></v-text-field>

      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'GuideTemplate',
  data: () => ({
    addressEtc: 'LG유플러스 상암사옥',
    rules: {
      required: value => !!value || 'Field is required',
    },
  }),
}
</script>
