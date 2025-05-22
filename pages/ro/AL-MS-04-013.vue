<template>
  <div class="AL-MS-04-004">
    <div class="container">
      <div class="content" id="content">
        <div class="section">
          <h2 class="ro-nav-title blind">해외로밍 신청</h2>
          <MyInfoMenu></MyInfoMenu>
          <div class="info-box-list type-product-detail">
            <div class="info-box type-round">
              <div class="info-group-wrap">
                <div class="info-group-1">
                  <div class="flag">
                    <span class="bag clr c01">인기</span>
                    <span class="bag clr c09">추천</span>
                  </div>
                  <div class="title">
                    <p>데이터로밍차단</p>
                  </div>
                  <div class="title-description">
                    해외에서 데이터 로밍을 차단하여,<br class="pc_hide" />
                    와이파이 연결 시에만 인터넷을 사용할 수 있는 서비스
                  </div>
                </div>
                <div class="info-group-2">
                  <div class="price">
                    <!-- <p class="info-1"><span class="price-number">24,580</span>원</p> -->
                    <p class="info-1"><span class="price-number">무료</span></p>
                    <!-- <p class="info-2">부가세포함</p> -->
                  </div>
                </div>
              </div>
              <div class="info-group-3">
                <div class="detail">
                  <span class="detail-item data">
                    <span class="info-title">데이터</span>
                    <span class="info-val">차단</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <v-expansion-panels class="acd_bottom_notice" v-model="firstOpenPannel" multiple>
            <v-expansion-panel class="acd_item" disabled>
              <div class="acd_title">
                <v-expansion-panel-title hide-actions>서비스 내용</v-expansion-panel-title>
              </div>
              <div class="acd_panel">
                <v-expansion-panel-text>
                  <div class="info-wrap">
                    <ul class="text-list bull">
                      <li>
                        데이터로밍차단 시 카카오톡, e-mail 등 일부 데이터로밍 서비스를 이용하실 수 없습니다.
                        <br class="pc_hide" />(MMS는 수신 가능하며, 별도 비용은 발생되지 않습니다.)
                      </li>
                      <li>
                        데이터 해외로밍 요금제와 중복으로 이용할 수 없으며, 반드시 데이터 로밍차단 부가서비스 해지 후
                        로밍요금제를 가입해 주세요.
                      </li>
                      <li>
                        데이터 로밍만 차단되는 부가서비스로, 해외에서 음성통화/문자를 이용 하실 경우 추가요금이
                        발생합니다.
                      </li>
                      <li>선불 휴대폰 이용 고객은 가입할 수 없습니다.</li>
                      <li>청소년 요금제 가입 고객은 해당 부가서비스가 자동으로 가입되어 있습니다.</li>
                    </ul>
                  </div>
                </v-expansion-panel-text>
              </div>
            </v-expansion-panel>
            <v-expansion-panel class="acd_item">
              <div class="acd_title">
                <v-expansion-panel-title>이용안내</v-expansion-panel-title>
              </div>
              <div class="acd_panel">
                <v-expansion-panel-text>
                  <dl class="info-wrap">
                    <dt class="info-title">이용안내 타이틀</dt>
                    <dd>
                      <ul class="text-list bull">
                        <li>이용안내 타이틀 내용</li>
                      </ul>
                    </dd>
                  </dl>
                </v-expansion-panel-text>
              </div>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div class="bottom_float">
          <div class="inner">
            <div class="plan_join">
              <!-- CASE 1-1: 버튼이 2개일 경우, btn-nth-2 추가 -->
              <!-- <div class="join_info btn-nth-2"> -->

              <!-- CASE 1-2: 버튼이 1개일 경우 -->
              <div class="join_info">
                <div class="info-group-1">
                  <!-- CASE 2-1: 무료일 경우 -->
                  <p class="info-1"><span class="price-number">무료</span></p>

                  <!-- CASE 2-2: 무료가 아닐 경우 -->
                  <!-- <p class="info-1"><span class="text">일</span><span class="price-number">14,900</span>원</p>
                  <p class="info-2">(부가세 포함)</p> -->
                </div>
                <div class="info-group-2">
                  <div class="btn-area">
                    <!-- <button type="button" class="btn-rounded white">변경하기</button> -->
                    <button type="button" class="btn-rounded primary">신청하기</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LayoutOptions } from "@/types/layout";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
window.onTagShoHideHandler = htmlUI.tagShoHideHandler;

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: "",
  floatMenu: "",
  title: "해외로밍 상세",
  wrapClass: "selfcare roaming",
});

const isMobile = ref(front.isMobile());

onMounted(() => {
  emit("setLayout", layout);
});

const firstOpenPannel = ref([0]);
// const firstOpenPannelFaq = ref([0]);
</script>

<style scoped lang="scss">
@use "@/assets/scss/pages/ro/page-al-ms-04-004.scss" as *;
@use "@/assets/scss/pages/ro/page-al-ms-04-013.scss" as *;
</style>
