<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-06-004'" />
        <!-- // LNB -->

        <!-- contents -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>
          <!-- 내 정보 메뉴 -->
          <!-- // 내 정보 메뉴 -->
          <div class="content-item">
            <div class="content-inner">
              <div class="cont-head">
                <h3 class="icon-txt bell">일시정지 신청/해제 안내</h3>
              </div>
              <ul class="text-list bull text-list-content">
                <!-- 24.11.21 v0.97 문구 변경-->
                <!-- 24.12.12 문구 변경 & 링크 추가-->
                <!-- 24.12.18 v0.99 문구 변경-->
                <!-- 24.12.24 v0.99 문구 변경-->
                <li>일시정지는 첫 신청일부터 1년 동안 총 2회, 180일까지 신청할 수 있어요.</li>
                <li>
                  단, 정당한 사유가 있을 경우, 각 파트너사 고객센터를 통해서 이용정지를 추가로
                  신청하실 수 있습니다.
                </li>
                <li>
                  요금이 연체된 경우, 직접 일시정지를 해제할 수 없으니 각 파트너사 고객센터로
                  문의하세요.
                </li>
                <li>
                  알닷케어 미제공 파트너사의 회선은 해당 고객센터를 통해 일시정지/해제 신청을 할 수
                  있습니다.
                </li>
              </ul>
            </div>
          </div>

          <div class="content-item">
            <div class="content-inner">
              <ul class="bdr-list">
                <li v-for="(data, idx) in phoneDatas" :key="idx">
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
                          :value="idx"
                          :disabled="data.isInUse === '알닷케어 미제공'"
                          v-model="radioSelect"
                        />
                        <label :for="'radio-01' + idx" class="radio-circle">
                          {{ data.number }}
                        </label>
                        <b
                          class="indicator"
                          v-if="data.isInUse !== '사용중'"
                          :class="
                            data.isInUse === '사용중'
                              ? 'txt-green'
                              : data.isInUse === '일시정지'
                              ? 'txt-red'
                              : data.isInUse !== '일시정지 예약'
                              ? 'txt-light-gray'
                              : 'txt-blue'
                          "
                        >
                          {{ data.isInUse }}
                        </b>
                      </div>
                    </template>
                    <template #content>
                      <CardGroup :card-object="data.infoArray">
                        <template #default="{ item }">
                          <p>{{ item.value }}</p>
                        </template>
                      </CardGroup>
                    </template>
                  </Accodian>
                </li>
              </ul>
            </div>
          </div>

          <!-- 분실등록이 일시정지보다 선행된 상태 추가 -->
          <div class="content-item">
            <div class="content-inner">
              <p class="center">이미 분실등록으로 인해 정지되었습니다.</p>
            </div>
          </div>

          <BottomFixMenu
            :btnText="buttonInfo.btnText"
            :disabled="buttonInfo.activate"
            @click="nextPage"
          />

          <!-- 이동 링크 목록 -->
          <ShortcutMenu :links="linksArray" @openPopup="handleAlert" />
          <!--// 이동 링크 목록 -->

          <!-- 24.12.12 꼭 알아두세요 수정 -->
          <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
            <template #content>
              <!-- <p class="text-list-tit">모바일 일시정지 신청 및 변경</p> -->
              <ul class="text-list bull">
                <li>일시정지는 1년 2회이며 이용 기간은 총 180일까지 신청할 수 있어요.</li>
                <li>
                  일시정지를 신청하면 최초 30일 동안은 음성통화 수신과 음성사서함만 이용하실 수
                  있어요.
                </li>
                <li>일시정지 서비스를 이용하면 부가세 포함 기본 요금이 부과돼요.</li>
                <li>
                  이용 중이던 요금제의 기본료는 일시정지하기 전까지 사용 한 일자에 따라 계산돼요.
                </li>
                <li>
                  일시정지 중에는 이용 중인 요금제와 부가 서비스를 변경할 수 없으며, 해당 요금도
                  발행하지 않아요.
                </li>
                <li>
                  일시정지 기간에도 수신자 부담 전화를 받는 경우 요금이 발생할 수 있어요. 원치
                  않으면 ‘수신 금지’ 서비스를 함께 신청해 주세요.
                </li>
                <li>
                  휴대폰 분실 등록을 한 뒤 일시정지를 하지 않으면 이용 중이던 요금이 그대로
                  발생돼요.
                </li>
                <li>선불 요금제를 이용하는 경우, 일시정지 신청이 불가합니다.</li>
                <li>
                  알닷케어 미제공 파트너사의 회선은 해당 고객센터를 통해 일시정지를 신청할 수
                  있습니다.
                </li>
              </ul>
              <p class="text-list-tit">일시정지 해제</p>
              <ul class="text-list bull">
                <li>
                  요금이 연체된 경우, 홈페이지에서는 일시정지를 해제할 수 없습니다. 고객센터로
                  문의해 주세요.
                </li>
                <li>일시정지를 해제하면 수신 금지 기능도 해제돼요.</li>
                <li>일시정지가 해제되는 달에는 부가세 포함 요금이 일시정지 기간만큼 계산돼요.</li>
                <li>일시정지를 해제한 다음 달에는 가입한 요금제의 월 정액이 정상 청구돼요.</li>
                <li>
                  알닷케어 미제공 파트너사의 회선은 해당 고객센터를 통해 일시정지를 신청할 수
                  있습니다.
                </li>
              </ul>
            </template>
          </Accodian>
          <!--// 24.12.12 꼭 알아두세요 수정 -->
        </div>

        <!-- 일시정지 신청 팝업 -->
        <Popup
          :title="buttonInfo.pcPopTitle"
          :isOpen="alertState.pausePop"
          :isPopFooter="false"
          @update:isOpen="alertState.pausePop = $event"
          class="pcpopup"
        >
          <ALMY06005 v-if="pageStep === 0" @nextStep="nextView" />
          <ALMY060051 v-if="pageStep === 1" @nextStep="nextView" />
          <!--일시정지 신청 완료-->
          <ALMY060061 v-if="pageStep === 2" @nextStep="nextView" />
          <!--일시정지 해제 완료-->
          <ALMY060062 v-if="pageStep === 3" @nextStep="nextView" />
          <!--일시정지 예약 취소-->
        </Popup>
        <!--// 일시정지 신청 팝업 -->

        <!--일시정지/해제 내역 보기-->
        <Popup
          :title="!front.isMobile() ? `일시정지/해제 내역` : ''"
          :isOpen="alertState.pause"
          :popType="'full no-title'"
          :isPopFooter="false"
          @update:isOpen="alertState.pause = $event"
          :class="{ pcpopup: cardObject.length <= 0 }"
        >
          <div class="first-content-item confirm-area nodata" v-if="cardObject.length <= 0">
            <div class="content-inner">
              <div class="cont-head">
                <h3 class="cont-title-main">
                  최근 3년 동안<br />
                  <b class="txt-primary">일시정지/해제 내역</b>이<br class="pc_hide" />
                  없어요
                </h3>
              </div>
            </div>
            <p class="icon">
              <img src="/images/v2/content/img_nodata.png" alt="일시정지/해제 없음 이미지" />
            </p>
          </div>
          <div v-else>
            <div class="cont-head title-main">
              <h3 class="cont-title-main">
                일시정지/해제<br />
                <b class="txt-primary">내역</b>이에요
              </h3>
              <span class="title-exp"
                >최근 3년 동안의 일시정지/해제 이력을<br />
                조회할 수 있어요</span
              >
            </div>
            <CardGroup :card-object="cardObject">
              <template #default="{ item }">
                <div>
                  {{ item.value }}
                  <span v-if="item.remain" class="badge-remain">D-{{ item.remain }}</span>
                </div>
              </template>
            </CardGroup>

            <div class="btn-area cnt mgt20">
              <button type="button" class="btn-circle more">더 볼래요</button>
            </div>
          </div>
        </Popup>
        <!--//일시정지/해제 내역 보기-->

        <!--디자인 검수용 일시정지/해제 데이터 없음-->
        <Popup
          :title="!front.isMobile() ? `일시정지/해제 내역` : ''"
          :isOpen="alertState.pauseNodata"
          :popType="'full no-title'"
          :isPopFooter="false"
          @update:isOpen="alertState.pauseNodata = $event"
          class="pcpopup"
        >
          <div class="first-content-item confirm-area nodata">
            <div class="content-inner">
              <div class="cont-head">
                <h3 class="cont-title-main">
                  최근 3년 동안<br />
                  <b class="txt-primary">일시정지/해제 내역</b>이<br class="pc_hide" />
                  없어요
                </h3>
              </div>
            </div>
            <p class="icon">
              <img src="/images/v2/content/img_nodata.png" alt="일시정지/해제 없음 이미지" />
            </p>
          </div>
        </Popup>
        <!--//디자인 검수용 일시정지/해제 데이터 없음-->

        <!-- 정지 횟수 모두 소진 시  -->
        <AlertV2
          v-model="alertState.fail1"
          :textData="{
            title: '일시정지는 1년에 2번까지<br/> 신청할 수 있어요',
            description: '초과하는 경우 <br/>아래 고객센터로 연락해 주세요',
          }"
          :confirm="front.isMobile() ? true : false"
          :buttonText="{ cancel: '확인', confirm: '고객센터 연결' }"
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
        <!--// 정지 횟수 모두 소진 시  -->

        <!-- 정지 가능일수 모두 소진 시  -->
        <AlertV2
          v-model="alertState.fail2"
          :textData="{
            title: '일시정지는 1년에 180일까지<br/> 신청할 수 있어요',
            description: '초과하는 경우 <br/>아래 고객센터로 연락해 주세요',
          }"
          :confirm="front.isMobile() ? true : false"
          :buttonText="{ cancel: '확인', confirm: '고객센터 연결' }"
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
        <!--// 정지 가능일수 모두 소진 시 -->

        <!-- 회선 직권정지인 경우  -->
        <AlertV2
          v-model="alertState.fail3"
          :textData="{
            title: '고객님께서는 미납으로<br/> 일시정지 상태입니다.',
            description: '아래 고객센터로 문의해 주세요',
          }"
          :confirm="front.isMobile() ? true : false"
          :buttonText="{ cancel: '확인', confirm: '고객센터 연결' }"
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
        <!--// 회선 직권정지인 경우 -->

        <!-- 친구추천 이용 중 -->
        <AlertV2
          v-model="alertState.fail6"
          :textData="{
            title:
              '일시정지 신청 시,<br/> <span>사용중인 친구추천 제공량 명칭</span><br/> 제공 혜택은 즉시 사라져요',
            description: '일시정지를 신청 하시겠어요?',
          }"
          :confirm="true"
          :buttonText="{ cancel: '취소', confirm: '확인' }"
          @close="handleClose"
          @proceed="handleProceed"
        />
        <!--// 친구추천 이용 중 -->

        <!-- 이벤트(해지방어) 이용 중  -->
        <AlertV2
          v-model="alertState.fail4"
          :textData="{
            title:
              '일시정지 신청 시,<br/> <span>데이터 프리덤</span><br/> 제공 혜택은 즉시 사라져요',
            description: '일시정지를 신청 하시겠어요?',
          }"
          :confirm="true"
          :buttonText="{ cancel: '취소', confirm: '확인' }"
          @close="handleClose"
          @proceed="handleProceed"
        />
        <!--// 이벤트(해지방어) 이용 중 -->

        <!-- 일시정지 예약 취소  -->
        <AlertV2
          v-model="alertState.fail5"
          :textData="{
            title: '신청하신 일시정지 예약을 <br/>취소 하시겠어요?',
          }"
          :confirm="true"
          :buttonText="{ cancel: '취소', confirm: '확인' }"
          @close="handleClose"
          @proceed="handleProceed"
        />
        <!--// 일시정지 예약 취소 -->

        <!-- [비제휴] 정지 횟수 모두 소진 -->
        <AlertV2
          v-model="alertState.fail7"
          :textData="{
            title: '일시정지는 1년에 2번까지 <br/>신청할 수 있어요.',
          }"
          :confirm="false"
          @close="handleClose"
          @proceed="handleProceed"
        />
        <!--// [비제휴] 정지 횟수 모두 소진 -->

        <!-- [비제휴] 정지 가능 일수 모두 소진 -->
        <AlertV2
          v-model="alertState.fail8"
          :textData="{
            title: '일시정지는 1년에 180일까지 <br/>신청할 수 있어요.',
          }"
          :confirm="false"
          @close="handleClose"
          @proceed="handleProceed"
        />
        <!--// [비제휴] 정지 가능 일수 모두 소진 -->

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
import ShortcutMenu from "@/components/v2/common/ShortcutMenu";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
import Popup from "@/components/v2/common/Popup";
import AlertV2 from "@/components/v2/common/AlertV2";

