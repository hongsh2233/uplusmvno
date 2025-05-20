<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-00-000-4'" />
        <!-- // LNB -->

        <!-- contents -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>
          <!-- 내 정보 메뉴 -->
          <!-- <MyInfoMenu /> -->
          <!-- // 내 정보 메뉴 -->
          <div class="content-item">
            <div class="content-inner">
              <div class="cont-head title-main">
                <h3 class="cont-title-main">알닷 서비스 선택약관</h3>
              </div>

              <div class="btn-area col">
                <button class="btn-rounded btn-line" @click="handlePopup('freedom', true)">선택 약관 동의 - 정회원의 신규회선</button>
                <button class="btn-rounded btn-line" @click="handlePopup('freedom2', true)">선택 약관 동의 - 정회원에서 웹회원 전환 시 (해지, 번호이동 등)</button>
              </div>
            </div>
          </div>

        </div>
    
        <!--24.11.25 v0.98 팝업 추가 선택 약관 동의 - 정회원의 신규회선 -->
        <Popup
          title="알닷 서비스 선택 약관 동의"
          :isOpen="popState.freedom"
          :popType="'alert-v2'"
          :showCancelButton = true
          :cancelText = "'다음에'"
          :confirmText="'동의하고 시작'"
          @update:isOpen="popState.freedom = $event"
          @confirm="console.log('confirm')"
        >
          <div class="alert-subhead">
            <p class="tit">U<sup>+</sup>알뜰폰 회선이 <b class="txt-red">추가</b>되었어요</p>
            <span class="desc">아래 내용에 동의하시고 다양하고 <br/>유용한 알닷 혜택 정보를 받아보세요.</span>
          </div>
          <div class="cont-orange">
            <dl class="info-tbl">
                <dt>휴대폰 번호</dt>
                <dd>010-12**-34**</dd>
            </dl>
            <div class="form-box">
              <div class="title-area">
                <strong class="title">선택 동의</strong>
              </div>
              <div class="consent-checkbox" v-for="(data, idx) in popPersonalData" :key="idx">
                <input
                  type="checkbox"
                  class="blind"
                  name="chk_box"
                  :id="'chk_box_pop_'+idx"
                  v-model="data.consent"
                />
                <label :for="'chk_box_pop_'+idx"></label>
                <button type="button" class="btn-arrow" @click="popState.terms = true">
                  {{ data.title }}
                </button>
              </div>
            </div>
          </div>
        </Popup>
        <!--// 24.11.25 v0.98 팝업 추가 선택 약관 동의 - 정회원의 신규회선 -->
        
        <!--24.11.25 v0.98 팝업 추가 선택 약관 동의 - 정회원에서 웹회원 전환 시 -->
        <Popup
          title="알닷 회원정보 확인 및 약관 동의 안내"
          :isOpen="popState.freedom2"
          :popType="'alert-v2'"
          :showCancelButton = true
          :cancelText = "'다음에'"
          :confirmText="'내 정보 수정'"
          @update:isOpen="popState.freedom2 = $event"
          @confirm="console.log('confirm')"
        >
          <div class="alert-subhead">
            <p class="tit">알닷의 소중한 <b class="txt-red">회원</b>이시네요</p>
            <span class="desc">
              다양하고 유용한 혜택 정보를 받아보세요.
              휴대폰 번호 변경이 필요한 경우 ‘내 정보 수정’ 화면으로 이동하여 변경해 주세요.  
            </span>
          </div>
          <div class="cont-orange">
            <dl class="info-tbl">
                <dt>휴대폰 번호</dt>
                <dd>010-12**-34**</dd>
            </dl>
          </div>
        </Popup>
        <!--// 24.11.25 v0.98 팝업 추가 선택 약관 동의 - 정회원에서 웹회원 전환 시 -->
        
        <!-- 24.11.25 v0.98 약관 공통 팝업 예시 -->
        <Popup
          title="개인정보 제3자 제공 동의"
          :isOpen="popState.terms"
          :popType="'alert-gray'"
          @update:isOpen="popState.terms = $event"
          @confirm="console.log('confirm')"
        >
          <div class="policy-wrap">
            <h4 class="policy-tit">제1조 (목적)</h4>
            <div class="policy-cnts">
              <ul class="text-list bull">
                <li>본 약관은 주식회사 엘지유플러스(이하 "회사"라 한다.)에서 알뜰폰사업자인 파트너사와 전기통신서비스 도매제공 협정서 및 개인정보처리 위탁계약에 따라 제공하는 알닷 서비스를 이용함에 있어 회원과 회사간의 권리, 의무 및 책임사항, 서비스 이용조건 및 절차 등 기본적인 사항을 규정함을 목적으로 합니다.</li>
              </ul>
            </div>
            <h4 class="policy-tit">제2조 (용어의 정의)</h4>
            <div class="policy-cnts">
              <p class="policy-txt">1. 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
              <ol class="text-list">
                <li>(1) 상품: 알닷 내에서 거래의 대상이 되는 유무선 및 결합 서비스, 유심 등 알닷에서 판매되는 재화와 용역을 말합니다.</li>
                <li>(2) 이용자: 알닷에 접속하여 본 약관에 동의하고 알닷이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>
              </ol>
            </div>
          </div>
        </Popup>
        <!-- //24.11.25 v0.98 약관 공통 팝업 예시 -->
        <!-- // content -->
      </div>
    </div>
  </div>
  <!-- // container -->
</template>

<script setup>
  import PcLnb from "@/components/v2/common/PcLnb";
  import Popup from "@/components/v2/common/Popup";

  const emit = defineEmits(["setLayout"]);

  const layout = reactive({
    header: "sub",
    footer: "",
    title: "선택약관",
    floatMenu: "none",
  });

  const confirmActivate = ref(false)

  const confirmState = ref(false)
  const confirmAuth = () => {
  }

  // 알닷 서비스 선택약관 동의
  const selectValue = ref()
  const popPersonalData = ref([
    { title: "고객 혜택 제공을 위한 정보 수집 및 이용 동의", consent: false },
    { title: "고객 혜택 제공을 위한 개인정보 제3자 제공 동의", consent: false },
    { title: "혜택정보 · 광고수신 동의", consent: false },
  ])

  //팝업 목업
  const popState = ref({
    freedom: false, // 선택약관 동의
    freedom2: false, // 정회원에서 웹회원 전환 시
    terms: false,
  });

  const handlePopup = (popName, val) => {
    popState.value[popName] = val;
  }
  const clickConfirm = () => {
    console.log("확인");
  };

  onMounted(() => {
    emit("setLayout", layout);
  });
</script>
