<template>
  <div class="first-content-item">
    <Progress :step="{total: 4, current: 1}" v-if="front.isMobile()" />
    <div class="content-item">
      <div class="content-inner">
        <div class="cont-head">
          <h3 class="cont-title-main">
            <strong class="txt-primary">가입자 정보</strong>를
            <br/>
            알려주세요
          </h3>
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">가입자 이름</strong>
          </div>

          <InputForm
            class="combobox-bottom text view"
            :option="{ value: '김*닷', readonly: true }"
          />
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">등록할 휴대폰 번호</strong>
          </div>
          <InputForm
            class="combobox-bottom"
            :option="{ placeholder: '숫자만 입력해 주세요', value: '1234-****-5678', readonly: true, action: 'dropdown' }"
            @click="handleNumberSel"
            />
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">연락받을 휴대폰 번호</strong>
          </div>
          <InputForm
            class="combobox-bottom"
            :option="{ placeholder: '숫자만 입력해 주세요', value: '010-12**-34**'}"
          />
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">이메일</strong>
          </div>

          <div class="form_group">
            <div class="form_item val_chk">
              <!-- validation 체크 클래스 val_chk -->
              <InputForm
                class="combobox-bottom text"
                :option="{ placeholder: '아이디', value: 'abcdef2024' }"
                @inputValue="console.log($event)"
              />
              <span class="mark_div">@</span>
              <InputForm
                class="combobox-bottom"
                :option="{ placeholder: '이메일 선택', readonly: true, value: 'lguplus.co.kr', action: 'dropdown' }"
                @btnClick="handleMonthSel"
              />
            </div>
            <div class="error">이메일 형식을 확인해주세요</div>
          </div>
        </div>
      </div>
    </div>

    <BottomFixMenu 
      :btnText="'다음으로'" 
      :disabled="false"
      @click="nextPage"
    />
    <!-- // bottom_button -->

    <!-- popup -->
    <Popup
      title="휴대폰 번호 선택"
      :isOpen="isOpen1"
      @update:isOpen="isOpen1 = $event"
      @confirm="clickConfirm"
    >
      <PopupListItem v-model="selectNumber" :ListItemData="numberList" @select="clickSelectListItem" />
    </Popup>
    <!-- 이메일 팝업 -->
    <Popup
      title="이메일 선택"
      :isOpen="isOpen"
      @update:isOpen="isOpen = $event"
      @confirm="clickConfirm"
    >
      <PopupListItem v-model="selectEmail" :ListItemData="emailList" @select="clickSelectListItem" />
    </Popup>
    <!-- // 이메일 팝업 -->    
    <!-- //popup -->
  </div>
</template>

<script setup>
  import Progress from "@/components/v2/common/Progress";
  import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
  import Popup from "@/components/v2/common/Popup";
  import PopupListItem from "@/components/v2/common/PopupListItem";
  import InputForm from "@/components/v2/common/InputForm";

  import { useRouter } from "vue-router";
  const router = useRouter();
  const emit = defineEmits(["nextStep"]);

  const isOpen1 = ref(false);
  const handleNumberSel = () => {
    isOpen1.value = true;
  };
  const isOpen = ref(false);
  const handleMonthSel = () => {
    isOpen.value = true;
  };

  const clickSelectListItem = (targetData) => {
    console.log(targetData);
  };

  // 등록할 휴대폰 번호 팝업
  const numberList = ref([
    { selected: true, value: 0, name: "1234-****-5678" },
    { selected: false, value: 1, name: "2341-****-5678" },
    { selected: false, value: 2, name: "3412-****-5678" },
    { selected: false, value: 3, name: "4123-****-5678" },
  ]);
  const selectNumber = ref(0)


  // 이메일 주소 팝업
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
  const selectEmail = ref(0)

  // 확인 버튼
  const clickConfirm = () => {
    console.log("확인");
  };

  //AL-MY-05-007
  const nextPage = () => {
    // 화면 검수용 임시 라우터 처리
    const pageNumber = 1
    if (front.isMobile()) {
      router.push("AL-MY-05-007");
    } else {
      console.log(pageNumber)
      emit('nextStep', pageNumber);
    }
  };

</script>
