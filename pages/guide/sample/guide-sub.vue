<template>
  <div class="container AL-MY-05-001">
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

          <!-- T09C03 : 상단 텍스트 & 정보 리스트  -->
          <div class="content-item">
            <div class="content-inner">
              <div class="cont-head title-main">
                <h3 class="cont-title-main">
                  김*님의<br />
                  <b class="txt-primary">가입 정보</b>를 확인하실 수 있어요
                </h3>
              </div>

              <div class="inner-section">
                <CardGroup :card-object="cardObject_1" @onClickChip="onClickHandler">
                  <template #default="{ item }">
                    <div class="fl-ac">
                      <p v-html="item?.value"></p>
                    </div>
                  </template>
                </CardGroup>
              </div>
            </div>
          </div>
          <!-- //T09C03 : 상단 텍스트 & 정보 리스트  -->

          <!-- T12C10C03 : 아코디언 정보 리스트  -->
          <div class="content-item">
            <div class="content-inner">
              <Accodian :isExpanded="true">
                <template #title>
                  <div class="cont-head">
                    <h4 class="cont-title">음성</h4>
                  </div>
                </template>
                <template #content>
                  <CardGroup :card-object="cardObject_3" class="cotent-item-hr-line" @onClickChip="onClickHandler" />
                  <div class="btn_wrap center more-btn-1">
                    <button type="button" class="btn-circle more">더 볼래요</button>
                  </div>
                </template>
              </Accodian>
            </div>
          </div>
          <!-- //T12C10C03 : 아코디언 정보 리스트  -->

          <!-- T08C03 : 정보 리스트 -->
          <CardGroup :card-object="cardObject_2" class="subscription-info-second mgt0" @onClickChip="onClickHandler" />
          <!-- //T08C03 : 정보 리스트 -->

          <!-- 폼 박스 -->
          <div class="content-item">
            <div class="content-inner">
              <!-- readonly -->
              <div class="form-box">
                <div class="title-area">
                  <strong class="title">현재 이용 중인 번호</strong>
                </div>
                <InputForm class="combobox-bottom text view" :option="{ value: '010-****-2612', readonly: true }" />
              </div>
              <!-- //readonly -->

              <div class="form-box">
                <div class="title-area">
                  <strong class="title">레이블</strong>
                </div>
                <div class="form_group">
                  <div class="form_item val_chk">
                    <InputForm class="combobox-bottom" :option="{ placeholder: `안내문구` }" />
                  </div>
                </div>
              </div>

              <!-- T01 : 사각형 라디오 버튼 -->
              <div class="form-box">
                <div class="title-area">
                  <strong class="title">레이블</strong>
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
              <!-- //T01 : 사각형 라디오 버튼 -->
              <p class="notice-txt">설명문구</p>

              <!-- T02C04C05C06P001 : 조회 기간 -->
              <div class="form-box">
                <div class="title-area">
                  <strong class="title">조회 기간</strong>
                </div>

                <div class="btn-flex">
                  <div v-for="(item, idx) in radioData2" :key="item.id" class="radio_item ty05">
                    <input
                      type="radio"
                      :id="item.id"
                      name="radio02"
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
              <!-- P001 : 달력 팝업 -->
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
              <!-- //P001 : 달력 팝업 -->
              <!-- //T02C04C05C06P001 : 조회 기간 -->

              <!-- T03C04P002 : 이메일 -->
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
                      @btnClick="handleMonthSel"
                    />
                  </div>
                  <div class="error">이메일 형식을 확인해주세요</div>
                </div>
              </div>
              <!-- //T03C04P002 : 이메일 -->

              <!-- T11C04P006 : 셀렉트박스 -->
              <div class="form-box">
                <div class="title-area">
                  <strong class="title">셀렉트박스제목</strong>
                </div>
                <InputForm
                  class="combobox-bottom"
                  :option="{
                    placeholder: '선택해 주세요',
                    // value: '리스트1',
                    readonly: true,
                    action: 'dropdown',
                  }"
                  @click="handleNumberSel_1"
                />
              </div>
              <!-- T11C04P006 : 셀렉트박스 -->

              <!-- T04P003 : 개인정보 수집 · 이용 동의 -->
              <div class="inner-section">
                <div class="check-txt check_st">
                  <input type="checkbox" id="checkbox01_02" name="" @click="handleTerms" />
                  <label for="checkbox01_02">개인정보 수집 · 이용 동의(필수)</label>
                </div>
              </div>
              <!-- //T04P003 : 개인정보 수집 · 이용 동의 -->

              <div class="gray-notice-box">
                <ul class="text-list bull">
                  <li>LTE, 5G 휴대폰의 경우 번호 변경 후 30분 이내 자동 개통됩니다.</li>
                </ul>
              </div>
              <div class="btn-area btn-space mgb0">
                <button type="button" class="btn-rounded btn-line fz16-pc">로밍 부가서비스 가입하기</button>
              </div>
            </div>
          </div>

          <!-- T10C12 : 박스내에 탭메뉴 -->
          <div class="content-item">
            <div class="content-inner">
              <Tab :titles="['탭메뉴1', '탭메뉴2', '탭메뉴3']">
                <template #content1>
                  <div class="cont-head title-main">
                    <h3 class="cont-title-main">
                      김*님의<br />
                      <b class="txt-primary">가입 정보</b>를 확인하실 수 있어요
                    </h3>
                    <p class="title-exp ta-l">로밍 요금제 가입하고 편하게 해외여행 하세요</p>
                    <ul class="text-list bull">
                      <li>리스트<strong>내용</strong>1</li>
                    </ul>
                  </div>
                </template>
                <template #content2> 내용2 </template>
                <template #content3> 내용3 </template>
              </Tab>
            </div>
          </div>
          <!-- //T10C12 : 박스내에 탭메뉴 -->

          <!-- T05C07 : 이동 링크 목록 -->
          <ShortcutMenu :links="linksArray" />
          <!-- //T05C07 : 이동 링크 목록 -->

          <!-- T06C11 bottom_button -->
          <BottomFixMenu :btnText="'번호 변경 취소'" :disabled="false" />
          <!-- //T06C11 bottom_button -->

          <!-- T07C10 꼭 알아두세요 -->
          <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
            <template #content>
              <ul class="text-list bull">
                <li>
                  방문한 국가가 확인되지 않으면 고객센터(1234-1234)로 연락해 주세요
                  <p>
                    <NuxtLink :to="'#'" class="txt-link orange">화살표링크텍스트</NuxtLink>
                  </p>
                </li>
              </ul>
            </template>
          </Accodian>
          <!-- //T07C10 꼭 알아두세요 -->
        </div>
        <!-- // contents -->

        <!-- P004 : 청구/납부 변경 팝업 -->
        <Popup
          v-if="dataSelectList"
          title="청구/납부정보 변경"
          :isOpen="isOpen1"
          @update:isOpen="isOpen1 = $event"
          :isPopFooter="false"
        >
          <template v-if="!isPopCustom">
            <ul class="select-list" role="listbox">
              <li role="none" :class="{ on: data.selected }" v-for="(data, i) in dataSelectList" :key="i">
                <NuxtLink v-if="data.url" role="option" :to="data.url">
                  {{ data.name }}
                </NuxtLink>
              </li>
            </ul>
          </template>
          <template v-else>
            <slot></slot>
          </template>
        </Popup>
        <!-- //P004 : 청구/납부 변경 팝업 -->

        <!-- P002: 이메일 팝업 -->
        <Popup title="이메일 선택" :isOpen="emailOpen" @update:isOpen="emailOpen = $event" @confirm="clickEmailConfirm">
          <PopupListItem
            v-model="emailSelected"
            :ListItemData="emailList"
            :option="{ name: 'email-select' }"
            @select="clickSelectListItem"
          />
        </Popup>
        <!-- //P002: 이메일 팝업 -->

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

        <!-- P005 : 기본 팝업 -->
        <Popup
          title="결합 정보"
          popType="full no-title"
          confirmText="확인"
          :isOpen="popupQuery === '1' && popupOpen"
          :isPopFooter="false"
          @update:isOpen="popupOpen = false"
          class="pcpopup type-float-btn-1"
        >
          <ALMY05001P01 />
        </Popup>
        <!-- //P005 : 기본 팝업 -->

        <!-- P006 : 셀렉트박스 popup -->
        <Popup
          title="팝업제목"
          :isOpen="selectBoxOpen1"
          @update:isOpen="selectBoxOpen1 = $event"
          @confirm="clickSelectBoxConfirm_1"
        >
          <PopupListItem v-model="selectedTab" :ListItemData="selectList" @select="clickSelectListItem_1" />
        </Popup>
        <!-- //P006 : 셀렉트박스 popup -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * C01. PcLnb : 왼쪽 사이드 메뉴 컴포넌트
 * C02. MyInfoMenu : 가입회선 정보 컴포넌트
 * C03. CardGroup : 카드 그룹 컴포넌트
 * C04. InputForm : 입력 요소 컴포넌트
 * C05. Datepicker : 달력 컴포넌트
 * C06. Popup : 팝업 컴포넌트
 * C07. ShortcutMenu : 하단에 관련 링크 리스트 컴포넌트
 * C08. PopupListItem : 팝업에 선택 리스트 컴포넌트
 * C09. Tems : 팝업에 약관 컴포넌트
 * C10. Accodian : 아코디언 컴포넌트
 * C11. BottomFixMenu : pc에선 버튼이고, mobile에서는 하단 고정 버튼 컴포넌트
 * C12. Tab : 탭메뉴 컴포넌트
 */
