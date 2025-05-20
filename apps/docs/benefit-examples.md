---
outline: deep
---

# Benefit Example
This page demonstrates usage of some of the benefit provided by Alpah Project.

## Source Sample
```source
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>event</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="../../assets/css/animation.css" />
    <link rel="stylesheet" href="../../assets/css/common.css" />
    <link rel="stylesheet" href="../../assets/css/content.css" />
    <link rel="stylesheet" href="../../assets/css/form.css" />
    <link rel="stylesheet" href="../../assets/css/main.css" />
    <link rel="stylesheet" href="../../assets/css/responsive.css" />
    <link rel="stylesheet" href="../../assets/css/style.css" />
    <style>
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
      <div>
        <!---->
        <div class="skip">
          <a aria-current="page" href="/benefit/event/detail#content" class="router-link-active router-link-exact-active">본문 바로가기</a>
        </div>
        <div class="wrap">
          <!---->
          <header class="header">
            <div class="pc_header">
              <div class="inner">
                <h1>
                  <a href="/" class="">
                    <span class="blind">U <sup>+</sup>알뜰폰닷컴 </span>
                  </a>
                </h1>
                <nav class="nav">
                  <ul>
                    <li>
                      <a aria-current="page" href="/benefit/event/detail" class="router-link-active router-link-exact-active menu_class">
                        <span>유심구매</span>
                      </a>
                      <!---->
                    </li>
                    <li>
                      <a aria-current="page" href="/benefit/event/detail" class="router-link-active router-link-exact-active menu_class">
                        <span>요금제</span>
                      </a>
                      <!---->
                    </li>
                    <li>
                      <a aria-current="page" href="/benefit/event/detail" class="router-link-active router-link-exact-active menu_class">
                        <span>혜택</span>
                      </a>
                      <!---->
                    </li>
                    <li>
                      <a aria-current="page" href="/benefit/event/detail" class="router-link-active router-link-exact-active menu_class">
                        <span>고객지원</span>
                      </a>
                      <!---->
                    </li>
                  </ul>
                </nav>
                <div class="header_menu">
                  <ul>
                    <li>
                      <a href="/login" class="">로그인</a>
                    </li>
                    <li>
                      <a href="/register" class="">회원가입</a>
                    </li>
                    <!---->
                    <!---->
                    <li>
                      <a href="/mypage" class="">마이페이지</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="mobile_header">
              이벤트 상세
            </div>
          </header>
          
          <div class="container">
            <div class="content" id="content">
              <h2 class="title_nav">이벤트 상세</h2>
              <div class="section">
                <div class="evt_dtl_item">
                  <div class="evt_dtl_tit">
                    <div class="dtl_tit_top">
                      <div class="bag_lft">
                        <div class="bag evt dday">
                          <b>D-55</b>
                        </div>
                        <div class="bag evt ty01">
                          <b>이번달 이벤트</b>
                        </div>
                      </div>
                      <div class="bag_rit">
                        <img src="https://api.dev.uplusmvno.com/umah/fo/s3/getImage?filename=2024/2/23/header-logo.png" alt="파트너사">
                      </div>
                    </div>
                    <div class="dtl_tit_bot">
                      <strong>이벤트 제목이 들어가야 할 공간</strong>
                      <div class="share_box">
                        <span>
                          <span>2023.12.08</span> - <span>2024.04.30</span>
                        </span>
                        <button type="button" class="btn_share" id="btn_CM12PG00">
                          <span class="blind">공유하기</span>
                        </button>
                      </div>
                    </div>
                  </div>







                  <div class="evt_dtl_con">
                    <div>
                      <!-- 어드민 등록이 되어야할 이벤트 컨텐츠 -->
                      <style>
                        .blind {
                          position: absolute;
                          left: -9999px;
                          width: 0;
                          height: 0;
                          line-height: 0;
                          opacity: 0;
                          font-size: 0;
                        }
                        .pc .evt_dtl_item .evt_dtl_con img {
                          width: auto;
                        }
                        .eventCont {
                          text-align: center;
                        }
                        .evt_dtl_con .anchor-box {
                          position: absolute;
                          top: 0;
                          left: 0;
                          width: 100%;
                          height: 100%;
                        }
                        .evt_dtl_con .anchor-box {
                          position: relative;
                        }
                        .evt_dtl_con .anchor-box > ul {
                          position: absolute;
                          top: 0;
                          left: 0;
                          width: 100%;
                          height: 100%;
                          display: flex;
                          flex-wrap: wrap;
                        }
                        .evt_dtl_con .anchor-box > ul > li {
                          width: 33.33%;
                          height: 100%;
                        }
                        .evt_dtl_con .anchor-box a {
                          position: relative;
                          width: 100%;
                          height: 100%;
                          float: left;
                        }
                        .section_space {
                          position: relative;
                          padding: 0 5px;
                        }
                        .pc .section_space {
                          padding: 0 37px;
                        }
                        .section_space .btn1 {
                          position: absolute;
                          top: 81.5%;
                          left: 8%;
                          width: 84%;
                          height: 5.2%;
                        }
                        .pc .section_space .btn1 {
                          position: absolute;
                          top: 84.5%;
                          left: 21%;
                          width: 57%;
                          height: 5.2%;
                        }
                        .mt20 {
                          margin-top: 20px;
                        }
                        .mt40 {
                          margin-top: 40px;
                        }
                        .mt50 {
                          margin-top: 50px;
                        }
                        .mt100 {
                          margin-top: 100px;
                        }
                        .section_collapsed {
                          text-align: center;
                          position: relative;
                        }
                        .section_collapsed .btn1 {
                          position: absolute;
                          top: 91.5%;
                          left: 8%;
                          width: 84%;
                          height: 8.2%;
                        }
                        .pc .section_collapsed .btn1 {
                          position: absolute;
                          top: 91.8%;
                          left: 21%;
                          width: 58%;
                          height: 8.2%;
                        }
                        .collapsed label {
                          cursor: pointer;
                        }
                        .collapsed input {
                          display: none;
                        }
                        .collapsed input + label + img {
                          display: none;
                        }
                        .collapsed input:checked + label + img {
                          display: inline-block;
                          margin-bottom: 20px;
                        }
                        .pc .collapsed input:checked + label + img {
                          display: inline-block;
                          margin-bottom: 80px;
                        }
                        .collapsed input:checked + label > img {
                          display: none;
                        }
                        .section_phone {
                          position: relative;
                          margin-top:20px;
                        }
                        .section_phone .btn1 {
                          position: absolute;
                          top: 20%;
                          left: 4%;
                          width: 35%;
                          height: 65%;
                        }
                        .section_phone .btn2 {
                          position: absolute;
                          top: 20%;
                          left: 65%;
                          width: 32%;
                          height: 62%;
                        }
                      </style>
                      <div class="eventCont">
                        <div class="blind">
                          <h1>유플러스 알뜰폰 + 인터넷 결합 혜택</h1>
                          <h1>최대 117만원 올인원 결합 혜택</h1>

                          <h5>알뜰폰은 결합이 안된다는 오해는 NO</h5>
                          <h5>유플러스는 알뜰폰 + 인터넷 + IPTV 세가지를 결합할 수 있어요</h5>
                        </div>
                        <div>
                          <img src="../../public/images/temp/인터넷결합안내/event_top_m.png" alt="U+ 결합요금제 올인원결합 최대 117만원 혜택" class="all-in-one-img pc_hide">
                          <img src="../../public/images/temp/인터넷결합안내/event_top.png" alt="U+ 결합요금제 올인원결합 최대 117만원 혜택" class="all-in-one-img pc_show">
                        </div>
                        <div  class="anchor-box">
                          <ul>
                            <li><a href="#event01"><span class="blind">인터넷 + IPTV 신규가입 및 결합혜택</span></a></li>
                            <li><a href="#event02"><span class="blind">U+인터넷 기가입 고객 결합혜택</span></a></li>
                            <li><a href="#event03"><span class="blind">알뜰폰+홈 상품 결합 요금제</span></a></li>
                          </ul>
                          <img src="../../public/images/temp/인터넷결합안내/event_tab_m.png" alt="" class="pc_hide">
                          <img src="../../public/images/temp/인터넷결합안내/event_tab.png" alt="" class="pc_show">
                        </div>
                        
                        <div id="event01" class="event_section">
                          <div class="blind">
                            <p>최대 117만원 인터넷+알뜰폰 결합혜택 한눈에 모아보기</p>
                          </div>
                          <div>
                            <img src="../../public/images/temp/인터넷결합안내/event_section_1_1_m.png" alt="" class="pc_hide">
                            <img src="../../public/images/temp/인터넷결합안내/event_section_1_1.png" alt="" class="pc_show">
                          </div>
                        </div>

                        <div class="event_section">
                          <div class="blind">
                            <h2>신규 가입자 혜택</h2>
                            <dl>
                              <dt>01</dt>
                              <dd>최대 46만원 상품권 또는 사은품</dd>
                            </dl>
                            <dl>
                              <dt>02</dt>
                              <dd>유플러스닷컴 단독 최대 11만원 추가 요금 할인</dd>
                              <dd>온라인 단독 할인</dd>
                              <dd>매달 청구 요금에서 추가 할인</dd>
                              <dd>* 3년 약정으로 가입시 적용</dd>
                            </dl>
                            <dl>
                              <dt>03</dt>
                              <dd>알뜰폰+인터넷 결합시 최대 47만원 할인</dd>
                              <dd>(매월 13,200원 * 36개월)</dd>
                              <dd>3년 약정, 인터넷 1G U+알뜰폰과 참 쉬운 가족 결합 시 기준</dd>
                            </dl>
                            <dl>
                              <dt>04</dt>
                              <dd>알뜰폰 요금 월 11,000원 할인</dd>
                              <dd>(12개월 동안 최대 13만원 혜택)</dd>
                              <dd>인터넷+IPTV 신규 개통, U  알뜰폰과참 쉬운 가족 결합 시 1회선 할인</dd>
                              <dd>인터넷+IPTV를 개통한 같은 달에 알뜰폰 결합이 된 경우 할인</dd>
                              <dd>단, 큰사람 사업자는 24개월 동안 5,500원 할인</dd>
                            </dl>
                            <p>알뜰폰 요금제 별로 결합 가능 여부가 다를 수 있으니 인터넷 상담 시 확인 필요합니다.</p>
                            <p>결합요금제 뱃지가 있는 요금제는 결합 가능합니다.</p>
                          </div>
                          <div class="section_space">
                            <img src="../../public/images/temp/인터넷결합안내/event_section_1_2_m.png" alt="" class="pc_hide">
                            <img src="../../public/images/temp/인터넷결합안내/event_section_1_2.png" alt="" class="pc_show">
                          </div>
                        </div>

                        <div id="event02" class="event_section">
                          <div class="blind">
                            <h2>기존 가입자 혜택</h2>
                            <p>U+인터넷 기가입 고객 알뜰폰 결합 혜택</p>
                            <dl>
                              <dt>U+인터넷 기가입고객 + 알뜰폰 결합 시 최대 13,200원 할인 제공</dt>
                              <dd>* 3년 약정, 인터넷 1G U+ 알뜰폰과 참 쉬운 가족 결합 시 기준</dd>
                            </dl>
                            <ul>
                              <li>인터넷 100M = 5,500원</li>
                              <li>인터넷 500M = 9,900원</li>
                              <li>인터넷 1G = 13,200원</li>
                            </ul>
                            <p>알뜰폰 요금제 별로 결합가능 여부가 다를 수 있으니 인터넷 상담 시 확인 필요합니다.</p>
                            <p>'결합요금제'뱃지가 있는 요금제는 결합 가능합니다.</p>
                            <p>U+인터넷 미결합시 결합이 가능합니다. (단, 일부 사업자 제외)</p>
                            <p>참 쉬운 가족결합은 2020년 9월 1일 이후 LG U+ 인터넷 신규 가입 고객에 한해 신청 가능합니다.</p>

                            <table>
                              <caption>
                                <h3>요금제 스펙</h3>
                              </caption>
                              <tbody>
                                <tr>
                                  <th>구분</th>
                                  <th>데이터</th>
                                  <th>통화</th>
                                  <th>문자</th>
                                </tr>
                                <tr>
                                  <th>LTE요금제</th>
                                  <td>15GB+ (소진시 3Mbps)</td>
                                  <td>100분</td>
                                  <td>100건</td>
                                </tr>
                                <tr>
                                  <th>LTE요금제</th>
                                  <td>15GB+ (소진시 3Mbps)</td>
                                  <td>300분</td>
                                  <td>300건</td>
                                </tr>
                                <tr>
                                  <th>LTE요금제</th>
                                  <td>11GB+일2GB (소진시 3Mbps)</td>
                                  <td>기본</td>
                                  <td>기본</td>
                                </tr>
                                <tr>
                                  <th>LTE요금제</th>
                                  <td>매일5GB+ (소진시 3Mbps)</td>
                                  <td>기본</td>
                                  <td>기본</td>
                                </tr>
                                <tr>
                                  <th>5G요금제</th>
                                  <td>9GB+ (소진시 1Mbps)</td>
                                  <td>기본</td>
                                  <td>기본</td>
                                </tr>
                                <tr>
                                  <th>5G요금제</th>
                                  <td>12GB+ (소진시 1Mbps)</td>
                                  <td>기본</td>
                                  <td>기본</td>
                                </tr>
                                <tr>
                                  <th>5G요금제</th>
                                  <td>150GB (소진시 5Mbps)</td>
                                  <td>기본</td>
                                  <td>기본</td>
                                </tr>
                                <tr>
                                  <th>5G요금제</th>
                                  <td>180GB (소진시 10Mbps)</td>
                                  <td>기본</td>
                                  <td>기본</td>
                                </tr>
                              </tbody>
                            </table>
                            <p>결합 상담 신청하기</p>
                            <p>알뜰폰 요금제 별로 결합가능 여부가 다를 수 있으니 인터넷 상담 시 확인 필요합니다.</p>
                            <p>'결합요금제'뱃지가 있는 요금제는 결합 가능합니다.</p>
                            <p>U+인터넷 미결합시 결합이 가능합니다. (단, 일부 사업자 제외)</p>
                            <p>참 쉬운 가족결합은 2020년 9월 1일 이후 LG U+ 인터넷 신규 가입 고객에 한해 신청 가능합니다.</p>
                          </div>
                          <div class="section_space">
                            <img src="../../public/images/temp/인터넷결합안내/event_section_2_1_m.png" alt="" class="pc_hide mt40">
                            <img src="../../public/images/temp/인터넷결합안내/event_section_2_1.png" alt="" class="pc_show mt100">

                            <a href="https://www.lguplus.com/internet-iptv/telCnsl?onlnCnslJobDivsCd=3&amp;appfLednChnlDivsCd=09&amp;appfLednDivsCd=02&amp;appfProdSvcDivsCd=02&amp;operationId=telreg&amp;calEvetNm=%EC%95%8C%EB%9C%B0%ED%8F%B0%ED%8C%8C%ED%8A%B8%EB%84%88%EC%8A%A4(%EA%B2%B0%ED%95%A9)" target="_blank" class="btn1">
                              <span class="blind">결합 상담 신청하기</span>
                            </a>
                          </div>
                        </div>

                        <div id="event03" class="event_section">
                          <div class="blind">
                            <h1>참 쉬운 가족 결합 가능 알뜰폰 사업자 한눈에 보기</h1>
                            <ul>
                              <li>플래쉬</li>
                              <li>온국민폰</li>
                              <li>KB리브엠</li>
                              <li>스마텔</li>
                              <li>아이즈모바일</li>
                              <li>에넥스</li>
                              <li>에스원</li>
                              <li>여유알뜰모바일</li>
                              <li>모빙</li>
                              <li>EG모바일</li>
                              <li>프리티</li>
                              <li>이야기모바일</li>
                              <li>티플러스</li>
                              <li>마블링</li>
                              <li>토스모바일</li>
                              <li>KG모바일</li>
                              <li>인스모바일</li>
                              <li>웰</li>
                              <li>에르엘</li>
                              <li>모나아이</li>
                              <li>벨류컴</li>
                              <li>슈가모바일</li>
                            </ul>
                            <p>* 위 사업자의 후불 요금제 중 양사 간 협의된 요금제만 결합이 가능합니다.</p>
                          </div>
                          <section class="section_collapsed">
                            <div class="mt40 pc_hide collapsed">
                              <input type="radio" id="toggled1m" name="toggled" />
                              <label for="toggled1m"><img src="../../public/images/temp/인터넷결합안내/event_toggle_m.png" alt="" /></label>
                              <img src="../../public/images/temp/인터넷결합안내/event_section_3_1_m.png" alt="" />
                            </div>
                            <div class="mt100 pc_show collapsed">
                              <input type="radio" id="toggled1" name="toggled" />
                              <label for="toggled1"><img src="../../public/images/temp/인터넷결합안내/event_toggle.png" alt="" /></label>
                              <img src="../../public/images/temp/인터넷결합안내/event_section_3_1.png" alt="" />
                            </div>
                            <button onclick="window.open('https://www.lguplus.com/internet-iptv/telCnsl?onlnCnslJobDivsCd=3&amp;appfLednChnlDivsCd=06&amp;appfLednDivsCd=02&amp;appfProdSvcDivsCd=02&amp;operationId=telreg&amp;calEvetNm=%EC%95%8C%EB%9C%B0%ED%8F%B0%ED%8C%8C%ED%8A%B8%EB%84%88%EC%8A%A4(%EC%8B%A0%EA%B7%9C)')" class="btn1"><span class="blind">신규 인터넷 가입 상담 신청하기</span></button>
                          </section>
                          <section class="section_phone">
                            <div class="pc_hide">
                              <img src="../../public/images/temp/인터넷결합안내/event_section_phone_m.png" alt="가입 상담신청" />
                              <a href="tel:1833-2979" target="_blank" class="btn1"><span class="blind">1833-2979</span></a>
                              <a href="https://www.lguplus.com/internet-iptv/telCnsl?onlnCnslJobDivsCd=3&amp;appfLednChnlDivsCd=06&amp;appfLednDivsCd=02&amp;appfProdSvcDivsCd=02&amp;operationId=telreg&amp;calEvetNm=%EC%95%8C%EB%9C%B0%ED%8F%B0%ED%8C%8C%ED%8A%B8%EB%84%88%EC%8A%A4(%EC%8B%A0%EA%B7%9C)" target="_blank" class="btn2"><span class="blind">가입상담신청</span></a>
                            </div>
                            <div class="pc_show">
                              <a href="https://www.lguplus.com/internet-iptv/telCnsl?onlnCnslJobDivsCd=3&amp;appfLednChnlDivsCd=06&amp;appfLednDivsCd=02&amp;appfProdSvcDivsCd=02&amp;operationId=telreg&amp;calEvetNm=%EC%95%8C%EB%9C%B0%ED%8F%B0%ED%8C%8C%ED%8A%B8%EB%84%88%EC%8A%A4(%EC%8B%A0%EA%B7%9C)" target="_blank" lass="pc_show">
                                <img src="../../public/images/temp/인터넷결합안내/event_section_phone.png" alt="가입 상담신청" />
                              </a>
                            </div>
                          </section>
                        </div>
                      </div>
                      <!-- // 어드민 등록이 되어야할 이벤트 컨텐츠 -->
                    </div>
                  </div>







                  <div class="evt_comnt">
                    <div class="textarea_box ty02">
                      <textarea class="textarea" placeholder="댓글을 남겨주세요(50자 이내)" rows="1" maxlength="50" style="height: 48px;"></textarea>
                      <div class="byte_check">
                        <span class="count">0</span>
                        <span class="total">50</span>
                      </div>
                      <button type="button" disabled="">등록</button>
                    </div>
                    <div class="line_list">
                      <ul>
                        <li>
                          <div class="list_con ty02">
                            <div class="cus comnt_cor">
                              <span class="name">임성훈님</span>
                              <!---->
                            </div>
                            <span class="tit">댓글 테스트로 쓰고 있습니다. </span>
                          </div>
                        </li>
                        <li>
                          <div class="list_con ty02">
                            <div class="cus comnt_cor">
                              <span class="name">0111_1님</span>
                              <!---->
                            </div>
                            <span class="tit">asfasdasdvdv</span>
                          </div>
                        </li>
                        <li>
                          <div class="list_con ty02">
                            <div class="cus comnt_cor">
                              <span class="name">0111_1님</span>
                              <!---->
                            </div>
                            <span class="tit">수정 테스트2</span>
                          </div>
                        </li>
                        <li>
                          <div class="list_con ty02">
                            <div class="cus comnt_cor">
                              <span class="name">0111_1님</span>
                              <!---->
                            </div>
                            <span class="tit">등록 테스트</span>
                          </div>
                        </li>
                        <li>
                          <div class="list_con ty02">
                            <span class="tit reg">관리자에 의해 규제된 댓글입니다.</span>
                          </div>
                        </li>
                        <li>
                          <div class="list_con ty02">
                            <span class="tit reg">관리자에 의해 규제된 댓글입니다.</span>
                          </div>
                        </li>
                        <li>
                          <div class="list_con ty02">
                            <span class="tit reg">관리자에 의해 규제된 댓글입니다.</span>
                          </div>
                        </li>
                        <li>
                          <div class="list_con ty02">
                            <div class="cus comnt_cor">
                              <span class="name">0111_1님</span>
                              <!---->
                            </div>
                            <span class="tit">짱!이에요!</span>
                          </div>
                        </li>
                      </ul>
                      <!---->
                    </div>
                  </div>
                </div>
              </div>
              <div class="section">
                <h3 class="tit03">이벤트와 관련 있는 요금제에요</h3>
                <div class="item_list ty02">
                  <ul>
                    <li>
                      <!---->
                      <!---->
                      <a href="/plan/plan-list/detail?mvnopPpId=CP0000001017&amp;mvnopPtnId=PC0000000003" class="">
                        <div class="plan_item">
                          <!---->
                          <div class="card_top">
                            <div class="partner">
                              <img src="https://api.dev.uplusmvno.com/umah/fo/s3/getImage?filename=2024/2/23/header-logo.png" alt="협력사 로고이미지.">
                              <div class="star">
                                <span class="blind">별점</span>
                                <span class="score">0.0</span>
                              </div>
                            </div>
                            <div class="beft">
                              <!---->
                              <!---->
                            </div>
                          </div>
                          <div class="card_mid">
                            <span class="plan_tit">5G 유심 (31GB+/통화기본)</span>
                            <strong class="plan_tit_sub">월 31GB + 1Mbps <button type="button" class="v-btn v-btn--elevated v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-elevated btn_tooltip" id="plan01-1" title="툴팁" aria-describedby="v-tooltip-5">
                                <span class="v-btn__overlay"></span>
                                <span class="v-btn__underlay"></span>
                                <!---->
                                <span class="v-btn__content" data-no-activator="">요금제 툴팁</span>
                                <!---->
                                <!---->
                              </button>
                            </strong>
                            <div class="plan_info">
                              <span class="phone">
                                <span class="blind">통화량</span>무제한 </span>
                              <span class="message">
                                <span class="blind">문자량</span>기본제공 </span>
                              <span class="cellular">
                                <span class="blind">통신기술</span>5G </span>
                            </div>
                          </div>
                          <!---->
                          <div class="v-overlay v-overlay--absolute v-overlay--contained v-theme--light v-locale--is-ltr v-tooltip" id="v-tooltip-1" role="tooltip" style="z-index: 2000;">
                            <!---->
                            <div class="v-overlay__content" target="[object HTMLButtonElement]" style="min-width: 0px; display: none;">
                              <div class="tooltip_content"> 데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요 </div>
                            </div>
                          </div>
                          <div class="combi">
                            <div class="combi_inner">
                              <strong>월 35,300원</strong>
                              <span class="period"></span>
                            </div>
                            <div class="card_bot">
                              <div class="paln_badge">
                                <button type="button" class="btn bag c01">
                                  <span class="blind">찜하기</span>0 </button>
                                <button type="button" class="btn bag c02"> 비교하기 </button>
                              </div>
                              <div class="gift_box">
                                <div class="bag_list">
                                  <ul>
                                    <li>
                                      <div class="bag_git">
                                        <img src="https://api.dev.uplusmvno.com/umah/fo/s3/getImage?filename=2024/2/7/img_gift01_스타벅스_.png" alt="11">
                                      </div>
                                    </li>
                                    <li>
                                      <div class="bag_git">
                                        <img src="https://api.dev.uplusmvno.com/umah/fo/s3/getImage?filename=2024/2/7/img_gift04_네이버_.png" alt="11">
                                      </div>
                                    </li>
                                    <li>
                                      <div class="bag_git">
                                        <img src="https://api.dev.uplusmvno.com/umah/fo/s3/getImage?filename=2024/2/7/img_gift03_일반_.png" alt="11">
                                      </div>
                                    </li>
                                    <!---->
                                  </ul>
                                </div>
                                <div class="acc_box">
                                  <button type="button" aria-expanded="false" class="btn_acc"> 사은품 최대 <span>3</span>개 </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!---->
                          <a aria-current="page" href="/benefit/event/detail" class="router-link-active router-link-exact-active link_list">
                            <span class="blind">요금제 상세페이지 이동</span>
                          </a>
                        </div>
                      </a>
                      <!---->
                      <br>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <!---->
                      <!---->
                      <a href="/plan/plan-list/detail?mvnopPpId=CP0000001018&amp;mvnopPtnId=PC0000000003" class="">
                        <div class="plan_item">
                          <!---->
                          <div class="card_top">
                            <div class="partner">
                              <img src="https://api.dev.uplusmvno.com/umah/fo/s3/getImage?filename=2024/2/23/header-logo.png" alt="협력사 로고이미지.">
                              <div class="star">
                                <span class="blind">별점</span>
                                <span class="score">0.0</span>
                              </div>
                            </div>
                            <div class="beft">
                              <!---->
                              <span class="bag card ty02">
                                <sup>+</sup>알파ONLY </span>
                            </div>
                          </div>
                          <div class="card_mid">
                            <span class="plan_tit">5G 유심 스페셜</span>
                            <strong class="plan_tit_sub">월 150GB + 5Mbps <button type="button" class="v-btn v-btn--elevated v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-elevated btn_tooltip" id="plan01-1" title="툴팁">
                                <span class="v-btn__overlay"></span>
                                <span class="v-btn__underlay"></span>
                                <!---->
                                <span class="v-btn__content" data-no-activator="">요금제 툴팁</span>
                                <!---->
                                <!---->
                              </button>
                            </strong>
                            <div class="plan_info">
                              <span class="phone">
                                <span class="blind">통화량</span>무제한 </span>
                              <span class="message">
                                <span class="blind">문자량</span>기본제공 </span>
                              <span class="cellular">
                                <span class="blind">통신기술</span>5G </span>
                            </div>
                          </div>
                          <!---->
                          <div class="v-overlay v-overlay--absolute v-overlay--contained v-theme--light v-locale--is-ltr v-tooltip" id="v-tooltip-3" role="tooltip" style="z-index: 2000;">
                            <!---->
                            <div class="v-overlay__content" target="[object HTMLButtonElement]" style="min-width: 0px; display: none;">
                              <div class="tooltip_content"> 데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요 </div>
                            </div>
                          </div>
                          <div class="combi">
                            <div class="combi_inner">
                              <strong>월 42,300원</strong>
                              <span class="period">6개월 이후 50,700원</span>
                            </div>
                            <div class="card_bot">
                              <div class="paln_badge">
                                <button type="button" class="btn bag c01">
                                  <span class="blind">찜하기</span>0 </button>
                                <button type="button" class="btn bag c02"> 비교하기 </button>
                              </div>
                              <div class="gift_box">
                                <div class="bag_list">
                                  <ul>
                                    <li>
                                      <div class="bag_git">
                                        <img src="https://api.dev.uplusmvno.com/umah/fo/s3/getImage?filename=2024/2/7/img_gift01_스타벅스_.png" alt="11">
                                      </div>
                                    </li>
                                    <li>
                                      <div class="bag_git">
                                        <img src="https://api.dev.uplusmvno.com/umah/fo/s3/getImage?filename=2024/2/7/img_gift04_네이버_.png" alt="11">
                                      </div>
                                    </li>
                                    <li>
                                      <div class="bag_git">
                                        <img src="https://api.dev.uplusmvno.com/umah/fo/s3/getImage?filename=2024/2/7/img_gift03_일반_.png" alt="11">
                                      </div>
                                    </li>
                                    <!---->
                                  </ul>
                                </div>
                                <div class="acc_box">
                                  <button type="button" aria-expanded="false" class="btn_acc"> 사은품 최대 <span>3</span>개 </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!---->
                          <a aria-current="page" href="/benefit/event/detail" class="router-link-active router-link-exact-active link_list">
                            <span class="blind">요금제 상세페이지 이동</span>
                          </a>
                        </div>
                      </a>
                      <!---->
                      <br>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <!---->
                      <!---->
                      <a href="/plan/plan-list/detail?mvnopPpId=CP0000001019&amp;mvnopPtnId=PC0000000003" class="">
                        <div class="plan_item">
                          <!---->
                          <div class="card_top">
                            <div class="partner">
                              <img src="https://api.dev.uplusmvno.com/umah/fo/s3/getImage?filename=2024/2/23/header-logo.png" alt="협력사 로고이미지.">
                              <div class="star">
                                <span class="blind">별점</span>
                                <span class="score">0.0</span>
                              </div>
                            </div>
                            <div class="beft">
                              <!---->
                              <span class="bag card ty02">
                                <sup>+</sup>알파ONLY </span>
                            </div>
                          </div>
                          <div class="card_mid">
                            <span class="plan_tit">5G 유심 스페셜 프로</span>
                            <strong class="plan_tit_sub">월 180GB + 10Mbps <button type="button" class="v-btn v-btn--elevated v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-elevated btn_tooltip" id="plan01-1" title="툴팁">
                                <span class="v-btn__overlay"></span>
                                <span class="v-btn__underlay"></span>
                                <!---->
                                <span class="v-btn__content" data-no-activator="">요금제 툴팁</span>
                                <!---->
                                <!---->
                              </button>
                            </strong>
                            <div class="plan_info">
                              <span class="phone">
                                <span class="blind">통화량</span>무제한 </span>
                              <span class="message">
                                <span class="blind">문자량</span>기본제공 </span>
                              <span class="cellular">
                                <span class="blind">통신기술</span>5G </span>
                            </div>
                          </div>
                          <!---->
                          <div class="v-overlay v-overlay--absolute v-overlay--contained v-theme--light v-locale--is-ltr v-tooltip" id="v-tooltip-5" role="tooltip" style="z-index: 2000;">
                            <!---->
                            <div class="v-overlay__content" target="[object HTMLButtonElement]" style="min-width: 0px; display: none;">
                              <div class="tooltip_content"> 데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요 </div>
                            </div>
                          </div>
                          <div class="combi">
                            <div class="combi_inner">
                              <strong>월 45,500원</strong>
                              <span class="period">6개월 이후 51,900원</span>
                            </div>
                            <div class="card_bot">
                              <div class="paln_badge">
                                <button type="button" class="btn bag c01">
                                  <span class="blind">찜하기</span>0 </button>
                                <button type="button" class="btn bag c02"> 비교하기 </button>
                              </div>
                              <div class="gift_box">
                                <div class="bag_list">
                                  <ul>
                                    <li>
                                      <div class="bag_git">
                                        <img src="https://api.dev.uplusmvno.com/umah/fo/s3/getImage?filename=2024/2/7/img_gift01_스타벅스_.png" alt="11">
                                      </div>
                                    </li>
                                    <li>
                                      <div class="bag_git">
                                        <img src="https://api.dev.uplusmvno.com/umah/fo/s3/getImage?filename=2024/2/7/img_gift04_네이버_.png" alt="11">
                                      </div>
                                    </li>
                                    <li>
                                      <div class="bag_git">
                                        <img src="https://api.dev.uplusmvno.com/umah/fo/s3/getImage?filename=2024/2/7/img_gift03_일반_.png" alt="11">
                                      </div>
                                    </li>
                                    <!---->
                                  </ul>
                                </div>
                                <div class="acc_box">
                                  <button type="button" aria-expanded="false" class="btn_acc"> 사은품 최대 <span>3</span>개 </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!---->
                          <a aria-current="page" href="/benefit/event/detail" class="router-link-active router-link-exact-active link_list">
                            <span class="blind">요금제 상세페이지 이동</span>
                          </a>
                        </div>
                      </a>
                      <!---->
                      <br>
                    </li>
                  </ul>
                  <!---->
                </div>
              </div>
              <div class="section">
                <h3 class="tit03">다른 이벤트도 둘러보세요</h3>
                <div class="swiper swiper-initialized swiper-horizontal cardSwiper swiper-backface-hidden isBeginning isEnd">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide swiper-slide-active" style="margin-right: 12px;">
                      <!---->
                      <!---->
                      <a href="/benefit/event/detail?mvnopEvetId=EV0000002003" rel="noopener noreferrer" target="_blank" class="link_list">
                        <span class="blind">이벤트 상세페이지 이동</span>
                        <div class="thum_item no_border">
                          <div class="thum_img">
                            <img src="https://api.dev.uplusmvno.com/umah/fo/s3/getImage?filename=/engn001/upload/PC요금제목록배너_20240123.171125.544.jpg" alt="이벤트썸네일alt">
                          </div>
                          <div class="thum_con">
                            <strong>BO 당첨자등록 테스트용이벤트2</strong>
                          </div>
                        </div>
                      </a>
                      <!---->
                      <!---->
                      <!---->
                    </div>
                  </div>
                  <!---->
                  <!---->
                  <!---->
                  <div class="swiper-navigation">
                    <div class="left">
                      <button type="button" class="swiper-button-prev swiper-button-disabled swiper-button-lock" disabled=""></button>
                    </div>
                    <div class="right">
                      <button type="button" class="swiper-button-next swiper-button-disabled swiper-button-lock" disabled=""></button>
                    </div>
                  </div>
                </div>
                <div class="btn_group">
                  <button type="button" class="btn md c05"> 목록보기 </button>
                </div>
              </div>
            </div>
          </div>
          <!---->
          <!---->
          <div class="aside_float">
            <div class="inner">
              <a href="/benefit/recommendation" class="btn_reco">
                <span>친구 추천</span>
              </a>
              <a href="/purchase/delivery" rel="noopener noreferrer" target="_blank" class="btn_deli">
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
                <a href="/footer/terms/usage" rel="noopener noreferrer" target="_blank">이용약관</a>
                <a href="/footer/terms/privacyProcess" rel="noopener noreferrer" target="_blank" class="policy">개인정보처리방침</a>
                <a href="/footer/terms/privacyUsage" rel="noopener noreferrer" target="_blank">개인정보이용내역</a>
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