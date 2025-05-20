<template>
  <div class="AL-MS-04-008">
    <div class="container">
      <div class="content" id="content">
        <h2 class="title_nav">해외로밍 부가서비스 팝업 리스트</h2>

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
          <ALMS040014 />
        </Popup>

        <Popup
          title="해외 로밍 신청"
          :isOpen="popState.pop1"
          @update:isOpen="popState.pop1 = $event"
          :isPopFooter="false"
          class="pcpopup"
        >
          <ALMS04001401 />
        </Popup>

        <Popup
          title="해외 로밍 신청 완료"
          :isOpen="popState.pop2"
          @update:isOpen="popState.pop2 = $event"
          :isPopFooter="false"
          class="pcpopup"
        >
          <ALMS040015 />
        </Popup>

        <Popup
          title="해외 로밍 해지"
          :isOpen="popState.pop3"
          @update:isOpen="popState.pop3 = $event"
          :isPopFooter="false"
          class="pcpopup"
        >
          <ALMS040016 />
        </Popup>

        <Popup
          title="해외 로밍 해지 완료"
          :isOpen="popState.pop4"
          @update:isOpen="popState.pop4 = $event"
          :isPopFooter="false"
          class="pcpopup"
        >
          <ALMS040017 />
        </Popup>

        <!------------------- // popup  ------------------->

        <div class="section">
          <h3 class="tit02">mobile -</h3>

          <ul>
            <li>
              <NuxtLink to="/ro/AL-MS-04-014" class="btn lg c01">ALMS040014 - 해외로밍 부가서비스(신청전)</NuxtLink>
            </li>
            <li style="margin-top: 11px">
              <NuxtLink to="/ro/AL-MS-04-014_01" class="btn lg c01"
                >ALMS04001401 - 해외로밍 부가서비스(최종정보확인)</NuxtLink
              >
            </li>
            <li style="margin-top: 11px">
              <NuxtLink to="/ro/AL-MS-04-015" class="btn lg c01">ALMS040015 - 해외로밍 부가서비스(정보입력)</NuxtLink>
            </li>
            <li style="margin-top: 11px">
              <NuxtLink to="/ro/AL-MS-04-016" class="btn lg c01">ALMS040016 - 해외로밍 부가서비스(해지전)</NuxtLink>
            </li>
            <li style="margin-top: 11px">
              <NuxtLink to="/ro/AL-MS-04-017" class="btn lg c01">ALMS040017 - 해외로밍 부가서비스(해지완료)</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ALMS040014 from "@/pages/ro/popup/ALMS040014";
import ALMS04001401 from "@/pages/ro/popup/ALMS04001401";
import ALMS040015 from "@/pages/ro/popup/ALMS040015";
import ALMS040016 from "@/pages/ro/popup/ALMS040016";
import ALMS040017 from "@/pages/ro/popup/ALMS040017";

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
  pop4: false,
});

const handlePopup = (popName, val) => {
  popState.value[popName] = val;
};

/*팝업 클릭 목업 버튼*/
const popButtons = ref([
  { name: "ALMS040014 - 해외로밍 부가서비스(신청전)", popState: "pop0" },
  { name: "ALMS040014_01 - 해외로밍 부가서비스(최종정보확인)", popState: "pop1" },
  { name: "ALMS040015 - 해외로밍 부가서비스(가입완료)", popState: "pop2" },
  { name: "ALMS040016 - 해외로밍 부가서비스(해지전)", popState: "pop3" },
  { name: "ALMS040017 - 해외로밍 부가서비스(해지완료)", popState: "pop4" },
]);

onMounted(async () => {
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/ro/page-al-ms-04-014_00.scss" as *;
</style>
