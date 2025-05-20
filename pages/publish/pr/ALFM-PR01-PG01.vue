<template>
  <div class="container">
    <!-- 새로운 상단 -->
    <div class="content wide-content">
      <div class="detail-visual">
        <!-- 요금제 상세 수정 2025-03-21 -->
        <RateDetailInfo @openAlert="handleShare" />
        <!-- // 요금제 상세 -->

        <!-- 요금제 리스트 2025-03-21 -->
        <SwiperRateDetailList />
        <!-- // 요금제 리스트 -->
      </div>
      <!-- // 새로운 상단 -->
    </div>

    <div class="content cont_ratePlan" id="content">
      <div class="section pt-0">
        <div class="partner_bnr">
          <!-- class="mgt32" 삭제 23/11/03 -->
          <NuxtLink :to="{}">
            <div class="partner">
              <img src="/images/data/logo_s_partner06.png" alt="프리티" />
              <div class="star"><span class="blind">별점</span><span class="score">4.5</span></div>
            </div>
            <strong>프리티 자세히보기</strong>
          </NuxtLink>
        </div>

        <!-- 위치 이동 및 checkbox 추가 23/11/03 -->
        <div class="con_bnr combi">
          <!-- class="combi" 추가 23/11/03 -->
          <NuxtLink :to="{}">
            <div class="tex">
              <span>알뜰폰도 인터넷/TV와 결합할 수 있어요!</span>
              <strong>LG U+ 인터넷/TV 결합하기</strong>
            </div>
            <img src="/images/content/img_bnr01.png" alt="" />
          </NuxtLink>

          <div class="check_st">
            <input type="checkbox" id="checkbox_01" />
            <label for="checkbox_01"> U+인터넷 결합 할인 금액 보기</label>
          </div>
        </div>
        <!-- //위치 이동 및 checkbox 추가 23/11/03 -->
      </div>
      <!-- // section -->

      <!-- 제휴카드 추가 23/11/03 -->
      <div class="section">
        <h3 class="tit03">
          제휴카드
          <button
            type="button"
            class="btn_info"
            id="btn_PR01PG01C"
            @click="this.$emit('openAlert', ['PR01PG01C', 'btn_PR01PG01C', 101])"
          >
            <span class="blind">제휴카드 안내</span>
          </button>
        </h3>
        <div class="item_list03 card_join">
          <ul>
            <li>
              <div class="radio_item ty07">
                <input type="radio" id="radio_01" name="radioGroup" />
                <label for="radio_01" class="ty01">
                  <span>삼성카드</span>
                  <span class="off">12,000원 할인</span>
                </label>
              </div>
            </li>
            <li>
              <div class="radio_item ty07">
                <input type="radio" id="radio_02" name="radioGroup" />
                <label for="radio_02" class="ty02">
                  <span>우리카드</span>
                  <span class="off">11,000원 할인</span>
                </label>
              </div>
            </li>
            <li>
              <div class="radio_item ty07">
                <input type="radio" id="radio_03" name="radioGroup" checked />
                <label for="radio_03" class="ty03">
                  <span>제휴카드</span>
                  <span>적용안함</span>
                </label>
              </div>
            </li>
          </ul>
        </div>
        <!-- // item_list03 -->

        <NuxtLink :to="{}" class="txt_more">제휴카드 자세히 알아보기</NuxtLink>
      </div>
      <!-- // 제휴카드 추가 23/11/03 -->

      <div class="section">
        <h3 class="tit03">혜택</h3>
        <!-- 문구 변경 ; 23/11/28 -->

        <v-expansion-panels class="acd_wrap" v-model="acd" multiple>
          <v-expansion-panel class="acd_item">
            <div class="acd_title">
              <v-expansion-panel-title>알뜰폰닷컴만의 혜택</v-expansion-panel-title
              ><!-- 문구 변경 ; 23/11/28 -->
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <div class="crp_ben_item">
                  <div class="img">
                    <img src="/images/data/img_benefits01.png" alt="" />
                  </div>
                  <dl>
                    <dt>스타벅스</dt>
                    <dd>스타벅스 라떼 2잔</dd>
                  </dl>
                  <button
                    type="button"
                    class="btn xsm c07"
                    id="btn_PR01PG01"
                    @click="this.$emit('openPopup', ['PR01PG01', 'btn_PR01PG01', 101])"
                  >
                    혜택보기
                  </button>
                </div>

                <div class="crp_ben_item">
                  <div class="img">
                    <img src="/images/data/img_benefits01.png" alt="" />
                  </div>
                  <dl>
                    <dt>스타벅스</dt>
                    <dd>스타벅스 라떼 2잔</dd>
                  </dl>
                  <button
                    type="button"
                    class="btn xsm c07"
                    id="btn_PR01PG01"
                    @click="this.$emit('openPopup', ['PR01PG01', 'btn_PR01PG01', 101])"
                  >
                    혜택보기
                  </button>
                </div>

                <div class="crp_ben_item">
                  <div class="img">
                    <img src="/images/data/img_benefits01.png" alt="" />
                  </div>
                  <dl>
                    <dt>스타벅스</dt>
                    <dd>스타벅스 라떼 2잔</dd>
                  </dl>
                  <button
                    type="button"
                    class="btn xsm c07"
                    id="btn_PR01PG01"
                    @click="this.$emit('openPopup', ['PR01PG01', 'btn_PR01PG01', 101])"
                  >
                    혜택보기
                  </button>
                </div>

                <button type="button" class="crp_ben_more">더볼래요</button>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

          <v-expansion-panel class="acd_item">
            <div class="acd_title">
              <v-expansion-panel-title>프리티의 혜택</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <div class="crp_ben_item">
                  <div class="img">
                    <img src="/images/data/img_benefits01.png" alt="" />
                  </div>
                  <dl>
                    <dt>스타벅스</dt>
                    <dd>스타벅스 라떼 2잔</dd>
                  </dl>
                  <button
                    type="button"
                    class="btn xsm c07"
                    id="btn_PR01PG01"
                    @click="this.$emit('openPopup', ['PR01PG01', 'btn_PR01PG01', 101])"
                  >
                    혜택보기
                  </button>
                </div>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

          <!-- 해당 항목 삭제, 기획 요청 ; 23/11/28 -->
          <!-- <v-expansion-panel class="acd_item">
            <div class="acd_title">
              <v-expansion-panel-title>제휴카드 혜택</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <div class="crp_ben_item">
                  <div class="img">
                    <img src="/images/data/img_benefits01.png" alt="">
                  </div>
                  <dl>
                    <dt>스타벅스</dt>
                    <dd>스타벅스 라떼 2잔</dd>
                  </dl>
                  <button type="button" class="btn xsm c07" id="btn_PR01PG01" @click="this.$emit('openPopup', ['PR01PG01', 'btn_PR01PG01', 101]);">혜택보기</button>
                </div>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel> -->
        </v-expansion-panels>
      </div>
      <!-- // section -->

      <div class="section">
        <h3 class="tit03">부가서비스</h3>

        <!--  accordion 적용 - markup 변경 23/11/03 -->
        <v-expansion-panels class="acd_wrap" v-model="acd3" multiple>
          <v-expansion-panel class="acd_item">
            <div class="acd_title">
              <v-expansion-panel-title>지원</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <div class="va_services">
                  <dl class="serv01">
                    <dt>참 쉬운 가족결합</dt>
                    <!-- 문구 변경 ; 23/11/28 -->
                    <dd>
                      <span>가입자당 월 440원 할인</span>
                      <span>인터넷 최대 13,200원 할인</span>
                    </dd>
                  </dl>
                  <dl class="serv02">
                    <dt>모바일 핫스팟</dt>
                    <dd>11GB 제공</dd>
                  </dl>
                  <dl class="serv03">
                    <dt>소액결제</dt>
                    <dd></dd>
                  </dl>
                  <dl class="serv04">
                    <dt>해외로밍</dt>
                    <dd>⁠신청은 통신사에 문의</dd>
                  </dl>
                  <dl class="serv05">
                    <dt>데이터 쉐어링</dt>
                    <dd></dd>
                  </dl>
                </div>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

          <v-expansion-panel class="acd_item">
            <div class="acd_title">
              <v-expansion-panel-title>미지원</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <div class="va_services">
                  <dl class="serv01 off">
                    <dt>가족결합</dt>
                    <dd>가입자당 월 440원 할인</dd>
                  </dl>
                  <dl class="serv02 off">
                    <dt>모바일 핫스팟</dt>
                    <dd>11GB 제공</dd>
                  </dl>
                  <dl class="serv03 off">
                    <dt>소액결제</dt>
                    <dd></dd>
                  </dl>
                  <dl class="serv04 off">
                    <dt>해외로밍</dt>
                    <dd>⁠신청은 통신사에 문의</dd>
                  </dl>
                  <dl class="serv05 off">
                    <dt>데이터 쉐어링</dt>
                    <dd></dd>
                  </dl>
                </div>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- // accordion 적용 - markup 변경 23/11/03 -->
      </div>
      <!-- // section -->

      <div class="section">
        <Tab
          :data="{
            option: { type: 1 },
            data: [
              { selected: true, controls: 'tab_panel_01_01', title: '사용자 리뷰' },
              { selected: false, controls: 'tab_panel_01_02', title: '블로그 리뷰' },
            ],
          }"
        >
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
                          <div class="star_active" style="width: 100%"></div>
                        </div>
                        <strong>5.0</strong>
                      </dd>
                    </dl>
                    <dl>
                      <dt>고객상담</dt>
                      <dd>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width: 40%"></div>
                        </div>
                        <strong>4.0</strong>
                      </dd>
                    </dl>
                    <dl>
                      <dt>요금제 만족도</dt>
                      <dd>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width: 80%"></div>
                        </div>
                        <strong>4.0</strong>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <!-- // review_point -->

              <!-- no data 경우 display:none 영역 23/11/06 -->
              <div class="line_list ty02">
                <ul>
                  <li>
                    <div class="list_con ty02">
                      <div class="cus">
                        <span class="name">김*파</span>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width: 40%"></div>
                        </div>
                        <span class="score">0.0</span>
                        <span class="date">2023.04.11</span>
                      </div>
                      <span class="tit">
                        전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과
                        비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="list_con ty02">
                      <div class="cus">
                        <span class="name">김*파</span>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width: 40%"></div>
                        </div>
                        <span class="score">0.0</span>
                        <span class="date">2023.04.11</span>
                      </div>
                      <span class="tit">
                        전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과
                        비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="list_con ty02">
                      <div class="cus">
                        <span class="name">김*파</span>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width: 40%"></div>
                        </div>
                        <span class="score">0.0</span>
                        <span class="date">2023.04.11</span>
                      </div>
                      <span class="tit">
                        전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과
                        비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다.
                      </span>
                    </div>
                  </li>
                </ul>
                <div class="btn_group">
                  <button
                    type="button"
                    class="btn md c05"
                    id="btn_userReview"
                    @click="this.$emit('openPopup', ['userReview', 'btn_userReview', 101])"
                  >
                    전체보기
                  </button>
                </div>
              </div>
              <!-- no data 경우 display:none 영역 23/11/06 -->

              <!-- no data 추가 23/11/06   -->
              <NoData :option="{ type: 'his', html: '<p>등록된 사용자 리뷰가 없습니다.</p>' }" />
              <!-- // no data 추가 23/11/06   -->
            </div>
          </template>
          <template v-slot:tab_panel_01_02>
            <h3 class="blind">블로그 리뷰</h3>
            <div class="panel_cnt">
              <!-- no data 경우 display:none 영역 23/11/06 -->
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
                          전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과
                          비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다.
                        </span>
                      </div>
                      <div class="img">
                        <img src="/images/data/img_thum.png" alt="블로그 리뷰 썸네일" />
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
                          전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과
                          비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다.
                        </span>
                      </div>
                      <div class="img">
                        <img src="/images/data/img_thum.png" alt="블로그 리뷰 썸네일" />
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
                          전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과
                          비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다.
                        </span>
                      </div>
                      <div class="img">
                        <img src="/images/data/img_thum.png" alt="블로그 리뷰 썸네일" />
                      </div>
                    </NuxtLink>
                  </li>
                </ul>
                <div class="btn_group">
                  <button
                    type="button"
                    class="btn md c05"
                    id="btn_blogReview"
                    @click="this.$emit('openPopup', ['blogReview', 'btn_blogReview', 101])"
                  >
                    전체보기
                  </button>
                </div>
              </div>
              <!-- //no data 경우 display:none 영역 23/11/06 -->

              <!-- no data 추가 23/11/06   -->
              <NoData :option="{ type: 'his', html: '<p>등록된 블로그 리뷰가 없습니다.</p>' }" />
              <!-- // no data 추가 23/11/06   -->
            </div>
          </template>
        </Tab>
      </div>
      <!-- // section -->

      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">비슷한 요금제</h3>
          <NuxtLink :to="{}" class="more">더보기</NuxtLink>
        </div>

        <SwiperCard :data="frontData.swiper.rateplan" :option="{ type: 'rateplan' }" />
      </div>
      <!-- // section -->

      <div class="section">
        <div class="tit_wrap">
          <h3 class="tit03">많이 찾은 요금제</h3>
          <NuxtLink :to="{}" class="more">더보기</NuxtLink>
        </div>

        <SwiperCard :data="frontData.swiper.rateplan" :option="{ type: 'rateplan' }" />
      </div>
      <!-- // section -->

      <div class="section">
        <h3 class="tit03">요금제 상세정보</h3>

        <v-expansion-panels class="acd_wrap" v-model="acd2" multiple>
          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>초과 이용 요금</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <div class="ove_charge">
                  <dl class="div01">
                    <dt>음성(초)</dt>
                    <dd>1.98원</dd>
                  </dl>
                  <dl class="div02">
                    <dt>영상(초)</dt>
                    <dd>22원</dd>
                  </dl>
                  <dl class="div03">
                    <dt>SMS(건)</dt>
                    <dd>22원</dd>
                  </dl>
                  <dl class="div04">
                    <dt>LMS(건)</dt>
                    <dd>22원</dd>
                  </dl>
                  <dl class="div05">
                    <dt>MMS(건)</dt>
                    <dd>220원</dd>
                  </dl>
                  <dl class="div06">
                    <dt>데이터(MB)</dt>
                    <dd>22.58원</dd>
                  </dl>
                </div>

                <ul class="text_list bull">
                  <li>SMS : 단문 Text형 문자 (한글 70자/영문 140자 이하)</li>
                  <li>LMS : 장문 Text형 문자 (한글 71자/영문 141자 이상)</li>
                  <li>MMS : 멀티미디어형 문자 (사진, 동영상)</li>
                  <li>VAT 포함</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>데이터(상세)</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <ul class="text_list bull">
                  <li>데이터(상세)</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>음성(상세)</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <ul class="text_list bull">
                  <li>음성(상세)</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>메시지(상세)</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <ul class="text_list bull">
                  <li>메시지(상세)</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>유의사항</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <ul class="text_list bull">
                  <li>
                    청소년 요금제는 미성년자 전용 요금제이며, 만 20세가 되는 날까지 타 요금제로
                    변경하지 않는 경우 만 20세가 되는 날의 익월 1일에 다음과 같이 자동
                    전환됩니다.<br />(단, 요금 전환 시기에 해당 요금제가 가입 제한된 경우는 유사
                    요금제로 전환)
                  </li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>

        <!-- 위치 이동 23/11/03 -->
        <div class="con_bnr">
          <NuxtLink :to="{}">
            <div class="tex">
              <span>선불유심요금제로 가입할 매장을 찾고 계신가요?</span>
              <strong>내 주변 매장찾기</strong>
            </div>
            <img src="/images/content/img_bnr02.png" alt="" />
          </NuxtLink>
        </div>

        <div class="btn_group">
          <NuxtLink :to="{}" role="button" class="btn md c05">목록보기</NuxtLink>
        </div>
        <!-- //위치 이동 23/11/03 -->
      </div>
      <!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <!--  결합하면 항목 markup 수정 23/11/03 -->
          <div class="plan_join">
            <div class="combi_info">
              <strong>
                <span class="fc01">결합하면</span>
                <span>월 14,900원</span>
              </strong>
            </div>
            <div class="join_info">
              <div class="tex">
                <p class="text__title">월 예상 납부금액</p>
                <div class="tex__info">
                  <strong>월 14,900원</strong>
                  <span class="side_tip">(부가세 포함)</span>
                  <p>8개월 이후 39,490원</p>
                </div>
              </div>
              <!-- <NuxtLink :to="{}" class="btn lg c01">가입하기</NuxtLink> -->
              <div :class="['fc02', front.isMobile() ? 'fs16' : 'fs19']">
                <strong>종료된 요금제입니다.</strong>
              </div>
            </div>
          </div>
          <!--  //결합하면 항목 markup 수정 23/11/03 -->
        </div>
      </div>
      <!-- // bottom_float -->
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script>
import NoData from "@/components/NoData";
import SwiperCard from "@/components/SwiperCard";
import Tab from "@/components/Tab";
import RateDetailInfo from "@/components/page/plan/RateDetailInfo";
import SwiperRateDetailList from "@/components/page/plan/SwiperRateDetailList";

export default {
  name: "ALFM-PR01-PG01",
  emits: ["setLayout", "openPopup", "openAlert"],
  data() {
    return {
      layout: { header: "sub", footer: "none", title: "요금제 상세", floatMenu: "none" },

      isMobile: false,

      flag: [false],
      acd: [0, 1],
      acd2: [0, 4],
      acd3: [false],
    };
  },
  mounted() {
    this.$emit("setLayout", this.layout);

    this.isMobile = front.isMobile();
  },
  methods: {
    handleShare() {
      this.$emit("openAlert", ["CM12PG00", "btn_CM12PG00", 101]);
    },
  },
  components: {
    NoData,
    SwiperCard,
    Tab,
    RateDetailInfo,
    SwiperRateDetailList,
  },
  props: {
    frontData: Object, // @/assets/frontData.js
  },
};
</script>
