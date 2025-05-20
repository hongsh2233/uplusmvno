<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">기존과 동일한 비밀번호</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_LG03PO00" @click="this.$emit('openAlert', ['LG03PO00', 'btn_LG03PO00', 101]);">Alert</button>
        </div>
      </div> <!-- // section -->


    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-LG04-PO00',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '비밀번호 재설정' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>
