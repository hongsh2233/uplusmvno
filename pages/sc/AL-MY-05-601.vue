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
                <Tab :titles="['가입사실 확인', '통화내역', '납부내역 확인']" :active-tab-index="0">
                  <!-- 가입사실 확인서 -->
                  <template #content1>
                    <div class="cont-head title-main">
                      <h3 class="cont-title-main" v-if="!isMobile">
                        유플러스 알뜰폰 <br class="pc_hide" />
                        <b class="txt-primary">가입내역 제출</b>이 <br class="mobile_hide" />
                        필요한 경우<br class="pc_hide" />
                        사실 확인서 발급하세요
                      </h3>

                      <h3 class="cont-title-main" v-else>
                        가입 내역을 제출해야 하는 경우,<br />
                        <b class="txt-primary">가입 사실 확인서</b> 발급해 주세요
                      </h3>
                    </div>

                    <!-- 가입 정보 확인 -->
                    <div class="inner-section mgt0">
                      <CardGroup :card-object="cardObject1">
                        <template #default="{ item }">
                          <p :class="item?.class">
                            {{ item?.value }}
                          </p>
                        </template>
                      </CardGroup>
                    </div>
                    <!-- // 가입 정보 확인 -->

                    <!-- 단말 정보 -->
                    <div class="inner-section">
                      <CardGroup :card-object="cardObject2">
                        <template #default="{ item }">
                          <p :class="item?.class">
                            {{ item?.value }}
                          </p>
                        </template>
                      </CardGroup>
                    </div>
                    <!-- // 단말 정보 -->

                    <!-- 발급 용도 및 제출처 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">발급 용도 및 제출처</strong>
                      </div>
                      <InputForm
                        class="combobox-bottom"
                        :option="{
                          placeholder: '선택해 주세요',
                          readonly: true,
                          action: 'dropdown',
                        }"
                        @click="handleIssuedPurposeSel"
                      />
                    </div>

                    <div class="form-box mgt16" v-if="issuedPurposeSelectedTab === '직접 입력'">
                      <TextareaBox
                        :data="{
                          type: 'ty03',
                          placeholder: '발급 용도 사유를 입력해 주세요',
                          rows: 1,
                          maxlength: 30,
                          byteCheck: true,
                        }"
                        @textareaValue="console.log($event)"
                        @textareaSubmit="console.log($event)"
                        class="type-count-1"
                      />
                    </div>

                    <!-- 기간 팝업 -->
                    <Popup
                      title="발급 용도 및 제출처"
                      :isOpen="issuedPurposeSelectBoxOpen"
                      @update:isOpen="issuedPurposeSelectBoxOpen = $event"
                      class="pcpopup"
                    >
                      <div class="contents-wrap ty02">
                        <PopupListItem
                          v-model="issuedPurposeSelectedTab"
                          :ListItemData="dataSelectList"
                          :option="{ multiple: false }"
                          @select="console.log(issuedPurposeSelectedTab)"
                        />
                      </div>
                    </Popup>
                    <!-- // 기간 팝업 -->
                    <!-- // 발급 용도 및 제출처 -->

                    <!-- 이메일 -->
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">이메일 주소</strong>
                      </div>
                      <div class="form_group">
                        <div class="form_item">
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
                  <!-- // 가입사실 확인서 -->
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
    <ALMY05602P01 />
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
import Popup from "@/components/v2/common/Popup.vue";
import PopupListItem from "@/components/v2/common/PopupListItem.vue";
import TextareaBox from "@/components/TextareaBox.vue";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu.vue";
import ALMY05602P01 from "@/components/popup/AL-MY-05-602-P01.vue";

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const isMobile = front.isMobile();

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "증명서 발급 신청",
  wrapClass: "selfcare roaming",
});

const cardObject1 = ref([
  {
    title: "가입 정보 확인",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "이름", value: "김*닷" },
      { name: "휴대폰 번호", value: "010-12**-34**" },
      { name: "생년월일", value: "2025. 07. 18" },
      { name: "가입일자", value: "2025. 07. 18" },
    ],
  },
]);

const cardObject2 = ref([
  {
    title: "단말 정보",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "현재 사용 중인 휴대폰 개통일", value: "2025. 07. 18" },
      { name: "모델명", value: "iPhone15 Pro Max_1TB" },
      { name: "기기 일련번호", value: "*****************2134" },
    ],
  },
]);

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

const popupOpen = ref(true);
const route = useRoute();
const popupQuery = ref(route.query.popup);

// S: 발급 용도 및 제출처
const issuedPurposeSelectedTab = ref("A/S센터 제출용");
const dataSelectList = ref([
  { value: "A/S센터 제출용", name: "A/S센터 제출용" },
  { value: "보험회사", name: "보험회사" },
  { value: "수사기관", name: "수사기관" },
  { value: "기타 증빙", name: "기타 증빙" },
  { value: "직접 입력", name: "직접 입력" },
]);

const issuedPurposeSelectBoxOpen = ref(false);
const handleIssuedPurposeSel = () => {
  issuedPurposeSelectBoxOpen.value = true;
};
// E: 발급 용도 및 제출처

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss">
@use "@/assets/scss/pages/sc/page-al-my-05-601.scss" as *;
</style>
