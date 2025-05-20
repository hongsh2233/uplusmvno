<template>
  <Transition name="popupNormal">
    <div class="pop_layer normal" :class="{ open: isOpenClass, close: !isOpenClass }" v-if="isOpen">
      <div @focus="focus" tabindex="0"></div>
      <div class="pop_wrap" ref="popWrap" tabindex="0">
        <div class="pop_header">
          <h3>{{ option.popupTitle }}</h3>
        </div>

        <div class="pop_content" v-if="option.data == 'MVNO' || option.data == 'MVNO2'">
          <!-- 알뜰폰 통신사 선택 팝업 -->
          <MVNOList :option="{ type: 'select', data: option.data }" @MVNOSelect="select($event)" />
        </div>

        <div class="pop_content" v-else>
          <slot v-if="option.listView === 'card'"></slot>
          <ul v-else class="select_list" role="listbox">
            <li role="none" :class="{ on: a.selected }" v-for="(a, i) in data" :key="i">
              <button
                type="button"
                role="option"
                :aria-selected="a.selected"
                :data-option="a.title"
                @click="select(a)"
              >
                {{ a.title }}
              </button>
            </li>
          </ul>
        </div>

        <button type="button" class="pop_close" @click="close">
          <span class="blind">팝업 닫기</span>
        </button>
      </div>
      <div @focus="focus" tabindex="0"></div>
    </div>
  </Transition>
</template>

<script>
import frontData from "@/assets/frontData.js";
import MVNOList from "@/components/MVNOList";

export default {
  name: "PopupSelect",
  emits: ["selectItem"],
  data() {
    return {
      data: frontData.select[this.option.data],
      isOpen: false,
      isOpenClass: false,
      focusBtn: null,
    };
  },
  methods: {
    focus() {
      this.$refs.popWrap.focus();
    },
    open() {
      scroll.noScroll();

      this.isOpen = true;
      setTimeout(() => {
        this.isOpenClass = true;
      }, 0);
      setTimeout(() => {
        this.$refs.popWrap.focus();
      }, 100);
    },
    close() {
      scroll.scroll();

      this.isOpen = false;
      this.isOpenClass = false;
      this.focusBtn.focus();
    },
    select(a) {
      this.data = this.data.map((item) => {
        item.selected = a == item ? true : false;
        return item;
      });

      this.$emit("selectItem", a);
      this.focusBtn.innerHTML = a.title;
      this.close();
    },
  },
  props: {
    option: Object,
  },
  mounted() {
    setTimeout(() => {
      this.focusBtn = this.$parent.$refs[this.option.targetBtn];
      if (this.focusBtn == undefined)
        this.focusBtn = this.$parent.$parent.$refs[this.option.targetBtn];
      if (this.focusBtn == undefined)
        this.focusBtn = document.querySelector(`#${this.option.targetBtn}`);
    }, 10);
  },
  components: {
    MVNOList,
    frontData,
  },
};
</script>
