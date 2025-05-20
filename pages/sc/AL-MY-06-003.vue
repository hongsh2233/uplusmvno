<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <ALMY06003 />

      <!-- 24.12.12 꼭 알아두세요 위치 변경 (AL-MY-06-003 -> ALMY06003 )-->
      <!-- <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
        <template #content>
          <ul class="text-list bull">
            <li>분실정지는 월 2회까지 가능합니다.</li>
            <li>분실 등록을 하면 자동적으로 휴대폰이 일시정지되어 발신이 금지됩니다. (단, 발신/수신 모두 정지 신청하신 경우, 문자/통화 등의 수신이 불가합니다.)</li>
            <li>분실 등록을 악용하여 무료 통화 등을 하는 경우 정상 요금이 청구되며 법적 책임을 물을 수 있습니다.</li>
            <li>분실 등록 후 일시정지를 하지 않으면 휴대폰 기본료가 그대로 청구됩니다.</li>
            <li>분실폰에 문자 보내기 선택 시, 분실된 휴대폰 습득자로부터 연락을 받을 수 있도록 문자 메시지가 발송됩니다.</li>
            <li>일시정지를 설정하는 경우 부가세 포함 기본요금이 청구됩니다.</li>
            <li>월 중간에 일시정지를 설정하는 경우 설정 이전까지는 이용 중인 요금제의 기본요금을 사용 일수만큼 청구하고, 정지 기간 중에는 부가세 포함 기본요금을 사용 일수만큼 청구합니다.</li>
            <li>일시정지 신청 이후 30일 동안은 수신이 가능하므로, 타인의 수신자 부담 이용에 의해 요금이 부과될 수 있습니다. 이를 방지하려면 ‘수신 금지’도 함께 신청하세요.</li>
            <li>연체 요금이 있는 경우 홈페이지를 통한 일시정지 해제가 불가능합니다. 고객센터로 문의해 주세요.</li>
            <li>일시정지 해제 후, 단문 메시지 수신 차단 서비스를 이용하는 고객은 별도로 해제가 필요합니다.</li>
            <li>휴대폰 분실신고 시 타 사용자의 USIM 사용은 불가합니다. (USIM 분실 등록은 고객센터로 문의 바랍니다.)</li>
          </ul>
        </template>
      </Accodian> -->
      <!-- //24.12.12 꼭 알아두세요 위치 변경 (AL-MY-06-003 -> ALMY06003 )-->
    </div>
  </div>
</template>

<script setup>
// import Accodian from "@/components/v2/common/Accodian";
import ALMY06003 from "@/components/v2/pages/lost-device/ALMY06003";
import { useRouter } from "vue-router";

const router = useRouter();

// 헤더 정보
const layout = ref({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "휴대폰(유심) 분실 등록",
});

// HOOK
const emit = defineEmits(["setLayout"]);

onMounted(() => {
  if (front.isMobile()) {
    emit("setLayout", layout);
  } else {
    router.push("/sc/AL-MY-06-002");
  }
});
</script>
