<template>
  <!-- 
   2025-05-29 1748497691 (정C) 
   수정 내용 
   -  스페셜 혜택(cardType: special-benefit) 유형 추가, 그에 따른 분기 처리
   -  상세 리스트에 (데이터, 음성) PC, 모바일 데이터 다르게 삽입되도록 (Tag 및 Script Type)수정
  -->
  <div class="products_roaming_list_wrap" :class="[cardType]">
    <p class="list-count" v-if="Array.isArray(items) && cardType != 'special-benefit'">
      총 <span class="number">{{ items.length }}</span
      >개
    </p>
    <ul class="comp_card_roaming_list">
      <li class="item" v-for="item in items" :key="item.id">
        <div class="plan_item comp_card_roaming">
          <div class="info-group-1">
            <template v-if="item.flag.favorite || item.flag.recommend">
              <div class="flag" v-if="cardType != 'special-benefit'">
                <span class="bag clr c01" v-if="item.flag.favorite">인기</span>
                <span class="bag clr c09" v-if="item.flag.recommend">추천</span>
              </div>
            </template>
            <div class="title">
              <p v-if="cardType === 'special-benefit'" :class="[item.recentry && 'has-recentry']">
                <NuxtLink :to="item.prdLink">
                  {{ item.prdName }}
                  <span class="bag is-recentry clr c09" v-if="item.recentry">최근이용</span>
                  <i class="icon-arrow-right"></i
                ></NuxtLink>
              </p>
              <p v-else>
                <NuxtLink :to="item.prdLink">{{ item.prdName }} <i class="icon-arrow-right"></i></NuxtLink>
              </p>
            </div>
            <!-- 2025-05-23 1747983161 (정C) 안내리스트 없이 문구만 들어가는 경우 추가 -->
            <div class="detail" v-if="typeof item.detailList !== 'string'">
              <!-- 이용기간 -->
              <span class="period" v-if="item.detailList.period">
                <span class="info-val">{{ item.detailList.period }}</span>
              </span>
              <!-- //이용기간 -->

              <!-- 데이터 -->
              <span class="data" v-if="item.detailList.data && item.detailList.data.length > 1">
                <span class="info-val">{{ isMobile ? item.detailList.data[0] : item.detailList.data[1] }}</span>
              </span>
              <span class="data" v-if="item.detailList.data && item.detailList.data!.length === 1">
                <span class="info-val">{{ item.detailList.data[0] }}</span>
              </span>
              <!-- //데이터 -->

              <!-- 음성 -->
              <span class="data" v-if="item.detailList.voice && item.detailList.voice.length > 1">
                <span class="info-val">{{ isMobile ? item.detailList.voice[0] : item.detailList.voice[1] }}</span>
              </span>
              <span class="data" v-if="item.detailList.voice && item.detailList.voice!.length === 1">
                <span class="info-val">{{ item.detailList.voice[0] }}</span>
              </span>
              <!-- //음성 -->

              <!-- 지원국가 -->
              <span class="country" v-if="item.detailList.country">
                <span class="info-val">{{ item.detailList.country }}</span>
              </span>
              <!-- //지원국가 -->
            </div>
            <div class="detail" v-else>
              <span class="info-val">음성 로밍을 차단해 주는 서비스</span>
            </div>
            <!-- //2025-05-23 1747983161 (정C) 안내리스트 없이 문구만 들어가는 경우 추가 -->
          </div>
          <div class="info-group-2">
            <div class="price">
              <p class="info-1">{{ item.prdPrice }}</p>
              <p class="info-2">부가세포함</p>
            </div>
            <div class="btn-area" v-if="cardType != 'special-benefit'">
              <button type="button" class="btn-rounded change-btn" v-if="item.btns.change">변경하기</button>
              <button type="button" class="btn-rounded primary" v-if="item.btns.apply">신청하기</button>
            </div>
            <div class="btn-area" v-if="cardType === 'special-benefit'">
              <button type="button" class="btn-rounded change-btn">이용 내역보기</button>
              <button type="button" class="btn-rounded btn-line">다시 이용하기</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="btn_wrap center" v-if="cardType != 'special-benefit'">
      <button type="button" class="btn round more_d">더 볼래요</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const isMobile = ref(front.isMobile());
const props = withDefaults(
  defineProps<{
    items: PrdItem[];
    cardType?: string;
  }>(),
  {
    cardType: "normal",
  }
);

interface PrdItem {
  id: number;
  prdName: string;
  prdLink: string;
  prdPrice: string;
  recentry?: boolean;
  flag: Flag;
  detailList: DetailList | string;
  btns: Btns;
}

interface Btns {
  apply: boolean;
  change: boolean;
}

interface DetailList {
  period?: string;
  data?: string[];
  voice?: string[];
  country?: string;
}

interface Flag {
  favorite: boolean;
  recommend: boolean;
}
</script>
<style lang="scss" scoped>
@use "@/assets/scss/components/card-roaming.scss" as *;
</style>
