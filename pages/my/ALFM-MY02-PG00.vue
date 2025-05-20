<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <!-- eSIM 요금제 가입신청 시, 해당 영역 노출 (셀프개통 가능한 시간에만 활성화) -->
        <button type="button" class="line_btn_arrw">
          <strong class="fs16">eSIM 활성화 방법</strong>
        </button>

        <!-- 중간 section 삭제 ; 23/11/10  -->

        <!-- 내가 신청한 요금제 상세 (희망번호 선택이 필요한 경우) -->
        <button type="button" class="line_btn_arrw">
          <strong class="fs16">희망번호 선택하기</strong>
        </button>

        <!-- 중간 section 삭제 ; 23/11/10  -->

        <!-- 내가 신청한 요금제 상세 (USIM 정보 입력이 필요한 경우) -->
        <button type="button" class="line_btn_arrw">
          <strong class="fs16">USIM 정보 입력하기</strong>
        </button>
      </div>
      <!-- // section -->

      <div class="section">
        <h3 class="tit02">신청 정보</h3>

        <!-- 0621 .table_ty01 > .list_info_ty01 수정 -->
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
            <dd>유심</dd>
          </dl>
          <dl>
            <dt>신청상태</dt>
            <dd>가입신청완료</dd>
          </dl>
          <dl>
            <dt>신청일</dt>
            <dd>2022.10.03</dd>
          </dl>
          <dl>
            <dt>부가서비스</dt>
            <dd>발신자표시 제한(무료), 통화중 대기(무료)</dd>
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
                            <span>기간 할인 (7개월간)</span>
                            <strong>-10,000원</strong>
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

      <div class="section">
        <h3 class="tit02">유심 배송 정보</h3>
        <div class="list_info_ty01">
          <dl>
            <dt>택배사</dt>
            <dd>CJ택배</dd>
          </dl>
          <dl>
            <dt>송장번호</dt>
            <dd>
              <div class="gap_box">0000000000</div>
            </dd>
          </dl>
          <dl>
            <dt>송장번호조회</dt>
            <dd>
              <div class="gap_box">
                https://www.naver.com
                <NuxtLink :to="'https://www.naver.com'" target="_blank" class="btn xsm c07"
                  >자세히 보기</NuxtLink
                >
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <!-- // section -->

      <div class="section">
        <h3 class="tit02">가입자 정보</h3>

        <!-- 0621 .table_ty01 > .list_info_ty01 수정 -->
        <div class="list_info_ty01">
          <dl>
            <dt>고객유형</dt>
            <dd>내국인</dd>
          </dl>
          <dl>
            <dt>가입유형</dt>
            <dd>신규가입</dd>
          </dl>
          <dl>
            <dt>이름</dt>
            <dd>김*파</dd>
          </dl>
          <dl>
            <dt>생년월일</dt>
            <dd>1992.05.01</dd>
          </dl>
          <dl>
            <dt>휴대폰 번호</dt>
            <dd>010-12**-56**</dd>
          </dl>
          <dl>
            <dt>납부방법</dt>
            <dd>신용카드</dd>
          </dl>
          <dl>
            <dt>청구서 수령방법</dt>
            <dd>이메일 청구서</dd>
          </dl>
        </div>
      </div>
      <!-- // section -->

      <div class="section">
        <!-- 가입자가 미성년자일 경우 -->
        <h3 class="tit02">법정대리인 정보</h3>

        <!-- 0621 .table_ty01 > .list_info_ty01 수정 -->
        <div class="list_info_ty01">
          <dl>
            <dt>이름</dt>
            <dd>김*파</dd>
          </dl>
          <dl>
            <dt>생년월일</dt>
            <dd>1992.05.01</dd>
          </dl>
          <dl>
            <dt>휴대폰 번호</dt>
            <dd>010-12**-56**</dd>
          </dl>
        </div>

        <!-- 중간 section 삭제 ; 23/11/10  -->
      </div>
      <!-- // section -->

      <!-- 사전 인증 -->
      <div class="section">
        <h3 class="tit02">번호이동 가입 정보</h3>

        <AuthSelect
          :isAuthShow="isAuthShow"
          :handleOption="handleOption"
          @openAlert="this.$emit('openAlert', $event)"
        />
      </div>
      <!-- // 사전 인증 -->

      <!-- 사전 인증 후 정보 -->
      <div class="section">
        <AuthMyInfoPage />
      </div>
      <!-- // 사전 인증 후 정보 -->

      <div class="section">
        <div class="btn_group">
          <!-- 온라인신청 후 취소 가능한 경우 -->
          <button type="button" class="btn md c04">신청 취소하기</button>
        </div>
        <div class="btn_group">
          <button type="button" class="btn md c05">목록보기</button>
        </div>
        <div class="btn_group">
          <button
            type="button"
            class="btn md c01"
            disabled
            @click="this.$emit('openAlert', ['PR03PO19C', 'btn_PR03PO19C', 101])"
          >
            개통 신청하기
          </button>
        </div>
      </div>
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script>
import AuthSelect from "@/components/page/AuthSelect";
import AuthMyInfoPage from "@/components/page/AuthMyInfoPage";

export default {
  name: "ALFM-MY02-PG00",
  emits: ["setLayout", "openPopup", "openAlert"],
  data() {
    return {
      layout: { header: "sub", footer: "", floatMenu: "", title: "내가 신청한 요금제 상세" },
      acd: [],
      isAuthShow: false,
      handleOption: { value: "010-0000-0000", disabled: true, placeholder: "'-' 없이 숫자만 입력" },
    };
  },
  mounted() {
    this.$emit("setLayout", this.layout);
  },
  components: {
    AuthSelect,
    AuthMyInfoPage,
  },
};
</script>
