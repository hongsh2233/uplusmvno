<template>
  <div class="container">
    <div class="content cont_map" id="content" ref="fullH">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <div class="btn_group">
          <button
            type="button"
            class="btn lg c01"
            id="btn_BE02PO01"
            @click="emit('openPopup', ['BE02PO01', 'btn_BE02PO01', 101])"
          >
            메인 > 이벤트 혜택 > 이벤트 상세 (신규 버튼 유형 생성- 신규 인터넷 상담)
          </button>
        </div>

        <div class="btn_group">
          <button
            type="button"
            class="btn lg c03"
            id="btn_BE02PO01A"
            @click="emit('openAlert', ['BE02PO01A', 'btn_BE02PO01A', 101])"
          >
            메인 > 이벤트 혜택 > 이벤트 상세 (신규 버튼 유형 생성- 신규 인터넷 상담) (Alert)
          </button>
        </div>

        <div class="btn_group">
          <button
            type="button"
            class="btn lg c01"
            id="btn_BE02PO02"
            @click="emit('openPopup', ['BE02PO02', 'btn_BE02PO02', 101])"
          >
            메인 > 이벤트 혜택 > 이벤트 상세 (신규 버튼 유형 생성- 인터넷 결합 상담)
          </button>
        </div>

        <div class="btn_group">
          <button
            type="button"
            class="btn lg c03"
            id="btn_BE02PO01B"
            @click="emit('openAlert', ['BE02PO01B', 'btn_BE02PO01B', 101])"
          >
            메인 > 이벤트 혜택 > 이벤트 상세 (신규 버튼 유형 생성- 인터넷 결합 상담) (Alert)
          </button>
        </div>
      </div>
      <!-- // section -->
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script setup>
import { ref, onMounted } from "vue";

const emit = defineEmits(["setLayout", "openPopup", "openAlert"]);
const layout = ref({
  header: "sub",
  footer: "",
  floatMenu: "",
  title: "인터넷 상담 팝업 제작",
});
onMounted(() => {
  emit("setLayout", layout.value);
});
</script>
