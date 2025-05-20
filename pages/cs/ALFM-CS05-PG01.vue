<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <div class="box_gray">
          <h4 class="tit04">문의 전 아래 내용을 확인해 주세요</h4>
          <ul class="text_list bull">
            <li>
              셀프개통 가능한 시간을 확인해 주세요.<br />
              번호이동 : 오전 10시 ~ 오후 8시<br class="pc_hide" />(일요일, 신정/설/ 추석 당일
              제외)<br />
              신규가입 : 오전 8시 ~ 오후 10시(공휴일도 가능)
            </li>
            <li>
              아래 문의에 대해서는 개통한 파트너사로 문의하시면 보다 신속하게 답변 받으실 수 있어요.
              <ol class="mgt4">
                <li>① 요금제 해지</li>
                <li>② 부가서비스 신청/해지</li>
                <li>③ eSIM 재발급</li>
                <li>④ 원칩(K3620/K3630/U8680) 제외 모델 USIM 문의</li>
              </ol>
            </li>
          </ul>

          <h4 class="tit04 mgt20">
            <NuxtLink
              to="https://www.uplusmvno.com/partners"
              data-gtm-event-name="link_click"
              data-gtm-event-category="클릭"
              data-gtm-event-action="이벤트 상세 - 링크 클릭"
              data-gtm-event-label="컨텐츠 : 파트너사 연락처 보러가기"
              data-gtm-click-url="https://www.uplusmvno.com/partners"
              data-gtm-click-location="이벤트 상세"
              data-gtm-click-direction="내부"
              data-gtm-click-text="파트너사 연락처 보러가기"
              >파트너사 연락처 보러가기 &gt;</NuxtLink
            >
          </h4>
          <ul class="text_list bull">
            <li>
              문의가 많은 경우 일시적으로 답변이 지연될 수 있습니다. (답변 가능시간 : 평일 오전 9시
              ~ 오후 5시)
            </li>
          </ul>
        </div>
      </div>
      <!-- // section -->

      <div class="section ty02">
        <div class="page_info">문의 내용을 작성해 주세요</div>

        <div class="form_group">
          <strong class="form_label">문의유형</strong>
          <div class="form_item">
            <button
              type="button"
              class="btn_select"
              ref="btn_inquiryType"
              @click="$refs.inquiryType.open"
            >
              문의유형 선택
            </button>
          </div>
          <PopupSelect
            ref="inquiryType"
            :option="{
              data: 'inquiryType',
              popupTitle: '문의유형 선택',
              targetBtn: 'btn_inquiryType',
            }"
            @selectItem="console.log($event)"
          />
        </div>

        <div class="form_group">
          <strong class="form_label">제목</strong>
          <div class="form_item">
            <InputBox
              :option="{ placeholder: '제목을 입력해주세요' }"
              @inputValue="console.log($event)"
            />
          </div>
          <div class="error">제목을 입력해 주세요</div>
        </div>

        <div class="form_group">
          <strong class="form_label">내용</strong>
          <div class="form_item">
            <TextareaBox
              :data="{
                type: 'ty01',
                placeholder: '문의 내용을 입력해 주세요',
                maxlength: 1000,
                byteCheck: true,
              }"
              @textareaValue="console.log($event)"
              @textareaSubmit="console.log($event)"
            />
          </div>
          <div class="error">내용을 입력해 주세요</div>
        </div>

        <div class="form_group">
          <strong class="form_label">이메일</strong>
          <div class="form_item">
            <InputBox :option="{ placeholder: '아이디' }" @inputValue="console.log($event)" />
            <span class="mark_div">@</span>
            <InputBox
              :option="{ placeholder: '도메인' }"
              @inputValue="console.log($event)"
              ref="emailSelfInput"
              v-if="emailSelfInput"
            />
            <InputBox
              :option="{ value: emailSelectDomain, placeholder: '도메인', disabled: true }"
              @inputValue="console.log($event)"
              ref="domain"
              v-else
            />
          </div>
          <div class="error"></div>
          <div class="form_item">
            <button type="button" class="btn_select" ref="btn_email" @click="$refs.email.open">
              직접입력
            </button>
          </div>
          <PopupSelect
            ref="email"
            :option="{ data: 'email', popupTitle: '도메인 선택', targetBtn: 'btn_email' }"
            @selectItem="selectDomain($event)"
          />
        </div>

        <div class="form_group">
          <div class="box_gray">
            <ul class="text_list bull">
              <li>
                입력하신 이메일 주소로 문의에 대한 답변을 보내 드리고 있으니, 정확히 입력해 주세요.
              </li>
            </ul>
          </div>
        </div>

        <div class="btn_group">
          <button type="button" class="btn lg c01" disabled>문의 등록하기</button>
        </div>
      </div>
      <!-- // section -->
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script>
import PopupSelect from "@/components/PopupSelect";
import TextareaBox from "@/components/TextareaBox";
import InputBox from "@/components/InputBox";

export default {
  name: "ALFM-CS05-PG01",
  emits: ["setLayout", "openPopup"],
  data() {
    return {
      layout: { header: "sub", footer: "", floatMenu: "", title: "1:1 문의하기" },

      emailSelfInput: true, // 이메일 도메인 => 직접입력
      emailSelectDomain: "",
    };
  },
  methods: {
    selectDomain($event) {
      this.emailSelfInput = $event.value == 0 ? true : false;
      this.emailSelectDomain = $event.title;
      if (this.emailSelfInput) {
        setTimeout(() => {
          this.$refs.emailSelfInput.$refs.input.focus();
        }, 10);
      }
    },
  },
  mounted() {
    this.$emit("setLayout", this.layout);
  },
  components: {
    PopupSelect,
    TextareaBox,
    InputBox,
  },
  props: {
    frontData: Object, // @/assets/frontData.js
  },
};
</script>
