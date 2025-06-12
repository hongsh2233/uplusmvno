<template>
  <!-- container -->
  <div class="container AL-MY-05-300">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-05-001'" />
        <!-- // LNB -->

        <!-- crp_r -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>

          <!-- content-item01 -->
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
          <!-- // content-item01 -->

          <!-- content-item02 -->
          <div class="content-item">
            <div class="content-inner">
              <Tab :titles="['유심으로 변경', 'eSIM으로 변경']" :active-tab-index="1">
                <!-- 유심으로 변경 -->
                <template #content1>
                  {{ detectTab(0) }}
                </template>
                <!-- // 유심으로 변경 -->

                <!-- eSIM으로 변경 -->
                <template #content2>
                  {{ detectTab(1) }}
                  <div class="cont-head title-main">
                    <h3 class="cont-title-main">
                      변경할 <b class="txt-primary">eSIM</b> 정보를<br />
                      등록해 주세요
                    </h3>
                  </div>

                  <div class="form-box">
                    <div class="title-area">
                      <strong class="title">eSIM 등록 휴대폰 선택</strong>
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
                  </div>

                  <!-- 휴대폰 등록 및 변경 탭 -->
                  <div class="form-box" v-if="radioIdx1 === 0">
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">기기 종류</strong>
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

                    <!-- android form-box -->
                    <div class="form-box" v-if="radioIdx2 === 1">
                      <!-- android form-box -->
                      <div class="form-box">
                        <div class="title-area">
                          <strong class="title">용량</strong>
                        </div>
                        <InputForm
                          class="combobox-bottom search"
                          :option="{ placeholder: '용량을  선택해 주세요', readonly: false, search: true }"
                        />
                      </div>
                      <!-- // android form-box -->

                      <!-- android form-box -->
                      <div class="form-box">
                        <div class="title-area">
                          <strong class="title">모델명</strong>
                          <button class="btn-rounded btn-xs" @click="handlePopup('serialNumber', true)">
                            모델명 확인방법
                          </button>
                        </div>
                        <InputForm
                          class="combobox-bottom search"
                          :option="{ placeholder: '모델명을  선택해 주세요', readonly: false, search: true }"
                        />
                      </div>
                      <!-- // android form-box -->

                      <!-- android form-box -->
                      <div class="form-box">
                        <div class="title-area">
                          <strong class="title">일련번호</strong>
                          <button class="btn-rounded btn-xs" @click="handlePopup('serialNumber', true)">
                            일련번호 확인방법
                          </button>
                        </div>
                        <InputForm
                          class="combobox-bottom"
                          :option="{ placeholder: '영문과 숫자만 입력해 주세요', readonly: false }"
                        />
                      </div>
                      <!-- // android form-box -->
                    </div>
                    <!-- // android form-box -->

                    <!-- ios form-box -->
                    <div class="form-box" v-else>
                      <!-- ios form-box -->
                      <div class="form-box">
                        <div class="title-area">
                          <strong class="title">용량</strong>
                        </div>
                        <InputForm
                          class="combobox-bottom search"
                          :option="{ placeholder: '용량을  선택해 주세요', readonly: false, search: true }"
                        />
                      </div>
                      <!-- // ios form-box -->

                      <!-- ios form-box -->
                      <div class="form-box">
                        <div class="title-area">
                          <strong class="title">모델명</strong>
                          <button class="btn-rounded btn-xs" @click="handlePopup('serialNumber', true)">
                            모델명 확인방법
                          </button>
                        </div>
                        <InputForm
                          class="combobox-bottom search"
                          :option="{ placeholder: '모델명을  선택해 주세요', readonly: false, search: true }"
                        />
                      </div>
                      <!-- // ios form-box -->

                      <!-- ios form-box -->
                      <div class="form-box">
                        <div class="title-area">
                          <strong class="title">일련번호</strong>
                          <button class="btn-rounded btn-xs" @click="handlePopup('serialNumber', true)">
                            일련번호 확인방법
                          </button>
                        </div>
                        <InputForm
                          class="combobox-bottom"
                          :option="{ placeholder: '영문과 숫자만 입력해 주세요', readonly: false }"
                        />
                      </div>
                      <!-- // ios form-box -->
                    </div>
                    <!-- // ios form-box -->

                    <!-- 모델명/일련번호 확인 방법 -->
                    <Popup
                      :title="popupTitle"
                      :isOpen="popState.serialNumber"
                      :popType="'full'"
                      :isPopFooter="false"
                      @update:isOpen="popState.serialNumber = $event"
                      @confirm="clickConfirm"
                    >
                      <!-- ios/android -->
                      <div class="btn-flex">
                        <div v-for="(item, idx) in radioData3" :key="item.id" class="radio_item lined">
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
                      <!-- ios/android -->
                      <div class="pop-guide-overview">
                        <div v-if="radioIdx2 === 1">
                          <span class="guide-image-wrap">
                            <img src="/images/v2/content/img_num_info_android.png" alt="고유번호 복사 안내 이미지" />
                          </span>
                          <dl class="pop-guide-details">
                            <div>
                              <dt>모델명 확인 방법</dt>
                              <dd>설정 → 휴대전화 정보 → 규제정보 → 모델명 확인</dd>
                            </div>
                            <div>
                              <dt>일련번호 확인 방법</dt>
                              <dd>설정 → 휴대전화 정보 → 규제정보 → 일련번호 확인</dd>
                            </div>
                          </dl>
                        </div>

                        <div v-else>
                          <span class="guide-image-wrap">
                            <img src="/images/v2/content/img_num_info_ios.png" alt="고유번호 복사 안내 이미지" />
                          </span>
                          <dl class="pop-guide-details">
                            <div>
                              <dt>모델명 확인 방법</dt>
                              <dd>휴대폰 설정 → 일반 → 정보 → 모델명 확인</dd>
                            </div>
                            <div>
                              <dt>일련번호 확인 방법</dt>
                              <dd>휴대폰 설정 → 일반 → 정보 → 일련번호 확인</dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </Popup>
                    <!-- // 모델명/일련번호 확인 방법 -->
                  </div>
                  <!-- // 휴대폰 등록 및 변경 탭 -->

                  <!-- 기존 휴대폰 사용 탭 -->
                  <div class="form-box" v-if="radioIdx1 === 1">
                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">EID</strong>
                      </div>
                      <InputForm
                        class="combobox-bottom text view"
                        :option="{ value: '11129213192120938029148893279811', readonly: true }"
                      />
                    </div>

                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">IMEI1</strong>
                      </div>
                      <InputForm
                        class="combobox-bottom text view"
                        :option="{ value: '1298371237817264', readonly: true }"
                      />
                    </div>

                    <div class="form-box">
                      <div class="title-area">
                        <strong class="title">IMEI2</strong>
                      </div>
                      <InputForm
                        class="combobox-bottom text view"
                        :option="{ value: '1298371237817264', readonly: true }"
                      />
                    </div>
                  </div>
                  <!-- // 기존 휴대폰 사용 탭 -->
                </template>
                <!-- // eSIM으로 변경 -->
              </Tab>
            </div>
          </div>
          <!-- // content-item02 -->

          <!-- content-item03 -->
          <div class="content-item" v-if="activeTab === 1 && radioIdx1 === 0">
            <div class="content-inner">
              <Tab :titles="['캡쳐 이미지 등록', '직접 입력']">
                <template #content1>
                  <div class="gray-notice-box">
                    <div class="title-area">
                      <strong class="title">정보(EID, IMEI1, IMEI2) 확인 방법</strong>
                    </div>

                    <p class="txt">
                      통화 키 패드에서 [<span>*#06#</span>] 입력하여 표시되는 화면을 캡쳐하여<br />
                      이미지를 올려주세요.
                    </p>

                    <div class="btn-area">
                      <button type="button" class="btn-rounded btn fz16-pc">이미지 올리기</button>
                    </div>

                    <div class="btn-area">
                      <button type="button" class="btn-rounded btn fz16-pc">이미지 다시 올리기</button>
                    </div>
                  </div>

                  <div class="form-box">
                    <div class="title-area">
                      <strong class="title">EID</strong>
                    </div>
                    <InputForm
                      class="combobox-bottom text view"
                      :option="{ value: '11129213192120938029148893279811', readonly: true }"
                    />
                  </div>

                  <div class="form-box">
                    <div class="title-area">
                      <strong class="title">IMEI1</strong>
                    </div>
                    <InputForm
                      class="combobox-bottom text view"
                      :option="{ value: '1298371237817264', readonly: true }"
                    />
                  </div>

                  <div class="form-box">
                    <div class="title-area">
                      <strong class="title">IMEI2</strong>
                    </div>
                    <InputForm
                      class="combobox-bottom text view"
                      :option="{ value: '1298371237817264', readonly: true }"
                    />
                  </div>
                </template>

                <template #content2>
                  <div class="form-box">
                    <div class="title-area">
                      <strong class="title">EID</strong>
                    </div>
                    <InputForm
                      class="combobox-bottom"
                      :option="{ placeholder: '앞에서부터 숫자 32자리를 입력해 주세요', readonly: false }"
                    />
                  </div>

                  <div class="form-box">
                    <div class="title-area">
                      <strong class="title">IMEI1</strong>
                    </div>
                    <InputForm
                      class="combobox-bottom"
                      :option="{ placeholder: '앞에서부터 숫자 15자리를 입력해 주세요', readonly: false }"
                    />
                  </div>

                  <div class="form-box">
                    <div class="title-area">
                      <strong class="title">IMEI2</strong>
                    </div>
                    <InputForm
                      class="combobox-bottom"
                      :option="{ placeholder: '앞에서부터 숫자 15자리를 입력해 주세요', readonly: false }"
                    />
                  </div>
                </template>
              </Tab>
            </div>
          </div>

          <div v-else></div>
          <!-- // content-item03 -->

          <!-- 변경사항 -->
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
                <p class="notice-txt fz-sm">처리 결과를 SMS로 안내해 드려요</p>
              </div>
            </div>
          </div>
          <!-- // 변경사항 -->

          <!-- button -->
          <div class="reverse">
            <BottomFixMenu :btnText="'인증하기'" :disabled="true" />
          </div>
          <!-- // button -->

          <!-- 꼭 알아두세요 -->
          <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
            <template #content>
              <ul class="text-list bull">
                <li>
                  변경 처리 완료 후 알림톡(또는 문자)을 받으신 후, 새 유심을 휴대폰에 장착하여 전원을 1~3회 껐다 켜시고
                  서비스 정상 여부(음성, 문자, 데이터)를 확인 바랍니다.
                </li>
                <li>
                  eSIM 서비스는 eSIM을 지원하는 휴대폰에 한 해 이용이 가능하며, 당사 홈페이지에 기재되어 있지 않은
                  모델의 경우 제조사를 통해 추가 확인 바랍니다.
                  <p>
                    <NuxtLink :to="'#'" class="txt-link orange">eSIM 이용 가능 휴대폰 보기</NuxtLink>
                  </p>
                </li>
                <li>
                  eSIM 다운로드 비용이 발생할 수 있으며 다운로드 시마다 비용이 발생하며 요금명세서에 포함되어
                  청구됩니다.
                </li>
                <li>
                  eSIM 사용 중 다른 휴대폰으로 변경 시 변경한 휴대폰에서 QR코드 스캔을 통해 다운로드가 필요하며 추가
                  비용이 발생합니다.
                </li>
                <li>eSIM 다운로드 시 휴대폰은 인터넷에 연결된 상태에서 진행해야 합니다.</li>
              </ul>
            </template>
          </Accodian>
          <!-- //꼭 알아두세요  -->
        </div>
        <!-- // crp_r -->
      </div>
    </div>
    <!-- // contents -->
  </div>
  <!-- // container -->

  <!-- P007 : eSIM 변경 사유 선택 popup -->
  <Popup
    title="eSIM 변경 사유 선택"
    :isOpen="selectBoxOpen2"
    @update:isOpen="selectBoxOpen2 = $event"
    @confirm="clickSelectBoxChangeResonConfirm"
  >
    <PopupListItem v-model="selectedTab2" :ListItemData="selectList2" @select="clickSelectListChangeResonItem" />
  </Popup>
  <!-- //P007 : eSIM 변경 사유 선택 popup -->

  <!-- eSIM 변경 확인 사항 팝업  -->
  <Popup
    title="eSIM 변경 확인 사항"
    :isOpen="popupQuery === '1' && popupOpen"
    @update:isOpen="popupOpen = false"
    popType="full no-title"
    :confirmText="'확인했어요'"
  >
    <ALMY05301P01 />
  </Popup>
  <!-- // eSIM 변경 확인 사항 팝업 -->

  <!-- 유심에서 eSIM 변경 확인 사항 팝업  -->
  <Popup
    title="유심에서 eSIM 변경 확인 사항"
    :isOpen="popupQuery === '2' && popupOpen"
    @update:isOpen="popupOpen = false"
    popType="full no-title"
    :confirmText="'확인했어요'"
  >
    <ALMY05301P02 />
  </Popup>
  <!-- // 유심에서 eSIM 변경 확인 사항 팝업 -->

  <!-- 변경 완료01 팝업 -->
  <Popup
    title="변경 완료"
    :isOpen="popupQuery === '3' && popupOpen"
    @update:isOpen="popupOpen = false"
    class="pcpopup"
    :isPopFooter="false"
  >
    <ALMY05301P03 />
  </Popup>
  <!-- // 변경 완료01 팝업 -->

  <!-- 변경 완료02 팝업 -->
  <Popup
    title="변경 완료"
    :isOpen="popupQuery === '4' && popupOpen"
    @update:isOpen="popupOpen = false"
    class="pcpopup"
    :isPopFooter="false"
  >
    <ALMY05301P04 />
  </Popup>
  <!-- // 변경 완료02 팝업 -->

  <!-- eSIM 활성화 가이드 팝업  -->
  <Popup
    title="eSIM 활성화 가이드"
    :isOpen="popupQuery === '5' && popupOpen"
    @update:isOpen="popupOpen = false"
    popType="full no-title"
  >
    <ALMY05301P05 />
  </Popup>
  <!-- // eSIM 활성화 가이드 팝업 -->
</template>

<script setup lang="ts">
import PcLnb from "@/components/v2/common/PcLnb.vue";
import CardGroup from "@/components/v2/common/CardGroupRoaming.vue";

import Tab from "@/components/v2/common/Tab.vue";
import InputForm from "@/components/v2/common/InputForm.vue";
import TextareaBox from "@/components/TextareaBox.vue";
import PopupListItem from "@/components/v2/common/PopupListItem.vue";
import Popup from "@/components/v2/common/Popup.vue";
import ALMY05301P01 from "@/components/popup/AL-MY-05-301-P01.vue";
import ALMY05301P02 from "@/components/popup/AL-MY-05-301-P02.vue";
import ALMY05301P03 from "@/components/popup/AL-MY-05-301-P03.vue";
import ALMY05301P04 from "@/components/popup/AL-MY-05-301-P04.vue";
import ALMY05301P05 from "@/components/popup/AL-MY-05-301-P05.vue";

import Accodian from "@/components/v2/common/Accodian.vue";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu.vue";

import { ref, computed, nextTick } from "vue";

// S: 레이아웃 설정 (1-1)
const layout = ref({
  header: "sub",
  footer: "",
  floatMenu: "none",
  title: "유심/이심 변경",
  wrapClass: "selfcare roaming ver-3",
});

const emit = defineEmits(["setLayout"]);
// E: 레이아웃 설정 (1-1)

const isMobile = ref(front.isMobile());

// content-item01
const cardObject_1 = ref([
  {
    title: "등록 정보",
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "심 구분", value: "eSIM" },
      { name: "심 모델", value: "C9100" },
      { name: "휴대폰 기기명", value: "iPhone 16" },
    ],
  },
]);
// content-item01

