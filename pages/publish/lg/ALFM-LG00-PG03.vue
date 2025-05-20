<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">
        만 14세 미만의 고객님은<br class="pc_hide" />
        법정 대리인의 동의가 필요해요
      </div>

      <div class="section">
        <h3 class="tit02">가입 신청자 정보</h3>
        <div class="list_info_ty01">
          <dl>
            <dt>이름</dt>
            <dd><span>홍길동</span></dd>
          </dl>
          <dl>
            <dt>생년월일</dt>
            <dd>
              <span>2000.00.00</span>
            </dd>
          </dl>
          <dl>
            <dt>성별</dt>
            <dd>
              <span>남</span>
            </dd>
          </dl>
        </div>
      </div>

      <div class="section ty03">
        <div class="page_info">
          법정 대리인의 본인인증을<br class="pc_hide" />
          진행해 주세요
        </div>
        <div class="form_wrap">
          <div class="btn_group_spac">
            <div class="btn_group">
              <button type="button" class="btn md c03">본인인증하기</button>
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

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01" disabled>다음으로</button>
            </div>
          </div>
        </div>
      </div>
      <!-- // bottom_float -->
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits(["setLayout"]);
const layout = reactive({
  header: "sub2",
  footer: "none",
  title: "법정 대리인 동의",
  floatMenu: "none",
});

onMounted(() => {
  emit("setLayout", layout);
});
</script>
