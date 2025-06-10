<template>
  <div class="AL-MY-05-601">
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
                <Tab :titles="['가입사실 확인', '통화내역', '납부내역 확인']" :active-tab-index="1">
                  <!-- 통화내역 -->
                  <template #content2>
                    <div class="cont-head title-main">
                      <h3 class="cont-title-main">
                        <b class="txt-primary">통화 내역</b> 열람을 위해<br />
                        아래의 신청서를 작성해 주세요
                      </h3>
                      <span class="title-exp mgt4">(최근 1년, 30일 기준 조회 가능)</span>

                      <ul class="text-list mgt16">
                        <li>
                          청구요금 확인용으로 개인정보가 포함된 타인의 정보는 마스킹 처리되어<br class="mobile_hide" />
                          식별할 수 없는 형태로 제공됩니다.
                        </li>
                      </ul>
                    </div>

                    <!-- 신청하실 휴대폰 번호 -->
                    <div class="form-box mgt0">
                      <div class="title-area">
                        <strong class="title">신청하실 휴대폰 번호</strong>
                      </div>

                      <div class="title-area-bottom-txt">010-12**-12**</div>
                    </div>
                    <!-- // 신청하실 휴대폰 번호 -->

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

                    <div class="form-box mgt40" v-if="radioIdx === 1">
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
                      <div class="contents-wrap ty02">
                        <Datepicker />
                      </div>
                    </Popup>

                    <Popup
                      :title="'종료일을 선택해 주세요 '"
                      :isOpen="popState.datepickerend"
                      :isPopFooter="false"
                      @update:isOpen="popState.datepickerend = $event"
                      class="pop-calendar"
                    >
                      <div class="contents-wrap ty02">
                        <Datepicker />
                      </div>
                    </Popup>
                    <!-- //popup datepicker -->
                    <!-- // 조회 기간 -->

                    <!-- 열람 내용 선택 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">열람 내용 선택</strong>
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
                          <label :for="item.id" class="pdx0">{{ item.text }}</label>
                        </div>
                      </div>
                    </div>
                    <!-- // 열람 내용 선택 -->

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
                            @btnClick="handleEmailSel"
                          />
                        </div>
                        <div class="error">이메일 형식을 확인해주세요</div>
                      </div>
                    </div>

                    <!-- 이메일 팝업 -->
                    <Popup
                      title="이메일 선택"
                      :isOpen="emailOpen"
                      @update:isOpen="emailOpen = $event"
                      @confirm="clickConfirmEmail"
                    >
                      <!-- 2024.10.10 이메일 선택 수정 -->
                      <PopupListItem
                        v-model="emailSelected"
                        :ListItemData="emailList"
                        :option="{ name: 'email-select' }"
                        @select="clickSelectListItemEmail"
                      />
                    </Popup>
                    <!-- // 이메일 팝업 -->
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
                      class="pcpopup"
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
                  <!-- // 통화내역 -->
                </Tab>
              </div>
            </div>
            <!-- // section -->

            <div class="reverse">
              <BottomFixMenu :btnText="'신청하기'" />
              <!-- // bottom_button -->
            </div>

            <!-- 꼭 알아두세요 -->
            <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
              <template #content>
                <ul class="text-list bull">
                  <li>발신 내역만 신청 가능하며, 수신통화내역 및 수발신 단문 메시지 내역은 열람이 불가합니다.</li>
                  <li>
                    통화내역 열람 신청은 당월 포함 최대 12개월 이전만 가능합니다.(12개월 보다 더 이전의 통화내역은
                    개인정보 삭제로 인해 열람 제공 불가합니다.)
                  </li>
                  <li>
                    통화 상세내역은 알뜰폰+ 매장에서도 열람 신청 가능합니다.
                    <p>
                      <NuxtLink :to="'#'" class="txt-link orange">알뜰폰+매장 찾기</NuxtLink>
                    </p>
                  </li>
                  <li>
                    본인이 아닌 경우, 개인정보 무단 조회 시 개인정보보호법 제23조에 의거 5년 이하의 징역 및 5천만
                    원 이하의 벌금에 처할 수 있습니다.
                  </li>
                  <li>요청하신 이력은 1개월 후에 정보가 파기됩니다.</li>
                  <li>청구요금 확인용으로 개인정보가 포함된 타인의 정보는 일체 제공되지 않습니다.</li>
                </ul>
              </template>
            </Accodian>
            <!-- //꼭 알아두세요  -->
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
    <ALMY05605P01 />
  </Popup>
  <!-- // 신청완료 -->
</template>

<script setup lang="ts">
import type { LayoutOptions } from "@/types/layout";
import PcLnb from "@/components/v2/common/PcLnb.vue";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu.vue";
import Tab from "@/components/v2/common/Tab.vue";
import InputForm from "@/components/v2/common/InputForm.vue";
import Datepicker from "@/components/v2/common/Datepicker.vue";
import Popup from "@/components/v2/common/Popup.vue";
import PopupListItem from "@/components/v2/common/PopupListItem.vue";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu.vue";
import Accodian from "@/components/v2/common/Accodian.vue";
import ALMY05605P01 from "@/components/popup/AL-MY-05-605-P01.vue";

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

//조회기간
const radioData1 = ref([
  { id: "radio01_01", value: "1개월", text: "1개월", checked: true },
  { id: "radio01_02", value: "직접 설정", text: "직접 설정", checked: false },
]);

//열람 내용 선택
const radioData2 = ref([
  { id: "radio02_01", value: "음성", text: "음성", checked: true },
  { id: "radio02_02", value: "음성+문자", text: "음성+문자", checked: false },
  { id: "radio03_02", value: "음성+문자+데이터", text: "음성+문자+데이터", checked: false },
  { id: "radio04_02", value: "데이터", text: "데이터", checked: false },
]);

const radioIdx = ref();
const radioIdx2 = ref();
const validationMocup = ref(false);

//팝업 목업
const popState = ref({
  datepickerstart: false,
  datepickerend: false,
});

const handlePopup = (popName: string, val: boolean) => {
  popState.value = {
    ...popState.value,
    [popName]: val,
  };
};

const popupOpen = ref(true);
const route = useRoute();
const popupQuery = ref(route.query.popup);

//S: 이메일
const emailOpen = ref(false);
const emailSelected = ref<string>("직접입력");
const emailList = ref([
  { selected: true, value: "직접입력", name: "직접입력" },
  { selected: false, value: "naver.com", name: "naver.com" },
  { selected: false, value: "daum.net", name: "daum.net" },
  { selected: false, value: "hanmail.net", name: "hanmail.net" },
  { selected: false, value: "nate.com", name: "nate.com" },
  { selected: false, value: "gmail.com", name: "gmail.com" },
  { selected: false, value: "dreamwiz.com", name: "dreamwiz.com" },
  { selected: false, value: "lycos.co.kr", name: "lycos.co.kr" },
  { selected: false, value: "chol.com", name: "chol.com" },
]);
const handleEmailSel = () => {
  emailOpen.value = true;
};

const clickSelectListItemEmail = (targetData: any) => {
  console.log(targetData);
};
const clickConfirmEmail = () => {
  console.log("이메일 확인");
};
//E: 이메일

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/sc/page-al-my-05-601.scss" as *;
</style>
