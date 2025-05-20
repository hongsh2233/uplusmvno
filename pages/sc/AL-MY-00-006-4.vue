<template>
  <div class="container">
    <div class="content" id="content">
      <template v-if="front.isMobile()">
        <h2 class="title_nav">{{ layout.title }}</h2>

        <ALMY000064 />
      </template>
      <Popup
        v-else
        :title="'알닷케어 이용 신청 완료'"
        :isOpen="isConfirm"
        :isPopFooter="false"
        @update:isOpen="isConfirm = $event"
        class="pcpopup"
      >
        <ALMY000064 @confirm="clickConfirm" />
      </Popup>
    </div>
  </div>
  <!-- // container -->
</template>

<script setup>
import Popup from "@/components/v2/common/Popup";

import ALMY000064 from "@/components/v2/pages/common/ALMY000064";

const emit = defineEmits(["setLayout"]);

const layout = reactive({
  header: "sub",
  footer: "none",
  title: "알닷케어 이용 신청 완료",
  floatMenu: "none",
});

// web에서 확인 버튼
const isConfirm = ref(true);
const clickConfirm = () => {
  isConfirm.value = false;
  console.log("확인");
};

onMounted(() => {
  if (front.isMobile()) {
    emit("setLayout", layout);
  }
});
</script>
