<template>

  <div class="container">
    <div class="content cont_map" id="content" ref="fullH">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <div class="btn_group">
          <button type="button" class="btn lg c01" id="btn_BE02PO00" @click="emit('openPopup', ['BE02PO00', 'btn_BE02PO00', 101]);">Popup Full (응모형 이벤트 팝업)</button>
        </div>

        <div class="btn_group">
          <button type="button" class="btn lg c03" id="btn_BE02PO00A" @click="emit('openAlert', ['BE02PO00A', 'btn_BE02PO00A', 101]);">이미 참여하신 이벤트 (Alert)</button>
        </div>
        <div class="btn_group">
          <button type="button" class="btn lg c03" id="btn_BE02PO00B" @click="emit('openAlert', ['BE02PO00B', 'btn_BE02PO00B', 101]);">개인정보 수집 및 활용 (Alert)</button>
        </div>
        <div class="btn_group">
          <button type="button" class="btn lg c03" id="btn_BE02PO00C" @click="emit('openAlert', ['BE02PO00C', 'btn_BE02PO00C', 101]);">답변 안내 (Alert)</button>
        </div>
      </div> <!-- // section -->
    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['setLayout', 'openPopup', 'openAlert']);
const layout = ref({
  header : 'sub',
  footer : '',
	floatMenu : '',
  title: '모두의 유심, 원칩 이벤트(10월)'
})
onMounted(() => {
  emit('setLayout', layout.value)
})
</script>