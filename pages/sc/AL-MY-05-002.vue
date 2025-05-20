<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-05-002'" />
        <!-- // LNB -->

        <!-- contents -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>
          <!-- 내 정보 메뉴 -->
          <!-- // 내 정보 메뉴 -->

          <div class="content-item">
            <div class="content-inner">
              <div class="cont-head title-main">
                <h3 class="cont-title-main">
                  <strong class="txt-primary">회선 정보</strong>와
                  <strong class="txt-primary">대표번호 설정</strong>을
                  <br class="pc_show" />
                  하실 수 있어요
                </h3>
              </div>

              <!-- 대표 회선 -->
              <Accodian :isExpanded="true">
                <template #title>
                  <div class="cont-head fl-sc">
                    <h4 class="cont-title">
                      <span class="badge-primary">대표</span>
                      {{ dataMockup[0].number }}
                    </h4>
                  </div>
                </template>
                <template #content>
                  <div class="gray-box">
                    <div class="check-txt check_st">
                      <input type="radio" id="checkbox01_01" name="radio01" checked />
                      <label for="checkbox01_01">대표 회선으로 지정할게요.</label>
                    </div>
                  </div>
                  <CardGroup :card-object="dataMockup[0].additionalInfo">
                    <template #default="{ item }">
                      <NuxtLink v-if="item.link" :to="item.link" class="txt-link txt-skip">
                        {{ item.value }}
                      </NuxtLink>
                      <!-- 24.11.11 텍스트 줄 수 변경 -->
                      <p class="txt-skip two-lines mo-only" v-else>{{ item.value }}</p>
                    </template>
                  </CardGroup>
                  <!-- 동의약관 -->
                  <div class="consent-container">
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">선택 동의</strong>
                      </div>
                      <div
                        class="consent-checkbox"
                        v-for="(data, idx) in dataMockup[0].personalData"
                      >
                        <!-- 24.11.22 v0.97 수정 반영 -->
                        <input
                          type="checkbox"
                          :id="'chk_box_0' + idx"
                          class="blind"
                          v-model="data.consent"
                        />
                        <label :for="'chk_box_0' + idx"> </label>
                        <button type="button" class="btn-arrow">
                          {{ data.title }}
                        </button>
                        <!--// 24.11.22 v0.97 수정 반영 -->
                      </div>
                    </div>
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">광고성 정보 수신 및 활용 동의</strong>
                      </div>
                      <ul class="toggle-list">
                        <li v-for="(data, idx) in dataMockup[0].marketing">
                          <input
                            type="checkbox"
                            :id="'chk_toggle_0' + idx"
                            class="blind"
                            name=""
                            v-model="data.consent"
                          />
                          <label :for="'chk_toggle_0' + idx" class="check-toggle">
                            {{ data.title }}
                            <span class="toggle-slider"></span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- //동의약관 -->
                </template>
              </Accodian>
              <!--// 대표 회선 -->
            </div>
          </div>
          <div class="content-item" v-for="(data, idx) in dataMockup.slice(1)" :key="idx">
            <div class="content-inner">
              <Accodian :isExpanded="false" :readonly="data.readonly">
                <template #title>
                  <div class="cont-head fl-sc">
                    <h4 class="cont-title">
                      {{ data.number }}
                    </h4>
                    <!-- 24.12.18 알닷케어 미제공 일 시, 노출 텍스트 추가 -->
                    <div class="title-exp title-readonly">
                      <p>{{ data.agency }}</p>
                      <em v-if="data.readonly">알닷케어 미제공</em>
                    </div>
                    <!--// 24.12.18 알닷케어 미제공 일 시, 노출 텍스트 추가 -->
                  </div>
                </template>
                <template #content>
                  <div class="gray-box">
                    <div class="check-txt check_st">
                      <input type="radio" :id="'checkbox02_0' + idx" name="radio01" />
                      <label :for="'checkbox02_0' + idx">대표 회선으로 지정할게요.</label>
                    </div>
                  </div>
                  <CardGroup :card-object="data.additionalInfo">
                    <template #default="{ item }">
                      <NuxtLink v-if="item.link" :to="item.link" class="txt-link txt-skip">{{
                        item.value
                      }}</NuxtLink>
                      <!-- 24.11.11 텍스트 줄 수 변경 -->
                      <p class="txt-skip two-lines mo-only" v-else>{{ item.value }}</p>
                    </template>
                  </CardGroup>
                  <!-- 동의약관 -->
                  <div class="consent-container">
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">선택 동의</strong>
                      </div>

                      <div class="consent-checkbox" v-for="(personal, j) in data.personalData">
                        <!-- 24.11.22 v0.97 수정 반영 -->
                        <input
                          type="checkbox"
                          :id="'chk_box_0' + idx + j"
                          class="blind"
                          v-model="personal.consent"
                        />
                        <label :for="'chk_box_0' + idx + j"></label>
                        <button type="button" class="btn-arrow">
                          {{ personal.title }}
                        </button>
                        <!--// 24.11.22 v0.97 수정 반영 -->
                      </div>
                    </div>
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">광고성 정보 수신 및 활용 동의</strong>
                      </div>
                      <ul class="toggle-list">
                        <li v-for="(marketing, j) in data.marketing">
                          <input
                            type="checkbox"
                            :id="'chk_toggle_0' + idx + j"
                            class="blind"
                            name=""
                            v-model="marketing.consent"
                          />
                          <label :for="'chk_toggle_0' + idx + j" class="check-toggle">
                            {{ marketing.title }}
                            <span class="toggle-slider"></span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- //동의약관 -->
                </template>
              </Accodian>
            </div>
          </div>

          <div class="section">
            <div class="text_info mgt0">
              데이터/음성/문자 제공량은 실제 데이터와 상이할 수 있습니다.
            </div>
          </div>
        </div>
        <!-- // contents -->
      </div>
    </div>
  </div>