import ALMY06005 from "@/components/v2/pages/lost-device/ALMY06005";
import ALMY060051 from "@/components/v2/pages/lost-device/ALMY060051";
import ALMY060061 from "@/components/v2/pages/lost-device/ALMY060061";
import ALMY060062 from "@/components/v2/pages/lost-device/ALMY060062";

import { useRouter } from "vue-router";

// 헤더 정보
const layout = ref({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "일시 정지/해제",
});

// HOOK
const router = useRouter();
const emit = defineEmits(["setLayout"]);

const phoneDatas = [
  {
    number: "010-12**-34**",
    isInUse: "사용중",
    infoArray: [
      {
        list: [
          { name: "요금제", value: "[빽다장 100잔]평생할인 1GB+통화기본(LTE)" },
          { name: "정지 횟수", value: "연 1/2회" },
          { name: "정지 가능 일수", value: "180일" },
          { name: "파트너사", value: "에스원안심모바일" },
          { name: "고객센터", value: "1522-9999" },
        ],
      },
    ],
  },
  {
    number: "010-12**-12**",
    isInUse: "일시정지",
    infoArray: [
      {
        list: [
          { name: "요금제", value: "[빽다장 100잔] 평생할인 1GB+통화기본(LTE)" },
          { name: "신청 일자", value: "2021.01.01" },
          { name: "정지 기간", value: "2021.01.01 ~ 2021.02.02" },
          { name: "정지 사유", value: "경제적 사유" },
          { name: "정지 횟수", value: "연 1/2회" },
          { name: "파트너사", value: "에스원안심모바일" },
          { name: "고객센터", value: "1522-9999" },
        ],
      },
    ],
  },
  {
    number: "010-34**-34**",
    isInUse: "일시정지 예약",
    infoArray: [
      {
        list: [
          { name: "요금제", value: "[빽다장 100잔] 평생할인 1GB+통화기본(LTE)" },
          { name: "신청 일자", value: "2021.01.01" },
          { name: "정지 기간", value: "2021.01.01 ~ 2021.02.02" },
          { name: "정지 사유", value: "경제적 사유" },
          { name: "정지 횟수", value: "연 1/2회" },
          { name: "정지 가능 일수", value: "180일" },
          { name: "파트너사", value: "에스원안심모바일" },
          { name: "고객센터", value: "1522-9999" },
        ],
      },
    ],
  },
  {
    number: "010-34**-34**",
    isInUse: "알닷케어 미제공",
    infoArray: [],
  },
];

