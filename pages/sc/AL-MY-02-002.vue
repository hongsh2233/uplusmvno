<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>
      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-02-002'" />
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
                  현재까지 사용한 요금은<br />
                  <b class="txt-primary">5,429원</b> 이에요
                </h3>
                <p class="title-exp">2024.07.01 ~ 2024.07.30</p>
              </div>
              <ul class="card-group">
                <li>
                  <Accodian styleClass="acco-details">
                    <template #title>
                      <div class="name acco-arrow">이동통신요금</div>
                      <div class="value">
                        <b class="txt-orange">9,546원</b>
                      </div>
                    </template>
                    <template #content>
                      <ul class="card-sub-contents">
                        <li>
                          <div class="name">기본요금</div>
                          <div class="sub-value"><b class="txt-black">9,546원</b></div>
                        </li>
                        <li>
                          <div class="name">할인요금</div>
                          <div class="sub-value"><b class="txt-black">-16.217원</b></div>
                        </li>
                        <li>
                          <div class="name">ㄴ요금할인</div>
                          <div class="sub-value">9,546원</div>
                        </li>
                        <li>
                          <div class="name">ㄴ기타할인1</div>
                          <div class="sub-value">9,546원</div>
                        </li>
                      </ul>
                    </template>
                  </Accodian>
                </li>
                <li>
                  <Accodian styleClass="acco-details">
                    <template #title>
                      <div class="name acco-arrow">세금 및 공통요금</div>
                      <div class="value">
                        <b class="txt-orange">546원</b>
                      </div>
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
            </div>
          </div>

          <div class="line-box">
            <div class="payment-amount">
              <p>해지 시 납부 예상금액</p>
              <b class="txt-orange">10,456원</b>
            </div>
          </div>

          <!-- 이동 링크 목록 -->
          <ShortcutMenu :links="linksArray" />
          <!--// 이동 링크 목록 -->
        </div>
        <!-- // content -->
      </div>
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
            은행/신용카드 자동이체 고객의 경우 이중납이 발생하지 않도록 출금 일정을 확인 후
            신청하시기 바랍니다.
          </li>
          <li>
            신용카드 납부 시 대상요금의 부분납 처리 가능하며, 5만원 미만 금액에 대해서는 할부처리가
            불가합니다.
          </li>
        </ul>
      </Popup>
      <!-- // 미납 요금 납부 순서 팝업 -->
    </div>
  </div>
  <!-- // container -->
</template>

<script setup>
import PcLnb from "@/components/v2/common/PcLnb";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu";
import Accodian from "@/components/v2/common/Accodian";
import ShortcutMenu from "@/components/v2/common/ShortcutMenu";
import Popup from "@/components/v2/common/Popup";

const emit = defineEmits(["setLayout"]);
const layout = reactive({ header: "sub", footer: "", title: "실시간 요금", floatMenu: "none " });

const linksArray = [
  { title: "실시간 사용량 보기", link: "/" },
  { title: "최근 3개월 사용량 보기", link: "/" },
];

const isOpen = ref(false);

const openAlart = () => {
  isOpen.value = true;
};

onMounted(() => {
  emit("setLayout", layout);
});
</script>
