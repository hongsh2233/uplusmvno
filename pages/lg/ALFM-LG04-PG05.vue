<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">알뜰폰닷컴 홈페이지를 이용하시기 위해 본인인증을 진행해 주세요</div>

      <div class="section">
        <div class="form_wrap">
          <div class="btn_group_spac">
            <!-- 인증 전 -->
            <div class="btn_group">
              <button type="button" class="btn md c03">본인인증하기</button>
            </div>

            <!-- 인증 후 -->
            <div class="btn_group">
              <button type="button" class="btn md c03" disabled>인증 완료</button>
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

<script>
import InputBox from "@/components/InputBox";

export default {
  name: "ALFM-LG04-PG05",
  emits: ["setLayout", "openPopup"],

  data() {
    return {
      layout: { header: "sub2", footer: "none", floatMenu: "none", title: "본인 인증" },
    };
  },
  mounted() {
    this.$emit("setLayout", this.layout);
  },
  components: {
    InputBox,
  },
};
</script>
