<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">Tag & Filter Vue</div>

      <div class="section">
        <h3 class="tit03">Tag component</h3>
        <h3 class="tit02">&lt;Tag :data="dataTag" :option="{ type:'block', multi: false }" /></h3>

        <div class="box_yellow">
          <p><b>type</b>: default, block, expanded, expandedResize</p>
          <p><b>multi</b>: true, false (다중선택 유무)</p>
        </div>
      </div>
      
      <div class="section">
        <h3 class="tit02">block, disabled</h3>
        <Tag :data="frontData.tag.categorySample1" :option="{ type:'block', multi: false }" />

        <br>
        <h3 class="tit02">default, multi</h3>
        <Tag :data="frontData.tag.categorySample2" :option="{ type:'default', multi: true }" />

        <br>
        <h3 class="tit02">expanded</h3>
        <Tag :data="frontData.tag.categorySample3" :option="{ type:'expanded', multi: false }" />

        <br>
        <h3 class="tit02">expanded (hasSelect)</h3>
        <Tag :data="frontData.tag.categorySample4" :option="{ type:'expanded', multi: false }" />

        <br>
        <h3 class="tit02">expandedResize</h3>
        <Tag :data="frontData.tag.categorySample5" :option="{ type:'expandedResize', multi: false }" />

      </div><!-- .section -->
      


      <div class="section ty02">
        <h3 class="tit03">Filter component</h3>
        <Filter :data="PR01PG00_checked" @filterDelete="filterDelete($event)" />
      </div>


      <div class="section ty02">
        <h3 class="tit03">요금제 "필터" sample</h3> <!-- 10/16 문구 변경 '꼼꼼하게 찾기' ==> '필터' -->

        <div class="filter_wrap">

          <Tag :data="frontData.tag.categorySample3" :option="{ type:'expanded', multi: true }" />
          <Tag :data="frontData.tag.categorySample2" :option="{ type:'expanded', multi: false }" />

          <div class="check_wrap">
            <div class="inner">
              <div class="check_st">
                <input type="checkbox" id="checkbox01_01" name="">
                <label for="checkbox01_01">U+인터넷결합요금제</label> <!-- 10/16 문구 변경 'U+결합요금제' ==> 'U+인터넷결합요금제' -->
              </div>
              <div class="check_st">
                <input type="checkbox" id="checkbox01_02" name=""> 
                <label for="checkbox01_02">알뜰폰닷컴ONLY</label> <!-- 10/16 문구 변경 '바로배송' ==> '알뜰폰닷컴ONLY' -->
              </div>
            </div>
            <button type="button" class="filter_detail" id="btn_PR01PG00" @click="this.$emit('openPopup', ['PR01PG00', 'btn_PR01PG00', 101]);">필터</button> <!-- 10/16 문구 변경 '꼼꼼하게 찾기' ==> '필터' -->
          </div>

        </div> <!-- // filter_wrap -->
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div> <!-- // container -->
</template>



<script>
import Tag from '@/components/Tag'
import Filter from '@/components/Filter'

export default {
  name: "GuideTag",
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },

      // 필터
      PR01PG00: this.frontData.filter,
      PR01PG00_checked: [
        { id: 'filter_radio01_01', value: '데이터 전체' },
        { id: 'filter_radio02_01', value: '가격 전체' },
        { id: 'filter_radio03_01', value: '통신기술 전체' },
        { id: 'filter_radio04_01', value: '할인 전체' }
      ],
    }
  },
  methods: {
    
    /** 필터 */
    PR01PG00Init(){
      this.PR01PG00_checked = [];
      // const values = Object.values(this.PR01PG00);
      const keys = Object.keys(this.PR01PG00);

      keys.forEach( a => {
        this.PR01PG00[a].forEach((item)=>{
          if( item.checked == true ){
            this.PR01PG00_checked.push({ id:item.id, value:item.value });
          }
        });
      })
      // console.log(this.PR01PG00_checked);
    },
    filterDelete($event){
      const deleteId = $event.id;
      const keys = Object.keys(this.PR01PG00);
      keys.forEach( a => {
        this.PR01PG00[a].forEach((item)=>{
          if( item.id == deleteId ){ item.checked = false }
        });
      });
      this.PR01PG00Init();
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components: {
    Tag,
    Filter
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
};
</script>