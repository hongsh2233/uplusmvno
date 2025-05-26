<template>
  <div class="AL-MY-05-609">
    <div class="container">
      <div class="content" id="content">
        <div class="print-head">
          <p class="tit">납부 내역 확인서</p>
        </div>

        <div class="print-content">
          <!-- 납부내역 확인서 - PC -->
          <div class="table-wrap tag">
            <div class="scroll-wrap">
              <div class="item on">
                <table class="table table-bordered">
                  <caption>
                    요금제 적용 국가 : 아시아/오세아니아 국가, 현지 통신사업자명, 현지 통신사업자 번호, 국가, 현지
                    통신사업자명, 현지 통신사업자 번호로 이루어진 표
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
          </div>
          <!-- // 납부내역 확인서 - PC -->
        </div>

        <div class="print-footer">
          <div class="footer-top">
            <img src="/images/v2/content/ico_logo_lgu.png" alt="Hello mobile" />
            <p class="txt">위와 같은 가입 사실을 확인합니다.</p>
            <p class="date">2025년 6월 12일</p>
          </div>
        </div>

        <BottomFixMenu :btnText="'인쇄하기'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LayoutOptions } from "@/types/layout";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu.vue";

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const layout = reactive<LayoutOptions>({
  header: "none",
  footer: "none",
  floatMenu: "none",
  title: "알뜰폰 닷컴 가입 사실 확인서",
  wrapClass: "roaming",
});

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss">
@use "@/assets/scss/pages/sc/page-al-my-05-609.scss" as *;
</style>
