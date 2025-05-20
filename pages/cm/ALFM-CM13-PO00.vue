<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">광고성 정보 수신 알림 안내</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_CM13PO00" @click="this.$emit('openAlert', ['CM13PO00', 'btn_CM13PO00', 101]);">Alert</button>
        </div>
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-CM13-PO00',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '공통' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>
