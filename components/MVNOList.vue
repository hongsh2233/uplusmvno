<template>

  <ul class="mvno_list" role="listbox" v-if="option.type == 'select'">
    <li role="none" :class="{ on : a.selected }" v-for="(a, i) in data" :key="i">
      <button type="button" role="option" :aria-selected="a.selected" :data-option="a.title" @click="select(a)">
        <span class="img" v-if="a.title == '전체'">
          {{ a.title }}
        </span>
        <span class="img" v-else>
          <img :src="a.img" :alt="a.title">
        </span>
        <span class="tex">{{ a.title }}</span>
      </button>
    </li>
  </ul>

  <ul class="mvno_list" role="listbox" v-else>
    <li v-for="(a, i) in data" :key="i">
      <NuxtLink :to="a.link">
        <span class="img"><img :src="a.img" :alt="a.title"></span>
        <span class="tex">{{ a.title }}</span>
      </NuxtLink>
    </li>
  </ul>

</template>
  
<script>
import frontData from '@/assets/frontData.js'

export default {
  name: "MVNOList",
  emits: ['MVNOSelect'],
  data(){
    return {
      // data: (this.option.type=='select') ? frontData.select.MVNO : frontData.select.MVNOList,
      data: Object,
    }
  },
  methods: {
    select(a){
      if( this.option.listType == 'list' ) return;
      this.data = this.data.map( item => {
        item.selected = ( a == item ) ? true : false;
        return item;
      })
      this.$emit('MVNOSelect', a);
    },
  },
  props: {
    option: Object,
  },
  mounted(){
    // console.log(this.option);
    const data = this.option.data;
    this.data = frontData.select[data];
  },
  components: {
    frontData,
  }
};
</script>