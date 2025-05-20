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
              <strong>{{ eventMock.eventTitle }}</strong>
              <div class="share_box">
                <span
                  ><span>{{ eventMock.startDay }}</span> - <span>{{ eventMock.endDay }}</span></span
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
            <!-- 특별요금제 이벤트 마크업 -->
            <div class="event-cont-specialh">
              <div class="section-specialh visual">
                <div class="section-specialh-roulette">
                  <img
                    src="https://api.uplusmvno.com/umah/fo/s3/getImage?filename=2025/4/4/specialh_visual.png"
                    alt=""
                    class="pc_show"
                  /><img
                    src="https://api.uplusmvno.com/umah/fo/s3/getImage?filename=2025/4/4/specialh_visual_m.png"
                    alt=""
                    class="pc_hide"
                  />

                  <div class="roulettebox">
                    <img
                      src="https://api.uplusmvno.com/umah/fo/s3/getImage?filename=2025/4/4/specialh_chr1.png"
                      alt=""
                      class="chr1"
                    />

                    <img
                      src="https://api.uplusmvno.com/umah/fo/s3/getImage?filename=2025/4/4/specialh_spin_rr.png"
                      alt=""
                      class="rr"
                    />
                    <img
                      src="https://api.uplusmvno.com/umah/fo/s3/getImage?filename=2025/4/4/specialh_spin_aldot.png"
                      alt=""
                      class="btn-rolutte"
                    />

                    <img
                      src="https://api.uplusmvno.com/umah/fo/s3/getImage?filename=2025/4/4/specialh_spin_layer.png"
                      alt=""
                      class="roulette"
                    />
                  </div>

                  <div class="popup-roulette">
                    <div class="inner">
                      <div class="cont">
                        <h2>당첨!!</h2>
                        <div class="image">
                          <img
                            src="https://api.uplusmvno.com/umah/fo/s3/getImage?filename=2025/4/4/specialh_winner.png"
                            alt="당첨 아이콘 이미지"
                          />
                        </div>
                        <div class="text">
                          <p class="title">최대 혜택!!<br />시크릿 요금제로 이동합니다!</p>
                          <p class="sbj">
                            가입신청을 진행하지 않으면 혜택 요금제는 사라질 수 있어요
                          </p>
                        </div>
                      </div>
                      <div class="pop-fot">
                        <a href="#" class="btn lg f01">
                          요금제 보러가기
                        </a>
                      </div>
                    </div>
                  </div>

                  <button type="button" class="btn1" onclick="handleRouletteClick()">
                    <span class="blind">특가 기획전 당첨 확인하기</span>
                  </button>
                </div>

                <div class="blind">
                  유의사항ㆍ이벤트 당첨확인은 아래에서 본인인증을 하신 이후 가능합니다.
                  이벤트에 당첨되신 경우 동일 이벤트의 재응모는 불가합니다.
                </div>
              </div>
            </div>
            <!--// 특별요금제 이벤트 마크업 -->
          </div>


        </div>
      </div>

      <div class="section">
        <h3 class="tit03">이벤트와 관련 있는 요금제에요</h3>

        <!-- big card 로 교체 ; 23/11/23 -->
        <!-- <SwiperCard :data="frontData.swiper.rateplan2" :option="{ type: 'rateplan' }" /> -->
        <!-- <div class="item_list ty02">
          <Card :cardInfo="{ type: 'ty01', name: 'plan01' }" />
          <Card :cardInfo="{ type: 'ty01', name: 'plan02' }" />
          <Card :cardInfo="{ type: 'ty01', name: 'plan03' }" />
          <div class="btn_wrap center">
            <button type="button" class="btn round more_d">더 볼래요</button>
          </div>
        </div> -->
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

      <!-- 25.05 이벤트 팝업 -->
      <Popup
        title="이용동의 및 본인인증 안내"
        :isOpen="popupOpen"
        @update:isOpen="popupOpen = $event"
        :confirmText = "'휴대폰 인증하기'"
        class="alert"
      >
        <div class = "consent-e-special">
          <p>이벤트 당첨 확인을 위해 이용 동의 후 본인 인증을 진행해 주세요</p>
          <div class="check-gray-box">
            <input type="checkbox" id="check1">
            <label for="check1">만 14세 이상이며, 개인정보 수집 및 이용에 동의합니다.</label>
          </div>
          <div class="pop_in_scroll">
            <div class="pop_txt left">고객 혜택 제공을 위한 개인정보 수집 및 이용 동의</div>
            <div class="table ty04">
              <table>
                <caption>고객혜택제공을 위한 개인정보 수집 및 이용 내역역</caption>
                <colgroup>
                  <col style="width:30%">
                  <col style="width:70%">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">수집항목</th>
                    <td class="left">이름, 이동통신 전화번호, 성별, 생년월일, 본인인증(휴대폰, 통신사) 정보</td>
                  </tr>
                  <tr>
                    <th scope="row">수집·이용목적</th>
                    <td class="left">
                      주식회사 엘지유플러스가 제공하는 다른 상품 서비스 간 개인정보의 결합 분석 및 이를 통한 개인맞춤 연계 서비스 제공.
                      주식회사 엘지 유플러스의 상품 서비스 혜택에 대한 개인 맞춤 추천, 정보 제공과 안내, 할인제도와 소개 가입의사 확인, 리텐션, 이벤트 안내 등 마케팅 신규 서비스 개발, 서비스 개선 고객 세분화, 선호도 라이프 스타일 사회적 관계 추정, 우량 등급 고객 선정 상기 목적을 위한 개인정보 분석
                    </td>
                  </tr>
                  <tr class="left">
                    <th scope="row">보유 및 이용기간</th>
                    <td>이벤트 종료일로부터 12개월</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pop_txt left">
              본인은 상기 내용과 같이 본인의 개인정보 수집 및 이용에 동의합니다.
              본 동의는 거부하실 수 있으나 미 동의 시 이벤트 참여가 불가능합니다.
            </div>
          </div>
        </div>
      </Popup>
      <!-- 25.05 이벤트 팝업 -->
    </div>
    <!-- // content -->

  </div>
  <!-- // container -->
