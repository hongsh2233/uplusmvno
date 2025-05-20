<template>

  <div class="container">
    <div class="content cont_ratePlan" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">요금제 상세</h3>
        <button type="button" class="btn md c03" id="btn_PR02PO05" @click="this.$emit('openPopup', ['PR02PO05', 'btn_PR02PO05', 101]);">내게 맞는 요금제 찾기 Step05</button>
      </div>

    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
export default {
  name: 'ALFM-PR02-PO05',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: 'none', title: '내게 맞는 요금제 찾기', floatMenu: 'none' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    this.$emit('openPopup', ['PR02PO05', 'btn_PR02PO05', 101]);
  }
}
</script>