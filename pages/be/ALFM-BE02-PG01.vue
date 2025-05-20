<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav" v-html="layout.title"></h2>

      <div class="section">

        <div class="evt_dtl_item">
          <div class="evt_dtl_tit">
            <div class="dtl_tit_top">
              <div class="bag_lft">
                <div class="bag evt dday"><b>D-1</b></div>
                <div class="bag evt ty01"><b>이번달 이벤트</b></div>
              </div>
              <div class="bag_rit">
                <img src="/images/data/logo_s_partner21.png" alt="tplus">
              </div>
            </div>
            <div class="dtl_tit_bot">
              <strong>{{ eventTitle }}</strong>
              <div class="share_box">
                <span><span>{{ startDay }}</span> - <span>{{ endDay }}</span></span>
                <!-- 이벤트 종료 시 display:none -->
                <button type="button" class="btn_share" id="btn_CM12PG00" @click="this.$emit('openAlert', ['CM12PG00', 'btn_CM12PG00', 101]);"><span class="blind">공유하기</span></button>
              </div>
            </div>
          </div>
          
          <div class="evt_dtl_con evt_close"><!-- .evt_close 이벤트 종료 시 -->
            <div class="box_gray">
              본 이벤트는 종료되었습니다
            </div>
            <div class="end_thum">
              <img src="/images/data/img_evt_detail.png" alt="이벤트 상세">
            </div>
          </div>

          <hr>
        </div>

        <div class="btn_group">
          <button type="button" class="btn md c05">목록보기</button>
        </div>
      </div>

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import SwiperCard from '@/components/SwiperCard'
import TextareaBox from '@/components/TextareaBox';

export default {
  name: 'ALFM-BE02-PG00',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '이벤트 상세' },
      eventTitle: '무제한이 9천원대! 오직 알뜰폰닷컴에서만',
      startDay: '2023.02.02',
      endDay: '2023.03.28',
      comment:[
        { name:'김*파', content:'댓글을 남겨주세요. (50자 이내) 50자 이내로 댓글을 남겨주세요. 댓글을 등록 하세요.', block:false, modify:false, delete:false, },
        { name:'나*파', content:'댓글을 남겨주세요. (50자 이내) 50자 이내로 댓글을 남겨주세요. 댓글을 등록 하세요.', block:false, modify:false, delete:false, },
        { name:'박*파', content:'댓글을 남겨주세요. (50자 이내) 50자 이내로 댓글을 남겨주세요. 댓글을 등록 하세요.', block:true, modify:false, delete:false, },
        { name:'이*파', content:'안녕하세요?', block:false, modify:false, delete:false, },
      ],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components: {
    SwiperCard,
    TextareaBox,
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>
