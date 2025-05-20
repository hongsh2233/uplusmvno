<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">eSIM 미지원 단말기</h3>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_PR03PO04" @click="this.$emit('openAlert', ['PR03PO04', 'btn_PR03PO04', 101]);">Alert</button>
        </div>
      </div>

    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-PR03-PO04',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: 'eSIM 정보 입력', floatMenu: 'none' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    
    this.$emit('openAlert', ['PR03PO04', 'btn_PR03PO04', 101]);
  },
}
</script>