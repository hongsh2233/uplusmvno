<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">form etc</div>

      <div class="section">
        <h3 class="tit02">mvno_list</h3>
        <MVNOList :option="{ type:'select', data:'MVNO' }" @MVNOSelect="console.log($event)" />
      </div> <!-- // section -->


      <div class="section">
        <h3 class="tit02">radio_item ty01</h3>
        <div class="radio_item ty01">
          <input type="radio" id="radio01_01" name="radio01">
          <label for="radio01_01">radio01_01</label>
        </div>
        <div class="radio_item ty01">
          <input type="radio" id="radio01_02" name="radio01" checked>
          <label for="radio01_02">radio01_02</label>
        </div>
        <div class="radio_item ty01">
          <input type="radio" id="radio01_03" name="radio01" disabled>
          <label for="radio01_03">radio01_03</label>
        </div>
        <div class="radio_item ty01">
          <input type="radio" id="radio01_04" name="radio01" disabled>
          <label for="radio01_04">radio01_04</label>
        </div>
        
        <br>

        <div class="item_list03">
          <ul>
            <li v-for="(a, i) in [
              { checked:false, id:'item_select_01', value:'LG U+' },
              { checked:false, id:'item_select_02', value:'SKT' },
              { checked:false, id:'item_select_03', value:'KT' },
              { checked:false, id:'item_select_04', value:'LG U+ 알뜰폰' },
              { checked:false, id:'item_select_05', value:'SKT 알뜰폰' },
              { checked:false, id:'item_select_06', value:'KT 알뜰폰' },
              { checked:false, id:'item_select_07', value:'없음' },
            ]" :key="i">
              <div class="radio_item ty01">
                <input type="radio" :id="a.id" name="filter_radio01" :value="a.id" v-bind:checked="a.checked">
                <label :for="a.id">{{ a.value }}</label>
              </div>
            </li>
          </ul>
        </div>
        
      </div><!-- .section -->


      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit02">radio_item ty01</h3>
          <span>item_list02 radio_active</span>
        </div>

        <RadioActive
          :data="{
            option: { type:'ty01', itemList: 2, },
            data: [
              { checked:false, id:'ty01_radio_01', value:'전체' },
              { checked:false, id:'ty01_radio_02', value:'데이터 무제한' },
              { checked:false, id:'ty01_radio_03', value:'1GB 미만' },
              { checked:false, id:'ty01_radio_04', value:'1~5GB' },
              { checked:false, id:'ty01_radio_05', value:'5~15GB' },
              { checked:false, id:'ty01_radio_06', value:'15~50GB' },
              { checked:false, id:'ty01_radio_07', value:'50~100GB' },
            ]
          }"
          @checkItem="console.log($event)"
        />
      </div><!-- .section -->


      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit02">radio_item ty02</h3>
          <span>item_list radio_active</span>
        </div>

        <RadioActive
          :data="{
            option: { type:'ty02', itemList: 1, },
            data: [
              { checked:false, id:'ty02_radio_01', value:'지금배송/택배', img:'/images/component/img_delivery.png', },
              { checked:false, id:'ty02_radio_02', value:'GS25 바로픽업', img:'/images/component/img_gs25.png' },
              { checked:false, id:'ty02_radio_03', value:'세븐일레븐 바로픽업', img:'/images/component/img_seven_eleven.png' },
              { checked:false, id:'ty02_radio_04', value:'이마트24 바로픽업', img:'/images/component/img_emart.png' },
            ]
          }"
          @checkItem="console.log($event)"
        />
      </div><!-- .section -->


      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit02">radio_item ty02</h3>
          <span>item_list radio_active</span>
        </div>

        <RadioActive
          :data="{
            option: { type:'ty02', itemList: 1, },
            data: [
              { checked:false, id:'ty02_radio02_01', value:'필요해요!' },
              { checked:false, id:'ty02_radio02_02', value:'필요하지 않아요' },
            ]
          }"
          @checkItem="console.log($event)"
        />
      </div><!-- .section -->


      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit02">radio_item ty03</h3>
          <span>item_list radio_active</span>
        </div>

        <RadioActive
          :data="{
            option: { type:'ty03', itemList: 1, },
            data: [
              { checked:false, id:'ty03_list_01_01', value:'일반', info:'만 19세 이상의 성인이에요' },
              { checked:false, id:'ty03_list_01_02', value:'미성년자', info:'만 19세 미만이에요' },
              { checked:false, id:'ty03_list_01_03', value:'외국인(Foreigner)', info:'외국인 번호가 있어요' },
              { checked:false, id:'ty03_list_01_04', value:'외국인 미성년자⁠(Foreigner Minors)', info:'만 19세 미만이고 외국인 번호가 있어요' },
            ]
          }"
          @checkItem="console.log($event)"
        />
      </div><!-- .section -->


      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit02">radio_item ty04</h3>
          <span>item_list radio_active</span>
        </div>

        <RadioActive
          :data="{
            option: { type:'ty04', itemList: 1, },
            data: [
              { checked:false, id:'ty04_radio_01', value:'초고화질의 영상을 자주보고, 게임 등 다양한 컨텐츠 소비를 해요', info:'100GB 보다 많이 사용', img:'/images/component/img_game.png' },
              { checked:false, id:'ty04_radio_02', value:'1-2시간 이상 영상을 보고, SNS 등 사용량이 많아요', info:'약 50~100B 사용', img:'/images/component/img_thum.png' },
              { checked:false, id:'ty04_radio_03', value:'카톡이나 SNS, 인터넷 검색 등에 주로 데이터를 사용해요', info:'약 10~50GB 사용', img:'/images/component/img_sns.png' },
              { checked:false, id:'ty04_radio_04', value:'와이파이를 주로 이용하고, 데이터는 거의 사용하지 않아요', info:'약 10GB 미만 사용', img:'/images/component/img_wifi.png' },
            ]
          }"
          @checkItem="console.log($event)"
        />
      </div><!-- .section -->


      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit02">radio_item ty05</h3>
          <span>item_list radio_active</span>
        </div>

        <RadioActive
          :data="{
            option: { type:'ty05', itemList: 1, },
            data: [
              { checked:false, id:'ty05_radio_01', value:`번호이동 <span class='bag clr c06'>혜택</span>`, info:'지금 쓰고 있는 내 번호 그대로!', img:'/images/component/img_num_move.png' },
              { checked:false, id:'ty05_radio_02', value:'신규가입', info:'새로운 번호가 필요해요!', img:'/images/component/img_num_new.png' },
            ]
          }"
          @checkItem="console.log($event)"
        />
      </div><!-- .section -->


      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit02">radio_item ty06</h3>
          <span>item_list02</span>
        </div>
        <div class="item_list02">
          <ul>
            <li>
              <div class="radio_item ty06">
                <input type="radio" id="ty06_radio_01" name="ty06_radio">
                <label for="ty06_radio_01" class="img_os01">아이폰</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty06">
                <input type="radio" id="ty06_radio_02" name="ty06_radio">
                <label for="ty06_radio_02" class="img_os02">갤럭시</label>
              </div>
            </li>
          </ul>
        </div> <!-- // item_list02 -->
      </div><!-- .section -->


      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit02">radio_item ty07</h3>
          <span>item_list03</span>
        </div>
        <div class="item_list03">
          <ul>
            <li>
              <div class="radio_item ty07">
                <input type="radio" id="ty07_radio_01" name="ty07_radio">
                <label for="ty07_radio_01" class="img_pay ty01">신용카드</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty07">
                <input type="radio" id="ty07_radio_02" name="ty07_radio">
                <label for="ty07_radio_02" class="img_pay ty02">실시간 계좌이체</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty07">
                <input type="radio" id="ty07_radio_03" name="ty07_radio">
                <label for="ty07_radio_03" class="img_pay ty03">삼성페이</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty07">
                <input type="radio" id="ty07_radio_04" name="ty07_radio">
                <label for="ty07_radio_04" class="img_pay ty04">카카오페이</label>
              </div>
            </li>
            <li>
              <div class="radio_item ty07">
                <input type="radio" id="ty07_radio_05" name="ty07_radio">
                <label for="ty07_radio_05" class="img_pay ty05">네이버페이</label>
              </div>
            </li>
          </ul>
        </div> <!-- // item_list03 -->
      </div> <!-- // section -->


    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import MVNOList from '@/components/MVNOList'
import RadioActive from '@/components/RadioActive'

export default {
  name: 'GuideFormEtc',
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
    MVNOList,
    RadioActive,
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>
