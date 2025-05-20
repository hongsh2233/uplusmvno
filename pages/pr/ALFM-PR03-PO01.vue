<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">이미지 업로드 가이드 팝업</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_PR03PO01" @click="this.$emit('openPopup', ['PR03PO01', 'btn_PR03PO01', 101]);">이미지 업로드 가이드 팝업</button>
        </div>
      </div>

    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-PR03-PO01',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: 'eSIM 정보 입력', floatMenu: 'none' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    this.$emit('openPopup', ['PR03PO01', 'btn_PR03PO01', 101]);
  }
}
</script>