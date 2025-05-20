<template>
  <div class="AL-MS-ALERT-LIST">
    <div class="container">
      <div class="content" id="content">
        <h2 class="title_nav">해외로밍 ALERT 리스트</h2>
        <div class="section">
          <h2 class="ro-sec-title mgt0">해외로밍 인증</h2>
          <ul class="alert-list">
            <li v-for="(item, index) in buttonName02" :key="index">
              <button class="btn xsm" @click="handleAlert(item.alertName, true)">{{ item.txt }}</button>
            </li>
          </ul>
          <h2 class="ro-sec-title mgt10">해외로밍 신청</h2>
          <ul class="alert-list">
            <li v-for="(item, index) in buttonName" :key="index">
              <button class="btn xsm" @click="handleAlert(item.alertName, true)">{{ item.txt }}</button>
            </li>
          </ul>
        </div>
        <div class="section">
          <!-- 인증성공  -->
          <AlertV2
            v-model="alertState.fail7"
            :textData="{
              title: 'U<sup>+</sup>알뜰폰 사용 고객으로<br/>확인되었어요',
              description: '이제 알닷 서비스를<br/>이용해 보세요',
            }"
            :confirm="false"
            :buttonText="{ cancel: '확인', confirm: '고객센터 연결' }"
            @close="handleClose"
            @proceed="handleProceed"
          />
          <!--// 인증성공 -->

          <!-- 오류팝업 - 웹회원인 경우 -->
          <AlertV2
            v-model="alertState.fail0"
            :textData="{
              title: '해외로밍 서비스는 U<sup>+</sup>알뜰폰<br/>사용 고객만 이용 가능해요',
              description: 'U<sup>+</sup>알뜰폰이 있다면,<br/>회원인증하고 알닷을 이용하세요',
            }"
            :confirm="true"
            :buttonText="{ cancel: '취소', confirm: 'U+알뜰폰 인증하기' }"
            @close="handleClose"
            @proceed="handleProceed"
          />
          <!--// 오류팝업 - 웹회원인 경우 -->

          <!-- 오류팝업 - 가입 불가 파트너사일 경우  -->
          <AlertV2
            v-model="alertState.fail1"
            :textData="{
              title: '가입하신 파트너사의 회선은<br/>로밍 서비스를 이용할 수 없어요.',
              // description: '초과하는 경우 <br/>아래 고객센터로 연락해 주세요',
            }"
            :confirm="front.isMobile() ? true : false"
            :buttonText="{ cancel: front.isMobile() ? '닫기' : '확인', confirm: '고객센터 연결' }"
            @close="handleClose"
            @proceed="handleProceed"
          >
            <dl class="brand-phone">
              <div>
                <dt>에스원안심모바일</dt>
                <dd>
                  114(자사 휴대폰 무료)<br />
                  02-2275-0068(유료)
                </dd>
              </div>
            </dl>
          </AlertV2>
          <!--// 오류팝업 - 가입 불가 파트너사일 경우 -->

          <!-- 오류팝업 - 미성년자 회원인 경우  -->
          <AlertV2
            v-model="alertState.fail2"
            :textData="{
              title: '만 19세 미만 고객은<br/>해외로밍을 신청할 수 없어요',
              description: '고객센터로 연락 주시면<br/>전문 상담사가 도와드릴게요',
            }"
            :confirm="front.isMobile() ? true : false"
            :buttonText="{ cancel: front.isMobile() ? '닫기' : '확인', confirm: '고객센터 연결' }"
            @close="handleClose"
            @proceed="handleProceed"
          >
            <dl class="brand-phone">
              <div>
                <dt>에스원안심모바일</dt>
                <dd>
                  114(자사 휴대폰 무료)<br />
                  02-2275-0068(유료)
                </dd>
              </div>
            </dl>
          </AlertV2>
          <!--// 오류팝업 - 미성년자 회원인 경우 -->

          <!-- 오류팝업 - 선불 회원인 경우  -->
          <AlertV2
            v-model="alertState.fail3"
            :textData="{
              title: '선불 요금제 고객은<br/>가입할 수 없어요',
              // description: '고객센터로 연락 주시면<br/>전문 상담사가 도와드릴게요',
            }"
            :confirm="false"
            :buttonText="{ cancel: '확인', confirm: '고객센터 연결' }"
            @close="handleClose"
            @proceed="handleProceed"
          />
          <!--// 오류팝업 - 선불 회원인 경우 -->

          <!-- 오류팝업 - 중복 가입자인 경우1 -->
          <AlertV2
            v-model="alertState.fail4"
            :textData="{
              title: '현재 이용 중인 로밍 요금제가 있어요<br/>중복 가입은 불가능해요',
              description: 'U<sup>+</sup>알뜰폰이 있다면,<br/>회원인증하고 알닷을 이용하세요',
            }"
            :confirm="true"
            :buttonText="{ cancel: '확인', confirm: '해지하러 가기' }"
            @close="handleClose"
            @proceed="handleProceed"
          >
            <dl class="brand-phone">
              <div>
                <dt>이용 중인 요금제</dt>
                <dd>로밍패스 9GB</dd>
              </div>
            </dl>
          </AlertV2>
          <!--// 오류팝업 - 중복 가입자인 경우1 -->

          <!-- 오류팝업 - 중복 가입자인 경우2  -->
          <AlertV2
            v-model="alertState.fail5"
            :textData="{
              title:
                '로밍 요금제 신청 시,<br/>이용중인 일부 부가서비스가<br/>자동 해지됩니다<br/>로밍 요금제 신청을 계속 하시겠어요?',
              description: '로밍 요금제 이용 시작일이 아닌,<br/>신청 완료 후 즉시 해지됩니다',
            }"
            :confirm="true"
            :buttonText="{ cancel: '확인', confirm: '신청 계속하기' }"
            @close="handleClose"
            @proceed="handleProceed"
          >
            <dl class="brand-phone">
              <div>
                <dt>로밍 요금제 가입 시 자동 해지 부가서비스</dt>
                <dd>
                  유심보호서비스<br />
                  데이터로밍차단<br />
                  음성로밍차단
                </dd>
              </div>
            </dl>
          </AlertV2>
          <!--// 오류팝업 - 중복 가입자인 경우2 -->

          <!-- 해지 불가  -->
          <AlertV2
            v-model="alertState.fail6"
            :textData="{
              title: '해지에 실패했어요',
              description:
                '[로밍패스 3GB] 요금제는<br/>가입 당일에 해지가 불가능해요<br/><br/>가입 다음날 ‘알닷케어 > 사용현황 >로밍<br/>이용 내역’에서 해지해 주세요',
            }"
            :confirm="false"
            :buttonText="{ cancel: '확인', confirm: '고객센터 연결' }"
            @close="handleClose"
            @proceed="handleProceed"
          />
          <!--// 해지 불가 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AlertV2 from "@/components/v2/common/AlertV2";

