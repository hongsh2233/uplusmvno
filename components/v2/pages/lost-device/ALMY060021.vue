<template>
  <div class="first-content-item confirm-area unregister-lost">
    <div class="content-inner">
      <div class="cont-head">
        <h3 class="cont-title-main">
          휴대폰(유심) 분실 등록이<br /><strong class="txt-primary">해제</strong>되었어요
        </h3>
      </div>
    </div>

    <p class="icon">
      <img
        class="unregister_phone"
        src="/images/v2/content/img_unregister_phone.png"
        alt="핸드폰 이미지"
      />
      <img
        class="unregister_shadow"
        src="/images/v2/content/img_unregister_location_shadow.png"
        alt="그림자 이미지"
      />
      <img
        class="unregister_location"
        src="/images/v2/content/img_unregister_location.png"
        alt="앵커 이미지"
      />
    </p>

    <div class="content-item">
      <div class="content-inner">
        <CardGroup :card-object="cardObject" />
        <div class="gray-notice-box">
          <ul class="text-list bull">
            <li>
              파트너사를 통해 휴대폰(유심) 분실 접수 시, 이용정지를 함께 신청하셨다면 알닷케에서
              분실 해제 신청을 하셔도 이용정지는 해제되지 않습니다.
            </li>
            <li>이용정지는 가입하신 파트너사의 고객센터를 통해 신청해 주세요.</li>
            <li>파트너사명 고객센터 : XXXX-XXXX</li>
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
      { name: "휴대폰 번호", value: "010-12**-26**" },
      { name: "휴대폰 모델명", value: "LGU-OMPHONE2" },
      { name: "단말 일련번호", value: "****************8043" },
      { name: "유심(개인정보) 카드 번호", value: "****************4601" },
    ],
  },
]);

const nextPage = () => {
  // 화면 검수용 임시 라우터 처리
  const pageNumber = 2;
  if (front.isMobile()) {
    router.push("/sc/AL-MY-05-005");
  } else {
    emit("nextStep", pageNumber);
  }
};
</script>
