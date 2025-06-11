<template>
  <div class="container selfcare roaming">
    <div class="publishing-guide-v3">
      <div class="content" id="content">
        <div class="section">
          <h1 class="title-h1"><span>Guide Tags</span></h1>
          <ul class="tag-list">
            <li v-for="item in referenceList" :key="item.id">
              <NuxtLink :to="item.linkURL" target="_blank">{{ item.title }}</NuxtLink>
            </li>
          </ul>
          <hr />
          <div class="tabmenu-open-close-btns mgt32">
            <button type="button" class="btn-rounded btn-line" @click="guideTaMenuAllClose('close')">전체 닫힘</button>
            <button type="button" class="btn-rounded primary" @click="guideTaMenuAllClose('open')">전체 펼침</button>
          </div>
          <div class="acc section pdy0 mgt20" :class="[!accBtn1 && 'close']">
            <button class="acc-bnt" ref="accBtn" @click="accBtn1 = !accBtn1">
              <h2 class="title-h2">
                <span>1. Alert</span>
              </h2>
            </button>
            <div class="contents-box">
              <div class="inner-contents-box">
                <p>
                  <button class="btn xsm" @click="alert1 = true">
                    1. 타이틀, 설명 <strong class="point">확인창</strong>
                  </button>
                </p>
                <p>
                  <button class="btn xsm" @click="alert2 = true">
                    2. 타이틀, 설명 <strong class="point">컨펌창</strong>
                  </button>
                </p>
                <p>
                  <button class="btn xsm" @click="alert3 = true">
                    3. 타이틀, 설명, 텍스트상자 <strong class="point">확인창</strong>
                  </button>
                </p>
                <p>
                  <button class="btn xsm" @click="alert4 = true">
                    4. 타이틀, 설명, 텍스트상자 <strong class="point">컨펌창</strong>
                  </button>
                </p>
                <p>
                  <button class="btn xsm" @click="alert5 = true">
                    5. 타이틀, 체크 동의 설명 버튼 <strong class="point">컨펌창</strong>
                  </button>
                </p>

                <!-- 타이틀, 설명 확인창  -->
                <AlertV2
                  v-model="alert1"
                  :textData="{
                    title: '타이틀',
                    description: '설명',
                  }"
                  :confirm="false"
                  @close="handleClose"
                  @proceed="handleProceed"
                />
                <!--// 타이틀, 설명 확인창 -->

                <!-- 타이틀, 설명 컨펌창  -->
                <AlertV2
                  v-model="alert2"
                  :textData="{
                    title: '타이틀',
                    description: '설명',
                  }"
                  :confirm="true"
                  :buttonText="{ cancel: '취소', confirm: '버튼명' }"
                  @close="handleClose"
                  @proceed="handleProceed"
                />
                <!--// 타이틀, 설명 컨펌창 -->

                <!-- 타이틀, 설명, 텍스트상자 확인창  -->
                <AlertV2
                  v-model="alert3"
                  :textData="{
                    title: '타이틀',
                    description: '설명',
                  }"
                  :confirm="false"
                  @close="handleClose"
                  @proceed="handleProceed"
                >
                  <dl class="brand-phone">
                    <div>
                      <dt>서브타이틀</dt>
                      <dd>
                        02-000-0000<br />
                        02-000-0000(유료)
                      </dd>
                    </div>
                  </dl>
                </AlertV2>
                <!--//타이틀, 설명, 텍스트상자 확인창 -->

                <!-- 타이틀, 설명, 텍스트상자 컨펌창  -->
                <AlertV2
                  v-model="alert4"
                  :textData="{
                    title: '타이틀',
                    description: '설명',
                  }"
                  :confirm="true"
                  :buttonText="{ cancel: '취소', confirm: '버튼명' }"
                  @close="handleClose"
                  @proceed="handleProceed"
                >
                  <dl class="brand-phone">
                    <div>
                      <dt>서브타이틀</dt>
                      <dd>
                        02-000-0000<br />
                        02-000-0000(유료)
                      </dd>
                    </div>
                  </dl>
                </AlertV2>

                <!-- 타이틀, 체크 동의 설명 컨펌창  -->
                <AlertV3
                  v-model="alert5"
                  :textData="{
                    title: '타이틀',
                    // description: '설명',
                  }"
                  :confirm="true"
                  :confirm-disabled="!isChecked"
                  :buttonText="{ cancel: '취소', confirm: '버튼명' }"
                  @close="handleClose"
                  @proceed="handleProceed"
                >
                  <div class="inner-section">
                    <div class="check-txt check_st">
                      <input type="checkbox" id="checkbox01_02" v-model="isChecked" name="" />
                      <label for="checkbox01_02">정기 결제도 차단 해제하시겠어요?</label>
                    </div>
                  </div>
                </AlertV3>
                <!--// 타이틀, 체크 동의 설명 컨펌창 -->
                <MDC :value="alert1_1" class="pub-md-wrap" />
              </div>
            </div>
          </div>
          <hr />
          <div class="acc section" :class="[!accBtn2 && 'close']">
            <button class="acc-bnt" ref="accBtn" @click="accBtn2 = !accBtn2">
              <h2 class="title-h2">
                <span>2. Result Message</span>
              </h2>
            </button>
            <div class="contents-box">
              <div class="inner-contents-box">
                <MessageResult :description="'납부 내역이 없습니다'" />
                <MDC :value="result_message_1" class="pub-md-wrap" />
              </div>
            </div>
          </div>
          <hr />
          <div class="acc section" :class="[!accBtn3 && 'close']">
            <button class="acc-bnt" ref="accBtn" @click="accBtn3 = !accBtn3">
              <h2 class="title-h2">
                <span>3. Tabmenu</span>
              </h2>
            </button>
            <div class="contents-box">
              <div class="inner-contents-box">
                <!-- 탭메뉴1 영역 -->
                <div class="section ty02">
                  <Tab
                    :data="{
                      option: { type: 3 },
                      data: [
                        { selected: true, controls: 'tab_panel_01_01', title: '탭메뉴1' },
                        { selected: false, controls: 'tab_panel_01_02', title: '탭메뉴2' },
                        { selected: false, controls: 'tab_panel_01_03', title: '탭메뉴3' },
                        { selected: false, controls: 'tab_panel_01_04', title: '탭메뉴4' },
                      ],
                    }"
                  >
                    <template v-slot:tab_panel_01_01>
                      <h3 class="blind">탭메뉴1</h3>
                      <div class="panel_cnt">
                        <!-- 안쪽 탭메뉴 -->
                        <RectTab :titles="['tab1', 'tab2']">
                          <template #content1>
                            <!-- 탭메뉴내용1 -->
                            <div class="tag-contents-wrap">
                              <div class="tag-header">
                                <div class="scroll-wrap">
                                  <button class="item on" onclick="onTagShoHideHandler(this, '.contents .item')">
                                    IOS
                                  </button>
                                  <button class="item" onclick="onTagShoHideHandler(this, '.contents .item')">
                                    안드로이드
                                  </button>
                                </div>
                              </div>
                              <div class="contents">
                                <div class="table-wrap tag">
                                  <div class="scroll-wrap">
                                    <!-- item-1 -->
                                    <div class="item on">안에 내용은 AL-MS-04-002.vue 참고 바랍니다.</div>
                                    <!-- //item-1 -->
                                    <div class="item">안드로이드 내용</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- //탭메뉴내용1 -->
                          </template>
                          <template #content2> content2 </template>
                        </RectTab>
                        <!-- //안쪽 탭메뉴 -->
                      </div>
                    </template>
                    <template v-slot:tab_panel_01_02>
                      <h3 class="blind">탭메뉴2</h3>
                      <div class="panel_cnt">내용2</div>
                    </template>
                    <template v-slot:tab_panel_01_03>
                      <h3 class="blind">탭메뉴3</h3>
                      <div class="panel_cnt">내용3</div>
                    </template>
                    <template v-slot:tab_panel_01_04>
                      <h3 class="blind">탭메뉴4</h3>
                      <div class="panel_cnt">내용4</div>
                    </template>
                  </Tab>
                </div>

                <!-- //탭메뉴1 영역 -->
                <MDC :value="result_tabmenu_1" class="pub-md-wrap" />
              </div>
            </div>
          </div>
          <hr />
          <div class="acc section" :class="[!accBtn4 && 'close']">
            <button class="acc-bnt" ref="accBtn" @click="accBtn4 = !accBtn4">
              <h2 class="title-h2">
                <span>4. Foundation : Color</span>
              </h2>
            </button>
            <div class="contents-box">
              <div class="inner-contents-box">
                <MDC :value="foundation_color_1" class="pub-md-wrap" />
              </div>
            </div>
          </div>
          <hr />

          <div class="acc section" :class="[!accBtn5 && 'close']">
            <button class="acc-bnt" ref="accBtn" @click="accBtn5 = !accBtn5">
              <h2 class="title-h2">
                <span>5. Pages</span>
              </h2>
            </button>
            <div class="contents-box">
              <div class="inner-contents-box">
                <h2 class="title-h2"><span>5-1. 서브 페이지</span></h2>

                <MDC :value="page_sub_basic_1" class="pub-md-wrap" />

                <h2 class="title-h2"><span>5-2. 완료 페이지</span></h2>

                <h3 class="title-h3">
                  <span>&#8226; 모바일 완료 페이지 미리보기 (※ 개발자 도구 모바일 버전에서 확인 가능)</span>
                </h3>

                <Iframe :src-url="'/guide/sample/guide-complete'" />
                <MDC :value="page_popup_mobile" class="pub-md-wrap" />
              </div>
            </div>
          </div>
          <hr />
          <!--// 타이틀, 설명, 텍스트상자 컨펌창 -->

          <!-- <br /><br />
          <SwiperBnr />
          <h1 class="title-h1"><span>h1.title-h1>span{TITLE01}</span></h1>
          <h2 class="title-h2"><span>h2.title-h2>span{TITLE02}</span></h2>
          <MDC :value="md1_1" class="pub-md-wrap" /> -->
        </div>
        <!-- <div class="section">
          <h1 class="title-h1"><span>로밍 테스트</span></h1>
          <MDC :value="md1_2" class="pub-md-wrap" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tab from "@/components/Tab.vue";
