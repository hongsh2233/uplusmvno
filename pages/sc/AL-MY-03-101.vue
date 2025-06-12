<template>
  <div class="AL-MY-03-101">
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

            <!-- section -->
            <div class="content-item">
              <div class="content-inner">
                <div class="cont-head title-main">
                  <h3 class="cont-title-main">
                    요금을 납부할 카드의<br />
                    <b class="txt-primary">정보</b>를 입력해 주세요
                  </h3>
                </div>

                <!-- 01 -->
                <div class="form-box">
                  <div class="title-area">
                    <strong class="title">카드 소유주</strong>
                  </div>

                  <div class="btn-flex">
                    <div v-for="(item, idx) in radioData1" :key="item.id" class="radio_item ty05">
                      <input
                        type="radio"
                        :id="item.id"
                        name="radio01"
                        :value="item.value"
                        :checked="item.checked"
                        @change="radioIdx1 = idx"
                      />
                      <label :for="item.id">{{ item.text }}</label>
                    </div>
                  </div>

                  <div class="text_info">카드 명의자, 현재 납부자, 홈페이지 회원의 카드로 납부할 수 있습니다.</div>
                </div>
                <!-- // 01 -->

                <!-- 02 -->
                <div class="form-box">
                  <div class="title-area">
                    <strong class="title">고객 유형</strong>
                  </div>

                  <div class="btn-flex">
                    <div v-for="(item, idx) in radioData2" :key="item.id" class="radio_item ty05">
                      <input
                        type="radio"
                        :id="item.id"
                        name="radio02"
                        :value="item.value"
                        :checked="item.checked"
                        @change="radioIdx2 = idx"
                      />
                      <label :for="item.id">{{ item.text }}</label>
                    </div>
                  </div>
                </div>
                <!-- // 02 -->

                <!-- 03 -->
                <!-- 카드 번호 -->
                <div class="form-box">
                  <div class="title-area">
                    <strong class="title">카드 번호</strong>
                  </div>

                  <div class="form_group">
                    <div class="form_item">
                      <InputForm class="combobox-bottom" :option="{ placeholder: `숫자만 입력해 주세요` }" />
                    </div>
                  </div>
                </div>
                <!-- // 카드 번호 -->

                <!-- 카드사 -->
                <div class="form-box">
                  <div class="title-area">
                    <strong class="title">카드사</strong>
                  </div>

                  <div class="form_group">
                    <div class="form_item">
                      <InputForm
                        class="combobox-bottom text view"
                        :option="{ placeholder: `카드번호 입력 시 자동 조회`, value: '신한카드', readonly: true }"
                      />
                    </div>
                  </div>
                </div>
                <!-- // 카드사 -->

                <!-- 카드 유효기간 -->
                <div class="form-box">
                  <div class="title-area">
                    <strong class="title">카드 유효기간</strong>
                  </div>

                  <div class="form_group">
                    <div class="form_item">
                      <InputForm class="combobox-bottom" :option="{ placeholder: `MM` }" />
                      <InputForm class="combobox-bottom" :option="{ placeholder: `YY` }" />
                    </div>
                  </div>
                </div>
                <!-- // 카드 유효기간 -->

                <!-- 할부 기간 -->
                <div class="form-box">
                  <div class="title-area">
                    <strong class="title">할부 기간</strong>
                  </div>
                  <InputForm
                    class="combobox-bottom"
                    :option="{
                      placeholder: '할부 기간을 선택해 주세요',
                      readonly: true,
                      action: 'dropdown',
                    }"
                    @click="handleNumberSel_1"
                  />

                  <div class="text_info">5만 원 이상 결제 시 할부 가능합니다.</div>
                </div>
                <!-- // 할부 기간 -->

                <!-- 기간 팝업 -->
                <Popup
                  title="할부 기간을 선택해 주세요"
                  :isOpen="selectBoxOpen1"
                  @update:isOpen="selectBoxOpen1 = $event"
                  @confirm="clickSelectBoxConfirm_1"
                >
                  <PopupListItem v-model="selectedTab" :ListItemData="selectList" @select="clickSelectListItem_1" />
                </Popup>
                <!-- // 기간 팝업 -->
                <!-- // 03 -->

                <!-- 타인 신용카드 -->
                <div class="form-box" v-if="radioIdx1 === 1">
                  <!-- 사업자 -->
                  <div class="form-box" v-if="radioIdx2 === 1">
                    <!-- 카드 명의자명 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">카드 명의자명</strong>
                      </div>

                      <div class="form_group">
                        <div class="form_item">
                          <InputForm class="combobox-bottom" :option="{ placeholder: `고객명을 입력해 주세요` }" />
                        </div>
                      </div>
                    </div>
                    <!-- // 카드 명의자명 -->

                    <!-- 사업자 등록번호 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">사업자 등록번호</strong>
                      </div>

                      <div class="form_group">
                        <div class="form_item">
                          <InputForm
                            class="combobox-bottom"
                            :option="{ placeholder: `사업자 등록번호 10자리를 입력해 주세요` }"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- // 사업자 등록번호 -->

                    <!-- 카드 명의자 구분 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">카드 명의자 구분</strong>
                      </div>

                      <div class="btn-flex">
                        <div v-for="(item, idx) in radioData5" :key="item.id" class="radio_item ty05">
                          <input
                            type="radio"
                            :id="item.id"
                            name="radio05"
                            :value="item.value"
                            :checked="item.checked"
                            @change="radioIdx5 = idx"
                          />
                          <label :for="item.id">{{ item.text }}</label>
                        </div>
                      </div>
                    </div>
                    <!-- // 카드 명의자 구분 -->

                    <!-- 고객 성별 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">고객 성별</strong>
                      </div>

                      <div class="btn-flex">
                        <div v-for="(item, idx) in radioData4" :key="item.id" class="radio_item ty05">
                          <input
                            type="radio"
                            :id="item.id"
                            name="radio04"
                            :value="item.value"
                            :checked="item.checked"
                            @change="radioIdx4 = idx"
                          />
                          <label :for="item.id">{{ item.text }}</label>
                        </div>
                      </div>
                    </div>
                    <!-- // 고객 성별 -->

                    <!-- 통신사 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">통신사</strong>
                      </div>

                      <div class="btn-flex grid">
                        <div v-for="(item, idx) in radioData6" :key="item.id" class="radio_item ty05">
                          <input
                            type="radio"
                            :id="item.id"
                            name="radio06"
                            :value="item.value"
                            :checked="item.checked"
                            @change="radioIdx6 = idx"
                          />
                          <label :for="item.id">{{ item.text }}</label>
                        </div>
                      </div>
                    </div>
                    <!-- // 통신사 -->

                    <!-- 휴대폰 번호 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">휴대폰 번호</strong>
                      </div>

                      <div class="form_group">
                        <div class="form_item certified val_chk">
                          <InputForm
                            class="combobox-bottom"
                            :option="{
                              placeholder: `숫자만 입력해 주세요.`,
                            }"
                          />
                          <button type="button" class="btn chip">인증번호 받기</button>
                        </div>
                      </div>

                      <div class="form_group">
                        <div class="form_item certified val_chk">
                          <InputForm
                            class="combobox-bottom auth_num"
                            :option="{
                              placeholder: `인증번호 입력해 주세요`,
                              authNum: true,
                            }"
                          />
                          <button type="button" class="btn chip">시간 연장</button>
                        </div>
                      </div>

                      <div class="text_info type02">
                        휴대폰 인증 시 수집된 개인정보(성명, 생년월일, 성별, 휴대폰번호)는 개인정보 수집 이용 정책과
                        같이 활용됨을 동의함
                      </div>

                      <div class="btn-area btn-space mgb0">
                        <button type="button" class="btn-rounded btn-line" :class="[!isMobile && 'btn-sm']">
                          인증하기
                        </button>
                      </div>
                    </div>
                    <!-- // 휴대폰 번호 -->

                    <!-- 개인정보 -->
                    <div class="form-box">
                      <div class="check-txt check_st">
                        <input type="checkbox" id="checkbox01_02" name="" @click="handleTerms" />
                        <label for="checkbox01_02">개인정보 수집 · 이용 동의(필수)</label>
                      </div>
                    </div>
                    <!-- // 개인정보 -->
                  </div>
                  <!-- // 사업자 -->

                  <!-- 개인 -->
                  <div class="form-box" v-else>
                    <!-- 카드 소유자명 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">카드 소유자명</strong>
                      </div>

                      <div class="form_group">
                        <div class="form_item">
                          <InputForm
                            class="combobox-bottom"
                            :option="{ placeholder: `카드 소유자명을 입력해 주세요` }"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- // 카드 소유자명 -->

                    <!-- 생년월일 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">생년월일</strong>
                      </div>

                      <div class="form_group">
                        <div class="form_item">
                          <InputForm
                            class="combobox-bottom"
                            :option="{ placeholder: `생년월일 8자리를 입력해 주세요` }"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- // 생년월일 -->

                    <!-- 카드 명의자 구분 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">카드 명의자 구분</strong>
                      </div>

                      <div class="btn-flex">
                        <div v-for="(item, idx) in radioData5" :key="item.id" class="radio_item ty05">
                          <input
                            type="radio"
                            :id="item.id"
                            name="radio05"
                            :value="item.value"
                            :checked="item.checked"
                            @change="radioIdx5 = idx"
                          />
                          <label :for="item.id">{{ item.text }}</label>
                        </div>
                      </div>
                    </div>
                    <!-- // 카드 명의자 구분 -->

                    <!-- 고객 성별 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">고객 성별</strong>
                      </div>

                      <div class="btn-flex">
                        <div v-for="(item, idx) in radioData4" :key="item.id" class="radio_item ty05">
                          <input
                            type="radio"
                            :id="item.id"
                            name="radio04"
                            :value="item.value"
                            :checked="item.checked"
                            @change="radioIdx4 = idx"
                          />
                          <label :for="item.id">{{ item.text }}</label>
                        </div>
                      </div>
                    </div>
                    <!-- // 고객 성별 -->

                    <!-- 통신사 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">통신사</strong>
                      </div>

                      <div class="btn-flex grid">
                        <div v-for="(item, idx) in radioData6" :key="item.id" class="radio_item ty05">
                          <input
                            type="radio"
                            :id="item.id"
                            name="radio06"
                            :value="item.value"
                            :checked="item.checked"
                            @change="radioIdx6 = idx"
                          />
                          <label :for="item.id">{{ item.text }}</label>
                        </div>
                      </div>
                    </div>
                    <!-- // 통신사 -->

                    <!-- 휴대폰 번호 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">휴대폰 번호</strong>
                      </div>

                      <div class="form_group">
                        <div class="form_item certified val_chk">
                          <InputForm
                            class="combobox-bottom"
                            :option="{
                              placeholder: `숫자만 입력해 주세요.`,
                            }"
                          />
                          <button type="button" class="btn chip">인증번호 받기</button>
                        </div>
                      </div>

                      <div class="form_group">
                        <div class="form_item certified val_chk">
                          <InputForm
                            class="combobox-bottom auth_num"
                            :option="{
                              placeholder: `인증번호 입력해 주세요`,
                              authNum: true,
                            }"
                          />
                          <button type="button" class="btn chip">시간 연장</button>
                        </div>
                      </div>

                      <div class="text_info type02">
                        휴대폰 인증 시 수집된 개인정보(성명, 생년월일, 성별, 휴대폰번호)는 개인정보 수집 이용 정책과
                        같이 활용됨을 동의함
                      </div>

                      <div class="btn-area btn-space mgb0">
                        <button type="button" class="btn-rounded btn-line" :class="[!isMobile && 'btn-sm']">
                          인증하기
                        </button>
                      </div>
                    </div>
                    <!-- // 휴대폰 번호 -->

                    <!-- 개인정보 -->
                    <div class="form-box">
                      <div class="check-txt check_st">
                        <input type="checkbox" id="checkbox01_02" name="" @click="handleTerms" />
                        <label for="checkbox01_02">개인정보 수집 · 이용 동의(필수)</label>
                      </div>
                    </div>
                    <!-- // 개인정보 -->
                  </div>
                  <!-- // 개인 -->
                </div>
                <!-- // 타인 신용카드 -->

                <!-- 본인 신용카드 -->
                <div class="form-box" v-else>
                  <!-- 사업자 -->
                  <div class="form-box" v-if="radioIdx2 === 1">
                    <!-- 카드 명의자명 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">카드 명의자명</strong>
                      </div>

                      <div class="form_group">
                        <div class="form_item">
                          <InputForm class="combobox-bottom" :option="{ placeholder: `고객명을 입력해 주세요` }" />
                        </div>
                      </div>
                    </div>
                    <!-- // 카드 명의자명 -->

                    <!-- 사업자 등록번호 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">사업자 등록번호</strong>
                      </div>

                      <div class="form_group">
                        <div class="form_item">
                          <InputForm
                            class="combobox-bottom"
                            :option="{ placeholder: `사업자 등록번호 10자리를 입력해 주세요` }"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- // 사업자 등록번호 -->
                  </div>
                  <!-- //사업자 -->

                  <!-- 개인 -->
                  <div class="form-box" v-else>
                    <!-- 고객명 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">고객명</strong>
                      </div>

                      <div class="form_group">
                        <div class="form_item">
                          <InputForm class="combobox-bottom" :option="{ placeholder: `고객명을 입력해 주세요` }" />
                        </div>
                      </div>
                    </div>
                    <!-- // 고객명 -->

                    <!-- 생년월일 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">생년월일</strong>
                      </div>

                      <div class="form_group">
                        <div class="form_item">
                          <InputForm
                            class="combobox-bottom"
                            :option="{ placeholder: `생년월일 8자리를 입력해 주세요` }"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- // 생년월일 -->

                    <!-- 카드 명의자 구분 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">카드 명의자 구분</strong>
                      </div>

                      <div class="btn-flex">
                        <div v-for="(item, idx) in radioData3" :key="item.id" class="radio_item ty05">
                          <input
                            type="radio"
                            :id="item.id"
                            name="radio03"
                            :value="item.value"
                            :checked="item.checked"
                            @change="radioIdx3 = idx"
                          />
                          <label :for="item.id">{{ item.text }}</label>
                        </div>
                      </div>
                    </div>
                    <!-- // 카드 명의자 구분 -->

                    <!-- 고객 성별 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">고객 성별</strong>
                      </div>

                      <div class="btn-flex">
                        <div v-for="(item, idx) in radioData4" :key="item.id" class="radio_item ty05">
                          <input
                            type="radio"
                            :id="item.id"
                            name="radio04"
                            :value="item.value"
                            :checked="item.checked"
                            @change="radioIdx4 = idx"
                          />
                          <label :for="item.id">{{ item.text }}</label>
                        </div>
                      </div>
                    </div>
                    <!-- // 고객 성별 -->
                  </div>
                  <!-- // 개인 -->
                </div>
                <!-- // 본인 신용카드 -->
              </div>
              <!-- // content-inner -->
            </div>
            <!-- // section -->

            <!-- P003: 개인정보 수집/이용동의 약관 팝업 -->
            <Popup
              title="약관 상세"
              :isOpen="termsOpen1"
              :popType="'alert-gray'"
              @update:isOpen="termsOpen1 = $event"
              @confirm="clickConfirm2"
            >
              <Tems />
            </Popup>
            <!-- //P003: 개인정보 수집/이용동의 약관 팝업 -->

            <div class="reverse">
              <BottomFixMenu :btnText="'결제하기'" />
              <!-- // bottom_button -->
            </div>
          </div>
          <!-- // crp_r -->
        </div>
        <!-- // crp_wrap -->
      </div>
      <!-- // content -->
    </div>
    <!-- // container -->
  </div>

  <!-- 결제완료 팝업 -->
  <Popup
    title="결제완료"
    :isOpen="popupQuery === '1' && popupOpen"
    @update:isOpen="popupOpen = false"
    class="pcpopup"
    :isPopFooter="false"
  >
    <ALMY03101P01 />
  </Popup>
  <!-- // 결제완료 팝업 -->