//라디오 value
const radioSelect = ref();
const buttonInfo = computed(() => {
  let btnText = "일시정지 신청하기";
  let link = "/sc/AL-MY-06-005";
  let activate = true;
  let pcPopTitle = "일시정지 신청"; //PC 팝업 상단 타이틀

  if (radioSelect.value !== undefined) {
    const selectedData = phoneDatas[radioSelect.value].isInUse;
    activate = false;

    if (selectedData === "사용중") {
      btnText = "일시정지 신청하기";
      link = "/sc/AL-MY-06-005";
      pageStep.value = 0;
      pcPopTitle = "일시정지 신청";
    } else if (selectedData === "일시정지") {
      btnText = "일시정지 해제하기";
      link = "/sc/AL-MY-06-006-1";
      pageStep.value = 2;
      pcPopTitle = "일시정지 해제";
    } else if (selectedData === "일시정지 예약") {
      btnText = "일시정지 예약 취소하기";
      link = "/sc/AL-MY-06-006-2";
      pageStep.value = 3;
      pcPopTitle = "예약 취소 완료";
    }
  }
  return { btnText, activate, link, pcPopTitle };
});

//링크영역 목업
const linksArray = [
  { title: "일시정지/해제 내역 보기", link: "popup", popName: "pause" },
  { title: "휴대폰 분실 등록/해제", link: "/sc/AL-MY-06-001" },
];

