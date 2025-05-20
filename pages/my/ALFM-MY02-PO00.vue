<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      

      <div class="section">
        <h3 class="tit02">USIM 정보 입력</h3>

        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_MY02PO00" @click="this.$emit('openPopup', ['MY02PO00', 'btn_MY02PO00', 101]);">USIM 정보 입력</button>
        </div>
      </div>



    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-MY02-PO00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: 'none', floatMenu: 'none', title: 'USIM 정보 입력' },
      acd: [],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    this.$emit('openPopup', ['MY02PO00', 'btn_MY02PO00', 101]);
  }
}
</script>