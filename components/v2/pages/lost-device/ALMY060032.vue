<template>
  <div class="first-content-item">
    <div class="content-item">
      <div class="content-inner">
        <div class="cont-head title-main">
          <h3 class="cont-title-main">
            휴대폰(유심) 분실 해제할 <br />
            정보를 <strong class="txt-primary">확인</strong>해 주세요
          </h3>
        </div>

        <div class="form-box">
          <CardGroup :card-object="cardObject" class="divider" />
        </div>

        <!-- <div class="form-box">
          <div class="title-area">
            <strong class="title">분실/도난 해제 품목</strong>
          </div>
          <div class="btn-flex nowrap">
            <div v-for="item in radioData2" :key="item.id" class="radio_item ty05">
              <input
                type="radio"
                name="radio03"
                :id="item.id"
                :value="item.value"
                v-model="radioSelect2"
              />
              <label :for="item.id">{{ item.text }}</label>
            </div>
          </div>
        </div> -->

        <div class="form-box">
          <div class="title-area">
            <strong class="title">일시정지 해제를 하시겠어요?</strong>
          </div>
          <div class="btn-flex">
            <div v-for="item in radioData4" :key="item.id" class="radio_item ty05">
              <input
                type="radio"
                name="radio04"
                :id="item.id"
                :value="item.value"
                v-model="radioSelect4"
              />
              <label :for="item.id">{{ item.text }}</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BottomFixMenu :btnText="'인증하기'" :disabled="false" @click="nextPage" />
    <!-- // bottom_button -->

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

    <!-- 분실해제 신청 -->
    <AlertV2
      v-model="alertState.proceed"
      :textData="{
        title: '분실 해제 신청을 하시겠어요?',
      }"
      :confirm="true"
      :buttonText="{ cancel: '취소', confirm: '해제 신청' }"
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
  </div>
</template>

<script setup>
import CardGroup from "@/components/v2/common/CardGroup";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
import AlertV2 from "@/components/v2/common/AlertV2";

import { useRouter } from "vue-router";
const router = useRouter();
const emit = defineEmits(["nextStep"]);

const cardObject = ref([
  {
    title: "분실한 휴대폰 정보",
    list: [
      { name: "휴대폰 번호", value: "010-88**-35**" },
      { name: "제조사", value: "애플코리아(유)" },
      { name: "모델명", value: "ULK-A2890-256" },
      { name: "단말 일련번호", value: "****************8043" },
      { name: "유심(개인정보) 카드 번호", value: "*******4601" },
    ],
    notice: ["휴대폰 기기가 미등록 상태로 유심(회선)만 분실접수가 되어 있습니다. "],
  },
  {
    title: "분실 신청 정보",
    list: [
      { name: "분실 날짜", value: "2024-01-01" },
      { name: "분실 구분", value: "분실" },
      { name: "분실 상품", value: "휴대폰+유심" },
      { name: "일시 정지", value: "발신/수신 모두 정지" },
    ],
    notice: [],
  },
]);

const radioData2 = ref([
  { id: "radio02_01", text: "휴대폰 + 유심", value: "val3" },
  { id: "radio02_02", text: "휴대폰", value: "val4" },
  { id: "radio02_03", text: "유심", value: "val5" },
]);
const radioSelect2 = ref(radioData2.value[0].value);

const radioData4 = ref([
  { id: "radio04_01", text: "예", value: "val8" },
  { id: "radio04_02", text: "아니요", value: "val9" },
]);
const radioSelect4 = ref(radioData4.value[0].value);

// alert
const alertState = ref({
  back: false, // 뒤로가기
  proceed: false, // 분실 해제 신청을 하시겠어요?
});

//alert 화면 검수용 목업
const buttonName = [
  { txt: "뒤로가기", alertName: "back" },
  { txt: "분실 해제 신청을 하시겠어요?", alertName: "proceed" },
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

const nextPage = () => {
  // 화면 검수용 임시 라우터 처리
  const pageNumber = 3;
  if (front.isMobile()) {
    router.push("AL-MY-06-002-1");
  } else {
    emit("nextStep", pageNumber);
  }
};
</script>
