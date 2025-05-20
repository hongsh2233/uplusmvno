<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{ type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">가입대상을 <br />선택해 주세요</div>

      <div class="section">
        <RadioActive
          :data="{
            option: { type: 'ty03', itemList: 1 },
            data: [
              {
                checked: false,
                id: 'ty_list_01_01',
                value: '일반',
                info: '만 19세 이상의 성인이에요',
              },
              {
                checked: false,
                id: 'ty_list_01_02',
                value: '미성년자',
                info: '만 19세 미만의 자녀를 가입시키고 싶어요',
              },
              {
                checked: false,
                id: 'ty_list_01_03',
                value: '외국인(Foreigner)',
                info: '외국인 번호가 있어요',
              },
              {
                checked: false,
                id: 'ty_list_01_04',
                value: '<span>외국인 미성년자</span><span>(Foreigner Minors)</span>',
                info: '만 19세 미만의 외국인 자녀를 가입시키고 싶어요',
              },
            ],
          }"
          @checkItem="handleCheckItem"
        />

        <div v-if="userFlag === '미성년자'" class="box_gray mgt20">
          <p class="txt-orange">
            <strong>미성년자 가입 신청의 경우 아래와 같은 정보가 추가로 필요합니다.</strong>
          </p>
          <ul class="text_list bull">
            <li>법정 대리인의 본인 인증</li>
            <li>법정 대리인의 신분증 정보 (주민등록증 또는 운전면허증)</li>
            <li>법정 대리인(보호자)의 납부 계좌 또는 신용카드</li>
          </ul>
        </div>
        <div v-if="userFlag === '외국인'" class="box_gray mgt20">
          <p class="txt-orange">
            <strong>외국인 가입 신청의 경우 아래와 같은 정보가 추가로 필요합니다.</strong>
          </p>
          <ul class="text_list bull">
            <li>외국인의 본인 인증</li>
          </ul>
        </div>
        <div v-if="userFlag === '외국인 미성년자'" class="box_gray mgt20">
          <p class="txt-orange">
            <strong>외국인 미성년자 가입 신청의 경우 아래와 같은 정보가 추가로 필요합니다.</strong>
          </p>
          <ul class="text_list bull">
            <li>외국인 법정 대리인의 본인 인증</li>
            <li>법정 대리인(보호자)의 납부 계좌 또는 신용카드</li>
          </ul>
        </div>
      </div>
      <!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c02" v-bind:disabled="prev == false">
                이전으로
              </button>
              <button type="button" class="btn lg c01" v-bind:disabled="next == false">
                다음으로
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- // bottom_float -->
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits(["setLayout"]);
const layout = reactive({
  header: "sub",
  footer: "none",
  title: "가입대상 선택",
  floatMenu: "none",
});

// 이전, 인증하기 버튼
const prev: Ref<boolean> = ref(true);
const next: Ref<boolean> = ref(false);
const checked: Ref<string> = ref("");
const userFlag: Ref<string> = ref("");

watch(checked, (newVal, oldVal) => {
  next.value = true;
});

function userSwitch(e: string) {
  switch (e) {
    case "ty_list_01_01":
      userFlag.value = "일반";
      break;
    case "ty_list_01_02":
      userFlag.value = "미성년자";
      break;
    case "ty_list_01_03":
      userFlag.value = "외국인";
      break;
    case "ty_list_01_04":
      userFlag.value = "외국인 미성년자";
      break;
    default:
      userFlag.value = "일반";
  }
}

function handleCheckItem(e: string) {
  next.value = true;
  checked.value = e;
  userSwitch(e);
}

onMounted(() => {
  emit("setLayout", layout);
});
</script>
