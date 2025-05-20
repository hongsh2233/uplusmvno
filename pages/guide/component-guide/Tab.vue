<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>
          
      <div class="page_info">Tab</div>

      <div class="section">
        <Tab :data="{
            option: { type:1 },
            data: [
              { selected:true, controls:'tab_panel_01_01', title: '주소/매장명'},
              { selected:false, controls:'tab_panel_01_02', title: '지하철'},
              { selected:false, controls:'tab_panel_01_03', title: '내 위치'}
            ]
          }
        ">
          <template v-slot:tab_panel_01_01>
            <h3 class="blind">주소/매장명</h3>
            <div class="panel_cnt">
              주소/매장명
            </div>
          </template>
          <template v-slot:tab_panel_01_02>
            <h3 class="blind">지하철</h3>
            <div class="panel_cnt">
              지하철
            </div>
          </template>
          <template v-slot:tab_panel_01_03>
            <h3 class="blind">내 위치</h3>
            <div class="panel_cnt">
              내 위치
            </div>
          </template>
        </Tab>
      </div>

      <div class="section">
        <Tab :data="{
            option: { type:1 },
            data: [
              { selected:true, controls:'tab_panel_02_01', title: '사용자 리뷰'},
              { selected:false, controls:'tab_panel_02_02', title: '블로그 리뷰'},
            ]
          }
        ">
          <template v-slot:tab_panel_02_01>
            <h3 class="blind">사용자 리뷰</h3>
            <div class="panel_cnt">
              사용자 리뷰
            </div>
          </template>
          <template v-slot:tab_panel_02_02>
            <h3 class="blind">블로그 리뷰</h3>
            <div class="panel_cnt">
              블로그 리뷰
            </div>
          </template>
        </Tab>
      </div> <!-- // section -->



      <div class="section ty02">

        <Tab :data="{
            option: { type:2 },
            data: [
              { selected:true, controls:'tab_panel_03_01', title: '데이터', active:true },
              { selected:false, controls:'tab_panel_03_02', title: '소진시 속도', active:true},
              { selected:false, controls:'tab_panel_03_03', title: '가격', active:false },
              { selected:false, controls:'tab_panel_03_04', title: '통화량', active:false },
              { selected:false, controls:'tab_panel_03_05', title: '문자량', active:false },
              { selected:false, controls:'tab_panel_03_06', title: '파트너사', active:false },
              { selected:false, controls:'tab_panel_03_07', title: '통신기술', active:false },
              { selected:false, controls:'tab_panel_03_08', title: '할인 기간', active:false },
              { selected:false, controls:'tab_panel_03_09', title: '부가서비스', active:false },
              { selected:false, controls:'tab_panel_03_10', title: '전용요금제', active:false },
              { selected:false, controls:'tab_panel_03_11', title: '결합요금', active:false },
            ]
          }
        ">
          <template v-slot:tab_panel_03_01>
            <h3 class="blind">데이터</h3>
            <div class="panel_cnt">
              데이터
            </div>
          </template>
          <template v-slot:tab_panel_03_02>
            <h3 class="blind">소진시 속도</h3>
            <div class="panel_cnt">
              소진시 속도
            </div>
          </template>
          <template v-slot:tab_panel_03_03>
            <h3 class="blind">가격</h3>
            <div class="panel_cnt">
              가격
            </div>
          </template>
          <template v-slot:tab_panel_03_04>
            <h3 class="blind">통화량</h3>
            <div class="panel_cnt">
              통화량
            </div>
          </template>
          <template v-slot:tab_panel_03_05>
            <h3 class="blind">문자량</h3>
            <div class="panel_cnt">
              문자량
            </div>
          </template>
          <template v-slot:tab_panel_03_06>
            <h3 class="blind">파트너사</h3>
            <div class="panel_cnt">
              파트너사
            </div>
          </template>
          <template v-slot:tab_panel_03_07>
            <h3 class="blind">통신기술</h3>
            <div class="panel_cnt">
              통신기술
            </div>
          </template>
          <template v-slot:tab_panel_03_08>
            <h3 class="blind">할인 기간</h3>
            <div class="panel_cnt">
              할인 기간
            </div>
          </template>
          <template v-slot:tab_panel_03_09>
            <h3 class="blind">부가서비스</h3>
            <div class="panel_cnt">
              부가서비스
            </div>
          </template>
          <template v-slot:tab_panel_03_10>
            <h3 class="blind">전용요금제</h3>
            <div class="panel_cnt">
              전용요금제
            </div>
          </template>
          <template v-slot:tab_panel_03_11>
            <h3 class="blind">결합요금</h3>
            <div class="panel_cnt">
              결합요금
            </div>
          </template>
          
        </Tab>
      </div>

      

      <div class="section" style="display:none">

        <div class="tab_list02">
          <ul role="tablist">
            <li role="none" class="active on">
              <button type="button" role="tab" aria-selected="true" aria-controls="tab_panel_04_01" @click="tab.click">데이터</button>
            </li>
            <li role="none" class="active">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_02" @click="tab.click">소진시 속도</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_03" @click="tab.click">가격</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_04" @click="tab.click">통화량</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_05" @click="tab.click">문자량</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_06" @click="tab.click">파트너사</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_07" @click="tab.click">통신기술</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_08" @click="tab.click">할인 기간</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_09" @click="tab.click">부가서비스</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_10" @click="tab.click">전용요금제</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_11" @click="tab.click">결합요금</button>
            </li>
          </ul>
        </div>

        <div class="tabpanel_wrap">
          <div role="tabpanel" aria-expanded="true" tabindex="0" id="tab_panel_04_01">
            <h3 class="blind">데이터</h3>
            <div class="panel_cnt">
              데이터
            </div> <!-- // panel_cnt -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_02">
            <h3 class="blind">소진시 속도</h3>
            <div class="panel_cnt">
              소진시 속도
            </div> <!-- // panel_cnt -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_03">
            <h3 class="blind">가격</h3>
            <div class="panel_cnt">
              가격
            </div> <!-- // panel_cnt -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_04">
            <h3 class="blind">통화량</h3>
            <div class="panel_cnt">
              통화량
            </div> <!-- // panel_cnt -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_05">
            <h3 class="blind">문자량</h3>
            <div class="panel_cnt">
              문자량
            </div> <!-- // panel_cnt -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_06">
            <h3 class="blind">파트너사</h3>
            <div class="panel_cnt">
              파트너사
            </div> <!-- // panel_cnt -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_07">
            <h3 class="blind">통신기술</h3>
            <div class="panel_cnt">
              통신기술
              </div> <!-- // panel_cnt -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_08">
            <h3 class="blind">할인 기간</h3>
            <div class="panel_cnt">
              할인 기간
            </div> <!-- // panel_cnt -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_09">
            <h3 class="blind">부가서비스</h3>
            <div class="panel_cnt">
              부가서비스
            </div> <!-- // panel_cnt -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_10">
            <h3 class="blind">전용요금제</h3>
            <div class="panel_cnt">
              전용요금제
            </div> <!-- // panel_cnt -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_11">
            <h3 class="blind">결합요금</h3>
            <div class="panel_cnt">
              결합요금
              </div> <!-- // panel_cnt -->
          </div> <!-- // tabpanel -->
        </div> <!-- // tabpanel_wrap -->

      </div> <!-- // section -->

    </div> <!-- // content -->
  </div> <!-- // container -->

</template>

<script>
import Tab from '@/components/Tab'

export default {
  name: "GuideTab",
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    Tab,
  }
};
</script>
