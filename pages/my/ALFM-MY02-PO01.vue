<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>


      <div class="section">
        <h3 class="tit02">USIM 정보 자동 입력 안내</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_MY02PO01" @click="this.$emit('openAlert', ['MY02PO01', 'btn_MY02PO01', 101]);">Alert</button>
        </div>
      </div>


    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-MY02-PO01',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '내가 신청한 요금제 상세' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  }
}
</script>
