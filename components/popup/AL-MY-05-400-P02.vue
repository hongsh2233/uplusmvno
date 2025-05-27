<template>
  <div class="AL-MY-05-400-P02">
    <div class="first-content-item confirm-area phone-regist">
      <div class="content-inner">
        <div class="cont-head">
          <h3 class="cont-title-main">
            부가서비스가<br />
            <b class="txt-primary">해지</b>되었어요
          </h3>
        </div>
      </div>

      <p class="icon">
        <img src="/images/roaming/sc/img-add-servicesend.png" alt="" />
      </p>

      <div class="content-item">
        <div class="content-inner">
          <CardGroup :card-object="cardObject1" />

          <div class="gray-notice-box">
            <ul class="text-list bull">
              <li>부가서비스 월중 신청/해지 시 해당울 기본요금 및 무료제공 혜택은 각각 일할 적용됩니다.</li>
            </ul>
          </div>

          <div class="form-box mt_24">
            <div class="btn-area">
              <button type="button" class="btn-rounded btn-line">신청/해지 내역 바로가기</button>
            </div>
          </div>
        </div>
      </div>

      <BottomFixMenu class="pd-0" :btnText="'확인'" :disabled="false" />
      <!-- // bottom_button -->
    </div>
  </div>
</template>

<script setup lang="ts">
import CardGroup from "@/components/v2/common/CardGroupRoaming.vue";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu.vue";

const cardObject1 = ref([
  {
    title: "",
    sub: "",
    chip: "",
    list: [
      { name: "신청 회선", value: "010-1234-3456" },
      { name: "서비스명", value: "060 발신차단" },
      { name: "금액", value: "12,900원" },
      { name: "해지일", value: "2025. 07. 18" },
    ],
  },
]);
</script>
<style scoped lang="scss">
@use "@/assets/scss/popup/al-my-05-400-p02" as *;
</style>
