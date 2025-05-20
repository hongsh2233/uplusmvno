<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">List</div>
      
        <div class="section">
          <h3 class="tit02">sort</h3>

          <div class="sort_wrap">
            <div>총 1,438개</div>
            <Sort :data="dataSortRateplan" @clickFormSelectItem="clickFormSelectItem('dataSortRateplan', $event)" />
          </div> <!-- // sort_wrap -->

          <div class="sort_wrap">
            <div>총 1,438개</div>
            <Sort :data="dataSortBoard" @clickFormSelectItem="clickFormSelectItem('dataSortBoard', $event)" />
          </div> <!-- // sort_wrap -->


          <div class="sort_wrap">
            <div>총 1,438개</div>
            <div>
              <SortList />
            </div>
          </div>

          <div class="sort_wrap">
            <div>총 1342건 검색되었습니다</div>
          </div>

          <div class="sort_wrap">
            <div>총 1,438개</div>
            <Sort :data="dataSortBoard2" @clickFormSelectItem="clickFormSelectItem('dataSortBoard2', $event)" />
          </div> <!-- // sort_wrap -->


        </div> <!-- // section -->

        <div class="section">
          <h3 class="tit02">Ratings (vuetify)</h3>

					<div class="eval_wrap">
            <div class="eval_item">
              <h3 class="tit02">개통과정은 잘 되었나요?</h3>
              <div class="eval_star">
                <v-rating v-model="rating"></v-rating>
              </div>
              <div class="eval_desc" v-if="rating < 1">{{ ratingText[0] }}</div>
              <div class="eval_desc" v-else>{{ rating }}점 ({{ ratingText[rating] }})</div>
            </div>
            <div class="eval_item">
              <h3 class="tit02">개통과정은 잘 되었나요?</h3>
              <div class="eval_star">
                <v-rating v-model="rating2" item-aria-label="custom icon label text {0} of {1}"></v-rating>
              </div>
              <div class="eval_desc" v-if="rating2 < 1">{{ ratingText[0] }}</div>
              <div class="eval_desc" v-else>{{ rating2 }}점 ({{ ratingText[rating2] }})</div>
            </div>
					</div>

        </div> <!-- // section -->

        <div class="section">
          <h3 class="tit02">line_list</h3>

          <div class="line_list">
            <ul>
              <li>
                <NuxtLink :to="{}" class="list_con ty01">
                  <span class="tit">[안내] eSIM 안내</span>
                  <span class="date">2022.02.02</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{}" class="list_con ty01">
                  <span class="date_rel">발표일 2023.10.10</span>
                  <span class="tit">[안내] eSIM 안내</span>
                  <span class="date">2022.02.02</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{}" class="list_con ty01">
                  <span class="tit ty02">모두의 유심, 원칩 | 택배배송</span>
                  <span class="date">2022.02.02</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{}" class="list_con ty02">
                  <div class="cus">
                    <span class="name">김*파</span>
                    <div class="star_box">
                      <div class="star"></div>
                      <div class="star_active" style="width:40%;"></div>
                    </div>
                    <span class="score">0.0</span>
                    <span class="date">2023.04.11</span>
                  </div>
                  <span class="tit">[안내] eSIM 안내</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{}" class="list_con ty02">
                  <div class="cus">
                    <span class="name">김*파</span>
                  </div>
                  <span class="tit">댓글을 남겨주세요. (50자 이내) 50자 이내로 댓글을 남겨주세요. 댓글을 등록 하세요.</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{}" class="list_con ty02">
                  <div class="cus">
                    <span class="name">김*파</span>
                  </div>
                  <span class="tit reg">관리자에 의해 규제된 댓글입니다.</span>
                </NuxtLink>
              </li>




              <li v-for="(a, i) in comment" :key="i">
                <div class="list_con ty02" v-if="a.block">
                  <span class="tit reg">관리자에 의해 규제된 댓글입니다.</span>
                </div>
                <div class="list_con ty02" v-else>
                  <div class="cus comnt_cor">
                    <span class="name">{{ a.name }}</span>
                    <div class="comnt_box" v-if="!a.modify">
                      <button type="button" @click="a.modify = true">수정</button>
                      <button type="button" @click="comment.splice(i,1)">삭제</button>
                    </div>
                  </div>

                  <span class="tit" v-if="!a.modify">{{ a.content }}</span>

                  <TextareaBox :data="{ type:'ty02', placeholder:'댓글을 남겨주세요(50자 이내)', value:a.content, rows: 1, maxlength: 50, byteCheck: true, button: true, buttonValue:'등록', }"
                    @textareaValue="console.log($event)"
                    @textareaSubmit="a.content = $event.value; a.modify=false"
                    v-else
                  />
                </div>
              </li>


              <li>
                <NuxtLink :to="{}" class="list_con ty03">
                  <div class="list_lft">
                    <div class="cus">
                      <span class="name">김*파</span>
                      <span class="date">2023.04.11</span>
                    </div>
                    <span class="tit">가격도 저렴하고 끊김도 없습니다. 다만 휴일 근처에개통이 조금 오래걸리는 것이 불편했습...</span>
                  </div>
                  <div class="img">
                    <img src="/images/data/img_thum.png" alt="블로그 리뷰 썸네일">
                  </div>
                </NuxtLink>
              </li>
              <li>
                <div class="list_con ty03">
                  <div class="list_lft">
                    <div class="cus">
                      <span class="tit_bo">GS25상일동아점</span>
                      <strong class="tit_inven fc01">재고 4개</strong>
                    </div>
                    <span class="tit ty03">서울 강동구 상암로 405, 제101동 제상가1호 (상일동 473, 외 1필지 상일동아아파트)</span>
                    <div class="bag_list">
                      <span class="bag clr c02">유심판매</span>
                      <span class="bag clr c03">바로픽업</span>
                    </div>
                  </div>
                  <div class="bo_btn_list">
                    <button type="button" class="btn_bo local">
                      <span class="blind">지도 보기</span>
                    </button>
                    <button type="button" class="btn_bo call">
                      <span class="blind">전화 걸기</span>
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <NuxtLink :to="{}" class="list_con ty02">
                  <div class="addr_list"><span class="bag clr c09">도로명</span>⁠경기도 성남시 분당구 판교역로 164</div>
                  <div class="addr_list"><span class="bag clr c07">지번</span>⁠경기도 성남시 분당구 삼평동 640</div>
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- markup 변경 ; 23/11/08 -->
          <div class="btn_wrap center pc_hide">
            <button type="button" class="btn round more_d">더 볼래요</button>
          </div>
          <!-- //markup 변경 ; 23/11/08 -->

          <Pagination :option="{ pcShow: true }" />

        </div> <!-- // section -->

        <div class="section">
          <div class="message_area">
            <h3 class="tit">인증 요청한 앱에서 서명절차를 마무리 하신 후<br class="pc" /> 아래 [인증 확인하기] 버튼을 눌러 주세요.</h3>
            <div class="line_list">
              <ul>
                <li>
                  <div class="list_con">
                    <span class="num">01</span>
                    <span class="tit">선택한 서비스의 앱에서 인증 요청 메시지를 확인해 주세요. (푸시 메시지)</span>
                    <span class="icon"><img src="/images/common/ico_push_message.png" alt="푸쉬  메세지 아이콘"></span>
                  </div>
                </li>
                <li>
                  <div class="list_con">
                    <span class="num">02</span>
                    <span class="tit">앱 내에서 인증을 진행해 주세요.</span>
                    <span class="icon"><img src="/images/common/ico_auth_doc.png" alt="인증 문서 아이콘"></span>
                  </div>
                </li>
                <li>
                  <div class="list_con ty03">
                    <span class="num">03</span>
                    <span class="tit">인증 완료 후 아래의 [인증 확인하기]를 눌러 주세요.</span>
                    <span class="icon"><img src="/images/common/ico_auth_cfm.png" alt="인증 확인 아이콘"></span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="text_info">만약 푸시 메시지를 받지 못한 경우, {{ authText }}<em v-if="authText === '카카오'">톡</em><em v-else>앱</em>을 직접 실행한 뒤 알림 내역을 확인해 주세요.</div>
          </div>
        </div> <!-- // section -->

        <div class="section">
          <h3 class="tit02">item_list ty03</h3>

          <div class="item_list ty02">
            <p>ty01 (detail: true)</p>
            <Card :cardInfo="{type: 'ty01', name: 'test1', detail: true }" />
            
            <br>
            <p>ty01 - lanking</p>
            <Card :cardInfo="{type: 'ty01', lanking: 1, name: 'test11'}" />

            <br>
            <p>ty02</p>
            <Card :cardInfo="{type: 'ty02', name: 'test2', flag:'recom' }" />
            <Card :cardInfo="{type: 'ty02', name: 'test3', flag:'best' }" />
            <Card :cardInfo="{type: 'ty02', name: 'test4', flag:'' }" />
          </div>
        </div> <!-- // section -->

        <div class="section">
          <h3 class="tit03">이벤트와 관련 있는 요금제에요</h3>
          <NuxtLink to="/guide/SwiperVue" target="_blank">SwiperVue page로 이동 (/guide/SwiperVue)</NuxtLink>
        </div>

        <div class="section">
          <h3 class="tit02">None Data</h3>

          <NoData :option="{type:'sch', html:'<p><span>날씨</span>에 대한 검색 결과가 없습니다.</p>'}" />
          <NoData :option="{type:'his', html:'<strong>지금 바로 셀프개통하고<br>사용자 평점·후기를 남겨보세요!</strong>'}" />
          <NoData :option="{type:'his', html:'<p>일시적으로 추천활동 내역을 불러올 수 없습니다<br>나중에 다시 시도해 주세요</p>'}" />

        </div> <!-- // section -->

        <div class="section">
          <h3 class="tit02">Share List</h3>

          <div class="cir_icon_link">
            <ul>
              <li>
                <NuxtLink :to="{}" class="icon_link facebook">
                  <span>페이스북</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{}" class="icon_link kakao">
                  <span>카카오톡</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{}" class="icon_link url">
                  <span>URL 복사</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import Card from '@/components/Card'