//일시정지/해제 풀팝업 내용 목업
const cardObject = ref([
  {
    list: [
      { name: "휴대폰 번호", value: "010-12**-26**" },
      { name: "상태", value: "일시정지", remain: 100 },
      { name: "정지 사유", value: "경제적 사유" },
      { name: "정지 일수", value: "30일" },
      { name: "정지 기간", value: "2024.01.01 ~ 2024.02.01" },
    ],
  },
  {
    list: [
      { name: "휴대폰 번호", value: "010-12**-26**" },
      { name: "상태", value: "일시정지" },
      { name: "정지 사유", value: "휴대폰 분실" },
      { name: "정지 일수", value: "30일" },
      { name: "정지 기간", value: "2024.01.01 ~ 2024.02.01" },
    ],
  },
  {
    list: [
      { name: "휴대폰 번호", value: "010-12**-26**" },
      { name: "상태", value: "일시정지 해제" },
      { name: "정지 사유", value: "기타사유 or 미납" },
      { name: "정지 일수", value: "30일" },
      { name: "정지 기간", value: "2024.01.01 ~ 2024.02.01" },
    ],
  },
]);

// alert
const alertState = ref({
  pausePop: false,
  pause: false,
  pauseNodata: false, //일시정지/해제 내역 없음
  fail1: false, // 정지 횟수 모두 소진 시
  fail2: false, // 정지 가능일수 모두 소진 시
  fail3: false, // 회선 직권정지인 경우
  fail4: false, // 이벤트(해지방어) 이용 중
  fail5: false, // 신청 취소
  fail6: false, // 친구추천 이용 중
  // fail7: false, // [비제휴] 정지 횟수 모두 소진 시
  // fail8: false, // [비제휴] 정지 가능일수 모두 소진 시
});

