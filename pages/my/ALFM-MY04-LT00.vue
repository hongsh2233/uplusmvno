<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>
      

      

      <div class="section">
        <!-- 내가찜한 요금제 > 회원인 경우 -->
        <div class="box_yellow">
          <div class="my_box">
            <p>
              찜한 요금제는 <span>최대 30일 이내 <br>
              50개</span>까지 유지됩니다.
            </p>
            <NuxtLink :to="{}" role="button" class="btn sm c01">요금제 전체 보러가기</NuxtLink>
          </div>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <button type="button" class="btn_text ty02">전체삭제하기</button>
        <div class="item_list ty02">
          <Card :cardInfo="{type: 'ty01', name: 'prd1', detail: false }" />
          <Card :cardInfo="{type: 'ty01', name: 'prd2', detail: false }" />

          <!-- markup 변경 ; 23/11/08 -->
          <div class="btn_wrap center">
            <button type="button" class="btn round more_d">더 볼래요</button>
          </div>
          <!-- //markup 변경 ; 23/11/08 -->
        </div>
        
        <NoData :option="{type:'his', html:'<p>찜한 요금제가 없습니다</p>'}" />
          
      </div><!-- // section -->

      <Compare @openPopup="this.$emit('openPopup', $event)" />

    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
import Card from '@/components/Card'
import NoData from '@/components/NoData'
import Compare from '@/components/Compare'

export default {
  name: 'ALFM-MY04-LT00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '내가 찜한 요금제' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components: {
    Card,
    NoData,
    Compare
  }
}
</script>