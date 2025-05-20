<template>
  <div class="AL-MS-04-005">
    <div class="container">
      <div class="content" id="content">
        <h2 class="title_nav">해외로밍 신청 변경 팝업 리스트</h2>

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
          title="해외 로밍 변경"
          :isOpen="popState.pop0"
          @update:isOpen="popState.pop0 = $event"
          :isPopFooter="false"
          class="pcpopup"
        >
          <ALMS0400601 />
        </Popup>

        <Popup
          title="해외 로밍 변경"
          :isOpen="popState.pop1"
          @update:isOpen="popState.pop1 = $event"
          :isPopFooter="false"
          class="pcpopup"
        >
          <ALMS0400602 />
        </Popup>

        <Popup
          title="해외 로밍 변경"
          :isOpen="popState.pop2"
          @update:isOpen="popState.pop2 = $event"
          :isPopFooter="false"
          class="pcpopup"
        >
          <ALMS0400603 />
        </Popup>

        <Popup
          title="해외 로밍 변경 완료"
          :isOpen="popState.pop3"
          @update:isOpen="popState.pop3 = $event"
          :isPopFooter="false"
          class="pcpopup"
        >
          <ALMS0400604 />
        </Popup>
        <!------------------- // popup  ------------------->

        <div class="section">
          <h3 class="tit02">mobile -</h3>

          <ul>
            <li>
              <NuxtLink to="/ro/AL-MS-04-006-01" class="btn lg c01">ALMS0400601 - 해외로밍 변경(변경전)</NuxtLink>
            </li>
            <li style="margin-top: 11px">
              <NuxtLink to="/ro/AL-MS-04-006-02" class="btn lg c01">ALMS0400601 - 해외로밍 변경(정보입력)</NuxtLink>
            </li>
            <li style="margin-top: 11px">
              <NuxtLink to="/ro/AL-MS-04-006-03" class="btn lg c01">ALMS0400602 - 해외로밍 변경(최종정보확인)</NuxtLink>
            </li>
            <li style="margin-top: 11px">
              <NuxtLink to="/ro/AL-MS-04-006-04" class="btn lg c01">ALMS0400603 - 해외로밍 변경(변경완료)</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ALMS0400601 from "@/pages/ro/popup/ALMS0400601";
import ALMS0400602 from "@/pages/ro/popup/ALMS0400602";
import ALMS0400603 from "@/pages/ro/popup/ALMS0400603";
import ALMS0400604 from "@/pages/ro/popup/ALMS0400604";

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
  { name: "ALMS0400601 - 해외로밍 변경(변경전)", popState: "pop0" },
  { name: "ALMS0400602 - 해외로밍 변경(정보입력)", popState: "pop1" },
  { name: "ALMS0400603 - 해외로밍 변경(최종정보확인)", popState: "pop2" },
  { name: "ALMS0400604 - 해외로밍 변경(변경완료)", popState: "pop3" },
]);

onMounted(async () => {
  emit("setLayout", layout);
});
</script>

<style lang="scss">
@use "@/assets/scss/pages/ro/page-al-ms-04-005.scss" as *;
</style>
