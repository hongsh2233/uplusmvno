<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">
        <span class="fc01">알뜰폰닷컴</span>와 함께하고 있는 <br>참여사업자입니다
        <p class="sub">로고를 선택하시면, 더 자세한 정보를 볼 수 있어요!</p>
      </div>
      
      <div class="section">
        <MVNOList :option="{ type:'list', data:'MVNOList' }" />
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import MVNOList from '@/components/MVNOList'

export default {
  name: 'ALFM-MA01-PG02',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '파트너사 소개' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    MVNOList,
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>
