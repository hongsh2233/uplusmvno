<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <div class="ranking_top">
          <!-- text case : admin 에서 선택시 -->
          <div class="box_yellow">
            <div class="txt_area">
              신학기 청소년 요금제 Top 10 <br>
              요금제를 확인해 보세요!
            </div>
          </div>
          <div class="ranking_banner">
            <!-- image case : admin 에서 선택시 --><!-- 24.01.30 수정 -->
            <img src="/images/data/img_ranking_top.jpg" alt="데이터·통화 무제한 5월 알뜰폰 요금제 랭킹" class="pc_hide" />
            <img src="/images/data/img_ranking_top_pc.jpg" alt="데이터·통화 무제한 5월 알뜰폰 요금제 랭킹" class="pc_show" />
          </div>
        </div>
      </div> <!-- // section -->

      <div class="section ranking_section">
        <div class="item_list ty02">
          <Card :cardInfo="{type: 'ty01', lanking: 1, name: 'plan01'}" />
          <Card :cardInfo="{type: 'ty01', lanking: 2, name: 'plan02'}" />
          <Card :cardInfo="{type: 'ty01', lanking: 3, name: 'plan03'}" />
          <Card :cardInfo="{type: 'ty01', name: 'plan11' }" />
          <div class="btn_group">
            <NuxtLink :to="{}" class="btn md c05">지금 HOT한 요금제 보러가기</NuxtLink>
          </div>
        </div>
      </div> <!-- // section -->

      <Compare @openPopup="this.$emit('openPopup', $event)" />

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import Card from '@/components/Card'
import Compare from '@/components/Compare'

export default {
  name: 'ALFM-MA01-PG01',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '요금제 랭킹' },
    }
  },
  components: {
    Card,
    Compare
  }, 
  mounted(){
    this.$emit('setLayout', this.layout);
  }
}
</script>
