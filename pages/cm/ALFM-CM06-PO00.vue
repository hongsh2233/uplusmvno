<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">공통</h2>

      <div class="section">
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_terms" @click="this.$emit('openPopup', ['terms', 'btn_terms', 100]);">약관 상세</button>
        </div>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_CS02PG00" @click="this.$emit('openPopup', ['CS02PG00', 'btn_CS02PG00', 100]);">위지정보 활용 동의</button>
        </div>
        <div class="btn_group">
          <button type="button" class="btn md c03" id="btn_CS02Alert" @click="this.$emit('openAlert', ['CS02Alert', 'btn_CS02Alert', 101]);">위치정보 활용 동의 안내 Alert</button>
        </div>
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->
  
</template>
  
<script>
export default {
  name: 'ALFM-CM06-PG00',
  emits: ['setLayout', 'openPopup', 'openAlert'],
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
