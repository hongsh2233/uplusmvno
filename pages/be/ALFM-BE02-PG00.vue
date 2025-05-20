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
                <img src="/images/data/logo_s_partner21.png" alt="tplus" />
              </div>
            </div>
            <div class="dtl_tit_bot">
              <strong>{{ eventTitle }}</strong>
              <div class="share_box">
                <span
                  ><span>{{ startDay }}</span> - <span>{{ endDay }}</span></span
                >
                <!-- 이벤트 종료 시 display:none -->
                <button
                  type="button"
                  class="btn_share"
                  id="btn_CM12PG00"
                  @click="this.$emit('openAlert', ['CM12PG00', 'btn_CM12PG00', 101])"
                >
                  <span class="blind">공유하기</span>
                </button>
              </div>
            </div>
          </div>

          <div class="evt_dtl_con">
            <!-- .evt_close 이벤트 종료 시 -->
            <div class="box_gray">본 이벤트는 종료되었습니다</div>
            <div class="event-kg2502-wrap">
              <div class="event-kg2502 visual">
                <img
                  src="https://api.uplusmvno.com/umah/fo/s3/getImage?filename=2025/1/31/kg2502_visual.png"
                  alt=""
                  class="pc_show"
                /><img
                  src="https://api.uplusmvno.com/umah/fo/s3/getImage?filename=2025/1/31/kg2502_visual_m.png"
                  alt=""
                  class="pc_hide"
                />
              </div>
              <div class="event-kg2502 section1">
                <img
                  src="https://api.uplusmvno.com/umah/fo/s3/getImage?filename=2025/1/15/kg2501_section1.png"
                  alt=""
                  class="pc_show"
                /><img
                  src="https://api.uplusmvno.com/umah/fo/s3/getImage?filename=2025/1/15/kg2501_section1_m.png"
                  alt=""
                  class="pc_hide"
                />
              </div>
            </div>
          </div>

          <hr style="display: none" />
          <!-- 댓글 있을때 display:none -->

          <div class="evt_comnt">
            <TextareaBox
              :data="{
                type: 'ty02',
                placeholder: '댓글을 남겨주세요(50자 이내)',
                rows: 1,
                maxlength: 50,
                byteCheck: true,
                button: true,
                buttonValue: '등록',
              }"
              @textareaValue="console.log($event)"
              @textareaSubmit="console.log($event)"
            />
            <!-- //문의 내용 입력 -->

            <div class="line_list">
              <ul>
                <li v-for="(a, i) in comment" :key="i">
                  <div class="list_con ty02" v-if="a.block">
                    <span class="tit reg">관리자에 의해 규제된 댓글입니다.</span>
                  </div>
                  <div class="list_con ty02" v-else>
                    <div class="cus comnt_cor">
                      <span class="name">{{ a.name }}</span>
                      <div class="comnt_box" v-if="!a.modify">
                        <button type="button" @click="a.modify = true">수정</button>
                        <button type="button" @click="comment.splice(i, 1)">삭제</button>
                      </div>
                    </div>

                    <span class="tit" v-if="!a.modify">{{ a.content }}</span>

                    <TextareaBox
                      :data="{
                        type: 'ty02',
                        placeholder: '댓글을 남겨주세요(50자 이내)',
                        value: a.content,
                        rows: 1,
                        maxlength: 50,
                        byteCheck: true,
                        button: true,
                        buttonValue: '등록',
                      }"
                      @textareaValue="console.log($event)"
                      @textareaSubmit="
                        a.content = $event.value;
                        a.modify = false;
                      "
                      v-else
                    />
                  </div>
                </li>
              </ul>
              <!-- markup 변경 ; 23/11/08 -->
              <div class="btn_wrap center">
                <button type="button" class="btn round more_d">더 볼래요</button>
              </div>
              <!-- //markup 변경 ; 23/11/08 -->
            </div>
          </div>
          <!-- //evt_comnt -->
        </div>
      </div>

      <!-- 본인인증 -->
      <SelfIdentification />
      <!-- // 본인인증 -->

      <div class="section">
        <h3 class="tit03">이벤트와 관련 있는 요금제에요</h3>

        <!-- big card 로 교체 ; 23/11/23 -->
        <!-- <SwiperCard :data="frontData.swiper.rateplan2" :option="{ type: 'rateplan' }" /> -->
        <div class="item_list ty02">
          <Card :cardInfo="{ type: 'ty01', name: 'plan01' }" />
          <Card :cardInfo="{ type: 'ty01', name: 'plan02' }" />
          <Card :cardInfo="{ type: 'ty01', name: 'plan03' }" />
          <div class="btn_wrap center">
            <button type="button" class="btn round more_d">더 볼래요</button>
          </div>
        </div>
        <!-- //big card 로 교체 ; 23/11/23 -->
      </div>

      <div class="section">
        <h3 class="tit03">다른 이벤트도 둘러보세요</h3>
        <SwiperCard :data="frontData.swiper.event" :option="{ type: 'event' }" />

        <!-- 중간 section 삭제 ; 23/11/23 -->

        <div class="btn_group">
          <button type="button" class="btn md c05">목록보기</button>
        </div>
      </div>
    </div>
    <!-- // content -->

    <!-- 플로팅 배너 -->
    <BannerFloating />
  </div>
  <!-- // container -->
</template>

<script>
import SwiperCard from "@/components/SwiperCard";
import TextareaBox from "@/components/TextareaBox";
import BannerFloating from "@/components/page/benefit/BannerFloating";
import SelfIdentification from "@/components/page/benefit/SelfIdentification";

export default {
  name: "ALFM-BE02-PG00",
  emits: ["setLayout", "openAlert"],
  data() {
    return {
      layout: { header: "sub", footer: "", floatMenu: "", title: "이벤트 상세" },
      eventTitle: "무제한이 9천원대! 오직 알뜰폰닷컴에서만",
      startDay: "2023.02.02",
      endDay: "2023.03.28",
      comment: [
        {
          name: "김*파",
          content:
            "댓글을 남겨주세요. (50자 이내) 50자 이내로 댓글을 남겨주세요. 댓글을 등록 하세요.",
          block: false,
          modify: false,
          delete: false,
        },
        {
          name: "나*파",
          content:
            "댓글을 남겨주세요. (50자 이내) 50자 이내로 댓글을 남겨주세요. 댓글을 등록 하세요.",
          block: false,
          modify: false,
          delete: false,
        },
        {
          name: "박*파",
          content:
            "댓글을 남겨주세요. (50자 이내) 50자 이내로 댓글을 남겨주세요. 댓글을 등록 하세요.",
          block: true,
          modify: false,
          delete: false,
        },
        { name: "이*파", content: "안녕하세요?", block: false, modify: false, delete: false },
      ],
    };
  },
  mounted() {
    this.$emit("setLayout", this.layout);
  },
  components: {
    SwiperCard,
    TextareaBox,
    BannerFloating,
    SelfIdentification,
  },
  props: {
    frontData: Object, // @/assets/frontData.js
  },
};
</script>
