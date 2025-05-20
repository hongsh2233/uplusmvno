<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-05-001'" />
        <!-- // LNB -->

        <!-- contents -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>
          <!-- 내 정보 메뉴 -->
          <MyInfoMenu />
          <!-- // 내 정보 메뉴 -->

          <!-- 정보 -->
          <CardGroup :card-object="cardObject" :dataSelectList="dataSelectList" />
          <!-- // 정보 -->
        </div>
        <!-- // contents -->
      </div>
    </div>
  </div>
</template>

<script setup>
import PcLnb from "@/components/v2/common/PcLnb";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu";
import CardGroup from "@/components/v2/common/CardGroup";

import { ref, onMounted, defineEmits } from "vue";

// 헤더 정보
const layout = ref({
  header: "sub",
  footer: "",
  floatMenu: "none",
  title: "가입정보",
});

// HOOK
const emit = defineEmits(["setLayout"]);

// 탭 목업 데이터
const tabData = ref([
  {
    id: 0,
    name: "가입 정보 조회 변경",
    link: "/sc/AL-MY-05-001",
    active: true,
    depth2: [
      { id: 0, name: "가입 정보", link: "/sc/AL-MY-05-001", active: true },
      { id: 1, name: "가입 회선 관리", link: "", active: false },
      { id: 2, name: "자급제폰 등록", link: "", active: false },
      { id: 3, name: "유심/이심 변경신청", link: "", active: false },
    ],
  },
  {
    id: 1,
    name: "회원정보",
    link: "",
    active: false,
    depth2: [],
  },
]);

// 가입 정보 목업 데이터
const cardObject = ref([
  {
    title: "요금제 정보",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "요금제", value: "[빽다방 100잔] 평생할인 [빽ㅁㄴㅇㄹㄴㅇ" },
      { name: "제공 데이터", value: "1GB" },
      { name: "제공 음성", value: "기본 제공" },
      { name: "제공 문자", value: "기본 제공" },
    ],
  },
  {
    title: "단말 정보",
    sub: "",
    chip: "휴대폰 등록",
    url: "https://www.naver.com",
    list: [
      { name: "고객명", value: "김*닷" },
      { name: "가입일", value: "2004.06.30" },
      { name: "가입 대리점", value: "온라인 직영점" },
      { name: "등록 기기명", value: "LGU-OMPHONE2" },
      { name: "상태", value: "정상" },
    ],
  },
  {
    title: "청구/납부 정보",
    sub: "",
    chip: "변경",
    url: "",
    list: [
      { name: "청구서 발행방법", value: "E-mail(상세) 청구서" },
      { name: "납부 방법", value: "신한카드/신용카드" },
      { name: "결제일(출금일)", value: "1차(9일)" },
    ],
  },
  {
    title: "부가서비스 정보",
    sub: "(유료 1개, 무료 2개)",
    chip: "",
    url: "",
    list: [
      { name: "인사말 통화연결음", value: "월 1,430원(부가세 포함)" },
      { name: "060 발신차단", value: "무료" },
      { name: "국제전화 발신차단", value: "무료" },
      { name: "국제전화 발신차단", value: "무료" },
      { name: "유심보호서비스", value: "무료" },
      { name: "음성로밍차단서비스", value: "무료" },
      { name: "데이터로밍차단서비스", value: "무료" },
    ],
  },
  {
    title: "할부 정보",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "할부 기기", value: "iPhone15 Pro Max_1TB", description: "(ULK-A3106-1TB)" },
      { name: "할부 기간", value: "2023.11.29 ~ 2024.11.28" },
      { name: "남은 횟수", value: "15/24회" },
      { name: "남은 할부금", value: "1,600,000원" },
      { name: "총 할부금", value: "2,600,000원" },
      { name: "휴대폰 지원금", value: "0원" },
    ],
  },
  {
    title: "약정 정보",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "약정명", value: "선택약정" },
      { name: "약정 기간", value: "2023.11.29 ~ 2024.11.28" },
      { name: "남은 개월 수", value: "5/24개월" },
    ],
  },
]);

// 청구/납부변경 정보 목업 데이터
const dataSelectList = ref([
  { value: 0, name: "납부 방법 변경", url: "https://www.naver.com" },
  { value: 1, name: "결제일 변경", url: "https://www.google.com" },
  { value: 2, name: "청구서 받는 방법 변경", url: "https://www.naver.com" },
]);

const current = ref("current");

onMounted(() => {
  emit("setLayout", layout);
});
</script>
