<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-00-006-2'" />
        <!-- // LNB -->

        <!-- contents -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>
          <!-- 내 정보 메뉴 -->
          <MyInfoMenu />
          <!-- // 내 정보 메뉴 -->

          <div class="first-content-item confirm-area care-info">
            <div class="content-inner">
              <div class="cont-head">
                <h3 class="cont-title-main">
                  가입하신 요금제는 <br /><strong class="txt-primary">알닷케어</strong>를 이용할 수
                  없어요
                </h3>
              </div>
            </div>

            <p class="icon">
              <object
                v-if="front.isMobile()"
                type="image/svg+xml"
                data="/images/v2/content/img_careinfo_m.svg"
              >
                Your browser does not support SVG
              </object>
              <object v-else type="image/svg+xml" data="/images/v2/content/img_careinfo.svg">
                Your browser does not support SVG
              </object>
            </p>

            <div class="content-item">
              <div class="content-inner">
                <CardGroup :card-object="cardObject1">
                  <template #default="{ item }">
                    <NuxtLink :to="item.url" :class="item.class" target="_blank">
                      {{ item.value }}
                    </NuxtLink>
                  </template>
                </CardGroup>
                <div v-if="front.isMobile()" class="btn_group">
                  <NuxtLink to="tel:+18001572" class="btn lg c02">고객센터 연결</NuxtLink>
                </div>
              </div>
            </div>

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
import CardGroup from "@/components/v2/common/CardGroup";
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

// 납부 방법 변경 목업 데이터
const cardObject1 = ref([
  {
    title: "파트너사 홈페이지 또는<br class='pc_hide' /> 고객센터를 통해서 확인해 주세요.",
    list: [
      {
        name: "파트너사",
        value: "에스원안심모바일",
        url: "https://www.naver.com",
        class: "txt-link txt-skip",
      },
      { name: "고객센터", value: "1800-1572", url: "", class: "" },
    ],
  },
]);

// 발행확인
const nextConfirm = () => {
  router.push("/sc/AL-MY-00-006-2");
};

onMounted(() => {
  emit("setLayout", layout);
});
</script>
