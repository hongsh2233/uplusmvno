<template>
  <div class="AL-MS-04-005">
    <div class="container">
      <div class="content" id="content">
        <h2 class="title_nav">해외로밍 신청 팝업 리스트</h2>

        <div class="section">
          <h3 class="tit02">pc -</h3>

          <ul>
            <li v-for="(pop, idx) in popButtons" :key="idx" style="margin-top: 11px">
              <button ref="partnerName" class="btn-rounded" @click="handlePopup(pop.popState, true)">
                {{ pop.name }}
              </button>
            </li>
          </ul>
        </div>

        <!------------------- popup ------------------->
        <Popup
          title="해외 로밍 신청"
          :isOpen="popState.pop0"
          @update:isOpen="popState.pop0 = $event"
          :isPopFooter="false"
          class="pcpopup"
        >
          <ALMS0400501 />
        </Popup>

        <Popup
          title="해외 로밍 신청"
          :isOpen="popState.pop1"
          @update:isOpen="popState.pop1 = $event"
          :isPopFooter="false"
          class="pcpopup"
        >
          <ALMS0400502 />
        </Popup>

        <Popup
          title="해외 로밍 신청"
          :isOpen="popState.pop2"
          @update:isOpen="popState.pop2 = $event"
          :isPopFooter="false"
          class="pcpopup"
        >
          <ALMS0400503 />
        </Popup>

        <Popup
          title="해외 로밍 신청 완료"
          :isOpen="popState.pop3"
          @update:isOpen="popState.pop3 = $event"
          :isPopFooter="false"
          class="pcpopup"
        >
          <ALMS0400504 />
        </Popup>

        <!------------------- // popup  ------------------->

        <div class="section">
          <h3 class="tit02">mobile -</h3>

          <ul>
            <li>
              <NuxtLink to="/ro/AL-MS-04-005-01" class="btn lg c01">ALMS0400501 - 해외로밍 신청(신청전)</NuxtLink>
            </li>
            <li style="margin-top: 11px">
              <NuxtLink to="/ro/AL-MS-04-005-02" class="btn lg c01">ALMS0400502 - 해외로밍 신청(정보입력)</NuxtLink>
            </li>
            <li style="margin-top: 11px">
              <NuxtLink to="/ro/AL-MS-04-005-03" class="btn lg c01">ALMS0400503 - 해외로밍 신청(최종정보확인)</NuxtLink>
            </li>
            <li style="margin-top: 11px">
              <NuxtLink to="/ro/AL-MS-04-005-04" class="btn lg c01">ALMS0400504 - 해외로밍 신청(가입완료)</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ALMS0400501 from "@/pages/ro/popup/ALMS0400501";
import ALMS0400502 from "@/pages/ro/popup/ALMS0400502";
import ALMS0400503 from "@/pages/ro/popup/ALMS0400503";
import ALMS0400504 from "@/pages/ro/popup/ALMS0400504";

import Popup from "@/components/v2/common/Popup";

import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const emit = defineEmits(["setLayout"]);
const layout = ref({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "해외 로밍 신청",
  wrapClass: "selfcare roaming",
});

/*팝업 상태 관리  */
const popState = ref({
  pop0: false,
  pop1: false, // 번호 변경
  pop2: false,
  pop3: false,
});

const handlePopup = (popName, val) => {
  popState.value[popName] = val;
};

/*팝업 클릭 목업 버튼*/
const popButtons = ref([
  { name: "ALMS0400501 - 해외로밍 신청(신청전)", popState: "pop0" },
  { name: "ALMS0400502 - 해외로밍 신청(정보입력)", popState: "pop1" },
  { name: "ALMS0400503 - 해외로밍 신청(최종정보확인)", popState: "pop2" },
  { name: "ALMS0400504 - 해외로밍 신청(가입완료)", popState: "pop3" },
]);

onMounted(async () => {
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/ro/page-al-ms-04-005.scss" as *;
</style>
