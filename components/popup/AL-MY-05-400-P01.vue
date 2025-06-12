<template>
  <div class="AL-MY-05-400-P01">
    <div class="first-content-item">
      <div class="content-item">
        <div class="content-inner">
          <div class="cont-head title-main">
            <h3 class="cont-title-main">
              부가서비스를<br />
              <b class="txt-primary">해지</b>하시겠어요?
            </h3>
          </div>
          <div class="inner-section">
            <div class="con_rounded">
              <CardGroup :card-object="cardObject1" />
            </div>
          </div>
        </div>
      </div>
      <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
        <template #content>
          <ul class="text-list bull">
            <li>부가서비스는 신청 당일 해지는 불가합니다.</li>
            <li>부가서비스 월중 신청/해지 시 해당 월 기본요금 및 무료제공 혜택은 각각 일할 적용됩니다.</li>
          </ul>
        </template>
      </Accodian>

      <div class="bottom_float on-selfcare">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn-area">
              <NuxtLink role="button" class="btn-rounded type-outline" :class="{ disabled: false }" :disabled="false">
                취소
              </NuxtLink>

              <button class="btn-rounded primary" :class="{ disabled: false }" :disabled="false">해지하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardGroup from "@/components/v2/common/CardGroupRoaming.vue";
import InputForm from "@/components/v2/common/InputForm.vue";
import Accodian from "@/components/v2/common/Accodian.vue";

const cardObject1 = ref([
  {
    list: [
      { name: "신청 회선", value: "010-1234-3456" },
      { name: "서비스명", value: "060 발신차단" },
      { name: "금액", value: "무료" },
      { name: "가입일", value: "2025. 07. 16" },
    ],
  },
]);
</script>
<style scoped lang="scss">
@use "@/assets/scss/popup/al-my-05-400-p01" as *;
</style>
