<template>
  <div class="AL-MY-05-500-P05">
    <div class="first-content-item confirm-area phone-regist">
      <div class="content-inner">
        <div class="cont-head">
          <h3 class="cont-title-main">번호 변경이<br /><b class="txt-primary">완료</b>되었어요</h3>
        </div>
      </div>

      <p class="icon">
        <img src="/images/roaming/sc/img-changenumber-complete.png" alt="" />
      </p>

      <div class="content-item">
        <div class="content-inner">
          <CardGroup :card-object="cardObject1" />

          <div class="gray-notice-box">
            <ul class="text-list bull">
              <li>신청 후 영업일 기준 5일 이내 등록하신 이메일로 발송됩니다.</li>
            </ul>
          </div>

          <div class="form-box mt_24">
            <div class="btn-area"><button type="button" class="btn-rounded btn-line btn-sm">버튼명</button></div>
          </div>
        </div>
      </div>
      <!-- bottom_button -->
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
      { name: "타이틀", value: "값" },
      { name: "기존번호", nameDesc: "(설명)", value: "값", class: { value: "txt-orange", title: "has-desc" } },
    ],
  },
]);
</script>
<style scoped lang="scss">
@use "@/assets/scss/popup/al-my-05-500-p05" as *;
</style>