import PcLnb from "@/components/v2/common/PcLnb.vue";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu.vue";
import CardGroup from "@/components/v2/common/CardGroupRoaming.vue";
import InputForm from "@/components/v2/common/InputForm.vue";
import Datepicker from "@/components/v2/common/Datepicker.vue";
import Popup from "@/components/v2/common/Popup.vue";
import ShortcutMenu from "@/components/v2/common/ShortcutMenu.vue";
import PopupListItem from "@/components/v2/common/PopupListItem.vue";
import Tems from "@/components/v2/pages/ratepInqry/Tems.vue";
import Accodian from "@/components/v2/common/Accodian.vue";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu.vue";
import ALMY05001P01 from "@/components/popup/AL-MY-05-001-P01.vue";
import Tab from "@/components/v2/common/Tab.vue";

// S: 레이아웃 설정 (1-1)
const layout = ref({
  header: "sub",
  footer: "",
  floatMenu: "none",
  title: "가입정보",
  wrapClass: "selfcare roaming ver-3",
});

const emit = defineEmits(["setLayout"]);
// E: 레이아웃 설정 (1-1)

// S: JS-T01
const radioData1 = ref([
  { id: "radio01_01", value: "타이틀1", text: "타이틀1", checked: true },
  { id: "radio01_02", value: "타이틀2", text: "타이틀2", checked: false },
]);
// E: JS-T01

