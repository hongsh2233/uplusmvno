<template>
  <div class="AL-MY-05-500-P04">
    <div class="first-content-item">
      <div class="content-item">
        <div class="content-inner">
          <div class="cont-head title-main">
            <h3 class="cont-title-main">
              사용하고 싶은 <b class="txt-primary">희망 번호</b>를<br />
              선택해 주세요
            </h3>
          </div>

          <div class="form-box">
            <div class="title-area">
              <strong class="title">현재 이용 중인 번호</strong>
            </div>
            <InputForm class="combobox-bottom text view" :option="{ value: '010-****-2612', readonly: true }" />
          </div>
          <div class="form-box">
            <div class="title-area">
              <strong class="title">희망 번호</strong>
            </div>
            <div class="form_group">
              <div class="form_item val_chk">
                <InputForm class="combobox-bottom" :option="{ placeholder: `희망 번호 뒤 4자리 입력` }" />
              </div>
            </div>
          </div>
          <div class="inner-section">
            <div class="btn-area join-btn-wrap">
              <button type="button" class="btn-rounded btn-line">번호 찾기</button>
            </div>
          </div>

          <p class="notice-txt">
            번호 찾기를 하실 경우, 기존에 신청하셨던<br class="pc_hide" />
            희망번호와 달라질 수 있습니다.
          </p>

          <div class="inner-section">
            <div class="check-txt check_st">
              <input type="checkbox" id="checkbox01_02" name="" />
              <label for="checkbox01_02">개인정보 수집 · 이용 동의(필수)</label>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom_float on-selfcare">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn-area">
              <button class="btn-rounded primary" :class="{ disabled: true }" :disabled="true">인증하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputForm from "@/components/v2/common/InputForm.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/popup/al-my-05-500-p04" as *;
</style>
