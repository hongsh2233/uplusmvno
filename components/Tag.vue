<template>
  <div
    class="tag_list tagList"
    :class="{ multi: option.multi, block: option.type == 'block' }"
    v-if="option.type == 'block' || option.type == 'default'"
    ref="wrap"
  >
    <!-- multi : 다중선택, block : 펼쳐져있음, default : 가로스크롤 -->
    <ul>
      <li role="none" class="other" v-if="getSelectedData.length" ref="selectItem">
        <!-- selected -->
        <button type="button" aria-haspopup="true" @click="selected.open = !selected.open">
          {{ selected.title }}
        </button>
      </li>
      <li role="none" :class="{ on: a.selected }" v-for="(a, i) in getData" :key="i" ref="item">
        <button
          type="button"
          role="option"
          :aria-selected="a.selected"
          v-bind:disabled="a.disabled"
          @click="tagClick(i)"
        >
          {{ a.title }}
        </button>
      </li>
    </ul>
    <div
      class="other_pop"
      :class="{ on: selected.open }"
      v-if="getSelectedData.length"
      @click="selected.open = !selected.open"
    >
      <!-- selected popup -->
      <ul role="listbox">
        <li role="none" :class="{ on: a.selected }" v-for="(a, i) in getSelectedData" :key="i">
          <button type="button" role="option" :aria-selected="a.open" @click="setSelectedTitle(i)">
            {{ a.title }}
          </button>
        </li>
      </ul>
    </div>
  </div>

  <div
    class="tag_list tagList variable"
    :class="{ multi: option.multi, on: expanded }"
    v-if="option.type == 'expanded'"
    ref="wrap"
  >
    <!-- multi : 다중선택, variable : 펼침버튼, on: 펼쳐짐 -->
    <button type="button" :aria-expanded="expanded" @click="ExpandedClick">
      <span class="blind">펼쳐 보기</span>
    </button>
    <ul>
      <li role="none" class="other" v-if="getSelectedData.length" ref="selectItem">
        <!-- selected -->
        <button type="button" aria-haspopup="true" @click="selected.open = !selected.open">
          {{ selected.title }}
        </button>
      </li>
      <li role="none" :class="{ on: a.selected }" v-for="(a, i) in getData" :key="i" ref="item">
        <button
          type="button"
          role="option"
          :aria-selected="a.selected"
          v-bind:disabled="a.disabled"
          @click="tagClick(i)"
        >
          {{ a.title }}
        </button>
      </li>
    </ul>
    <div
      class="other_pop"
      :class="{ on: selected.open }"
      v-if="getSelectedData.length"
      @click="selected.open = !selected.open"
    >
      <!-- selected popup -->
      <ul role="listbox">
        <li role="none" :class="{ on: a.selected }" v-for="(a, i) in getSelectedData" :key="i">
          <button type="button" role="option" :aria-selected="a.open" @click="setSelectedTitle(i)">
            {{ a.title }}
          </button>
        </li>
      </ul>
    </div>
  </div>

  <div
    class="tag_list tagList"
    :class="{ multi: option.multi, on: expanded, variable: variable }"
    v-if="option.type == 'expandedResize'"
    ref="wrap"
  >
    <!-- multi : 다중선택, on: 펼쳐짐, variable: resize체크 후 class추가됨 -->
    <button type="button" :aria-expanded="expanded" @click="ExpandedClick">
      <span class="blind">펼쳐 보기</span>
    </button>
    <ul>
      <li role="none" class="other" v-if="getSelectedData.length" ref="selectItem">
        <!-- selected -->
        <button type="button" aria-haspopup="true" @click="selected.open = !selected.open">
          {{ selected.title }}
        </button>
      </li>
      <li role="none" :class="{ on: a.selected }" v-for="(a, i) in getData" :key="i" ref="item">
        <button
          type="button"
          role="option"
          :aria-selected="a.selected"
          v-bind:disabled="a.disabled"
          @click="tagClick(i)"
        >
          {{ a.title }}
        </button>
      </li>
    </ul>
    <div
      class="other_pop"
      :class="{ on: selected.open }"
      v-if="getSelectedData.length"
      @click="selected.open = !selected.open"
    >
      <!-- selected popup -->
      <ul role="listbox">
        <li role="none" :class="{ on: a.selected }" v-for="(a, i) in getSelectedData" :key="i">
          <button type="button" role="option" :aria-selected="a.open" @click="setSelectedTitle(i)">
            {{ a.title }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tag",
  data() {
    return {
      getData: this.data.data,
      getSelectedData: this.data.select,

      expanded: false, // 펼쳐짐 여부
      selected: { open: false, title: "" },

      variable: false, // expandedResize
    };
  },
  methods: {
    touchScrollX() {
      if (!front.isMobile()) {
        console.log(2341234);
        const sliders = document.querySelectorAll(".tagList > ul");

        sliders.forEach((slider) => {
          let isMouseDown = false;
          let startX;
          let scrollLeft;

          const handleMouseDown = (e) => {
            isMouseDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
          };

          const handleMouseUp = () => {
            isMouseDown = false;
          };

          const handleMouseMove = (e) => {
            if (!isMouseDown) return;
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.2; // Adjust scrolling speed
            slider.scrollLeft = scrollLeft - walk;
          };

          slider.addEventListener("mousedown", handleMouseDown);
          slider.addEventListener("mouseup", handleMouseUp);
          slider.addEventListener("mousemove", handleMouseMove);
          slider.addEventListener("mouseleave", handleMouseUp);

          // Additional event to prevent text selection during drag
          slider.addEventListener("dragstart", (e) => {
            e.preventDefault();
          });
        });
      }
    },
    tagClick(i) {
      const isMulti = this.option.multi;
      // console.log(isMulti, i);

      if (isMulti) {
        // 다중선택
        this.getData[i].selected = !this.getData[i].selected;
      } else {
        // 한개만 선택
        if (this.getData[i].selected) return;
        this.getData = this.getData.map((item, idx) => {
          if (item.selected) item.selected = false;
          else item.selected = i == idx ? true : false;
          return item;
        });
      }

      this.tagMove(i); // 스크롤이벤트
    },
    tagMove(i) {
      if (this.getData[i].selected == false) return;

      let selectItem = this.$refs.selectItem;
      selectItem = selectItem == undefined ? 0 : selectItem.offsetWidth;

      const _this = this.$refs.item[i].offsetLeft;
      const _thisW = this.$refs.item[i].offsetWidth;
      const wrap = this.$refs.wrap;
      const ul = wrap.querySelector("ul");
      const wrapW = wrap.offsetWidth - selectItem;

      const result = _this - selectItem - wrapW / 2 + _thisW / 2;
      ul.scrollLeft = result;
    },

    ExpandedClick() {
      this.expanded = !this.expanded;

      let isSelectedItem = [];
      this.getData.forEach((a, i) => {
        if (a.selected) isSelectedItem.push(i);
      });
      setTimeout(() => {
        this.tagMove(isSelectedItem[0]);
      }, 0);
    },

    hasSelectInit() {
      if (this.getSelectedData.length < 1) return;

      let getSelectIdx;
      this.getSelectedData.forEach((a, i) => {
        if (a.selected) getSelectIdx = i;
      });
      this.setSelectedTitle(getSelectIdx);
    },
    setSelectedTitle(i) {
      this.getSelectedData = this.getSelectedData.map((item, idx) => {
        item.selected = idx == i ? true : false;
        return item;
      });

      this.selected.title = this.getSelectedData[i].title;
    },

    resize() {
      // option.type = expandedResize
      const wrap = this.$refs.wrap;
      if (wrap == null) return;

      const ulWidth = wrap.offsetWidth;
      const li = this.$refs.item;
      let liWidth = 0;
      li.forEach((el) => {
        liWidth += el.offsetWidth;
      });

      this.variable = liWidth > ulWidth ? true : false;
    },
  },
  mounted() {
    this.hasSelectInit();
    this.touchScrollX();

    // expandedResize
    if (this.option.type == "expandedResize") {
      this.resize();
      window.addEventListener("resize", this.resize);
    }
  },
  unmounted() {
    window.addEventListener("resize", this.resize);
  },
  props: {
    data: Object,
    option: Object,
  },
};
</script>
