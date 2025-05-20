<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav" v-html="layout.title"></h2>

      <div class="section">
        <div class="sort_wrap">
          <div>총 0,000건</div> <!-- 문구 변경 ; 23/11/29 -->
          <Sort :data="dataSort" @clickFormSelectItem="clickFormSelectItem('dataSort', $event)" />
        </div><!-- // sort_wrap -->

        <div class="item_list ty02 col-3"> <!-- class="col-3" 추가 ; 23/11/24 -->
          <ul>
            <li v-for="(d, i) in dataThumItem" :key="i">
              <NuxtLink :to="d.to" class="link_list">
                <div class="thum_item insta_thum">
                  <div class="thum_img">
                    <img :src="d.img" :alt="d.alt">
                  </div>
                  <div class="thum_con">
                    <ul class="sns_post">
                      <li>{{ d.date }}</li>
                      <li>{{ d.id }}</li>
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
  name: 'ALFM-BE01-LT02',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '알뜰폰닷컴 인스타그램' },
      dataThumItem: [
        { to: 'javascript:void(0);',
          img: '/images/data/img_card_thum10.png',
          alt: '인스타그램 썸네일1',
          date: '2023.02.02', 
          id: '@aiden_group', 
        },
        { to: 'javascript:void(0);',
          img: '/images/data/img_card_thum10.png',
          alt: '인스타그램 썸네일2',
          date: '2023.02.03', 
          id: '@aiden_team', 
        },
        { to: 'javascript:void(0);',
          img: '/images/data/img_card_thum10.png',
          alt: '인스타그램 썸네일1',
          date: '2023.02.02', 
          id: '@aiden_group', 
        },
        { to: 'javascript:void(0);',
          img: '/images/data/img_card_thum10.png',
          alt: '인스타그램 썸네일2',
          date: '2023.02.03', 
          id: '@aiden_team', 
        },
        { to: 'javascript:void(0);',
          img: '/images/data/img_card_thum10.png',
          alt: '인스타그램 썸네일1',
          date: '2023.02.02', 
          id: '@aiden_group', 
        },
        { to: 'javascript:void(0);',
          img: '/images/data/img_card_thum10.png',
          alt: '인스타그램 썸네일2',
          date: '2023.02.03', 
          id: '@aiden_team', 
        },
        { to: 'javascript:void(0);',
          img: '/images/data/img_card_thum10.png',
          alt: '인스타그램 썸네일1',
          date: '2023.02.02', 
          id: '@aiden_group', 
        },
        { to: 'javascript:void(0);',
          img: '/images/data/img_card_thum10.png',
          alt: '인스타그램 썸네일2',
          date: '2023.02.03', 
          id: '@aiden_team', 
        },
      ],

      dataSort: this.frontData.sort.board,
    }
  },
  methods: {
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
