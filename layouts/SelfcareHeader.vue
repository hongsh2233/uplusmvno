<template>
  <header class="header selfcare-header" v-if="layout.header != 'none'">
    <!-- mobile gnb -->
    <template v-if="isMobile">
      <div class="inner">
        <div class="h_left">
          <h1 v-if="layout.header == 'main'">
            <NuxtLink :to="{}" class="h_logo"><span class="blind">알뜰폰닷컴</span></NuxtLink>
          </h1>
          <button type="button" class="h_back" v-if="layout.header != 'main'">
            <span class="blind">이전 화면으로 이동</span>
          </button>
          <h2 class="h_title" v-if="layout.header != 'main'" v-html="layout.title"></h2>
        </div>
        <div class="h_right">
          <button type="button" class="h_rcmd" v-if="layout.header != 'sub2'">
            <span class="blind">친구추천</span>
          </button>
          <button
            type="button"
            class="h_menu"
            ref="asideBtn"
            v-if="layout.header != 'sub2'"
            @click="asideOpen"
          >
            <span class="blind">전체메뉴 열기</span>
          </button>
        </div>
      </div>

      <aside
        class="aside"
        :class="{ open: asideOn }"
        v-if="(layout.header == 'main' || layout.header == 'sub') && isMobile"
      >
        <div tabindex="0" @focus="focus"></div>
        <div class="inner" tabindex="0" ref="asideWrap">
          <div class="aside_header">
            <!-- 미로그인 -->
            <div class="user-info" v-if="!isLogin">
              <div class="user-info__login">
                <!-- 목업 로그인으로 임시 수정 -->
                <!-- <NuxtLink to="/login" class="login" @click.prevent="isLogin = true">로그인</NuxtLink> -->
                <a to="/login" class="login" @click.prevent="isLogined">로그인</a>
                <NuxtLink to="/register" class="member">회원가입</NuxtLink>
              </div>
              <div class="user-info__welcome">환영합니다</div>
            </div>

            <!-- 로그인 2024.11.29 수정 -->
            <div class="user-info" v-else>
              <div class="user-info__login">
                <!-- 목업 로그인으로 임시 수정 -->
                <!-- <NuxtLink to="/login" class="login">로그아웃</NuxtLink> -->
                <a to="/login" class="login" @click.prevent="isLogined">로그아웃</a>
                <!-- 24.11.29 회원정보 변경 -> 내 정보 수정으로 텍스트 변경-->
                <NuxtLink to="/register" class="member">내 정보 수정</NuxtLink>
              </div>
              <!-- 24.11.29 알뜰폰 뱃지 추가 -->
              <div class="user-info__welcome">
                <div class="badge-box green member">
                  <span>U<sup>+</sup> 알뜰폰</span>
                </div>
                <strong class="name">김*닷</strong>님 안녕하세요
              </div>
              <!--// 24.11.29 알뜰폰 뱃지 추가 -->
            </div>
          </div>

          <!-- aside nav -->
          <nav class="aside_nav">
            <div class="nav-list">
              <ul class="large-menu">
                <!-- 24.11.22 디자인에 마이페이지 메뉴 및 링크 추가되어 수정 -->
                <li v-for="(items, i) in gnbData" :key="i">
                  <button
                    type="button"
                    class="large-menu__button"
                    :class="{ beta: items.menu == '알닷케어' }"
                    :aria-expanded="items.id === gnbIndex"
                    @click="handleGnbIndex(items.id)"
                  >
                    {{ items.menu }}
                  </button>
                </li>
              </ul>

              <!-- small-menu -->
              <!-- 24.11.22 디자인에 마이페이지 메뉴 및 링크 추가되어 수정 -->
              <div class="small-menu" v-if="activeMenu.id === gnbIndex">
                <!-- 조건추가 1011 -->
                <div class="title">
                  <!--case: 카테고리 메인 링크 (mypage) -->
                  <NuxtLink
                    v-if="activeMenu.className === 'my'"
                    to="/my/ALFM-MY01-PG00"
                    class="btn-arrow gray"
                  >
                    <h2>{{ activeMenu.menu }}</h2>
                  </NuxtLink>
                  <!--case: default -->
                  <h2 v-else>{{ activeMenu.menu }}</h2>

                  <!-- 알닷케어 - 서브메뉴 전체 펼침/닫힘 버튼-->
                  <button
                    v-if="activeMenu.menu === '알닷케어'"
                    type="button"
                    class="all-menu"
                    @click="handleAllMenu"
                  >
                    {{ isAllCollapse ? "전체닫힘" : "전체펼침" }}
                  </button>
                  <!--// 알닷케어 - 서브메뉴 전체 펼침/닫힘 버튼-->
                </div>
                <ul class="small-menu__list">
                  <!-- 24.11.28 링크 밀림 방지용으로 데이터 active 방식 일부 변경 -->
                  <li v-for="(sub, i) in activeMenu.sub" :key="i">
                    <NuxtLink
                      class="small-menu__button"
                      :aria-expanded="sub.isOn"
                      :class="{
                        subin: sub.depth2,
                        open: sub.isOn,
                        'anchor-alphaonly': sub.menu === '알닷ONLY',
                      }"
                      :to="front.isMobile ? '' : sub.url"
                      @click="asideMenuClick(sub)"
                      @keydown.enter="asideMenuClick(sub)"
                      tabindex="0"
                    >
                      <template v-if="sub.menu === '지금배송'">
                        <img src="/images/v2/common/tit_delivery_m.png" alt="지금배송" />
                      </template>
                      <template v-else-if="sub.menu === '이달의 혜택'">
                        <img src="/images/v2/common/tit_benefit_m.png" alt="이달의 혜택" />
                      </template>
                      <template v-else>{{ sub.menu }}</template>
                    </NuxtLink>
                    <Transition v-if="sub.depth2" name="subMenu">
                      <div class="sub_menu" role="region" v-if="sub.isOn">
                        <ul class="depth2-list">
                          <li v-for="(item, idx) in sub.depth2" :key="idx">
                            <NuxtLink :to="item.url" :class="{ active: item.depth3 }">
                              {{ item.menu }}
                            </NuxtLink>
                            <ul v-if="item.depth3" class="depth3-list">
                              <li v-for="(depth3, j) in item.depth3" :key="j">
                                <NuxtLink :to="depth3.url">{{ depth3.menu }}</NuxtLink>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </Transition>
                  </li>
                </ul>
              </div>
              <!-- //small-menu -->
            </div>
          </nav>
          <div class="asd_top">
            <NuxtLink :to="{}" class="asd_home"><span class="blind">home</span></NuxtLink>
            <button type="button" class="asd_close" @click="asideClose">
              <span class="blind">전체메뉴 닫기</span>
            </button>
          </div>
          <!-- // aside nav -->
        </div>
        <div tabindex="0" @focus="focus"></div>
      </aside>
    </template>

    <!-- pc gnb -->
    <div class="pc_header" v-else>
      <div class="inner">
        <h1>
          <NuxtLink :to="'/sc/AL-MY-00-001'"><span class="blind">알닷</span></NuxtLink>
        </h1>
        <nav
          class="nav"
          :class="{ on: gnbOn }"
          @mouseleave.stop="gnbClose"
          @mouseenter.stop="gnbOpen"
        >
          <ul class="nav__list">
            <!-- 24.11.22 디자인에 마이페이지 메뉴 및 링크 추가되어 수정 -->
            <li
              v-for="(gnb, i) in gnbData.filter((data) => data.className !== 'my')"
              :key="i"
              :class="`${gnb.className}`"
            >
              <button
                class="menu_class"
                :class="{ on: gnb.isOn, care: gnb.className === 'sc' }"
                @click.prevent="handlePadWebView(gnb)"
                @mouseenter="handleGnbIndex(gnb.id)"
                @focus="accessGnbOpen(gnb.id)"
                @blur="accessGnbClose(gnb.id)"
              >
                <span v-html="gnb.menu"></span>
              </button>
            </li>
          </ul>

          <!-- PC SUB MENU -->
          <Transition name="gnb">
            <div class="sub_menu" v-if="!gnbOn">
              <div tabindex="0" @focus="webFocus"></div>
              <!-- 24.11.28 링크 밀림 방지용으로 로직 일부 변경 -->
              <ul class="depth2-list" ref="webNavWrap" v-if="activeMenu && activeMenu.sub">
                <!-- 조건추가 1011 -->
                <li v-for="(sub, i) in activeMenu.sub" :key="i">
                  <NuxtLink
                    :to="sub.url"
                    class="depth2"
                    :class="{
                      subon: sub.isOn && sub.depth2,
                      'anchor-alphaonly': sub.menu === '알닷ONLY',
                    }"
                    @click="handleSubActive(gnbData[gnbIndex].sub, sub)"
                  >
                    <template v-if="sub.menu === '지금배송'">
                      <img
                        src="/images/v2/common/tit_delivery.png"
                        alt="지금배송"
                        class="img-delivery"
                      />
                    </template>
                    <template v-else-if="sub.menu === '이달의 혜택'">
                      <img
                        src="/images/v2/common/tit_benefit.png"
                        alt="이달의 혜택"
                        class="img-benefit"
                      />
                    </template>
                    <template v-else>{{ sub.menu }}</template>
                  </NuxtLink>
                  <ul v-if="sub.depth2" class="depth3-list">
                    <li v-for="(depth2, j) in sub.depth2" :key="j">
                      <NuxtLink
                        :to="depth2.url"
                        @click="handleSubActive(gnbData[gnbIndex].sub, sub)"
                        >{{ depth2.menu }}
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
              <div tabindex="0" @focus="webFocus"></div>
            </div>
          </Transition>
          <!--// PC SUB MENU -->
        </nav>

        <div class="header_menu">
          <ul>
            <li class="all-menu">
              <button type="button" @click="isAllmenu = true">
                <img src="/images/v2/common/btn_burger_menu.svg" alt="전체 메뉴" />
              </button>
            </li>
            <li class="login-box">
              <NuxtLink :to="''" class="login" v-if="!isLogin" @focus="gnbClose" @click="isLogined"
                >로그인
              </NuxtLink>
              <NuxtLink :to="''" class="logout" v-if="isLogin" @focus="gnbClose" @click="isLogined"
                >로그아웃</NuxtLink
              >
            </li>
            <li class="my-info">
              <!-- login box -->
              <v-menu v-model="menu" :close-on-content-click="false" offset-y class="gnb-util">
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" :class="{ login: !isLogin }"
                    ><span class="blind">내 정보 보기</span></v-btn
                  >
                </template>
                <v-list class="util-box">
                  <template v-if="!isLogin">
                    <div class="trade">
                      <!-- 24.11.29 일부 해상도에서 깨져보이는 이슈로 알뜰폰 뱃지 교체 -->
                      <div class="badge-box green">
                        <span>U<sup>+</sup> 알뜰폰</span>
                      </div>
                      <!-- 24.11.29 일부 해상도에서 깨져보이는 이슈로 알뜰폰 뱃지 교체 -->
                      <div class="modify">
                        <button type="button">내 정보 수정</button>
                      </div>
                    </div>
                    <p class="name"><strong>김*닷님</strong><br />반갑습니다!</p>
                    <div class="my-line">
                      <div class="my-line__phone">
                        <span class="badge">대표</span>
                        <span class="phone">010-12**-56**</span>
                      </div>
                      <div class="my-line__text">[빽다장 100잔]평생할인 1GB+통화기본(LTE)</div>
                    </div>
                  </template>

                  <ul class="menu-list">
                    <li class="mypage">
                      <NuxtLink to="/my/ALFM-MY01-PG00">마이페이지</NuxtLink>
                    </li>
                    <li class="usage">
                      <NuxtLink to="">실시간 사용량</NuxtLink>
                    </li>
                    <li class="payment">
                      <NuxtLink to=""> 신청중인 요금제 </NuxtLink>
                      <div class="badge-box purple apply">
                        <span>신청중</span>
                      </div>
                    </li>
                  </ul>
                </v-list>
              </v-menu>
              <!-- // login box -->
            </li>
          </ul>
        </div>
      </div>

      <!-- 전체 메뉴 -->
      <Popup
        v-if="!front.isMobile()"
        :title="''"
        :isOpen="isAllmenu"
        :isPopFooter="false"
        @update:isOpen="isAllmenu = $event"
        class="allmenu-popup"
      >
        <AllMenu :gnbDatas="gnbData" @allMenuClose="isAllmenu = false" />
      </Popup>
      <!-- // 전체 메뉴 -->
    </div>
  </header>