</template>

<script setup>
import { defineEmits } from 'vue'

import SwiperCard from "@/components/SwiperCard";
import frontData from '@/assets/frontData.js'
import Popup from "@/components/v2/common/Popup";

const emit = defineEmits(['setLayout'])

const layout = ref({
  header: "sub",
  footer: front.isMobile() ? "none" : "",
  floatMenu: "none",
  title: "이벤트 상세",
  wrapClass: "",
});

const eventMock = ref({
    eventTitle: "무제한이 9천원대! 오직 알뜰폰닷컴에서만",
    startDay: "2023.02.02",
    endDay: "2023.03.28",
})


const popupOpen = ref(true)

const eventPop = () => {
  popupOpen.value = !popupOpen;
};

onMounted(async () => {
  emit("setLayout", layout);
});



</script>

<!-- 25.05 이벤트 팝업 스타일: start -->
<style scoped>
  .consent-e-special .check-gray-box {
    margin: 2.4rem 0;
    position: relative;
    padding: 1.6rem;
    background: #f8f8f8;
    border-radius: 1.2rem;
    text-align: left;
  }
  .consent-e-special .check-gray-box input {
    background: none;
    border: none;
    border-radius: 0;
    appearance: none;
    -webkit-appearance: none;
    position: absolute;
  }
  .consent-e-special .check-gray-box label {
    display: block;
    position: relative;
    padding-left: 2.8rem;
  }
  .consent-e-special .check-gray-box label::before{
    content: "";
    background: #fff no-repeat 50% / 1.3rem .9rem;
    background-image: url('data:image/svg+xml,<svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9397 1.06079C20.5255 0.475118 21.475 0.475042 22.0608 1.06079C22.6464 1.64655 22.6464 2.59613 22.0608 3.18188L9.18185 16.0608L9.06857 16.1633C8.47945 16.6441 7.61003 16.6099 7.06076 16.0608C7.0398 16.0398 7.02065 16.0172 7.00119 15.9954L6.93869 15.9387L1.06076 10.0608C0.475012 9.47504 0.475088 8.52549 1.06076 7.9397C1.64655 7.35391 2.59607 7.35391 3.18185 7.9397L8.12033 12.8782L19.9397 1.06079Z" fill="%23BBBBBB"/></svg>');
    border: .1rem solid #bbb;
    border-radius: .2rem;
    display: inline-block;
    height: 2rem;
    vertical-align: middle;
    width: 2rem;
    left: 0;
    margin-right: 0;
    margin-top: 0;
    position: absolute;
    top: 0;
  }

  .consent-e-special .check-gray-box > input:checked + label::before {
    border-color: #fc6969;
    background-color: #fc6969;
    background-image: url('data:image/svg+xml,<svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9397 1.06079C20.5255 0.475118 21.475 0.475042 22.0608 1.06079C22.6464 1.64655 22.6464 2.59613 22.0608 3.18188L9.18185 16.0608L9.06857 16.1633C8.47945 16.6441 7.61003 16.6099 7.06076 16.0608C7.0398 16.0398 7.02065 16.0172 7.00119 15.9954L6.93869 15.9387L1.06076 10.0608C0.475012 9.47504 0.475088 8.52549 1.06076 7.9397C1.64655 7.35391 2.59607 7.35391 3.18185 7.9397L8.12033 12.8782L19.9397 1.06079Z" fill="%23FFFFFF"/></svg>');
  }

  .consent-e-special .pop_in_scroll {
    max-height: 28vh;
    overflow-y: auto;
  }

  .consent-e-special .pop_txt {
    margin: 8px 0;
    font-size: 1.4rem;
  }