</template>

<script setup lang="ts">
import type { LayoutOptions } from "@/types/layout";
import PcLnb from "@/components/v2/common/PcLnb.vue";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu.vue";

import InputForm from "@/components/v2/common/InputForm.vue";
import Popup from "@/components/v2/common/Popup.vue";
import PopupListItem from "@/components/v2/common/PopupListItem.vue";
import Tems from "@/components/v2/pages/ratepInqry/Tems.vue";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu.vue";

import ALMY03101P01 from "@/components/popup/AL-MY-03-101-P01.vue";

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "납부 정보 입력",
  wrapClass: "selfcare roaming",
});

const isMobile = ref(front.isMobile());

const radioData1 = ref([
  { id: "radio01_01", value: "본인 신용카드", text: "본인 신용카드", checked: true },
  { id: "radio01_02", value: "타인 신용카드", text: "타인 신용카드", checked: false },
]);
const radioData2 = ref([
  { id: "radio02_01", value: "개인", text: "개인", checked: true },
  { id: "radio02_02", value: "사업자(개인사업자)", text: "사업자(개인사업자)", checked: false },
]);
const radioData3 = ref([
  { id: "radio03_01", value: "내국인", text: "내국인", checked: true },
  { id: "radio03_02", value: "외국인", text: "외국인", checked: false },
]);
const radioData4 = ref([
  { id: "radio04_01", value: "남성", text: "남성", checked: true },
  { id: "radio04_02", value: "여성", text: "여성", checked: false },
]);
const radioData5 = ref([
  { id: "radio05_01", value: "내국인", text: "내국인", checked: true },
  { id: "radio05_02", value: "외국인", text: "외국인", checked: false },
]);
const radioData6 = ref([
  { id: "radio06_01", value: "SKT", text: "SKT", checked: true },
  { id: "radio06_02", value: "KT", text: "KT", checked: false },
  { id: "radio06_03", value: "LG U+", text: "LG U+", checked: false },
  { id: "radio06_04", value: "SKT 알뜰폰", text: "SKT 알뜰폰", checked: false },
  { id: "radio06_05", value: "KT 알뜰폰", text: "KT 알뜰폰", checked: false },
  { id: "radio06_06", value: "LG U+ 알뜰폰", text: "LG U+ 알뜰폰", checked: false },
]);