</template>

<script setup>
// 24.11.28 링크 밀림 방지용으로 스크립트 일부 변경

import { ref, defineProps, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { globalState } from "../composables/globalState";

//퍼블 목업용 링크 파일입니다.
import { gnb } from "./gnbDatas.js";

import Popup from "@/components/v2/common/Popup";
import AllMenu from "@/components/v2/common/AllMenu";

// HOOK
const props = defineProps({
  layout: {
    type: Object,
    default: () => {},
  },
});
const router = useRouter();

//상태 관리 (공통)
const isMobile = ref(false);
const isLogin = ref(false);
const gnbData = ref(gnb); // GNB DATA
const gnbIndex = ref(0); //현재 활성화 된 인덱스
const isAllmenu = ref(false); // 전체 메뉴
const menu = ref(false);

//상태 관리 (pc)
const gnbOn = ref(false); // PC GNB mouse on/off

//상태 관리 (mobile)
const asideOn = ref(false); // mobile GNB click on/off
const isAllCollapse = ref(false); // mobile 전체 펼침 플래그

// refs
const asideWrap = ref(null); //mobile 메뉴 래퍼 참조
const asideBtn = ref(null); // 햄버거 메뉴 버튼 참조

// // GNB 데이터 초기화
// const initGnbData = () => {
//   gnbDatas.value.forEach((element) => {
//     gnbData.value.push(element);
//   });
// };

// gnbIndex settings
const handleGnbIndex = (idx) => {
  gnbIndex.value = idx;
};

// sub menu settings
const activeMenu = computed(() => {
  return gnbData.value.find((item) => item.id === gnbIndex.value) || [];
});

// GNB PC Nav 열기
const gnbOpen = () => {
  const isTouchDevice = navigator.maxTouchPoints || "ontouchstart" in document.documentElement;
  if (!gnbOn.value || (!front.isMobile() && !isTouchDevice)) {
    gnbOn.value = false;
  }
};

// GNB PC Nav 닫기
const gnbClose = () => {
  if (!gnbOn.value) {
    gnbOn.value = true;
  }
};

// GNB 레이어 핸들러
const handlePadWebView = (a) => {
  gnbOn.value = !gnbOn.value;
  if (gnbOn.value) {
    router.push(a.url);
  }

  a.sub.forEach((el) => {
    el.isOn = false;
  });
};

const accessGnbOpen = (i) => {
  handleGnbIndex(i);
  document.querySelector(".nav").classList.add("on");
  gnbOpen();
};

const accessGnbClose = (i) => {
  document.querySelector(".nav").classList.remove("on");
};

// // GNB 포커스 핸들러
// const handleGnbFocus = (i) => {
//   gnbOpen();
//   handleGnbIndex(i);
// };

// 메뉴 포커스 설정
const focus = () => {
  asideWrap.value.focus();
};

// // PC Sub Menu Active
const handleSubActive = (depth2, sub) => {
  depth2.forEach((el) => (el.isOn = false));
  sub.isOn = true;
};

// 리사이징 시 로그인 박스 숨김처리
const resizeLoginBox = () => {
  window.addEventListener("resize", () => {
    menu.value = false;
  });
};

// 내 정보 보기
const handleMyInfo = () => {
  isMyInfo.value = true;
  console.log("내 정보 보기");
};

// 모바일 햄버거 메뉴 열기
const asideOpen = () => {
  asideOn.value = true;
  asideWrap.value.focus();
  scroll.noScroll();
};

// 모바일 햄버거 메뉴 닫기
const asideClose = () => {
  asideOn.value = false;
  if (asideBtn.value) asideBtn.value.focus();
  scroll.scroll();
};

// 모바일 메뉴 클릭 핸들러
const asideMenuClick = (menu) => {
  menu.isOn = !menu.isOn;
  updateAllMenuState();
};

// 모바일 새로고침시 올바른 메뉴 open 상태로 변경
const initOpenMenu = () => {
  const currentPath = router.currentRoute.value.path;
  const menu = activeMenu.value;

  if (!menu || menu.length < 1) return;

  menu.sub.forEach((subMenu) => {
    if (!subMenu.depth2) return;
    subMenu.isOn = subMenu.depth2.some(
      (el) => el.url === currentPath || el.depth3?.some((depth3) => depth3.url === currentPath)
    );
  });
};

// 전체 펼침/닫힘 상태 업데이트
const updateAllMenuState = () => {
  if (!activeMenu.value.sub) {
    return;
  }

  const allMenusOpened = activeMenu.value.sub.every((menu) => menu.isOn) ? true : false;
  isAllCollapse.value = allMenusOpened;
};

// 모바일 전체 펼침/닫힘
const handleAllMenu = () => {
  const newState = !isAllCollapse.value;
  isAllCollapse.value = newState;

  activeMenu.value.sub.forEach((menu) => {
    if (menu.isOn === newState) return;
    menu.isOn = newState; // 전체 펼침/닫힘
  });
};

// onMount set - url index
const setGnbIndex = () => {
  const pathSegment = router.currentRoute.value.href.split("/")[1];
  switch (pathSegment) {
    case "bu":
      gnbIndex.value = 0;
      break;
    case "pr":
      gnbIndex.value = 1;
      break;
    case "sc":
      gnbIndex.value = 2;
      break;
    case "be":
      gnbIndex.value = 3;
      break;
    case "cs":
      gnbIndex.value = 4;
      break;
    case "my":
      gnbIndex.value = 5;
      break;
    default:
      gnbIndex.value = -1;
      break;
  }
};

function isAsideClose() {
  setTimeout(() => window.scrollTo({ top: 0 }), 10);
  asideClose();
}

// 라우터 전환 시 레이어 닫기
router.beforeEach(() => {
  if (!front.isMobile()) return;
  if (asideOn.value) {
    isAsideClose();
  }
});

function isLogined() {
  isLogin.value = !isLogin.value;
  globalState.isLoggedIn = !globalState.isLoggedIn;
  isAsideClose();
}

// 컴포넌트 마운트 시 초기화
onMounted(() => {
  isMobile.value = front.isMobile();
  setGnbIndex();
  initOpenMenu();
  resizeLoginBox();
  // initGnbData();
  // initCurrentRouter();
  // initOpenMenu();
});
</script>
