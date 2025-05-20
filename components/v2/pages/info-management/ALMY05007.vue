<template>
  <div class="first-content-item">
    <Progress :step="{total: 4, current: 2}"  v-if="front.isMobile()" />
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
        <div class="cont-head title-main">
          <h3 class="cont-title-main">휴대폰 정보 등록 방법을<br/>
            <b class="txt-primary">선택</b>해 주세요</h3>
        </div>

        <ul class="select-phone-regist">
          <li class="radio_item">
            <input type="radio" name="select1" id="choice_1" value="auto" v-model="radioNext">
            <label for="choice_1">
              <span>화면캡처로<br/><b class="txt-primary">자동등록</b>하기</span>
              <img
                src="/images/v2/content/img_capture_auto.png"
                alt="화면캡처 이미지"
              />
            </label>
          </li>
          <li class="radio_item ">
            <input type="radio" name="select1" id="choice_2" value="direct" v-model="radioNext" >
            <label for="choice_2">
              <span>설정정보에서 찾아<br/> <b class="txt-primary">직접등록</b>하기</span>
              <img
                src="/images/v2/content/img_capture_direct.png"
                alt="화면캡처 이미지"
              />
            </label>
          </li>
        </ul>

        <dl class="gray-notice-box">
          <dt class="ico-notice">휴대폰 고유번호 왜 등록하나요?</dt>
          <dd>
            고객님 휴대폰의 선택 약정 할인 혜택 여부와 분실폰 확인을 위해 휴대폰 식별 정보가 필요해요.
          </dd>
        </dl>
      </div>
    </div>
    <BottomFixMenu 
      :btnText="'다음으로'" 
      :disabled="false"
      @click="nextPage"
    />
    <!-- // bottom_button -->
    <!-- popup -->
    <!-- //popup -->
  </div>
</template>

<script setup>
  import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
  import Progress from "@/components/v2/common/Progress";

  import { useRouter } from "vue-router";
  const router = useRouter();
  const emit = defineEmits(["nextStep"]);

  //라디오 목업
  const radioData = ref([
    { id: "radio01_01", value: "iOS", text: "iOS"},
    { id: "radio01_02", value: "안드로이드", text: "안드로이드"},
  ])
  const radioSelected = ref(radioData.value[0].value);
  const radioNext = ref('auto')

  //nextPage
  const nextPage = () => {
    // 화면 검수용 임시 라우터 처리
    const pageNumber = 2
    if (front.isMobile()) {
      if (radioNext.value === 'direct') {
        router.push("/sc/AL-MY-05-008-2");
      } else {
        router.push("/sc/AL-MY-05-008-1");
      }
    } else {
      emit('nextStep', pageNumber);
    }
  };

</script>
