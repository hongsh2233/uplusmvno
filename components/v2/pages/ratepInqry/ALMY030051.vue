<template>
  <div class="first-content-item">
    <div class="content-item">
      <div class="content-inner">
        <div class="cont-head">
          <h3 class="cont-title-main">
            청구서 받는 방법을 <br /><strong class="txt-primary">선택</strong>해 주세요
          </h3>
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">청구서 받는 방법</strong>
          </div>

          <div class="btn-flex">
            <div v-for="item in radioData" :key="item.id" class="radio_item ty05">
              <input
                type="radio"
                :id="item.id"
                name="radio01"
                :checked="item.checked"
                @change="handleChecked(item)"
              />
              <label :for="item.id">{{ item.text }}</label>
            </div>
          </div>
        </div>

        <template v-if="!radioData[1].checked">
          <div class="form-box">
            <div class="title-area">
              <strong class="title">휴대폰 번호</strong>
            </div>

            <div class="form_group">
              <div class="form_item certified val_chk">
                <!-- validation 체크 클래스 val_chk -->
                <InputForm
                  class="combobox-bottom"
                  :option="{ placeholder: '&lsquo;-&rsquo; 없이 숫자만 입력', value:'01012341234' }"
                  @inputValue="console.log($event)"
                />
                <button type="button" class="btn chip" @click="handleAlert('certified', true)">
                  인증번호 요청
                </button>
              </div>
              <div class="error">휴대폰 번호를 정확히 입력해주세요</div>
            </div>
          </div>

          <div class="form-box">
            <div class="title-area">
              <strong class="title">인증번호</strong>
            </div>

            <div class="form_group">
              <div class="form_item val_chk">
                <!-- validation 체크 클래스 val_chk -->
                <InputForm
                  class="combobox-bottom text"
                  :option="{ value: '322115', authNum: true}"
                  @inputValue="console.log($event)"
                />
              </div>

              <div class="error">
                <em>인증번호 입력시간이 지났습니다</em>
                <!-- <em>인증번호를 정확히 입력해주세요</em> -->
              </div>
              <div class="text_info">인증번호를 정확히 입력해 주세요</div>
            </div>
          </div>
        </template>

        <div v-if="radioData[1].checked" class="form-box">
          <div class="title-area">
            <strong class="title">이메일 주소</strong>
          </div>

          <div class="form_group">
            <div class="form_item val_chk">
              <!-- validation 체크 클래스 val_chk -->
              <InputForm
                class="combobox-bottom text"
                :option="{ placeholder: '아이디' }"
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
      </div>
    </div>

    <!-- 팝업 디자인 검수용입니다.-->
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" style="position: fixed; z-index: 1; bottom: 100px; left: 10px; font-size: 12px; background-color: rgb(255 93 0 / 23%); color: #4f4f4f;">
            팝업 디자인<br/> 검수용입니다
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in buttonName" :key="index" :value="index"  @click="handleAlert(item.alertName,true)" >
            <v-list-item-title style="font-size: 13px;">{{ item.txt }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    <!--// 팝업 디자인 검수용입니다.-->


    <BottomFixMenu 
      :btnText="radioData[0].checked ? '휴대폰으로 받기' : '이메일로 받기'" 
      :disabled="false"
      @click="nextPage"
    />
    <!--디폴트 :disabled="true"-->
    <!-- // bottom_button -->

    <!-- 이메일 팝업 -->
    <Popup
      title="이메일 선택"
      :isOpen="isOpen"
      @update:isOpen="isOpen = $event"
      @confirm="clickConfirm"
    >
      <!-- 2024.10.10 이메일 선택 수정 -->
      <PopupListItem 
        v-model="emailSelected" 
        :ListItemData="emailList" 
        :option="{ name: 'email-select'}" 
        @select="clickSelectListItem"
      />
    </Popup>
    <!-- // 이메일 팝업 -->

    <!-- 인증번호 재요청 버튼 선택한 경우 -->
    <AlertV2
      v-model="alertState.certified"
      :textData="{
        title: '인증번호가<br /> 재발송되었습니다',
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
      :buttonText="{ cancel: front.isMobile() ? '닫기': '확인', confirm: '고객센터 연결' }"
      @close="handleClose"
      @proceed="handleProceed"
    >
      <dl class="brand-phone">
        <div>
          <dt>에스원안심모바일</dt>
          <dd>114(자사 휴대폰 무료)<br/> 02-2275-0068(유료)</dd>
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
      :buttonText="{ cancel: front.isMobile() ? '닫기': '확인', confirm: '고객센터 연결' }"
      @close="handleClose"
      @proceed="handleProceed"
    >
      <dl class="brand-phone">
        <div>
          <dt>에스원안심모바일</dt>
          <dd>114(자사 휴대폰 무료)<br/> 02-2275-0068(유료)</dd>
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
  </div>
</template>

<script setup>
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
import Popup from "@/components/v2/common/Popup";
import PopupListItem from "@/components/v2/common/PopupListItem";
import InputForm from "@/components/v2/common/InputForm";

import AlertV2 from "@/components/v2/common/AlertV2";

import { ref, defineEmits } from "vue";
import { useRouter } from "vue-router";

// HOOK
const emit = defineEmits(["openAlert", "closeAlert", "nextStep"]);
const router = useRouter();

// 청구서 받는 방법 데이터
const radioData = ref([
  { id: "radioReissue_01", name: "radio01", checked: true, text: "휴대폰" },
  { id: "radioReissue_02", name: "radio01", checked: false, text: "이메일" },
]);

const handleChecked = (v) => {
  radioData.value.map((a) => {
    a.checked = a === v ? true : false;
    return a;
  });
};

// 이메일 주소 팝업
const emailSelected = ref('')
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
  emailSelected.value = emailList.value
    .filter((item) => item.selected) 
    .map((item) => item.value);
});

const clickSelectListItem = (targetData) => {
  console.log(targetData);
};
const isOpen = ref(false);
const handleMonthSel = () => {
  isOpen.value = true;
};

const clickConfirm = () => {
  console.log("이메일 선택");
};


// alert
const alertState = ref({
  certified: false, // 인증번호 받기
  minors: false, // 미성년자가 청구서 재발행 신청을 시도할 경우
  foreigner: false, // 외국인이 청구서 재발행 신청을 시도할 경우 
  back: false, // 뒤로가기
  minors1: false, // [비제휴]미성년자의 청구서 재발행
  foreigner1: false, // [비제휴]외국인의 청구서 재발행 
});

//alert 화면 검수용 목업
const buttonName = [
  {txt: '인증번호 받기', alertName: 'certified'},
  {txt: '미성년자가 청구서 재발행 신청을 시도할 경우', alertName: 'minors'},
  {txt: '외국인이 청구서 재발행 신청을 시도할 경우 ', alertName: 'foreigner'},
  {txt: '[비제휴]미성년자의 청구서 재발행', alertName: 'minors1'},
  {txt: '[비제휴]외국인의 청구서 재발행 ', alertName: 'foreigner1'},
  {txt: '뒤로가기', alertName: 'back'},
]

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
  //화면 검수용 임시처리
  if (front.isMobile()) {
    router.push("/sc/AL-MY-03-005-2");
  } else {
    emit('nextStep');
  }
};


</script>
