<template>

  <div class="sort_pop">
    <button type="button" class="btn_sort" aria-haspopup="true" ref="button" @click="open">{{ data.option.value }}</button>

    <div class="sort_layer" :class="{ open : isOpenClass }" v-if="isOpen">
      <div @focus="focus" tabindex="0"></div>
      <div class="sort_layer_wrap" ref="popFocus" tabindex="0">
        <div class="sort_layer_header">
          <h3>정렬방법</h3>
        </div>
        
        <div class="sort_layer_content">
          <ul class="sort_group" role="listbox">
            <li role="none" :class="{ on : a.selected }" v-for="(a, i) in data.data" :key="i">
              <button type="button" role="option" :aria-selected="a.selected" @click="select(a)">{{ a.title }}</button>
            </li>
          </ul>
        </div>

        <button type="button" class="sort_layer_close" @click="close"><span class="blind">팝업 닫기</span></button>
      </div>
      <div @focus="focus" tabindex="0"></div>
    </div>

  </div>

</template>
  
<script>
export default {
  name: "Sort",
  emits: ['clickFormSelectItem'],
  data(){
    return {
      isOpen: false,
      isOpenClass: false,
    }
  },
  methods: {
    focus(){
      this.$refs.popFocus.focus();
    },
    open(){
      // const isMobile = document.querySelector("html").classList.contains("mobile");
      // if( isMobile ) scroll.noScroll();
      if( front.isMobile() ) scroll.noScroll();

      this.isOpen = true;
      setTimeout(()=>{ this.isOpenClass = true },0);
      setTimeout(()=>{ this.$refs.popFocus.focus() }, 100);
    },
    close(){
      // const isMobile = document.querySelector("html").classList.contains("mobile");
      // if( isMobile ) scroll.scroll();
      if( front.isMobile() ) scroll.scroll();
    
      
      this.isOpen = false;
      this.isOpenClass = false;
      this.$refs.button.focus();
    },
    select(a){
      this.$emit('clickFormSelectItem', a);
      this.close();
    }
  },
  props: {
    data: Object,
  }
};
</script>