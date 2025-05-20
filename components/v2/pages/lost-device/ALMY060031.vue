<template>
  <div class="first-content-item confirm-area lost-regist">
    <div class="content-inner">
      <div class="cont-head">
        <h3 class="cont-title-main">
          휴대폰(유심) 분실 정보가<br /><strong class="txt-primary">등록</strong>되었어요
        </h3>
      </div>
    </div>

    <p class="icon">
      <img
        class="lost_regist_phone"
        src="/images/v2/content/img_lost_registration_phone.png"
        alt="손 이미지"
      />
      <img
        class="lost_regist_lock"
        src="/images/v2/content/img_lost_registration_lock.png"
        alt="손 이미지"
      />
    </p>

    <div class="content-item">
      <div class="content-inner">
        <CardGroup :card-object="cardObject" />
        <div class="gray-notice-box">
          <ul class="text-list bull">
            <li>분실등록 해제를 원하시면 [휴대폰 분실 등록/해제] 메뉴를 선택해 주세요.</li>
            <li>
              분실등록을 해제하면 서비스 일시정지와 함께 전화통화 수신 및 발신 금지 서비스도 함께
              해제됩니다
            </li>
            <li>선불 요금제를 이용하는 경우, 분실 등록을 하여도 일시정지는 불가합니다</li>
          </ul>
        </div>
      </div>
    </div>

    <BottomFixMenu :btnText="'확인'" :disabled="false" @click="nextPage" />
    <!-- // bottom_button -->
  </div>
</template>

<script setup>
import CardGroup from "@/components/v2/common/CardGroup";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";

// HOOK
import { useRouter } from "vue-router";
const router = useRouter();
const emit = defineEmits(["nextStep"]);

// 휴대폰 등록 완료 목업 데이터
const cardObject = ref([
  {
    list: [
      { name: "휴대폰 번호", value: "010-88**-35**" },
      { name: "휴대폰 모델명", value: "LGU-OMPHONE2" },
      { name: "단말 일련번호", value: "****************8043" },
      { name: "유심(개인정보) 카드 번호", value: "****************4601" },
    ],
  },
]);

const nextPage = () => {
  // 화면 검수용 임시 라우터 처리
  const pageNumber = 0;
  if (front.isMobile()) {
    router.push("/sc/AL-MY-06-002");
  } else {
    emit("nextStep", pageNumber);
  }
};
</script>
