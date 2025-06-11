<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-03-004'" />
        <!-- // LNB -->

        <!-- contents -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>
          <!-- 내 정보 메뉴 -->
          <MyInfoMenu />
          <!-- // 내 정보 메뉴 -->

          <div class="content-item">
            <div class="content-inner">
              <CardGroup :card-object="cardObject" />
              <div class="form-box">
                <div class="title-area">
                  <strong class="title">청구서 받는 방법</strong>
                </div>
                <div class="btn-flex">
                  <div v-for="(item, idx) in radioData" :key="item.id" class="radio_item ty05">
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
                <!-- 2025-06-11 1749616255 (정C) 알닷 2차 고도화: 우편 청구서로의 변경은 불가합니다. 내용 추가 됨 -->
                <ul class="text-list bull">
                  <li>변경 신청일 기준으로 익월부터 청구서 받는 방법이 변경됩니다.</li>
                  <li>우편 청구서로의 변경은 불가합니다.</li>
                </ul>
              </div>

              <div v-if="radioIdx === 1" class="form-box">
                <div class="title-area">
                  <strong class="title">이메일 주소</strong>
                </div>

                <div class="form_group">
                  <div class="form_item" :class="{ val_chk: validationMocup }">
                    <!-- validation 체크 클래스 val_chk -->
                    <InputForm
                      class="combobox-bottom text"
                      :option="{ placeholder: '아이디', value: 'abcdef2024' }"
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
                <ul class="text-list bull">
                  <li>
                    청구서 받는 방법은 유지하고, 이메일 주소만 변경하려면 새 이메일 주소를 입력한 후 확인을 눌러주세요.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <BottomFixMenu :btnText="'인증하기'" :disabled="false" @click="nextPage" />
          <!-- // bottom_button -->
        </div>
        <!-- // content -->
      </div>

      <!-- 팝업 -->

      <!-- 이메일 팝업 -->
      <Popup title="이메일 선택" :isOpen="isOpen" @update:isOpen="isOpen = $event" @confirm="clickConfirm">
        <!-- 2024.10.10 이메일 선택 수정 -->
        <PopupListItem
          v-model="emailSelected"
          :ListItemData="emailList"
          :option="{ name: 'email-select' }"
          @select="clickSelectListItem"
        />
      </Popup>
      <!-- // 이메일 팝업 -->

      <!-- 청구서 받는 방법 변경 완료 팝업 -->
      <Popup
        v-if="!front.isMobile()"
        :title="'청구서 받는 방법 변경'"
        :isOpen="isCompleted"
        :isPopFooter="false"
        @update:isOpen="isCompleted = $event"
        class="pcpopup"
      >
        <ALMY030041 />
      </Popup>
      <!-- 청구서 받는 방법 변경 완료 팝업 -->

      <!-- 현재 청구서 받는 방법과 동일하게 선택한 경우 -->
      <AlertV2
        v-model="alertState.select"
        :textData="{
          title: '현재 청구서를 받는 <br />방법과 동일해요',
          description: '변경할 방법을 확인해 주세요',
        }"
        @close="handleClose"
        @proceed="handleProceed"
      />

      <!-- 미성년자가 청구서 재발행 신청을 시도할 경우 -->
      <AlertV2
        v-model="alertState.minors"
        :textData="{
          title: '만 19세 미만 고객은<br /> 청구서 받는 방법을 변경할 수 없어요',
          description: '고객센터로 연락 주시면 <br/>전문 상담사가 도와드릴게요',
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

      <!-- 외국인이 청구서 재발행 신청을 시도할 경우 -->
      <AlertV2
        v-model="alertState.foreigner"
        :textData="{
          title: '외국인 고객은 <br/>청구서 재발행 신청을 할 수 없어요',
          description: '고객센터로 연락 주시면 <br/>전문 상담사가 도와드릴게요',
          // attention: '주의사항 텍스트를 입력하세요'
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

      <!-- 뒤로가기 선택한 경우 -->
      <AlertV2
        v-model="alertState.back"
        :textData="{
          title: '이 화면에서 나가면<br/> 입력 중인 내용이 모두 사라져요!',
        }"
        :confirm="true"
        :buttonText="{ cancel: '나가기', confirm: '계속진행' }"
        @close="handleClose"
        @proceed="handleProceed"
      />

      <!-- 24.11.19 v0.97 팝업 추가 -->
      <AlertV2
        v-model="alertState.minors1"
        :textData="{
          title: '만 19세 미만 고객은 <br/>청구서 재발행 신청을 할 수 없어요',
        }"
        @close="handleClose"
        @proceed="handleProceed"
      />
      <AlertV2
        v-model="alertState.foreigner1"
        :textData="{
          title: '외국인 고객은 <br/>청구서 재발행 신청을 할 수 없어요',
        }"
        @close="handleClose"
        @proceed="handleProceed"
      />
      <!--// 24.11.19 v0.97 팝업 추가 -->

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
    </div>
  </div>
  <!-- // container -->