import NoData from '@/components/NoData'
import Pagination from '@/components/Pagination'
import Sort from '@/components/Sort'
import SortList from '@/components/SortList'
import TextareaBox from '@/components/TextareaBox';

export default {
  name: 'GuideTemplate',
  emits: ['setLayout', 'openPopup'],
	data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },
			rating: 0,
			rating2: 4,
      ratingText: ['선택해주세요', '별로예요', '그저그래요', '괜찮아요', '좋아요', '최고에요'],
      flag: [false, false],
      tooltip: [false, false, false],

      dataSortRateplan: this.frontData.sort.rateplan,
      dataSortBoard: this.frontData.sort.board,
      dataSortBoard2: this.frontData.sort.board,

      // dataTextareaComn: { type:'ty02', placeholder:'문의 내용을 입력해 주세요', value:'댓글을 남겨주세요. (50자 이내) 50자 이내로 댓글을 남겨주세요. 댓글을 등록 하세요.', rows: 1, maxlength: 50, byteCheck: true, button: true, buttonValue:'등록',  disabled:false, readonly: false, },
      // isComnt: true,
      // isModifyComnt: false,


      comment:[
        { name:'김*파', content:'댓글을 남겨주세요. (50자 이내) 50자 이내로 댓글을 남겨주세요. 댓글을 등록 하세요.', block:false, modify:false, delete:false, },
        { name:'나*파', content:'댓글을 남겨주세요. (50자 이내) 50자 이내로 댓글을 남겨주세요. 댓글을 등록 하세요.', block:false, modify:false, delete:false, },
        { name:'박*파', content:'댓글을 남겨주세요. (50자 이내) 50자 이내로 댓글을 남겨주세요. 댓글을 등록 하세요.', block:true, modify:false, delete:false, },
        { name:'이*파', content:'안녕하세요?', block:false, modify:false, delete:false, },
      ],

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
    },
    // ModifyComnt(){
    //   this.isModifyComnt = true;
    // },
    // DeleteComnt(){
    //   this.isComnt = false;
    // },
    // textareaSubmit($event){
    //   this.dataTextareaComn.value = $event.value;
    //   this.isModifyComnt = false;
    // }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components: {
    Card,
    NoData,
    Pagination,
    Sort,
    SortList,
    TextareaBox
  },
  props: {
    frontData: Object,  // @/assets/frontData.js
  }
}
</script>
