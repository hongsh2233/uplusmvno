<template>

  <ul class="sort_group" role="listbox">
    <li role="none" :class="{ on : a.selected }" v-for="(a, i) in data" :key="i">
      <button type="button" role="option" :aria-selected="a.selected" @click="click(a)">{{ a.title }}</button>
    </li>
  </ul>

</template>
  
<script>
export default {
  name: "SortList",
  data(){
    return {
      data: [
        { selected: true, value:0, title: '추천 순' },
        { selected: false, value:1, title: '마감일 순' },
      ],
    }
  },
  methods: {
    click(a){
      this.data = this.data.map( item => {
        item.selected = ( a == item ) ? true : false;
        return item;
      })
    }
  }
};
</script>