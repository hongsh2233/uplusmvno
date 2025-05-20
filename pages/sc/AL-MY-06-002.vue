<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-06-001'" />
        <!-- // LNB -->

        <!-- contents -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>
          <!-- 내 정보 메뉴 -->
          <!-- // 내 정보 메뉴 -->

          <div class="content-item">
            <div class="content-inner">
              <div class="cont-head title-main">
                <h3 class="cont-title-main">
                  휴대폰(유심) 분실 등록/해제할<br />
                  휴대폰 번호를 <strong class="txt-primary">선택</strong>하세요
                </h3>
              </div>
              <ul class="bdr-list">
                <li v-for="(data, idx) in phoneDatas" :key="idx">
                  <p v-if="data.agent" class="badge-agent radio">대표</p>

                  <Accodian
                    :option="{ separateButton: true }"
                    :isExpanded="idx === radioSelect"
                    :readonly="data.isInUse === '알닷케어 미제공'"
                  >
                    <template #title>
                      <div class="radio-circle-group">
                        <input
                          :id="'radio-01' + idx"
                          type="radio"
                          class="blind"
                          name="radio_val"
                          :disabled="data.isInUse === '알닷케어 미제공'"
                          :value="idx"
                          v-model="radioSelect"
                        />
                        <label :for="'radio-01' + idx" class="radio-circle">
                          {{ data.number }}
                        </label>
                        <strong
                          class="indicator"
                          :class="
                            data.isInUse !== '분실 등록'
                              ? data.isInUse === '사용중'
                                ? 'txt-green'
                                : 'txt-light-gray'
                              : 'txt-red'
                          "
                        >
                          <template v-if="data.isInUse === '분실 등록'">
                            {{ data.isInUse }}
                          </template>
                          <template v-if="data.isInUse === '알닷케어 미제공'">
                            {{ data.isInUse }}
                          </template>
                        </strong>
                      </div>
                    </template>
                    <template #content>
                      <CardGroup :card-object="data.infoArray">
                        <template #default="{ item }">
                          <p class="txt-skip">{{ item.value }}</p>
                        </template>
                      </CardGroup>
                    </template>
                  </Accodian>
                </li>
              </ul>
            </div>
          </div>

          <div class="text-list-wrap">
            <!-- 분실 등록 시 안내 문구 -->
            <ul class="text-list bull" v-if="buttonInfo.btnText !== '분실 등록 해제하기'">
              <li>
                휴대폰 분실신고는 휴대폰(기기) + 유심(통화/문자 사용)이 동시에 분실 접수가 됩니다.
                단, 휴대폰 기기 등록이 안 되어 있는 경우, 유심 (통화/문자 사용)만 이용정지 됩니다.
              </li>
              <li>
                선불요금제는 휴대폰(기기) 분실 신고만 가능하며, 유심(통화/문자 사용)은 정지 불가
                합니다. 단, 휴대폰 기기 등록을 사전에 완료하셔야 합니다.
              </li>
              <li>휴대폰 분실등록은 회선별로 월 2회까지 가능합니다.</li>
              <li>
                알닷케어 미제공 파트너사의 회선은 해당 고객센터를 통해 분실등록/해제 신청을 할 수
                있습니다.
              </li>
            </ul>

            <!-- 분실 등록 해제 시 안내 문구 -->
            <ul class="text-list bull" v-else>
              <li>
                휴대폰 분실신고는 휴대폰(기기) + 유심(통화/문자 사용)이 동시에 분실 접수가 됩니다.
                단, 휴대폰 기기 등록이 안 되어 있는 경우, 유심 (통화/문자 사용)만 이용정지 됩니다.
              </li>
              <li>
                선불요금제는 휴대폰(기기) 분실 신고만 가능하며, 유심(통화/문자 사용)은 정지 불가
                합니다. 단, 휴대폰 기기 등록을 사전에 완료하셔야 합니다.
              </li>
              <li>휴대폰 분실등록은 회선별로 월 2회까지 가능합니다.</li>
              <li>
                알닷케어 미제공 파트너사의 회선은 해당 고객센터를 통해 분실등록/해제 신청을 할 수
                있습니다.
              </li>
            </ul>
          </div>

          <BottomFixMenu
            :btnText="buttonInfo.btnText"
            :disabled="buttonInfo.activate"
            @click="nextPage"
          />
        </div>

        <Popup
          v-if="!front.isMobile()"
          :title="buttonInfo.pcPopTitle"
          :isOpen="popState.lost"
          :isPopFooter="false"
          @update:isOpen="popState.lost = $event"
          class="pcpopup"
        >
          <ALMY06003 v-if="pageStep === 0" @nextStep="nextView" />
          <ALMY060031 v-if="pageStep === 1" @nextStep="nextView" />
          <ALMY060032 v-if="pageStep === 2" @nextStep="nextView" />
          <ALMY060021 v-if="pageStep === 3" @nextStep="nextView" />
        </Popup>

        <!-- 휴대폰 분실등록 초과 신청  -->
        <AlertV2
          v-model="alertState.fail1"
          :textData="{
            title: '휴대폰 분실 등록은 <br/>월 2회까지 신청할 수 있어요',
            description: '초과 신청 시 고객센터로 <br/>연락해 주세요',
          }"
          :confirm="front.isMobile() ? true : false"
          :buttonText="{ cancel: front.isMobile() ? '닫기' : '확인', confirm: '고객센터 연결' }"
          @close="handleClose"
          @proceed="handleProceed"
        >
          <dl class="brand-phone">
            <div>
              <dt>에스원안심모바일</dt>
              <dd>
                114(자사 휴대폰 무료)<br />
                02-2275-0068(유료)
              </dd>
            </div>
          </dl>
        </AlertV2>
        <!--// 휴대폰 분실등록 초과 신청 -->

        <!-- 24.11.19 v0.97 반영 - 비제휴 분실등록 초과신청 -->
        <AlertV2
          v-model="alertState.fail3"
          :textData="{
            title: '휴대폰 분실 등록은 <br/>월 2회까지 신청할 수 있어요',
          }"
          :confirm="false"
          @close="handleClose"
          @proceed="handleProceed"
        >
        </AlertV2>
        <!-- // 24.11.19 v0.97 반영 - 비제휴 분실등록 초과신청 -->

        <!-- 등록되지 않은 휴대폰 분실 등록 신청  -->
        <AlertV2
          v-model="alertState.fail2"
          :textData="{
            title: '휴대폰 정보가 등록된 경우에만 <br/>휴대폰 분실 등록 신청을 할 수 있어요',
          }"
          @close="handleClose"
        />
        <!--// 등록되지 않은 휴대폰 분실 등록 신청 -->

        <!-- 휴대폰 미등록한 정회원이 일시정지 버튼 선택 시 -->
        <AlertV2
          v-model="alertState.fail4"
          :textData="{
            title: '휴대폰 정보가 등록된 경우에만 휴대폰 분실 등록 신청을 할 수 있어요!',
            description:
              '현재 분실한 상태여서 휴대폰 등록이 불가능하다면 일시정지만 우선 신청하세요',
          }"
          :confirm="false"
          :buttonText="{ cancel: '일시정지 신청' }"
          @close="handleClose"
          @proceed="handleProceed"
        >
        </AlertV2>
        <!--// 휴대폰 미등록한 정회원이 일시정지 버튼 선택 시-->

        <!-- 휴대폰 정보를 미등록한 경우 -->
        <AlertV2
          v-model="alertState.fail5"
          :textData="{
            title:
              '휴대폰 정보를 미등록한 경우에는<br />유심정지(분실정지)만<br />신청할 수 있어요!',
          }"
          :confirm="false"
          @close="handleClose"
          @proceed="handleProceed"
        >
        </AlertV2>

        <!-- 휴대폰 정보를 등록한 경우 -->
        <AlertV2
          v-model="alertState.fail6"
          :textData="{
            title: '휴대폰 정보가 등록된 경우에만<br />분실 등록 신청을 할 수 있어요!',
          }"
          :confirm="false"
          @close="handleClose"
          @proceed="handleProceed"
        >
        </AlertV2>

        <!-- 선불폰은 알닷케어에서 분실 등록 시 이용정지 신청 -->
        <AlertV2
          v-model="alertState.fail7"
          :textData="{
            title: '선불폰은 알닷케어에서 분실 등록 시<br />이용정지 신청을 할 수 없어요.',
            description:
              '이용정지는 가입하신 파트너사를 통해<br /> 별도 신청이 필요합니다.<br /><br />분실 신고를 계속 진행하시겠어요?',
          }"
          :confirm="true"
          :buttonText="{ cancel: '취소', confirm: '확인' }"
          @close="handleClose"
          @proceed="handleProceed"
        />

        <!-- 팝업 디자인 검수용입니다.-->
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              style="
                position: fixed;
                z-index: 1;
                bottom: 100px;
                left: 10px;
                font-size: 12px;
                background-color: rgb(255 93 0 / 23%);
                color: #4f4f4f;
              "
            >
              팝업 디자인<br />
              검수용입니다
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in buttonName"
              :key="index"
              :value="index"
              @click="handleAlert(item.alertName, true)"
            >
              <v-list-item-title style="font-size: 13px">{{ item.txt }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <!--// 팝업 디자인 검수용입니다.-->
        <!-- // contents -->
      </div>
    </div>
  </div>
</template>

<script setup>
import PcLnb from "@/components/v2/common/PcLnb";
import Accodian from "@/components/v2/common/Accodian";
import CardGroup from "@/components/v2/common/CardGroup";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
import Popup from "@/components/v2/common/Popup";
import AlertV2 from "@/components/v2/common/AlertV2";

import ALMY06003 from "@/components/v2/pages/lost-device/ALMY06003";
import ALMY060031 from "@/components/v2/pages/lost-device/ALMY060031";
import ALMY060032 from "@/components/v2/pages/lost-device/ALMY060032";
import ALMY060021 from "@/components/v2/pages/lost-device/ALMY060021";

import { useRouter } from "vue-router";

// 헤더 정보
const layout = ref({
  header: "sub",
  footer: "",
  floatMenu: "none",
  title: "휴대폰(유심) 분실 등록/해제",
});

// HOOK
const router = useRouter();
const emit = defineEmits(["setLayout"]);

const radioSelect = ref();

const phoneDatas = [
  {
    agent: true,
    number: "010-12**-34**",
    isInUse: "사용중",
    infoArray: [
      {
        list: [
          { name: "제조사", value: "애플코리아(유)" },
          { name: "모델명", value: "ULK-A2890-256" },
          { name: "일련번호", value: "****************8043" },
          { name: "유심(개인정보) 카드 번호", value: "*******4601" },
        ],
      },
    ],
  },
  {
    agent: false,
    number: "010-12**-12**",
    isInUse: "분실 등록",
    infoArray: [
      {
        list: [
          { name: "제조사", value: "애플코리아(유)" },
          { name: "모델명", value: "ULK-A2890-256" },
          { name: "일련번호", value: "****************8043" },
          { name: "유심(개인정보) 카드 번호", value: "*******4601" },
          { name: "분실 등록일", value: "2024.01.01" },
          { name: "분실 구분", value: "분실" },
          { name: "분실 상품", value: "휴대폰+USIM" },
          { name: "일시 정지", value: "발신/수신 모두 정지" },
        ],
      },
    ],
  },
  {
    agent: false,
    number: "010-34**-34**",
    isInUse: "사용중",
    infoArray: [
      {
        list: [
          { name: "제조사", value: "미등록" },
          { name: "모델명", value: "미등록" },
          { name: "일련번호", value: "미등록" },
          { name: "유심(개인정보) 카드 번호", value: "*******4601" },
        ],
      },
    ],
  },
  {
    agent: false,
    number: "010-34**-34**",
    isInUse: "알닷케어 미제공",
    infoArray: [],
  },
];

const buttonInfo = computed(() => {
  let btnText = "분실 등록하기";
  let link = "/sc/AL-MY-06-003";
  let activate = true;
  let pcPopTitle = "휴대폰(유심) 분실 등록"; //PC 팝업 상단 타이틀
  let viewMode = "팝업";

  if (radioSelect.value !== undefined) {
    const selectedData = phoneDatas[radioSelect.value].isInUse;
    activate = false;

    if (selectedData === "사용중") {
      btnText = "분실 등록하기";
      link = "/sc/AL-MY-06-003";
      pageStep.value = 0;
      pcPopTitle = "휴대폰(유심) 분실 등록";
      viewMode = "팝업";
    } else if (selectedData === "분실 등록") {
      btnText = "분실 등록 해제하기";
      link = "/sc/AL-MY-06-003-2";
      pageStep.value = 2;
      pcPopTitle = "휴대폰(유심) 분실 해제";
      viewMode = "팝업";
    } else if (selectedData === "알닷케어 미제공") {
      btnText = "일시정지 신청하기";
      pcPopTitle = "일시정지 신청하기";
      link = "/sc/AL-MY-06-004";
      viewMode = "페이지";
    }
  }
  return { btnText, activate, link, pcPopTitle, viewMode };
});

//팝업 목업
const popState = ref({
  lost: false,
});
const handlePopup = (popName, val) => {
  popState.value[popName] = val;
};
const clickConfirm = () => {
  console.log("확인");
};

// alert
const alertState = ref({
  fail1: false, // 휴대폰 분실등록 초과 신청
  fail2: false, // 등록되지 않은 휴대폰 분실 등록 신청
  fail3: false, // [비제휴] 휴대폰 분실등록 초과 신청
  fail4: false, // 휴대폰 미등록한 정회원이 일시정지 버튼 선택 시
  fail5: false, // 휴대폰 정보를 미등록한 경우에는 유심정지(분실정지)만 신청할 수 있어요!
  fail6: false, // 휴대폰 정보가 등록된 경우에만 분실 등록 신청을 할 수 있어요!
  fail7: false, // 선불폰은 알닷케어에서 분실 등록 시 이용정지 신청을 할 수 없어요.
});

//alert 화면 검수용 목업
const buttonName = [
  { txt: "휴대폰 분실등록 초과 신청", alertName: "fail1" },
  // {txt: '등록되지 않은 휴대폰 분실 등록 신청', alertName: 'fail2'},
  // {txt: '[비제휴] 휴대폰 분실등록 초과 신청', alertName: 'fail3'},
  { txt: "휴대폰 미등록한 정회원이 일시정지 버튼 선택 시", alertName: "fail4" },
  {
    txt: "휴대폰 정보를 미등록한 경우에는 유심정지(분실정지)만 신청할 수 있어요!",
    alertName: "fail5",
  },
  { txt: "휴대폰 정보가 등록된 경우에만 분실 등록 신청을 할 수 있어요!", alertName: "fail6" },
  { txt: "선불폰은 알닷케어에서 분실 등록 시 이용정지 신청을 할 수 없어요.", alertName: "fail7" },
];

//얼럿창 open/close
const handleAlert = (dialogName, value) => {
  alertState.value[dialogName] = value;
};

const handleClose = () => {
  console.log("닫기 버튼 클릭");
};

const handleProceed = () => {
  console.log("확인 버튼 클릭");
};

//화면 검수용 PC 팝업 화면 전환
const nextPage = () => {
  console.log(buttonInfo.value);
  if (front.isMobile()) {
    router.push(buttonInfo.value.link);
  } else {
    if (buttonInfo.value.viewMode === "페이지") {
      router.push(buttonInfo.value.link);
    } else {
      handlePopup("lost", true);
    }
  }
};

//화면 검수용 임시 라우터 처리
const pageStep = ref(0);
const nextView = (page) => {
  pageStep.value = page;
  if (page === 0 || page === 2) {
    handlePopup("lost", false);
  }
};

onMounted(() => {
  emit("setLayout", layout);
});
</script>
