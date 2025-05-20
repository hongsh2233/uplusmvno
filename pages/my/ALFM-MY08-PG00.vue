<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">
        회원님의 안전한 <br>
        개인정보 보호를 위해 비밀번호를 <br>
        다시 한번 확인합니다
      </div>

      <div class="section">
        <div class="form_wrap">
          <div class="form_group">
            <div class="form_label">비밀번호</div>
            <div class="form_item"> <!-- class="form_item val_chk" -->
              <InputBox :option="{ type:'password', placeholder:'비밀번호 입력' }" @inputValue="console.log($event)" />
            </div>
            <div class="error">비밀번호를 다시 확인해주세요</div>
            <div class="error">비밀번호를 입력해주세요</div>
          </div>
        </div>
        <div class="btn_group">
          <button type="button" class="btn md c03">확인</button>
        </div>
      </div>

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import InputBox from '@/components/InputBox'

export default {
  name: 'ALFM-MY08-PG00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '내 정보 수정' },
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
