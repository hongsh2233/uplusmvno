<template>
  <div class="AL-MY-05-500-P05">
    <div class="first-content-item confirm-area phone-regist">
      <div class="content-inner">
        <div class="cont-head">
          <h3 class="cont-title-main">번호 변경이<br /><b class="txt-primary">취소</b>되었어요</h3>
        </div>
      </div>

      <p class="icon">
        <img src="/images/roaming/sc/img-changenumber-cancel.png" alt="" />
      </p>

      <div class="content-item">
        <div class="content-inner">
          <CardGroup :card-object="cardObject1" />

          <div class="gray-notice-box">
            <ul class="text-list bull">
              <li>변경 가능 잔여 횟수가 없을 경우 번호 변경 취소가 불가합니다.</li>
            </ul>
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
      { name: "기존 번호", value: "010-1234-1234" },
      { name: "신청 번호", value: "010-2934-1225", class: { value: "txt-orange" } },
      { name: "변경일", value: "2025. 07. 18", class: { value: "txt-orange" } },
      {
        name: "잔여횟수(총 횟수)",
        nameDesc: "(90일 동안 총 2회만 변경 가능)",
        value: "1/2",
        class: { value: "txt-orange", title: "has-desc" },
      },
    ],
  },
]);
</script>
<style scoped lang="scss">
@use "@/assets/scss/popup/al-my-05-500-p05" as *;
</style>
