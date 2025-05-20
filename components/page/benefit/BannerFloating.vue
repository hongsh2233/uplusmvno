<template>
  <div :class="['banner-floating', { on: bannerScrolled }]">
    <div class="heading">
      <p class="title">전문 상담사를 통해 빠르게 가입해 보세요.</p>
      <div class="tel-info">
        <a href="tel:1833-2979" class="tel">1833-2979</a>
        <span class="badge">ARS &gt; 1번</span>
      </div>
    </div>
    <dl class="counseling-area">
      <div>
        <dt>상담전화 시간&nbsp;:&nbsp;</dt>
        <dd>평일 9시~19기, 토요일 9시~12시</dd>
      </div>
      <div>
        <dt>상담 예약&nbsp;:&nbsp;</dt>
        <dd>24시간 언제나 가능</dd>
      </div>
    </dl>
    <div class="btn-group">
      <button type="button" class="btn call-custom"><em>상담 전화 걸기</em></button>
      <button type="button" class="btn call-reservation"><em>상담 예약하기</em></button>
    </div>
  </div>
</template>

<script setup>
const bannerScrolled = ref(true);
const lastScrollY = ref(0);

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  bannerScrolled.value = currentScrollY <= lastScrollY.value;
  lastScrollY.value = currentScrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