// S: JS-T02 : 조회 기간
const radioData2 = ref([
  { id: "radio02_01", value: "1개월", text: "1개월", checked: true },
  { id: "radio02_02", value: "1개월", text: "3개월", checked: false },
  { id: "radio02_03", value: "1개월", text: "6개월", checked: false },
  { id: "radio02_04", value: "직접 설정", text: "직접 설정", checked: false },
]);

const radioIdx = ref();

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
// E: JS-T02 : 조회 기간

// S: JS-T03 (1-1) : 아메일 주소
/**
 * const emailOpen : 이메일 팝업을 열고, 닫음.
 * const validationMocup : 에러 문구 노출, 숨김
 */
const emailOpen = ref(false);
const emailSelected = ref<number[] | string>("");
const emailList = ref([
  { selected: true, value: 0, name: "직접입력" },
  { selected: false, value: 1, name: "naver.com" },
  { selected: false, value: 2, name: "daum.net" },
  { selected: false, value: 3, name: "hanmail.net" },
  { selected: false, value: 4, name: "nate.com" },
  { selected: false, value: 5, name: "gmail.com" },
  { selected: false, value: 6, name: "dreamwiz.com" },
  { selected: false, value: 7, name: "lycos.co.kr" },
  { selected: false, value: 8, name: "chol.com" },
]);
const handleMonthSel = () => {
  emailOpen.value = true;
};
const clickSelectListItem = (targetData: any) => {
  console.log(targetData);
};
const clickEmailConfirm = () => {
  console.log("이메일 확인");
};
const validationMocup = ref(true);
// E: JS-T03 (1-1) : 아메일 주소

