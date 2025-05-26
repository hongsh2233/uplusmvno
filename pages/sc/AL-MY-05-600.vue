<template>
  <div class="AL-MY-05-600">
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

            <!-- section -->
            <div class="content-item">
              <div class="content-inner">
                <div class="cont-head title-main">
                  <h3 class="cont-title-main">
                    <b class="txt-primary">증명서 발급</b>을<br />
                    신청할 수 있어요
                  </h3>
                </div>

                <div class="inner-section mgt0">
                  <div class="cont-head">
                    <h3 class="cont-title">신청 가능한 서류</h3>
                  </div>

                  <ol class="text-list circle-num">
                    <li>
                      <p>가입 사실 확인서</p>
                      <span>알뜰폰 닷컴 가입내역 제출이 필요한 경우 가입 사실 확인서를 발급하세요.</span>
                    </li>
                    <li>
                      <p>통화내역</p>
                      <span>음성, 문자, 데이터 사용내역 확인이 필요할 때 신청하세요.</span>
                    </li>
                    <li>
                      <p>납부내역 확인서</p>
                      <span>요금 납부 내역 확인이 필요할 때 발급하세요. </span>
                    </li>
                  </ol>

                  <div class="text_info">
                    고객님의 소중한 정보 보호를 위해<br v-if="front.isMobile()" />
                    본인 인증 후 서류 발급 신청이 가능합니다.
                  </div>
                </div>
              </div>
              <!-- // section -->
            </div>
            <!-- // contents -->

            <div class="reverse">
              <BottomFixMenu :btnText="'인증하기'" @click="nextConfirm" />
              <!-- // bottom_button -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LayoutOptions } from "@/types/layout";
import PcLnb from "@/components/v2/common/PcLnb.vue";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu.vue";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "증명서 발급 신청",
  wrapClass: "selfcare roaming",
});

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss">
@use "@/assets/scss/pages/sc/page-al-my-05-600.scss" as *;
</style>
