<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">신청 정보</h3>
        <div class="list_info_ty01">
          <dl>
            <dt>사업자</dt>
            <dd>프리티</dd>
          </dl>
          <dl>
            <dt>신청한 요금제</dt>
            <dd>
              <div class="gap_box">
                5G 더빠른 180GB+
                <button type="button" class="btn xsm c07">자세히 보기</button>
              </div>
            </dd>
          </dl>
          <dl>
            <dt>유심/eSIM</dt>
            <dd>USIM</dd>
          </dl>
          <dl>
            <dt>신청상태</dt>
            <dd>온라인신청완료</dd>
          </dl>
          <dl>
            <dt>신청일</dt>
            <dd>2022.10.03</dd>
          </dl>
          <dl class="wid_full">
            <dt>
              <v-expansion-panels class="acd_wrap" v-model="acd">
                <v-expansion-panel class="acd_item">
                  <div class="acd_title">
                    <v-expansion-panel-title>
                      <div class="charge_info">
                        <span class="">월통신요금</span>
                        <strong><span class="fc01">51,700</span>원</strong>
                      </div>
                    </v-expansion-panel-title>
                  </div>
                  <div class="acd_panel">
                    <v-expansion-panel-text>
                      <div class="panel_inner_list">
                        <ul>
                          <li>
                            <span>5G 더빠른 180G+</span>
                            <span>77,000원</span>
                          </li>
                          <li>
                            <span>프로모션 할인</span>
                            <span>-20,300원</span>
                          </li>
                          <li>
                            <span>Kb국민카드 이벤트 할인</span>
                            <span>-5,000원</span>
                          </li>
                        </ul>
                      </div>
                    </v-expansion-panel-text>
                  </div>
                </v-expansion-panel>
              </v-expansion-panels>
            </dt>
          </dl>
        </div>
      </div>
      <!-- // section -->

      <div class="section ty03">
        <h3 class="tit02">유심 배송 정보</h3>
        <div class="list_info_ty01">
          <dl>
            <dt>택배사</dt>
            <dd>로젠택배</dd>
          </dl>
          <dl>
            <dt>송장번호</dt>
            <dd>5G 더 빠른 180GB+</dd>
          </dl>
          <dl>
            <dt>송장번호조회</dt>
            <dd>
              <div class="gap_box">
                https://www.ilogen.com
                <button type="button" class="btn xsm c07">자세히 보기</button>
              </div>
            </dd>
          </dl>
        </div>
      </div>

      <div class="section ty03">
        <h3 class="tit02">가입자 정보</h3>
        <div class="list_info_ty01">
          <dl>
            <dt>고객유형</dt>
            <dd>성인(외국인)</dd>
          </dl>
          <dl>
            <dt>가입유형</dt>
            <dd>신규가입</dd>
          </dl>
          <dl>
            <dt>이름</dt>
            <dd>Mich*****</dd>
          </dl>
          <dl>
            <dt>생년월일</dt>
            <dd>800000</dd>
          </dl>
          <dl>
            <dt>개통전화번호</dt>
            <dd></dd>
          </dl>
          <dl>
            <dt>납부방법</dt>
            <dd>자동이체</dd>
          </dl>
          <dl>
            <dt>청구서 수령방법</dt>
            <dd>문자 (요약정보)</dd>
          </dl>
        </div>
      </div>

      <div class="section ty03">
        <div class="form_wrap">
          <div class="btn_group_spac">
            <div class="btn_group">
              <button type="button" class="btn md c04">신청 취소하기</button>
            </div>
            <div class="btn_group">
              <button type="button" class="btn md c03" disabled>목록보기</button>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01">개통 신청하기</button>
            </div>
          </div>
        </div>
      </div>
      <!-- // bottom_float -->
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits(["setLayout"]);
const layout = reactive({
  header: "sub",
  footer: "none",
  title: "내가 신청한 요금제 상세",
  floatMenu: "none",
});

const acd: Ref<string[]> = ref([]);
const prev: Ref<boolean> = ref(false);
const next: Ref<boolean> = ref(false);

onMounted(() => {
  emit("setLayout", layout);
});
</script>
