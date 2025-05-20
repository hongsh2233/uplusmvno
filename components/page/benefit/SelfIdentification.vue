<template>
  <div class="section mgb32">
    <div class="page_info">
      이벤트 당첨을 확인하기 위해<br class="pc_hide" />
      본인인증을 진행해 주세요.
    </div>
    <div class="form_wrap">
      <div class="btn_group_spac">
        <div class="btn-area">
          <button type="button" class="btn-rounded primary">본인인증하기</button>
        </div>
      </div>

      <div class="form_group">
        <div class="form_label">이름</div>
        <div class="form_item">
          <InputBox
            :option="{
              type: 'text',
              readonly: true,
              placeholder: '본인인증을 하면 자동 입력됩니다',
            }"
          />
        </div>
      </div>
      <div class="form_group">
        <div class="form_label">휴대폰번호</div>
        <div class="form_item">
          <InputBox
            :option="{
              readonly: true,
              placeholder: '본인인증을 하면 자동 입력됩니다',
            }"
          />
        </div>
      </div>
      <div class="form_group">
        <div class="form_label">통신사</div>
        <div class="form_item">
          <InputBox
            :option="{
              readonly: true,
              placeholder: '본인인증을 하면 자동 입력됩니다',
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
