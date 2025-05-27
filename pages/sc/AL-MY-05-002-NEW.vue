<template>
  <div class="container AL-MY-05-001">
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

          <div class="content-item">
            <div class="content-inner">
              <div class="cont-head title-main">
                <h3 class="cont-title-main">
                  김*님의<br />
                  <b class="txt-primary">가입 정보</b>를 확인하실 수 있어요
                </h3>
              </div>

              <div class="inner-section">
                <CardGroup :card-object="[cardObject[0]]" :dataSelectList="dataSelectList">
                  <template #default="{ item }">
                    <div class="fl-ac">
                      <p v-html="item.value"></p>
                    </div>
                  </template>
                </CardGroup>
              </div>
            </div>
          </div>

          <!-- 정보 -->
          <CardGroup
            :card-object="cardObject.slice(1)"
            :dataSelectList="dataSelectList"
            class="subscription-info-second mgt0"
          />
          <!-- // 정보 -->

          <!-- 이동 링크 목록 -->
          <ShortcutMenu :links="linksArray" />
          <!--// 이동 링크 목록 -->
        </div>
        <!-- // contents -->
      </div>
    </div>
  </div>
</template>

<script setup>
import PcLnb from "@/components/v2/common/PcLnb";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu";
import CardGroup from "@/components/v2/common/CardGroupRoaming";
import ShortcutMenu from "@/components/v2/common/ShortcutMenu.vue";

// 헤더 정보
const layout = ref({
  header: "sub",
  footer: "",
  floatMenu: "none",
  title: "가입정보",
  wrapClass: "ver-3",
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
      { name: "요금제", value: "[빽다방 100잔] 평생 할인… " },
      { name: "가입일", value: "2023. 11. 29" },
      { name: "제공 데이터", value: "500GB" },
      { name: "추가 제공 데이터", value: "10GB" },
      { name: "제공 음성", value: "기본 제공" },
      { name: "제공 문자", value: "기본 제공" },
      { name: "파트너사", value: `<a href="/" class="link-txt-1">에스원안심모바일</a>` },
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

const linksArray = [{ title: "선불 요금제 잔액 충전", link: "/" }];

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/sc/page-al-my-05-001.scss" as *;
</style>
