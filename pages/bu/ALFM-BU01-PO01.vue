<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>


      <div class="section">
        <h3 class="tit02">지금배송 불가한 지역일 경우</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_BU01PO01" @click="this.$emit('openAlert', ['BU01PO01', 'btn_BU01PO01', 101]);">Alert</button>
        </div>
      </div>


    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-BU01-PO01',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '택배배송 안내 팝업' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    this.$emit('openAlert', ['BU01PO01', 'btn_BU01PO01', 101]);
  },
}
</script>
