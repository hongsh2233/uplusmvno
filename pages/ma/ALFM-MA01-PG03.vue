<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">이야기모바일</h2>
          
      <div class="section">        
        <div class="partner_title">
          <div class="img">
            <img src="/images/data/logo_partner18.png" alt="">
          </div>
          <strong class="tit">이야기모바일</strong>
          <em class="tex">똑똑한 통신요금의 기준 이야기 알뜰폰</em>
          <button class="btn_text" @click="tabClick(1)">4.5 <span>(56개)</span></button>
        </div>

        <div class="scroll_fixed" ref="scrollFixed" :class="{ on : sticky.stickyActive }" :style="{ height:`${sticky.scrollFixedH}` }">
          <div class="scroll_tab" :style="{ top: `${sticky.headerH}px` }">
            <ul role="tablist">
              <li role="none" :class="{ on : sticky.selected[0] }">
                <button type="button" role="tab" :aria-selected="sticky.selected[0]" aria-controls="scroll_panel_01" @click="tabClick(0)">기본정보</button>
              </li>
              <li role="none" :class="{ on : sticky.selected[1] }">
                <button type="button" role="tab" :aria-selected="sticky.selected[1]" aria-controls="scroll_panel_02" @click="tabClick(1)">리뷰</button>
              </li>
              <li role="none" :class="{ on : sticky.selected[2] }">
                <button type="button" role="tab" :aria-selected="sticky.selected[2]" aria-controls="scroll_panel_03" @click="tabClick(2)">요금제</button>
              </li>
              <li role="none" :class="{ on : sticky.selected[3] }">
                <button type="button" role="tab" :aria-selected="sticky.selected[3]" aria-controls="scroll_panel_04" @click="tabClick(3)">이벤트</button>
              </li>
            </ul>
          </div>
        </div>

      </div><!-- .section -->





      <div class="section scroll_panel" role="tabpanel" :aria-expanded="sticky.selected[0]" tabindex="0" id="scroll_panel_01">
        <h3 class="blind">기본정보</h3>
        <div class="partner_info">
          <dl>
            <dt>업무시간</dt>
            <dd>⁠평일 09시~ 18시(점심시간 12~13시 제외)</dd>
          </dl>
          <dl>
            <dt>고객센터</dt>
            <dd>1670-0283</dd>
          </dl>
          <dl>
            <dt>주소</dt>
            <dd>서울시 구로구 디지털로26길 61, 1304호 (구로동, 에이스하이엔드타워 2차)</dd>
          </dl>
          <dl>
            <dt>홈페이지</dt>
            <dd><NuxtLink to="https://www.eyagi.co.kr/shop/index.php" target="_blank">https://www.eyagi.co.kr/shop/index.php</NuxtLink></dd>
          </dl>
        </div>
      </div> <!-- // section -->

      <div class="section scroll_panel" role="tabpanel" :aria-expanded="sticky.selected[1]" tabindex="0" id="scroll_panel_02">
        <h3 class="tit03">리뷰</h3>
        <Tab :data="{
            option: { type:1 },
            data: [
              { selected:true, controls:'tab_panel_01_01', title: '사용자 리뷰'},
              { selected:false, controls:'tab_panel_01_02', title: '블로그 리뷰'},
            ]
          }
        ">
          <template v-slot:tab_panel_01_01>
            <h3 class="blind">사용자 리뷰</h3>

            <div class="panel_cnt">
                
              <div class="review_point">
                <div class="rp_l">
                  <div class="all">
                    <strong>5.0</strong>
                    <span>(56개)</span>
                  </div>
                </div>
                <div class="rp_r">
                  <div class="detail">
                    <dl>
                      <dt>개통과정</dt>
                      <dd>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width:100%;"></div>
                        </div>
                        <strong>5.0</strong>
                      </dd>
                    </dl>
                    <dl>
                      <dt>고객상담</dt>
                      <dd>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width:40%;"></div>
                        </div>
                        <strong>4.0</strong>
                      </dd>
                    </dl>
                    <dl>
                      <dt>요금제 만족도</dt>
                      <dd>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width:80%;"></div>
                        </div>
                        <strong>4.0</strong>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div> <!-- // review_point -->

              <!-- no data 경우 display:none 영역 23/11/09 -->
              <div class="line_list ty02">
                <ul>
                  <li>
                    <div class="list_con ty02">
                      <div class="cus">
                        <span class="name">김*파</span>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width:40%;"></div>
                        </div>
                        <span class="score">0.0</span>
                        <span class="date">2023.04.11</span>
                      </div>
                      <span class="tit">
                        전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. 
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="list_con ty02">
                      <div class="cus">
                        <span class="name">김*파</span>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width:40%;"></div>
                        </div>
                        <span class="score">0.0</span>
                        <span class="date">2023.04.11</span>
                      </div>
                      <span class="tit">
                        전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. 
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="list_con ty02">
                      <div class="cus">
                        <span class="name">김*파</span>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width:40%;"></div>
                        </div>
                        <span class="score">0.0</span>
                        <span class="date">2023.04.11</span>
                      </div>
                      <span class="tit">
                        전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. 
                      </span>
                    </div>
                  </li>
                </ul>
                <div class="btn_group">
                  <button type="button" class="btn md c05" id="btn_userReview" @click="this.$emit('openPopup', ['userReview', 'btn_userReview', 101]);">전체보기</button>
                </div>
              </div>
              <!-- //no data 경우 display:none 영역 23/11/09  -->

              <!-- no data 추가 23/11/09   -->
              <NoData :option="{type:'his', html:'<p>등록된 사용자 리뷰가 없습니다.</p>'}" />
              <!-- // no data 추가 23/11/09   -->

            </div>
          </template>
          <template v-slot:tab_panel_01_02>
            <h3 class="blind">블로그 리뷰</h3>

            <div class="panel_cnt">

              <!-- no data 경우 display:none 영역 23/11/09 -->
              <div class="line_list ty02">
                <ul>
                  <li>
                    <NuxtLink :to="{}" class="list_con ty03">
                      <div class="list_lft">
                        <div class="cus">
                          <span class="name">올리브소스 님</span>
                          <span class="date">2023.04.11</span>
                        </div>
                        <span class="tit ellipsis2">
                          전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. 
                        </span>
                      </div>
                      <div class="img">
                        <img src="/images/data/img_thum.png" alt="블로그 리뷰 썸네일">
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink :to="{}" class="list_con ty03">
                      <div class="list_lft">
                        <div class="cus">
                          <span class="name">올리브소스 님</span>
                          <span class="date">2023.04.11</span>
                        </div>
                        <span class="tit ellipsis2">
                          전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. 
                        </span>
                      </div>
                      <div class="img">
                        <img src="/images/data/img_thum.png" alt="블로그 리뷰 썸네일">
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink :to="{}" class="list_con ty03">
                      <div class="list_lft">
                        <div class="cus">
                          <span class="name">올리브소스 님</span>
                          <span class="date">2023.04.11</span>
                        </div>
                        <span class="tit ellipsis2">
                          전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과 비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다. 
                        </span>
                      </div>
                      <div class="img">
                        <img src="/images/data/img_thum.png" alt="블로그 리뷰 썸네일">
                      </div>
                    </NuxtLink>
                  </li>
                </ul>
                <div class="btn_group">
                  <button type="button" class="btn md c05" id="btn_blogReview" @click="this.$emit('openPopup', ['blogReview', 'btn_blogReview', 101]);">전체보기</button>
                </div>
              </div>
              <!-- //no data 경우 display:none 영역 23/11/09 -->

              <!-- no data 추가 23/11/09   -->
              <NoData :option="{type:'his', html:'<p>등록된 블로그 리뷰가 없습니다.</p>'}" />
              <!-- // no data 추가 23/11/09   -->

            </div>
          </template>
        </Tab>
      </div><!-- // section -->

      <div class="section scroll_panel" role="tabpanel" :aria-expanded="sticky.selected[2]" tabindex="0" id="scroll_panel_03">
        <h3 class="tit03">요금제</h3>

        <div class="item_list ty02">
          <Card :cardInfo="{type: 'ty01', name: 'test1', detail: true }" />
          <Card :cardInfo="{type: 'ty01', name: 'test2'}" />
          <div class="btn_group">
            <button type="button" class="btn md c05">파트너사 요금제 더 보러가기</button>
          </div>
        </div>
      </div> <!-- // section -->

      <div class="section scroll_panel" role="tabpanel" :aria-expanded="sticky.selected[3]" tabindex="0" id="scroll_panel_04">
        <h3 class="tit03">이벤트</h3>

        <div class="item_list ty02">
          <ul>
            <li>
              <NuxtLink :to="{}" class="link_list">
                <span class="blind">이벤트 상세페이지 이동</span>
                <div class="thum_item">
                  <div class="thum_img">
                    <div class="thum_top">
                      <div class="bag_lft">
                        <div class="bag evt dday"><b>D-1</b></div>
                        <div class="bag evt ty01"><b>이번달 이벤트</b></div>
                      </div>
                      <div class="bag_rit">
                        <img src="/images/data/logo_s_partner21.png" alt="tplus">
                      </div>
                    </div>
                    <img src="/images/data/img_card_thum07.png" alt="혜택 이벤트 썸네일">
                  </div>
                  <div class="thum_con">
                    <strong>무제한이 9천원대! 오직 알뜰폰닷컴에서만</strong>
                    <span>2023.02.02 - 2023.03.28</span>
                  </div>
                </div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{}" class="link_list">
                <span class="blind">이벤트 상세페이지 이동</span>
                <div class="thum_item">
                  <div class="thum_img">
                    <div class="thum_top">
                      <div class="bag_lft">
                        <div class="bag evt dday"><b>D-5</b></div>
                        <div class="bag evt ty02"><b>친구초대</b></div>
                      </div>
                      <div class="bag_rit">
                        <img src="/images/data/logo_s_alpha_w.png" alt="tplus">
                      </div>
                    </div>
                    
                    <img src="/images/data/img_card_thum05.png" alt="혜택 이벤트 썸네일">
                  </div>
                  <div class="thum_con">
                    <strong>좋은 건 같이 써야죠~ 친구 추천 이벤트</strong>
                    <span>2023.02.02 - 2023.03.28</span>
                  </div>
                </div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{}" class="link_list">
                <span class="blind">이벤트 상세페이지 이동</span>
                <div class="thum_item">
                  <div class="thum_img">
                    <div class="thum_top">
                      <div class="bag_lft">
                        <div class="bag evt dday"><b>D-24</b></div>
                        <div class="bag evt ty03"><b>제휴 이벤트</b></div>
                      </div>
                      <div class="bag_rit">
                        <img src="/images/data/logo_s_alpha_w.png" alt="tplus">
                      </div>
                    </div>
                    
                    <img src="/images/data/img_card_thum06.png" alt="혜택 이벤트 썸네일">
                  </div>
                  <div class="thum_con">
                    <strong>알뜰폰닷컴 신규회원 대상 개통 시 Npay 5천원 선착순 증정 리뷰이벤트</strong>
                    <span>2023.02.02 - 2023.03.28</span>
                  </div>
                </div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{}" class="link_list">
                <span class="blind">이벤트 상세페이지 이동</span>
                <div class="thum_item">
                  <div class="thum_img">
                    <div class="thum_top">
                      <div class="bag_lft">
                        <div class="bag evt dday"><b>D-24</b></div>
                        <div class="bag evt ty04"><b>제휴카드</b></div>
                      </div>
                      <div class="bag_rit">
                        <img src="/images/data/logo_s_alpha_w.png" alt="tplus">
                      </div>
                    </div>
                      
                    <img src="/images/data/img_card_thum04.png" alt="혜택 이벤트 썸네일">
                  </div>
                  <div class="thum_con">
                    <strong>무제한이 9천원대! 오직 알뜰폰닷컴에서만</strong>
                    <span>2023.02.02 - 2023.03.28</span>
                  </div>
                </div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="{}" class="link_list end_thum">
                <span class="blind">이벤트 상세페이지 이동</span>
                <b class="end_txt">본 이벤트는 종료되었습니다</b>
                <div class="thum_item">
                  <div class="thum_img">
                    <div class="thum_top">
                      <div class="bag_lft">
                        <div class="bag evt dday"><b>D-24</b></div>
                        <div class="bag evt ty04"><b>제휴카드</b></div>
                      </div>
                      <div class="bag_rit">
                        <img src="/images/data/logo_s_alpha_w.png" alt="tplus">
                      </div>
                    </div>
                    
                    <img src="/images/data/img_card_thum04.png" alt="혜택 이벤트 썸네일">
                  </div>
                  <div class="thum_con">
                    <strong>무제한이 9천원대! 오직 알뜰폰닷컴에서만</strong>
                    <span>2023.02.02 - 2023.03.28</span>
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

        <NoData :option="{type:'his', html:'<p>등록된 이벤트가 없습니다</p>'}" />

      </div> <!-- // section -->

      <Compare @openPopup="this.$emit('openPopup', $event)" />

    </div> <!-- // content -->
  </div> <!-- // container -->

