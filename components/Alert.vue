<template>

  <Transition name="popupAlert">
    <div class="pop_layer alert" :class="{ open : alertItem.isOpen }" :style="{ zIndex: alertItem.idx }" ref="Alert" v-if="alertItem.isOpen">
      <div @focus="focus" tabindex="0"></div>
      <div class="pop_wrap" ref="popWrap" tabindex="0">
        <div class="pop_header">
          <h3>{{ alertItem.title }}</h3>
        </div>
        <div class="pop_content" v-html="alertItem.content"></div>
        <div class="pop_footer">
          <div class="btn_group">
            <button type="button" :class="a.class" @click="click(a)" v-for="(a, i) in alertItem.button" :key="i" v-html="a.text"></button>
          </div>
        </div>
      </div>
      <div @focus="focus" tabindex="0"></div>
    </div>
  </Transition>

</template>

<script>

export default {
  name: "Alert",
  emits:['closeAlert', 'closePopup'],
  watch:{
    alertItem: {
      handler(data){
        this.scrollCheck();
      }, deep: true,
    }
  },
  methods:{
    focus(){
      this.$refs.popWrap.focus();
    },
    click(a){
      eval(a.click);
    },
    closeAlert(){
      this.$emit('closeAlert', this.alertItem);

      // console.log(this.alertItem.lastFocus, document.querySelector(`#${this.alertItem.lastFocus}`));

      if( this.alertItem.lastFocus == null ) return;
      const btn = document.querySelector(`#${this.alertItem.lastFocus}`);
      if( btn == null ) return;
      setTimeout(()=>{ btn.focus() }, 202); // focus
    },
    closePopup(id, btn){
      this.$emit('closePopup', id);
      if( btn == '' ) return;
      
      setTimeout(()=>{
        if( document.querySelector(`#${btn}`) != null ) document.querySelector(`#${btn}`).focus();
      }, 202); // focus
    },

    
    scrollCheck(){
      if( this.alertItem.isOpen ){
        scroll.noScroll();
        setTimeout(()=>{ this.focus() }, 201);
      } else {
        scroll.scroll();
      }
    },
  },
  updated(){
    setTimeout(()=>{ this.$refs.popWrap.focus() }, 20);
  },
  props: {
    alertItem: Object,
  },
};
</script>
