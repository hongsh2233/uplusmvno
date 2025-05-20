<template>
  <div class="container">
    <div class="content main" id="content">
      <!-- 2025-03-14 수정 -->
      <div class="section_f main_top new-main_top">
        <SwiperMainBnr />

        <!-- image case : admin 에서 선택시 -->
        <NuxtLink :to="{}" class="link_ranking">
          <img
            src="/images/data/img_ranking_bnr_pc.png"
            alt="알뜰폰닷컴 9월 첫째주, 주간 랭킹 TOP 20"
            class="pc_show"
          />
          <!-- pc 용 -->
          <img
            src="/images/data/img_ranking_bnr.png"
            alt="알뜰폰닷컴 9월 첫째주, 주간 랭킹 TOP 20"
            class="pc_hide"
          />
          <!-- mo 용 -->
        </NuxtLink>
      </div>
      <!-- // section -->

      <!-- 2025-03-14 수정 -->
      <div class="section data-category">
        <div class="tit_wrap">
          <h3 class="tit03">데이터별로 추천해드릴께요</h3>
        </div>
        <SwiperDataCategory :data="frontData.swiper.dataRecome.list" />
      </div>
      <!-- // section -->

      <div class="section_f bg01 steamed_price">
        <div class="tit_wrap">
          <h3 class="tit03">내가 찜한 요금제</h3>
          <NuxtLink :to="{}" class="more">더보기</NuxtLink>
        </div>

        <!-- swiper - 내가 찜한 요금제 -->
        <SwiperCard :data="frontData.swiper.rateplan" :option="{ type: 'rateplan' }" />
      </div>
      <!-- // section -->

      <div class="section_f bg01">
        <div class="tit_wrap">
          <h3 class="tit03">최근 본 요금제</h3>
          <NuxtLink :to="{}" class="more">더보기</NuxtLink>
        </div>

        <!-- swiper - 최근 본 요금제 -->
        <SwiperCard :data="frontData.swiper.rateplan3" :option="{ type: 'rateplan' }" />
      </div>
      <!-- // section -->

      <div class="section_f bg02 section_f__recomm">
        <div class="tit_wrap">
          <h3 class="tit03">추천 요금제를 만나보세요</h3>
          <NuxtLink :to="{}" class="more">전체보기</NuxtLink>
        </div>

        <Tag :data="frontData.tag.recom" :option="{ type: 'default', multi: false }" />

        <div class="item_list ty02">
          <Card :cardInfo="{ type: 'ty01', name: 'plan01' }" />
          <Card :cardInfo="{ type: 'ty01', name: 'plan02' }" />
          <Card :cardInfo="{ type: 'ty01', name: 'plan03' }" />
          <Card :cardInfo="{ type: 'ty01', name: 'plan04' }" />
          <Card :cardInfo="{ type: 'ty01', name: 'plan05' }" />
          <div class="btn_wrap center">
            <button type="button" class="btn round more_d">더 볼래요</button>
          </div>
        </div>
      </div>
      <!-- // section -->

      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">주요서비스를 만나보세요</h3>
        </div>
        <ul class="main_service grid">
          <!-- 2025-03-14 수정 -->
          <li class="svc01">
            <NuxtLink :to="{}">인터넷 혜택</NuxtLink>
          </li>
          <li class="svc02">
            <NuxtLink :to="{}">친구 추천</NuxtLink>
          </li>
          <li class="svc03">
            <NuxtLink :to="{}">내게 맞는 요금제 찾기</NuxtLink>
          </li>
          <li class="svc04">
            <NuxtLink :to="{}">지금배송</NuxtLink>
          </li>
        </ul>
      </div>
      <!-- // section -->

      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">당신에게 필요한 정보를 모았어요</h3>
        </div>
        <div class="main_bnr_wrap">
          <div class="bnr_area">
            <NuxtLink :to="{}">
              <img
                src="/images/data/img_main_bnr04_pc.png"
                class="pc_show"
                alt="5G 데이터 무제한 45,000원 부터 2023.02.02 - 2023.03.28까지"
              />
              <img
                src="/images/data/img_main_bnr04.png"
                class="pc_hide"
                alt="충전하여 사용하는 충전형 요금제 상담받자!"
              />
            </NuxtLink>
          </div>
          <div class="bnr_area">
            <NuxtLink :to="{}">
              <img
                src="/images/data/img_main_bnr03_pc.png"
                class="pc_show"
                alt="Npay 5천원 100% 증정 리뷰 이벤트, 2023.02.02 - 2023.03.28까지"
              />
              <img
                src="/images/data/img_main_bnr03.png"
                class="pc_hide"
                alt="알뜰폰 + TV + 인터넷 올인원 결합 혜택"
              />
            </NuxtLink>
          </div>
          <div class="bnr_area">
            <NuxtLink :to="{}">
              <img
                src="/images/data/img_main_bnr02_pc.png"
                class="pc_show"
                alt="이야기모바일 알뜰폰닷컴 입점 기념 프로모션 2023.02.02 - 2023.03.28까지"
              />
              <img
                src="/images/data/img_main_bnr02.png"
                class="pc_hide"
                alt="U+알뜰폰, 우체국에서 상담받고 개통하자!"
              />
            </NuxtLink>
          </div>
        </div>
        <div class="btn_wrap center">
          <button type="button" class="btn round more_d">더 볼래요</button>
        </div>
      </div>
      <!-- // section -->

      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">함께하는 파트너사를 <br class="pc_hide" />만나보세요</h3>
          <NuxtLink :to="{}" class="more bottom">전체보기</NuxtLink>
        </div>
        <div class="main_partner">
          <ol>
            <li class="on">
              <NuxtLink :to="{}">
                <div class="partner">
                  <strong>프리티</strong>
                  <div class="star">
                    <span class="blind">별점</span><span class="score">4.7</span>
                  </div>
                  <img src="/images/data/logo_partner06.png" alt="프리티" />
                </div>
                <p>
                  통신요금을 아끼고 속도도 빨라서 매우 만족하고 있습니다. 굳이 비싼 요금제를 사용할
                  필요없다는 생각이네요. 가족들에게도 추천했어요.
                </p>
              </NuxtLink>
            </li>
            <li class="on">
              <NuxtLink :to="{}">
                <div class="partner">
                  <strong>티플러스</strong>
                  <div class="star">
                    <span class="blind">별점</span><span class="score">3.8</span>
                  </div>
                  <img src="/images/data/logo_partner21.png" alt="티플러스" />
                </div>
                <p>
                  통신요금을 아끼고 속도도 빨라서 매우 만족하고 있습니다. 굳이 비싼 요금제를 사용할
                  필요없다는 생각이네요. 가족들에게도 추천했어요.
                </p>
              </NuxtLink>
            </li>
            <li class="on">
              <NuxtLink :to="{}">
                <div class="partner">
                  <strong>스마텔</strong>
                  <div class="star">
                    <span class="blind">별점</span><span class="score">4.4</span>
                  </div>
                  <img src="/images/data/logo_partner13.png" alt="스마텔" />
                </div>
                <p>
                  통신요금을 아끼고 속도도 빨라서 매우 만족하고 있습니다. 굳이 비싼 요금제를 사용할
                  필요없다는 생각이네요. 가족들에게도 추천했어요.
                </p>
              </NuxtLink>
            </li>
          </ol>

          <SwiperFlow />
        </div>
      </div>
      <!-- // section -->

      <!-- <Compare @openPopup="this.$emit('openPopup', $event)" /> -->
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script>
import Lottie from "@/components/Lottie";
import Card from "@/components/Card";
import SwiperCard from "@/components/SwiperCard";
import SwiperMainBnr from "@/components/SwiperMainBnr";
import SwiperFlow from "@/components/SwiperFlow";
import SwiperDataCategory from "@/components/SwiperDataCategory";
import Tag from "@/components/Tag";
// import Compare from '@/components/Compare'

export default {
  name: "ALFM-MA01-PG00",
  emits: ["setLayout", "openPopup"],
  data() {
    return {
      layout: { header: "main", footer: "", floatMenu: "", title: "" },
      goPlan: false,
      checked: "",
    };
  },
  watch: {
    checked() {
      this.goPlan = true;
    },
  },
  methods: {},
  mounted() {
    this.$emit("setLayout", this.layout);

    this.$emit("openPopup", ["notice", "btn_notice", 101]);
  },
  components: {
    Lottie,
    Card,
    SwiperMainBnr,
    SwiperCard,
    SwiperFlow,
    SwiperDataCategory,
    Tag,
    // Compare
  },
  props: {
    frontData: Object, // @/assets/frontData.js
  },
};
</script>
