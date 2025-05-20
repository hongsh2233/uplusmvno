<template>
  <div class="menu-list">
    <!-- 24.11.28 mypage filter -->
    <div 
      class="menu-list__item"
      v-for="(gnbData, i) in gnbDatas.filter(data => data.className !== 'my')" :key="i" 
    >
      <h2>{{ gnbData.menu }}</h2>
      <ul class="list">
        <li v-for="(items, j) in gnbData.sub" :key="j">
          <!-- 1depth -->
          <NuxtLink v-if="items.menu === '지금배송'" :to="items.url" @click="allMenuClose">
            <img src="/images/v2/common/tit_delivery.png" alt="지금배송" />
          </NuxtLink>
          <NuxtLink v-else-if="items.menu === '이달의 혜택'" :to="items.url" @click="allMenuClose">
            <img src="/images/v2/common/tit_benefit.png" alt="이달의 혜택"/>
          </NuxtLink>

          <!-- 24.11.28 mypage class 추가 (subon) -->
          <NuxtLink
            v-else
            :to="items.url"
            :class="{ subin: items.url == '', subon: items.depth2 }"
            @click="allMenuClose"
            >{{ items.menu }}</NuxtLink
          >
          <!-- 2depth -->
          <ul v-if="items.depth2" class="depth2">
            <li v-for="(item, k) in items.depth2" :key="k">
              <NuxtLink :to="item.url" @click="allMenuClose">{{ item.menu }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    
    <!-- 24.11.28 mypage menu -->
    <div class="menu-list__item" v-if="gnbData = gnbDatas.find(gnb => gnb.menu === '마이페이지')">
      <NuxtLink :to="gnbData.url">
        <h2>{{ gnbData.menu }}</h2>
      </NuxtLink>
    </div>
    <!-- 24.11.28 mypage menu -->
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// HOOK
const props = defineProps({
  gnbDatas: {
    type: [Array, Object],
    default: () => {},
  },
});
const emit = defineEmits(["allMenuClose"]);

const allMenuClose = () => {
  if (!front.isMobile()) emit("allMenuClose");
};
</script>
