<template>

  <div class="container">
    <div class="content main" id="content">

      <div class="section main_top">
        <NuxtLink :to="{}" class="link_plan">
          <strong>나에게 <span>꼭</span> 맞는<br> 저렴한 요금제 찾기</strong>
          <em>바로가기</em>
          <i>
            <Lottie name="mainChar" />
          </i>
        </NuxtLink>
        <NuxtLink :to="{}" class="link_ranking">3월 알뜰폰닷컴 요금제 랭킹 보기</NuxtLink>

        <SwiperMainBnr />
      </div> <!-- // section -->

      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">내가 찜한 요금제</h3>
          <NuxtLink :to="{}" class="more">더보기</NuxtLink>
        </div>

        <!-- swiper - 내가 찜한 요금제 -->
        <SwiperCard :data="frontData.swiper.rateplan" :option="{ type: 'rateplan' }" />

      </div> <!-- // section -->

      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">최근 본 요금제</h3>
          <NuxtLink :to="{}" class="more">더보기</NuxtLink>
        </div>

        <!-- swiper - 최근 본 요금제 -->
        <SwiperCard :data="frontData.swiper.rateplan3" :option="{ type: 'rateplan' }" />
      </div> <!-- // section -->

      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">추천 요금제를 만나보세요</h3>
          <NuxtLink :to="{}" class="more">전체보기</NuxtLink>
        </div>

        <Tag :data="frontData.tag.recom" :option="{ type:'default', multi: false }" />

        <div class="item_list ty02">
          <Card :cardInfo="{type: 'ty01', name: 'plan01' }" />
          <Card :cardInfo="{type: 'ty01', name: 'plan02' }" />
          <Card :cardInfo="{type: 'ty01', name: 'plan03' }" />
          <Card :cardInfo="{type: 'ty01', name: 'plan04' }" />
          <Card :cardInfo="{type: 'ty01', name: 'plan05' }" />
          <div class="btn_group">
            <button type="button" class="btn md c05">더볼래요</button>
          </div>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">주요서비스를 만나보세요</h3>
        </div>
        <ul class="main_service">
          <li class="svc01">
            <NuxtLink :to="{}">결합 요금제</NuxtLink>
          </li>
          <li class="svc02">
            <NuxtLink :to="{}">친구 초대</NuxtLink>
          </li>
          <li class="svc03">
            <NuxtLink :to="{}">지금배송</NuxtLink>
          </li>
        </ul>
      </div> <!-- // section -->

      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">데이터별로 추천해드릴께요</h3>
        </div>
        <div class="main_data_select">
          <div class="item_list03">
            <ul>
              <li>
                <div class="radio_item ty01">
                  <input type="radio" id="data_select_01" name="data_select" @change="checked = true">
                  <label for="data_select_01">데이터 무제한</label>
                </div>
              </li>
              <li>
                <div class="radio_item ty01">
                  <input type="radio" id="data_select_02" name="data_select" @change="checked = true">
                  <label for="data_select_02">50~100GB</label>
                </div>
              </li>
              <li>
                <div class="radio_item ty01">
                  <input type="radio" id="data_select_03" name="data_select" @change="checked = true">
                  <label for="data_select_03">15~50GB</label>
                </div>
              </li>
              <li>
                <div class="radio_item ty01">
                  <input type="radio" id="data_select_04" name="data_select" @change="checked = true">
                  <label for="data_select_04">5~15GB</label>
                </div>
              </li>
              <li>
                <div class="radio_item ty01">
                  <input type="radio" id="data_select_05" name="data_select" @change="checked = true">
                  <label for="data_select_05">1~5GB</label>
                </div>
              </li>
              <li>
                <div class="radio_item ty01">
                  <input type="radio" id="data_select_06" name="data_select" @change="checked = true">
                  <label for="data_select_06">1GB 미만</label>
                </div>
              </li>
            </ul>
          </div> <!-- // item_list03 -->

          <div class="btn_group">
            <button type="button" class="btn md c03" v-bind:disabled="goPlan == false" >요금제 보러가기</button>
          </div>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">당신에게 필요한 정보를 모았어요</h3>
        </div>
        <div class="main_bnr_wrap">
          <div class="bnr_area">
            <NuxtLink :to="{}">
              <img src="/images/data/img_main_bnr04.png" alt="충전하여 사용하는 충전형 요금제 상담받자!">
            </NuxtLink>
          </div>
          <div class="bnr_area">
            <NuxtLink :to="{}">
              <img src="/images/data/img_main_bnr03.png" alt="알뜰폰 + TV + 인터넷 올인원 결합 혜택">
            </NuxtLink>
          </div>
          <div class="bnr_area">
            <NuxtLink :to="{}">
              <img src="/images/data/img_main_bnr02.png" alt="U+알뜰폰, 우체국에서 상담받고 개통하자!">
            </NuxtLink>
          </div>
        </div>
        <div class="btn_group">
          <button type="button" class="btn md c05">더볼래요</button>
        </div>
      </div> <!-- // section -->

      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">함께하는 파트너사를 <br class="pc_hide">만나보세요</h3>
          <NuxtLink :to="{}" class="more bottom">전체보기</NuxtLink>
        </div>
        <div class="main_partner">
          <ol>
            <li :class="{on : partnerActive[0]}">
              <NuxtLink :to="{}">
                <div class="partner">
                  <strong>프리티</strong>
                  <div class="star"><span class="blind">별점</span><span class="score">4.7</span></div>
                  <img src="/images/data/logo_s_partner06.png" alt="프리티">
                </div>
                <p v-if="partnerActive[0]">통신요금을 아끼고 속도도 빨라서 매우 만족하고 있습니다. 굳이 비싼 요금제를 사용할 필요없다는 생각이네요. 가족들에게도 추천했어요.</p>
              </NuxtLink>
            </li>
            <li :class="{on : partnerActive[1]}">
              <NuxtLink :to="{}">
                <div class="partner">
                  <strong>티플러스</strong>
                  <div class="star"><span class="blind">별점</span><span class="score">3.8</span></div>
                  <img src="/images/data/logo_s_partner21.png" alt="티플러스">
                </div>
                <p v-if="partnerActive[1]">통신요금을 아끼고 속도도 빨라서 매우 만족하고 있습니다. 굳이 비싼 요금제를 사용할 필요없다는 생각이네요. 가족들에게도 추천했어요.</p>
              </NuxtLink>
            </li>
            <li :class="{on : partnerActive[2]}">
              <NuxtLink :to="{}">
                <div class="partner">
                  <strong>스마텔</strong>
                  <div class="star"><span class="blind">별점</span><span class="score">4.4</span></div>
                  <img src="/images/data/logo_s_partner13.png" alt="스마텔">
                </div>
                <p v-if="partnerActive[2]">통신요금을 아끼고 속도도 빨라서 매우 만족하고 있습니다. 굳이 비싼 요금제를 사용할 필요없다는 생각이네요. 가족들에게도 추천했어요.</p>
              </NuxtLink>
            </li>
          </ol>

          <SwiperFlow />

        </div>

      </div> <!-- // section -->

      <Compare @openPopup="this.$emit('openPopup', $event)" />

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import Lottie from "@/components/Lottie";
import Card from '@/components/Card'
import SwiperCard from '@/components/SwiperCard'
import SwiperMainBnr from '@/components/SwiperMainBnr'
import SwiperFlow from '@/components/SwiperFlow'
import Tag from '@/components/Tag'
import Compare from '@/components/Compare'

export default {
  name: 'ALFM-MA01-PG00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'main', footer: '', floatMenu: '', title: '' },
      goPlan: false,
      checked: '',
      partnerActive: [true, false, false],
    }
  },
  watch: {
    checked(){
      this.goPlan = true;
    }
  },
  methods: {
    nextPartner(){
      let idx;
      let length = this.partnerActive.length;
      this.partnerActive.forEach(( a, i )=>{ if( a == true ) idx = i });

      idx++;
      if( idx == length ) idx = 0;
      this.partnerActive = this.partnerActive.map( a => a=false );
      this.partnerActive[idx] = true;
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    this.$emit('openPopup', ['notice', 'btn_notice', 101]);
    setInterval(()=>{ this.nextPartner() }, 5000);
  },
  components: {
    Lottie,
    Card,
    SwiperMainBnr,
    SwiperCard,
    SwiperFlow,
    Tag,
    Compare
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>