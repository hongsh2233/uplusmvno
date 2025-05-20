<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{ type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">완료전에 최종으로 <br />확인해 주세요</div>

      <div class="section">
        <h3 class="tit02">신청 정보</h3>
        <div class="list_info_ty01">
          <dl>
            <dt>사업자</dt>
            <dd>프리티</dd>
          </dl>
          <dl>
            <dt>신청한 요금제</dt>
            <dd>
              <div class="gap_box">
                5G 더빠른 180GB+
                <button type="button" class="btn xsm c07">자세히 보기</button>
              </div>
            </dd>
          </dl>
          <dl>
            <dt>유심/eSIM</dt>
            <dd>USIM</dd>
          </dl>
          <dl>
            <dt>신청상태</dt>
            <dd>온라인신청완료</dd>
          </dl>
          <dl>
            <dt>신청일</dt>
            <dd>2022.10.03</dd>
          </dl>
          <dl>
            <dt>부가서비스</dt>
            <dd>
              <ul>
                <li>네트워크 차단(무료)</li>
                <li>자녀폰 지킴이(무료)</li>
              </ul>
            </dd>
          </dl>
          <dl class="wid_full">
            <dt>
              <v-expansion-panels class="acd_wrap" v-model="acd">
                <v-expansion-panel class="acd_item">
                  <div class="acd_title">
                    <v-expansion-panel-title>
                      <div class="charge_info">
                        <span class="">월통신요금</span>
                        <strong><span class="fc01">51,700</span>원</strong>
                      </div>
                    </v-expansion-panel-title>
                  </div>
                  <div class="acd_panel">
                    <v-expansion-panel-text>
                      <div class="panel_inner_list">
                        <ul>
                          <li>
                            <span>5G 더빠른 180G+</span>
                            <span>77,000원</span>
                          </li>
                          <li>
                            <span>프로모션 할인</span>
                            <strong>-20,300원</strong>
                          </li>
                          <li>
                            <span>Kb국민카드 이벤트 할인</span>
                            <strong>-5,000원</strong>
                          </li>
                        </ul>
                      </div>
                    </v-expansion-panel-text>
                  </div>
                </v-expansion-panel>
              </v-expansion-panels>
            </dt>
          </dl>
          <p class="notice-txt mgt8">
            통신사 가격정책에 따라, 신청당시 요금제와<br class="pc_hide" />
            개통당시 요금제가 달라질 수 있어요.
          </p>
        </div>
      </div>
      <!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c02" v-bind:disabled="prev == false">
                이전으로
              </button>
              <button type="button" class="btn lg c01">신청완료</button>
            </div>
          </div>
        </div>
      </div>
      <!-- // bottom_float -->
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script>
export default {
  name: "ALFM-PR03-PG18-1",
  emits: ["setLayout"],
  data() {
    return {
      layout: { header: "sub2", footer: "none", floatMenu: "none", title: "가입신청 정보 확인" },
      acd: [],
      prev: true,
    };
  },
  mounted() {
    this.$emit("setLayout", this.layout);
  },
};
</script>
