<template>
  <div class="AL-MY-05-603">
    <div class="container">
      <div class="content" id="content">
        <div class="print-head">
          <span class="txt">발급번호 : 1234-5678</span>
          <p class="tit">알뜰폰 닷컴 가입 사실 확인서</p>
        </div>

        <div class="print-content">
          <ul class="content-round-box">
            <li v-for="(item, idx) in infoList" :key="idx">
              <div class="tit">{{ item.title }}</div>
              <div class="txt">{{ item.value }}</div>
            </li>
          </ul>
        </div>

        <div class="print-footer">
          <div class="footer-top">
            <img src="/images/v2/content/ico_logo_hellomobile.png" alt="Hello mobile" />
            <p class="txt">위와 같은 가입 사실을 확인합니다.</p>
            <p class="date">2025년 6월 12일</p>
          </div>
          <div class="footer-bottom">
            <p class="txt">궁금하신 내용이 있으신가요? U+유모바일 고객센터에 문의하여 주시기 바랍니다.</p>
            <p class="time-tel">
              <span>대표전화 : 1644-5353</span>
              <span>상담시간 : 평일 09:00 ~ 12:00 / 13:00 ~ 18:00 (점심시간 : 12:00 ~ 13:00)</span>
            </p>
          </div>
        </div>

        <BottomFixMenu :btnText="'인쇄하기'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LayoutOptions } from "@/types/layout";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu.vue";

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const layout = reactive<LayoutOptions>({
  header: "none",
  footer: "none",
  floatMenu: "none",
  title: "알뜰폰 닷컴 가입 사실 확인서",
  wrapClass: "roaming",
});

const infoList = [
  { title: "이름", value: "김알닷" },
  { title: "생년월일", value: "2025. 07. 18" },
  { title: "휴대폰 번호", value: "010-2222-1234" },
  { title: "통신망", value: "LG U+" },
  { title: "가입일자", value: "2025. 07. 18" },
  { title: "모델명", value: "iPhone15 Pro Max_1TB" },
  { title: "현재 사용 중인 단말기 개통일", value: "2025. 07. 18" },
  { title: "현재 이용 상태", value: "이용중" },
  { title: "기기 일련번호", value: "*****************2134" },
  { title: "용도 및 제출처", value: "기타증빙" },
];

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss">
@use "@/assets/scss/pages/sc/page-al-my-05-603.scss" as *;
</style>
