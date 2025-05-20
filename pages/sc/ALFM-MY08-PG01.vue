<template>
  <div class="container single-container">
    <div class="content" id="content">
      <h2 class="title_nav pc_show">{{ layout.title }}</h2>

      <!-- 고객 정보 -->
      <div class="section">
        <h3 class="tit02">고객님의 알닷 회원정보 입니다</h3>
        <div class="list_info_ty01 md">
          <dl v-for="(d, i) in dataUser" :key="i">
            <dt>
              {{ d.label }}
              <v-btn v-if="d.tooltip" class="btn_tooltip" title="툴팁" @click="toggleTooltip(d)"
                >요금제 툴팁</v-btn
              >
            </dt>
            <dd>
              {{ d.info }}
              <span v-if="d.badge" class="badge"><em v-html="d.badge" /></span>

              <!-- 24.11.25 v.0.98 번호 변경 버튼 추가-->
              <button
                v-if="d.label == '전화번호'"
                type="button"
                class="btn-rounded btn-xs txt-black"
                @click="changeNumberPop"
              >
                번호 변경
              </button>
              <!-- 24.11.25 v.0.98 번호 변경 버튼 추가-->
            </dd>
          </dl>
        </div>
      </div>
      <!-- // 고객 정보 -->

      <!-- 이메일 -->
      <div class="section">
        <div class="form_wrap">
          <div class="form_group">
            <strong class="form_label">연락 받을 이메일</strong>
            <div class="form_item">
              <InputBox :option="{ placeholder: '아이디' }" @inputValue="console.log($event)" />
              <span class="mark_div">@</span>
              <InputBox
                :option="{ placeholder: '도메인' }"
                @inputValue="console.log($event)"
                ref="emailSelfInput"
                v-if="emailSelfInput"
              />
              <InputBox
                :option="{ value: emailSelectDomain, placeholder: '도메인', disabled: true }"
                @inputValue="console.log($event)"
                ref="domain"
                v-else
              />
            </div>
            <div class="error"></div>
            <div class="form_item">
              <button type="button" class="btn_select" ref="btn_email" @click="$refs.email.open">
                직접입력
              </button>
            </div>
            <PopupSelect
              ref="email"
              :option="{ data: 'email', popupTitle: '도메인 선택', targetBtn: 'btn_email' }"
              @selectItem="selectDomain($event)"
            />
          </div>

          <div class="btn_group mgt20">
            <button type="button" class="btn md c03">이메일 저장하기</button>
          </div>
        </div>
      </div>
      <!-- // 이메일 -->

      <!-- SNS -->
      <div class="section">
        <h3 class="tit02">SNS 계정 연결</h3>
        <div class="cir_icon_link">
          <ul>
            <li>
              <NuxtLink href="javascript:void(0);" class="icon_link naver"
                ><span class="blind">네이버</span></NuxtLink
              ><!-- class="disabled" : SNS 미연결 상태 -->
            </li>
            <li>
              <NuxtLink href="javascript:void(0);" class="icon_link kakao disabled"
                ><span class="blind">카카오톡</span></NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="box_gray mgt20">
          <ul class="text_list bull">
            <li>자주 사용하는 SNS 계정과 연결 설정을 하여 간편하게 로그인 할 수 있습니다.</li>
            <li>SNS 계정 연결 설정 시, 해당 SNS 계정 인증이 필요합니다.</li>
          </ul>
        </div>
      </div>
      <!-- // SNS -->

      <!-- 24.11.25 v0.98 선택동의 영역 추가-->
      <div class="section">
        <div class="form-box form-sm">
          <div class="title-area">
            <strong class="title">선택 동의</strong>
          </div>
          <div
            class="consent-checkbox lined"
            v-for="(data, idx) in termsMockup.personalData"
            :key="idx"
          >
            <input type="checkbox" :id="'chk_box_personal_' + idx" class="blind" />
            <label :for="'chk_box_personal_' + idx"></label>
            <button type="button" class="btn-arrow" @click="popState.termsSample = true">
              {{ data.title }}
            </button>
          </div>
        </div>
        <div class="form-box form-sm">
          <div class="title-area">
            <strong class="title">광고성 정보 수신 및 활용 동의</strong>
          </div>
          <ul class="toggle-list">
            <li v-for="(data, idx) in termsMockup.marketing" :key="idx">
              <input type="checkbox" :id="'chk_toggle_01' + idx" class="blind" name="" />
              <label :for="'chk_toggle_01' + idx" class="check-toggle">
                {{ data.title }}
                <span class="toggle-slider"></span>
              </label>
            </li>
          </ul>
          <ul class="text-list bull">
            <li>서비스의 중요 안내사항에 대한 정보는 위 수신 여부와 관계없이 발송됩니다.</li>
          </ul>
        </div>
      </div>
      <!--// 24.11.25 v0.98 선택동의 영역 추가-->

      <!-- 대표회선 -->
      <div class="section">
        <h3 class="tit02">알닷케어 가능 회선</h3>
        <div v-for="(datas, index) in dataMockup" :key="index" class="item__line">
          <Accodian :isExpanded="datas.isPrimary ? true : false">
            <template #title>
              <div class="cont-head fl-sc">
                <h4 class="cont-title">
                  <span v-if="index === 0" class="badge-primary">대표</span>
                  {{ datas.number }}
                </h4>
                <span class="title-exp">{{ datas.agency }}</span>
              </div>
            </template>
            <template #content>
              <!-- 동의약관 -->
              <div class="consent-container">
                <div class="form-box">
                  <div class="title-area">
                    <strong class="title">선택 동의</strong>
                  </div>
                  <div
                    class="consent-checkbox"
                    v-for="(data, idx) in datas.personalData"
                    :key="idx"
                  >
                    <!-- 24.11.22 v.0.97 수정 -->
                    <input
                      type="checkbox"
                      :id="'chk_box_' + index + idx"
                      class="blind"
                      v-model="data.consent"
                    />
                    <label :for="'chk_box_' + index + idx"></label>
                    <button type="button" class="btn-arrow">
                      {{ data.title }}
                    </button>
                    <!--// 24.11.22 v.0.97 수정 -->
                  </div>
                </div>
                <div class="form-box">
                  <div class="title-area">
                    <strong class="title">광고성 정보 수신 및 활용 동의</strong>
                  </div>
                  <ul class="toggle-list">
                    <li v-for="(data, idx) in datas.marketing" :key="idx">
                      <input
                        type="checkbox"
                        :id="'chk_toggle_' + index + idx"
                        class="blind"
                        name=""
                        v-model="data.consent"
                      />
                      <label :for="'chk_toggle_' + index + idx" class="check-toggle">
                        {{ data.title }}
                        <span class="toggle-slider"></span>
                      </label>
                    </li>
                  </ul>
                  <ul class="text-list bull">
                    <li>
                      서비스의 중요 안내사항에 대한 정보는 위 수신 여부와 관계없이 발송됩니다.
                    </li>
                  </ul>
                </div>
              </div>
              <!-- //동의약관 -->
            </template>
          </Accodian>
        </div>
      </div>
      <!-- // 대표회선 -->

      <!-- 회원 탈퇴 -->
      <div class="section">
        <button type="button" class="btn_text ty03">회원탈퇴</button>
      </div>
      <!-- // 회원 탈퇴 -->
    </div>
    <!-- // content -->

    <!-- U+ 알뜰폰 사용 고객님 -->
    <!-- <AlertV2
      v-model="alertState.isTooltip"
      :textData="{
        title: 'U<sup>+</sup>알뜰폰 사용 고객님',
        description:
          '알닷케어는 U<sup>+</sup>알뜰폰 사용 고객만<br /> 이용 가능해요<br /><br />데이터 사용량, 청구요금 등 고객님<br /> 정보를 한 눈에 확인 할 수 있어요',
        }"
      @close="handleClose"
    /> -->
    <!-- // U+ 알뜰폰 사용 고객님 -->

    <!--24.11.01 수정 U+ 알뜰폰 사용 고객님 -->
    <Popup
      title="U<sup>+</sup>알뜰폰 사용 고객님"
      :isOpen="alertState.isTooltip"
      :popType="'alert-gray'"
      @update:isOpen="alertState.isTooltip = $event"
      @confirm="console.log('confirm')"
    >
      <div class="partners-list">
        <ul class="text-list bull">
          <li>알닷케어는 U+알뜰폰 사용 고객만 이용 가능해요</li>
          <li>데이터 사용량, 청구요금 등 고객님 정보를 한 눈에 확인 할 수 있어요</li>
          <li>
            알닷케어 미제공 파트너사의 요금제를 사용하는 고객은 해당 서비스를 이용할 수 없어요
          </li>
        </ul>
        <div class="gray-notice-box">
          <p class="notice-tit">알닷케어 미제공 파트너사</p>
          <div class="notice-content">
            파트너사명1, 파트너사명2, 파트너사명3, 파트너사명4, 파트너사명5
          </div>
        </div>
      </div>
    </Popup>
    <!--24.11.01 수정 U+ 알뜰폰 사용 고객님 -->

    <!-- 24.11.25 내 전화번호 수정 -->
    <Popup
      title="가입 회선"
      :isOpen="popState.number"
      @update:isOpen="popState.number = $event"
      @confirm="console.log('confirm')"
    >
      <ul class="select-list" role="listbox">
        <li role="none" :class="{ on: a.selected }" v-for="(a, i) in dataSelectList" :key="i">
          <button
            type="button"
            role="option"
            :aria-selected="a.selected"
            :data-option="a.phone"
            @click="clickSelectListItem(a)"
            class="line-info"
          >
            <span class="phone">{{ a.phone }}</span>
            <span class="brand">{{ a.brand }}</span>
          </button>
        </li>
      </ul>
      <PopupListItem
        v-model="numberSelect"
        :ListItemData="numberList"
        :option="{ multiple: false }"
        @select="console.log(numberSelect)"
      />
    </Popup>
    <!--// 24.11.25 내 전화번호 수정 -->

    <!-- BO 약관데이터 호출 -->
    <Popup
      title="약관상세"
      :isOpen="popState.termsSample"
      :popType="'alert-gray'"
      @update:isOpen="popState.termsSample = $event"
      @confirm="clickConfirm"
    >
      내용 전문보기 팝업
    </Popup>
    <!--// BO 약관데이터 호출 -->
  </div>
  <!-- // container -->
