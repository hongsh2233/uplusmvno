<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">
          개인 인증 이후 신청한 요금제의 연령대와 가입자의 연령대가 맞지 않은 경우 알림 팝업 호출
        </h3>
      </div>

      <div class="section">
        <strong class="sub">65세 미만이 시니어 요금제를 신청한 경우</strong>
        <div class="btn_group">
          <button
            type="button"
            class="btn lg c03"
            id="btn_LG01Alert"
            @click="this.$emit('openAlert', ['LG01Alert', 'btn_LG01Alert', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <strong class="sub">보이스피싱 예방</strong>
        <div class="btn_group">
          <button
            type="button"
            class="btn md c03"
            id="btn_LG02Alert"
            @click="this.$emit('openAlert', ['LG02Alert', 'btn_LG02Alert', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <strong class="sub">만 19세 이상 고객</strong>
        <div class="btn_group">
          <button
            type="button"
            class="btn lg c03"
            id="btn_LG03Alert"
            @click="this.$emit('openAlert', ['LG03Alert', 'btn_LG03Alert', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <strong class="sub">외국인 고객</strong>
        <div class="btn_group">
          <button
            type="button"
            class="btn lg c03"
            id="btn_LG04Alert"
            @click="this.$emit('openAlert', ['LG04Alert', 'btn_LG04Alert', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <strong class="sub">외국인 미성년자 고객</strong>
        <div class="btn_group">
          <button
            type="button"
            class="btn lg c03"
            id="btn_LG05Alert"
            @click="this.$emit('openAlert', ['LG05Alert', 'btn_LG05Alert', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <strong class="sub">가입고객과 법정 대리인이 맞지 않을 시</strong>
        <div class="btn_group">
          <button
            type="button"
            class="btn lg c03"
            id="btn_LG06Alert"
            @click="this.$emit('openAlert', ['LG06Alert', 'btn_LG06Alert', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <strong class="sub">19세 미만 고객</strong>
        <div class="btn_group">
          <button
            type="button"
            class="btn lg c03"
            id="btn_LG07Alert"
            @click="this.$emit('openAlert', ['LG07Alert', 'btn_LG07Alert', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <strong class="sub">신분증 인증이 완료</strong>
        <div class="btn_group">
          <button
            type="button"
            class="btn lg c03"
            id="btn_LG08Alert"
            @click="this.$emit('openAlert', ['LG08Alert', 'btn_LG08Alert', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <strong class="sub">신분증 인증이 미 완료</strong>
        <div class="btn_group">
          <button
            type="button"
            class="btn lg c03"
            id="btn_LG09Alert"
            @click="this.$emit('openAlert', ['LG09Alert', 'btn_LG09Alert', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <strong class="sub">국내 체류 자격 30일 이내</strong>
        <div class="btn_group">
          <button
            type="button"
            class="btn lg c03"
            id="btn_LG10Alert"
            @click="this.$emit('openAlert', ['LG10Alert', 'btn_LG10Alert', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <strong class="sub">알닷에서 온라인 개통이 불가능</strong>
        <div class="btn_group">
          <button
            type="button"
            class="btn lg c03"
            id="btn_LG11Alert"
            @click="this.$emit('openAlert', ['LG11Alert', 'btn_LG11Alert', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <strong class="sub">가입가능한 회선이 초과</strong>
        <div class="btn_group">
          <button
            type="button"
            class="btn lg c03"
            id="btn_LG12Alert"
            @click="this.$emit('openAlert', ['LG12Alert', 'btn_LG12Alert', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <strong class="sub">신분증 인증이 미진행(유큐브 메시지)</strong>
        <div class="btn_group">
          <button
            type="button"
            class="btn lg c03"
            id="btn_LG13Alert"
            @click="this.$emit('openAlert', ['LG13Alert', 'btn_LG13Alert', 101])"
          >
            Alert
          </button>
        </div>
      </div>
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script setup>
const emit = defineEmits(["setLayout"]);
const layout = reactive({
  header: "sub2",
  footer: "none",
  title: "본인인증",
  floatMenu: "none",
});

onMounted(() => {
  emit("setLayout", layout);
});
</script>
