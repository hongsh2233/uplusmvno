<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav" v-html="layout.title"></h2>

      <div class="section">
        <div class="bsc_dtl_tit">
          <strong class="tit">{{ conTitle }}</strong>
          <span class="date">{{ conDate }}</span>
        </div>
        <div class="bsc_dtl_con">
          <div class="yt_box">
            <iframe src="https://www.youtube.com/embed/xt9WafOY8d0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <!-- Hashtag -->
          <div class="yt_tag">
            <ul>
              <li v-for="(d, i) in dataHashTag" :key="i"><NuxtLink :to="d.to"><span>#{{ d.tag }}</span></NuxtLink></li>
            </ul>
          </div>
          <!-- //Hashtag -->
        </div>
        <div class="btn_group">
          <button type="button" class="btn md c05">목록보기</button>
        </div>

      </div>


    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>

export default {
  name: 'ALFM-BE01-PG01',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '알뜰폰닷컴 유튜브 컨텐츠' },
      conTitle: '무제한이 9천원대! 오직 알뜰폰닷컴에서만',
      conDate: '2023.02.02',
      dataHashTag: [
        { to: 'javascript:void(0);',
          tag: '우체국', 
        },
        { to: 'javascript:void(0);',
          tag: '원칩', 
        },
        { to: 'javascript:void(0);',
          tag: '셀프 개통', 
        },
        { to: 'javascript:void(0);',
          tag: '유심', 
        },
      ],

    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>
