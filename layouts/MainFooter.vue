<template>

  <footer class="footer" v-if="layout.footer != 'none'">
    <div class="inner">
      <div class="f_logo">
        <NuxtLink :to="{}"><span class="blind">LG U+</span></NuxtLink>
      </div>
      <div class="f_buttom">
        <NuxtLink :to="{}">이용약관</NuxtLink>
        <NuxtLink :to="{}" class="policy">개인정보처리방침</NuxtLink>
        <NuxtLink :to="{}">개인정보이용내역</NuxtLink>
        <NuxtLink :to="{}">이메일무단수집거부</NuxtLink>
        <NuxtLink to="https://msafer.or.kr/index.do" target="_blank" title="새 창 열림">명의도용방지서비스</NuxtLink>
        <NuxtLink to="https://spam.kisa.or.kr/" target="_blank" title="새 창 열림">불법스팸대응센터</NuxtLink>
      </div>
      <div class="f_info">
        <p>(주)엘지유플러스</p>
        <p><span>대표이사 황현식</span><span>사업자등록번호 220-81-39938</span></p>
        <p>서울특별시 용산구 한강대로 32</p>
        <p>통신판매신고 제 2015-서울용산-00481호</p>
      </div>
      <div class="f_copyright">
        Copyright © LG Uplus Corp. All Rights Reserved.
      </div>
      <div class="f_sns">
        <NuxtLink :to="{}" class="ico_youtube" title="새 창 열림"><span class="blind">youtube</span></NuxtLink>
        <NuxtLink :to="{}" class="ico_instagram" title="새 창 열림"><span class="blind">instagram</span></NuxtLink>
      </div>
    </div>
  </footer>

</template>

<script>
export default {
  name: 'MainFooter',
  props: {
    layout: Object,
  }
}
</script>
