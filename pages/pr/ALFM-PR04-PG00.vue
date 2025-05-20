<template>
  <div class="container">
    <div class="content cont_exhibitions" id="content">
      <div class="inner">
        <h2 class="title_nav pc_hide">{{ layout.title }}</h2>

        <div class="section">
          <div class="section_title">
            <span class="badge">알닷 특가 기획전</span>
            <p class="title">
              알닷에서만 만나는 <br class="pc_hide" />
              <strong>특가</strong> 요금제
            </p>
            <p class="date">2025.08.01~2025.08.31</p>
          </div>

          <swiper
            @slideChange="onSlideChange"
            :modules="modules"
            :pagination="pagination"
            :autoHeight="autoHeight"
            :spaceBetween="16"
            :enabled="enabled"
            class="exhibitionSwiper"
          >
            <swiper-slide class="item_list ty02">
              <div class="plan_item">
                <div class="card_top">
                  <div class="partner">
                    <img src="/images/data/logo_partner06.png" alt="프리티" />
                    <div class="star">
                      <span class="blind">별점</span><span class="score">4.5</span>
                    </div>
                  </div>
                  <div class="beft">
                    <span class="bag card ty01">U<sup>+</sup>인터넷결합</span>
                    <span class="bag card ty02">알닷ONLY</span>
                  </div>
                </div>

                <div class="card_mid big_card">
                  <div class="card_info">
                    <span class="plan_tit">데이터안심15G+</span>
                    <strong class="plan_tit_sub">
                      월 11GB + 매일 2GB + 3Mbps
                      <v-btn
                        :id="`${cardInfo.name}-0`"
                        class="btn_tooltip"
                        :class="{ on: tooltip[0] }"
                        title="툴팁"
                        @click="tooltip[0] = !tooltip[0]"
                        >요금제 툴팁</v-btn
                      >
                    </strong>
                    <div class="plan_info">
                      <span class="phone"><span class="blind">통화량</span>100분</span>
                      <span class="message"><span class="blind">문자량</span>100건</span>
                      <span class="cellular"><span class="blind">통신기술</span>LTE</span>
                    </div>
                  </div>

                  <div class="card_price">
                    <div class="month">월 10,890원</div>
                    <span class="period">6개월 이후 38,900원</span>
                  </div>
                </div>
                <v-tooltip
                  v-model="tooltip[0]"
                  :activator="`#${cardInfo.name}-0`"
                  location="top"
                  offset="0"
                  scroll-strategy="close"
                  :open-on-hover="false"
                  no-click-animation
                  contained
                >
                  <div class="tooltip_content">
                    데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
                  </div>
                </v-tooltip>

                <div class="combi">
                  <div class="card_bot" :class="{ on: detail }">
                    <div class="paln_badge">
                      <button
                        type="button"
                        class="btn bag c01"
                        :class="{ on: flag[0] }"
                        @click="flag[0] = !flag[0]"
                      >
                        <span class="blind">찜하기</span>480
                      </button>
                      <button
                        type="button"
                        class="btn bag c02"
                        :class="{ on: flag[1] }"
                        @click="flag[1] = !flag[1]"
                      >
                        비교하기
                      </button>
                    </div>

                    <div class="gift_box">
                      <div class="bag_list">
                        <ul>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts01.png" alt="스타벅스 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts02.png" alt="신세계 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts03.png" alt="선물상자 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts04.png" alt="네이버페이 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts05.png" alt="데이터 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">+2</div>
                          </li>
                        </ul>
                      </div>

                      <div class="acc_box">
                        <button
                          type="button"
                          :aria-expanded="detail[0]"
                          class="btn_acc"
                          @click="handleAccordion(0)"
                        >
                          사은품 최대 <span>3</span>개
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- </div> -->
                </div>

                <Transition name="cardDetail2">
                  <div role="region" v-if="detail[0]">
                    <ul class="acc_contents">
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts03.png" alt="선물상자 로고" />
                        </div>
                        <span>일반 유심 무료 발송</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts04.png" alt="네이버페이 로고" />
                        </div>
                        <span>네이버페이 5,000P 제공</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts02.png" alt="신세계 로고" />
                        </div>
                        <span>신세계상품권 10,000원권 증정</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts01.png" alt="스타벅스 로고" />
                        </div>
                        <span>스타벅스 아메리카노 기프티콘 2잔 제공</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts02.png" alt="신세계 로고" />
                        </div>
                        <span>신세계 상품권 1만원</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts05.png" alt="데이터 로고" />
                        </div>
                        <span>NFC 유심 50% 할인</span>
                      </li>
                    </ul>
                  </div>
                </Transition>

                <NuxtLink :to="{}" class="link_list">
                  <span class="blind">요금제 상세페이지 이동</span>
                </NuxtLink>
              </div>
              <div class="plan_item">
                <div class="card_top">
                  <div class="partner">
                    <img src="/images/data/logo_partner06.png" alt="프리티" />
                    <div class="star">
                      <span class="blind">별점</span><span class="score">4.5</span>
                    </div>
                  </div>
                  <div class="beft">
                    <span class="bag card ty01">U<sup>+</sup>인터넷결합</span>
                    <span class="bag card ty02">알닷ONLY</span>
                  </div>
                </div>

                <div class="card_mid big_card">
                  <div class="card_info">
                    <span class="plan_tit">데이터안심15G+</span>
                    <strong class="plan_tit_sub">
                      월 11GB + 매일 2GB + 3Mbps
                      <v-btn
                        :id="`${cardInfo.name}-1`"
                        class="btn_tooltip"
                        :class="{ on: tooltip[1] }"
                        title="툴팁"
                        @click="tooltip[1] = !tooltip[1]"
                        >요금제 툴팁</v-btn
                      >
                    </strong>
                    <div class="plan_info">
                      <span class="phone"><span class="blind">통화량</span>100분</span>
                      <span class="message"><span class="blind">문자량</span>100건</span>
                      <span class="cellular"><span class="blind">통신기술</span>LTE</span>
                    </div>
                  </div>

                  <div class="card_price">
                    <div class="month">월 10,890원</div>
                    <span class="period">6개월 이후 38,900원</span>
                  </div>
                </div>
                <v-tooltip
                  v-model="tooltip[1]"
                  :activator="`#${cardInfo.name}-1`"
                  location="top"
                  offset="0"
                  scroll-strategy="close"
                  :open-on-hover="false"
                  no-click-animation
                  contained
                >
                  <div class="tooltip_content">
                    데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
                  </div>
                </v-tooltip>

                <div class="combi">
                  <div class="card_bot" :class="{ on: detail }">
                    <div class="paln_badge">
                      <button
                        type="button"
                        class="btn bag c01"
                        :class="{ on: flag[2] }"
                        @click="flag[2] = !flag[2]"
                      >
                        <span class="blind">찜하기</span>480
                      </button>
                      <button
                        type="button"
                        class="btn bag c02"
                        :class="{ on: flag[3] }"
                        @click="flag[3] = !flag[3]"
                      >
                        비교하기
                      </button>
                    </div>

                    <div class="gift_box">
                      <div class="bag_list">
                        <ul>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts01.png" alt="스타벅스 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts02.png" alt="신세계 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts03.png" alt="선물상자 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts04.png" alt="네이버페이 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts05.png" alt="데이터 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">+2</div>
                          </li>
                        </ul>
                      </div>

                      <div class="acc_box">
                        <button
                          type="button"
                          :aria-expanded="detail[1]"
                          class="btn_acc"
                          @click="handleAccordion(1)"
                        >
                          사은품 최대 <span>3</span>개
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- </div> -->
                </div>

                <Transition name="cardDetail2">
                  <div role="region" v-if="detail[1]">
                    <ul class="acc_contents">
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts03.png" alt="선물상자 로고" />
                        </div>
                        <span>일반 유심 무료 발송</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts04.png" alt="네이버페이 로고" />
                        </div>
                        <span>네이버페이 5,000P 제공</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts02.png" alt="신세계 로고" />
                        </div>
                        <span>신세계상품권 10,000원권 증정</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts01.png" alt="스타벅스 로고" />
                        </div>
                        <span>스타벅스 아메리카노 기프티콘 2잔 제공</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts02.png" alt="신세계 로고" />
                        </div>
                        <span>신세계 상품권 1만원</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts05.png" alt="데이터 로고" />
                        </div>
                        <span>NFC 유심 50% 할인</span>
                      </li>
                    </ul>
                  </div>
                </Transition>

                <NuxtLink :to="{}" class="link_list">
                  <span class="blind">요금제 상세페이지 이동</span>
                </NuxtLink>
              </div>
            </swiper-slide>
            <swiper-slide class="item_list ty02">
              <div class="plan_item">
                <div class="card_top">
                  <div class="partner">
                    <img src="/images/data/logo_partner06.png" alt="프리티" />
                    <div class="star">
                      <span class="blind">별점</span><span class="score">4.5</span>
                    </div>
                  </div>
                  <div class="beft">
                    <span class="bag card ty01">U<sup>+</sup>인터넷결합</span>
                    <span class="bag card ty02">알닷ONLY</span>
                  </div>
                </div>

                <div class="card_mid big_card">
                  <div class="card_info">
                    <span class="plan_tit">데이터안심15G+</span>
                    <strong class="plan_tit_sub">
                      월 11GB + 매일 2GB + 3Mbps
                      <v-btn
                        :id="`${cardInfo.name}-2`"
                        class="btn_tooltip"
                        :class="{ on: tooltip[2] }"
                        title="툴팁"
                        @click="tooltip[2] = !tooltip[2]"
                        >요금제 툴팁</v-btn
                      >
                    </strong>
                    <div class="plan_info">
                      <span class="phone"><span class="blind">통화량</span>100분</span>
                      <span class="message"><span class="blind">문자량</span>100건</span>
                      <span class="cellular"><span class="blind">통신기술</span>LTE</span>
                    </div>
                  </div>

                  <div class="card_price">
                    <div class="month">월 10,890원</div>
                    <span class="period">6개월 이후 38,900원</span>
                  </div>
                </div>
                <v-tooltip
                  v-model="tooltip[2]"
                  :activator="`#${cardInfo.name}-2`"
                  location="top"
                  offset="2"
                  scroll-strategy="close"
                  :open-on-hover="false"
                  no-click-animation
                  contained
                >
                  <div class="tooltip_content">
                    데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
                  </div>
                </v-tooltip>

                <div class="combi">
                  <div class="card_bot" :class="{ on: detail }">
                    <div class="paln_badge">
                      <button
                        type="button"
                        class="btn bag c01"
                        :class="{ on: flag[5] }"
                        @click="flag[5] = !flag[5]"
                      >
                        <span class="blind">찜하기</span>480
                      </button>
                      <button
                        type="button"
                        class="btn bag c02"
                        :class="{ on: flag[6] }"
                        @click="flag[6] = !flag[6]"
                      >
                        비교하기
                      </button>
                    </div>

                    <div class="gift_box">
                      <div class="bag_list">
                        <ul>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts01.png" alt="스타벅스 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts02.png" alt="신세계 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts03.png" alt="선물상자 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts04.png" alt="네이버페이 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts05.png" alt="데이터 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">+2</div>
                          </li>
                        </ul>
                      </div>

                      <div class="acc_box">
                        <button
                          type="button"
                          :aria-expanded="detail[2]"
                          class="btn_acc"
                          @click="handleAccordion(2)"
                        >
                          사은품 최대 <span>3</span>개
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- </div> -->
                </div>

                <Transition name="cardDetail2">
                  <div role="region" v-if="detail[2]">
                    <ul class="acc_contents">
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts03.png" alt="선물상자 로고" />
                        </div>
                        <span>일반 유심 무료 발송</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts04.png" alt="네이버페이 로고" />
                        </div>
                        <span>네이버페이 5,000P 제공</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts02.png" alt="신세계 로고" />
                        </div>
                        <span>신세계상품권 10,000원권 증정</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts01.png" alt="스타벅스 로고" />
                        </div>
                        <span>스타벅스 아메리카노 기프티콘 2잔 제공</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts02.png" alt="신세계 로고" />
                        </div>
                        <span>신세계 상품권 1만원</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts05.png" alt="데이터 로고" />
                        </div>
                        <span>NFC 유심 50% 할인</span>
                      </li>
                    </ul>
                  </div>
                </Transition>

                <NuxtLink :to="{}" class="link_list">
                  <span class="blind">요금제 상세페이지 이동</span>
                </NuxtLink>
              </div>
              <div class="plan_item">
                <div class="card_top">
                  <div class="partner">
                    <img src="/images/data/logo_partner06.png" alt="프리티" />
                    <div class="star">
                      <span class="blind">별점</span><span class="score">4.5</span>
                    </div>
                  </div>
                  <div class="beft">
                    <span class="bag card ty01">U<sup>+</sup>인터넷결합</span>
                    <span class="bag card ty02">알닷ONLY</span>
                  </div>
                </div>

                <div class="card_mid big_card">
                  <div class="card_info">
                    <span class="plan_tit">데이터안심15G+</span>
                    <strong class="plan_tit_sub">
                      월 11GB + 매일 2GB + 3Mbps
                      <v-btn
                        :id="`${cardInfo.name}-3`"
                        class="btn_tooltip"
                        :class="{ on: tooltip[3] }"
                        title="툴팁"
                        @click="tooltip[3] = !tooltip[3]"
                        >요금제 툴팁</v-btn
                      >
                    </strong>
                    <div class="plan_info">
                      <span class="phone"><span class="blind">통화량</span>100분</span>
                      <span class="message"><span class="blind">문자량</span>100건</span>
                      <span class="cellular"><span class="blind">통신기술</span>LTE</span>
                    </div>
                  </div>

                  <div class="card_price">
                    <div class="month">월 10,890원</div>
                    <span class="period">6개월 이후 38,900원</span>
                  </div>
                </div>
                <v-tooltip
                  v-model="tooltip[3]"
                  :activator="`#${cardInfo.name}-3`"
                  location="top"
                  offset="0"
                  scroll-strategy="close"
                  :open-on-hover="false"
                  no-click-animation
                  contained
                >
                  <div class="tooltip_content">
                    데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
                  </div>
                </v-tooltip>

                <div class="combi">
                  <div class="card_bot" :class="{ on: detail }">
                    <div class="paln_badge">
                      <button
                        type="button"
                        class="btn bag c01"
                        :class="{ on: flag[7] }"
                        @click="flag[7] = !flag[7]"
                      >
                        <span class="blind">찜하기</span>480
                      </button>
                      <button
                        type="button"
                        class="btn bag c02"
                        :class="{ on: flag[8] }"
                        @click="flag[8] = !flag[8]"
                      >
                        비교하기
                      </button>
                    </div>

                    <div class="gift_box">
                      <div class="bag_list">
                        <ul>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts01.png" alt="스타벅스 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts02.png" alt="신세계 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts03.png" alt="선물상자 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts04.png" alt="네이버페이 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">
                              <img src="/images/component/img_gifts05.png" alt="데이터 로고" />
                            </div>
                          </li>
                          <li>
                            <div class="bag_git">+2</div>
                          </li>
                        </ul>
                      </div>

                      <div class="acc_box">
                        <button
                          type="button"
                          :aria-expanded="detail[3]"
                          class="btn_acc"
                          @click="handleAccordion(3)"
                        >
                          사은품 최대 <span>3</span>개
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- </div> -->
                </div>

                <Transition name="cardDetail2">
                  <div role="region" v-if="detail[3]">
                    <ul class="acc_contents">
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts03.png" alt="선물상자 로고" />
                        </div>
                        <span>일반 유심 무료 발송</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts04.png" alt="네이버페이 로고" />
                        </div>
                        <span>네이버페이 5,000P 제공</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts02.png" alt="신세계 로고" />
                        </div>
                        <span>신세계상품권 10,000원권 증정</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts01.png" alt="스타벅스 로고" />
                        </div>
                        <span>스타벅스 아메리카노 기프티콘 2잔 제공</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts02.png" alt="신세계 로고" />
                        </div>
                        <span>신세계 상품권 1만원</span>
                      </li>
                      <li>
                        <div class="bag_git">
                          <img src="/images/component/img_gifts05.png" alt="데이터 로고" />
                        </div>
                        <span>NFC 유심 50% 할인</span>
                      </li>
                    </ul>
                  </div>
                </Transition>

                <NuxtLink :to="{}" class="link_list">
                  <span class="blind">요금제 상세페이지 이동</span>
                </NuxtLink>
              </div>
            </swiper-slide>
          </swiper>

          <div v-if="!enabled" class="btn_wrap center">
            <button type="button" class="btn round more_d">더 볼래요</button>
          </div>
        </div>
        <!-- // section -->
      </div>
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "ALFM-PR04-PG00",
  emits: ["setLayout", "openPopup"],
  data() {
    return {
      layout: { header: "sub", footer: "", title: "알닷 특가 기획전", floatMenu: "none" },
      badge: [false, false, false, false, false, false, false, false],
      flag: [false, false, false, false, false, false, false, false],
      tooltip: [false, false, false, false],
      detail: [false, false, false, false],
      cardInfo: { detail: [false, false, false, false] },
      modules: [Pagination],
      autoHeight: false,
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<button class="' + className + '">' + (index + 1) + "</button>";
        },
      },
      enabled: front.isMobile() ? false : true,
    };
  },
  mounted() {
    this.detail = this.cardInfo.detail ? this.cardInfo.detail : this.detail;
  },
  methods: {
    setLayout() {
      this.$emit("setLayout", this.layout);
    },

    handleAccordion(index) {
      this.detail[index] = !this.detail[index];
    },

    onSlideChange() {
      this.detail.forEach((item, index) => {
        this.detail[index] = false;
      });
    },
  },
  mounted() {
    this.$emit("setLayout", this.layout);
  },
  components: { Swiper, SwiperSlide },
  props: {},
};
</script>