//alert 화면 검수용 목업
const buttonName = [
  { txt: "일시정지/해제 내역 없음 (full popup)", alertName: "pauseNodata" },
  { txt: "정지 횟수 모두 소진 시", alertName: "fail1" },
  { txt: "정지 가능일수 모두 소진 시", alertName: "fail2" },
  { txt: "회선 직권정지인 경우", alertName: "fail3" },
  { txt: "친구추천 이용 중", alertName: "fail6" },
  { txt: "이벤트(해지방어) 이용 중", alertName: "fail4" },
  { txt: "신청 취소", alertName: "fail5" },
  // {txt: '[비제휴] 정지 횟수 모두 소진 시', alertName: 'fail7'},  //24.12.24 v0.99 팝업 삭제
  // {txt: '[비제휴] 정지 가능일수 모두 소진 시', alertName: 'fail8'},  //24.12.24 v0.99 팝업 삭제
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
const pageStep = ref(0);
const nextView = (page) => {
  pageStep.value = page;
  if (page !== 1) {
    handleAlert("pausePop", false);
  }
};

//화면 검수용 임시 라우터 처리
const nextPage = () => {
  if (front.isMobile()) {
    router.push(buttonInfo.value.link);
  } else {
    handleAlert("pausePop", true);
  }
};

onMounted(() => {
  emit("setLayout", layout);
});
</script>
