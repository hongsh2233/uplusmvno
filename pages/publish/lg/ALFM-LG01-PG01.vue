<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar -->
      <ProgressBar :barInfo="{ type: 'ty03', step: 1 }" />
      <!-- //progress bar -->

      <div class="page_info">
        가입하실 <span class="txt-orange">미성년자</span>의<br class="pc_hide" />
        본인인증을 진행해 주세요
      </div>

      <div class="section">
        <div class="form_group">
          <strong class="form_label">이름</strong>
          <div class="form_item val_chk">
            <!-- 에러없을시 val_chk 제거 -->
            <InputBox :option="{ placeholder: '이름 입력' }" @inputValue="console.log($event)" />
          </div>
          <div class="error">이름을 입력해 주세요</div>
          <div class="error">8자리의 숫자를 입력해주세요</div>
        </div>

        <div class="form_group">
          <strong class="form_label">주민등록번호</strong>
          <div class="form_item val_chk">
            <!-- 에러없을시 val_chk 제거 -->
            <InputBox
              :option="{ placeholder: '앞 6자리 입력' }"
              @inputValue="console.log($event)"
            />
            <span class="mark_div">-</span>
            <InputBox
              :option="{ type: 'password', placeholder: '뒤 7자리 입력' }"
              @inputValue="console.log($event)"
            />
          </div>
          <div class="error">주민등록번호를 입력해 주세요</div>
          <div class="error">주민등록번호를 정확히 입력해 주세요</div>
        </div>

        <div class="box_gray mgt20">
          <p><strong>[미성년자 실명인증 안내]</strong></p>
          <p>
            14세 미만 미성년자, 주민등록증 미발급 청소년, 금융거래 실적이 없는 성인 등 실명인증이 안
            되는 분은 신용평가정보회사 사이트에서 직접 실명인증을 등록하신 이후 신청서 작성이
            가능합니다.
          </p>
          <p>
            <NuxtLink to="https://www.niceid.co.kr/name_fowd.nc" target="_blank"
              >실명인증 등록하기 &gt;</NuxtLink
            >
          </p>
        </div>
      </div>
      <!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c02" v-bind:disabled="prev == false">
                이전으로
              </button>
              <button type="button" class="btn lg c01" v-bind:disabled="next == false">
                가입자 인증하기
              </button>
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
  title: "본인인증",
  floatMenu: "none",
});

// 이전, 인증하기 버튼
const prev: Ref<Boolean> = ref(true);
const next: Ref<Boolean> = ref(true);

onMounted(() => {
  emit("setLayout", layout);
});
</script>
