<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav" v-html="layout.title"></h2>

      <div class="section">
        <div class="sort_wrap">
          <div>총 0,000건</div> <!-- 문구 변경 ; 23/11/29 -->
          <Sort :data="dataSort" @clickFormSelectItem="clickFormSelectItem('dataSort', $event)" />
        </div><!-- // sort_wrap -->

        <div class="item_list ty02">
          <ul>
            <li v-for="(d, i) in dataThumItem" :key="i">
              <NuxtLink :to="d.to" class="link_list">
                <div class="thum_item naver_thum">
                  <div class="thum_top">
                    <img :src="d.img_2" :alt="d.alt_2" class="thum">
                    <strong class="title">{{ d.title }}</strong>
                  </div>
                  <div class="thum_img">
                    <img :src="d.img" :alt="d.alt">
                  </div>
                  <div class="thum_con">
                    <strong>{{ d.title }}</strong>
                    <ul class="sns_post">
                      <li>{{ d.story }}</li>
                    </ul>
                  </div>
                </div>
              </NuxtLink>
            </li>
          </ul>

          <!-- markup 변경 ; 23/11/08 -->
          <div class="btn_wrap center">
            <button type="button" class="btn round more_d">더 볼래요</button>
          </div>
          <!-- //markup 변경 ; 23/11/08 -->

        </div>

      </div>
      <!-- //검색 결과 -->


    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import Sort from '@/components/Sort'

export default {
  name: 'ALFM-BE01-LT01',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '알뜰폰닷컴 네이버 블로그' },
      dataThumItem: [
        { to: 'javascript:void(0);',
          img_2: '/images/data/img_card_thum01.png',
          alt_2: '네이버 블로그 썸네일2',
          img: '/images/data/img_card_thum01.png',
          alt: '네이버 블로그 썸네일1',
          title: '알뜰폰 가입 개통 방법! 갤럭시S23 알뜰폰 가입 개통 방법! 갤럭시S23 알뜰폰 가입 개통 방법! 갤럭시S23 알뜰폰 가입 개통 방법! 갤럭시S23',
          story: '모이모이의 IT 이야기모이모이의 IT 이야기모이모이의 IT 이야기모이모이의 IT 이야기모이모이의 IT 이야기모이모이의 IT 이야기모이모이의 IT 이야기모이모이의 IT 이야기모이모이의 IT 이야기모이모이의 IT 이야기', 
        },
        { to: 'javascript:void(0);',
          img_2: '/images/data/img_card_thum01.png',
          alt_2: '네이버 블로그 썸네일2',
          img: '/images/data/img_card_thum02.png',
          alt: '네이버 블로그 썸네일2',
          title: '알뜰폰 가입 개통 방법! 갤럭시 z플립5',
          story: '모이모이의 IT 이야기', 
        },
      ],

      dataSort: this.frontData.sort.board,
    }
  },
  methods:{
    clickFormSelectItem(targetData, $event){
      this[targetData].option.value = $event.title;
      this[targetData].option.selected = $event.value;
      
      this[targetData].data = this[targetData].data.map((a)=>{
        a.selected = ( a == $event ) ? true : false;
        return a;
      });
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components: {
    Sort,
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>