</template>

<script setup>
import PcLnb from "@/components/v2/common/PcLnb";
import Accodian from "@/components/v2/common/Accodian";
import CardGroup from "@/components/v2/common/CardGroup";
import { ref, onMounted, defineEmits } from "vue";

// 헤더 정보
const layout = ref({
  header: "sub",
  footer: "",
  floatMenu: "none",
  title: "가입 회선 관리",
});

// HOOK
const emit = defineEmits(["setLayout"]);

// 청구 정보 목업 데이터
const dataMockup = ref([
  {
    isPrimary: true,
    number: "010-12**-34**",
    agency: "모나",
    additionalInfo: [
      {
        list: [
          { name: "가입일", value: "2023.11.29" },
          { name: "등록 기기", value: "LGU-OMPHONE2" },
          {
            name: "요금제",
            value:
              "[빽다방 100잔] 평생할인 [빽다방 100잔] 평생할인[빽다방 100잔] 평생할인 [빽다방 100잔] 평생할인[빽다방 100잔] 평생할인 [빽다방 100잔] 평생할인",
          },
          { name: "제공 데이터", value: "1GB" },
          { name: "제공 음성", value: "기본 제공" },
          { name: "제공 문자", value: "기본 제공" },
          //<!-- 24.11.19 v0.95 수정 - 기본요금 삭제,  파트너사 기본 링크 추가 -->
          // { name: "기본 요금", value: "38,990월" },
          { name: "파트너사", value: "에스원안심모바일", link: "/" },
          //<!--// 24.11.19 v0.95 수정 - 기본요금 삭제,  파트너사 기본 링크 추가 -->
        ],
      },
    ],
    personalData: [
      { title: "고객 혜택 제공을 위한 개인정보 제3자 제공 동의", consent: true },
      { title: "고객 혜택 제공을 위한 정보 수집 및 이용 동의", consent: false },
    ],
    marketing: [
      { title: "문자", consent: true },
      { title: "이메일", consent: false },
      { title: "알림톡", consent: true },
    ],
  },
  {
    isPrimary: false,
    number: "010-24**-34**",
    agency: "모나",
    additionalInfo: [
      {
        list: [
          { name: "가입기기", value: "2023.11.29" },
          { name: "등록 기기", value: "LGU-OMPHONE2" },
          {
            name: "요금제",
            value:
              "[빽다방 100잔] 평생할인 [빽다방 100잔] 평생할인[빽다방 100잔] 평생할인 [빽다방 100잔] 평생할인[빽다방 100잔] 평생할인 [빽다방 100잔] 평생할인[빽다방 100잔] 평생할인 [빽다방 100잔] 평생할인",
          },
          { name: "제공 데이터", value: "1GB" },
          { name: "제공 음성", value: "기본 제공" },
          { name: "제공 문자", value: "기본 제공" },
          //<!-- 24.11.19 v0.95 수정 - 기본요금 삭제,  파트너사 기본 링크 추가 -->
          // { name: "기본 요금", value: "38,990월" },
          { name: "파트너사", value: "기타 파트너사" },
          //<!--// 24.11.19 v0.95 수정 - 기본요금 삭제,  파트너사 기본 링크 추가 -->
        ],
      },
    ],
    personalData: [
      { title: "고객 혜택 제공을 위한 개인정보 제3자 제공 동의", consent: false },
      { title: "고객 혜택 제공을 위한 정보 수집 및 이용 동의", consent: false },
    ],
    marketing: [
      { title: "문자", consent: false },
      { title: "이메일", consent: false },
      { title: "알림톡", consent: false },
    ],
  },
  {
    isPrimary: false,
    number: "010-12**-23**",
    agency: "Flash모바일",
    additionalInfo: [
      {
        list: [
          { name: "가입기기", value: "2023.11.29" },
          { name: "등록 기기", value: "LGU-OMPHONE2" },
          {
            name: "요금제",
            value:
              "[빽다방 100잔] 평생할인 [빽다방 100잔] 평생할인[빽다방 100잔] 평생할인 [빽다방 100잔] 평생할인[빽다방 100잔] 평생할인 [빽다방 100잔] 평생할인",
          },
          { name: "제공 데이터", value: "1GB" },
          { name: "제공 음성", value: "기본 제공" },
          { name: "제공 문자", value: "기본 제공" },
          //<!-- 24.11.19 v0.95 수정 - 기본요금 삭제,  파트너사 기본 링크 추가 -->
          // { name: "기본 요금", value: "38,990월" },
          { name: "파트너사", value: "모나", link: "/" },
          //<!--// 24.11.19 v0.95 수정 - 기본요금 삭제,  파트너사 기본 링크 추가 -->
        ],
      },
    ],
    personalData: [
      { title: "고객 혜택 제공을 위한 개인정보 제3자 제공 동의", consent: false },
      { title: "고객 혜택 제공을 위한 정보 수집 및 이용 동의", consent: false },
    ],
    marketing: [
      { title: "문자", consent: false },
      { title: "이메일", consent: false },
      { title: "알림톡", consent: false },
    ],
  },
  {
    isPrimary: false,
    number: "010-12**-23**",
    agency: "리브모바일",
    readonly: true,
  },
]);

onMounted(() => {
  emit("setLayout", layout);
});
</script>
