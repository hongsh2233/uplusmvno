<template>
  <div class="AL-MY-04-004">
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
                <CardGroup :card-object="cardObject1" />
              </div>
            </div>
            <!-- // section -->

            <!-- section -->
            <div class="content-item">
              <div class="content-inner">
                <CardGroup :card-object="cardObject2">
                  <template #default="{ item }">
                    <buton :class="item?.class">
                      {{ item?.value }}
                    </buton>
                  </template>
                </CardGroup>

                <MessageResult :description="'등록된 입금전용 계좌가 없어요'" />

                <div class="btn-area btn-space mgb0">
                  <button type="button" class="btn-rounded btn-line">입금 전용 계좌 발급</button>
                </div>

                <!-- 발급 완료 팝업 -->
                <Popup
                  title="발급 완료"
                  :isOpen="popupQuery === '1' && popupOpen"
                  @update:isOpen="popupOpen = false"
                  class="pcpopup"
                  :isPopFooter="false"
                >
                  <ALMY04004P01 />
                </Popup>
                <!-- // 발급 완료 팝업 -->
              </div>
            </div>
            <!-- // section -->

            <!-- 이동 링크 목록 -->
            <ShortcutMenu :links="linksArray" class="mgt24" />
            <!-- // 이동 링크 목록 -->

            <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
              <template #content>
                <ul class="text-list bull">
                  <li>
                    당월 충전 금액은 개통 취소를 제외한 다른 사유로는 환불 불가하며 당월을 제외한 충전 금액은 사용
                    전까지 환불 및 취소 가능합니다.
                  </li>
                  <li>
                    추가 충전 금액은 이용 기간 만료 후에도 이월되며 추가 충전한 시점부터 1년간 사용 가능합니다.(단, 해지
                    시 환불 불가)
                  </li>
                  <li>해지 취소는 당일만 가능합니다.</li>
                  <li>
                    개통 당월의 경우는 사용 일수에 따라 계산하여 적용되며 해지, 일시정지, 직권 정지되는 경우 당월 해지
                    취소, 정지 해제 시에만 기존 제공량이 제공되며 당월 이후에는 소멸되며 충전 후 정상 서비스 사용이
                    가능합니다.
                  </li>
                  <li>개통 후 7일 이내 충전이 안 된 경우 개통 취소 또는 직권해지 될 수 있습니다.</li>
                  <li>
                    요금제 내 별도의 명시가 없는 경우 기본 제공 음성, 문자메시지, 데이터 통화 등은 국내에 한해
                    제공됩니다.
                  </li>
                </ul>
              </template>
            </Accodian>
          </div>
          <!-- // contents -->
        </div>
        <!-- crp_wrap -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LayoutOptions } from "@/types/layout";
import PcLnb from "@/components/v2/common/PcLnb.vue";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu.vue";

import CardGroup from "@/components/v2/common/CardGroupRoaming.vue";
import ShortcutMenu from "@/components/v2/common/ShortcutMenu.vue";
import Popup from "@/components/v2/common/Popup.vue";
import ALMY04004P01 from "@/components/popup/AL-MY-04-004-P01.vue";
import Accodian from "@/components/v2/common/Accodian.vue";

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "입금 전용 계좌 발급",
  wrapClass: "selfcare roaming",
});

const isMobile = ref(front.isMobile());

const cardObject1 = ref([
  {
    title: "",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "고객번호", value: "2251623546258" },
      { name: "이름", value: "김*닷" },
      { name: "납부 방법", value: "신한카드/신용카드" },
    ],
  },
]);

const cardObject2 = ref([
  {
    title: "이용 중인 입금 전용계좌",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "국민은행", value: "15245604568752", class: "btn-copy" },
      { name: "우리은행", value: "1524560456", class: "btn-copy" },
      { name: "기업 은행", value: "152456045687", class: "btn-copy" },
    ],
  },
]);

const popupOpen = ref(true);
const route = useRoute();
const popupQuery = ref(route.query.popup);

const linksArray = [
  { title: "요금 바로 납부하기", link: "/" },
  { title: "납부 내역 조회하기", link: "/" },
];

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/sc/page-al-my-04-004.scss" as *;
</style>