const radioIdx1 = ref();
const radioIdx2 = ref();
const radioIdx3 = ref();
const radioIdx4 = ref();
const radioIdx5 = ref();
const radioIdx6 = ref();

// S: JS-T11 : 셀렉트박스
const selectedTab = ref(0);
const selectList = ref([
  { selected: true, value: 0, name: "리스트1" },
  { selected: false, value: 1, name: "리스트2" },
  { selected: false, value: 2, name: "리스트3" },
  { selected: false, value: 3, name: "리스트4" },
]);

const selectBoxOpen1 = ref(false);
const handleNumberSel_1 = () => {
  selectBoxOpen1.value = true;
};

const clickSelectBoxConfirm_1 = () => {
  console.log("셀렉트박스 확인");
};

const clickSelectListItem_1 = (targetData: any) => {
  console.log(targetData);
};
// S: JS-T11 : 셀렉트박스

// S: JS-T04 : 개인정보 수집/이용동의
const termsOpen1 = ref(false);
const handleTerms = (e: Event) => {
  if (!(e.target as HTMLInputElement).checked) return;
  termsOpen1.value = true;
};
const clickConfirm2 = () => {
  console.log("개인정보 확인");
};
// E: JS-T04 : 개인정보 수집/이용동의

const popupOpen = ref(true);
const route = useRoute();
const popupQuery = ref(route.query.popup);

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/sc/page-al-my-03-101.scss" as *;
</style>
