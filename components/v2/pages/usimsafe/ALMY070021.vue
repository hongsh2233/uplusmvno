<template>
  <div class="first-content-item confirm-area usimsafe">
    <div class="content-inner">
      <div class="cont-head">
        <h3 class="cont-title-main">
          유심보호서비스가<br />
          <strong class="txt-primary">신청</strong>되었어요
        </h3>
      </div>
    </div>

    <p class="icon">
      <img
        class="unregister_phone"
        src="/images/v2/content/img_usimsafe.png"
        alt="유심보호 서비스 신청완료"
      />
    </p>

    <div class="content-item">
      <div class="content-inner">
        <CardGroup :card-object="cardObject" />
        <div class="gray-notice-box">
          <ul class="text-list bull">
            <li><b>음성 로밍 차단</b>과 <b>데이터 로밍 차단</b> 서비스가 함께 신청되었어요. 신청 내역은 [가입정보] 메뉴의 [부가서비스] 항목에서 확인하실 수 있어요.</li>
            <li>해외로밍을 이용하시려면 서비스를 해지해 주세요.</li>
          </ul>
        </div>
      </div>
    </div>

    <BottomFixMenu :btnText="'확인'" :disabled="false" @click="nextPage" />
    <!-- // bottom_button -->
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import CardGroup from '@/components/v2/common/CardGroup';
import BottomFixMenu from '@/components/v2/common/BottomFixMenu';

// 라우터 및 이벤트
const router = useRouter();
const emit = defineEmits<{
  (e: 'nextStep', page: number): void;
}>();

//카드 데이터 목업
const cardObject = ref([
  {
    list: [
      { name: '회선 번호', value: '010-12**-26**' },
      { name: '가입일', value: '2025.05.07' },
    ],
  },
]);


// 화면 검수용 임시 라우터 처리
const nextPage = (): void => {
  const pageNumber = 0;
  if (front.isMobile()) {
    router.push('/sc/AL-MY-07-001');
  } else {
    emit('nextStep', pageNumber);
  }
};
</script>

