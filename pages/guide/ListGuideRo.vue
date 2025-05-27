<template>
  <div class="container roaming">
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
          <div class="acc section" :class="[!accBtn1 && 'close']">
            <h2 class="title-h2">
              <button class="acc-bnt" ref="accBtn" @click="accBtn1 = !accBtn1"><span>1. Alert</span></button>
            </h2>
            <div class="contents-box">
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

              <MDC :value="alert1_1" class="pub-md-wrap" />
            </div>
          </div>
          <hr />
          <div class="acc section" :class="[!accBtn2 && 'close']">
            <h2 class="title-h2">
              <button class="acc-bnt" ref="accBtn" @click="accBtn2 = !accBtn2"><span>2. Result Message</span></button>
            </h2>
            <div class="contents-box">
              <div class="result-message-box no-data">
                <p class="message-icon">
                  <i class="img-payment"></i>
                </p>
                <p class="message-txt">납부 내역이 없습니다</p>
              </div>
              <MDC :value="result_message_1" class="pub-md-wrap" />
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
import SwiperBnr from "@/components/SwiperBnr.vue";
import type { LayoutOptions } from "@/types/layout";
import AlertV2 from "@/components/v2/common/AlertV2.vue";
import { result_message_1, alert1_1, md1_1, md1_2 } from "~/pages/guide/docs/md1";
const accBtn1 = ref(false);
const accBtn2 = ref(false);

const alert1 = ref(false);
const alert2 = ref(false);
const alert3 = ref(false);
const alert4 = ref(false);

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
});

const handleClose = () => {
  console.log("닫기 버튼 클릭");
};

const handleProceed = () => {
  console.log("확인 버튼 클릭");
};

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/guide/pub_guide.scss" as *;
</style>
