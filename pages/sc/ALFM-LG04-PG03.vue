<template>
  <div class="container single-container">
    <div class="content" id="content">
      <h2 class="title_nav pc_show">{{ layout.title }}</h2>

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
                    <label for="check_consent00_01">만 14세 이상입니다. (필수)</label>
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
                    <label for="check_consent00_02">알닷 홈페이지 이용약관 (필수)</label>
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
                    <label for="check_consent00_03">개인정보수집이용 동의 (필수)</label>
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
                      >알닷케어를 위한 개인정보 제3자 제공동의 (필수)</label
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
                      >고객 혜택 제공을 위한 개인정보 제3자 제공동의 (선택)</label
                    >
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
                <li>
                  <div class="check_st ty02">
                    <input
                      type="checkbox"
                      id="check_consent00_06"
                      name=""
                      v-model="agree[5]"
                      @change="agreeCheck"
                    />
                    <label for="check_consent00_06"
                      >고객 혜택 제공을 위한 정보 수집 및 이용 동의 (선택)</label
                    >
                  </div>
                  <button type="button"><span class="blind">약관 보기</span></button>
                </li>
                <li>
                  <div class="check_st ty02">
                    <input
                      type="checkbox"
                      id="check_consent00_07"
                      name=""
                      v-model="agree[6]"
                      @change="agreeCheck"
                    />
                    <label for="check_consent00_07">혜택정보 · 광고 수신 동의 (선택)</label>
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
                @click="nextConfirm"
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

<script setup>
import BottomFixMenu from "@/components/v2/common/BottomFixMenu";

const emit = defineEmits(["setLayout"]);
const layout = reactive({
  header: "sub",
  footer: "none",
  title: "알닷케어 이용 신청 완료",
  floatMenu: "none",
});

// 약관동의
const agreeAll = ref(false);
const agree = ref([false, false, false, false, false, false, false]);
const next = ref(false);
const snackbar = ref(false);
const timeout = ref(3000);
const message = ref("2024년 10월 22일 알닷(LG U+) 홈페이지의 광고성 수신동의가 완료되었습니다.");

// 동의하고 다음으로
const nextConfirm = () => {
  snackbar.value = true;
  console.log("동의하고 다음으로");
};
const agreeAllChange = () => {
  const status = agreeAll.value;
  agree.value = agree.value.map((a) => (a = status));
};
const agreeCheck = () => {
  const agreeChk = agree.value.filter((a) => a == true);
  agreeAll.value = agreeChk.length == agree.value.length ? true : false;
};

watch(
  agree,
  (a) => {
    next.value = a.slice(0, 4).every(Boolean);
  },
  { deep: true }
);

onMounted(() => {
  emit("setLayout", layout);
});

// export default {
//   name: "ALFM-LG04-PG03",
//   emits: ["setLayout", "openPopup"],
//   data() {
//     return {
//       layout: { header: "sub2", footer: "none", floatMenu: "none", title: "이용약관 동의" },
//       agreeAll: false,
//       agree: [false, false, false, false],
//       next: false,
//       snackbar: false,
//       timeout: 3000,
//       message: "2024년 00월 00일 알뜰폰닷컴 홈페이지의 광고성 수신동의가 완료되었습니다.",
//     };
//   },
//   watch: {
//     agree: {
//       handler(a) {
//         if (!a[0] || !a[1]) this.next = false;
//         if (a[0] && a[1]) this.next = true;
//       },
//       deep: true,
//     },
//   },
//   methods: {
//     agreeAllChange() {
//       const status = this.agreeAll;
//       this.agree = this.agree.map((a) => (a = status));
//     },
//     agreeCheck() {
//       const agreeChk = this.agree.filter((a) => a == true);
//       this.agreeAll = agreeChk.length == this.agree.length ? true : false;
//     },
//   },
//   mounted() {
//     this.$emit("setLayout", this.layout);
//   },
// };
</script>
