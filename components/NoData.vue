<template>
  <div class="no_dt" :class="option.type" v-html="option.html"></div>
</template>
  
<script>
export default {
  name: "NoData",
  props: {
    option: Object
  }
};
</script>