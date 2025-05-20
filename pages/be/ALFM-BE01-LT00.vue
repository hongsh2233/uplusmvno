<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav" v-html="layout.title"></h2>

      <div class="section">
        <!-- 검색 -->
        <div class="form_wrap">
          <div class="form_group">
            <div class="form_item">
              <InputBox :option="{ placeholder:'검색어를 입력해주세요', search:true }" @inputValue="console.log($event)" />              
            </div>
          </div>
        </div>
        <!-- //검색 -->
        <!-- 중간 section 삭제 ; 23/11/10  -->
        <!-- 검색 결과 -->
        
        <Tag :data="frontData.tag.youtube" :option="{ type:'expanded', multi: true }" />
        <!-- //filter -->
        
        <div class="sort_wrap">
          <div>총 0,000건</div> <!-- 문구 변경 ; 23/11/29 -->
          <Sort :data="dataSort" @clickFormSelectItem="clickFormSelectItem('dataSort', $event)" />
        </div><!-- // sort_wrap -->

        <div class="item_list ty02">
          <ul>
            <li v-for="(d, i) in dataThumItem" :key="i">
              <div class="thum_item youtube_thum">
                <div class="thum_img" v-html="d.iframe"></div>
                <NuxtLink  :to="d.to" class="thum_con">
                  <img :src="d.img" :alt="d.alt" class="thum">
                  <strong>{{ d.title }}</strong>
                  <span>{{ d.channel }}</span>
                </NuxtLink>
              </div>
            </li>
          </ul>
          <!-- markup 변경 ; 23/11/08 -->
          <div class="btn_wrap center">
            <button type="button" class="btn round more_d">더 볼래요</button>
          </div>
          <!-- //markup 변경 ; 23/11/08 -->

        </div>

        <NoData :option="{type:'sch', html:'<p><span>날씨</span>에 대한 검색 결과가 없습니다.</p>'}" />
      </div>
      <!-- //검색 결과 -->


    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import Tag from '@/components/Tag'
import Sort from '@/components/Sort'
import InputBox from '@/components/InputBox';
import NoData from '@/components/NoData'


export default {
  name: 'ALFM-BE01-LT00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '알뜰폰닷컴 유튜브 컨텐츠' },

      dataThumItem: [
        { iframe: '<iframe src="https://www.youtube.com/embed/xt9WafOY8d0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
          to: 'javascript:void(0);',
          img: 'https://yt3.ggpht.com/ytc/APkrFKYW5ka7JVzrfx5RS9886qHCCb5HUjhdpQDeUqnb=s68-c-k-c0x00ffffff-no-rj',
          alt: 'channel logo',
          title: '편의점 알뜰폰 유심 사봄 feat.원칩 1', 
          channel: '유튜브 채널명', 
        },
        { iframe: '<iframe src="https://www.youtube.com/embed/xt9WafOY8d0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
          to: 'javascript:void(0);',
          img: 'https://yt3.ggpht.com/ytc/APkrFKYW5ka7JVzrfx5RS9886qHCCb5HUjhdpQDeUqnb=s68-c-k-c0x00ffffff-no-rj',
          alt: 'channel logo',
          title: '편의점 알뜰폰 유심 사봄 feat.원칩 2', 
          channel: '유튜브 채널명', 
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
    Tag,
    Sort,
    NoData,
    InputBox
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>
