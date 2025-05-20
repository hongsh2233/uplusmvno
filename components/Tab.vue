<template>
  <div :class="{ tab_list: data.option.type == 1, tab_list02: data.option.type == 2 }" ref="wrap">
    <ul role="tablist">
      <li role="none" ref="item" :class="{ on: a.selected, active: a.active }" v-for="(a, i) in Data" :key="i">
        <button type="button" role="tab" aria-selected="true" :aria-controls="a.controls" @click="click(a, i)">{{ a.title }}</button>
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
  data(){
    return {
      Data: this.data.data,
      show: this.data.data[0],
      // show: Object,
    }
  },
  methods:{
    click(a, i){
      this.Data = this.Data.map( (item, i) => {
        item.selected = ( a == item ) ? true : false;
        return item;
      });

      this.show = a;
      this.tabMove(i);
    },
    tabMove(i){
      const wrap = this.$refs.wrap;
      const _this = this.$refs.item[i].offsetLeft - wrap.offsetLeft;
      const _thisW = this.$refs.item[i].offsetWidth;
      const ul = wrap.querySelector("ul");
      const wrapW = wrap.offsetWidth;

      const result = _this - (wrapW/2) + (_thisW/2);
      ul.scrollLeft = result;
    },
  },
  mounted(){
    this.data.data.forEach( a =>{ if( a.selected ) this.show = a; });
  },
  props: {
    data: Object,
  }
};
</script>