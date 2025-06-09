<template>
  <div class="container AL-MY-05-300">
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
                  유심 / eSIM 변경은<br />
                  <b class="txt-primary">셀프로 간편 신청</b>하세요
                </h3>
              </div>

              <div class="inner-section">
                <CardGroup :card-object="cardObject_1">
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

          <div class="content-item">
            <div class="content-inner">
              <Tab :titles="['유심으로 변경', 'eSIM으로 변경']" :active-tab-index="0">
                <template #content1>
                  <div class="cont-head title-main">
                    <h3 class="cont-title-main">
                      변경할 <b class="txt-primary">유심</b> 정보를<br />
                      등록해 주세요
                    </h3>
                  </div>
                  <p class="usim-change-img-wrap">
                    <img src="/images/roaming/sc/img_usim_info.png" alt="" />
                  </p>

                  <!-- T11C04P006 : 유심 모델 -->
                  <div class="form-box">
                    <div class="title-area">
                      <strong class="title">유심 모델</strong>
                    </div>
                    <InputForm
                      class="combobox-bottom"
                      :option="{
                        placeholder: '선택해 주세요',
                        readonly: true,
                        action: 'dropdown',
                      }"
                      @click="handleUsimModelSel"
                    />
                  </div>
                  <!-- T11C04P006 : 유심 모델 -->

                  <div class="form-box">
                    <div class="title-area">
                      <strong class="title">유심 일련번호</strong>
                    </div>
                    <div class="form_group">
                      <div class="form_item">
                        <InputForm class="combobox-bottom" :option="{ placeholder: `일련번호를 입력해 주세요` }" />
                      </div>
                    </div>
                  </div>
                </template>

                <template #content2>
                  <!-- eSIM으로 변경 탭 내용 -->
                  eSIM으로 변경 탭 내용
                  <!-- //eSIM으로 변경 탭 내용 -->
                </template>
              </Tab>
            </div>
          </div>
          <div class="content-item">
            <div class="content-inner">
              <!-- T11C04P007 : 변경 사유 -->
              <div class="form-box">
                <div class="title-area">
                  <strong class="title">변경 사유</strong>
                </div>
                <InputForm
                  class="combobox-bottom"
                  :option="{
                    placeholder: '선택해 주세요',
                    readonly: true,
                    action: 'dropdown',
                  }"
                  @click="handleChangeResonSel"
                />
              </div>

              <div class="form-box mgt16" v-if="selectedTab2 === '직접 입력'">
                <!-- <TextareaBox
                  :data="{
                    placeholder: '유심 변경 사유를 입력해 주세요',
                    rows: 1,
                    maxlength: 30,
                    byteCheck: true,
                  }"
                  @textareaValue="console.log($event)"
                  @textareaSubmit="console.log($event)"
                  class="type-count-1"
                /> -->
                <TextareaBox
                  :data="{
                    type: 'ty03',
                    placeholder: '유심 변경 사유를 입력해 주세요',
                    rows: 1,
                    maxlength: 60,
                    byteCheck: true,
                  }"
                  @textareaValue="console.log($event)"
                  @textareaSubmit="console.log($event)"
                  class="type-count-1"
                />
              </div>
              <!-- T11C04P007 : 변경 사유 -->

              <div class="form-box">
                <div class="title-area">
                  <strong class="title">연락받을 전화번호</strong>

                  <div class="check-txt check_st mgt0">
                    <input type="checkbox" id="checkbox01_01" name="" @click="handleMemberPhone" />
                    <label for="checkbox01_01">신청 회선과 동일</label>
                  </div>
                </div>
                <div class="form_group">
                  <div class="form_item">
                    <InputForm class="combobox-bottom" :option="{ placeholder: `숫자만 입력해 주세요` }" />
                  </div>
                </div>
                <p class="notice-txt">처리 결과를 SMS로 안내해 드려요</p>
              </div>
            </div>
          </div>

          <!-- T06C11 bottom_button -->
          <BottomFixMenu :btnText="'인증하기'" :disabled="true" />
          <!-- //T06C11 bottom_button -->

          <!-- T07C10 꼭 알아두세요 -->
          <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
            <template #content>
              <ul class="text-list bull">
                <li>
                  청소년, 외국인, 법인 가입자는 온라인 유심 변경 신청이 불가하며, 고객센터 상담을 통해 가능합니다.
                </li>
                <li>
                  휴대폰 분실/유심 불량에 따른 유심 변경 신청은 이용하고 계신 카드사 홈페이지에서 본인확인 서비스 신청
                  완료 후 PC에서 본인인증 가능합니다.
                </li>
                <li>
                  변경 처리 완료 후 알림 톡(또는 문자)을 받으신 후, 새 유심을 휴대폰에 장착하여 전원을 1~3회 껐다 켜시고
                  서비스 정상 여부(음성, 문자, 데이터)를 확인 바랍니다.
                </li>
                <li>해외에서는 온라인 유심 변경 처리가 되지 않습니다.</li>
                <li>평일 18시 이후/주말/공휴일 유심 변경 신청 건은 다음 영업일에 신청 순서대로 처리됩니다.</li>
                <li>
                  유심 변경 신청은 유심 구매 후 신청하실 수 있으며, 유심 변경 신청 후에는 취소가 불가능합니다.
                  <p>
                    <NuxtLink :to="'#'" class="txt-link orange">eSIM 이용 가능 휴대폰 보기</NuxtLink>
                  </p>
                </li>
              </ul>
            </template>
          </Accodian>
          <!-- //T07C10 꼭 알아두세요 -->
        </div>
        <!-- // contents -->

        <!-- P006 : 유심 모델 코드 선택 popup -->
        <Popup
          title="유심 모델 코드 선택"
          :isOpen="selectBoxOpen1"
          @update:isOpen="selectBoxOpen1 = $event"
          @confirm="clickSelectBoxUsimModelConfirm"
        >
          <PopupListItem v-model="selectedTab" :ListItemData="selectList" @select="clickSelectListUsimModelItem" />
        </Popup>
        <!-- //P006 : 유심 모델 코드 선택 popup -->

        <!-- P007 : 유심 변경 사유 선택 popup -->
        <Popup
          title="유심 변경 사유 선택"
          :isOpen="selectBoxOpen2"
          @update:isOpen="selectBoxOpen2 = $event"
          @confirm="clickSelectBoxChangeResonConfirm"
        >
          <PopupListItem v-model="selectedTab2" :ListItemData="selectList2" @select="clickSelectListChangeResonItem" />
        </Popup>
        <!-- //P007 : 유심 변경 사유 선택 popup -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PcLnb from "@/components/v2/common/PcLnb.vue";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu.vue";