</template>

<script>
import Card from '@/components/Card'
import NoData from '@/components/NoData'
import Tab from '@/components/Tab'
import Compare from '@/components/Compare'

export default {
  name: "GuideSticky",
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '이야기모바일' },
      tooltip: [false, false, false],

      sticky: {
        clickEvent: false,
        scrollTop: 0,

        headerH: 0,
        tabH: 0,
        scrollFixedH: 'auto',   // stickyActive 시 scroll_fixed height 값

        stickyActive: false,
        stickyActiveSize: false,  // sticky active 높이값

        activeIdx: 0,
        selected:[ true, false, false, false ],
        
        panelRealOffset: [0, 0, 0, 0],
        panelOffset: [0, 0, 0, 0],
      },
    }
  },
  methods: {
    onScroll(){
      this.sticky.scrollTop = Math.round(document.querySelector("html").scrollTop);
      this.getScrollData();

      this.sticky.stickyActive = (this.sticky.scrollTop > this.sticky.stickyActiveSize) ? true : false;
      this.sticky.scrollFixedH = (this.sticky.stickyActive) ? `${this.sticky.tabH}px` : 'auto';

      if( this.sticky.scrollTop == this.sticky.panelOffset[this.sticky.activeIdx] ) this.sticky.clickEvent = false;
      if( this.sticky.clickEvent ) return;

      const gap = -10;
      if( this.sticky.scrollTop <= this.sticky.panelOffset[1] + gap ){            this.sticky.activeIdx = 0;
      } else if ( this.sticky.scrollTop <= this.sticky.panelOffset[2] + gap ){    this.sticky.activeIdx = 1;
      } else if ( this.sticky.scrollTop <= this.sticky.panelOffset[3] + gap ){    this.sticky.activeIdx = 2;
      } else {                                                                    this.sticky.activeIdx = 3;
      }

      this.sticky.selected = [ false, false, false, false ];
      this.sticky.selected[this.sticky.activeIdx] = true;
    },
    tabClick(num){
      this.sticky.clickEvent = true;

      this.sticky.activeIdx = num;
      this.setScroll();
    },
    setScroll(){
      window.scrollTo({
        top: this.sticky.panelOffset[this.sticky.activeIdx],
        behavior: 'smooth'
      });
    },
    getScrollData(){
      this.sticky.headerH = document.querySelector("header.header").offsetHeight;
      this.sticky.tabH = this.$refs.scrollFixed.offsetHeight;

      this.sticky.panelRealOffset[0] = document.querySelector("#scroll_panel_01").offsetTop;
      this.sticky.panelRealOffset[1] = document.querySelector("#scroll_panel_02").offsetTop;
      this.sticky.panelRealOffset[2] = document.querySelector("#scroll_panel_03").offsetTop;
      this.sticky.panelRealOffset[3] = document.querySelector("#scroll_panel_04").offsetTop;

      this.sticky.panelRealOffset.forEach( (a, i) => {
        a = a - this.sticky.headerH - this.sticky.tabH;
        this.sticky.panelOffset[i] = a;
      })

      this.sticky.stickyActiveSize = this.$refs.scrollFixed.offsetTop - this.sticky.headerH;
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);

    setTimeout(()=>{ this.onScroll() }, 20); 
    window.addEventListener("scroll", this.onScroll );
  },
  unmounted(){
    window.removeEventListener("scroll", this.onScroll );
  },
  components: {
    Card,
    NoData,
    Tab,
    Compare
  }
};
</script>
