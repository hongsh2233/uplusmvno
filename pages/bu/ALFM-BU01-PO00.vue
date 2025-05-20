<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>


      <div class="section">
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_BU01PO00" @click="this.$emit('openPopup', ['BU01PO00', 'btn_BU01PO00', 101]);">eSIM 가능 핸드폰 모델 확인</button>
        </div>
      </div>


    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-BU01-PO00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: 'eSIM 가능 핸드폰 모델 확인' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    this.$emit('openPopup', ['BU01PO00', 'btn_BU01PO00', 101]);
  }
}
</script>
