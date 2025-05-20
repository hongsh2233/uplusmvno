<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{ type: 'ty03', step: 4 }" />
      <!-- //progress bar -->

      <div class="page_info mgb0">
        <strong class="fc01">법정대리인</strong>의 신분증 정보를<br class="pc_hide" />
        입력해 주세요
      </div>

      <div class="section">
        <span class="sub">부정가입 방지를 위한 과정이에요.</span>

        <div class="form_wrap">
          <div class="form_group">
            <strong class="form_label">Country/Region</strong>
            <div class="form_item" :class="{ val_chk: true }">
              <!-- validation 체크시 val_chk 조건 처리-->
              <button type="button" class="btn_select" ref="btn_payType" @click="handlePayType">
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

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01" disabled>다음으로</button>
            </div>
          </div>
        </div>
      </div>
      <!-- // bottom_float -->

      <PopupSelect
        ref="nation"
        :option="{
          popupTitle: 'Country/Region',
          targetBtn: 'btn_payType',
          listView: 'card',
        }"
        @selectItem="selectItem = $event.value"
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
                />
                <label :for="a.id" v-html="a.value" />
              </div>
            </li>
          </ul>
        </div>
      </PopupSelect>
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from "vue";

const emit = defineEmits(["setLayout"]);
const layout = reactive({
  header: "sub2",
  footer: "none",
  title: "신분증 정보 입력",
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

const selectItem: Ref<null> = ref(null);
const prev: Ref<boolean> = ref(false);
const nation: Ref<any> = ref(null);

function handlePayType() {
  nextTick(() => {
    if (nation.value) {
      nation.value.open();
    } else {
      console.error("nation이 초기화되지 않았습니다.");
    }
  });
}

onMounted(() => {
  emit("setLayout", layout);
});
</script>
