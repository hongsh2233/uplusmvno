<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav blind">{{ layout.title }}</h2>

      <div class="section error_area">
        <div class="ttl">
          <h2>서비스에<br />접속할 수 없습니다</h2>
          <p>
            기술적인 문제로 인해 일시적으로 접속되지 않았습니다.<br />
            잠시 후 다시 이용 부탁 드리며<br />
            이용에 불편을 드려 죄송합니다.
          </p>
        </div>

        <div class="ttl-info">
          <h2>브라우저의 쿠키 및 캐시 삭제 안내</h2>
          <p class="sub">
            특정한 화면에서 접속 오류가 자주 발생하는 경우<br />
            <strong class="point"
              >사용하시는 브라우저의 쿠키 및 캐시를 삭제 하시면<br class="pc_hide" />
              서비스의 원할한 사용이 가능할 수 있습니다.</strong
            >
          </p>
          <p class="tip">아래의 안내에 따라 쿠키 및 캐시 파일 삭제를 진행해 주세요.</p>
        </div>

        <ul class="ttl-browser">
          <li class="chrome">
            <NuxtLink
              to="https://support.google.com/accounts/answer/32050?hl=ko&ref_topic=7189049&sjid=17807844541411150267-AP"
              target="_blank"
              data-gtm-event-name="link_click"
              data-gtm-event-category="클릭"
              data-gtm-event-action="서비스 접속오류 - 링크 클릭"
              data-gtm-event-label="컨텐츠 : 크롬 캐시 삭제하기 안내"
              data-gtm-click-url="https://support.google.com/accounts/answer/32050?hl=ko&ref_topic=7189049&sjid=17807844541411150267-AP"
              data-gtm-click-location="서비스 접속오류"
              data-gtm-click-direction="외부"
              data-gtm-click-text="크롬 캐시 삭제하기 안내"
              ><strong>크롬 캐시 삭제</strong> (PC/안드로이드/iOS)</NuxtLink
            >
          </li>
          <li class="safari">
            <strong>사파리 캐시 삭제</strong>
            <ul class="safari-browser">
              <li class="iphone">
                <NuxtLink
                  to="https://support.apple.com/ko-kr/guide/iphone/iphacc5f0202/ios"
                  target="_blank"
                  data-gtm-event-name="link_click"
                  data-gtm-event-category="클릭"
                  data-gtm-event-action="서비스 접속오류 - 링크 클릭"
                  data-gtm-event-label="컨텐츠 : 아이폰 사파리 캐시 삭제하기 안내"
                  data-gtm-click-url="https://support.apple.com/ko-kr/guide/iphone/iphacc5f0202/ios"
                  data-gtm-click-location="서비스 접속오류"
                  data-gtm-click-direction="외부"
                  data-gtm-click-text="아이폰 사파리 캐시 삭제하기 안내"
                  >아이폰</NuxtLink
                >
              </li>
              <li class="ipad">
                <NuxtLink
                  to="https://support.apple.com/ko-kr/guide/ipad/ipad0bb843d8/15.0/ipados/15.0"
                  target="_blank"
                  data-gtm-event-name="link_click"
                  data-gtm-event-category="클릭"
                  data-gtm-event-action="서비스 접속오류 - 링크 클릭"
                  data-gtm-event-label="컨텐츠 : 아이패드 사파리 캐시 삭제하기 안내"
                  data-gtm-click-url="https://support.apple.com/ko-kr/guide/ipad/ipad0bb843d8/15.0/ipados/15.0"
                  data-gtm-click-location="서비스 접속오류"
                  data-gtm-click-direction="외부"
                  data-gtm-click-text="아이패드 사파리 캐시 삭제하기 안내"
                  >아이패드</NuxtLink
                >
              </li>
              <li class="mac">
                <NuxtLink
                  to="https://support.apple.com/ko-kr/guide/safari/sfri11471/mac"
                  target="_blank"
                  data-gtm-event-name="link_click"
                  data-gtm-event-category="클릭"
                  data-gtm-event-action="서비스 접속오류 - 링크 클릭"
                  data-gtm-event-label="컨텐츠 : Mac PC 사파리 캐시 삭제하기 안내"
                  data-gtm-click-url="https://support.apple.com/ko-kr/guide/safari/sfri11471/mac"
                  data-gtm-click-location="서비스 접속오류"
                  data-gtm-click-direction="외부"
                  data-gtm-click-text="Mac PC 사파리 캐시 삭제하기 안내"
                  >Mac PC</NuxtLink
                >
              </li>
            </ul>
          </li>
          <li class="edge">
            <NuxtLink
              to="https://support.microsoft.com/ko-kr/microsoft-edge/microsoft-edge%EC%97%90%EC%84%9C-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EA%B8%B0%EB%A1%9D-%EB%B3%B4%EA%B8%B0-%EB%B0%8F-%EC%82%AD%EC%A0%9C%ED%95%98%EA%B8%B0-00cf7943-a9e1-975a-a33d-ac10ce454ca4"
              target="_blank"
              data-gtm-event-name="link_click"
              data-gtm-event-category="클릭"
              data-gtm-event-action="서비스 접속오류 - 링크 클릭"
              data-gtm-event-label="컨텐츠 : EDGE 캐시 삭제하기 안내"
              data-gtm-click-url="https://support.microsoft.com/ko-kr/microsoft-edge/microsoft-edge%EC%97%90%EC%84%9C-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EA%B8%B0%EB%A1%9D-%EB%B3%B4%EA%B8%B0-%EB%B0%8F-%EC%82%AD%EC%A0%9C%ED%95%98%EA%B8%B0-00cf7943-a9e1-975a-a33d-ac10ce454ca4"
              data-gtm-click-location="서비스 접속오류"
              data-gtm-click-direction="외부"
              data-gtm-click-text="EDGE 캐시 삭제하기 안내"
              ><strong>EDGE 캐시 삭제</strong> (PC)</NuxtLink
            >
          </li>
          <li class="naver">
            <NuxtLink
              to="https://help.naver.com/service/5630/contents/1325?osType=ANDROID&lang=ko"
              target="_blank"
              data-gtm-event-name="link_click"
              data-gtm-event-category="클릭"
              data-gtm-event-action="서비스 접속오류 - 링크 클릭"
              data-gtm-event-label="컨텐츠 : 네이버앱 캐시 삭제하기 안내"
              data-gtm-click-url="https://help.naver.com/service/5630/contents/1325?osType=ANDROID&lang=ko"
              data-gtm-click-location="서비스 접속오류"
              data-gtm-click-direction="외부"
              data-gtm-click-text="네이버앱 캐시 삭제하기 안내"
              ><strong>네이버 앱 캐시 삭제</strong> (안드로이드/iOS)</NuxtLink
            >
          </li>
        </ul>
      </div>

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button
                type="button"
                class="btn lg c01"
                data-gtm-event-name="link_click"
                data-gtm-event-category="클릭"
                data-gtm-event-action="서비스 접속오류 - 링크 클릭"
                data-gtm-event-label="컨텐츠 : 알닷 홈으로 가기"
                data-gtm-click-url="https://www.uplusmvno.com/"
                data-gtm-click-location="서비스 접속오류"
                data-gtm-click-direction="내부"
                data-gtm-click-text="알닷 홈으로 가기"
              >
                알닷 홈으로 가기
              </button>
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
  name: "ALFM-CM01-PG00",
  emits: ["setLayout", "openPopup"],
  data() {
    return {
      layout: { header: "sub2", footer: "none", floatMenu: "none", title: "안내" },
    };
  },
  mounted() {
    this.$emit("setLayout", this.layout);
  },
};
</script>
