<template>
  <div class="auth-wrap">
    <div class="cont-head title-main">
      <h3 class="cont-title-main">
        본인 확인을 위한<br/>
        <b class="txt-primary">인증 정보</b>를 입력해 주세요
      </h3>
    </div>
    <ul class="auth-select-list">
      <li v-for="(data, idx) in authRadio" :key="idx">
        <input type="radio" name="auth-select" :id="data.id" class="blind">
        <label :for="data.id">
          <span class="ico-img-wrap"><img :src="data.src" :alt="data.alt"></span>
          {{ data.name }}
        </label>
      </li>
    </ul>

    <div class="gray-notice-box">
      <p class="text-list-tit">휴대폰</p>
      <ul class="text-list bull">
        <li>본인 명의의 휴대폰으로 인증이 가능해요.</li>
      </ul>
      <p class="text-list-tit">간편인증(카카오, 네이버, PASS, 토스)</p>
      <ul class="text-list bull">
        <li>본인 명의의 인증서로 간편 인증이 가능해요.</li>
        <li>각 인증서는 해당 인증서 앱 설치 후 발급이 가능해요.</li>
      </ul>
      <p class="text-list-tit">신용카드</p>
      <ul class="text-list bull">
        <li>본인 명의의 신용카드로 인증을 진행해 주세요.</li>
        <li>체크카드로는 본인인증을 할 수 없어요.</li>
        <li>만 19세 미만은 신용카드로 인증할 수 없으니, 다른 인증방법을 선택해 주세요.</li>
      </ul>
    </div>
    <!-- // bottom_button -->
  </div>
</template>

<script setup>

  import { useRouter } from "vue-router";
  const router = useRouter();
  const emit = defineEmits(["nextStep"]);

  // 24.11.01 본인확인 방법 추가 (공동인증서, 아이핀)
  const authRadio = [
    {id: 'auth-select-00', name: '휴대폰', src: '/images/v2/common/ico_auth_phone.png', alt: '휴대폰 아이콘 이미지'},
    {id: 'auth-select-01', name: '카카오', src: '/images/v2/common/ico_auth_kakao.svg', alt: '카카오 아이콘 이미지'},
    {id: 'auth-select-02', name: '네이버', src: '/images/v2/common/ico_auth_naver.svg', alt: '네이버 아이콘 이미지'},
    {id: 'auth-select-03', name: 'PASS', src: '/images/v2/common/ico_auth_pass.png', alt: 'PASS 아이콘 이미지'},
    {id: 'auth-select-04', name: '토스', src: '/images/v2/common/ico_auth_toss.png', alt: '토스 아이콘 이미지'},
    {id: 'auth-select-05', name: '신용카드', src: '/images/v2/common/ico_auth_card.svg', alt: '신용카드 아이콘 이미지'},
    {id: 'auth-select-06', name: '공동인증서', src: '/images/v2/common/ico_auth_cert.png', alt: '공동인증서 아이콘 이미지'},
    {id: 'auth-select-07', name: '아이핀', src: '/images/v2/common/ico_auth_ipin.png', alt: '아이핀 아이콘 이미지'},
  ]

  const nextPage = () => {
    // 화면 검수용 임시 라우터 처리
    if (front.isMobile()) {
    } else {
    }
  };
</script>
