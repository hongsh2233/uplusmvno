<template>
  <div class="AL-MY-00-007">
    <div class="container">
      <div class="content pt-0 pb-0" id="content">
        <div class="certify_wrap">
          <!-- contents -->
          <div class="crp_r">
            <h2 class="pc-title">{{ layout.title }}</h2>

            <!-- 2025-03-17 [ui개선건] -->
            <div class="first-content-item confirm-area care-common pb-10">
              <div class="content-item">
                <div class="content-inner common">
                  <div class="cont-head">
                    <h3 class="cont-title-main">
                      <p class="point"><em>선택한 서비스</em>는</p>
                      U<sup>+</sup>알뜰폰 사용 고객만 <br />이용이 가능해요
                    </h3>
                  </div>

                  <div class="is-certified">
                    <p class="description">
                      해외여행을 가기 전, 후 또는<br />
                      다양한 유형의 부가서비스가 있는<br />
                      알닷의 로밍/부가 서비스를<br />
                      이용하시겠어요?
                    </p>
                    <div class="certified">
                      <div class="form-box">
                        <div class="title-area completion">
                          <p class="title">본인인증이 <strong class="import">완료</strong>됐어요</p>
                        </div>
                        <ul class="list-group" role="listbox">
                          <li role="none" v-for="(a, i) in dataSelectList" :key="i">
                            <input
                              type="checkbox"
                              :id="`checkbox2_0${i}`"
                              :name="`checkbox2_0${i}`"
                              class="blind"
                              :value="i"
                              v-model="checkboxSelectValue"
                              @change="updateCheckboxSelectValue"
                            />
                            <label :for="`checkbox2_0${i}`" class="line-info">
                              <span v-if="i === 0" class="badge">대표</span>
                              <span class="phone">{{ a.phone }}</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="reverse">
                <BottomFixMenu :btnText="'알닷 서비스 이용하기'" @click="nextConfirm" />
                <!-- // bottom_button -->
              </div>
            </div>
          </div>
          <!-- // content -->
        </div>

        <!-- U+알뜰폰 사용 고객 -->
        <AlertV2
          v-model="alertState.check"
          :textData="{
            title: 'U+알뜰폰 사용 고객으로<br />확인되었어요',
            description: '이제 알닷케어 서비스를<br />이용해 보세요',
          }"
          @close="handleClose"
        />
        <!-- // U+알뜰폰 사용 고객 -->
      </div>
    </div>
    <!-- // container -->
  </div>
</template>

<script setup>
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
import AlertV2 from "@/components/v2/common/AlertV2";

import { useRouter } from "vue-router";

const router = useRouter();
const emit = defineEmits(["setLayout"]);
const layout = reactive({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  title: "U+알뜰폰 인증하기",
  floatMenu: "none",
});

// alert
const alertState = ref({
  check: false, // 결제일 동일한 경우
});

const handleClose = () => {
  alertState.value.check = false;
  router.push("/sc/AL-MY-01-001");
};

const updateAllCheckbox = (agree) => {
  if (agree) {
    checkboxSelectValue.value = [0, 1, 2];
  } else {
    checkboxSelectValue.value = [];
  }
};

const updateCheckboxSelectValue = () => {
  // const arrLength = checkboxSelectValue.value.length;
  // const allChecked = arrLength === dataSelectList.value.length;
  // receivePromotions.value = allChecked;
  // if (arrLength === 0) {
  //   updateSnackbarMessage(false);
  // } else if (arrLength === dataSelectList.value.length) {
  //   updateSnackbarMessage(true);
  // }
};

// 회선 목업 데이터
const dataSelectList = ref([
  { selected: true, value: 0, phone: "010-12**-56**" },
  { selected: false, value: 1, phone: "010-12**-65**" },
  { selected: false, value: 2, phone: "010-12**-92**" },
]);
// 24.11.18 수정) 회선 선택 목업
const checkboxSelectValue = ref([0]);
// 회선 선택
// const clickSelectListItem = (v) => {
//   dataSelectList.value.forEach((item) => {
//     item.selected = item === v ? true : false;
//   });

//   console.log(v);
// };

// 발행확인
const nextConfirm = () => {
  alertState.value.check = true;
};

// 개인정보 동의
const btnCertified = ref(true);
const handleTerms = (e) => {
  e.target.checked ? (btnCertified.value = false) : (btnCertified.value = true);
};

// 본인인증하기
const certifiedFlag = ref(false);
const selfCertification = () => {
  certifiedFlag.value = true;
};
onMounted(() => {
  emit("setLayout", layout);
});
</script>
<style lang="scss">
@use "@/assets/scss/pages/sc/page-al-my-00-007.scss" as *;
</style>
