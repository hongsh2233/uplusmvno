<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      

      <div class="section">
        <div class="box_gray">
          <ul class="text_list bull">
            <li>신청완료일을 기준으로 14일이 지나지 않은 가입신청서만 확인할 수 있습니다. </li>
            <li>14일이 지난 가입신청서는 고객 정보보호를 위해 삭제되어 조회하실 수 없습니다.</li>
          </ul>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">총 <span class="fc01">4</span>건의 내가 신청한 요금제가 있습니다</h3>
          
        <div class="line_list">
          <ul>
            <li>
              <NuxtLink :to="{}" class="list_con ty01">
                <span class="tit ty02">5G 더빠른 180GB+</span>
                <span class="date"><!-- .date 내 각각 항목 span으로 구분 -->
                  <span>2022.02.02</span>
                  <span class="pc_show">통신사명</span>
                  <span class="pc_show">가입유형</span>
                </span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{}" class="list_con ty01">
                <span class="tit ty02">5G 더빠른 180GB+</span>
                <span class="date"><!-- .date 내 각각 항목 span으로 구분 -->
                  <span>2022.02.02</span>
                  <span class="pc_show">통신사명</span>
                  <span class="pc_show">가입유형</span>
                </span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{}" class="list_con ty01">
                <span class="tit ty02">5G 더빠른 180GB+</span>
                <span class="date"><!-- .date 내 각각 항목 span으로 구분 -->
                  <span>2022.02.02</span>
                  <span class="pc_show">통신사명</span>
                  <span class="pc_show">가입유형</span>
                </span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{}" class="list_con ty01">
                <span class="tit ty02">5G 더빠른 180GB+</span>
                <span class="date"><!-- .date 내 각각 항목 span으로 구분 -->
                  <span>2022.02.02</span>
                  <span class="pc_show">통신사명</span>
                  <span class="pc_show">가입유형</span>
                </span>
              </NuxtLink>
            </li>
          </ul>
            
          <!-- markup 변경 ; 23/11/08 -->
          <div class="btn_wrap center pc_hide">
            <button type="button" class="btn round more_d">더 볼래요</button>
          </div>
          <!-- //markup 변경 ; 23/11/08 -->

          <Pagination :option="{ pcShow: true }" />
        </div>

        <NoData :option="{type:'his', html:'<p>신청하신 내역이 없습니다</p>'}" />

      </div> <!-- // section -->



    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
import NoData from '@/components/NoData'
import Pagination from '@/components/Pagination'

export default {
  name: 'ALFM-MY02-LT00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '내가 신청한 요금제' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components: {
    NoData,
    Pagination
  }
}
</script>