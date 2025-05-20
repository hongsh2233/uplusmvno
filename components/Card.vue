<template>
  <div class="plan_item" v-if="cardInfo.type == 'ty01'">
    <div class="ranking" v-if="cardInfo.lanking">
      <strong>{{ cardInfo.lanking }}위</strong>
    </div>
    <div class="card_top">
      <div class="partner">
        <img src="/images/data/logo_partner06.png" alt="프리티" />
        <div class="star"><span class="blind">별점</span><span class="score">4.5</span></div>
      </div>
      <div class="beft">
        <!-- badge 로 교체 23/10/31 -->
        <span class="bag card ty01">U<sup>+</sup>인터넷결합</span>
        <span class="bag card ty02">알닷ONLY</span>
        <!-- //badge 로 교체 23/10/31 -->
        <!-- <img src="/images/component/img_flag01.png" alt="특가">
        <img src="/images/component/img_flag02.png" alt="알뜰폰닷컴 only"> -->
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
        <div class="month">
          월 10,890원
          <v-btn
            class="btn_tooltip btn-tooltip-price"
            :class="{ on: itemShow }"
            @click="toggleTooltipYear"
            >tooltip toggle</v-btn
          >
          <v-tooltip
            v-model="itemShow"
            :activator="'parent'"
            location="top right"
            offset="10"
            :open-on-hover="false"
            :no-click-animation="true"
            scroll-strategy="close"
            class="tooltip-default"
            contained
          >
            <div class="tooltip_content">
              <div class="tooltip-date-sale">
                <div class="tooltip-date-sale__item">
                  <h4>12개월 할인금액</h4>
                  <div class="amout">총 277,200원</div>
                </div>
                <div class="tooltip-date-sale__item">
                  <h4>기본금액</h4>
                  <div class="amout">총 739,200원</div>
                </div>
              </div>
            </div>
          </v-tooltip>
        </div>
        <span class="period">6개월 이후 38,900원</span>
      </div>
    </div>
    <v-tooltip
      v-model="tooltip[0]"
      :activator="`#${cardInfo.name}-1`"
      location="top"
      offset="0"
      scroll-strategy="close"
      :open-on-hover="false"
      no-click-animation
      contained
    >
      <div class="tooltip_content">데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요</div>
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
            <button type="button" :aria-expanded="detail" class="btn_acc" @click="detail = !detail">
              사은품 최대 <span>3</span>개
            </button>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
    <!-- 위치 이동 23/10/31 -->
    <Transition name="cardDetail">
      <div role="region" v-if="detail">
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
    <!-- //위치 이동 23/10/31 -->

    <!-- 결합하면 tooltip 삭제 23/10/31 -->
    <!-- <v-tooltip v-model="tooltip[1]" :activator="`#${cardInfo.name}-2`" location="top" offset="0" scroll-strategy="close" :open-on-hover="false" no-click-animation contained>
      <div class="tooltip_content">
        LG U+ 인터넷/IPTV 신규 가입 + 알뜰폰 결합 시, 최대 118만원의 혜택을 받을 수 있어요!
      </div>
    </v-tooltip> -->
    <!-- //결합하면 tooltip 삭제 23/10/31 -->

    <NuxtLink :to="{}" class="link_list">
      <span class="blind">요금제 상세페이지 이동</span>
    </NuxtLink>
  </div>

  <!-- for popup  -->
  <div class="plan_item" v-if="cardInfo.type == 'ty02'">
    <div class="card_top">
      <div class="partner">
        <img src="/images/data/logo_partner06.png" alt="프리티" />
        <div class="star"><span class="blind">별점</span><span class="score">4.5</span></div>
      </div>

      <!-- 추가 ; 23/11/23  -->
      <div class="beft">
        <span class="bag card ty01">U<sup>+</sup>인터넷결합</span>
        <span class="bag card ty02">알닷ONLY</span>
      </div>

      <div class="beft siz_l">
        <img
          src="/images/component/img_flag06.png"
          alt="알뜰폰닷컴추천"
          v-if="cardInfo.flag == 'recom'"
        />
        <img
          src="/images/component/img_flag05.png"
          alt="알뜰폰닷컴추천"
          v-else-if="cardInfo.flag == 'best'"
        />
      </div>
    </div>

    <div class="card_mid big_card">
      <div class="card_info">
        <strong class="plan_tit_sub">
          월 11GB + 매일 2GB + 3Mbps
          <v-btn
            :id="`${cardInfo.name}-1`"
            :ref="`${cardInfo.name}-1`"
            class="btn_tooltip"
            :class="{ on: tooltip[2] }"
            title="툴팁"
            @click="tooltip[2] = !tooltip[2]"
            >툴팁</v-btn
          >
        </strong>
        <div class="plan_info">
          <span class="phone"><span class="blind">통화량</span>100분</span>
          <span class="message"><span class="blind">문자량</span>100건</span>
          <span class="cellular"><span class="blind">통신기술</span>LTE</span>
        </div>
      </div>
      <div class="card_price">
        <p class="month">월 10,890원</p>
        <span class="period">6개월 이후 38,900원</span>
      </div>
    </div>
    <v-tooltip
      v-model="tooltip[2]"
      :activator="`#${cardInfo.name}-1`"
      location="top"
      offset="0"
      scroll-strategy="close"
      :open-on-hover="false"
      no-click-animation
      contained
    >
      <div class="tooltip_content">데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요</div>
    </v-tooltip>

    <div class="combi combi__select">
      <div class="card_bot">
        <!-- <div class="combi_inner">
          <strong>월 10,890원</strong>
          <span class="period">6개월 이후 38,900원</span>
        </div> -->
        <!-- '자세히보기' btn 삭제 23/10/31 -->
        <!-- <NuxtLink :to="{}" class="btn sm c02">자세히보기</NuxtLink> -->
        <!-- // '자세히보기' btn 삭제 23/10/31 -->

        <div class="choice">22,521명이 선택했어요</div>
      </div>
    </div>

    <NuxtLink :to="{}" class="link_list">
      <span class="blind">요금제 상세페이지 이동</span>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      badge: [false, false],
      flag: [false, false],
      tooltip: [false, false],
      detail: false,
      itemShow: false,
    };
  },
  mounted() {
    this.detail = this.cardInfo.detail ? this.cardInfo.detail : this.detail;
    // console.log(this.cardInfo);
  },
  methods: {
    toggleTooltipYear() {
      this.itemShow = !this.itemShow;
    },
  },
  props: {
    cardInfo: Object,
  },
};
</script>
