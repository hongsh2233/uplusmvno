<template>
  <div class="section section-rate-visual">
    <div class="card">
      <div class="hash">
        <div class="badge">
          <button type="button" class="btn-like" ref="likeRef" @click="handleLiked">
            <span class="blind">찜하기</span>436
          </button>
          <span class="pricing">후불요금제</span>
        </div>
        <div class="beft">
          <span class="bag card ty01">U<sup>+</sup>인터넷결합</span>
          <span class="bag card ty02">알닷ONLY</span>
        </div>
      </div>

      <div class="inner">
        <div class="icon-info">
          <img
            src="/images/content/img_data_category1.png"
            alt="핸드폰과 헤드폰에서 음악이 나오는 이미지"
          />
        </div>
        <div class="detail-info">
          <p class="tit"><strong>15GB</strong> 요금제</p>
          <ul class="text-list bull">
            <li>출퇴근길에 음악을 듣는 분들께 추천 드려요.</li>
            <li>데이터를 다 사용해도 3G 속도로 이용이 가능한 요금제예요.</li>
          </ul>
          <div class="detail-info__list">
            <div class="separator">
              <div class="phone">300분</div>
              <div class="message">500건</div>
              <div class="cellular">LTE</div>
            </div>
          </div>
        </div>
        <div class="cost-info">
          <p class="month-cost">
            <span class="badge">최저가</span>
            월 <strong class="number">12,900</strong>원
          </p>
          <p class="term-cost">6개월 이후 29,000원</p>

          <div class="sale-price">
            <span class="badge"><em>24개월 할인 특가</em></span>
            <span class="total-price"> 총 <strong>480,000</strong>원 할인</span>
            <div class="tooltip">
              <v-btn
                :id="`a-1`"
                :ref="`a-1`"
                class="btn_tooltip reverse"
                :class="{ on: tooltip }"
                title="툴팁"
                @click="tooltip = !tooltip"
                >툴팁</v-btn
              >
              <v-tooltip
                v-model="tooltip"
                :activator="'parent'"
                location="top left"
                :offset="front.isMobile() ? '5 240' : '6 320'"
                scroll-strategy="close"
                :open-on-hover="false"
                no-click-animation
                contained
                class="tooltip-default"
              >
                <div class="tooltip_content">
                  <dl class="tooltip-sale">
                    <div>
                      <dt>할인 이후 금액</dt>
                      <dd>월 36,980원</dd>
                    </div>
                    <div>
                      <dt>할인 가입 금액</dt>
                      <dd>월 12,980원</dd>
                    </div>
                    <div>
                      <dt>할인가</dt>
                      <dd>월 24,000원</dd>
                    </div>
                    <div>
                      <dt>24개월 할인가</dt>
                      <dd>480,000원</dd>
                    </div>
                  </dl>
                </div>
              </v-tooltip>
            </div>
          </div>

          <div class="btn_group">
            <button type="button" v-if="!terminatedPlans" class="btn" disabled>가입하기</button>
            <p v-else class="txt-end-plans">종료된 요금제입니다.</p>
          </div>

          <p class="share-text">
            <button
              type="button"
              class="btn_share_text"
              data-gtm-event-name="share_click"
              data-gtm-event-category="컨텐츠"
              data-gtm-event-action="요금제 요약 - 공유하기 클릭"
              data-gtm-event-label="컨텐츠 : 공유하기 공유하기 클릭"
              data-gtm-click-location="요금제 요약"
              data-gtm-click-text="공유하기"
              id="btn_share_text"
              @click="clickShare"
            >
              공유하기
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// HOOK
const emit = defineEmits(["openAlert"]);

// 좋아요
const likeRef = ref(null);
const isLiked = ref(false);

function handleLiked() {
  isLiked.value = !isLiked.value;
  cssLike();
}

function cssLike() {
  isLiked.value ? likeRef.value.classList.add("active") : likeRef.value.classList.remove("active");
}

function clickShare(e) {
  emit("openAlert");
}

// 툴팁
const tooltip = ref(false);

const terminatedPlans = ref(false);
</script>
