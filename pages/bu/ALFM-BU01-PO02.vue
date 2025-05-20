<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>


      <div class="section">
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_BU01PO02" @click="this.$emit('openAlert', ['BU01PO02', 'btn_BU01PO02', 101]);">Alert</button>
        </div>
      </div>


    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-BU01-PO02',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '지금배송 안내' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    this.$emit('openAlert', ['BU01PO02', 'btn_BU01PO02', 101]);
  },
}
</script>