</template>

<script setup>
import PopupSelect from "@/components/PopupSelect";
import Accodian from "@/components/v2/common/Accodian";
import Popup from "@/components/v2/common/Popup";
import PopupListItem from "@/components/v2/common/PopupListItem";

// 헤더 정보
const layout = ref({
  header: "sub",
  footer: "",
  floatMenu: "floatMenu",
  title: "내 정보 수정",
});

// HOOK
const emit = defineEmits(["setLayout"]);

// 내 정보 목업데이터
const dataUser = ref([
  { label: "이름", tooltip: false, info: "홍길동", badge: "U<sup>+</sup> 알뜰폰" },
  { label: "전화번호", tooltip: false, info: "070-358-3515", badge: "" },
  { label: "이메일(ID)", tooltip: false, info: "uplus@uplus.com", badge: "" },
  { label: "알닷케어 이용신청일", tooltip: true, info: "070-358-3515", badge: "" },
]);

// tooltip
const alertState = ref({
  isTooltip: false,
});
const toggleTooltip = (v) => {
  alertState.value.isTooltip = true;
};
const handleClose = () => {
  alertState.value.isTooltip = false;
};

// 이메일
const emailSelfInput = ref(true);
const emailSelectDomain = ref("");
const selectDomain = ($event) => {
  emailSelfInput.value = $event.value == 0 ? true : false;
  emailSelectDomain.value = $event.title;
};

