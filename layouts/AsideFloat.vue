<template>

  <div class="aside_float" v-if="layout.floatMenu != 'none'">
    <div class="inner">
      <NuxtLink :to="{}" class="btn_kakao"><span class="blind">카카오톡으로 상담하기</span></NuxtLink>
      <NuxtLink :to="{}" class="btn_reco">
        <span>친구 추천</span>
      </NuxtLink>
      <NuxtLink :to="{}" class="btn_deli">
        <span><img src="/images/common/tit_direct_delivery.png" alt="지금배송"></span>
      </NuxtLink>
      <button type="button" class="btn_top" @click="scrollBehavior"><span>TOP</span></button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'AsideFloat',
  data(){
    return {
      isTopClick: true, // 클릭 이벤트 가능 여부
    }
  },
  methods:{
    scrollBehavior(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  props: {
	  layout : Object
  }
}
</script>