// content-item02
const radioData1 = ref([
  { id: "radio01_01", value: "휴대폰 등록 및 변경", text: "휴대폰 등록 및 변경", checked: false },
  { id: "radio01_02", value: "기존 휴대폰 사용", text: "기존 휴대폰 사용", checked: false },
]);

const radioData2 = ref([
  { id: "radio02_01", value: "iOS", text: "iOS", checked: true },
  { id: "radio02_02", value: "안드로이드", text: "안드로이드", checked: false },
]);

//팝업 - 모델명 일련번호 확인, 모델명 선택
const popupTitle = computed(() => {
  return isMobile.value ? "모델명/일련번호 확인 방법이예요" : "모델명/일련번호 확인 방법";
});

interface PopupState {
  serialNumber: boolean;
  [key: string]: boolean; // 동적 속성 허용
}

const popState: Ref<PopupState> = ref({
  serialNumber: false,
});

const handlePopup = (popName: keyof PopupState, val: boolean): void => {
  popState.value[popName] = val;
};

const clickConfirm = () => {
  console.log("확인");
};

//라디오 목업
const radioData3 = ref([
  { id: "radio03_01", value: "iOS", text: "iOS", checked: true },
  { id: "radio03_02", value: "안드로이드", text: "안드로이드", checked: false },
]);
// content-item02

const activeTab = ref();
const radioIdx1 = ref();
const radioIdx2 = ref();
const radioIdx3 = ref();

// 탭 감지 함수 (템플릿에서 호출되어 현재 활성 탭 감지)
const detectTab = (tabIndex: number) => {
  nextTick(() => {
    if (activeTab.value !== tabIndex) {
      console.log("탭 변경 감지:", tabIndex);
      activeTab.value = tabIndex;
      if (tabIndex !== 1) {
        radioIdx1.value = -1;
      }
    }
  });
  return "";
};

const popupOpen = ref(true);
const route = useRoute();
const popupQuery = ref(route.query.popup);

// S: JS-T11 : 변경 사유
const selectedTab2 = ref("휴대폰 변경");
const selectList2 = ref([
  { selected: true, value: "휴대폰 변경", name: "휴대폰 변경" },
  { selected: false, value: "보안", name: "보안" },
  { selected: false, value: "듀얼 번호 사용", name: "듀얼 번호 사용" },
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

<style lang="scss">
@use "@/assets/scss/pages/sc/page-al-my-05-300.scss" as *;
</style>
