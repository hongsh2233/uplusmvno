<template>
  <!-- 2025-05-28 1748411106 (정C) 탭메뉴 2가지 타입 추가 -->
  <div
    :class="[
      {
        tab_list: data.option.type == 1,
        tab_list02: data.option.type == 2,
        'tab_list type-03 tab-scrollable': data.option.type == 3,
        'tab_list type-04 tab-scrollable': data.option.type == 4,
      },
    ]"
    ref="wrap"
  >
    <!-- //2025-05-28 1748411106 (정C) 탭메뉴 2가지 타입 추가 -->
    <ul role="tablist">
      <li role="none" ref="item" :class="{ on: a.selected, active: a.active }" v-for="(a, i) in Data" :key="i">
        <button type="button" role="tab" aria-selected="true" :aria-controls="a.controls" @click="click(a, i)">
          {{ a.title }}
        </button>
      </li>
    </ul>
  </div>

  <div class="tabpanel_wrap">
    <div role="tabpanel" :aria-expanded="show.selected" tabindex="0" :id="show.controls">
      <slot :name="show.controls"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tab",
  data() {
    return {
      Data: this.data.data,
      show: this.data.data[0],
      // show: Object,
    };
  },
  methods: {
    click(a, i) {
      this.Data = this.Data.map((item, i) => {
        item.selected = a == item ? true : false;
        return item;
      });

      this.show = a;
      this.tabMove(i);
    },
    tabMove(i) {
      const wrap = this.$refs.wrap;
      const _this = this.$refs.item[i].offsetLeft - wrap.offsetLeft;
      const _thisW = this.$refs.item[i].offsetWidth;
      const ul = wrap.querySelector("ul");
      const wrapW = wrap.offsetWidth;

      const result = _this - wrapW / 2 + _thisW / 2;
      ul.scrollLeft = result;
    },
  },
  mounted() {
    this.data.data.forEach((a) => {
      if (a.selected) this.show = a;
    });
  },
  props: {
    data: Object,
  },
};
</script>