// S: JS-P005 : 기본 팝업 쿼리값으로 열고, 닫기
const route = useRoute();
const popupQuery = ref(route.query.popup);
const popupOpen = ref(true);
// E: JS-P005 : 기본 팝업 쿼리값으로 열고, 닫기

// S: JS-T09 - 상단 텍스트 & 정보 리스트
const cardObject_1 = ref([
  {
    title: "부가서비스 정보",
    sub: "(유료 1개, 무료 2개)",
    chip: "변경",
    url: "",
    list: [
      { name: "요금제", value: "[빽다방 100잔] 평생 할인…." },
      { name: "할부 기기", value: "iPhone15 Pro Max_1TB", description: "(ULK-A3106-1TB)" },
      { name: "파트너사", value: `<a href="/" class="link-txt-1">에스원안심모바일</a>` },
    ],
  },
]);
// E: JS-T09 - 상단 텍스트 & 정보 리스트

// S: JS-T08 : 정보 리스트
const cardObject_2 = ref([
  {
    title: "단말 정보",
    sub: "",
    chip: "휴대폰 등록",
    url: "https://www.naver.com",
    list: [{ name: "고객명", value: "김*닷" }],
  },
  {
    title: `<a href="/" class="link-txt-1">결합 정보</a>`,
    sub: "",
    chip: "",
    url: "",
    list: [{ name: "가입 서비스명", value: "인터넷/IPTV/모바일" }],
  },
]);
// E: JS-T08 : 정보 리스트

// S: JS-T12 : 아코디언 정보 리스트
const bottomButtonClickHandler = ({ id, name }: { id: number; name: string }) => {
  console.log(id);
  console.log(name);
};

const cardObject_3 = ref([
  {
    title: `<a href="/" class="link-txt-2">결합 정보</a>`,
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "신청일", value: "2025. 04. 28" },
      { name: "금액", value: "44,000원", description: "(부가세 포함)", class: { list: "has-description" } },
    ],
    bottomButtons: [
      { id: 1, name: "변경하기", type: "outline-gray", bottomButtonClickHandler },
      { id: 2, name: "해지하기", type: "outline-red", bottomButtonClickHandler },
    ],
  },
  {
    title: `<a href="/" class="link-txt-2">결합 정보2</a>`,
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "신청일", value: "2025. 04. 28" },
      { name: "금액", value: "44,000원", description: "(부가세 포함)", class: { list: "has-description" } },
    ],
    bottomButtons: [{ id: 3, name: "해지하기", type: "outline-red", bottomButtonClickHandler }],
  },
]);
// E: JS-T12 : 아코디언 정보 리스트

// S: JS-P004 : 청구/납부 변경 팝업
const isOpen1 = ref(false);
const isPopCustom = ref(false);

type DataSelectListItem = {
  value: number;
  name: string;
  url?: string;
  selected?: boolean;
};

const dataSelectList = ref<DataSelectListItem[]>([
  { value: 0, name: "납부 방법 변경", url: "https://www.naver.com" },
  { value: 1, name: "결제일 변경", url: "https://www.google.com" },
  { value: 2, name: "청구서 받는 방법 변경", url: "https://www.naver.com" },
]);

const onClickHandler = (val?: string | number) => {
  console.log(val);
  if (val === "변경") isOpen1.value = true;
};
// E: JS-P004 : 청구/납부 변경 팝업

// const current = ref("current");

// JS-T05 이동 링크 목록
const linksArray = [{ title: "과거 로밍 이용 내역 보러 가기", link: "/" }];

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

onMounted(() => {
  // JS-T03 (1-2) : 이메일 선택자 중 selected될 요소에 [index]를 반환 합니다.
  emailSelected.value = emailList.value.filter((item) => item.selected).map((item) => item.value);
  // 레이아웃 설정 (1-2)
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/sc/page-al-my-05-001.scss" as *;
</style>
