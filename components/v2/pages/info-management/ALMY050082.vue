<template>
  <div class="first-content-item">
    <!-- mobile -->
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
                :option="{ value: '직접 등록 하기', readonly: true, action: 'dropdown'}"
                @click="dropdownSel"
              />
            </div>
          </div>
          <div class="phone-regist-guide">
            <div class="cont-head">
              <h4 class="cont-title">휴대폰 설정 정보에서 고유번호를 <br/>복사/붙여 넣어 주세요</h4>
            </div>
            <!-- IOS -->
            <div v-if="radioSelected == 'iOS'" class="guide-item">
              <span class="guide-image-wrap">
                <img src="/images/v2/content/phone_info_copy_ios.png" alt="고유번호 복사 안내 이미지">
              </span>
              <ol class="text-list num">
                <li>휴대폰 설정 → 일반 → 정보로 이동해 주세요.</li>
                <li><span class="txt-orange">IMEI</span> 번호를 복사/붙여넣기 해주세요.</li>
              </ol>
            </div>
            <!--// IOS -->

            <!-- android -->
            <div class="guide-item" v-if="radioSelected == '안드로이드'">
              <span class="guide-image-wrap">
                <img src="/images/v2/content/phone_info_copy_android.png" alt="고유번호 복사 안내 이미지">
              </span>
              <ol class="text-list num">
                <li>휴대폰 설정 → 휴대전화 정보로 이동해 주세요.</li>
                <li><span class="txt-orange">IMEI</span> 번호를 복사/붙여넣기 해주세요.</li>
                <li>다른 통신사의 경우 추가로 <span class="txt-orange">IMEI(eSIM)</span>과 아래의 [상태 정보] 메뉴 클릭 후, <span class="txt-orange">EID</span>를 복사/붙여넣기 해주세요.</li>
              </ol>
            </div>
            <!--// android -->
          </div>

        </div>
      </div>

      <div class="content-item">
        <div class="content-inner">
          <!-- form -->
          <div class="form-box val_chk">
            <div class="title-area">
              <strong class="title">IMEI1</strong>
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
                <em>숫자 14자리를 입력해 주세요</em>
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
              <!-- 24.12.02 class 추가 btn-line -->
              <NuxtLink :to="'tel:1800-1577'" class="btn-rounded btn-line">고객센터 연결</NuxtLink>
            </div>
          </div>
          <!-- <p class="sub-desc">캡처된 화면은 갤러리 → 스크린샷에 저장되어 있어요.</p> -->
        </div>
      </div>
    </div>
    <!--// mobile -->
    
    <!-- pc -->
     <div v-else>
       <div class="content-item">
         <div class="content-inner">
           <div class="cont-head title-main">
             <h3 class="cont-title-main">휴대폰 고유번호를<br/>
               <b class="txt-primary">등록</b>해 주세요
             </h3>
            <p class="title-exp">정보 확인 페이지에서 확인된 고유번호를 입력하여 주세요.</p>
           </div>
           <div class="pc-regist-guide">
              <h4 class="regist-guide-tit">
                휴대폰 정보를 캡처해서 PC로 옮겼다면<br/>
                아래 [캡처한 이미지 등록하기]를 선택해 주세요.
              </h4>
              <div class="btn-area">
                <input class="blind" type="file" id="imgUpload" name="imgUpload" accept="image/*" @change="fnFileUpload">
                <label class="btn-rounded btn-line" for="imgUpload">캡처한 이미지 등록하기</label>
              </div>
           </div>
   
          <!-- form -->
          <div class="form-box val_chk">
            <div class="title-area">
              <strong class="title">IMEI1</strong>
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
                <em>숫자 14자리를 입력해 주세요</em>
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
          </div>
         </div>
       </div>
     </div>
    <!--// pc -->


    


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
    <!-- //popup -->
  </div>
</template>

<script setup>
  import Progress from "@/components/v2/common/Progress";
  import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
  import InputForm from "@/components/v2/common/InputForm";
  import Popup from "@/components/v2/common/Popup";

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

  const nextPage = () => {
    // 화면 검수용 임시 라우터 처리
    const pageNumber = 3
    if (front.isMobile()) {
      router.push("/sc/AL-MY-05-009");
    } else {
      emit('nextStep', pageNumber);
    }
  };


</script>
