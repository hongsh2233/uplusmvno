<template>
  <div class="first-content-item">
    <!--모바일 화면 -->
    <div v-if="front.isMobile()">
      <Progress :step="{total: 4, current: 3}" />
      <div class="content-inner">
        <!-- ios/android -->
        <div class="btn-flex">
          <div v-for="(item, idx) in radioData" :key="item.id" class="radio_item lined">
            <input 
              type="radio"
              name="radio01"
              :id="item.id"
              :value="item.value"
              v-model="radioSelected"
            >
            <label :for="item.id">{{ item.value }}</label>
          </div>
        </div>
        <!-- ios/android -->
      </div>
      <div class="content-item">
        <div class="content-inner">
          <div class="cont-head">
            <h3 class="cont-title-main">휴대폰 고유번호를<br/>
              <b class="txt-primary">등록</b>해 주세요
            </h3>
          </div>
          <div class="form_group">
            <div class="form_item">
              <InputForm
                class="combobox-border"
                :option="{ value: '자동 등록 하기', readonly: true, action: 'dropdown'}"
                @click="dropdownSel"
              />
            </div>
          </div>

          <div class="phone-regist-guide auto">
            <div class="cont-head">
              <h4 class="cont-title">휴대폰 정보 확인하는 방법</h4>
            </div>
            <!-- IOS -->
            <div v-if="radioSelected == 'iOS'" class="guide-item">
              <span class="step-number">STEP. 1</span>
              <p>
                통화 앱에서 <span class="txt-orange">*#06#</span>을 입력하거나, 아래 <b>[휴대폰 정보 보기]</b> 버튼을 클릭하여 선택하세요.
              </p>
              <img src="/images/v2/content/phone_info_guide_call.png" alt="휴대폰 정보보기 안내 이미지">
            </div>
            <!--// IOS -->
  
            <!-- android -->
            <div class="guide-item" v-if="radioSelected == '안드로이드'">
              <span class="step-number">STEP. 1</span>
              <p>
                통화 앱에서 <span class="txt-orange">*#06#</span>을 입력하세요. 휴대폰 정보 화면이 열립니다.
              </p>
              <img src="/images/v2/content/phone_info_guide_hand.png" alt="휴대폰 정보보기 안내 이미지">
            </div>
            <!--// android -->
  
            <div class="guide-item">
              <span class="step-number">STEP. 2</span>
              <p>휴대폰 정보 화면을 <span class="txt-orange">캡처</span> 후 신청서로 돌아와 주세요.</p>
              <img src="/images/v2/content/phone_info_guide_barcode.png" alt="휴대폰 정보보기 안내 이미지">
            </div>
          </div>
          <div class="btn-area cnt" v-if="radioSelected == 'iOS'">
            <button type="button" class="btn-circle">휴대폰 정보 보기</button>
          </div>
        </div>
      </div>
  
      <div class="content-item" v-if="!isFileUploaded">
        <div class="content-inner">
          <div class="cont-head">
            <h3 class="cont-title">캡처한 이미지를 등록해 주세요</h3>
          </div>
  
          <div class="btn-area">
            <input class="blind" type="file" id="imgUpload" name="imgUpload" accept="image/*" @change="fnFileUpload">
            <label class="btn-rounded btn-line" for="imgUpload">이미지 등록하기</label>
          </div>
          <p class="sub-desc">캡처된 화면은 갤러리 → 스크린샷에 저장되어 있어요.</p>
        </div>
      </div>
  
      <div class="content-item" v-else>
        <div class="content-inner">
          <div class="cont-head">
            <h3 class="cont-title">고유번호 정보가<br/> 올바르게 입력되었나요?</h3>
            <p class="sub-desc">올바르게 입력되지 않은 경우, <br/>직접 수정을 부탁드립니다.</p>
          </div>
  
          <!-- 캡처 이미지 영역 -->
          <div class="imei-img-area">
            <img src="/images/v2/temp/temp_barcode_img.png" alt="기기정보 캡쳐 이미지">
          </div>
          <!--// 캡처 이미지 영역 -->
  
          <!-- form -->
          <div class="form-box">
            <div class="title-area">
              <strong class="title">IMEI1</strong>
            </div>
            <div class="form_group">
              <div class="form_item val_chk">
              <!-- validation 체크 클래스 val_chk -->
                <InputBox
                  class="combobox-bottom text"
                  :option="{ placeholder: '복사 붙여넣기로 입력해 주세요', value:'35709518332896'}"
                />
              </div>
              <div class="error">
                <em>숫자 14자리를 입력해 주세요.</em>
              </div>
            </div>
          </div>
          <div class="form-box">
            <div class="title-area">
              <strong class="title">IMEI2</strong>
            </div>
            <div class="form_group">
              <div class="form_item val_chk">
              <!-- validation 체크 클래스 val_chk -->
                <InputBox
                  class="combobox-bottom text"
                  :option="{ placeholder: '복사 붙여넣기로 입력해 주세요'}"
                />
              </div>
              <div class="error">
                <em>숫자 14자리를 입력해 주세요.</em>
                <!-- 24.11.19 v0.97 수정 -->
                <!-- <em>IMEI2 정보를 정확히 입력해 주세요.</em> -->
              </div>
            </div>
          </div>
          <!--// form -->
  
          <div class="support-guide">
            <p>입력하신 고유번호로 정보가 조회되지 않는 경우 상담사 개통으로 진행이 필요해요.</p>
            <div class="agent-support">
              <span>에스원안심모바일</span>
              <b>114(자사 휴대폰 무료) 02-2275-0068(유료)</b>
            </div>
            <div class="btn-area col">
              <NuxtLink :to="'tel:1800-1577'" class="btn-rounded">고객센터 연결</NuxtLink>
              <input class="blind" type="file" id="imgUpload" name="imgUpload" accept="image/*" @click="resetFile">
              <label class="btn-rounded btn-line" for="imgUpload">이미지 다시 등록하기</label>
            </div>
          </div>
          <p class="sub-desc">캡처된 화면은 갤러리 → 스크린샷에 저장되어 있어요.</p>
        </div>
      </div>
    </div>

    <!-- PC 화면 -->
    <div v-else>
      <div class="content-item">
        <div class="content-inner">
          <div class="cont-head title-main">
            <h3 class="cont-title-main">휴대폰 고유번호를<br/>
              <b class="txt-primary">확인</b>해 주세요
              <i class="btn-tooltip" role="button" tabindex="0" aria-label="open alert" @click="handleAlert('noti',true)"></i>
            </h3>
          </div>
          
          <div class="phone-regist-guide auto">
            <div class="guide-item">
              <span class="step-number">STEP. 1</span>
              <p>
                <span class="txt-orange">*#06#</span>으로 전화를 걸고 나오는<br/>
                고유번호를 확인해 주세요
              </p>
              <ul class="text-list bull">
                <li>화면을 캡처하여 컴퓨터로 옮기시면, <span class="txt-black">편리하게 자동 입력</span>을 하실 수 있어요.</li>
                <li>T전화, 후후전화와 같은 별도의 전화 앱 사용 시 정상적으로 정보가 수집되지 않을 수 있어요.</li>
              </ul>
              <img src="/images/v2/content/img_pc_step_call.png" alt="휴대폰 고유번호 확인 안내 이미지">
            </div>
  
            <div class="guide-item">
              <span class="step-number">STEP. 2</span>
              <p>휴대폰 <span class="txt-orange">설정 정보</span>에서 고유번호를<br/> 확인해 주세요</p>
              <ul class="text-list bull">
                <li>휴대폰 정보에서 <span class="txt-black">IMEI, IMEI2</span>를 찾아서 확인해 주세요.</li>
                <li><span class="txt-black">아이폰 :</span> 설정 → 일반 → 정보에서 확인해 주세요.</li>
                <li><span class="txt-black">안드로이드 :</span> 설정 → 휴대전화정보 → 정보에서 확인해 주세요.</li>
              </ul>
              <img src="/images/v2/content/img_pc_step_setting.png" alt="휴대폰 고유번호 확인 안내 이미지">
            </div>
          </div>

          <div class="mobile-recommend-wrap">
            <p class="txt-clap">모바일로 가입하시면 더욱 편리해요</p>
            <span class="rec-exp">알닷 모바일을 통해 가입하시면 휴대폰 고유번호를 손쉽게 입력하실 수 있어요.</span>
            <p class="text-list-tit" >[알닷 모바일] 접속방법</p>
            <ul class="text-list bull">
              <li>스마트폰 인터넷 주소창에서 <span class="txt-black">uplusmvno.com</span> 입력</li>
              <li>스마트폰 인터넷 검색창에서 <span class="txt-black">알닷</span> 입력</li>
            </ul>
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
      :btnText="'다음으로'" 
      :disabled="false"
      @click="nextPage"
    />
    <!-- // bottom_button -->

    <!-- popup -->
    <!-- 등록하는 방법 선택 팝업 -->
    <Popup
      title="등록방법 선택"
      :isOpen="isOpen"
      :isPopFooter="false"
      @update:isOpen="isOpen = $event"
    >
      <ul class="select-list" role="listbox">
        <li
          role="none"
          :class="{ on: data.selected }"
          v-for="(data, i) in selectList"
          :key="i"
        >
          <NuxtLink v-if="data.url" role="option" :to="data.url" @click="scroll.scroll()">
            {{ data.name }}
          </NuxtLink>
        </li>
      </ul>
    </Popup>
    <!-- // 등록하는 방법 선택 팝업 -->

    <!-- 휴대폰을 등록할 수 없어요 -->
    <AlertV2
      v-model="alertState.fail1"
      :textData="{
        title: '휴대폰을 등록할 수 없어요',
        description: '입력하신 정보가 정확한지 <br/>다시 한번 확인해 주세요',
      }"
        :confirm="front.isMobile() ? true : false"
        :buttonText="{ cancel: front.isMobile() ? '닫기': '확인', confirm: '고객센터 연결' }"
        @close="handleClose"
        @proceed="handleProceed"
      >
      <p class="description">
        고객센터로 연락 주시면<br/>
        전문 상담사가 도와드릴게요
      </p>
      <dl class="brand-phone">
        <div>
          <dt>에스원안심모바일</dt>
          <dd>114(자사 휴대폰 무료)<br/> 02-2275-0068(유료)</dd>
        </div>
      </dl>
    </AlertV2>
    <!--// 휴대폰을 등록할 수 없어요 -->

    <!-- 이미 등록된 휴대폰 정보에요 -->
    <AlertV2
      v-model="alertState.fail2"
      :textData="{
        title: '이미 등록된 휴대폰 정보에요',
        description: '휴대폰 정보를 확인 후 <br/>다시 등록해 주세요',
      }"
      :confirm="true"
      :buttonText="{ cancel: '닫기', confirm: '다른 휴대폰 등록하기' }"
      @close="handleClose"
      @proceed="handleProceed"
    />
    <!--// 이미 등록된 휴대폰 정보에요 -->
    
    <!--이미지 형식의 파일을 등록해 주세요 -->
    <AlertV2
      v-model="alertState.fail3"
      :textData="{
        title: '이미지 형식의 파일을 <br/>등록해 주세요',
        description: '휴대폰 정보를 확인 후 <br/>다시 등록해 주세요',
      }"
      @close="handleClose"
    />
    <!--// 이미지 형식의 파일을 등록해 주세요 -->

    <!-- 휴대폰에서 캡처한 이미지를 등록해 주세요 -->
    <AlertV2
      v-model="alertState.fail4"
      :textData="{
        title: '휴대폰에서 캡처한 이미지를<br /> 등록해 주세요',
        description: '휴대폰 화면을 별도로 촬영한 경우 <br/>인식이 불가하거나 잘못된 정보가 <br/>입력될 수 있어요',
        attention: '※ IMEI1, IMEI2, EID 중 정보가 <br/>하나라도 없다면 eSIM 가입이 불가능해요'
      }"
      @close="handleClose"
    />
    <!--// 휴대폰에서 캡처한 이미지를 등록해 주세요 -->

    <!-- 휴대폰 고유번호 확인 방법 가이드에 맞는 이미지를 등록해 주세요 -->
    <AlertV2
      v-model="alertState.fail5"
      :textData="{
        title: '휴대폰 고유번호 확인 방법 가이드에 <br />맞는 이미지를 등록해 주세요',
        description: '이미지 등록이 안되면, <br/>IMEI1 정보를 직접 입력해 주세요',
      }"
      @close="handleClose"
    />
    <!--// 휴대폰 고유번호 확인 방법 가이드에 맞는 이미지를 등록해 주세요 -->
    
    <!-- 이미지 등록에 실패했어요 -->
    <AlertV2
      v-model="alertState.fail6"
      :textData="{
        title: '이미지 등록에 실패했어요<br />다시 시도해주세요',
      }"
      @close="handleClose"
    />
    <!--// 이미지 등록에 실패했어요 -->

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
    
    <!-- 휴대폰 고유번호 왜 확인하나요 -->
    <AlertV2
      v-model="alertState.noti"
      :textData="{
        title: '휴대폰 고유번호 왜 확인하나요?',
        description: '고객님 휴대폰의 선택 약정 할인 혜택 여부와 휴대폰 분실 등록 및 분실폰 확인을 위해 휴대폰 식별 정보가 필요해요!'
      }"
      @close="handleClose"
    />
    <!--// 휴대폰 고유번호 왜 확인하나요 -->

    <!-- //popup -->
  </div>