</template>

<script setup>
import PcLnb from "@/components/v2/common/PcLnb";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu";
import CardGroup from "@/components/v2/common/CardGroup";
import InputForm from "@/components/v2/common/InputForm";
import Popup from "@/components/v2/common/Popup";
import PopupListItem from "@/components/v2/common/PopupListItem";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
import AlertV2 from "@/components/v2/common/AlertV2";

import ALMY030041 from "@/components/v2/pages/ratepInqry/ALMY030041";

import { useRouter } from "vue-router";

const emit = defineEmits(["setLayout"]);
const router = useRouter();
const layout = reactive({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  title: "청구서 받는 방법 변경",
  floatMenu: "none",
});

const route = useRoute();
const queryRecive = route.query.receive;

// 가입 정보 목업 데이터
const cardObject = ref([
  {
    title: "현재 청구서 받는 방법",
    sub: "",
    chip: "",
    url: "https://www.naver.com",
    list: [
      { name: "청구서 받는 방법", value: "E-MAIL(상세) 청구서" },
      { name: "이메일 주소", value: "abc**@lguplus.co.kr" }, // { name: "휴대폰 번호", value: "010-****-1234" },
      { name: "받는 방법 변경일", value: "2024.07.01" },
    ],
  },
]);

/* 2025-06-11 1749616255 (정C) 알닷 2차 고도화: 우편 청구 사용시 추가 */
if (queryRecive === "post")
  cardObject.value = [
    {
      title: "현재 청구서 받는 방법",
      sub: "",
      chip: "",
      url: "https://www.naver.com",
      list: [
        { name: "청구서 받는 방법", value: "우편" },
        { name: "휴대폰 번호", value: "010-12**-34**" },
        { name: "주소", value: "서울 마포구 상암동**" },
        { name: "받는 방법 변경일", value: "2024.07.01" },
      ],
    },
  ];

/* 2025-06-11 1749616255 (정C) 알닷 2차 고도화: 너겟요금제 가입시 추가 */
if (queryRecive === "nuget")
  cardObject.value = [
    {
      title: "현재 청구서 받는 방법",
      sub: "",
      chip: "",
      url: "https://www.naver.com",
      list: [
        { name: "청구서 받는 방법", value: "당신의 U+" },
        { name: "휴대폰 번호", value: "010-12**-34**" },
        { name: "받는 방법 변경일", value: "2024.07.01" },
      ],
    },
  ];

//청구서 받는 방법
const radioData = ref([
  { id: "radio01_01", value: "휴대폰", text: "휴대폰", checked: true },
  { id: "radio01_02", value: "이메일", text: "이메일", checked: false },
]);

const radioIdx = ref();
const validationMocup = ref(false);

// 이메일 주소 팝업
const emailSelected = ref("");
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

onMounted(() => {
  emailSelected.value = emailList.value.filter((item) => item.selected).map((item) => item.value);
});

const clickSelectListItem = (targetData) => {
  console.log(targetData);
};
const isOpen = ref(false);
const handleMonthSel = () => {
  isOpen.value = true;
};
const clickConfirm = () => {
  console.log("확인");
};

const isCompleted = ref(false);

// alert
const alertState = ref({
  select: false, // 청구서 변경방법 동일할 경우
  minors: false, // 미성년자가 청구서 재발행 신청을 시도할 경우
  foreigner: false, // 외국인이 청구서 재발행 신청을 시도할 경우
  back: false, // 뒤로가기
  minors1: false, // [비제휴]미성년자의 청구서 재발행
  foreigner1: false, // [비제휴]외국인의 청구서 재발행
});

//alert 화면 검수용 목업
const buttonName = [
  { txt: "청구서 변경방법 동일할 경우", alertName: "select" },
  { txt: "미성년자가 청구서 재발행 신청을 시도할 경우", alertName: "minors" },
  { txt: "외국인이 청구서 재발행 신청을 시도할 경우 ", alertName: "foreigner" },
  { txt: "[비제휴]미성년자의 청구서 재발행", alertName: "minors1" },
  { txt: "[비제휴]외국인의 청구서 재발행 ", alertName: "foreigner1" },
  { txt: "뒤로가기", alertName: "back" },
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

// 화면 검수용 임시 라우터 처리 (완료페이지)
const nextPage = () => {
  if (front.isMobile()) {
    router.push("/sc/AL-MY-03-004-1");
  } else {
    isCompleted.value = true;
  }
};

onMounted(() => {
  emit("setLayout", layout);
});
</script>