import RectTab from "@/components/v2/common/Tab.vue";
import SwiperBnr from "@/components/SwiperBnr.vue";
import type { LayoutOptions } from "@/types/layout";
import Iframe from "@/pages/guide/sample/components/Iframe.vue";
import AlertV2 from "@/components/v2/common/AlertV2.vue";
import AlertV3 from "@/components/v2/common/AlertV3.vue";
import {
  page_sub_basic_1,
  page_popup_mobile,
  foundation_color_1,
  result_tabmenu_1,
  result_message_1,
  alert1_1,
  md1_1,
  md1_2,
} from "~/pages/guide/docs/md1";
import MessageResult from "@/components/MessageResult.vue";
window.onTagShoHideHandler = htmlUI.tagShoHideHandler;
const accBtn1 = ref(false);
const accBtn2 = ref(false);
const accBtn3 = ref(false);
const accBtn4 = ref(false);
const accBtn5 = ref(false);
const btns = [accBtn1, accBtn2, accBtn3, accBtn4, accBtn5];

const alert1 = ref(false);
const alert2 = ref(false);
const alert3 = ref(false);
const alert4 = ref(false);
const alert5 = ref(false);

const isChecked = ref(false);

const accBtn = ref(null);

const referenceList = ref([
  {
    id: 1,
    title: "Defaut Page",
    linkURL: "/guide/sample/DefaultLayoutSvc",
    desc: "",
  },
  { id: 2, title: "BUTTON", linkURL: "/guide/v2/Button", desc: "" },
  { id: 3, title: "TABLE", linkURL: "/guide/component-guide/Table", desc: "" },
  {
    id: 4,
    title: "Flag & Badge",
    linkURL: "/guide/component-guide/Flag",
    desc: "",
  },
  {
    id: 5,
    title: "Accordion(1)",
    linkURL: "/guide/component-guide/Accordion",
    desc: "",
  },
  { id: 6, title: "Accordion(2)", linkURL: "/guide/v2/Accordion", desc: "" },
  {
    id: 7,
    title: "Tag & Filter",
    linkURL: "/guide/component-guide/TagVue",
    desc: "",
  },
  {
    id: 8,
    title: "Tab(1)",
    linkURL: "/guide/component-guide/Tab",
    desc: "아래 밑줄 형식",
  },
  {
    id: 9,
    title: "Tab(2)",
    linkURL: "/guide/component-guide/Tab",
    desc: "둥근 사각형, 텍스트 형식",
  },
  {
    id: 10,
    title: "Form",
    linkURL: "/guide/component-guide/FormVue",
    desc: "",
  },
]);

if (front.isMobile()) {
  console.log("모바일");
}

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: "",
  floatMenu: "",
  title: "파트너사 소개",
  wrapClass: "selfcare roaming",
});

const handleClose = () => {
  console.log("닫기 버튼 클릭");
};

const handleProceed = () => {
  console.log("확인 버튼 클릭");
};

onMounted(() => {
  emit("setLayout", layout);
  document.addEventListener("click", (e) => {
    const tg = e.target as HTMLElement;
    const closestEl = tg.closest(".guide-code-btn-wrap");
    if (!closestEl) return;

    if (tg.classList.contains("primary")) {
      closestEl.classList.add("open");
    } else {
      closestEl.classList.remove("open");
    }
  });
});

const guideTaMenuAllClose = (status: string) => {
  btns.forEach((btn) => {
    if (status === "close") {
      btn.value = false;
    } else {
      btn.value = true;
    }
  });
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/guide/pub_guide.scss" as *;
</style>
