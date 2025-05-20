<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_PR03PO05" @click="this.$emit('openAlert', ['PR03PO05', 'btn_PR03PO05', 101]);">Alert</button>
        </div>
      </div>

    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-PR03-PO05',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: '조회된 일련번호가 없을 경우 Alert', floatMenu: 'none' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    this.$emit('openAlert', ['PR03PO05', 'btn_PR03PO05', 101]);
  },
}
</script>