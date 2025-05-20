<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-00-006-3'" />
        <!-- // LNB -->

        <!-- contents -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>
          <!-- 내 정보 메뉴 -->
          <MyInfoMenu />
          <!-- // 내 정보 메뉴 -->

          <div class="first-content-item confirm-area care-member">
            <div class="content-inner">
              <div class="cont-head">
                <h3 class="cont-title-main">
                  해당 메뉴는 <br class="pc_hide" />
                  <strong class="txt-primary">후불 요금제 회원</strong>만<br />
                  이용 가능해요!
                </h3>
              </div>
            </div>

            <p class="icon">
              <img class="folder" src="/images/v2/content/img_folder.png" alt="폴더 이미지" />
              <img class="lock" src="/images/v2/content/img_lock.png" alt="열쇠 이미지" />
            </p>

            <!-- 선불목록 -->
            <p class="shortcut-title">
              선불 요금제 회원님은<br class="pc_hide" />
              아래 메뉴를 이용해 보세요.
            </p>
            <ShortcutMenu :links="linksArray" />

            <BottomFixMenu
              v-if="front.isMobile()"
              :btnText="'확인'"
              disabled
              @click="nextConfirm"
            />
            <!-- // bottom_button -->
          </div>
        </div>
        <!-- // content -->
      </div>
    </div>
  </div>
  <!-- // container -->
</template>

<script setup>
import PcLnb from "@/components/v2/common/PcLnb";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu";
import ShortcutMenu from "@/components/v2/common/ShortcutMenu";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
import { useRouter } from "vue-router";

const router = useRouter();
const emit = defineEmits(["setLayout"]);
const layout = reactive({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  title: "알닷케어 안내",
  floatMenu: "none",
});


// 24.12.18 준비중 텍스트 삭제
const linksArray = [
  { title: "실시간 사용 현황 보기", link: "/" },
  { title: "가입 정보 조회하기", link: "/" },
  { title: "휴대폰 등록하기", link: "/" },
  { title: "휴대폰 분실 신고하기", link: "/" },
];

// 발행확인
const nextConfirm = () => {
  router.push("/sc/AL-MY-00-006-3");
};

onMounted(() => {
  emit("setLayout", layout);
});
</script>
