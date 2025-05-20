<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">주민번호 확인 시 미성년자, 외국인으로 구분된 경우</h3>
        <div class="btn_group">
          <button
            type="button"
            class="btn md c03"
            id="btn_CS03PO00A"
            @click="this.$emit('openAlert', ['CS03PO00A', 'CS03PO00A', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <h3 class="tit02">잘못된 이름, 또는 주민번호 입력 후 인증 요청하기를 선택한 경우</h3>
        <div class="btn_group">
          <button
            type="button"
            class="btn md c03"
            id="btn_CS03PO00B"
            @click="this.$emit('openAlert', ['CS03PO00B', 'CS03PO00B', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <h3 class="tit02">
          이름, 주민번호는 정상이나 잘못된 전화번호를 입력하고 인증 요청하기를 선택하여 인증
          수단에서 에러가 발생한 경우
        </h3>
        <div class="btn_group">
          <button
            type="button"
            class="btn md c03"
            id="btn_CS03PO00C"
            @click="this.$emit('openAlert', ['CS03PO00C', 'btn_CS03PO00C', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <h3 class="tit02">
          각 인증 수단으로 푸시 발송한 이후 인증이 완료되지 않았는데 [인증 확인하기]를 선택한 경우
        </h3>
        <div class="btn_group">
          <button
            type="button"
            class="btn md c03"
            id="btn_CS03PO00D"
            @click="this.$emit('openAlert', ['CS03PO00D', 'btn_CS03PO00D', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <h3 class="tit02">
          사용자가 각 인증수단 앱으로 접속하여 인증을 취소한 이후 [인증 확인하기]를 선택한 경우
        </h3>
        <div class="btn_group">
          <button
            type="button"
            class="btn md c03"
            id="btn_CS03PO00E"
            @click="this.$emit('openAlert', ['CS03PO00E', 'btn_CS03PO00E', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <h3 class="tit02">이미 완료/또는 실패된 인증 건에 대하여 [안증 확인하기]를 선택한 경우</h3>
        <div class="btn_group">
          <button
            type="button"
            class="btn md c03"
            id="btn_CS03PO00F"
            @click="this.$emit('openAlert', ['CS03PO00F', 'btn_CS03PO00F', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <h3 class="tit02">
          실패된 인증을 지속적으로 인증확인 시도하여 해당 인증으로는 더 이상 인증확인이 불가능할
          경우
        </h3>
        <div class="btn_group">
          <button
            type="button"
            class="btn md c03"
            id="btn_CS03PO00G"
            @click="this.$emit('openAlert', ['CS03PO00G', 'btn_CS03PO00G', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <h3 class="tit02">통신사 선택 내용이 유효하지 않은 경우</h3>
        <div class="btn_group">
          <button
            type="button"
            class="btn md c03"
            id="btn_CS03PO00H"
            @click="this.$emit('openAlert', ['CS03PO00H', 'btn_CS03PO00H', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <h3 class="tit02">입력한 정보가 유효하지 않은 USIM일 경우</h3>
        <div class="btn_group">
          <button
            type="button"
            class="btn md c03"
            id="btn_CS03PO00I"
            @click="this.$emit('openAlert', ['CS03PO00I', 'btn_CS03PO00I', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <h3 class="tit02">유심 변경 개통 신청 이후 알 수 없는 에러가 발생하는 경우</h3>
        <div class="btn_group">
          <button
            type="button"
            class="btn md c03"
            id="btn_CS03PO00J"
            @click="this.$emit('openAlert', ['CS03PO00J', 'btn_CS03PO00J', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <h3 class="tit02">
          고객 인증 값, CI로 가입자 대조 시 가입자 번호 등의 확인이 되지 않을 경우
        </h3>
        <div class="btn_group">
          <button
            type="button"
            class="btn md c03"
            id="btn_CS03PO00K"
            @click="this.$emit('openAlert', ['CS03PO00K', 'btn_CS03PO00K', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <h3 class="tit02">유심 변경 개통 신청</h3>
        <div class="btn_group">
          <button
            type="button"
            class="btn md c03"
            id="btn_CS03PO00L"
            @click="this.$emit('openAlert', ['CS03PO00L', 'btn_CS03PO00L', 101])"
          >
            Alert
          </button>
        </div>
      </div>

      <div class="section">
        <h3 class="tit02">유심 변경 개통 완료</h3>
        <div class="btn_group">
          <button
            type="button"
            class="btn md c03"
            id="btn_CS03PO00M"
            @click="this.$emit('openAlert', ['CS03PO00M', 'btn_CS03PO00M', 101])"
          >
            Alert
          </button>
        </div>
      </div>
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script>
export default {
  name: "ALFM-CS03-PO00",
  emits: ["setLayout", "openAlert"],
  data() {
    return {
      layout: {
        header: "sub",
        footer: "none",
        floatMenu: "none",
        title: "유심 교체 개통 공통 에러 케이스",
      },
    };
  },
  mounted() {
    this.$emit("setLayout", this.layout);
  },
};
</script>