</style>
<!-- 25.05 이벤트 팝업 스타일: end -->


<!-- 이벤트 (어드민 등록) css -- start-->
<style scoped>
  .event-cont-specialh {
    position: relative;
    /* opacity: 0; */
    /* transition: opacity 0.5s; */
  }
  .event-cont-specialh.open {
    /* opacity: 1; */
  }

  .section-specialh {
    position: relative;
  }

  .section-specialh.visual .btn1 {
    position: absolute;
    top: 74.09%;
    left: 6.84%;
    width: 87.89%;
    height: 7.07%;
  }
  .section-specialh-roulette {
    position: relative;
  }
  .section-specialh.visual .chr1 {
    position: absolute;
    top: 56%;
    left: 67.5%;
    width: 28%;
    height: 14.4%;
    z-index: 3;
  }
  .pc .section-specialh.visual .chr1 {
    position: absolute;
    top: 57%;
    left: 61.5%;
    width: 174px;
    height: 213px;
    z-index: 3;
  }

  .section-specialh.visual .rr {
    position: absolute;
    top: 30.3%;
    left: 9%;
    width: 82%;
    height: 36.3%;
    z-index: 1;
  }
  .pc .section-specialh.visual .rr {
    position: absolute;
    top: 30.3%;
    left: 21.5%;
    width: 56.91%;
    height: 36.2%;
  }
  .section-specialh.visual .btn-rolutte {
    position: absolute;
    top: 44.3%;
    left: 39.74%;
    width: 20.2%;
    height: 8.6%;
    z-index: 2;
  }
  .pc .section-specialh.visual .btn-rolutte {
    position: absolute;
    top: 44%;
    left: 43.2%;
    width: 130px;
    height: 130px;
    z-index: 2;
  }
  .section-specialh.visual .roulette {
    position: absolute;
    top: 32.85%;
    left: 14%;
    width: 71.84%;
    height: 31.3%;
    z-index: 0;
  }
  .pc .section-specialh.visual .roulette {
    position: absolute;
    top: 31.85%;
    left: 24%;
    width: 485px;
    height: 485px;
    z-index: 0;
  }
  .popup-roulette {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 3;
    display: none;
  }
  .popup-roulette .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    max-width: 320px;
    background-color: #fff;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .inner .cont {
    padding: 40px 32px;
  }

  .popup-roulette .inner h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.5px;
  }
  .popup-roulette .inner .image {
    font-size: 24px;
    font-weight: bold;
    margin-top: 24px;
  }
  .popup-roulette .inner .image img {
    width: auto;
    max-width: 100%;
  }
  .popup-roulette .inner .text .title {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.5px;
    margin-top: 24px;
    word-break: keep-all;
  }
  .popup-roulette .inner .text .sbj {
    color: #66707a;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.5px;
    margin-top: 24px;
    word-break: keep-all;
  }

  .popup-roulette.open {
    display: block;
  }

  .popup-roulette .inner .pop-fot {
    border-top: 1px solid #EEE;
    padding: 14px 20px;
  }
  .popup-roulette .inner .pop-fot .btn.f01 {
    background-color: #E34140;
    border-color: #E34140;
    color: #fff;
    width: 100%;
  }

  /* 룰렛 애니메이션 */
  .spin-animation {
    animation: spin 3s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(1440deg);
    }
  }
</style>
<!-- 이벤트 (어드민 등록) css -- end-->