<template>
  <div class="container full">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-03-003-1'" />
        <!-- // LNB -->

        <!-- contents -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>
          <!-- 내 정보 메뉴 -->
          <MyInfoMenu />
          <!-- // 내 정보 메뉴 -->

          <div class="first-content-item confirm-area care-empty">
            <div class="content-inner">
              <div class="cont-head">
                <h3 class="cont-title-main">청구요금이 아직 없어요!</h3>
                <p class="title-exp">첫 청구서가 발행되면 확인할 수 있어요.</p>
              </div>
            </div>

            <p class="icon">
              <img
                class="billing"
                src="/images/v2/content/img_billing.png"
                alt="백지 종이 이미지"
              />
              <img class="pencil" src="/images/v2/content/img_pencil.png" alt="연필 이미지" />
            </p>

            <ShortcutMenu :links="linksArray" />
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
  title: "청구요금 보기",
  floatMenu: "none",
});

// 24.12.18 준비중 텍스트 삭제
const linksArray = [
  { title: "납부 방법 변경하기", link: "/" },
  { title: "결제일 변경하기", link: "/" },
];

// 발행확인
const nextConfirm = () => {
  router.push("/sc/AL-MY-03-003-1");
};

onMounted(() => {
  emit("setLayout", layout);
});
</script>
