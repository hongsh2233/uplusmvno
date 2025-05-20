<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">
        알닷 서비스의<br class="pc_hide" />
        약관/방침을 읽고 동의해주세요
      </div>

      <div class="section">
        <div class="terms_consent">
          <div class="cst_box check_st">
            <input
              type="checkbox"
              id="check_all"
              name="all"
              v-model="agreeAll"
              @change="agreeAllChange"
            />
            <label for="check_all"><b>전체 약관에 모두 동의합니다.</b></label>
          </div>

          <div class="cst_list list01">
            <div class="cst_panel">
              <ul>
                <li>
                  <div class="check_st ty02">
                    <input
                      type="checkbox"
                      id="check_consent00_01"
                      name=""
                      v-model="agree[0]"
                      @change="agreeCheck"
                    />
                    <label for="check_consent00_01">알닷 홈페이지 이용약관 (필수)</label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
                <li>
                  <div class="check_st ty02">
                    <input
                      type="checkbox"
                      id="check_consent00_02"
                      name=""
                      v-model="agree[1]"
                      @change="agreeCheck"
                    />
                    <label for="check_consent00_02">개인정보수집이용 동의 (필수)</label>
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
                <li>
                  <div class="check_st ty02">
                    <input
                      type="checkbox"
                      id="check_consent00_03"
                      name=""
                      v-model="agree[2]"
                      @change="agreeCheck"
                    />
                    <label for="check_consent00_03"
                      >고객 혜택 제공을 위한 개인정보 제3자 제공동의 <span>(선택)</span></label
                    >
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
                <li>
                  <div class="check_st ty02">
                    <input
                      type="checkbox"
                      id="check_consent00_04"
                      name=""
                      v-model="agree[3]"
                      @change="agreeCheck"
                    />
                    <label for="check_consent00_04"
                      >고객 혜택 제공을 위한 정보 수집 및 이용 동의 <span>(선택)</span></label
                    >
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
                <li>
                  <div class="check_st ty02">
                    <input
                      type="checkbox"
                      id="check_consent00_05"
                      name=""
                      v-model="agree[4]"
                      @change="agreeCheck"
                    />
                    <label for="check_consent00_05"
                      >혜택정보 · 광고 수신 동의 <span>(선택)</span></label
                    >
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- // terms_consent -->
      </div>
      <!-- // section -->
      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button
                type="button"
                role="button"
                class="btn lg c01"
                @click="snackbar = true"
                v-bind:disabled="!next"
              >
                동의하고 다음으로
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- // bottom_float -->

      <!-- toast message 추가 23/11/16 -->
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ message }}
      </v-snackbar>
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits(["setLayout"]);
const layout = reactive({
  header: "sub2",
  footer: "none",
  title: "이용약관 동의",
  floatMenu: "none",
});

const agreeAll: Ref<boolean> = ref(false);
const agree: Ref<boolean[]> = ref([false, false, false, false, false]);
const next: Ref<boolean> = ref(false);
const snackbar: Ref<boolean> = ref(false);
const timeout: Ref<number> = ref(3000);
const message: Ref<string> = ref(
  "2024년 00월 00일 알뜰폰닷컴 홈페이지의 광고성 수신동의가 완료되었습니다."
);

// watch를 사용하여 agree 배열의 변화를 감지
watch(
  agree,
  (newVal) => {
    if (!newVal[0] || !newVal[1]) {
      next.value = false;
    } else {
      next.value = true;
    }
  },
  { deep: true }
);

// 전체 동의 상태 변경
function agreeAllChange() {
  const status = agreeAll.value;
  agree.value = agree.value.map(() => status);
}

// 개별 동의 상태에 따른 전체 동의 상태 업데이트
function agreeCheck() {
  const agreeChk = agree.value.filter((a) => a === true);
  agreeAll.value = agreeChk.length === agree.value.length;
}
onMounted(() => {
  emit("setLayout", layout);
});
</script>
