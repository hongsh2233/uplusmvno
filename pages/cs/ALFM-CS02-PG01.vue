<template>

  <div class="container">
    <div class="content cont_map" id="content" ref="fullH">
      <h2 class="title_nav">{{ layout.title }}</h2>


      <div class="cm_wrap">
        <div class="shop_search_area">
          <div class="section">
            <div class="form_group">
              <div class="form_item">
                <InputBox :option="{ placeholder:'어느 매장을 방문하고 싶으세요?', search:true }" @inputValue="console.log($event)" />
              </div>
            </div>
          </div>
          

          <div class="shop_none" v-if="maker.length == 0">
            <NoData :option="{type:'sch', html:'<p>입력하신 지역으로 <br>이용 가능한 매장 정보가 없습니다.</p>'}" />
            
            <div class="box_gray">
              <p class="tip">자주하는 질문에서 궁금하신 내용을<br class="pc_show" /> 해결해 보세요.</p>
              <NuxtLink :to="{}" role="button" class="btn xsm c07">자주하는 질문</NuxtLink>
            </div>
          </div>


          <div class="shop_area" v-if="maker.length > 0">
            <div class="shop_check">
              <div class="but">
                <button type="button" class="all" :class="{on : shopCheckAll}" @click="clickShopCheck">전체</button>
                <button type="button" class="al" :class="{on : shopCheck[0]}" @click="shopCheck[0] = !shopCheck[0]">알뜰폰+</button>
                <button type="button" class="cs" :class="{on : shopCheck[1]}" @click="shopCheck[1] = !shopCheck[1]">CS업무</button>
                <button type="button" class="us" :class="{on : shopCheck[2]}" @click="shopCheck[2] = !shopCheck[2]">선불유심개통</button>
              </div>

              <button type="button" class="tip_more" :class="{on : showTooltip}" :aria-expanded="showTooltip">
                <span class="pc_hide" @click="showTooltip = !showTooltip">더 자세한 설명이 필요하신가요?</span>
                <span class="pc_show" @click="showTooltip = !showTooltip">안내</span>
              </button>

              <Transition name="mapTooltip">
                <div class="tip" role="tooltip" v-if="showTooltip">
                  <ul>
                    <li class="al">알뜰폰+ : +알파 전용 매장이에요. (알뜰폰 CS상담 및 선불유심 개통 가능)</li>
                    <li class="cs">CS업무 : LGU+매장이지만, 알뜰폰 CS상담이 가능한 매장이에요.</li>
                    <li class="us">선불유심개통 : LGU+매장이지만, 알뜰폰 선불유심을 개통 할 수 있는 매장이에요.</li>
                  </ul>
                  <button type="button" @click="showTooltip = !showTooltip"><span>숨기기</span></button>
                </div>
              </Transition>
            </div>

            <div class="shop_list">
              <button type="button" :aria-expanded="bottomSheet" @click="setbottomSheet" @touchstart="touchStart" @touchend="touchEnd">주변 방문 가능한 매장 <b>32</b>개</button>
              <Transition name="mapBottomSheet">
                <div role="region" v-if="bottomSheet">
                  <ul>
                    <li>
                      <NuxtLink :to="{}" role="button" class="shop_card" id="btn_shopDetail" @click="this.$emit('openPopup', ['shopDetail', 'btn_shopDetail', 101]);">
                        <div>
                          <strong>LG유플러스 상암동 누리꿈점</strong>
                          <i class="fla01">알뜰폰+</i>
                        </div>
                        <ul>
                          <li>서울 마포구 월드컵북로 396, 100호 (상암동 1605, 누리꿈스퀘어 1F)</li>
                          <li>070-358-3515</li>
                        </ul>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="{}" role="button" class="shop_card">
                        <div>
                          <strong>LG유플러스 상암사옥</strong>
                          <i class="fla02">CS업무</i>
                        </div>
                        <ul>
                          <li>서울 마포구 월드컵북로 396, 100호 (상암동 1605, 누리꿈스퀘어 1F)</li>
                          <li>070-358-3515</li>
                        </ul>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="{}" role="button" class="shop_card">
                        <div>
                          <strong>LG유플러스 남가좌동 가좌역점</strong>
                          <i class="fla03">선불유심개통</i>
                        </div>
                        <ul>
                          <li>서울 마포구 월드컵북로 396, 100호 (상암동 1605, 누리꿈스퀘어 1F)</li>
                          <li>070-358-3515</li>
                        </ul>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="{}" role="button" class="shop_card" @click="this.$emit('openPopup', ['shopDetail', 'btn_shopDetail', 101]);">
                        <div>
                          <strong>LG유플러스 상암동 누리꿈점</strong>
                          <i class="fla01">알뜰폰+</i>
                        </div>
                        <ul>
                          <li>서울 마포구 월드컵북로 396, 100호 (상암동 1605, 누리꿈스퀘어 1F)</li>
                          <li>070-358-3515</li>
                        </ul>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="{}" role="button" class="shop_card">
                        <div>
                          <strong>LG유플러스 상암사옥</strong>
                          <i class="fla02">CS업무</i>
                        </div>
                        <ul>
                          <li>서울 마포구 월드컵북로 396, 100호 (상암동 1605, 누리꿈스퀘어 1F)</li>
                          <li>070-358-3515</li>
                        </ul>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="{}" role="button" class="shop_card">
                        <div>
                          <strong>LG유플러스 남가좌동 가좌역점</strong>
                          <i class="fla03">선불유심개통</i>
                        </div>
                        <ul>
                          <li>서울 마포구 월드컵북로 396, 100호 (상암동 1605, 누리꿈스퀘어 1F)</li>
                          <li>070-358-3515</li>
                        </ul>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </Transition> 
            </div>
          </div> <!-- // shop_area -->
        </div> <!-- // shop_search_area -->

        <div class="map_area" @click="clickMapArea">
          <span style="display:block; padding:5rem; text-align:center;">지도</span>

          <div style="position:absolute; top:0; left:0; width:50px; height:80px; background-color:rgba(0,0,0,0.4); color:#fff; text-align:center;">x:30, y:50</div>

          
          <div class="map_pin" :class="{ big : a.on }" v-for="(a, i) in maker" :key="a" :style="`position:absolute; left:${a.left}; top:${a.top}; z-index:${a.zIndex}`">
            <NuxtLink :to="{}" role="button" @click.stop="clickPin(i)">
              <img :src="`/_nuxt/assets/images/common/${a.pin}.png`" alt="">
            </NuxtLink>
            <div class="map_marker_pop" v-if="a.on">
              <NuxtLink :to="{}" class="inner">
                <dl>
                  <dt>{{ a.title }}</dt>
                  <dd>{{ a.tel }}</dd>
                  <dd>{{ a.time }}</dd>
                </dl>
              </NuxtLink>
            </div>
          </div>

        </div> <!-- // map_area -->
      </div>


    </div> <!-- // content -->
  </div><!-- // container -->
    
