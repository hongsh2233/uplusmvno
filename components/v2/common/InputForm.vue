<template>
  <div
    class="input_box"
    :class="
      ({
        search: option.search || option.findNum,
        find_num: option.findNum,
        auth_num: option.authNum,
      },
      option.action || option.actionBtn)
    "
  >
    <!--  || option.actionBtn 추가 -->

    <slot name="before"></slot>
    <div class="num_mark" v-if="option.findNum">010-<span>****</span>-</div>

    <input
      class="input"
      :class="{ on: on }"
      ref="input"
      :type="type"
      :placeholder="option.placeholder"
      :maxLength="option.maxLength"
      :minLength="option.minLength"
      v-model="value"
      v-bind:disabled="option.disabled"
      v-bind:readonly="option.readonly"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <button type="button" class="btn_del" v-if="value" @click="deleteValue">
      <span class="blind">입력 내용 삭제</span>
    </button>

    <button
      type="button"
      class="btn_search"
      v-if="option.search || option.findNum"
      v-bind:disabled="option.seasrchDisabled"
    >
      <span class="blind">검색</span>
    </button>

    <!-- 24.11.06 버튼 click 옵션 수정 -->
    <button
      type="button"
      class="btn-action"
      v-if="option.action"
      :class="option.action"
      @click="!option.disabled ? btnClick() : ''"
    >
      <span class="blind">선택</span>
    </button>

    <div class="timer" v-if="option.authNum">
      <span>0:01</span>
      <!-- <button type="button" v-bind:disabled="option.authNumDisabled">시간연장하기</button> -->
    </div>

    <slot name="after"></slot>
  </div>
</template>

<script>
export default {
  name: "InputForm",
  emits: ["inputValue", "btnClick"],
  data() {
    return {
      on: false,
      type: !this.option.type ? "text" : this.option.type,
      value: this.option.value == undefined ? "" : this.option.value,
      isFocused: false,
    };
  },
  watch: {
    value(a) {
      this.$emit("inputValue", a);
      this.on = this.value ? true : false;
    },
    option: {
      handler(data) {
        this.value = data.value;
      },
      deep: true,
    },
  },
  methods: {
    deleteValue() {
      this.value = "";
      this.$refs.input.focus();
    },
    btnClick() {
      this.$emit("btnClick");
    },
  },
  mounted() {
    if (!(this.option.value == undefined || this.option.value == "")) {
      this.value = this.option.value;
      this.on = true;
    }
  },
  props: {
    option: Object,
  },
};
</script>
