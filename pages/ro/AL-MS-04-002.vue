<template>
  <div class="AL-MS-04-002">
    <div class="container">
      <div class="content" id="content">
        <div class="section">
          <h2 class="ro-nav-title">로밍 이용 방법을 알려드려요</h2>
          <Tab class="type-outline" :titles="['해외 로밍이란?', '해외 데이터 안심옵션', '이용방법', '자주하는 질문']">
            <template #content1>
              <div class="contents-area">콘텐츠 영역1</div>
              <div class="inner-section">
                <v-expansion-panels class="acd_bottom_notice" v-model="firstOpenPannel" multiple>
                  <v-expansion-panel class="acd_item">
                    <div class="acd_title">
                      <v-expansion-panel-title>서비스 안내</v-expansion-panel-title>
                    </div>
                    <div class="acd_panel">
                      <v-expansion-panel-text>
                        <dl class="info-wrap">
                          <dt class="info-title">데이터</dt>
                          <dd>
                            <ul class="text-list bull">
                              <li>
                                요금제에 가입하지 않고 해외에서 데이터를 사용하면 1KB당 부가세 포함 0.55원의 요금이
                                부과됩니다.
                              </li>
                            </ul>
                          </dd>
                          <dt class="info-title">음성통화</dt>
                          <dd>
                            <ul class="text-list bull">
                              <li>해외에서 이용하는 음성통화요금은 국가마다 발신 및 수신 요금을 다르게 적용합니다.</li>
                              <li>전화를 받는 경우에도 해외 로밍 요금이 발생합니다.</li>
                              <li>
                                한국에서 해외 로밍을 이용 중인 고객에게 음성통화를 하면 한국 발신자에게 추가 요금은
                                없으며, 해외 로밍을 이용 중인 고객에게만 수신료가 청구됩니다.
                              </li>
                              <li>
                                일부 국가에서는 통화 연결이 되지 않아도 통화연결음 시작부터 통화료가 발생합니다. - 문자
                                발신 : 건 당 150원 (VAT 제외) - 문자 수신 : 무료
                              </li>
                              <li>
                                하루에 2개 이상의 국가에서 이용하는 경우, 마지막으로 사용한 국가의 시간을 기준으로
                                요금이 계산됩니다.
                              </li>
                              <li>
                                휴대폰에서 국제전화카드를 사용하여 통화할 경우,방문 국가 또는 사업자에 따라 해외 로밍
                                요금이 중복 청구될 수 있으니 국제전화카드는 공중전화 또는 일반전화를 이용하세요.
                              </li>
                              <li>해외 로밍 요금제에 가입하면 할인된 가격으로 서비스를 이용할 수 있습니다.</li>
                              <li>
                                통화연결음 시작부터 요금이 발생하는 국가 : 미국, 캐나다, 멕시코, 푸에르토리코, 버진
                                아일랜드, 괌, 사이판 - 음성 발신이 일 600 분을 초과할 경우 - 음성 발신의 상대방
                                착신번호가 일 100 회선을 초과할 경우
                              </li>
                            </ul>
                          </dd>
                          <dt class="info-title">3G 음성로밍 시 주의 사항</dt>
                          <dd>
                            <ul class="text-list bull">
                              <li>
                                미국 T-Mobile을 통한 3G 음성통화는 이용이 어렵습니다. <br />(2022년 7월 1일부터 서비스
                                종료)
                              </li>
                              <li>3G 음성로밍 미지원 국가에서는 VoLTE를 통한 음성로밍 이용이 가능합니다.</li>
                              <li>
                                VoLTE 음성로밍 사용을 위해서는 출국 전 고객센터를 통해 VoLTE 로밍부가서비스 등록이
                                필요합니다.<br />※ 일부 단말기에서는 VoLTE 로밍 이용이 미지원 될 수 있습니다.
                              </li>
                            </ul>
                          </dd>
                          <dt class="info-title">이용불가 단말기</dt>
                          <dd>
                            <ul class="text-list bull">
                              <li>안드로이드 OS 11 이전 버전</li>
                              <li>20년 3월 이전 출시된 자급제 단말기</li>
                              <li>유모바일 유심개통 후 단말기정보를 등록하지 않은 경우</li>
                            </ul>
                          </dd>
                          <dt class="info-title">문자 메시지</dt>
                          <dd>
                            <ul class="text-list bull">
                              <li>
                                단문메시지를 보낼 경우
                                <ul class="text-list dash">
                                  <li>아시아, 북미 건당 165원</li>
                                  <li>유럽, 오세아니아, 중남미, 아프리카 건당 330원</li>
                                </ul>
                              </li>
                              <li>
                                장문메시지를 보낼 경우
                                <ul class="text-list dash">
                                  <li>모든 국가 건당 550원</li>
                                </ul>
                              </li>
                              <li>모든 금액은 부가세 포함 금액입니다.</li>
                              <li>문자메시지 수신은 무료입니다.</li>
                              <li>장문메시지는 데이터 해외 로밍을 이용 중일 경우에만 확인할 수 있습니다.</li>
                            </ul>
                          </dd>
                          <dt class="info-title">요금 청구</dt>
                          <dd>
                            <ul class="text-list bull">
                              <li>태블릿에서도 데이터 해외 로밍 서비스를 이용할 수 있습니다.</li>
                              <li>
                                해외 로밍 금액은 국내 요금과 별도의 항목으로 구분되어 다음 달 청구서에 반영됩니다.
                              </li>
                              <li>현지 네트워크 환경에 따라 서비스가 원활하게 제공되지 않을 수 있습니다.</li>
                            </ul>
                          </dd>
                        </dl>
                      </v-expansion-panel-text>
                    </div>
                  </v-expansion-panel>

                  <v-expansion-panel class="acd_item">
                    <div class="acd_title">
                      <v-expansion-panel-title>해외에서 전화 거는 방법 안내</v-expansion-panel-title>
                    </div>
                    <div class="acd_panel">
                      <v-expansion-panel-text>
                        <dl class="info-wrap">
                          <dt class="info-title">해외에서 전화 거는 방법 안내 타이틀</dt>
                          <dd>
                            <ul class="text-list bull">
                              <li>해외에서 전화 거는 방법 안내 내용</li>
                            </ul>
                          </dd>
                        </dl>
                      </v-expansion-panel-text>
                    </div>
                  </v-expansion-panel>

                  <v-expansion-panel class="acd_item">
                    <div class="acd_title">
                      <v-expansion-panel-title>해외 이동통신사 설정 안내</v-expansion-panel-title>
                    </div>
                    <div class="acd_panel">
                      <v-expansion-panel-text>
                        <dl class="info-wrap">
                          <dt class="info-title">해외 이동통신사 설정 안내 타이틀</dt>
                          <dd>
                            <ul class="text-list bull">
                              <li>해외 이동통신사 설정 안내 내용</li>
                            </ul>
                          </dd>
                        </dl>
                      </v-expansion-panel-text>
                    </div>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </template>
            <template #content2>
              <div class="contents-area">콘텐츠 영역2</div>
              <div class="inner-section">
                <v-expansion-panels class="acd_bottom_notice" v-model="firstOpenPannel" multiple>
                  <v-expansion-panel class="acd_item">
                    <div class="acd_title">
                      <v-expansion-panel-title>서비스 안내</v-expansion-panel-title>
                    </div>
                    <div class="acd_panel">
                      <v-expansion-panel-text>
                        <dl class="info-wrap">
                          <dt class="info-title">데이터</dt>
                          <dd>
                            <ul class="text-list bull">
                              <li>
                                요금제에 가입하지 않고 해외에서 데이터를 사용하면 1KB당 부가세 포함 0.55원의 요금이
                                부과됩니다.
                              </li>
                            </ul>
                          </dd>
                          <dt class="info-title">음성통화</dt>
                          <dd>
                            <ul class="text-list bull">
                              <li>해외에서 이용하는 음성통화요금은 국가마다 발신 및 수신 요금을 다르게 적용합니다.</li>
                              <li>전화를 받는 경우에도 해외 로밍 요금이 발생합니다.</li>
                              <li>
                                한국에서 해외 로밍을 이용 중인 고객에게 음성통화를 하면 한국 발신자에게 추가 요금은
                                없으며, 해외 로밍을 이용 중인 고객에게만 수신료가 청구됩니다.
                              </li>
                              <li>
                                일부 국가에서는 통화 연결이 되지 않아도 통화연결음 시작부터 통화료가 발생합니다. - 문자
                                발신 : 건 당 150원 (VAT 제외) - 문자 수신 : 무료
                              </li>
                              <li>
                                하루에 2개 이상의 국가에서 이용하는 경우, 마지막으로 사용한 국가의 시간을 기준으로
                                요금이 계산됩니다.
                              </li>
                              <li>
                                휴대폰에서 국제전화카드를 사용하여 통화할 경우,방문 국가 또는 사업자에 따라 해외 로밍
                                요금이 중복 청구될 수 있으니 국제전화카드는 공중전화 또는 일반전화를 이용하세요.
                              </li>
                              <li>해외 로밍 요금제에 가입하면 할인된 가격으로 서비스를 이용할 수 있습니다.</li>
                              <li>
                                통화연결음 시작부터 요금이 발생하는 국가 : 미국, 캐나다, 멕시코, 푸에르토리코, 버진
                                아일랜드, 괌, 사이판 - 음성 발신이 일 600 분을 초과할 경우 - 음성 발신의 상대방
                                착신번호가 일 100 회선을 초과할 경우
                              </li>
                            </ul>
                          </dd>
                          <dt class="info-title">3G 음성로밍 시 주의 사항</dt>
                          <dd>
                            <ul class="text-list bull">
                              <li>
                                미국 T-Mobile을 통한 3G 음성통화는 이용이 어렵습니다. <br />(2022년 7월 1일부터 서비스
                                종료)
                              </li>
                              <li>3G 음성로밍 미지원 국가에서는 VoLTE를 통한 음성로밍 이용이 가능합니다.</li>
                              <li>
                                VoLTE 음성로밍 사용을 위해서는 출국 전 고객센터를 통해 VoLTE 로밍부가서비스 등록이
                                필요합니다.<br />※ 일부 단말기에서는 VoLTE 로밍 이용이 미지원 될 수 있습니다.
                              </li>
                            </ul>
                          </dd>
                          <dt class="info-title">이용불가 단말기</dt>
                          <dd>
                            <ul class="text-list bull">
                              <li>안드로이드 OS 11 이전 버전</li>
                              <li>20년 3월 이전 출시된 자급제 단말기</li>
                              <li>유모바일 유심개통 후 단말기정보를 등록하지 않은 경우</li>
                            </ul>
                          </dd>
                          <dt class="info-title">문자 메시지</dt>
                          <dd>
                            <ul class="text-list bull">
                              <li>
                                단문메시지를 보낼 경우
                                <ul class="text-list dash">
                                  <li>아시아, 북미 건당 165원</li>
                                  <li>유럽, 오세아니아, 중남미, 아프리카 건당 330원</li>
                                </ul>
                              </li>
                              <li>
                                장문메시지를 보낼 경우
                                <ul class="text-list dash">
                                  <li>모든 국가 건당 550원</li>
                                </ul>
                              </li>
                              <li>모든 금액은 부가세 포함 금액입니다.</li>
                              <li>문자메시지 수신은 무료입니다.</li>
                              <li>장문메시지는 데이터 해외 로밍을 이용 중일 경우에만 확인할 수 있습니다.</li>
                            </ul>
                          </dd>
                          <dt class="info-title">요금 청구</dt>
                          <dd>
                            <ul class="text-list bull">
                              <li>태블릿에서도 데이터 해외 로밍 서비스를 이용할 수 있습니다.</li>
                              <li>
                                해외 로밍 금액은 국내 요금과 별도의 항목으로 구분되어 다음 달 청구서에 반영됩니다.
                              </li>
                              <li>현지 네트워크 환경에 따라 서비스가 원활하게 제공되지 않을 수 있습니다.</li>
                            </ul>
                          </dd>
                        </dl>
                      </v-expansion-panel-text>
                    </div>
                  </v-expansion-panel>

                  <v-expansion-panel class="acd_item">
                    <div class="acd_title">
                      <v-expansion-panel-title>해외에서 전화 거는 방법 안내</v-expansion-panel-title>
                    </div>
                    <div class="acd_panel">
                      <v-expansion-panel-text>
                        <dl class="info-wrap">
                          <dt class="info-title">해외에서 전화 거는 방법 안내 타이틀</dt>
                          <dd>
                            <ul class="text-list bull">
                              <li>해외에서 전화 거는 방법 안내 내용</li>
                            </ul>
                          </dd>
                        </dl>
                      </v-expansion-panel-text>
                    </div>
                  </v-expansion-panel>

                  <v-expansion-panel class="acd_item">
                    <div class="acd_title">
                      <v-expansion-panel-title>해외 이동통신사 설정 안내</v-expansion-panel-title>
                    </div>
                    <div class="acd_panel">
                      <v-expansion-panel-text>
                        <dl class="info-wrap">
                          <dt class="info-title">해외 이동통신사 설정 안내 타이틀</dt>
                          <dd>
                            <ul class="text-list bull">
                              <li>해외 이동통신사 설정 안내 내용</li>
                            </ul>
                          </dd>
                        </dl>
                      </v-expansion-panel-text>
                    </div>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </template>
            <template #content3>
              <div class="tag-contents-wrap type-basic-tag">
                <div class="tag-header">
                  <div class="scroll-wrap">
                    <button class="item on" onclick="onTagShoHideHandler(this, '.item.type-main')">출국 전</button>
                    <button class="item" onclick="onTagShoHideHandler(this, '.item.type-main')">해외에서</button>
                    <button class="item" onclick="onTagShoHideHandler(this, '.item.type-main')">귀국 후</button>
                  </div>
                </div>
                <div class="contents">
                  <div class="table-wrap tag">
                    <div class="scroll-wrap">
                      <!-- item-1 -->
                      <div class="item type-main on">
                        <div class="info-box-list use_roaming">
                          <div class="info-box-list-item">
                            <div class="info-box type-round">
                              <div class="info-box-contensts">
                                <div class="left-side">
                                  <div class="text_info_wrap keep-all">
                                    아직 <strong>여행 시작 전</strong>인가요? <br />미리 <strong>로밍 요금제</strong>를
                                    <strong>신청</strong>해 보세요!
                                  </div>
                                  <div class="button-wrap">
                                    <!-- pc -->
                                    <button type="button" class="btn-rounded type-fs16" v-if="!isMobile">
                                      로밍 요금제 보러가기
                                    </button>

                                    <!-- mobile -->
                                    <div class="btn-area" v-if="isMobile">
                                      <button type="button" class="btn-rounded btn-line">로밍 요금제 보러가기</button>
                                    </div>
                                  </div>
                                </div>
                                <div class="right-side">
                                  <i class="gallery-wrap"><img src="/images/roaming/img_beforetrip.png" alt="" /></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="info-box-list-item">
                            <div class="info-box type-round">
                              <div class="info-box-contensts">
                                <div class="left-side">
                                  <div class="text_info_wrap keep-all">
                                    아직 <strong>여행 시작 전</strong>인가요? <br />미리 <strong>로밍 요금제</strong>를
                                    <strong>신청</strong>해 보세요!
                                  </div>
                                  <div class="button-wrap">
                                    <!-- pc -->
                                    <button type="button" class="btn-rounded type-fs16" v-if="!isMobile">
                                      로밍 요금제 보러가기
                                    </button>

                                    <!-- mobile -->
                                    <div class="btn-area" v-if="isMobile">
                                      <button type="button" class="btn-rounded btn-line">로밍 요금제 보러가기</button>
                                    </div>
                                  </div>
                                </div>
                                <div class="right-side">
                                  <i class="gallery-wrap"><img src="/images/roaming/img_travelling.png" alt="" /></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="inner-section">
                          <v-expansion-panels class="acd_bottom_notice" v-model="firstOpenPannel" multiple>
                            <v-expansion-panel class="acd_item">
                              <div class="acd_title">
                                <v-expansion-panel-title>데이터 로밍 이용 안내</v-expansion-panel-title>
                              </div>
                              <div class="acd_panel">
                                <v-expansion-panel-text>
                                  <dl class="info-wrap">
                                    <dt class="info-title">통화 방법 안내 타이틀</dt>
                                    <dd>
                                      <ul class="text-list bull">
                                        <li>통화 방법 안내 내용</li>
                                      </ul>
                                    </dd>
                                  </dl>
                                </v-expansion-panel-text>
                              </div>
                            </v-expansion-panel>

                            <v-expansion-panel class="acd_item">
                              <div class="acd_title">
                                <v-expansion-panel-title>통화 방법 안내</v-expansion-panel-title>
                              </div>
                              <div class="acd_panel">
                                <v-expansion-panel-text>
                                  <dl class="info-wrap">
                                    <dt class="info-title">통화 방법 안내 타이틀</dt>
                                    <dd>
                                      <ul class="text-list bull">
                                        <li>통화 방법 안내 내용</li>
                                      </ul>
                                    </dd>
                                  </dl>
                                </v-expansion-panel-text>
                              </div>
                            </v-expansion-panel>

                            <v-expansion-panel class="acd_item">
                              <div class="acd_title">
                                <v-expansion-panel-title>이동통신사 설정 안내</v-expansion-panel-title>
                              </div>
                              <div class="acd_panel">
                                <v-expansion-panel-text>
                                  <dl class="info-wrap">
                                    <dt class="info-title">이동통신사 설정 안내 타이틀</dt>
                                    <dd>
                                      <ul class="text-list bull">
                                        <li>이동통신사 설정 안내 내용</li>
                                      </ul>
                                    </dd>
                                  </dl>
                                </v-expansion-panel-text>
                              </div>
                            </v-expansion-panel>

                            <v-expansion-panel class="acd_item">
                              <div class="acd_title">
                                <v-expansion-panel-title
                                  >네트워크 연결이 원활하지 않을 때 해결 방법 안내</v-expansion-panel-title
                                >
                              </div>
                              <div class="acd_panel">
                                <v-expansion-panel-text>
                                  <dl class="info-wrap">
                                    <dt class="info-title">네트워크 연결이 원활하지 않을 때 해결 방법 안내 타이틀</dt>
                                    <dd>
                                      <ul class="text-list bull">
                                        <li>네트워크 연결이 원활하지 않을 때 해결 방법 안내 내용</li>
                                      </ul>
                                    </dd>
                                  </dl>
                                </v-expansion-panel-text>
                              </div>
                            </v-expansion-panel>
                          </v-expansion-panels>
                        </div>
                      </div>
                      <!-- //item-1 -->
                      <div class="item type-main">
                        <v-expansion-panels class="acd_bottom_notice" v-model="firstOpenPannel" multiple>
                          <v-expansion-panel class="acd_item">
                            <div class="acd_title">
                              <v-expansion-panel-title>데이터 로밍 이용 안내</v-expansion-panel-title>
                            </div>
                            <div class="acd_panel">
                              <v-expansion-panel-text>
                                <div class="tag-contents-wrap">
                                  <div class="tag-header">
                                    <div class="scroll-wrap">
                                      <button class="item on" onclick="onTagShoHideHandler(this, '.contents .item')">
                                        IOS
                                      </button>
                                      <button class="item" onclick="onTagShoHideHandler(this, '.contents .item')">
                                        안드로이드
                                      </button>
                                    </div>
                                  </div>
                                  <div class="contents">
                                    <div class="table-wrap tag">
                                      <div class="scroll-wrap">
                                        <!-- item-1 -->
                                        <div class="item on">
                                          <dl class="info-wrap">
                                            <dt class="info-title">휴대폰 설정 메뉴에서 설정하기</dt>
                                            <dd>
                                              <div class="gallery-wrap">
                                                <img src="https://placehold.co/960x600" alt="" />
                                              </div>
                                              <ul class="text-list bull">
                                                <li>
                                                  LTE 데이터 로밍을 사용하더라도 현지 사정에 따라 LTE데이터 통신이
                                                  원활하지 않을 경우 3G데이터로 접속 될 수 있습니다.
                                                </li>
                                                <li>
                                                  3G 데이터 로밍 보다 더 빠른 로밍을 이용하고 싶을 경우 LTE 데이터
                                                  로밍을 설정해주세요.<br class="pc_hide" />
                                                  단, 3G 로밍 보다 데이터가 빠르게 차감됩니다.
                                                </li>
                                              </ul>
                                            </dd>
                                          </dl>
                                        </div>
                                        <!-- //item-1 -->
                                        <div class="item">안드로이드 내용</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </v-expansion-panel-text>
                            </div>
                          </v-expansion-panel>

                          <v-expansion-panel class="acd_item">
                            <div class="acd_title">
                              <v-expansion-panel-title>통화 방법 안내</v-expansion-panel-title>
                            </div>
                            <div class="acd_panel">
                              <v-expansion-panel-text>
                                <dl class="info-wrap">
                                  <dt class="info-title">통화 방법 안내 타이틀</dt>
                                  <dd>
                                    <ul class="text-list bull">
                                      <li>통화 방법 안내 내용</li>
                                    </ul>
                                  </dd>
                                </dl>
                              </v-expansion-panel-text>
                            </div>
                          </v-expansion-panel>

                          <v-expansion-panel class="acd_item">
                            <div class="acd_title">
                              <v-expansion-panel-title>이동통신사 설정 안내</v-expansion-panel-title>
                            </div>
                            <div class="acd_panel">
                              <v-expansion-panel-text>
                                <dl class="info-wrap">
                                  <dt class="info-title">이동통신사 설정 안내 타이틀</dt>
                                  <dd>
                                    <ul class="text-list bull">
                                      <li>이동통신사 설정 안내 내용</li>
                                    </ul>
                                  </dd>
                                </dl>
                              </v-expansion-panel-text>
                            </div>
                          </v-expansion-panel>

                          <v-expansion-panel class="acd_item">
                            <div class="acd_title">
                              <v-expansion-panel-title
                                >네트워크 연결이 원활하지 않을 때 해결 방법 안내</v-expansion-panel-title
                              >
                            </div>
                            <div class="acd_panel">
                              <v-expansion-panel-text>
                                <dl class="info-wrap">
                                  <dt class="info-title">네트워크 연결이 원활하지 않을 때 해결 방법 안내 타이틀</dt>
                                  <dd>
                                    <ul class="text-list bull">
                                      <li>네트워크 연결이 원활하지 않을 때 해결 방법 안내 내용</li>
                                    </ul>
                                  </dd>
                                </dl>
                              </v-expansion-panel-text>
                            </div>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </div>
                      <div class="item type-main">
                        <v-expansion-panels class="acd_bottom_notice" v-model="firstOpenPannel" multiple>
                          <v-expansion-panel class="acd_item">
                            <div class="acd_title">
                              <v-expansion-panel-title>네트워크 초기화 방법 안내</v-expansion-panel-title>
                            </div>
                            <div class="acd_panel">
                              <v-expansion-panel-text>
                                <div class="tag-contents-wrap">
                                  <div class="tag-header">
                                    <div class="scroll-wrap">
                                      <button
                                        class="item type-sub on"
                                        onclick="onTagShoHideHandler(this, '.contents .item')"
                                      >
                                        IOS
                                      </button>
                                      <button
                                        class="item type-sub"
                                        onclick="onTagShoHideHandler(this, '.contents .item')"
                                      >
                                        안드로이드
                                      </button>
                                    </div>
                                  </div>
                                  <div class="contents">
                                    <div class="table-wrap tag">
                                      <div class="scroll-wrap">
                                        <!-- item-1 -->
                                        <div class="item on">
                                          <dl class="info-wrap">
                                            <dt class="info-title">네트워크 초기화 방법 안내</dt>
                                            <dd>
                                              <ul class="text-list bull">
                                                <li>
                                                  해외 로밍 중, 한국 도착 후 네트워크 사용이 원활하지 않을 경우
                                                  이용해주세요.
                                                </li>
                                                <li>
                                                  휴대폰 → 설정 → 일반 → 재설정 → 네트워크 설정 재설정 → 휴대폰 전원이
                                                  껐다 켜지면 네트워크가 초기화됩니다.
                                                </li>
                                              </ul>
                                              <div class="gallery-wrap">
                                                <img src="https://placehold.co/960x600" alt="" />
                                              </div>
                                            </dd>
                                          </dl>
                                        </div>
                                        <!-- //item-1 -->
                                        <div class="item">안드로이드 내용</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </v-expansion-panel-text>
                            </div>
                          </v-expansion-panel>

                          <v-expansion-panel class="acd_item">
                            <div class="acd_title">
                              <v-expansion-panel-title>로밍 요금제 해지 방법</v-expansion-panel-title>
                            </div>
                            <div class="acd_panel">
                              <v-expansion-panel-text>
                                <dl class="info-wrap">
                                  <dt class="info-title">로밍 요금제 해지 방법 타이틀</dt>
                                  <dd>
                                    <ul class="text-list bull">
                                      <li>로밍 요금제 해지 방법 내용</li>
                                    </ul>
                                  </dd>
                                </dl>
                              </v-expansion-panel-text>
                            </div>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template #content4>
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
                          해당 내용은 번호이동 시도가 없었다는 뜻으로 번호이동 사전인증을 시도하여 오류를 발생시킨 후에
                          아래와 같이 번호이동 중립기관에 제한기간 내에 번호이동 신청서를 제출해야합니다. 따라서
                          번호이동 사전인증을 시도 후 제출해주시기 바랍니다.<br /><br />
                          90일 이내 번호이동을 신청하는 경우, 아래의 절차를 먼저 거쳐주셔야 번호이동이 가능합니다.<br /><br />
                          1. 제한기간이내 번호이동 신청서 작성<br />
                          - 한국통신사업자연합회(KTOA) 홈페이지 내 양식 다운로드<br /> &nbsp;- 다운로드 URL :
                          ktoa.or.kr<br /><br />2. 3개월 이내 번호이동 제한 해제 요청<br />- 작성완료 신청서+신분증
                          (주민등록번호 뒷자리 마스킹) E-mail 발송<br />- E-mail : rnp@ktoa.or.kr<br /><br />
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
                          해당 내용은 번호이동 시도가 없었다는 뜻으로 번호이동 사전인증을 시도하여 오류를 발생시킨 후에
                          아래와 같이 번호이동 중립기관에 제한기간 내에 번호이동 신청서를 제출해야합니다. 따라서
                          번호이동 사전인증을 시도 후 제출해주시기 바랍니다.<br /><br />
                          90일 이내 번호이동을 신청하는 경우, 아래의 절차를 먼저 거쳐주셔야 번호이동이 가능합니다.<br /><br />
                          1. 제한기간이내 번호이동 신청서 작성<br />
                          - 한국통신사업자연합회(KTOA) 홈페이지 내 양식 다운로드<br />&nbsp;- 다운로드 URL :
                          ktoa.or.kr<br /><br />2. 3개월 이내 번호이동 제한 해제 요청<br />- 작성완료 신청서+신분증
                          (주민등록번호 뒷자리 마스킹) E-mail 발송<br />- E-mail : rnp@ktoa.or.kr<br /><br />
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
                          해당 내용은 번호이동 시도가 없었다는 뜻으로 번호이동 사전인증을 시도하여 오류를 발생시킨 후에
                          아래와 같이 번호이동 중립기관에 제한기간 내에 번호이동 신청서를 제출해야합니다. 따라서
                          번호이동 사전인증을 시도 후 제출해주시기 바랍니다.<br /><br />
                          90일 이내 번호이동을 신청하는 경우, 아래의 절차를 먼저 거쳐주셔야 번호이동이 가능합니다.<br /><br />
                          1. 제한기간이내 번호이동 신청서 작성<br />
                          - 한국통신사업자연합회(KTOA) 홈페이지 내 양식 다운로드<br /> &nbsp;- 다운로드 URL :
                          ktoa.or.kr<br /><br />2. 3개월 이내 번호이동 제한 해제 요청<br />- 작성완료 신청서+신분증
                          (주민등록번호 뒷자리 마스킹) E-mail 발송<br />- E-mail : rnp@ktoa.or.kr<br /><br />
                          3.번호이동 제한 해제 확인<br />
                          - 중립기관 해제 완료 답변 확인<br /><br />
                          중립기관 해체 완료 답변 받으시고, 계속 진행하시기 바랍니다.
                        </div>
                      </v-expansion-panel-text>
                    </div>
                  </div>
                </v-expansion-panel>
              </v-expansion-panels>
            </template>
          </Tab>
        </div>

        <div class="section">
          <div class="box-round type-outline has-pd has-title">
            <h3 class="ro-sec-title">도움이 필요해요</h3>
            <ul class="adbvice-list type-pc-hr">
              <li class="item info-1">
                <NuxtLink to="/" class="bg-vivid-yellow">
                  <i class="icon"><img src="/images/roaming/icons/ico_mobile_talk.svg" alt="" /></i>
                  <p class="text">
                    <strong>카카오 로밍 상담</strong><br />
                    24시간 열려있어요
                  </p>
                </NuxtLink>
              </li>
              <li class="item info-1">
                <NuxtLink to="/" class="bg-vivid-apricot">
                  <i class="icon"><img src="/images/roaming/icons/ico_earth_airline.svg" alt="" /></i>
                  <p class="text">
                    <strong>로밍센터 찾기</strong><br />
                    로밍 센터 위치를 확인하세요
                  </p>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LayoutOptions } from "@/types/layout";
import Tab from "@/components/v2/common/Tab.vue";
window.onTagShoHideHandler = htmlUI.tagShoHideHandler;

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: "",
  floatMenu: "",
  title: "로밍 이용가이드",
  wrapClass: "selfcare roaming",
});

const isMobile = ref(front.isMobile());
const tabmenu = ref(null);

onMounted(async () => {
  emit("setLayout", layout);
  await nextTick(() => {});
});

const firstOpenPannel = ref([0]);
</script>

<style scoped lang="scss">
@use "@/assets/scss/pages/ro/page-al-ms-04-002.scss" as *;
</style>
