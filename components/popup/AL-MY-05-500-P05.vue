<template>
  <div class="AL-MY-05-500-P05">
    <div class="first-content-item confirm-area phone-regist">
      <div class="content-inner">
        <div class="cont-head">
          <h3 class="cont-title-main">번호 변경이<br /><b class="txt-primary">완료</b>되었어요</h3>
        </div>
      </div>

      <p class="icon">
        <img src="/images/roaming/sc/img-cha_____reset.png" alt="" />
      </p>

      <div class="content-item">
        <div class="content-inner">
          <CardGroup :card-object="cardObject1" />

          <div class="gray-notice-box">
            <ul class="text-list bull">
              <li>LTE, 5G 휴대폰의 경우 번호 변경 후 30분 이내 자동 개통됩니다.</li>
              <li>2G, 3G 휴대폰의 경우 변경된 번호를 휴대폰에 입력해야 변경됩니다.</li>
              <li>
                안드로이드 휴대폰인 경우, 개통 안내 문자메시지를 받게 됩니다. 반드시 30분 안에 전화 키 패드에
                ‘#5487587#682# ‘ 번호 입력 후 ‘개통하시겠습니까?’라는 문구가 나타나면 [예]를 선택하세요. 휴대폰 전원이
                자동으로 꺼졌다 켜지면 해당 번호로 변경된 것입니다.
              </li>
              <li>아이폰/수입 폰의 경우 휴대폰을 껐다 켜면 해당 번호로 변경 개통됩니다.</li>
              <li>
                국가에서 통신사에 부여한 가운데 4자리 번호는 변경 후 24시간 이내에만 취소가 가능하며, 그 외 번호는 신청
                당일 오전 10시~ 오후 8시 사이에만 취소가 가능합니다.
              </li>
              <li>변경 가능 잔여 횟수가 없을 경우 번호 변경 취소가 불가합니다.</li>
            </ul>
          </div>

          <div class="form-box mt_24">
            <div class="btn-area">
              <button type="button" class="btn-rounded btn-line">번호 변경 안내 부가서비스 바로가기</button>
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
