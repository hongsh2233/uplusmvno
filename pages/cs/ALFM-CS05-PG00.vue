<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>
            
      <div class="section">
        <div class="box_gray">
          <ul class="text_list bull">
            <li>
              문의가 많은 경우 일시적으로 답변이 지연될 수 있습니다. 
              (답변 가능시간 : 평일 오전 9시 ~ 오후 6시)
            </li>
          </ul>
        </div>
      </div> <!-- // section -->

      <div class="section ty02">
        <div class="page_info">
          1:1 문의하기 작성을 위해 <br>
          본인인증을 해주세요
        </div>

        <div class="form_group">
          <strong class="form_label">고객명</strong>
          <div class="form_item">
            <InputBox :option="{ placeholder:'고객명' }" @inputValue="console.log($event)" />
          </div>
          <div class="error">고객명을 입력해 주세요</div>
        </div>


        <div class="form_group">
          <strong class="form_label">휴대폰 번호</strong>
          <div class="form_item">
            <InputBox :option="{ placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력' }" @inputValue="console.log($event)" />
            <button type="button" class="btn md c03">인증번호 받기</button>
          </div>
          <div class="error">휴대폰 번호가 올바르지 않습니다</div>
          <div class="form_item">
            <InputBox :option="{ placeholder:'인증번호', authNum:true }" @inputValue="console.log($event)" />
          </div>
          <div class="error">인증번호를 정확히 입력해주세요</div>
          <div class="text_info">휴대폰으로 전송된 인증번호를 3분안에 입력해 주세요.</div>
        </div>
        
        <div class="btn_group">
          <button type="button" class="btn md c03">인증 확인</button>
        </div>

        <div class="form_group">
          <div class="terms_consent">
            <div class="cst_box check_st">
              <input type="checkbox" id="check_all00" name="all">
              <label for="check_all00">개인정보 수집·이용 동의</label>
              <button type="button"><span class="blind">약관 보기</span></button>
            </div>
          </div>
        </div>

        <div class="acc_set">
          <ul>
            <li><NuxtLink :to="{}">알뜰폰닷컴 로그인</NuxtLink></li>
            <li><NuxtLink :to="{}">회원가입</NuxtLink></li>
          </ul>
        </div>

        <div class="form_group">
          <div class="btn_group">
              <button type="button" class="btn lg c01" disabled>확인</button>
          </div>
        </div>

      </div> <!-- // section -->



    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
import InputBox from '@/components/InputBox'

export default {
  name: 'ALFM-CS05-PG00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '1:1 문의하기' },
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