//동의항목 목업 데이터
const termsMockup = ref({
  personalData: [
    { title: "고객 혜택 제공을 위한 개인정보 제3자 제공 동의", consent: true },
    { title: "고객 혜택 제공을 위한 정보 수집 및 이용 동의", consent: false },
  ],
  marketing: [
    { title: "문자", consent: true },
    { title: "이메일", consent: false },
    { title: "알림톡", consent: true },
  ],
});

// 청구 정보 목업 데이터
const dataMockup = ref([
  {
    isPrimary: false,
    number: "010-12**-34**",
    agency: "에스원안심모바일",
    additionalInfo: [
      {
        list: [
          { name: "가입일", value: "2023.11.29" },
          { name: "등록 기기", value: "LGU-OMPHONE2" },
          { name: "요금제", value: "[빽다방 100잔] 평생할인 [빽다방 100잔] 평생할인… ", link: "/" },
          { name: "제공 데이터", value: "1GB" },
          { name: "제공 음성", value: "기본 제공" },
          { name: "제공 문자", value: "기본 제공" },
          { name: "기본 요금", value: "38,990월" },
          { name: "파트너사", value: "에스원안심모바일", link: "/" },
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
          { name: "요금제", value: "[빽다방 100잔] 평생할인 [빽다방 100잔] 평생할인… ", link: "/" },
          { name: "제공 데이터", value: "1GB" },
          { name: "제공 음성", value: "기본 제공" },
          { name: "제공 문자", value: "기본 제공" },
          { name: "기본 요금", value: "38,990월" },
          { name: "파트너사", value: "에스원안심모바일", link: "/" },
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
          { name: "요금제", value: "[빽다방 100잔] 평생할인 [빽다방 100잔] 평생할인… ", link: "/" },
          { name: "제공 데이터", value: "1GB" },
          { name: "제공 음성", value: "기본 제공" },
          { name: "제공 문자", value: "기본 제공" },
          { name: "기본 요금", value: "38,990월" },
          { name: "파트너사", value: "모나", link: "/" },
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
]);

const popState = ref({
  number: false, // 번호 변경
  terms: false,
  termsSample: false,
});
const changeNumberPop = () => {
  popState.value.number = true;
};

const numberSelect = ref(0);
const numberList = ref([
  { value: 0, name: "010-1122-3344", subText: "에스원안심모바일" },
  { value: 1, name: "010-1122-3344", subText: "모나" },
  { value: 2, name: "010-1122-3344", subText: "FLASH모바일" },
]);

onMounted(() => {
  emit("setLayout", layout);
});
</script>
