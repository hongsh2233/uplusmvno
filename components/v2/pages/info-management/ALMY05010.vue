<template>
  <div class="first-content-item confirm-area phone-regist">
    <div class="content-inner">
      <div class="cont-head">
        <h3 class="cont-title-main">
          휴대폰 등록이 <br /><strong class="txt-primary">완료</strong>되었어요
        </h3>
      </div>
    </div>

    <p class="icon">
      <!-- 24.10.25 이미지 변경 -->
      <img class="regist_phone" src="/images/v2/content/img_phone_regist_complete_phone.png" alt="손 이미지" />
      <img class="regist_particle" src="/images/v2/content/img_phone_regist_complete_particle.png" alt="손 이미지" />
      <img class="regist_check" src="/images/v2/content/img_phone_regist_complete_coin.png" alt="손 이미지" />
    </p>

    <CardGroup :card-object="cardObject">
      <template #default="{ item }">
        <p :class="item.class">
          {{ item.value }}
        </p>
      </template>
    </CardGroup>

    <BottomFixMenu
      :btnText="'확인'"
      :disabled="false"
      @click="nextPage"
    />
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
      title: "원활한 서비스 이용을 위해 <br/>휴대폰을 1~2회 재시작 해주세요",
      list: [
        { name: "등록할 휴대폰 번호", value: "010-88**-35**", class: 'txt-orange' },
        { name: "연락받을 휴대폰 번호", value: "010-12**-98**" },
        { name: "모바일 운영체제", value: "IOS" },
        { name: "휴대폰 모델명", value: "아이폰15 Pro Max-256GB" },
      ],
    },
  ]);


  const nextPage = () => {
    // 화면 검수용 임시 라우터 처리
    const pageNumber = 0
    if (front.isMobile()) {
      router.push("/sc/AL-MY-05-005");
    } else {
      emit('nextStep', pageNumber, true);
    }
  };

</script>
