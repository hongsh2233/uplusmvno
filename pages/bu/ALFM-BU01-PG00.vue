<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section full pdt0">
        <div class="dlvr_con dlvr_banner">
          <div class="inner">
            <div class="ani-delivery"><Lottie name="myBanner" /></div>

            <!-- pc image 추가 및 class 추가 23/11/24 -->
            <img
              src="/images/content/img_banner_diect_delivery.png"
              class="pc_hide"
              alt="원칩 지금배송 국내 최초! 모두의 유심, 원칩 지금배송으로 2시간 만에 내손안에! 주문 가능 시간 매일 10:00 ~ 22:00"
            />
            <img
              src="/images/content/img_banner_diect_delivery_pc.png"
              class="pc_show"
              alt="원칩 지금배송 국내 최초! 모두의 유심, 원칩 지금배송으로 2시간 만에 내손안에!주문 가능 시간 매일 10:00 ~ 22:00"
            />

            <div class="btn_group">
              <NuxtLink :to="{}" class="btn lg c01">지금배송 원칩 구매하기</NuxtLink>
            </div>
          </div>

          <div class="banner">
            <button type="button" class="banner__btn" @click="handleScrollIntoView('stage2')">
              <span class="blind">지금 배송이란 바로가기</span>
            </button>
            <button type="button" class="banner__btn" @click="handleScrollIntoView('stage1')">
              <span class="blind">추가 혜택 더 보기</span>
            </button>

            <img
              src="/images/content/img_banner_scroll_pc.png"
              class="pc_show"
              alt="원칩 지금배송 국내 최초! 모두의 유심, 원칩 지금배송으로 2시간 만에 내손안에! 주문 가능 시간 매일 10:00 ~ 22:00"
            />
            <img
              src="/images/content/img_banner_scroll.png"
              class="pc_hide"
              alt="원칩 지금배송 국내 최초! 모두의 유심, 원칩 지금배송으로 2시간 만에 내손안에! 주문 가능 시간 매일 10:00 ~ 22:00"
            />
            <div class="blind">
              <ul>
                <li>
                  <p>배송비 무료!</p>
                  <p>8,800원 NFC유심 비용만 내면 퀵 배송 비용은 모료로 지원해 드립니다.</p>
                </li>
                <li>
                  <p>추가 혜택 더!</p>
                  <p>
                    지금배송으로 받은 유심으로 알닷에서 셀프개통까지 완료하면 스타벅스
                    아메리카노까지 추가 증정해드립니다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="dlvr_con delivery_info" ref="stage2">
          <strong class="dlvr_tit baro">
            <span class="tit"
              ><img src="/images/content/tit_direct_delivery.png" alt="지금배송" />이란</span
            >
          </strong>
          <span class="dlvr_tit_description"
            >사이트에서 결재하는 순간부터
            <strong class="point">2시간 이내로 <br />'원칩'유심을 고객님께 배송</strong>해 드리는
            서비스에요</span
          >
          <div class="dlvr_img">
            <Lottie name="deliveryMean" />
          </div>

          <!-- 지금배송 step -->
          <div class="dlvr_step">
            <ol>
              <li>
                <strong class="step">01</strong>
                <strong class="desc"
                  >모두의 유심<br />
                  원칩 주문</strong
                >
                <div class="img_area">
                  <img src="/images/content/img_direct_delivery01.png" alt="" />
                </div>
              </li>
              <li>
                <strong class="step">02</strong>
                <strong class="desc">지금 배송 <br />출발!</strong>
                <div class="img_area">
                  <img src="/images/content/img_direct_delivery02.png" alt="" />
                </div>
              </li>
              <li>
                <strong class="step">03</strong>
                <strong class="desc"
                  >2시간 이내 <br />
                  원칩 도착!</strong
                >
                <div class="img_area">
                  <img src="/images/content/img_direct_delivery03.png" alt="" />
                </div>
              </li>
            </ol>
          </div>
          <!-- //지금배송 step -->

          <div class="dlvr_step_info">
            <dl>
              <dt><strong>배송가능일</strong></dt>
              <dd>매일 (연중무휴)</dd>
            </dl>
            <dl>
              <dt><strong>주문가능시간</strong></dt>
              <dd>10:00 ~ 22:00 (무료배송)</dd>
            </dl>
            <dl>
              <dt><strong>서비스지역</strong></dt>
              <dd>서울, 수도권 및 광역시, 제주도</dd>
            </dl>
          </div>
          <ul class="text_list bull">
            <li>일부 지역은 서비스가 제외되오니 지금배송이 가능한 지역을 꼭 확인하세요.</li>
            <li>배송 시간은 배송물량 급증, 도로/배송업체 사정 등으로 지연될 수 있습니다.</li>
          </ul>

          <div class="btn_group">
            <NuxtLink :to="{}" class="btn lg c01">지금배송 원칩 구매하기</NuxtLink>
          </div>
        </div>

        <div class="dlvr_con youtube_delivery" ref="stage1">
          <div class="thum_item youtube_thum">
            <div class="thum_img">
              <iframe
                src="https://www.youtube.com/embed/tNt854Xv97s?si=LOEqgxkk2eDUQqxW"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="event">
              <img
                src="/images/content/event_delivery_august.jpg"
                class="pc_show"
                alt="하단 참조"
              />
              <img
                src="/images/content/event_delivery_august_m.jpg"
                class="pc_hide"
                alt="하단 참조"
              />

              <NuxtLink
                to="https://www.uplusmvno.com/benefit/event/detail?mvnopEvetId=EV0000002063"
                target="_blank"
                class="btn_link"
                data-gtm-event-name="link_click"
                data-gtm-event-category="클릭"
                data-gtm-event-action="이벤트 상세 - 링크 클릭"
                data-gtm-event-label="컨텐츠 : 이달의 혜택 보러가기"
                data-gtm-click-url="https://www.uplusmvno.com/benefit/event/detail?mvnopEvetId=EV0000002063"
                data-gtm-click-location="이벤트 상세"
                data-gtm-click-direction="내부"
                data-gtm-click-text="이달의 혜택 보러가기"
              >
                <span class="blind">이달의 혜택 보러가기</span>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="dlvr_con">
          <div class="delivery-teutorial">
            <strong class="dlvr_tit baro">
              <span class="tit">무엇을 배송하나요?</span>
            </strong>
            <div class="flex">
              <div class="flex_left">
                <p class="sub">모두의 유심, <strong class="point">원칩</strong></p>
                <p class="description">
                  U<sup>+</sup>망을 사용하는 모든 알뜰폰 요금제를<br />
                  개통할 수 있는 <strong class="point">국내최초 통합 공용 유심</strong>이에요
                </p>
              </div>
              <div class="flex_right">
                <p class="img_area">
                  <img
                    src="/images/content/img_char_one_chip.png"
                    alt="원칩 이미지"
                    class="pc_hide"
                  />
                  <img
                    src="/images/content/img_char_one_chip_pc.png"
                    alt="원칩 이미지"
                    class="pc_show"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="dlvr_con">
          <strong class="dlvr_tit baro">
            <span class="tit">지금 배송 신청 방법</span>
          </strong>
          <span class="dlvr_tit_description"
            >원칩 지금배송으로 유심칩만 간편하게 구입하고<br />
            원하는 시간에 가입할 수 있어요!</span
          >

          <!-- 개통하기 step -->
          <div class="usim_open">
            <ol>
              <li>
                <div class="step-img">
                  <img
                    src="/images/content/img_step1_info.png"
                    alt="배송정보 step1"
                    class="pc_hide"
                  />
                  <img
                    src="/images/content/img_step1_info_pc.png"
                    alt="배송정보 step1"
                    class="pc_show"
                  />
                  <div class="blind">
                    <strong class="step">STEP 1</strong>
                    <h3 class="tit02">수령인 정보 입력</h3>
                    <p class="sub">
                      원칩 유심을 배송받을 수령인 정보를 입력해 보세요.<br />수령인 정보로 라이더가
                      전화를 드립니다.
                    </p>
                    <dl>
                      <dt>수령인</dt>
                      <dt>김알닷</dt>
                      <dt>휴대폰 번호</dt>
                      <dt>010-0000-0000 인증번호받기</dt>
                      <dt>인증번호 넣기</dt>
                    </dl>
                    <p>휴대폰으로 전송된 인증번호를 3분안에 입력해 주세요.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="step-img">
                  <img
                    src="/images/content/img_step2_info.png"
                    alt="배송정보 step2"
                    class="pc_hide"
                  />
                  <img
                    src="/images/content/img_step2_info_pc.png"
                    alt="배송정보 step2"
                    class="pc_show"
                  />
                  <div class="blind">
                    <strong class="step">STEP 2</strong>
                    <h3 class="tit02">주소지 가능 여부 확인</h3>
                    <p class="sub">
                      원칩 유심을 배송받을 수령인 정보를 입력해 보세요.<br />수령인 정보로 라이더가
                      전화를 드립니다.
                    </p>
                    <p>배송정보를 입력해주세요.</p>
                    <p>지금 배송 주문가능 지역인지 확인하세요.</p>
                    <p>우편번호 찾기</p>
                    <p>배송받을 도로명 주소를 입력해 주세요.</p>
                    <h3>우편번호 검색</h3>
                    <p>예시 한강대로 32</p>
                    <p>검색결과 총 N건</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="step-img">
                  <img
                    src="/images/content/img_step3_info.png"
                    alt="배송정보 step3"
                    class="pc_hide"
                  />
                  <img
                    src="/images/content/img_step3_info_pc.png"
                    alt="배송정보 step3"
                    class="pc_show"
                  />
                  <NuxtLink
                    to="https://www.uplusmvno.com/purchase/pickup"
                    target="_blank"
                    class="btn-emart"
                    ><span class="blind">이마트24 편의점 픽업 바로가기</span></NuxtLink
                  >

                  <div class="blind">
                    <strong class="step">STEP 3-1</strong>
                    <h3 class="tit02">주소지 가능할 경우, 결재 진행</h3>
                    <p class="sub">
                      지금 배송 신청이 가능한 경우, 결재를 하면 2시간 이내에 유심을 받아볼 수
                      있습니다. 유심 수령 후 진행 중이던 셀프개통에 유심 번호를 입력하시면 개통을
                      완료하실 수 있습니다.
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
          <!-- //개통하기 step -->
        </div>
        <div class="dlvr_con ty02">
          <strong class="dlvr_tit baro"
            ><span class="tip"
              >유심 배송을<br class="pc_hide" />
              기다리기 귀찮다면?<br />
              eSIM으로 개통해 보세요.</span
            ></strong
          >
          <p class="dlvr_tit_sub">eSIM이 필요한 순간!</p>
          <span class="dlvr_tit_description"
            >eSim이 지원되는 단말기일 경우,<br class="pc_hide" />
            유심을 기다리지 않고도 셀프개통이 가능합니다.<br />
            eSim을 다운받아서 간편하게 개통해 보세요</span
          >

          <div class="speech_wrap">
            <!-- <div> -->
            <p class="speech bg01">
              <strong>한 개의 휴대폰, 두 개의 번호!</strong>
              <span>개인용/업무용 번호를 구분하고 싶을때</span>
            </p>
            <!-- </div>
            <div class="right"> -->
            <p class="speech bg02">
              <strong>안심할 수 없는, 개인정보 보호!</strong>
              <span>나만의 안심 번호를 사용하고 싶을때</span>
            </p>
            <!-- </div> -->
          </div>
          <div class="dlvr_btn_wrap">
            <button type="button" class="btn_dlvr">eSIM 가능 핸드폰 모델 확인하기</button>
            <button type="button" class="btn_dlvr">eSIM 활성화 방법</button>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="dlvr_con">
          <div class="tit_wrap">
            <h3 class="tit03">놓치면 후회하는 <br />오직 알뜰폰닷컴만의 요금제</h3>
            <NuxtLink to="javascript:void(0);" class="more bottom">더보기</NuxtLink>
          </div>
        </div>
        <SwiperCard :data="frontData.swiper.rateplan3" :option="{ type: 'rateplan' }" />
      </div>
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script>
import SwiperCard from "@/components/SwiperCard";

export default {
  name: "ALFM-BU01-PG00",
  emits: ["setLayout", "openPopup"],
  data() {
    return {
      layout: { header: "sub", footer: "", floatMenu: "", title: "지금배송" },
    };
  },
  mounted() {
    this.$emit("setLayout", this.layout);
  },
  methods: {
    handleScrollIntoView(v) {
      switch (v) {
        case "stage1":
          this.$refs.stage1.scrollIntoView({ behavior: "smooth" });
          break;
        case "stage2":
          this.$refs.stage2.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          return;
      }
    },
  },
  components: {
    SwiperCard,
  },
  props: {
    frontData: Object, // @/assets/frontData.js
  },
};
</script>
