<template>
  <!-- 2025-06-09 1749426716 (정C) 'type-count-1' 속성 추가 -->
  <div
    class="textarea_box"
    :class="{
      ty02: data.type == 'ty02',
      'type-count-1': data.type === 'ty03',
      disabled: data.disabled,
      on: isActive,
      focus: isFocus,
    }"
  >
    <textarea
      class="textarea"
      :placeholder="data.placeholder"
      :rows="data.rows"
      :maxlength="data.maxlength"
      v-bind:disabled="data.disabled"
      v-bind:readonly="data.readonly"
      :value="value"
      ref="textarea"
      @input="input"
      @focus="isFocus = true"
      @blur="isFocus = false"
    ></textarea>
    <!-- 2025-06-09 1749426716 (정C) v-if 조건문 변경 -->
    <button type="button" class="btn_del" v-if="data.type == 'ty03' && value" @click="deleteValue">
      <span class="blind">입력 내용 삭제</span>
    </button>
    <div class="byte_check" v-if="data.byteCheck">
      <span class="count">{{ count }}</span
      ><span class="total">{{ maxlength }}</span>
    </div>
    <button type="button" @click="submit" v-if="data.button" v-bind:disabled="count == 0">
      {{ data.buttonValue }}
    </button>
  </div>
</template>

<script>
export default {
  name: "TextareaBox",
  emits: ["textareaValue", "textareaSubmit"],
  data() {
    return {
      isActive: false,
      isFocus: false,
      value: "",
      maxlength: 0,
      count: 0,
    };
  },
  watch: {
    isFocus() {
      if (this.data.readonly) this.isFocus = false; // readonly 대응
    },
    count(a) {
      this.count = a.toLocaleString("ko-KR");
    },
    maxlength(a) {
      this.maxlength = a.toLocaleString("ko-KR");
    },
  },
  methods: {
    deleteValue() {
      this.value = "";
      this.$refs.textarea.focus();
    },
    input() {
      this.value = this.$refs.textarea.value;
      this.count = this.value.length;

      this.isActive = this.count > 0 ? true : false;

      if (this.data.type == "ty02") this.autoHeight();

      const data = {
        isActive: this.isActive,
        value: this.value,
        count: this.count,
      };
      this.$emit("textareaValue", data);
    },
    submit() {
      const data = {
        isActive: this.isActive,
        value: this.value,
        count: this.count,
      };
      this.$emit("textareaSubmit", data);
    },
    autoHeight() {
      const _this = this.$refs.textarea;
      _this.style.height = "auto";

      let _height = _this.scrollHeight;
      if (_height < 48) {
        _height = 48;
      }
      _this.style.height = `${_height}px`;
    },
  },
  mounted() {
    this.maxlength = this.data.maxlength;
    setTimeout(() => {
      if (this.data.type == "ty02") this.autoHeight();
    }, 10);

    // value check, isActive
    if (this.data.value == undefined || this.data.value == "") return;
    this.value = this.data.value;
    this.count = this.value.length;
    if (this.count > 0) this.isActive = true;
  },
  props: {
    data: Object,
  },
};
</script>
