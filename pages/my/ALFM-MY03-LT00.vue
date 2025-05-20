<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      

      <div class="section">
        <div class="box_gray">
          <ul class="text_list bull">
            <li>결제 완료일을 기준으로 1개월이 지나지 않은 내역만 확인할 수 있습니다.</li>
            <li>1개월이 지난 구매 내역은 고객 정보보호를 위해 삭제되어 조회하실 수 없습니다.</li>
          </ul>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">총 <span class="fc01">4</span>건의 구매내역이 있습니다</h3>
          
        <div class="line_list">
          <ul>
            <li>
              <NuxtLink :to="{}" class="list_con ty01">
                <span class="tit ty02">모두의 유심, 원칩</span>
                <span class="date"><!-- .date 내 각각 항목 span으로 구분 -->
                    <span>2022.02.02</span>
                    <span>택배배송</span>
                    <span class="pc_show">결제금액</span>
                    <span class="pc_show">결제방법</span>
                </span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{}" class="list_con ty01">
                <span class="tit ty02">모두의 유심, 원칩</span>
                <span class="date"><!-- .date 내 각각 항목 span으로 구분 -->
                    <span>2022.02.02</span>
                    <span>택배배송</span>
                    <span class="pc_show">결제금액</span>
                    <span class="pc_show">결제방법</span>
                </span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{}" class="list_con ty01">
                <span class="tit ty02">모두의 유심, 원칩</span>
                <span class="date"><!-- .date 내 각각 항목 span으로 구분 -->
                    <span>2022.02.02</span>
                    <span>택배배송</span>
                    <span class="pc_show">결제금액</span>
                    <span class="pc_show">결제방법</span>
                </span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{}" class="list_con ty01">
                <span class="tit ty02">모두의 유심, 원칩</span>
                <span class="date"><!-- .date 내 각각 항목 span으로 구분 -->
                    <span>2022.02.02</span>
                    <span>택배배송</span>
                    <span class="pc_show">결제금액</span>
                    <span class="pc_show">결제방법</span>
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
        
        <NoData :option="{type:'his', html:'<p>구매하신 내역이 없습니다</p>'}" />
        
      </div> <!-- // section -->



    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
import Pagination from '@/components/Pagination'
import NoData from '@/components/NoData'

export default {
  name: 'ALFM-MY03-LT00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '내가 구매한 USIM' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components: {
    Pagination,
    NoData,
  }
}
</script>