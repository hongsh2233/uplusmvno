<template>
  <div class="AL-MY-03-100">
    <div class="container">
      <div class="content" id="content">
        <h2 class="title_nav">{{ layout.title }}</h2>

        <div class="crp_wrap">
          <!-- LNB -->
          <PcLnb :currentLink="'/sc/AL-MY-05-001'" />
          <!-- // LNB -->

          <!-- crp_r -->
          <div class="crp_r">
            <h2 class="pc-title">{{ layout.title }}</h2>
            <!-- 내 정보 메뉴 -->
            <MyInfoMenu />
            <!-- // 내 정보 메뉴 -->

            <!-- section -->
            <div class="content-item">
              <div class="content-inner">
                <div class="inner-section">
                  <div class="cont-head title-main">
                    <h3 class="cont-title-main">
                      바로 납부 가능한 금액은<br />
                      <b class="txt-primary">89,300원</b>이에요
                    </h3>

                    <span class="title-exp mgt4">(미납 요금 12,900원 포함)</span>
                  </div>

                  <!-- <CardGroup :card-object="cardObject1">
                    <template #default="{ item }">
                      <p :class="item?.class">
                        {{ item?.value }}
                      </p>
                    </template>
                  </CardGroup> -->

                  <ul class="card-group">
                    <li>
                      <Accodian styleClass="acco-details">
                        <template #title>
                          <div class="name acco-arrow">휴대폰 이용 내역</div>
                          <div class="value">
                            <b class="txt-orange">9,546원</b>
                          </div>
                        </template>
                        <template #content>
                          <ul class="card-sub-contents">
                            <li>
                              <div class="name">기본요금</div>
                              <div class="sub-value">9,546원</div>
                            </li>
                            <li>
                              <div class="name">할인요금</div>
                              <div class="sub-value"><b class="txt-black">-16.217원</b></div>
                            </li>
                            <li>
                              <div class="name">ㄴ기본요금</div>
                              <div class="sub-value">9,546원</div>
                            </li>
                            <li>
                              <div class="name">ㄴ카드할인</div>
                              <div class="sub-value">9,546원</div>
                            </li>
                          </ul>
                        </template>
                      </Accodian>
                    </li>

                    <li>
                      <Accodian styleClass="acco-details">
                        <template #title>
                          <div class="name acco-arrow">단말기 할부금할부금</div>
                          <div class="value"><b class="txt-black">88,000원</b></div>
                        </template>
                        <template #content>
                          <ul class="card-sub-contents">
                            <li>
                              <div class="name">월 할부 원금</div>
                              <div class="sub-value">87,000원</div>
                            </li>
                            <li>
                              <div class="name">할부 수수료</div>
                              <div class="sub-value">1,000원</div>
                            </li>
                          </ul>
                        </template>
                      </Accodian>
                    </li>

                    <li>
                      <Accodian styleClass="acco-details">
                        <template #title>
                          <div class="name acco-arrow">세금 및 공통 요금</div>
                          <div class="value"><b class="txt-black">852원</b></div>
                        </template>
                        <template #content>
                          <ul class="card-sub-contents">
                            <li>
                              <div class="name">부가가치세</div>
                              <div class="sub-value"><b class="txt-black">564원</b></div>
                            </li>
                          </ul>
                        </template>
                      </Accodian>
                    </li>

                    <li>
                      <div class="name">
                        <button type="button" class="btn-tooltip" @click="openAlart">미납 요금</button>
                      </div>
                      <div class="value">85,530원</div>
                    </li>
                  </ul>
                  <!-- 미납 요금 납부 순서 팝업-->
                  <Popup
                    title="미납요금 납부 순서 정책"
                    :isOpen="isOpen"
                    :popType="'alert-gray'"
                    @update:isOpen="isOpen = $event"
                  >
                    <ul class="text-list bull">
                      <li>고객님의 계좌에서 원하시는 경우 즉시 출금이 가능한 납부 방법입니다.</li>
                      <li>
                        은행/신용카드 자동이체 고객의 경우 이중납이 발생하지 않도록 출금 일정을 확인 후 신청하시기
                        바랍니다.
                      </li>
                      <li>
                        신용카드 납부 시 대상요금의 부분납 처리 가능하며, 5만원 미만 금액에 대해서는 할부처리가
                        불가합니다.
                      </li>
                    </ul>
                  </Popup>
                  <!-- // 미납 요금 납부 순서 팝업 -->

                  <div class="gray-notice-box">
                    <ul class="text-list bull">
                      <li>
                        이번 달 마지막 날(공휴일일 경우 그 다음 영업일)까지 결제하지 않으면 미납 요금의 2%를 추가로 내야
                        돼요.
                      </li>
                      <li>연체 가산금은 기간과 상관없이 한번만 내면 돼요.</li>
                    </ul>
                  </div>

                  <div class="btn-area btn-space mgb0">
                    <button type="button" class="btn-rounded btn-line btn-sm">지난 청구 내역 보기</button>
                  </div>
                </div>
              </div>
              <!-- // content-inner -->
            </div>
            <!-- // section -->

            <!-- section -->
            <div class="content-item">
              <div class="content-inner">
                <div class="inner-section">
                  <div class="cont-head title-main">
                    <h3 class="cont-title-main">
                      바로 납부 가능한<br />
                      금액이 없어요
                    </h3>
                  </div>

                  <MessageResult :description="'바로 납부 가능한 금액이 없어요'" />

                  <div class="gray-notice-box">
                    <ul class="text-list bull">
                      <li>
                        이번 달 마지막 날(공휴일일 경우 그 다음 영업일)까지 결제하지 않으면 미납 요금의 2%를 추가로 내야
                        돼요.
                      </li>
                      <li>연체 가산금은 기간과 상관없이 한번만 내면 돼요.</li>
                    </ul>
                  </div>

                  <div class="btn-area btn-space mgb0">
                    <button type="button" class="btn-rounded btn-line btn-sm">실시간 요금 보기</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- // section -->

            <!-- section -->
            <div class="content-item">
              <div class="content-inner">
                <div class="cont-head fl-sb">
                  <h3 class="cont-title">
                    <span>요금 바로 납부</span>
                  </h3>
                </div>

                <div class="form-box mgt40">
                  <div class="title-area">
                    <strong class="title">발급 용도 및 제출처</strong>
                  </div>

                  <div class="btn-flex">
                    <div v-for="(item, idx) in radioData1" :key="item.id" class="radio_item ty05">
                      <input
                        type="radio"
                        :id="item.id"
                        name="radio01"
                        :value="item.value"
                        :checked="item.checked"
                        @change="radioIdx = idx"
                      />
                      <label :for="item.id">{{ item.text }}</label>
                    </div>
                  </div>
                </div>

                <div class="form-box" v-if="radioIdx === 1">
                  <div class="title-area">
                    <strong class="title">납부 금액</strong>
                  </div>

                  <div class="form_group">
                    <div class="form_item">
                      <InputForm class="combobox-bottom" :option="{ placeholder: `숫자만 입력해 주세요` }" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- // section -->

            <div class="reverse">
              <BottomFixMenu :btnText="'요금 바로 납부'" />
              <!-- // bottom_button -->
            </div>

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
          <!-- // crp_r -->
        </div>
        <!-- // crp_wrap -->
      </div>
      <!-- // content -->
    </div>
    <!-- // container -->
  </div>
</template>

<script setup lang="ts">
import type { LayoutOptions } from "@/types/layout";
import PcLnb from "@/components/v2/common/PcLnb.vue";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu.vue";
import InputForm from "@/components/v2/common/InputForm.vue";
import ShortcutMenu from "@/components/v2/common/ShortcutMenu.vue";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu.vue";
import Accodian from "@/components/v2/common/Accodian.vue";
import Popup from "@/components/v2/common/Popup.vue";

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "요금 바로 납부",
  wrapClass: "selfcare roaming",
});

const isOpen = ref(false);

const openAlart = () => {
  isOpen.value = true;
};

//라디오 목업
const radioData1 = ref([
  { id: "radio01_01", value: "전체 납부", checked: true, text: "전체 납부" },
  { id: "radio01_02", value: "부분 납부", checked: false, text: "부분 납부" },
]);

const radioIdx = ref();

const linksArray = [{ title: "입금 전용 계좌 안내", link: "/" }];

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/sc/page-al-my-03-200.scss" as *;
</style>