import CardGroup from "@/components/v2/common/CardGroupRoaming.vue";
import InputForm from "@/components/v2/common/InputForm.vue";
import Popup from "@/components/v2/common/Popup.vue";
import PopupListItem from "@/components/v2/common/PopupListItem.vue";
import Accodian from "@/components/v2/common/Accodian.vue";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu.vue";
import Tab from "@/components/v2/common/Tab.vue";
import TextareaBox from "@/components/TextareaBox.vue";

// S: 레이아웃 설정 (1-1)
const layout = ref({
  header: "sub",
  footer: "",
  floatMenu: "none",
  title: "가입정보",
  wrapClass: "selfcare ver-3",
});

const emit = defineEmits(["setLayout"]);
// E: 레이아웃 설정 (1-1)

// S: JS-P005 : 기본 팝업 쿼리값으로 열고, 닫기
const route = useRoute();
const popupQuery = ref(route.query.popup);
const popupOpen = ref(true);
// E: JS-P005 : 기본 팝업 쿼리값으로 열고, 닫기

// S: JS-T09 - 상단 텍스트 & 정보 리스트
const cardObject_1 = ref([
  {
    title: "등록 정보",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "심 구분", value: "유심" },
      { name: "심 모델", value: "K3620" },
      { name: "휴대폰 기기명", value: "-" },
    ],
  },
]);
// E: JS-T09 - 상단 텍스트 & 정보 리스트

// S: JS-T11 : 유심 모델 변경
const selectedTab = ref(0);
const selectList = ref([
  { selected: true, value: "U2600", name: "U2600" },
  { selected: false, value: "U2610", name: "U2610" },
  { selected: false, value: "U8600", name: "U8600" },
  { selected: false, value: "U8800", name: "U8800" },
  { selected: false, value: "C4620", name: "C4620" },
  { selected: false, value: "C4500", name: "C4500" },
  { selected: false, value: "C4900", name: "C4900" },
]);

const selectBoxOpen1 = ref(false);
const handleUsimModelSel = () => {
  selectBoxOpen1.value = true;
};

const clickSelectBoxUsimModelConfirm = () => {
  console.log("셀렉트박스 확인");
};

const clickSelectListUsimModelItem = (targetData: any) => {
  console.log(targetData);
};
// E: JS-T11 : 유심 모델 변경

// S: JS-T11 : 변경 사유
const selectedTab2 = ref("휴대폰 변경");
const selectList2 = ref([
  { selected: true, value: "휴대폰 변경", name: "휴대폰 변경" },
  { selected: false, value: "휴대폰 분실", name: "휴대폰 분실" },
  { selected: false, value: "유심 불량/파손", name: "유심 불량/파손" },
  { selected: false, value: "유심 분실", name: "유심 분실" },
  { selected: false, value: "직접 입력", name: "직접 입력" },
]);

const selectBoxOpen2 = ref(false);
const handleChangeResonSel = () => {
  selectBoxOpen2.value = true;
};

const clickSelectBoxChangeResonConfirm = () => {
  console.log("셀렉트박스 확인");
};

const clickSelectListChangeResonItem = (targetData: any) => {
  console.log(targetData);
};
// E: JS-T11 : 변경 사유

const handleMemberPhone = (e: Event) => {
  console.log(e);
};

onMounted(() => {
  // 레이아웃 설정 (1-2)
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/sc/page-al-my-05-300.scss" as *;
</style>
