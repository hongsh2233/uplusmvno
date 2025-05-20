<template>
  <div class="products_roaming_list_wrap">
    <p class="list-count">
      총 <span class="number">{{ items.length }}</span
      >개
    </p>
    <ul class="comp_card_roaming_list">
      <li class="item" v-for="item in items" :key="item.id">
        <div class="plan_item comp_card_roaming">
          <div class="info-group-1">
            <template v-if="item.flag.favorite || item.flag.recommend">
              <div class="flag">
                <span class="bag clr c01" v-if="item.flag.favorite">인기</span>
                <span class="bag clr c09" v-if="item.flag.recommend">추천</span>
              </div>
            </template>
            <div class="title">
              <p>
                <NuxtLink :to="item.prdLink">{{ item.prdName }}</NuxtLink>
              </p>
            </div>
            <div class="detail">
              <span class="period" v-if="item.detailList.period">
                <span class="info-title">이용기간</span>
                <span class="info-val">{{ item.detailList.period }}</span>
              </span>
              <span class="data" v-if="item.detailList.data">
                <span class="info-title">데이터</span>
                <span class="info-val">{{ item.detailList.data }}</span>
              </span>
              <span class="country" v-if="item.detailList.country">
                <span class="info-title">지원국가</span>
                <span class="info-val">{{ item.detailList.country }}</span>
              </span>
            </div>
          </div>
          <div class="info-group-2">
            <div class="price">
              <p class="info-1">{{ item.prdPrice }}</p>
              <p class="info-2">부가세포함</p>
            </div>
            <div class="btn-area">
              <button type="button" class="btn-rounded" v-if="item.btns.change">변경하기</button>
              <button type="button" class="btn-rounded primary" v-if="item.btns.apply">신청하기</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="btn_wrap center">
      <button type="button" class="btn round more_d">더 볼래요</button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PrdItem {
  id: number;
  prdName: string;
  prdLink: string;
  prdPrice: string;
  flag: Flag;
  detailList: DetailList;
  btns: Btns;
}

interface Btns {
  apply: boolean;
  change: boolean;
}

interface DetailList {
  period?: string;
  data?: string;
  country?: string;
}

interface Flag {
  favorite: boolean;
  recommend: boolean;
}

const props = defineProps<{
  items: PrdItem[];
}>();

console.log(props.items.length);
</script>
<style lang="scss" scoped>
@use "@/assets/scss/components/card-roaming.scss" as *;
</style>
