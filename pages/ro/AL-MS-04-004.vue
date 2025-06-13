<template>
  <div class="AL-MS-04-004">
    <div class="container">
      <div class="content" id="content">
        <div class="section">
          <h2 class="ro-nav-title blind">해외로밍 신청</h2>
          <MyInfoMenu></MyInfoMenu>
          <div class="info-box-list type-product-detail">
            <div class="info-box type-round">
              <div class="info-group-wrap">
                <div class="info-group-1">
                  <div class="flag">
                    <span class="bag clr c01">인기</span>
                    <span class="bag clr c09">추천</span>
                  </div>
                  <div class="title">
                    <p>로밍패스 3GB</p>
                  </div>
                  <div class="title-description">
                    30일 동안 83개국에서 데이터를 다 써도 저속으로 무제한 이용 가능<br class="mobile_hide" />(기본제공
                    데이터 소진 시 최대 400kbps 속도로 이용 가능)
                  </div>
                </div>
                <!-- 2025-05-29 1748594633 (정C) 가격 삭제됨 -->
                <!-- <div class="info-group-2">
                  <div class="price">
                    <p class="info-1"><span class="price-number">24,580</span>원</p>
                    <p class="info-2">부가세포함</p>
                  </div>
                </div> -->
                <!-- //2025-05-29 1748594633 (정C) 가격 삭제됨 -->
              </div>
              <div class="info-group-3">
                <div class="detail">
                  <span class="detail-item period">
                    <span class="info-title">이용기간</span>
                    <span class="info-val">최대 30일</span>
                  </span>
                  <span class="detail-item data">
                    <span class="info-title">데이터</span>
                    <span class="info-val">3GB</span>
                  </span>
                  <span class="detail-item voice">
                    <span class="info-title">음성</span>
                    <span class="info-val">수신 : 무료</span>
                  </span>
                  <span class="detail-item country">
                    <span class="info-title">지원국가</span>
                    <span class="info-val">83개국</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <v-expansion-panels class="acd_bottom_notice" v-model="firstOpenPannel" multiple>
            <!-- 2025-05-19 1747637726 (정C) 첫 내용은 아코디언 기능 삭제 (로밍 요금제 상세, 로밍 부가서비스 상세) -->
            <v-expansion-panel class="acd_item" disabled>
              <div class="acd_title">
                <v-expansion-panel-title hide-actions>서비스 내용</v-expansion-panel-title>
              </div>
              <div class="acd_panel">
                <v-expansion-panel-text>
                  <div class="admin-insert-contents">
                    <div class="info-wrap">
                      <div class="banner-wrap type-only-image-1">
                        <div class="info-image pc_hide">
                          <a href="#">
                            <img src="/images/data/roaming/data-roaming-banner-mgc-1-mobile.png" alt="mgc커피" />
                          </a>
                        </div>
                        <div class="info-image mobile_hide">
                          <a href="#">
                            <img src="/images/data/roaming/data-roaming-banner-mgc-1-pc.png" alt="mgc커피" />
                          </a>
                        </div>
                      </div>
                      <!-- 텍스트 이미지 유형 -->
                      <!-- <div class="banner-wrap type-text-image-1">
                        <div class="info-group-text">
                          <p class="text-title">
                            알닷에서 로밍 신청하면 <strong>메가커피 아메리카노 100% 증정</strong>
                          </p>
                          <p class="text-title">알뜰폰 개통하고 로밍 신청하면 <strong>최대 1만원 혜택 추가</strong></p>
                          <p class="text-link"><a href="#">알닷만의 로밍 혜택 자세히 보기 ></a></p>
                        </div>
                        <div class="info-image pc_hide">
                          <img src="/images/data/roaming/data-roaming-banner-mgc-mobile.png" alt="mgc커피" />
                        </div>
                        <div class="info-image mobile_hide">
                          <img src="/images/data/roaming/data-roaming-banner-mgc-pc.png" alt="mgc커피" />
                        </div>
                      </div> -->
                    </div>
                    <ul class="info-wrap service admin-card-list">
                      <li class="item">
                        <div class="card-design-box type-round has-showdow last-image">
                          <div class="info-group-text">
                            <div class="title">데이터 3GB+1GB 쓸 수 있어요</div>
                            <div class="desc">
                              <p>
                                <span class="fc00"
                                  >데이터 3GB <br class="mobile_hide" />
                                  다 써도 최대 400Kbps</span
                                >
                                속도로 <br />
                                무한 사용이 가능해요.
                              </p>
                            </div>
                          </div>
                          <div class="info-image">
                            <i><img src="/images/roaming/icons/ico-roamgin-detail-1-1.png" alt="" /></i>
                          </div>
                        </div>
                      </li>
                      <li class="item">
                        <div class="card-design-box type-round has-showdow last-image">
                          <div class="info-group-text">
                            <div class="title">83개국에서 사용해요</div>
                            <div class="desc">
                              <p>
                                여행 기간에 맞춰 주요 <span class="fc00">83개국</span>에서<br />
                                이용할 수 있어요
                              </p>
                            </div>
                          </div>
                          <div class="info-image">
                            <i><img src="/images/roaming/icons/ico-roamgin-detail-1-2.png" alt="" /></i>
                          </div>
                        </div>
                      </li>
                      <li class="item">
                        <div class="card-design-box type-round has-showdow last-image">
                          <div class="info-group-text">
                            <div class="title">최대 30일간 이용해요</div>
                            <div class="desc">
                              <p>
                                <span class="fc00">고객이 설정한 사용 시작 시각</span>부터<br />
                                <span class="fc00">최대 30일간</span> 이용 후에<br class="mobile_hide" />
                                자동으로 만료돼요
                              </p>
                            </div>
                          </div>
                          <div class="info-image">
                            <i><img src="/images/roaming/icons/ico-roamgin-detail-1-3.png" alt="" /></i>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <dl class="info-wrap">
                      <dt class="info-title">
                        83개국에서 최대 30일 동안 데이터를 끊임없이 이용할 수 있는 요금제입니다.
                      </dt>
                      <dd>
                        <ul class="text-list bull">
                          <li>
                            <span class="fc01"
                              >해외에서 데이터는 무제한으로, 받는 음성전화 무료, 거는 음성전화 1.98원/초로 이용
                              가능</span
                            >
                          </li>
                          <li>
                            설정한 사용 기간 동안 해외에서 데이터 및 음성 전화를 한 번이라도 이용하는 경우 요금이
                            발생합니다.
                          </li>
                          <li>
                            해외로밍을 이용 중인 고객에게 한국에서 음성통화를 하면 한국 발신자에게는 국제 전화 요금이
                            청구되지 않습니다.
                          </li>
                          <li>
                            영상통화를 이용하거나 문자메시지를 보내는 경우 추가 요금이 발생합니다.
                            <ul class="text-list dash">
                              <li>문자 발신 : 건 당 150원 (VAT 제외)</li>
                              <li>문자 수신 : 무료</li>
                            </ul>
                          </li>
                          <li>
                            하루에 2개 이상의 국가에서 이용하는 경우, 마지막으로 사용한 국가의 시간을 기준으로 요금이
                            계산됩니다.
                          </li>
                          <li>
                            해외로밍 이용 요금은 국내 통신료와 별도의 항목으로 구분되어 1개월 이후 청구서에 반영됩니다.
                          </li>
                          <li>
                            KT 114 직접연결수수료 및 통화료, KT 114 전화번호 안내 서비스, 수신자부담(콜렉트콜),
                            소액결제이용료, 060 등 정보이용료, 유료부가서비스 이용료 등은 별도 청구됩니다.
                          </li>
                          <li>
                            불법적, 상업적, 비정상적 음성 발신 유발을 억제하고, 이에 따른 다른 가입자의 피해를
                            방지하고자 다음의 경우에 해당 할 경우,해당 일 이후 상품 해지 및 당월 상품 가입이 제한됩니다.
                            <ul class="text-list dash">
                              <li>음성 발신이 일 600 분을 초과할 경우</li>
                              <li>음성 발신의 상대방 착신번호가 일 100 회선을 초과할 경우</li>
                            </ul>
                          </li>
                        </ul>
                      </dd>
                    </dl>
                  </div>
                </v-expansion-panel-text>
              </div>
            </v-expansion-panel>
            <!-- //2025-05-19 1747637726 (정C) 첫 내용은 아코디언 기능 삭제 (로밍 요금제 상세, 로밍 부가서비스 상세) -->
            <v-expansion-panel class="acd_item" disabled>
              <div class="acd_title">
                <v-expansion-panel-title hide-actions>가입 안내</v-expansion-panel-title>
              </div>
              <div class="acd_panel">
                <v-expansion-panel-text>
                  <div class="admin-insert-contents">
                    <ul class="info-wrap join admin-card-list">
                      <li class="item">
                        <div class="card-design-box type-round has-showdow first-image">
                          <div class="info-image">
                            <i><img src="/images/roaming/icons/ico-roaming-detail-2-1.png" alt="" /></i>
                          </div>
                          <div class="info-group-text">
                            <div class="title">알닷 홈페이지</div>
                            <div class="desc">
                              원하는 요금제를 선택하고<br class="mobile_hide" />
                              바로 신청하기
                            </div>
                          </div>
                          <div class="info-link-text">
                            <NuxtLink to="/" class="link-text-right-22">알닷 해외로밍 상품 보기</NuxtLink>
                          </div>
                        </div>
                      </li>
                      <li class="item">
                        <div class="card-design-box type-round has-showdow first-image">
                          <div class="info-image">
                            <i><img src="/images/roaming/icons/ico-roaming-detail-2-2.png" alt="" /></i>
                          </div>
                          <div class="info-group-text">
                            <div class="title">카카오 로밍 상담</div>
                            <div class="desc">
                              24시간 동안<br class="mobile_hide" />
                              언제든 편하게 신청하기
                            </div>
                          </div>
                          <div class="info-link-text">
                            <NuxtLink to="/" class="link-text-right-22">카카오 로밍상담 채널 바로가기</NuxtLink>
                          </div>
                        </div>
                      </li>
                      <li class="item">
                        <div class="card-design-box type-round has-showdow first-image">
                          <div class="info-image">
                            <i><img src="/images/roaming/icons/ico-roaming-detail-2-3.png" alt="" /></i>
                          </div>
                          <div class="info-group-text">
                            <div class="title">고객센터</div>
                            <div class="desc">
                              가입하신 파트너사의<br class="mobile_hide" />
                              고객센터를 통해 가입하기
                            </div>
                          </div>
                          <div class="info-link-text">
                            <NuxtLink to="/" class="link-text-right-22">파트너사 정보 확인하기</NuxtLink>
                          </div>
                        </div>
                      </li>
                      <li class="item">
                        <div class="card-design-box type-round has-showdow first-image">
                          <div class="info-image">
                            <i><img src="/images/roaming/icons/ico-roaming-detail-2-4.png" alt="" /></i>
                          </div>
                          <div class="info-group-text">
                            <div class="title">공항 로밍 센터</div>
                            <div class="desc">
                              인천공항, 김포공항, 김해공항<br class="mobile_hide" />
                              로밍 센터에서 직접 신청하기
                            </div>
                          </div>
                          <div class="info-link-text">
                            <NuxtLink to="/" class="link-text-right-22">공항 로밍 센터 위치 안내</NuxtLink>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <!-- <dl class="info-wrap">
                      <dt class="info-title">
                        83개국에서 최대 30일 동안 데이터를 끊임없이 이용할 수 있는 요금제입니다.
                      </dt>
                      <dd>
                        <ul class="text-list bull">
                          <li>
                            <span class="fc01"
                              >해외에서 데이터는 무제한으로, 받는 음성전화 무료, 거는 음성전화 1.98원/초로 이용
                              가능</span
                            >
                          </li>
                          <li>
                            설정한 사용 기간 동안 해외에서 데이터 및 음성 전화를 한 번이라도 이용하는 경우 요금이
                            발생합니다.
                          </li>
                          <li>
                            해외로밍을 이용 중인 고객에게 한국에서 음성통화를 하면 한국 발신자에게는 국제 전화 요금이
                            청구되지 않습니다.
                          </li>
                          <li>
                            영상통화를 이용하거나 문자메시지를 보내는 경우 추가 요금이 발생합니다.
                            <ul class="text-list dash">
                              <li>문자 발신 : 건 당 150원 (VAT 제외)</li>
                              <li>문자 수신 : 무료</li>
                            </ul>
                          </li>
                          <li>
                            하루에 2개 이상의 국가에서 이용하는 경우, 마지막으로 사용한 국가의 시간을 기준으로 요금이
                            계산됩니다.
                          </li>
                          <li>
                            해외로밍 이용 요금은 국내 통신료와 별도의 항목으로 구분되어 1개월 이후 청구서에 반영됩니다.
                          </li>
                          <li>
                            KT 114 직접연결수수료 및 통화료, KT 114 전화번호 안내 서비스, 수신자부담(콜렉트콜),
                            소액결제이용료, 060 등 정보이용료, 유료부가서비스 이용료 등은 별도 청구됩니다.
                          </li>
                          <li>
                            불법적, 상업적, 비정상적 음성 발신 유발을 억제하고, 이에 따른 다른 가입자의 피해를
                            방지하고자 다음의 경우에 해당 할 경우,해당 일 이후 상품 해지 및 당월 상품 가입이 제한됩니다.
                            <ul class="text-list dash">
                              <li>음성 발신이 일 600 분을 초과할 경우</li>
                              <li>음성 발신의 상대방 착신번호가 일 100 회선을 초과할 경우</li>
                            </ul>
                          </li>
                        </ul>
                      </dd>
                    </dl> -->
                  </div>
                </v-expansion-panel-text>
              </div>
            </v-expansion-panel>

            <v-expansion-panel class="acd_item">
              <div class="acd_title">
                <v-expansion-panel-title>이용안내</v-expansion-panel-title>
              </div>
              <div class="acd_panel">
                <v-expansion-panel-text>
                  <div class="info-wrap">
                    <ul class="text-list bull">
                      <li>
                        기본 제공되는 데이터를 모두 사용한 경우, 데이터는 400kbps로 제한된 속도로 계속 이용 가능합니다.
                      </li>
                      <li>
                        고객님께서 설정한 시작일로부터 최대 30일이 지나면 로밍패스 요금제는 자동 만료되며, 로밍 데이터와
                        음성 혜택도 자동으로 종료됩니다.
                      </li>
                      <li>
                        로밍패스는 83개국에서 이용 가능하며 LG유플러스와 계약을 맺은 통신 사업자의 네트워크만 이용할 수
                        있습니다.
                      </li>
                      <li>가입 전 요금제 적용 국가를 확인 부탁드립니다.</li>
                      <li>다른 해외 로밍 요금제와 중복으로 이용할 수 없습니다.</li>
                      <li>선불 휴대폰 이용 고객은 가입할 수 없습니다.</li>
                      <li>
                        공항 및 터미널 해외 로밍 고객센터를 방문하여 요금제에 가입하는 경우 명의자 확인을 위한 신분증이
                        필요합니다.
                      </li>
                      <li>
                        불법적, 상업적, 비정상적 음성 발신 유발을 억제하고, 이에 따른 다른 가입자의 피해를 방지하고자
                        다음의 경우에 해당 할 경우,해당 일 이후 상품 해지 및 당월 상품 가입이 제한됩니다.
                        <ul class="text-list dash">
                          <li>음성 발신이 일 600 분을 초과할 경우</li>
                          <li>음성 발신의 상대방 착신 번호가 일 100 회선을 초과할 경우</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </v-expansion-panel-text>
              </div>
            </v-expansion-panel>

            <v-expansion-panel class="acd_item">
              <div class="acd_title">
                <v-expansion-panel-title>요금안내</v-expansion-panel-title>
              </div>
              <div class="acd_panel">
                <v-expansion-panel-text>
                  <div class="info-wrap">
                    <ul class="text-list bull">
                      <li>
                        사용하는 시점부터 현지 수도 시간 1일 기준으로 데이터 및 음성 전화를 한 번이라도 이용하는 경우
                        요금이 발생합니다.
                      </li>
                      <li>
                        해외 로밍을 이용 중인 고객에게 한국에서 음성통화를 하면 한국 발신자에게는 국제 전화 요금이
                        청구되지 않습니다.
                      </li>
                      <li>
                        영상통화를 이용하거나 문자메시지를 보내는 경우 추가 요금이 발생합니다.
                        <ul class="text-list dash">
                          <li>문자 발신: 건 당 150원 (VAT 제외)</li>
                          <li>문자 수신: 무료</li>
                        </ul>
                      </li>
                      <li>
                        해외로밍 이용 요금은 국내 통신료와 별도의 항목으로 구분되어 1개월 이후 청구서에 반영됩니다.
                      </li>
                      <li>
                        KT 114 직접 연결 수수료 및 통화료, KT 114 전화번호 안내 서비스, 수신자 부담(콜렉트콜), 소액결제
                        이용료, 060 등 정보이용료, 유료 부가서비스 이용료 등은 별도 청구됩니다.
                      </li>
                    </ul>
                  </div>
                </v-expansion-panel-text>
              </div>
            </v-expansion-panel>

            <v-expansion-panel class="acd_item">
              <div class="acd_title">
                <v-expansion-panel-title>요금제 적용 국가</v-expansion-panel-title>
              </div>
              <div class="acd_panel">
                <v-expansion-panel-text>
                  <div class="info-wrap">
                    <ul class="text-list bull">
                      <li>이동 통신망 : LTE 및 3G</li>
                    </ul>
                    <div class="tag-contents-wrap">
                      <div class="tag-header">
                        <!-- 2025-05-20 1747699475 (정C) 매개변수 값 수정 -->
                        <div class="scroll-wrap">
                          <button class="item on" onclick="onTagShoHideHandler(this, '.item')">
                            아시아/오세아니아
                          </button>
                          <button class="item" onclick="onTagShoHideHandler(this, '.item')">미주</button>
                          <button class="item" onclick="onTagShoHideHandler(this, '.item')">유럽</button>
                          <button class="item" onclick="onTagShoHideHandler(this, '.item')">중동</button>
                          <button class="item" onclick="onTagShoHideHandler(this, '.item')">아프리카</button>
                        </div>
                        <!-- //2025-05-20 1747699475 (정C) 매개변수 값 수정 -->
                      </div>
                      <div class="contents">
                        <div class="table-wrap tag">
                          <div class="scroll-wrap">
                            <div class="item on">
                              <table class="table table-bordered">
                                <caption>
                                  요금제 적용 국가 : 아시아/오세아니아 국가, 현지 통신사업자명, 현지 통신사업자 번호,
                                  국가, 현지 통신사업자명, 현지 통신사업자 번호로 이루어진 표
                                </caption>
                                <colgroup>
                                  <col style="width: 26%" />
                                  <col style="width: 37%" />
                                  <col style="width: 37%" />
                                </colgroup>
                                <thead role="rowgroup" class="">
                                  <tr role="row" class="">
                                    <th role="columnheader" scope="col" class="">국가</th>
                                    <th role="columnheader" scope="col" class="">
                                      현지<br class="pc_hide" />
                                      통신사업자명
                                    </th>
                                    <th role="columnheader" scope="col" class="">
                                      현지 통신사업자<br class="pc_hide" />
                                      번호
                                    </th>
                                  </tr>
                                </thead>
                                <tbody role="rowgroup">
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">네팔</td>
                                    <td rowspan="1" role="cell" class="">Ncell</td>
                                    <td role="cell" class="">
                                      <p>429/02</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="3" role="cell" class="">대만</td>
                                    <td rowspan="1" role="cell" class="">Chunghwa</td>
                                    <td role="cell" class="">
                                      <p>466/92</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="2" role="cell" class="">TaiwanMobile</td>
                                    <td role="cell" class="">
                                      <p>466/93</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>466/97</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">라오스</td>
                                    <td rowspan="1" role="cell" class="">Unitel</td>
                                    <td role="cell" class="">
                                      <p>457/03</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="3" role="cell" class="">마카오</td>
                                    <td rowspan="2" role="cell" class="">CTM</td>
                                    <td role="cell" class="">
                                      <p>455/04</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>455/01</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">Smartone</td>
                                    <td role="cell" class="">
                                      <p>455/00</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="2" role="cell" class="">말레이시아</td>
                                    <td rowspan="1" role="cell" class="">DiGi</td>
                                    <td role="cell" class="">
                                      <p>502/16</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">MAXIS</td>
                                    <td role="cell" class="">
                                      <p>502/12</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="2" role="cell" class="">몽골</td>
                                    <td rowspan="1" role="cell" class="">Mobicom</td>
                                    <td role="cell" class="">
                                      <p>428/99</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">Unitel</td>
                                    <td role="cell" class="">
                                      <p>428/88</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="2" role="cell" class="">방글라데시</td>
                                    <td rowspan="1" role="cell" class="">Banglalink(Orascom)</td>
                                    <td role="cell" class="">
                                      <p>470/03</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">Grameenphone</td>
                                    <td role="cell" class="">
                                      <p>470/01</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="3" role="cell" class="">베트남</td>
                                    <td rowspan="1" role="cell" class="">Mobifone</td>
                                    <td role="cell" class="">
                                      <p>452/01</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">Viettel</td>
                                    <td role="cell" class="">
                                      <p>452/04</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">Vinaphone</td>
                                    <td role="cell" class="">
                                      <p>452/02</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="2" role="cell" class="">스리랑카</td>
                                    <td rowspan="1" role="cell" class="">Dialog</td>
                                    <td role="cell" class="">
                                      <p>413/02</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">Mobitel</td>
                                    <td role="cell" class="">
                                      <p>413/01</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="4" role="cell" class="">싱가포르</td>
                                    <td rowspan="2" role="cell" class="">Singtel</td>
                                    <td role="cell" class="">
                                      <p>525/02</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>525/01</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="2" role="cell" class="">StarHub</td>
                                    <td role="cell" class="">
                                      <p>525/08</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>525/05</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">우즈베키스탄</td>
                                    <td rowspan="1" role="cell" class="">Unitel(Beeline)</td>
                                    <td role="cell" class="">
                                      <p>434/04</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="45" role="cell" class="">인도</td>
                                    <td rowspan="23" role="cell" class="">Bharti Airtel</td>
                                    <td role="cell" class="">
                                      <p>405/52</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/53</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>404/93</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>404/10</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>404/16</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>404/02</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/55</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>404/40</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>404/94</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>404/03</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>404/97</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>404/98</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/51</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>404/70</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>404/31</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>404/49</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>404/96</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>404/90</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>404/95</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>404/92</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/54</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>404/45</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/56</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="22" role="cell" class="">Reliance Jio</td>
                                    <td role="cell" class="">
                                      <p>405/864</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/863</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/856</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/869</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/873</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/870</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/872</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/866</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/861</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/854</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/871</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/865</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/855</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/868</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/862</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/858</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/840</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/860</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/874</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/857</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/859</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>405/867</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="3" role="cell" class="">인도네시아</td>
                                    <td rowspan="2" role="cell" class="">Indosat</td>
                                    <td role="cell" class="">
                                      <p>510/21</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>510/01</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">Telkomsel</td>
                                    <td role="cell" class="">
                                      <p>510/10</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="4" role="cell" class="">일본</td>
                                    <td rowspan="1" role="cell" class="">Docomo</td>
                                    <td role="cell" class="">
                                      <p>440/10</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="2" role="cell" class="">KDDI</td>
                                    <td role="cell" class="">
                                      <p>440/50</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>440/51</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">Soft Bank</td>
                                    <td role="cell" class="">
                                      <p>440/20</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="6" role="cell" class="">중국</td>
                                    <td rowspan="3" role="cell" class="">China Mobile</td>
                                    <td role="cell" class="">
                                      <p>460/07</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>460/00</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>460/02</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">China Telecom</td>
                                    <td role="cell" class="">
                                      <p>460/11</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="2" role="cell" class="">ChinaUnicom</td>
                                    <td role="cell" class="">
                                      <p>460/09</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>460/01</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="2" role="cell" class="">카자흐스탄</td>
                                    <td rowspan="1" role="cell" class="">Beeline(KaR-TeL)</td>
                                    <td role="cell" class="">
                                      <p>401/01</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">Tele2</td>
                                    <td role="cell" class="">
                                      <p>401/77</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="3" role="cell" class="">캄보디아</td>
                                    <td rowspan="1" role="cell" class="">Metfone</td>
                                    <td role="cell" class="">
                                      <p>456/08</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="2" role="cell" class="">Smart</td>
                                    <td role="cell" class="">
                                      <p>456/06</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>456/02</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">키르기즈스탄</td>
                                    <td rowspan="1" role="cell" class="">Beeline</td>
                                    <td role="cell" class="">
                                      <p>437/01</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="4" role="cell" class="">태국</td>
                                    <td rowspan="2" role="cell" class="">AIS</td>
                                    <td role="cell" class="">
                                      <p>520/01</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>520/03</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="2" role="cell" class="">DTAC</td>
                                    <td role="cell" class="">
                                      <p>520/05</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>520/18</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">파키스탄</td>
                                    <td rowspan="1" role="cell" class="">Mobilink</td>
                                    <td role="cell" class="">
                                      <p>410/01</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="2" role="cell" class="">필리핀</td>
                                    <td rowspan="1" role="cell" class="">Globe</td>
                                    <td role="cell" class="">
                                      <p>515/02</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">Smart</td>
                                    <td role="cell" class="">
                                      <p>515/03</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="8" role="cell" class="">홍콩</td>
                                    <td rowspan="7" role="cell" class="">CSL</td>
                                    <td role="cell" class="">
                                      <p>454/10</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>454/09</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>454/02</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>454/16</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>454/00</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>454/18</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>454/19</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">Smartone</td>
                                    <td role="cell" class="">
                                      <p>454/06</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="2" role="cell" class="">미얀마</td>
                                    <td rowspan="1" role="cell" class="">MPT</td>
                                    <td role="cell" class="">
                                      <p>414/01</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">Telenor</td>
                                    <td role="cell" class="">
                                      <p>414/06</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="4" role="cell" class="">괌</td>
                                    <td rowspan="2" role="cell" class="">DocomoPacific</td>
                                    <td role="cell" class="">
                                      <p>310/370</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>310/470</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="2" role="cell" class="">IT&amp;E</td>
                                    <td role="cell" class="">
                                      <p>310/032</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>310/110</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="2" role="cell" class="">뉴질랜드</td>
                                    <td rowspan="1" role="cell" class="">2degrees</td>
                                    <td role="cell" class="">
                                      <p>530/24</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">Telecom</td>
                                    <td role="cell" class="">
                                      <p>530/05</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="4" role="cell" class="">사이판</td>
                                    <td rowspan="2" role="cell" class="">DocomoPacific</td>
                                    <td role="cell" class="">
                                      <p>310/470</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>310/370</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="2" role="cell" class="">IT&amp;E</td>
                                    <td role="cell" class="">
                                      <p>310/110</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td role="cell" class="">
                                      <p>310/032</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="2" role="cell" class="">호주</td>
                                    <td rowspan="1" role="cell" class="">Optus</td>
                                    <td role="cell" class="">
                                      <p>505/02</p>
                                    </td>
                                  </tr>
                                  <tr role="row" class="">
                                    <td rowspan="1" role="cell" class="">Telstra</td>
                                    <td role="cell" class="">
                                      <p>505/01</p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div class="item">테이블2</div>
                            <div class="item">테이블3</div>
                            <div class="item">테이블4</div>
                            <div class="item">테이블5</div>
                            <div class="item">테이블6</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-expansion-panel-text>
              </div>
            </v-expansion-panel>

            <v-expansion-panel class="acd_item">
              <div class="acd_title">
                <v-expansion-panel-title>할인사업자 수동 설정 안내</v-expansion-panel-title>
              </div>
              <div class="acd_panel">
                <v-expansion-panel-text>
                  <div class="info-wrap">
                    <ul class="text-list bull">
                      <li>해외 로밍 이용 시 LG유플러스와 계약한 현지 사업자 통신망으로 자동 연결됩니다.</li>
                      <li>
                        네트워크 상황에 따라 연결이 원활하지 않은 경우 아래와 같은 방법으로 사업자를 직접 선택할 수
                        있습니다.
                      </li>
                    </ul>
                    <div class="table-wrap tag mgt16">
                      <table class="table table-bordered">
                        <colgroup>
                          <col width="160" />
                          <col width="*" />
                        </colgroup>
                        <tbody>
                          <tr>
                            <td class="ta-c">
                              <img src="/images/roaming/icons/ico-roaming-detail-3-1.png" alt="Android" />
                            </td>
                            <td class="ta-l">
                              <p>LG폰, 삼성폰 등 안드로이드폰</p>
                              <p class="mgt6 fc-gray-200">
                                휴대폰 → 설정 → 해외로밍 → 해외 이동통신사 설정 → ‘이동통신사 자동 설정’ 끄기를 누른 후
                                하단에 보이는 해외사업자를 직접 선택하여 이용할 수 있습니다.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td class="ta-c">
                              <img src="/images/roaming/icons/ico-roaming-detail-3-2.png" alt="IOS" />
                            </td>
                            <td class="ta-l">
                              <p>애플 아이폰</p>
                              <p class="mgt6 fc-gray-200">
                                휴대폰 → 설정 → 네트워크 사업자 → ‘네트워크 사업자’의 ‘자동’ 끄기를 누른 후 하단에
                                보이는 해외사업자를 직접 선택하여 이용할 수 있습니다.
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </v-expansion-panel-text>
              </div>
            </v-expansion-panel>

            <v-expansion-panel class="acd_item">
              <div class="acd_title">
                <v-expansion-panel-title>자주하는 질문</v-expansion-panel-title>
              </div>
              <div class="acd_panel">
                <v-expansion-panel-text>
                  <div class="info-wrap">
                    <v-expansion-panels class="type-accordion-faq" multiple>
                      <v-expansion-panel class="acd_item">
                        <div class="inner-panner-wrap">
                          <div class="acd_title">
                            <v-expansion-panel-title>
                              <div class="title-text-wrap">
                                <p class="title-text">휴대폰 사용이 불가해서 상담사와 연결하여 개통하고 싶어요</p>
                                <p class="bag-list-wrap">
                                  <!-- 2025-05-20 1747699475 (정C) 텍스트 및 클래스 수정 -->
                                  <span class="bag clr c10">로밍</span>
                                  <span class="bag only-text">공통</span>
                                </p>
                              </div>
                            </v-expansion-panel-title>
                          </div>
                          <div class="acd_panel">
                            <v-expansion-panel-text>
                              <div class="info-wrap">
                                해당 내용은 번호이동 시도가 없었다는 뜻으로 번호이동 사전인증을 시도하여 오류를 발생시킨
                                후에 아래와 같이 번호이동 중립기관에 제한기간 내에 번호이동 신청서를 제출해야합니다.
                                따라서 번호이동 사전인증을 시도 후 제출해주시기 바랍니다.<br /><br />
                                90일 이내 번호이동을 신청하는 경우, 아래의 절차를 먼저 거쳐주셔야 번호이동이
                                가능합니다.<br /><br />
                                1. 제한기간이내 번호이동 신청서 작성<br />
                                - 한국통신사업자연합회(KTOA) 홈페이지 내 양식 다운로드<br />
                                &nbsp;- 다운로드 URL : ktoa.or.kr<br /><br />2. 3개월 이내 번호이동 제한 해제 요청<br />-
                                작성완료 신청서+신분증 (주민등록번호 뒷자리 마스킹) E-mail 발송<br />- E-mail :
                                rnp@ktoa.or.kr<br /><br />
                                3.번호이동 제한 해제 확인<br />
                                - 중립기관 해제 완료 답변 확인<br /><br />
                                중립기관 해체 완료 답변 받으시고, 계속 진행하시기 바랍니다.
                              </div>
                            </v-expansion-panel-text>
                          </div>
                        </div>
                      </v-expansion-panel>

                      <v-expansion-panel class="acd_item">
                        <div class="inner-panner-wrap">
                          <div class="acd_title">
                            <v-expansion-panel-title>
                              <div class="title-text-wrap">
                                <p class="title-text">휴대폰 사용이 불가해서 상담사와 연결하여 개통하고 싶어요</p>
                                <p class="bag-list-wrap">
                                  <!-- 2025-05-20 1747699475 (정C) 텍스트 및 클래스 수정 -->
                                  <span class="bag clr c10">로밍</span>
                                  <span class="bag only-text">공통</span>
                                </p>
                              </div>
                            </v-expansion-panel-title>
                          </div>
                          <div class="acd_panel">
                            <v-expansion-panel-text>
                              <div class="info-wrap">
                                해당 내용은 번호이동 시도가 없었다는 뜻으로 번호이동 사전인증을 시도하여 오류를 발생시킨
                                후에 아래와 같이 번호이동 중립기관에 제한기간 내에 번호이동 신청서를 제출해야합니다.
                                따라서 번호이동 사전인증을 시도 후 제출해주시기 바랍니다.<br /><br />
                                90일 이내 번호이동을 신청하는 경우, 아래의 절차를 먼저 거쳐주셔야 번호이동이
                                가능합니다.<br /><br />
                                1. 제한기간이내 번호이동 신청서 작성<br />
                                - 한국통신사업자연합회(KTOA) 홈페이지 내 양식 다운로드<br />&nbsp;- 다운로드 URL :
                                ktoa.or.kr<br /><br />2. 3개월 이내 번호이동 제한 해제 요청<br />- 작성완료
                                신청서+신분증 (주민등록번호 뒷자리 마스킹) E-mail 발송<br />- E-mail : rnp@ktoa.or.kr<br /><br />
                                3.번호이동 제한 해제 확인<br />
                                - 중립기관 해제 완료 답변 확인<br /><br />
                                중립기관 해체 완료 답변 받으시고, 계속 진행하시기 바랍니다.
                              </div>
                            </v-expansion-panel-text>
                          </div>
                        </div>
                      </v-expansion-panel>

                      <v-expansion-panel class="acd_item">
                        <div class="inner-panner-wrap">
                          <div class="acd_title">
                            <v-expansion-panel-title>
                              <div class="title-text-wrap">
                                <p class="title-text">휴대폰 사용이 불가해서 상담사와 연결하여 개통하고 싶어요</p>
                                <p class="bag-list-wrap">
                                  <!-- 2025-05-20 1747699475 (정C) 텍스트 및 클래스 수정 -->
                                  <span class="bag clr c10">로밍</span>
                                  <span class="bag only-text">공통</span>
                                </p>
                              </div>
                            </v-expansion-panel-title>
                          </div>
                          <div class="acd_panel">
                            <v-expansion-panel-text>
                              <div class="info-wrap">
                                해당 내용은 번호이동 시도가 없었다는 뜻으로 번호이동 사전인증을 시도하여 오류를 발생시킨
                                후에 아래와 같이 번호이동 중립기관에 제한기간 내에 번호이동 신청서를 제출해야합니다.
                                따라서 번호이동 사전인증을 시도 후 제출해주시기 바랍니다.<br /><br />
                                90일 이내 번호이동을 신청하는 경우, 아래의 절차를 먼저 거쳐주셔야 번호이동이
                                가능합니다.<br /><br />
                                1. 제한기간이내 번호이동 신청서 작성<br />
                                - 한국통신사업자연합회(KTOA) 홈페이지 내 양식 다운로드<br /> &nbsp;- 다운로드 URL :
                                ktoa.or.kr<br /><br />2. 3개월 이내 번호이동 제한 해제 요청<br />- 작성완료
                                신청서+신분증 (주민등록번호 뒷자리 마스킹) E-mail 발송<br />- E-mail : rnp@ktoa.or.kr<br /><br />
                                3.번호이동 제한 해제 확인<br />
                                - 중립기관 해제 완료 답변 확인<br /><br />
                                중립기관 해체 완료 답변 받으시고, 계속 진행하시기 바랍니다.
                              </div>
                            </v-expansion-panel-text>
                          </div>
                        </div>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </div>
                </v-expansion-panel-text>
              </div>
            </v-expansion-panel>

            <v-expansion-panel class="acd_item">
              <div class="acd_title">
                <v-expansion-panel-title>추천 부가서비스</v-expansion-panel-title>
              </div>
              <div class="acd_panel">
                <v-expansion-panel-text>
                  <div class="info-wrap">
                    <div class="recommend-extra-service-list">
                      <!-- <swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange"> -->
                      <swiper :slides-per-view="'auto'" :space-between="isMobile ? 8 : 10" :free-mode="true">
                        <swiper-slide>
                          <div class="card-item">
                            <div class="flag">
                              <span class="bag clr c01">인기</span>
                              <span class="bag clr c09">추천</span>
                            </div>
                            <div class="title">
                              <p>
                                <NuxtLink to="/">로밍패스 3GB</NuxtLink>
                              </p>
                            </div>
                            <div class="detail">
                              <span class="detail-item period">
                                <span class="info-title blind">이용기간</span>
                                <span class="info-val">최대 30일</span>
                              </span>
                              <span class="detail-item data">
                                <span class="info-title blind">데이터</span>
                                <span class="info-val">3GB</span>
                              </span>
                              <span class="detail-item country">
                                <span class="info-title blind">지원국가</span>
                                <span class="info-val">83개국</span>
                              </span>
                            </div>
                            <p class="info-1"><span class="price-number">14,900</span>원</p>
                            <p class="info-2" data-v-4a5f9f85="">(부가세 포함)</p>
                          </div>
                        </swiper-slide>
                        <swiper-slide>
                          <div class="card-item">
                            <div class="flag">
                              <span class="bag clr c01">인기</span>
                              <span class="bag clr c09">추천</span>
                            </div>
                            <div class="title">
                              <p>
                                <NuxtLink to="/">음성 로밍 차단</NuxtLink>
                              </p>
                            </div>
                            <div class="detail">
                              <span class="detail-item">
                                <span class="info-val">음성 로밍을 차단해 주는 서비스</span>
                              </span>
                            </div>
                            <p class="info-1"><span class="price-number">14,900</span>원</p>
                            <p class="info-2" data-v-4a5f9f85="">(부가세 포함)</p>
                          </div>
                        </swiper-slide>
                        <swiper-slide>
                          <div class="card-item">
                            <div class="flag">
                              <span class="bag clr c01">인기</span>
                              <span class="bag clr c09">추천</span>
                            </div>
                            <div class="title">
                              <p>
                                <NuxtLink to="/">로밍패스 3GB</NuxtLink>
                              </p>
                            </div>
                            <div class="detail">
                              <span class="detail-item period">
                                <span class="info-title blind">이용기간</span>
                                <span class="info-val">최대 30일</span>
                              </span>
                              <span class="detail-item data">
                                <span class="info-title blind">데이터</span>
                                <span class="info-val">3GB</span>
                              </span>
                              <span class="detail-item voice">
                                <span class="info-title blind">음성</span>
                                <span class="info-val">수신 : 무료</span>
                              </span>
                            </div>
                            <p class="info-1"><span class="price-number">14,900</span>원</p>
                            <p class="info-2" data-v-4a5f9f85="">(부가세 포함)</p>
                          </div>
                        </swiper-slide>
                      </swiper>
                    </div>
                  </div>
                </v-expansion-panel-text>
              </div>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div class="bottom_float">
          <div class="inner">
            <div class="plan_join">
              <!-- CASE 1-1: 버튼이 2개일 경우, btn-nth-2 추가 -->
              <!-- <div class="join_info btn-nth-2"> -->

              <!-- CASE 1-2: 버튼이 1개일 경우 -->
              <div class="join_info">
                <div class="info-group-1">
                  <!-- CASE 2-1: 무료일 경우 -->
                  <!-- <p class="info-1"><span class="price-number">무료</span></p> -->

                  <!-- CASE 2-2: 무료가 아닐 경우 -->
                  <p class="info-1"><span class="text">일</span><span class="price-number">14,900</span>원</p>
                  <p class="info-2">(부가세 포함)</p>
                </div>
                <div class="info-group-2">
                  <div class="btn-area">
                    <!-- <button type="button" class="btn-rounded white">변경하기</button> -->
                    <button type="button" class="btn-rounded primary">해지하기</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LayoutOptions } from "@/types/layout";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
window.onTagShoHideHandler = htmlUI.tagShoHideHandler;

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: "",
  floatMenu: "",
  title: "해외로밍 상세",
  wrapClass: "selfcare roaming",
});

const isMobile = ref(front.isMobile());

onMounted(() => {
  emit("setLayout", layout);
});

const firstOpenPannel = ref([0, 1]);
// const firstOpenPannelFaq = ref([0]);
</script>

<style scoped lang="scss">
@use "@/assets/scss/pages/ro/page-al-ms-04-004.scss" as *;
</style>