</template>
    
<script>
import NoData from '@/components/NoData'
import InputBox from '@/components/InputBox'

export default {
  name: 'ALFM-CS02-PG01',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '내 주변 매장 찾기' },
      shopCheckAll: true,
      shopCheck: [true, true, true],
      showTooltip: false,
      maker: [
        // { title: "LG유플러스 상암동 누리꿈점 누리꿈점", tel: "070-358-3515", time: "오전 10:00 ~ 오후 20:00", pin: "ico_pin01", on: false, left: "50px", top:"80px", zIndex: 0 },
        // { title: "LG유플러스 상암동 누리꿈점 누리꿈점", tel: "070-358-3515", time: "오전 10:00 ~ 오후 20:00", pin: "ico_pin02", on: false, left: "30px", top:"130px", zIndex: 0 },
        // { title: "LG유플러스 상암동 누리꿈점 누리꿈점", tel: "070-358-3515", time: "오전 10:00 ~ 오후 20:00", pin: "ico_pin03", on: false, left: "30px", top:"180px", zIndex: 0 },
        // { title: "LG유플러스 상암동 누리꿈점 누리꿈점", tel: "070-358-3515", time: "오전 10:00 ~ 오후 20:00", pin: "ico_pin03", on: false, left: "130px", top:"230px", zIndex: 0 },
        // { title: "LG유플러스 상암동 누리꿈점 누리꿈점", tel: "070-358-3515", time: "오전 10:00 ~ 오후 20:00", pin: "ico_pin02", on: false, left: "150px", top:"310px", zIndex: 0 },
        // { title: "LG유플러스 상암동 누리꿈점 누리꿈점", tel: "070-358-3515", time: "오전 10:00 ~ 오후 20:00", pin: "ico_pin01", on: false, left: "190px", top:"290px", zIndex: 0 },
      ],
      makerOn: null,
      touch: { startY: 0, endY: 0 },
      bottomSheet: false,
    }
  },
  watch: {
    shopCheck: {
      handler(val){
        const falseItem = val.filter( a => a==false );
        this.shopCheckAll = ( falseItem.length < 1 ) ? true : false;
      }, deep: true,
    },
    // 'touch.startY': function(val){
    //   this.touchAction();
    // },
    'touch.endY': function(val){
      this.setbottomSheet();
    },
    makerOn(idx){

      let newArr = this.maker.map( (a, i) => {
        if( i == idx ){
          a.pin = a.pin + "_big";
          a.on = true;
          a.zIndex = 2;
        } else {
          a.pin = a.pin.replace("_big", "");
          a.on = false;
          a.zIndex = 0;
        }
        return a;
      });

      this.maker = newArr;
    }
  },
  methods: {
    clickShopCheck(){
      const isFalse = this.shopCheck.filter( a => a==false );
      if( isFalse.length ){
        this.shopCheck = this.shopCheck.map( a => a = true );
      } else {
        this.shopCheck = this.shopCheck.map( a => a = false );
      }
    },
    clickPin(idx){
      this.makerOn = idx;
    },
    clickMapArea(){
      this.makerOn = null;
    },
    touchStart(e){
      const touch = e.changedTouches[0] || e.touches[0];
      this.touch.startY = touch.screenY;
    },
    touchEnd(e){
      const touch = e.changedTouches[0] || e.touches[0];
      this.touch.endY = touch.screenY;
    },
    setbottomSheet(e){
      if( e != undefined ){
        this.bottomSheet = !this.bottomSheet;
        return;
      }

      if( this.touch.startY - this.touch.endY > 50 ){
        this.bottomSheet = true;
      } else if( this.touch.endY - this.touch.startY > 50 ){
        this.bottomSheet = false;
      }
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    const isPC = document.querySelector("html").classList.contains("pc");
    this.bottomSheet = isPC ? true : false;
  },
  components:{
    NoData,
    InputBox
  }
}
</script>