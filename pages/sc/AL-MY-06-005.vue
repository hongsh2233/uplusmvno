s
<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <ALMY06005 />

      <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
        <template #content>
          <p class="text-list-tit">모바일 일시정지 신청 및 변경</p>
          <ul class="text-list bull">
            <li>일시정지는 1년 2회이며, 이용 기간은 총 180일까지입니다.</li>
            <li>
              일시정지를 신청하면 최초 30일 동안은 음성통화 수신과 음성사서함 이용만 가능합니다.
            </li>
            <li>일시정지 서비스를 이용하면 부가세 포함 기본 요금이 부과됩니다.</li>
            <li>
              이용 중이던 요금제의 기본료는 일시 정지하기 전까지 사용 한 일자에 따라 계산됩니다.
            </li>
            <li>
              일시정지 중에는 이용 중인 요금제와 부가 서비스를 변경할 수 없으며, 해당 요금도
              발행하지 않습니다.
            </li>
            <li>
              일시정지 기간에도 수신자 부담 전화를 받는 경우 요금이 발생할 수 있습니다. 원치 않으면
              ‘수신 금지’ 서비스를 함께 신청하세요.
            </li>
            <li>
              휴대폰 분실 등록을 한 뒤 일시정지를 하지 않으면 이용 중이던 요금이 그대로 발생됩니다.
            </li>
          </ul>
          <p class="text-list-tit">모바일 일시정지 해제</p>
          <ul class="text-list bull">
            <li>
              요금이 연체된 경우, 홈페이지에서는 일시정지를 해제할 수 없습니다. 고객센터로
              문의하세요.
            </li>
            <li>일시정지를 해제하면 수신 금지 기능도 해제됩니다.</li>
            <li>
              일시정지가 해제되는 달에는 부가세 포함 월 4,400원의 요금이 일시정지 기간만큼
              계산됩니다.
            </li>
            <li>일시정지를 해제한 다음 달에는 가입한 요금제의 월 정액이 정상 청구됩니다.</li>
          </ul>
        </template>
      </Accodian>
    </div>
  </div>
</template>

<script setup>
import Accodian from "@/components/v2/common/Accodian";
import ALMY06005 from "@/components/v2/pages/lost-device/ALMY06005";

// 헤더 정보
const layout = ref({
  header: "sub",
  footer: "none",
  floatMenu: "none",
  title: "일시정지 신청",
});

// HOOK
import { useRouter } from "vue-router";
const router = useRouter();
const emit = defineEmits(["setLayout"]);

onMounted(() => {
  if (front.isMobile()) {
    emit("setLayout", layout);
  } else {
    router.push("/sc/AL-MY-06-004");
  }
});
</script>
