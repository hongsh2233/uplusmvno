---
outline: deep
---

# Family/Friend Example
This page demonstrates usage of some of the family/friend provided by Alpah Project.

## Source Sample
### 추천인
```source
<!DOCTYPE html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="../../assets/css/animation.css" />
    <link rel="stylesheet" href="../../assets/css/common.css" />
    <link rel="stylesheet" href="../../assets/css/content.css" />
    <link rel="stylesheet" href="../../assets/css/form.css" />
    <link rel="stylesheet" href="../../assets/css/main.css" />
    <link rel="stylesheet" href="../../assets/css/responsive.css" />
    <link rel="stylesheet" href="../../assets/css/style.css" />
    <style>
      .lottie-animation-container {
        width: var(--lottie-animation-container-width);
        height: var(--lottie-animation-container-height);
        background-color: var(--lottie-animation-container-background-color);
        overflow: hidden;
        margin: var(--lottie-animation-margin)
      }

      .lottie-animation-container svg {
        transform: scale(var(--lottie-animation-scale))
      }
      .content {
        height: auto;
      }
      .mobile_header {
        height: 100%;
        border: 1px solid rgba(0,0,0,0.5);
        background: #fff;
      }
    </style>
    <script>
      const front = {
        device(){
          const elem = document.querySelector("html");
          const userAgent = navigator.userAgent;

          const mobile = /Android|webOS|iPhone|iPad|iPop|BlackBerry|IEmobile|Opera Mini/i;
          const ios = /iPhone|iPad|iPop/i;
          const aos = /Android/i;

          mobile.test(userAgent) ? elem.classList.add('mobile') : elem.classList.add('pc');
          ios.test(userAgent) ? elem.classList.add('ios') : null;
          aos.test(userAgent) ? elem.classList.add('android') : null;
          
          // ie check
          const msie = /MSIE/i;
          const trident = /Trident/i;

          if( msie.test(userAgent) && trident.test(userAgent) ) {
            const ieVer = document.documentMode; // IE 브라우저 버전
            elem.classList.add('ie' + ieVer);

          } else if( !msie.test(userAgent) && trident.test(userAgent)) {
            elem.classList.add('ie11');
          }

          // etc browser check
          const edge = /Edg/i;
          const opr = /OPR/i;
          const opera = /Opera/i;
          const chrome = /Chrome/i;
          const safari = /Safari/i;
          const firefox = /Firefox/i;

          edge.test(userAgent) ? elem.classList.add('edg') : null;
          ( opr.test(userAgent) || opera.test(userAgent) ) ? elem.classList.add('opera') : null;
          chrome.test(userAgent) ?  elem.classList.add('chrome') : null;
          safari.test(userAgent) ? elem.classList.add('safari') : null;
          firefox.test(userAgent) ? elem.classList.add('firefox') : null;
        },
        /**
         * 디바이스 모바일 체크
         * @returns Boolean, html이 mobile 클래스를 가지고 있으면 true 반환
         */
        isMobile(){
          // const userAgent = navigator.userAgent;
          // const mobile = /Android|webOS|iPhone|iPad|iPop|BlackBerry|IEmobile|Opera Mini/i;

          // return mobile.test(userAgent);

          return document.querySelector("html").classList.contains("mobile");
        }
      }

      window.addEventListener('load', () => {
        front.device()
      })
    </script>
  </head>
  <body>
    <div id="__nuxt">
      <!--[-->
      <script src="https://js.tosspayments.com/v1/payment-widget"></script>
      <div>
        <!---->
        <div class="skip">
          <a aria-current="page" href="/benefit/recommendation#content" class="router-link-active router-link-exact-active">본문 바로가기</a>
        </div>
        <div class="wrap">
          <!---->
          <header class="header">
            <div class="pc_header">
              <div class="inner">
                <h1>
                  <a>
                    <span class="blind">알뜰폰닷컴</span>
                  </a>
                </h1>
                <nav class="nav">
                  <ul>
                    <li>
                      <a aria-current="page" href="/benefit/recommendation" class="router-link-active router-link-exact-active menu_class">
                        <span>유심구매</span>
                      </a>
                      <!---->
                    </li>
                    <li>
                      <a aria-current="page" href="/benefit/recommendation" class="router-link-active router-link-exact-active menu_class">
                        <span>요금제</span>
                      </a>
                      <!---->
                    </li>
                    <li>
                      <a aria-current="page" href="/benefit/recommendation" class="router-link-active router-link-exact-active menu_class">
                        <span>혜택</span>
                      </a>
                      <!---->
                    </li>
                    <li>
                      <a aria-current="page" href="/benefit/recommendation" class="router-link-active router-link-exact-active menu_class">
                        <span>고객지원</span>
                      </a>
                      <!---->
                    </li>
                  </ul>
                </nav>
                <div class="header_menu">
                  <ul>
                    <!---->
                    <!---->
                    <li>
                      <a aria-current="page" href="/benefit/recommendation" class="router-link-active router-link-exact-active">로그아웃</a>
                    </li>
                    <li>
                      <a aria-current="page" href="/benefit/recommendation" class="router-link-active router-link-exact-active">내 정보 수정</a>
                    </li>
                    <li>
                      <a href="/mypage" class="">마이페이지</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="mobile_header">
              친구추천 상세
            </div>
          </header>
          <!---->
          <div class="container">
            <div class="content" id="content">
              <h2 class="title_nav">가족/친구 추천하기</h2>
              <div class="section">
                <div class="invite_event">
                  <div>





                    <!-- 등록 화면 -->
                    <!-- 추천 이벤트 안내 영역 -->
                    <style>
                      .event-friend-section {
                        margin: -1.2rem -1.6rem 0 -1.6rem;
                      }
                      .pc .event-friend-section {
                        margin: 0;
                      }
                    </style>
                    <div class="event-friend-section">
                      <img src="/public/images/temp/가족친구추천[추천인]/event_recommendation.png" alt="" class="pc_show" />
                      <img src="/public/images/temp/가족친구추천[추천인]/event_recommendation_m.png" alt="" class="pc_hide" />
                      <div class="blind">
                        <p>알닷 교금제를 가족/친구에게 추천해 주세요</p>
                        <p>추천받은 친구가 알뜰폰닷컴의 요금제를 가입하시면 추천하신 분과 친구분 모두에게 배스킨라빈스 아이스크림을 드립니다!</p>
                      </div>
                    </div>
                    <!-- // 추천 이벤트 안내 영역 -->

                    <!-- 혜택 안내 영역 -->
                    <style>
                      .benefit-friend-section {
                        position: relative;
                        margin: 6rem 0 0 0;
                      }
                      .pc .benefit-friend-section {
                        margin: 10rem 0 0 0;
                      }
                      .btn-link {
                        position: absolute;
                        top: 31%;
                        left: 21%;
                        width: 57%;
                        height: 2%;
                      }
                      .pc .btn-link {
                        position: absolute;
                        top: 52%;
                        left: 11%;
                        width: 27%;
                        height: 2%;
                      }
                    </style>
                    <div class="benefit-friend-section">
                      <img src="/public/images/temp/가족친구추천[추천인]/event_recommendation_benefit.png" alt="" class="pc_show" />
                      <img src="/public/images/temp/가족친구추천[추천인]/event_recommendation_benefit_m.png" alt="" class="pc_hide" />
                      <button class="btn-link" onclick="handleLink()"><span class="blind">초대 링크 바로가기</span></button>
                      <div class="blind">
                        <p>친구추천은 어떻게 할 수 있죠?</p>
                        <p>친구 추천 혜택은 친구가 알닷의 요금제를 가입할 때 내가 추천인으로 등록되어 있어야 해요.</p>
                        <h5>내가 추천할 때는</h5>
                        <ol>
                          <li>
                            <p>방법 하나.</p>
                            <p>초대 링크 생성하기</p>
                            <p>아래 초대 링크 생성하기를 눌러 내 추천 링크를 가족과 친구에게 공유해 주세요.</p>
                          </li>
                          <li>
                            <p>방법 둘.</p>
                            <p>이름과 전화번호 공유하기</p>
                            <p>알닷에 가입된 내 이름과 전화번호를 가족과 친구에게 알려주세요.</p>
                          </li>
                        </ol>
                        <h5>추천받은 친구가 요금제에 가입할 때는</h5>
                        <ol>
                          <li>
                            <p>방법 하나.</p>
                            <p>요금제 가입 신청서 작성하기</p>
                            <p>초대 링크로 접속하여 알뜰폰닷컴에서 요금제 가입 신청서를 작성해 주세요.</p>
                          </li>
                          <li>
                            <p>방법 둘.</p>
                            <p>추천인 정보 입력하기</p>
                            <p>알뜰폰닷컴에서 요금제 가입 신청을 할 때 추천인 정보를 입력해 주세요.</p>
                          </li>
                        </ol>
                      </div>
                    </div>
                    <!-- // 혜택 안내 영역 -->
                    <script>
                      function handleLink() {
                        const header = document.querySelector('.header');
                        const linkSection = document.querySelector('.page_info');
                        
                        if (linkSection) {
                          const topOffset = linkSection.offsetTop - header.clientHeight;
                          window.scrollTo({ top: topOffset, behavior: 'smooth' });
                        }
                      }
                    </script>
                    <!-- // 등록화면 -->
                    
                  </div>
                  <div class="page_info">초대 링크 생성하기</div>
                  <h3 class="tit02">본인 인증</h3>
                  <div class="form_wrap">
                    <div class="form_group">
                      <strong class="form_label">이름</strong>
                      <div class="form_item">
                        <div class="input_box">
                          <!---->
                          <input class="input" type="text" placeholder="이름 입력" autocomplete="off">
                        </div>
                      </div>
                      <!---->
                    </div>
                    <div class="form_group">
                      <strong class="form_label">휴대폰 번호</strong>
                      <div class="form_item">
                        <div class="input_box">
                          <!---->
                          <input class="input" type="tel" placeholder="‘-’ 없이 숫자만 입력" autocomplete="off">
                        </div>
                        <button type="button" class="btn md c03"> 인증번호 받기 </button>
                        <!---->
                      </div>
                      <!---->
                      <div class="form_item">
                        <div class="input_box auth_num">
                          <!---->
                          <input class="input" type="text" placeholder="인증번호 6자리 입력" autocomplete="off">
                        </div>
                        <!---->
                        <!---->
                      </div>
                      <div class="error">인증번호를 정확히 입력해주세요</div>
                      <div class="error">인증번호 입력시간이 초과되었습니다</div>
                    </div>
                    <div class="btn_group">
                      <button type="button" class="btn md c03"> 인증 확인 </button>
                    </div>
                    <!---->
                  </div>
                  <div class="box_gray mgt32">
                    <ul class="text_list bull">
                      <li> 인증요청 후 3분 안에 인증번호를 입력하셔야 하며, 3분 이내 인증번호 입력 또는 재전송하지 않는 경우 다시 휴대폰 인증을 요청하여야 합니다. </li>
                      <li> 인증문자가 오지 않을 경우 아래와 같이 단말기 설정을 변경해주세요. <ul class="text_list dash">
                          <li> 휴대폰 문자 설정 메뉴 중 스팸 관련 항목의 번호 없는 메시지 차단 선택 해제 </li>
                        </ul>
                      </li>
                      <li> 수집된 개인정보 (이름, 생년월일, 성별, 휴대폰 번호)는 본인 인증에 사용됩니다. </li>
                    </ul>
                  </div>


                  <!-- 등록 화면 -->
                  <!-- 유의사항 영역 -->
                  <style>
                    .notice-friend-section {
                      margin: 3.2rem 0 0 0;
                      text-align: left;
                    }
                    .notice-friend-section .title {
                      font-size: 1.6rem;
                      font-weight: bold;
                    }
                    .pc .notice-friend-section .title {
                      font-size: 1.8rem;
                    }
                  </style>
                  <div class="notice-friend-section">
                    <div class="box_gray">
                      <p class="title">유의사항</p>
                      <ul class="text_list bull">
                        <li>추천 내역은 추천인과 추천 받으시는 분이 같을 경우 적용되지 않습니다. </li>
                        <li>추천 받으신 분이 가입신청서 작성시 추천하신 분(추천인) 정보를 기재해 주셔야 정상 반영됩니다.
                          <ul class="text_list dash">
                            <li>초대 링크를 통해 가입신청서 작성 시 추천인 정보가 자동 입력되어 있습니다.</li>
                            <li>추천인 변경을 희망하는 경우 신청서 작성 완료 후 1:1 문의를 통해 문의해주시기 바랍니다. (가입 후 14일 이내)</li>
                            <li>추천 받은 시점 미납/일시정지/명의 변경 시 이벤트 대상에서 제외될 수 있습니다.</li>
                          </ul>
                        </li>
                        <li>추천 이벤트 대상 기준
                          <ul class="text_list dash">
                            <li>추천인 : 추천 받으신 분이 개통 유지 시 </li>
                            <li>추천 혜택을 받기 전에 추천인/추천받으신 분이 해지 시 대상에서 제외됩니다.</li>
                          </ul>
                        </li>
                        <li>비정상적이거나 부정한 방법으로 참여(추천개통)시 지급 대상에서 제외됩니다.</li>
                        <li>당사 사정에 따라 추천 혜택은 사전 예고 없이 조기 종료 및 변경될 수 있습니다.</li>
                      </ul>
                    </div>
                  </div>
                  <!-- // 유의사항 영역 -->
                  <!-- // 등록 화면 -->
                </div>
              </div>
            </div>
          </div>
          <div class="aside_float">
            <div class="inner">
              <a class="btn_reco">
                <span>친구 추천</span>
              </a>
              <a href="/purchase/delivery" class="btn_deli">
                <span>
                  <img src="/images/common/tit_direct_delivery.png" alt="지금배송">
                </span>
              </a>
              <button type="button" class="btn_top">
                <span>TOP</span>
              </button>
            </div>
          </div>
          <footer class="footer">
            <div class="inner">
              <div class="f_logo">
                <a href="https://www.lguplus.com/" rel="noopener noreferrer" target="_blank">
                  <span class="blind">LG U+</span>
                </a>
              </div>
              <div class="f_buttom">
                <a href="/footer/terms/usage" class="">이용약관</a>
                <a href="/footer/terms/privacyProcess" class="policy">개인정보처리방침</a>
                <a href="/footer/terms/privacyUsage" class="">개인정보이용내역</a>
                <a href="https://msafer.or.kr/index.do" rel="noopener noreferrer" target="_blank" title="새 창 열림">명의도용방지서비스</a>
                <a href="https://spam.kisa.or.kr/" rel="noopener noreferrer" target="_blank" title="새 창 열림">불법스팸대응센터</a>
              </div>
              <div class="f_info">
                <p>(주)엘지유플러스</p>
                <p>
                  <span>대표이사 황현식</span>
                  <span>사업자등록번호 220-81-39938</span>
                </p>
                <p>서울특별시 용산구 한강대로 32</p>
                <p>통신판매신고 제 2015-서울용산-00481호</p>
              </div>
              <div class="f_copyright"> Copyright © LG Uplus Corp. All Rights Reserved. </div>
              <div class="f_sns">
                <a href="https://www.youtube.com/@uplusmvno_official" rel="noopener noreferrer" target="_blank" class="ico_youtube" title="새 창 열림">
                  <span class="blind">youtube</span>
                </a>
                <a href="https://www.instagram.com/uplusalpha_official/" rel="noopener noreferrer" target="_blank" class="ico_instagram" title="새 창 열림">
                  <span class="blind">instagram</span>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <!--]-->
    </div>
  </body>
</html>
```

