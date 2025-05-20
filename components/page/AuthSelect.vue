<template>
  <div class="auth_info">
    <!-- Default – 신규가입 문구 -->
    <div v-if="props.newSign" class="page_info">연락 가능한 휴대폰 번호를 <br>입력해 주세요.</div>
    <!-- 번호이동 문구 -->
    <div v-else class="page_info">번호이동 인증을 진행해 주세요.</div>
    
    <div class="form_wrap">
      <div v-if="isAuthShow" class="form_group">
        <strong class="form_label">통신사</strong>

        <div class="item_list03">
          <ul>
            <li v-for="(a, i) in [
              { checked:false, id:'item_select_01', value:'LG U+' },
              { checked:false, id:'item_select_02', value:'SKT' },
              { checked:false, id:'item_select_03', value:'KT' },
              { checked:false, id:'item_select_04', value:'LG U+ 알뜰폰' },
              { checked:false, id:'item_select_05', value:'SKT 알뜰폰' },
              { checked:false, id:'item_select_06', value:'KT 알뜰폰' },
              { checked:false, id:'item_select_07', value:'없음' },
            ]" :key="i">
              <div class="radio_item ty01">
                <input type="radio" :id="a.id" name="filter_radio01" :value="a.id" v-bind:checked="a.checked" v-model="ALFMPR03PG11">
                <label :for="a.id">{{ a.value }}</label>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="form_group" v-if="etcTelecom">
        <strong class="form_label">알뜰폰 통신사</strong>
        <div class="form_item">
          <button type="button" class="btn_select" ref="btn_MVNO" @click="$refs.MVNO.open">선택</button>
        </div>
        <PopupSelect ref="MVNO" :option="{ data:'MVNO2', popupTitle:'알뜰폰 통신사 선택', targetBtn:'btn_MVNO' }" @selectItem="console.log($event)" />
      </div>

      <div class="form_group">
        <strong class="form_label">휴대폰 번호</strong>
        <div class="form_item">
          <InputBox :option="handleOption" @inputValue="console.log($event)" />
        </div>
        <div class="error">휴대폰 번호를 입력해주세요</div>
      </div>
    </div>
    
    <div class="btn_group">
      <button type="button" class="btn lg c03" disabled @click="emit('openAlert', ['PR03PO06', 'btn_PR03PO06', 101]);">사전 인증하기</button>
    </div>
    <ul class="text_list bull">
      <li>번호이동 사전 동의를 요청하였습니다. 휴대폰으로 발송된 문자메시지를 확인하여 사전동의를 진행해 주세요.</li>
      <li>문자메시지가 도착하지 않았다면 현재 사용중인 통신사에 문의하셔서 ARS로 사전동의를 진행해 주세요.</li>
    </ul>
  </div>
</template>

<script setup>
/**
 *
 * @param {*} props
 * newSign: 신규 또는 번호이동 조건
 * @returns
 */
import { ref } from "vue"

const emit = defineEmits(['openPopup', 'openAlert']);
const props = defineProps({
  newSign: {
    type: Boolean,
    require: false,
    default: false,
  },
  isAuthShow: {
    type: Boolean,
    require: false,
    default: true,
  },
  handleOption: {
    type: Object,
    require: false,
    default: () => {},
  }
});

const ALFMPR03PG11 = ref('');
const etcTelecom = ref(false);

watch(ALFMPR03PG11, (a) => {
  etcTelecom.value = ( a == 'item_select_04' || a == 'item_select_05' || a == 'item_select_06' ) ? true : false;
})
</script>
