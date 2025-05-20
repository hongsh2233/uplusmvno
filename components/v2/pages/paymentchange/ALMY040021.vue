<template>
  <div class="first-content-item">
    <div class="content-item">
      <div class="content-inner">
        <div class="cont-head">
          <h3 class="cont-title-main">
            변경할 <strong class="txt-primary">납부 방법</strong>을<br />
            알려주세요
          </h3>
          <p class="cont-sub-title">
            납부 방법은 <span class="txt-orange">본인 명의</span>의 은행 계좌 또는<br />
            신용카드로만 변경할 수 있어요.
          </p>
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
            <strong class="title">요금 납부 방법</strong>
          </div>

          <div class="btn-flex">
            <div v-for="item in radioData" :key="item.id" class="radio_item ty05">
              <input
                type="radio"
                :id="item.id"
                name="radio01"
                :checked="item.checked"
                :value="item.value"
                v-model="radioSelect"
              />
              <label :for="item.id">{{ item.text }}</label>
            </div>
          </div>
        </div>

        <div class="check-txt check_st">
          <input type="checkbox" id="checkbox01_02" name="" @click="handleTerms" />
          <label for="checkbox01_02">납부 방법 변경에 동의(필수)</label>
        </div>
      </div>
    </div>

    <BottomFixMenu :btnText="'다음으로'" :disabled="false" @click="nextPage" />
    <!-- // bottom_button -->

    <!-- 개인정보 수집/이용동의 팝업 -->
    <Popup
      title="납부 방법 변경에 동의(필수)"
      :isOpen="isOpen"
      :popType="'alert-gray'"
      :showConfirmButton="true"
      @update:isOpen="isOpen = $event"
      @confirm="clickConfirm2"
    >
      <ul class="policy-wrap">
        <li>
          카드 -> 은행 or 은행 -> 카드로 납부 방법을 변경하셨다면, 변경 신청 익월부터 반영됩니다.
        </li>
        <li>※ 은행(계좌변경), 카드(카드변경)은 약 2~3일 이내 반영됩니다.</li>
      </ul>
    </Popup>
    <!-- // 개인정보 수집/이용동의 팝업 -->
  </div>
</template>

<script setup>
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
import Popup from "@/components/v2/common/Popup";
import InputForm from "@/components/v2/common/InputForm";

import { useRouter } from "vue-router";
const router = useRouter();
const emit = defineEmits(["nextStep"]);

// 요금 납부 방법 데이터
const radioData = ref([
  { id: "radio01_01", name: "radio01", checked: true, text: "은행", value: "bank" },
  { id: "radio01_02", name: "radio01", checked: false, text: "신용카드", value: "card" },
]);
const radioSelect = ref(radioData.value.find((item) => item.checked).value);

// 납부 방법 변경에 동의(필수)
const isOpen = ref(false);
const handleTerms = (e) => {
  if (!e.target.checked) return;
  isOpen.value = true;
};
const clickConfirm2 = () => {
  console.log("확인");
};

//AL-MY-04-002-2
const isReissue = ref(false);
const nextPage = () => {
  // 화면 검수용 임시 라우터 처리
  const pageNumber = 2;
  if (front.isMobile()) {
    router.push({
      path: "/sc/AL-MY-04-002-2",
      query: {
        selectedValue: radioSelect.value, // 라디오 값 전달
      },
    });
  } else {
    emit("nextStep", radioSelect.value, pageNumber);
  }
};
</script>
