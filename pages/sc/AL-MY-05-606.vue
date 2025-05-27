<template>
  <div class="AL-MY-05-606">
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
                <Tab :titles="['가입사실 확인', '통화내역', '납부내역 확인']">
                  <!-- 납부내역 확인서 -->
                  <template #content3>
                    <div class="cont-head title-main">
                      <h3 class="cont-title-main">
                        <b class="txt-primary">납부 내역</b> 열람을 위해<br />
                        아래의 신청서를 작성해 주세요
                      </h3>
                      <span class="title-exp">(최근 2년간)</span>

                      <ul class="text-list mgt16">
                        <li>
                          청구요금 확인용으로 개인정보가 포함된 타인의 정보는 마스킹 처리되어
                          <br class="mobile_hide" />
                          식별할 수 없는 형태로 제공됩니다.
                        </li>
                      </ul>
                    </div>

                    <!-- 납부내역 확인서 - PC -->
                    <div class="table-wrap tag mobile_hide">
                      <div class="scroll-wrap">
                        <div class="item on">
                          <table class="table table-bordered">
                            <caption>
                              요금제 적용 국가 : 아시아/오세아니아 국가, 현지 통신사업자명, 현지 통신사업자 번호, 국가,
                              현지 통신사업자명, 현지 통신사업자 번호로 이루어진 표
                            </caption>
                            <colgroup>
                              <col style="width: 18%" />
                              <col style="width: 18%" />
                              <col style="width: 20%" />
                              <col style="width: 21%" />
                              <col style="width: 23%" />
                            </colgroup>
                            <thead role="rowgroup" class="">
                              <tr role="row" class="">
                                <th role="columnheader" scope="col" class="">청구년월</th>
                                <th role="columnheader" scope="col" class="">납부일</th>
                                <th role="columnheader" scope="col" class="">납부(입금) 확인일</th>
                                <th role="columnheader" scope="col" class="">납부 금액</th>
                                <th role="columnheader" scope="col" class="">납부 방법</th>
                              </tr>
                            </thead>
                            <tbody role="rowgroup">
                              <tr role="row" class="">
                                <td rowspan="1" role="cell" class="">2025년 12월</td>
                                <td rowspan="1" role="cell" class="">2025. 04. 05</td>
                                <td rowspan="1" role="cell" class="">2025. 04. 12</td>
                                <td rowspan="1" role="cell" class="">1,000,000원</td>
                                <td rowspan="1" role="cell" class="">국민카드/신용카드</td>
                              </tr>

                              <tr role="row" class="">
                                <td rowspan="1" role="cell" class="">2025년 12월</td>
                                <td rowspan="1" role="cell" class="">2025. 04. 05</td>
                                <td rowspan="1" role="cell" class="">2025. 04. 12</td>
                                <td rowspan="1" role="cell" class="">1,000,000원</td>
                                <td rowspan="1" role="cell" class="">국민카드/신용카드</td>
                              </tr>

                              <tr role="row" class="">
                                <td rowspan="1" role="cell" class="">2025년 12월</td>
                                <td rowspan="1" role="cell" class="">2025. 04. 05</td>
                                <td rowspan="1" role="cell" class="">2025. 04. 12</td>
                                <td rowspan="1" role="cell" class="">1,000,000원</td>
                                <td rowspan="1" role="cell" class="">국민카드/신용카드</td>
                              </tr>

                              <tr role="row" class="">
                                <td rowspan="1" role="cell" class="">2025년 12월</td>
                                <td rowspan="1" role="cell" class="">2025. 04. 05</td>
                                <td rowspan="1" role="cell" class="">2025. 04. 12</td>
                                <td rowspan="1" role="cell" class="">1,000,000원</td>
                                <td rowspan="1" role="cell" class="">국민카드/신용카드</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div class="btn-area cnt mgt40">
                        <button type="button" class="btn-circle more">더 볼래요</button>

                        <button type="button" class="btn-circle fold">접을래요</button>
                      </div>
                    </div>
                    <!-- // 납부내역 확인서 - PC -->

                    <!-- 납부내역 확인서 - M -->
                    <div class="inner-section pc_hide">
                      <CardGroup :card-object="cardObject1">
                        <template #default="{ item }">
                          <p :class="item.class">
                            {{ item.value }}
                          </p>
                        </template>
                      </CardGroup>
                    </div>
                    <!-- // 납부내역 확인서 - M -->

                    <!-- 내역이 없는 경우 -->
                    <div class="inner-section">
                      <!-- <div class="gray-box-no-data">납부 내역이 없습니다</div> -->
                      <div class="result-message-box no-data">
                        <p class="message-icon">
                          <i class="img-payment"></i>
                        </p>
                        <p class="message-txt">납부 내역이 없습니다</p>
                      </div>
                    </div>
                    <!-- // 내역이 없는 경우 -->
                  </template>
                  <!-- // 납부내역 확인서 -->
                </Tab>
              </div>
            </div>
            <!-- // section -->

            <div class="reverse">
              <BottomFixMenu :btnText="'납부내역 확인서 발급'" />
              <!-- // bottom_button -->
            </div>
          </div>
          <!-- // contents -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LayoutOptions } from "@/types/layout";
import PcLnb from "@/components/v2/common/PcLnb.vue";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu.vue";

import Tab from "@/components/v2/common/Tab.vue";
import CardGroup from "@/components/v2/common/CardGroupRoaming.vue";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu.vue";

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

const cardObject1 = ref([
  {
    title: "",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "청구년월", value: "2025년 4월" },
      { name: "납부일", value: "2025. 04. 05" },
      { name: "납부(입금) 확인일", value: "2025. 04. 07" },
      { name: "납부 금액", value: "1,000,000원" },
      { name: "납부 방법", value: "국민카드/신용카드" },
    ],
  },

  {
    title: "",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "청구년월", value: "2025년 4월" },
      { name: "납부일", value: "2025. 04. 05" },
      { name: "납부(입금) 확인일", value: "2025. 04. 07" },
      { name: "납부 금액", value: "1,000,000원" },
      { name: "납부 방법", value: "국민카드/신용카드" },
    ],
  },
  {
    title: "",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "청구년월", value: "2025년 4월" },
      { name: "납부일", value: "2025. 04. 05" },
      { name: "납부(입금) 확인일", value: "2025. 04. 07" },
      { name: "납부 금액", value: "1,000,000원" },
      { name: "납부 방법", value: "국민카드/신용카드" },
    ],
  },
  {
    title: "",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "청구년월", value: "2025년 4월" },
      { name: "납부일", value: "2025. 04. 05" },
      { name: "납부(입금) 확인일", value: "2025. 04. 07" },
      { name: "납부 금액", value: "1,000,000원" },
      { name: "납부 방법", value: "국민카드/신용카드" },
    ],
  },
]);

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss">
@use "@/assets/scss/pages/sc/page-al-my-05-606.scss" as *;
</style>
