<template>
  <div>
    <Transition name="popupFull">
      <div class="pop_layer full" ref="termsFlag" v-if="termsFlag">
        <div class="pop_wrap" tabindex="0">
          <div class="pop_header">
            <h3>신분증 정보 입력</h3>
          </div>
          <div class="pop_content">
            <div class="page_info mgb0">
              신분증 정보를<br class="pc_hide" />
              입력해 주세요
            </div>

            <div class="section">
              <span class="sub">부정가입 방지를 위한 과정이에요.</span>

              <div class="form_wrap">
                <div class="form_group">
                  <strong class="form_label">Country/Region</strong>
                  <div class="form_item" :class="{ val_chk: errorFlag }">
                    <button
                      type="button"
                      class="btn_select"
                      ref="btn_payType"
                      @click="handlePayType"
                    >
                      선택
                    </button>
                  </div>
                  <div class="error">Please enter your Country / Region correctly.</div>
                </div>
              </div>
            </div>

            <div class="section ty03">
              <div class="form_wrap">
                <div class="btn_group_spac">
                  <div class="btn_group">
                    <button type="button" class="btn md c03">인증하기</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pop_footer">
            <div class="btn_group">
              <button type="button" class="btn md c03" @click="submitSelected">확인</button>
            </div>
          </div>
          <button type="button" class="pop_close" @click="closePopup">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
      </div>
    </Transition>

    <PopupSelect
      ref="nation"
      :option="{
        popupTitle: 'Country/Region',
        targetBtn: 'btn_payType',
        listView: 'card',
      }"
      @selectItem="selectItem = $event.value"
      class="none-ani"
    >
      <div class="item_list02">
        <ul>
          <li v-for="(a, i) in mockNationData" :key="i">
            <div class="radio_item ty01">
              <input
                type="radio"
                :id="a.id"
                name="filter_radio01"
                :value="a.id"
                v-bind:checked="a.checked"
                @input="nationChecked(a)"
              />
              <label :for="a.id" v-html="a.value" />
            </div>
          </li>
        </ul>
      </div>
    </PopupSelect>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits(["setLayout"]);
const layout = reactive({
  header: "sub",
  footer: "none",
  title: "내가 신청한 요금제 상세",
  floatMenu: "none",
});

const mockNationData = ref([
  { checked: false, id: "item_select_01", value: "China (중국)" },
  { checked: false, id: "item_select_02", value: "The United States (미국)" },
  { checked: false, id: "item_select_03", value: "Vietnam (베트남)" },
  { checked: false, id: "item_select_04", value: "Thailand (태국)" },
  { checked: false, id: "item_select_05", value: "Philippines (필리핀)" },
  { checked: false, id: "item_select_06", value: "Uzbekistan (우즈베키스탄)" },
  { checked: false, id: "item_select_07", value: "Japan (일본)" },
  { checked: false, id: "item_select_08", value: "Indonesia (인도네시아)" },
  { checked: false, id: "item_select_09", value: "Cambodia (캄보디아)" },
  { checked: false, id: "item_select_10", value: "Mongolia (몽골)" },
  { checked: false, id: "item_select_11", value: "Nepal (네팔)" },
  { checked: false, id: "item_select_12", value: "Taiwan (대만)" },
]);

// 변수 모음
const selectItem: Ref<object> = ref({});
const nation: Ref<any> = ref(null);
const errorFlag: Ref<boolean> = ref(true);
const termsFlag: Ref<boolean> = ref(true);

// 나라 선택
interface INationData {
  checked: boolean;
  id: string;
  value: string;
}
function nationChecked(v: INationData) {
  errorFlag.value = false;
  nation.value.focusBtn.innerHTML = v.value;
  selectItem.value = v;
  nation.value.close();
}
function handlePayType() {
  nextTick(() => {
    if (nation.value) {
      nation.value.open();
    } else {
      console.error("nation이 초기화되지 않았습니다.");
    }
  });
}

// 확인
function submitSelected() {
  console.log(selectItem.value);
  closePopup();
}

// 닫기
function closePopup() {
  termsFlag.value = false;
}

onMounted(() => {
  emit("setLayout", layout);
});
</script>
