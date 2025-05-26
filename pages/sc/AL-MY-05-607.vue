<template>
  <div class="AL-MY-05-607">
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
                <Tab :titles="['가입사실 확인서', '통화내역', '납부내역 확인서']">
                  <!-- 납부내역 확인서 -->
                  <template #content3>
                    <div class="cont-head title-main">
                      <h3 class="cont-title-main">
                        <b class="txt-primary">납부 내역</b> 열람을 위해<br />
                        아래의 신청서를 작성해 주세요
                      </h3>
                      <span class="title-exp">(최근 1년간)</span>

                      <ul class="text-list mgt16">
                        <li>
                          청구요금 확인용으로 개인정보가 포함된 타인의 정보는 마스킹 처리되어
                          <br class="mobile-hide" />
                          식별할 수 없는 형태로 제공됩니다.
                        </li>
                      </ul>
                    </div>

                    <!-- 납부내역 확인서 - M -->
                    <div class="inner-section">
                      <CardGroup :card-object="cardObject1">
                        <template #default="{ item }">
                          <p :class="item.class">
                            {{ item.value }}
                          </p>
                        </template>
                      </CardGroup>
                    </div>
                    <!-- // 납부내역 확인서 - M -->

                    <!-- 조회 기간 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">조회 기간</strong>
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

                    <div class="form-box mgt40" v-if="radioIdx === 3">
                      <div class="form_group picker-time">
                        <div class="form_item">
                          <div class="form-flex">
                            <InputForm
                              class="combobox-bottom datepicker"
                              :option="{ placeholder: '시작일', readonly: true, action: 'datepickerstart' }"
                              @click="handlePopup('datepickerstart', true)"
                            />
                            <InputForm
                              class="combobox-bottom datepicker"
                              :option="{ placeholder: '종료일', readonly: true, action: 'datepickerend' }"
                              @click="handlePopup('datepickerend', true)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- popup datepicker -->
                    <Popup
                      :title="'시작일을 선택해 주세요 '"
                      :isOpen="popState.datepickerstart"
                      :isPopFooter="false"
                      @update:isOpen="popState.datepickerstart = $event"
                      class="pop-calendar"
                    >
                      <div class="contents-wrap ty02"><Datepicker /></div>
                    </Popup>

                    <Popup
                      :title="'종료일을 선택해 주세요 '"
                      :isOpen="popState.datepickerend"
                      :isPopFooter="false"
                      @update:isOpen="popState.datepickerend = $event"
                      class="pop-calendar"
                    >
                      <div class="contents-wrap ty02"><Datepicker /></div>
                    </Popup>
                    <!-- //popup datepicker -->
                    <!-- // 조회 기간 -->

                    <!-- 이메일 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">이메일 주소</strong>
                      </div>
                      <div class="form_group">
                        <div class="form_item" :class="{ val_chk: validationMocup }">
                          <!-- validation 체크 클래스 val_chk -->
                          <InputForm
                            class="combobox-bottom text"
                            :option="{ placeholder: '이메일 아이디' }"
                            @inputValue="console.log($event)"
                          />
                          <span class="mark_div">@</span>
                          <InputForm
                            class="combobox-bottom"
                            :option="{ placeholder: '이메일 선택', readonly: false, action: 'dropdown' }"
                          />
                        </div>
                        <div class="error">이메일 형식을 확인해주세요</div>
                      </div>
                    </div>
                    <!-- // 이메일 -->

                    <!-- 개인정보 수집/이용동의 -->
                    <div class="inner-section">
                      <div class="check-txt check_st">
                        <input type="checkbox" id="checkbox01_02" name="" />
                        <label for="checkbox01_02">개인정보 수집 · 이용 동의(필수)</label>
                      </div>
                    </div>

                    <!-- 개인정보 수집/이용동의 팝업 -->
                    <Popup
                      title="약관 상세"
                      :isOpen="popupQuery === '1' && popupOpen"
                      @update:isOpen="popupOpen = false"
                      :popType="'alert-gray'"
                    >
                      <div class="contents-wrap ty02">
                        <p class="tit">증명서 발급을 위한 개인정보 수집/이용 동의</p>
                        <ul class="policy-wrap">
                          <li>1. 수집항목 : 이름, 성별, 생년월일, 휴대폰 번호, 이메일</li>
                          <li>2. 수집 이용목적 : 청구서 재발행</li>
                          <li>3. 보유, 이용 기간 및 파기 : 자료 제공 후 1개월 후 지체 없이 파기</li>
                        </ul>
                      </div>
                    </Popup>
                    <!-- // 개인정보 수집/이용동의 팝업 -->
                    <!-- // 개인정보 수집/이용동의 -->
                  </template>
                  <!-- // 납부내역 확인서 -->
                </Tab>
              </div>
            </div>
            <!-- // section -->

            <div class="reverse">
              <BottomFixMenu :btnText="'신청하기'" />
              <!-- // bottom_button -->
            </div>
          </div>
          <!-- // contents -->
        </div>
      </div>
    </div>
  </div>

  <!-- 신청완료 -->
  <Popup
    title="신청 완료"
    :isOpen="popupQuery === '2' && popupOpen"
    @update:isOpen="popupOpen = false"
    :isPopFooter="false"
    class="pcpopup"
  >
    <ALMY05608P01 />
  </Popup>
  <!-- // 신청완료 -->
</template>

<script setup lang="ts">
import type { LayoutOptions } from "@/types/layout";
import PcLnb from "@/components/v2/common/PcLnb.vue";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu.vue";

import Tab from "@/components/v2/common/Tab.vue";
import CardGroup from "@/components/v2/common/CardGroupRoaming.vue";
import InputForm from "@/components/v2/common/InputForm.vue";
import Datepicker from "@/components/v2/common/Datepicker.vue";
import Popup from "@/components/v2/common/Popup.vue";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu.vue";
import ALMY05608P01 from "@/components/popup/AL-MY-05-608-P01.vue";

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
    title: "가입 정보",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "요금제", value: "[빽다방 100잔] 평생 할인… " },
      { name: "가입 상품", value: "모바일" },
      { name: "휴대폰 번호", value: "010-12**-34**" },
      { name: "제공 음성", value: "기본 제공" },
      { name: "제공 문자", value: "기본 제공" },
      { name: "파트너사", value: "에스원안심모바일" },
    ],
  },
]);

//조회기간
const radioData1 = ref([
  { id: "radio01_01", value: "1개월", text: "1개월", checked: true },
  { id: "radio01_02", value: "1개월", text: "3개월", checked: false },
  { id: "radio01_03", value: "1개월", text: "6개월", checked: false },
  { id: "radio01_04", value: "직접 설정", text: "직접 설정", checked: false },
]);

const radioIdx = ref();
const validationMocup = ref(false);

//팝업 목업
const popState = ref({
  datepickerstart: false,
  datepickerend: false,
});

const handlePopup = (popName, val) => {
  popState.value[popName] = val;
};
const clickConfirm = () => {
  console.log("확인");
};

const popupOpen = ref(true);
const route = useRoute();
const popupQuery = ref(route.query.popup);

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss">
@use "@/assets/scss/pages/sc/page-al-my-05-607.scss" as *;
</style>