</template>

<script setup>
  import Progress from "@/components/v2/common/Progress";
  import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
  import InputForm from "@/components/v2/common/InputForm";
  import Popup from "@/components/v2/common/Popup";
  import AlertV2 from "@/components/v2/common/AlertV2";

  import { useRouter } from "vue-router";
  const router = useRouter();
  const emit = defineEmits(["nextStep"]);

  //라디오 목업
  const radioData = ref([
    { id: "radio01_01", value: "iOS", text: "iOS"},
    { id: "radio01_02", value: "안드로이드", text: "안드로이드"},
  ])
  const radioSelected = ref(radioData.value[0].value);

  //휴대폰 고유번호 등록 방법 선택 팝업
  const isOpen = ref(false);
  const dropdownSel = () => {
    isOpen.value = true;
  };
  const selectList = ref([
    { selected: true, value: 0, name: "자동 등록 하기", url:'/sc/AL-MY-05-008-1' },
    { selected: false, value: 1, name: "직접 등록 하기", url:'/sc/AL-MY-05-008-2' },
  ]);

  //이미지 등록 화면 체크용 변수
  const isFileUploaded = ref(false);
  const fileInput = ref(null);

  const fnFileUpload = (event) => {
    isFileUploaded.value = event.target.files.length > 0;
  };
  const resetFile = (event) => {
    event.preventDefault();
    fileInput.value = '';
    isFileUploaded.value = false;
  };

  // alert
  const alertState = ref({
    fail1: false, //휴대폰 등록 실패
    fail2: false, // 이미 등록된 휴대폰 정보
    fail3: false, // 이미지 형식 오류
    fail4: false, // 휴대폰 캡쳐 이미지 등록 안내
    fail5: false, //휴대폰 고유번호 가이드 확인
    fail6: false, // 이미지 등록 실패
    back: false, // 뒤로가기
    noti: false, // 휴대폰 고유번호 확인 이유
  });
  
  //alert 화면 검수용 목업
  const buttonName = [
    {txt: '휴대폰 등록 실패', alertName: 'fail1'},
    {txt: '이미 등록된 휴대폰 정보', alertName: 'fail2'},
    {txt: '이미지 형식 오류', alertName: 'fail3'},
    {txt: '휴대폰 캡쳐 이미지 등록 안내', alertName: 'fail4'},
    {txt: '휴대폰 고유번호 가이드 확인', alertName: 'fail5'},
    {txt: '이미지 등록 실패', alertName: 'fail6'},
    {txt: '뒤로가기', alertName: 'back'}
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
    // 화면 검수용 임시 라우터 처리
    const pageNumber = 2
    if (front.isMobile()) {
      router.push("/sc/AL-MY-05-009");
    } else {
      emit('nextStep', pageNumber);
    }
  };
</script>
