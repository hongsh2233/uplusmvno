<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav blind">{{ layout.title }}</h2>

      <div class="section">
          <div class="btn_group">
              <button type="button" class="btn md c03" id="btn_CM02PG00" @click="this.$emit('openPopup', ['CM02PG00', 'btn_CM02PG00', 101]);">서비스 점검중 (팝업)</button>
          </div>
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->
  
</template>
  
<script>
export default {
  name: 'ALFM-CM02-PO00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '안내' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    this.$emit('openPopup', ['CM02PG00', 'btn_CM02PG00', 101]);
  },
}
</script>
