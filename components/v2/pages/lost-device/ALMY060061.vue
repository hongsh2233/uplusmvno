<template>
  <div class="first-content-item confirm-area unpause">
    <div class="content-inner">
      <div class="cont-head">
        <h3 class="cont-title-main">
          일시정지가<br /><strong class="txt-primary">해제</strong>되었어요
        </h3>
      </div>
    </div>

    <p class="icon">
      <img class="shake-hand" src="/images/v2/content/img_unpause_shake_hand.png" alt="손 이미지" />
    </p>

    <div class="content-item">
      <div class="content-inner">
        <CardGroup :card-object="cardObject">
          <template #default="{ item }">
            <p class="txt-skip">{{ item.value }}</p>
          </template>
        </CardGroup>
      </div>
    </div>

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
      list: [
        { name: "휴대폰 번호", value: "010-12**-26**"},
        { name: "요금제", value: "[빽다장 100잔]평 생할인 1GB+ 통[빽다장 100잔]평생할인 1GB+통..." },
        { name: "정지 기간", value: "2024.06.03 ~ 2024.11.25" },
        { name: "정지 사유", value: "경제적 사유" },
      ],
    },
  ]);

  const nextPage = () => {
    // 화면 검수용 임시 라우터 처리
    const pageNumber = 2
    if (front.isMobile()) {
      router.push("/sc/AL-MY-06-004");
    } else {
      emit('nextStep', pageNumber);
    }
  };

</script>