import { ref } from "vue";

const emit = defineEmits(["setLayout"]);
const layout = ref({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "해외 로밍 신청",
  wrapClass: "selfcare roaming",
});

// alert
const alertState = ref({
  fail0: false, // 오류팝업 - 웹회원인 경우
  fail1: false, // 오류팝업 - 가입 불가 파트너사일 경우
  fail2: false, // 오류팝업 - 미성년자 회원인 경우
  fail3: false, // 오류팝업 - 선불 회원인 경우
  fail4: false, // 오류팝업 - 중복 가입자인 경우1
  fail5: false, // 오류팝업 - 중복 가입자인 경우2
  fail6: false, // 해지 불가
  fail7: false, // 인증성공
});

//alert 화면 검수용 목업
const buttonName = [
  { txt: "오류팝업 - 웹회원인 경우", alertName: "fail0" },
  { txt: "오류팝업 - 가입 불가 파트너사일 경우", alertName: "fail1" },
  { txt: "오류팝업 - 미성년자 회원인 경우", alertName: "fail2" },
  { txt: "오류팝업 - 선불 회원인 경우", alertName: "fail3" },
  { txt: "오류팝업 - 중복 가입자인 경우1", alertName: "fail4" },
  { txt: "오류팝업 - 중복 가입자인 경우2", alertName: "fail5" },
  { txt: "해지 불가", alertName: "fail6" },
];
const buttonName02 = [{ txt: "인증성공", alertName: "fail7" }];

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

onMounted(async () => {
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/abstract/_mixin.scss" as *;
//퍼블리싱 가이드 스타일
.AL-MS-ALERT-LIST {
  .content {
    min-height: 100vh;
  }
  .alert-list {
    display: flex;
    flex-wrap: wrap;
    gap: rem(8) rem(20);

    .btn {
      color: #555;
      &:hover {
        border: 1px solid #fc6969;
        color: #000;
      }
    }
  }
}
</style>
