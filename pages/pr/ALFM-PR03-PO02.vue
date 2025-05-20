<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_PR03PO02" @click="this.$emit('openPopup', ['PR03PO02', 'btn_PR03PO02', 101]);">휴대폰 정보 확인 방법</button>
        </div>
      </div>

    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-PR03-PO02',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: '휴대폰 정보 확인 방법', floatMenu: 'none' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    this.$emit('openPopup', ['PR03PO02', 'btn_PR03PO02', 101]);
  }
}
</script>