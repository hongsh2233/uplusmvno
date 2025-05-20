<template>
  <div class="container single-container">
    <div class="content" id="content">
      <h2 class="title_nav pc_show">{{ layout.title }}</h2>

      <div class="page_info">
        <em>박연진</em>님, 회원가입을 완료했어요.<br class="show" />
        알뜰폰닷컴의 회원이 되신 것을<br class="pc_hide" />
        환영합니다!
      </div>

      <div class="section">
        <div class="gray-notice-box account-usage-tips">
          <div class="title-area">
            <strong class="title"
              ><span class="fc01">휴대폰을 등록</span>하여<br class="pc_hide" />
              더 편리한 서비스를 누려 보세요</strong
            >
          </div>
          <ul class="text_list bull">
            <li>
              자급제 휴대폰으로 분실/파손보험 가입이 필요한 고객님(휴대폰 정보가 등록된 단말만
              분실 접수가 가능해요)
            </li>
            <li>번호를 변경하고 싶으신 고객님</li>
            <li>유심만 개통 후 일부 서비스 이용이 안되시는 고객님</li>
          </ul>
          <div class="btn-area">
            <button type="button" class="btn-rounded btn-line-mono">휴대폰 등록하기</button>
          </div>
        </div>
      </div>

      <div class="join_char">
        <Lottie name="complete" />
      </div>

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <NuxtLink :to="{}" role="button" class="btn lg c01">로그인 하기</NuxtLink>
            </div>
            <div class="btn_group">
              <NuxtLink :to="{}" role="button" class="btn md c02">요금제 보러가기</NuxtLink>
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

<script setup>
import Lottie from "@/components/Lottie";

// 헤더 정보
const layout = ref({
  header: "sub",
  footer: "none",
  floatMenu: "none",
  title: "회원가입 완료",
});

// HOOK
const emit = defineEmits(["setLayout"]);

onMounted(() => {
  emit("setLayout", layout);
});
</script>
