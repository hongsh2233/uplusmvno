<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <button type="button" class="btn md c03" id="btn_BU02PO00" @click="this.$emit('openPopup', ['BU02PO00', 'btn_BU02PO00', 101]);">편의점 조회</button>
      </div>


    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-BU02-PO00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '편의점 조회' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    this.$emit('openPopup', ['BU02PO00', 'btn_BU02PO00', 101]);
  }
}
</script>
