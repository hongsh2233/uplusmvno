<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>


      <div class="section">
        <div class="form_group">
          <div class="form_item">
            <button type="button" class="btn_select boardsort" ref="btn_boardSort" @click="$refs.boardSort.open">전체</button>
            <InputBox :option="{ placeholder:'검색어를 입력해주세요', search:true, }" @inputValue="console.log($event)" />
          </div>
          <PopupSelect ref="boardSort" :option="{ data:'boardSort', popupTitle:'검색 구분', targetBtn:'btn_boardSort' }" @selectItem="console.log($event)" />
        </div>
        <!-- 중간 section 삭제 ; 23/11/10  -->
        <div class="line_list">
          <ul>
            <li>
              <NuxtLink :to="{}" class="list_con ty01">
                <span class="tit">[안내] eSIM 안내<span class="bag clr c06">중요</span></span>
                <span class="date">2022.02.02</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{}" class="list_con ty01">
                <span class="tit">[안내] 우체국 알뜰폰 컨설팅존 위치 및 오픈시간</span>
                <span class="date">2022.08.10</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{}" class="list_con ty01">
                <span class="tit">[안내] 모두의 유심, 원칩_통신사별 개통 안내</span>
                <span class="date">2022.08.10</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{}" class="list_con ty01">
                <span class="tit">[안내] 알뜰폰 파트너스 참여사업자 기본 정보 안내</span>
                <span class="date">2022.08.10</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="list_con ty01">
                <span class="tit">[보도자료] U+알뜰폰 파트너스 1년간 신규 가입자 43% ↑</span>
                <span class="date">2022.07.10</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div> <!-- // section -->



    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
import PopupSelect from '@/components/PopupSelect';

export default {
  name: 'ALFM-CS03-PG00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '공지사항' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    PopupSelect,
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>