### 피추천인
```source
<!DOCTYPE html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="../../assets/css/animation.css" />
    <link rel="stylesheet" href="../../assets/css/common.css" />
    <link rel="stylesheet" href="../../assets/css/content.css" />
    <link rel="stylesheet" href="../../assets/css/form.css" />
    <link rel="stylesheet" href="../../assets/css/main.css" />
    <link rel="stylesheet" href="../../assets/css/responsive.css" />
    <link rel="stylesheet" href="../../assets/css/style.css" />
    <style>
      .lottie-animation-container {
        width: var(--lottie-animation-container-width);
        height: var(--lottie-animation-container-height);
        background-color: var(--lottie-animation-container-background-color);
        overflow: hidden;
        margin: var(--lottie-animation-margin)
      }

      .lottie-animation-container svg {
        transform: scale(var(--lottie-animation-scale))
      }
      .content {
        height: auto;
      }
      .mobile_header {
        height: 100%;
        border: 1px solid rgba(0,0,0,0.5);
        background: #fff;
      }
    </style>
    <script>
      const front = {
        device(){
          const elem = document.querySelector("html");
          const userAgent = navigator.userAgent;

          const mobile = /Android|webOS|iPhone|iPad|iPop|BlackBerry|IEmobile|Opera Mini/i;
          const ios = /iPhone|iPad|iPop/i;
          const aos = /Android/i;

          mobile.test(userAgent) ? elem.classList.add('mobile') : elem.classList.add('pc');
          ios.test(userAgent) ? elem.classList.add('ios') : null;
          aos.test(userAgent) ? elem.classList.add('android') : null;
          
          // ie check
          const msie = /MSIE/i;
          const trident = /Trident/i;

          if( msie.test(userAgent) && trident.test(userAgent) ) {
            const ieVer = document.documentMode; // IE 브라우저 버전
            elem.classList.add('ie' + ieVer);

          } else if( !msie.test(userAgent) && trident.test(userAgent)) {
            elem.classList.add('ie11');
          }

          // etc browser check
          const edge = /Edg/i;
          const opr = /OPR/i;
          const opera = /Opera/i;
          const chrome = /Chrome/i;
          const safari = /Safari/i;
          const firefox = /Firefox/i;

          edge.test(userAgent) ? elem.classList.add('edg') : null;
          ( opr.test(userAgent) || opera.test(userAgent) ) ? elem.classList.add('opera') : null;
          chrome.test(userAgent) ?  elem.classList.add('chrome') : null;
          safari.test(userAgent) ? elem.classList.add('safari') : null;
          firefox.test(userAgent) ? elem.classList.add('firefox') : null;
        },
        /**
         * 디바이스 모바일 체크
         * @returns Boolean, html이 mobile 클래스를 가지고 있으면 true 반환
         */
        isMobile(){
          // const userAgent = navigator.userAgent;
          // const mobile = /Android|webOS|iPhone|iPad|iPop|BlackBerry|IEmobile|Opera Mini/i;

          // return mobile.test(userAgent);

          return document.querySelector("html").classList.contains("mobile");
        }
      }

      window.addEventListener('load', () => {
        front.device()
      })
    </script>
  </head>
  <body class="scroll">
    <div id="__nuxt">
      <!--[-->
      <script src="https://js.tosspayments.com/v1/payment-widget"></script>
      <div>
        <!---->
        <div class="skip">
          <a aria-current="page" href="/benefit/recommended#content" class="router-link-active router-link-exact-active">본문 바로가기</a>
        </div>
        <div class="wrap">
          <!---->
          <header class="header">
            <div class="pc_header">
              <div class="inner">
                <h1>
                  <a>
                    <span class="blind">알뜰폰닷컴</span>
                  </a>
                </h1>
                <nav class="nav">
                  <ul>
                    <li>
                      <a aria-current="page" href="/benefit/recommended" class="router-link-active router-link-exact-active menu_class">
                        <span>유심구매</span>
                      </a>
                      <!---->
                    </li>
                    <li>
                      <a aria-current="page" href="/benefit/recommended" class="router-link-active router-link-exact-active menu_class">
                        <span>요금제</span>
                      </a>
                      <!---->
                    </li>
                    <li>
                      <a aria-current="page" href="/benefit/recommended" class="router-link-active router-link-exact-active menu_class">
                        <span>혜택</span>
                      </a>
                      <!---->
                    </li>
                    <li>
                      <a aria-current="page" href="/benefit/recommended" class="router-link-active router-link-exact-active menu_class">
                        <span>고객지원</span>
                      </a>
                      <!---->
                    </li>
                  </ul>
                </nav>
                <div class="header_menu">
                  <ul>
                    <!---->
                    <!---->
                    <li>
                      <a aria-current="page" href="/benefit/recommended" class="router-link-active router-link-exact-active">로그아웃</a>
                    </li>
                    <li>
                      <a aria-current="page" href="/benefit/recommended" class="router-link-active router-link-exact-active">내 정보 수정</a>
                    </li>
                    <li>
                      <a href="/mypage" class="">마이페이지</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="mobile_header">
              친구추천 상세
            </div>
          </header>
          <!---->
          <div class="container">
            <div class="content" id="content">
              <h2 class="title_nav">가족/친구 추천하기</h2>
              <div class="section">
                <div class="invite_event">
                  <div class="box_yellow">
                    <div class="my_event">
                      <p>
                        <strong>
                          <span>김*현</span>님 </strong>이 추천한 <sup>+</sup>알뜰폰 파트너스 <br> 요금제 가입하고 혜택 받기
                      </p>
                      <a href="/plan/plan-list" class="btn sm c01">요금제 가입하기</a>
                    </div>
                  </div>



                  <!-- 등록 화면 -->
                  <!-- 혜택 안내 영역 -->
                  <style>
                    .benefit-friend-section {
                      text-align: center;
                    }
                    .pc .benefit-friend-section img {
                      width: 100%;
                    }
                  </style>
                  <div class="benefit-friend-section">
                    <img src="/public/images/temp/가족친구추천[피추천인]/event_recommended_benefit.png" alt="" class="pc_show" />
                    <img src="/public/images/temp/가족친구추천[피추천인]/event_recommended_benefit_m.png" alt="" class="pc_hide" />
                    <div class="blind">
                      <p>알닷만의 친구추천 혜택</p>
                      <p>친구 추천 EVENT 친구/가족이 추천한 요금제를 가입하면 추가 혜택이 쏟아지는거 아시죠?! 추천한 친구도, 나도 선물을 받을 수 있는 일석이조의 혜택! 추천받은 요금제를 개통하면 모두에게 배스킨라빈스 아이스크림을 드립니다!!!</p>
                    </div>
                  </div>
                  <!-- // 혜택 안내 영역 -->

                  <!-- 소개 영역 -->
                  <style>
                    .introduce-friend-section {
                      margin: 3rem 0 0 0;
                      text-align: center;
                    }
                    .pc .introduce-friend-section {
                      margin: 6rem 0 0 0;
                    }
                    .pc .introduce-friend-section img {
                      width: 100%;
                    }
                    .introduce-friend-section__list li {
                      margin-top: 12px;
                    }
                    .pc .introduce-friend-section__list li {
                      margin-top: 24px;
                    }
                    .introduce-friend-section .tit03 {
                      text-align: left;
                    }
                  </style>
                  <div class="introduce-friend-section">
                    <div class="tit_wrap">
                      <h3 class="tit03">알닷으로<br class="show" />새로운 모바일 생활을 만나보세요. </h3>
                    </div>
                    <ul class="introduce-friend-section__list">
                      <li data-aos="flip-left">
                        <img src="/public/images/temp/가족친구추천[피추천인]/event_recommended_introduce1.png" alt="" class="pc_show" />
                        <img src="/public/images/temp/가족친구추천[피추천인]/event_recommended_introduce1_m.png" alt="" class="pc_hide" />
                        <p class="blind">데이터와 통화는 빵빵하게! 통신비는 알뜰하게 다이어트 약정, 위약금 부담 없이 반값 요금제를 누려보세요.</p>
                      </li>
                      <li data-aos="fade-up">
                        <img src="/public/images/temp/가족친구추천[피추천인]/event_recommended_introduce2.png" alt="" class="pc_show" />
                        <img src="/public/images/temp/가족친구추천[피추천인]/event_recommended_introduce2_m.png" alt="" class="pc_hide" />
                        <p class="blind">믿을 수 있는 품질과 다양한 요금제 U 의 우수한 품질은 기본 알닷 파트너사의 다양한 요금제를 비교 해보세요.</p>
                      </li>
                      <li data-aos="fade-up">
                        <img src="/public/images/temp/가족친구추천[피추천인]/event_recommended_introduce3.png" alt="" class="pc_show" />
                        <img src="/public/images/temp/가족친구추천[피추천인]/event_recommended_introduce3_m.png" alt="" class="pc_hide" />
                        <p class="blind">빠르게 구할 수 있는 유심과 편리한 셀프 개통 편의점, 원칩지금배송으로 빠르게 구매하고 홈페이지에서 셀프개통 하세요.</p>
                      </li>
                    </ul>
                  </div>
                  <!-- // 소개 영역 -->

                  <!-- 유의사항 영역 -->
                  <style>
                    .notice-friend-section {
                      margin: 60px 0 0 0;
                    }
                    .notice-friend-section .title {
                      font-size: 1.6rem;
                      font-weight: bold;
                    }
                    .pc .notice-friend-section .title {
                      font-size: 1.8rem;
                    }
                  </style>
                  <div class="notice-friend-section">
                    <div class="box_gray">
                      <p class="title">유의사항</p>
                      <ul class="text_list bull">
                        <li>추천 내역은 추천인과 추천 받으시는 분이 같을 경우 적용되지 않습니다.</li>
                        <li>추천 받으신 분이 가입신청서 작성시 추천하신 분(추천인) 정보를 기재해 주셔야 정상 반영됩니다.
                          <ul class="text_list dash">
                            <li>초대 링크를 통해 가입신청서 작성 시 추천인 정보가 자동 입력되어 있습니다.</li>
                            <li>추천인 변경을 희망하는 경우 신청서 작성 완료 후 1:1 문의를 통해 문의해주시기 바랍니다. (가입 후 14일 이내)</li>
                            <li>추천 받은 시점 미납/일시정지/명의 변경 시 이벤트 대상에서 제외될 수 있습니다.</li>
                          </ul>
                        </li>
                        <li>추천 이벤트 대상 기준
                          <ul class="text_list dash">
                            <li>추천인 : 추천 받으신 분이 개통 유지 시</li>
                            <li>추천 혜택을 받기 전에 추천인/추천받으신 분이 해지 시 대상에서 제외됩니다.</li>
                          </ul>
                        </li>
                        <li>비정상적이거나 부정한 방법으로 참여(추천개통)시 지급 대상에서 제외됩니다.</li>
                        <li>당사 사정에 따라 추천 혜택은 사전 예고 없이 조기 종료 및 변경될 수 있습니다.</li>
                      </ul>
                    </div>
                  </div>
                  <!-- // 유의사항 영역 -->
                  <!-- // 등록 화면 -->
                </div>
              </div>
            </div>
          </div>
          <div class="aside_float">
            <div class="inner">
              <a class="btn_reco">
                <span>친구 추천</span>
              </a>
              <a href="/purchase/delivery" class="btn_deli">
                <span>
                  <img src="/images/common/tit_direct_delivery.png" alt="지금배송">
                </span>
              </a>
              <button type="button" class="btn_top">
                <span>TOP</span>
              </button>
            </div>
          </div>
          <footer class="footer">
            <div class="inner">
              <div class="f_logo">
                <a href="https://www.lguplus.com/" rel="noopener noreferrer" target="_blank">
                  <span class="blind">LG U+</span>
                </a>
              </div>
              <div class="f_buttom">
                <a href="/footer/terms/usage" class="">이용약관</a>
                <a href="/footer/terms/privacyProcess" class="policy">개인정보처리방침</a>
                <a href="/footer/terms/privacyUsage" class="">개인정보이용내역</a>
                <a href="https://msafer.or.kr/index.do" rel="noopener noreferrer" target="_blank" title="새 창 열림">명의도용방지서비스</a>
                <a href="https://spam.kisa.or.kr/" rel="noopener noreferrer" target="_blank" title="새 창 열림">불법스팸대응센터</a>
              </div>
              <div class="f_info">
                <p>(주)엘지유플러스</p>
                <p>
                  <span>대표이사 황현식</span>
                  <span>사업자등록번호 220-81-39938</span>
                </p>
                <p>서울특별시 용산구 한강대로 32</p>
                <p>통신판매신고 제 2015-서울용산-00481호</p>
              </div>
              <div class="f_copyright"> Copyright © LG Uplus Corp. All Rights Reserved. </div>
              <div class="f_sns">
                <a href="https://www.youtube.com/@uplusmvno_official" rel="noopener noreferrer" target="_blank" class="ico_youtube" title="새 창 열림">
                  <span class="blind">youtube</span>
                </a>
                <a href="https://www.instagram.com/uplusalpha_official/" rel="noopener noreferrer" target="_blank" class="ico_instagram" title="새 창 열림">
                  <span class="blind">instagram</span>
                </a>
              </div>
            </div>
          </footer>
        </div>
        <!---->
      </div>
      <!--]-->
    </div>
    <script>
      document.querySelector('.btn_top').addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    </script>
  </body>
</html>
```