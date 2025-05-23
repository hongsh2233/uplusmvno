<template>
  <div class="contents-wrap AL-MY-05-500-P01">
    <div class="cont-head title-main">
      <h3 class="cont-title-main">
        휴대폰 번호<br />
        <b class="txt-primary">변경</b> 내역이에요
      </h3>
      <span class="title-exp"
        >최근 변경 예약 및 취소, 변경 완료를 모두 포함하여 휴대폰 변경 내역 모두 조회할 수 있어요</span
      >
    </div>
    <CardGroup :card-object="cardObject1" class="type-inner-popup" />
    <div class="btn_wrap center">
      <button type="button" class="btn round more_d">더 볼래요</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardGroup from "@/components/v2/common/CardGroupRoaming.vue";

const cardObject1 = ref([
  {
    list: [
      { name: "신청 번호", value: "010-12**-26**" },
      { name: "신청일", value: "2024. 01. 01" },
      { name: "신청일", value: "변경 완료" },
    ],
  },
  {
    list: [
      { name: "신청 번호", value: "010-12**-26**" },
      { name: "신청일", value: "2024. 01. 01" },
      { name: "신청일", value: "변경 완료" },
    ],
  },
  {
    list: [
      { name: "신청 번호", value: "010-12**-26**" },
      { name: "신청일", value: "2024. 01. 01" },
      { name: "신청일", value: "변경 완료" },
    ],
  },
  {
    list: [
      { name: "신청 번호", value: "010-12**-26**" },
      { name: "신청일", value: "2024. 01. 01" },
      { name: "신청일", value: "변경 완료" },
    ],
  },
]);
</script>

<style scoped></style>
