<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>


      

      <div class="section">
        <!-- 최근 둘러본 요금제 > 미로그인 시 -->
        <div class="box_yellow">
          <div class="my_box">
            <p>
              최근 둘러본 요금제는 <span>10개</span>까지만 유지되며,<br>
              더 많은 요금제를 보고 싶다면 로그인 해 보세요!
            </p>
            <div class="btn_group">
              <NuxtLink :to="{}" role="button" class="btn sm c02">로그인</NuxtLink>
              <NuxtLink :to="{}" role="button" class="btn sm c01">요금제 전체 보러가기</NuxtLink>
            </div>
          </div>
        </div>
        
        <br>

        <!-- 최근 둘러본 요금제 > 로그인 시 -->
        <div class="box_yellow">
          <div class="my_box">
            <p>
              최근 둘러본 요금제는 <br>
              <span>최대 30일 이내 50개</span>까지 유지되며, <br>
              로그인 전 확인한 상품은 일부 제한될 수 있습니다
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
        
        <NoData :option="{type:'his', html:'<p>최근 둘러본 요금제가 없습니다</p>'}" />
        
      </div><!-- // section -->
      

      <Compare @openPopup="this.$emit('openPopup', $event)" />

    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
import NoData from '@/components/NoData'
import Card from '@/components/Card'
import Compare from '@/components/Compare'

export default {
  name: 'ALFM-MY05-LT00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '최근 둘러본 요금제' },
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