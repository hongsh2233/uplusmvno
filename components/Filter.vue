<template>
  <div class="tag_list02">
    <ul>
      <li v-for="(a, i) in data" :key="i">
        <button type="button" @click="filterClick(a)">{{ a.value }} <span class="blind">삭제</span></button>
      </li>
    </ul>
  </div>

</template>
  
<script>
export default {
  name: "Filter",
  emits: ['filterDelete'],
  data(){
    return {
      getData: this.data,
    }
  },
  methods: {
    filterClick(a){
      // this.getData.splice(i, 1);
      this.$emit('filterDelete', a);
    }
  },
  props: {
    data: Object,
    // option: Object,
  },
};
</script>