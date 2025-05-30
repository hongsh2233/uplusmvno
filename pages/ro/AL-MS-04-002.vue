<template>
  <!-- 
   전체적인 탭 구조 및 디자인이 수정 되었습니다. 
   해외로밍 탭 : 디자인 및 구조 변경
   해외 데이터 안심옵션 : 디자인 및 구조 변경
   이용방법 : 탭 depth1 > 탭 depth2 > 탭 depth3 구조에 따른 변경
   자주하는 질문 : 디자인 변경으로 타입 분기처리
   -->
  <div class="AL-MS-04-002">
    <div class="container">
      <div class="content" id="content">
        <div class="section">
          <h2 class="ro-nav-title">로밍 이용 방법을 알려드려요</h2>
          <!-- content-item -->
          <div class="content-item">
            <!-- content-inner -->
            <div class="content-inner">
              <Tab
                :data="{
                  option: { type: 3 },
                  data: [
                    { selected: true, controls: 'tab_panel_01_01', title: '해외 로밍이란?' },
                    { selected: false, controls: 'tab_panel_01_02', title: '해외 데이터 안심옵션' },
                    { selected: false, controls: 'tab_panel_01_03', title: '이용방법' },
                    { selected: false, controls: 'tab_panel_01_04', title: '자주하는 질문' },
                  ],
                }"
              >
                <!-- tab01 -->
                <template v-slot:tab_panel_01_01>
                  <div class="panel_cnt tab_con01">
                    <!-- 상단 배너 -->
                    <div class="info-box-list ty04">
                      <div class="info-box-list-item">
                        <div class="info-box type-round">
                          <div class="info-box-contensts">
                            <div class="left-side">
                              <div class="text_info_wrap keep-all">
                                <strong>해외에서도<br v-if="isMobile" />내 휴대폰 내 번호 그대로!</strong>
                                <p class="txt">
                                  도착해서 휴대폰 전원만 껐다 켜면 해외에서도<br v-if="!isMobile" />
                                  한국에 있을 때와 똑같이 전화, 데이터를 이용할 수 있어요.
                                </p>
                              </div>
                            </div>
                            <div class="right-side">
                              <i class="gallery-wrap" v-if="!isMobile"
                                ><img src="/images/roaming/img_roaming_tab01.png" alt=""
                              /></i>
                              <i class="gallery-wrap" v-if="isMobile"
                                ><img src="/images/roaming/img_roaming_tab01_m.png" alt=""
                              /></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- // 상단 배너 -->

                    <!-- 비교해 보세요 -->
                    <div class="comparison_wrap mgt40">
                      <h3 class="ro-sec-title">비교해 보세요!</h3>

                      <ul class="comparison_list">
                        <li>
                          <p class="tit">로밍</p>
                          <img src="/images/roaming/img_comparison_list01.png" alt="로밍 이미지" v-if="!isMobile" />
                          <img src="/images/roaming/img_comparison_list01_m.png" alt="로밍 이미지" v-if="isMobile" />
                        </li>

                        <li>
                          <p class="tit">해외 유심</p>
                          <img
                            src="/images/roaming/img_comparison_list02.png"
                            alt="해외 유심 이미지"
                            v-if="!isMobile"
                          />
                          <img src="/images/roaming/img_comparison_list02_m.png" alt="로밍 이미지" v-if="isMobile" />
                        </li>

                        <li>
                          <p class="tit">휴대용<br v-if="isMobile" />와이파이</p>
                          <img
                            src="/images/roaming/img_comparison_list03.png"
                            alt="휴대용 와이파이 이미지"
                            v-if="!isMobile"
                          />
                          <img src="/images/roaming/img_comparison_list03_m.png" alt="로밍 이미지" v-if="isMobile" />
                        </li>
                      </ul>
                    </div>
                    <!-- // 비교해 보세요 -->

                    <!-- 무엇이 다를까요? -->
                    <div class="mgt40">
                      <h3 class="ro-sec-title bottom-arrow">무엇이 다를까요?</h3>
                    </div>
                    <!-- // 무엇이 다를까요? -->

                    <!-- 이용방법 -->
                    <div class="mgt40">
                      <h3 class="ro-sec-title">이용방법</h3>

                      <div class="use_wrap">
                        <ul>
                          <li v-for="(item, idx) in useList01" :key="idx">
                            <div class="tit">{{ item.title }}</div>
                            <div class="thumb">
                              <img :src="item.img" :alt="item.alt" />
                            </div>
                            <p class="txt" v-html="item.text"></p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!-- // 이용방법 -->

                    <!-- 음성전화 -->
                    <div class="mgt40">
                      <h3 class="ro-sec-title">음성전화</h3>

                      <div class="use_wrap">
                        <ul>
                          <li v-for="(item, idx) in useList02" :key="idx">
                            <div class="tit">{{ item.title }}</div>
                            <div class="thumb">
                              <img :src="item.img" :alt="item.alt" />
                            </div>
                            <p class="txt" v-html="item.text"></p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!-- // 음성전화 -->

                    <!-- 문자 메시지 사용 -->
                    <div class="mgt40">
                      <h3 class="ro-sec-title">문자 메시지 사용</h3>

                      <div class="use_wrap">
                        <ul>
                          <li v-for="(item, idx) in useList03" :key="idx">
                            <div class="tit">{{ item.title }}</div>
                            <div class="thumb">
                              <img :src="item.img" :alt="item.alt" />
                            </div>
                            <p class="txt" v-html="item.text"></p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!-- // 문자 메시지 사용 -->

                    <!-- 인터넷 사용 -->
                    <div class="mgt40">
                      <h3 class="ro-sec-title">인터넷 사용</h3>

                      <div class="use_wrap">
                        <ul>
                          <li v-for="(item, idx) in useList04" :key="idx">
                            <div class="tit">{{ item.title }}</div>
                            <div class="thumb">
                              <img :src="item.img" :alt="item.alt" />
                            </div>
                            <p class="txt" v-html="item.text"></p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!-- // 인터넷 사용 -->
                  </div>
                </template>
                <!-- // tab01 -->

                <!-- tab02 -->
                <template v-slot:tab_panel_01_02>
                  <div class="panel_cnt tab_con02">
                    <!-- 상단 배너 -->
                    <div class="info-box-list ty04">
                      <div class="info-box-list-item">
                        <div class="info-box type-round">
                          <div class="info-box-contensts">
                            <div class="left-side">
                              <div class="text_info_wrap keep-all">
                                <strong>해외 데이터 안심옵션이란?</strong>
                                <p class="txt">
                                  데이터를 얼마나 사용하든<br v-if="isMobile" />
                                  로밍 요금이 하루 최대 5,500원을<br />
                                  넘지 않는 고객 안심 서비스예요.
                                </p>
                              </div>
                            </div>
                            <div class="right-side">
                              <i class="gallery-wrap" v-if="!isMobile"
                                ><img src="/images/roaming/img_roaming_tab02.png" alt=""
                              /></i>
                              <i class="gallery-wrap" v-if="isMobile"
                                ><img src="/images/roaming/img_roaming_tab02_m.png" alt=""
                              /></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- // 상단 배너 -->

                    <!-- txt_wrap -->
                    <div class="mgt40">
                      <div class="txt_wrap">
                        <p class="tit01">해외에서 요금 폭탄 걱정 없이<br v-if="isMobile" />데이터를 이용하세요!</p>
                        <p class="tit">
                          신청 없이 자동 적용되는 <br />
                          <strong>해외 데이터 안심 옵션</strong>이 <br v-if="isMobile" />있으니까요
                        </p>
                        <p class="txt">
                          데이터 로밍 차단 부가서비스에 가입했다면 <br v-if="isMobile" />해지 후 이용할 수 있어요.
                        </p>
                      </div>
                    </div>
                    <!-- // txt_wrap -->

                    <!--  -->
                    <div class="mgt40">
                      <ul class="banner_wrap">
                        <li>
                          <div class="banner_list">
                            <p class="tit">
                              마음껏 써도<br />
                              데이터 이용 요금은<br />
                              하루 최대 5,500원
                            </p>
                            <div class="thumb"><img src="/images/roaming/ico_p_banner_lst01.png" alt="" /></div>
                          </div>

                          <ul class="text-list bull">
                            <li>
                              현지 수도 시간 0시를 기준으로 24시간 동안 데이터를 얼마나 사용하든 하루 최대 5,500원까지만
                              청구돼요.
                            </li>
                            <li>
                              데이터 이용량이 10MB(5,500원)를 넘으면 추가 요금 없이 400kbps 속도로 무제한 이용할 수
                              있어요.
                            </li>
                          </ul>
                        </li>

                        <li>
                          <div class="banner_list">
                            <p class="tit">
                              카카오톡, 웹서핑<br />
                              무제한 이용 가능
                            </p>
                            <div class="thumb">
                              <img src="/images/roaming/ico_p_banner_lst02.png" alt="" />
                            </div>
                          </div>

                          <ul class="text-list bull">
                            <li>400kbps 속도로 카카오톡을 끊김 없이 무제한 이용할 수 있어요.</li>
                            <li>
                              이미지, 영상 없는 텍스트 위주의 페이지로 웹서핑이 가능하고, 앱이나 일부 웹페이지는 끊길 수
                              있어요.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <!-- //  -->

                    <!--  -->
                    <div class="howtouse-wrap mgt40">
                      <p class="s-tit">이용 방법</p>
                      <p class="tit">데이터 로밍 차단 부가서비스에 가입했다면, 해지 후 이용할 수 있어요.</p>
                      <button class="howbtn">데이터 로밍 차단 해지하기</button>
                    </div>
                    <!-- // -->
                  </div>
                </template>
                <!-- // tab02 -->

                <!-- tab03 -->
                <template v-slot:tab_panel_01_03>
                  <div class="panel_cnt tab_con03">
                    <!-- 안쪽 탭메뉴 -->
                    <RectTab :titles="['출국 전', '해외에서', '귀국 후']">
                      <!-- in-tab01 -->
                      <template #content1>
                        <!-- 상단 배너 -->
                        <div class="info-box-list use_roaming ty02">
                          <!-- 01 -->
                          <div class="info-box-list-item">
                            <div class="info-box type-round">
                              <div class="info-box-contensts">
                                <div class="left-side">
                                  <div class="text_info_wrap keep-all">
                                    <p>아직 <strong>여행 시작 전</strong>인가요?</p>
                                    미리 <strong>로밍 요금제</strong>를 <br v-if="isMobile" /><strong>신청</strong>해
                                    보세요!
                                  </div>
                                  <div class="button-wrap">
                                    <!-- pc -->
                                    <button type="button" class="btn-rounded type-fs16" v-if="!isMobile">
                                      로밍 요금제 보러가기
                                    </button>
                                  </div>
                                </div>
                                <div class="right-side">
                                  <i class="gallery-wrap"><img src="/images/roaming/img_beforetrip.png" alt="" /></i>
                                </div>

                                <!-- mobile -->
                                <div class="btn-area" v-if="isMobile">
                                  <button type="button" class="btn-rounded type-fs16">로밍 요금제 보러가기</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- // 01 -->

                          <!-- 02 -->
                          <div class="info-box-list-item">
                            <div class="info-box type-round">
                              <div class="info-box-contensts">
                                <div class="left-side">
                                  <div class="text_info_wrap keep-all">
                                    <p>해외여행 중&nbsp;</p>
                                    <strong>데이터/음성통화 사용</strong>을<br />
                                    <strong>차단</strong>하고 싶다면?
                                  </div>
                                  <div class="button-wrap">
                                    <!-- pc -->
                                    <button type="button" class="btn-rounded type-fs16" v-if="!isMobile">
                                      로밍 차단 부가서비스 보러 가기
                                    </button>
                                  </div>
                                </div>
                                <div class="right-side">
                                  <i class="gallery-wrap"><img src="/images/roaming/img_travelling.png" alt="" /></i>
                                </div>

                                <!-- mobile -->
                                <div class="btn-area" v-if="isMobile">
                                  <button type="button" class="btn-rounded type-fs16">
                                    로밍 차단 부가서비스 보러 가기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- // 02 -->
                        </div>
                        <!-- // 상단 배너 -->

                        <!-- 아코디언 -->
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
                                          요금제에 가입하지 않고 해외에서 데이터를 사용하면 1KB당 부가세 포함 0.55원의
                                          요금이 부과됩니다.
                                        </li>
                                      </ul>
                                    </dd>
                                    <dt class="info-title">음성통화</dt>
                                    <dd>
                                      <ul class="text-list bull">
                                        <li>
                                          해외에서 이용하는 음성통화요금은 국가마다 발신 및 수신 요금을 다르게
                                          적용합니다.
                                        </li>
                                        <li>전화를 받는 경우에도 해외 로밍 요금이 발생합니다.</li>
                                        <li>
                                          한국에서 해외 로밍을 이용 중인 고객에게 음성통화를 하면 한국 발신자에게 추가
                                          요금은 없으며, 해외 로밍을 이용 중인 고객에게만 수신료가 청구됩니다.
                                        </li>
                                        <li>
                                          일부 국가에서는 통화 연결이 되지 않아도 통화연결음 시작부터 통화료가
                                          발생합니다. - 문자 발신 : 건 당 150원 (VAT 제외) - 문자 수신 : 무료
                                        </li>
                                        <li>
                                          하루에 2개 이상의 국가에서 이용하는 경우, 마지막으로 사용한 국가의 시간을
                                          기준으로 요금이 계산됩니다.
                                        </li>
                                        <li>
                                          휴대폰에서 국제전화카드를 사용하여 통화할 경우,방문 국가 또는 사업자에 따라
                                          해외 로밍 요금이 중복 청구될 수 있으니 국제전화카드는 공중전화 또는 일반전화를
                                          이용하세요.
                                        </li>
                                        <li>
                                          해외 로밍 요금제에 가입하면 할인된 가격으로 서비스를 이용할 수 있습니다.
                                        </li>
                                        <li>
                                          통화연결음 시작부터 요금이 발생하는 국가 : 미국, 캐나다, 멕시코, 푸에르토리코,
                                          버진 아일랜드, 괌, 사이판 - 음성 발신이 일 600 분을 초과할 경우 - 음성 발신의
                                          상대방 착신번호가 일 100 회선을 초과할 경우
                                        </li>
                                      </ul>
                                    </dd>
                                    <dt class="info-title">3G 음성로밍 시 주의 사항</dt>
                                    <dd>
                                      <ul class="text-list bull">
                                        <li>
                                          미국 T-Mobile을 통한 3G 음성통화는 이용이 어렵습니다. <br />(2022년 7월
                                          1일부터 서비스 종료)
                                        </li>
                                        <li>3G 음성로밍 미지원 국가에서는 VoLTE를 통한 음성로밍 이용이 가능합니다.</li>
                                        <li>
                                          VoLTE 음성로밍 사용을 위해서는 출국 전 고객센터를 통해 VoLTE 로밍부가서비스
                                          등록이 필요합니다.<br />※ 일부 단말기에서는 VoLTE 로밍 이용이 미지원 될 수
                                          있습니다.
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
                                          해외 로밍 금액은 국내 요금과 별도의 항목으로 구분되어 다음 달 청구서에
                                          반영됩니다.
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
                        <!-- // 아코디언 -->
                      </template>
                      <!-- // in-tab01 -->

                      <!-- in-tab02 -->
                      <template #content2>
                        <!-- 아코디언 -->
                        <v-expansion-panels class="acd_bottom_notice" v-model="firstOpenPannel" multiple>
                          <!-- 01 -->
                          <v-expansion-panel class="acd_item">
                            <div class="acd_title">
                              <v-expansion-panel-title>데이터 로밍 이용 안내</v-expansion-panel-title>
                            </div>
                            <div class="acd_panel">
                              <v-expansion-panel-text>
                                <!-- 탭메뉴내용1 -->
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
                                                <div>844x529</div>
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
                                        <div class="item">안드로이드 내용1</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <!-- //탭메뉴내용1 -->
                              </v-expansion-panel-text>
                            </div>
                          </v-expansion-panel>
                          <!-- 01 -->

                          <!-- 02 -->
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
                          <!-- 02 -->

                          <!-- 03 -->
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
                          <!-- 03 -->

                          <!-- 04 -->
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
                          <!-- 04 -->
                        </v-expansion-panels>
                        <!-- // 아코디언 -->
                      </template>
                      <!-- // in-tab02 -->

                      <!-- in-tab03 -->
                      <template #content3>
                        <!-- 아코디언 -->
                        <v-expansion-panels class="acd_bottom_notice" v-model="firstOpenPannel" multiple>
                          <!-- 01 -->
                          <v-expansion-panel class="acd_item">
                            <div class="acd_title">
                              <v-expansion-panel-title>네트워크 초기화 방법 안내</v-expansion-panel-title>
                            </div>
                            <div class="acd_panel">
                              <v-expansion-panel-text>
                                <!-- 탭메뉴내용1 -->
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
                                            <dd>
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
                                              <div class="gallery-wrap">
                                                <div>844x529</div>
                                              </div>
                                            </dd>
                                          </dl>
                                        </div>
                                        <!-- //item-1 -->
                                        <div class="item">안드로이드 내용2</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <!-- //탭메뉴내용1 -->
                              </v-expansion-panel-text>
                            </div>
                          </v-expansion-panel>
                          <!-- 01 -->

                          <!-- 02  -->
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
                          <!-- 02 -->
                        </v-expansion-panels>
                        <!-- // 아코디언 -->
                      </template>
                      <!-- // in-tab03 -->
                    </RectTab>
                    <!-- //안쪽 탭메뉴 -->
                  </div>
                </template>
                <!-- // tab03 -->

                <!-- tab04 -->
                <template v-slot:tab_panel_01_04>
                  <div class="panel_cnt tab_con04">
                    <div class="form_item">
                      <InputBox
                        :option="{ value: '', placeholder: '검색어를 입력해주세요', search: true }"
                        @inputValue="console.log($event)"
                        class="bgF3F5F6 no-outline"
                      />
                    </div>

                    <v-expansion-panels class="type-accordion-faq ty02" multiple>
                      <v-expansion-panel class="acd_item">
                        <div class="inner-panner-wrap">
                          <div class="acd_title">
                            <v-expansion-panel-title>
                              <div class="title-text-wrap">
                                <p class="title-text">
                                  유심 택배배송 요청 후 신청 완료까지 했습니다. 유심 도착 후 휴대폰에 장착하면 바로
                                  사용이 가능한가요?
                                </p>
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
                                미성년자 중 금융거래(은행 계좌 또는 카드 발급 등) 이력이 없을 경우,<br />
                                실명 인증이 되지 않을 수 있습니다.<br /><br />

                                온라인 가입 신청 단계에서 가입자명과 주민등록번호를 정확하게 입력하였음에도<br />
                                ‘실명 확인을 실패하였습니다.’ 라는 알림이 뜬다면,<br />
                                NICE아이디(주) 홈페이지에 접속하셔서 실명 인증 후 다시 가입을 진행하시면 됩니다.<br /><br />

                                <실명 인증 방법><br />
                                아래 '실명등록 안내 바로가기' 링크를 클릭→하단의 '실명등록 신청하기' 버튼 클릭→<br />
                                실명등록 대상자 정보입력→'개인 실명등록 신청하기' 버튼 클릭→최대 1~2시간 대기 후
                                실명인증 완료<br /><br />

                                - 실명 등록 안내 바로가기 :<br />
                                <a href="https://www.niceid.co.kr/name_guid.nc" target="_blank" class="a-blank"
                                  >https://www.niceid.co.kr/name_guid.nc</a
                                >
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
                </template>
                <!-- // tab04 -->
              </Tab>
            </div>
            <!-- // content-inner -->
          </div>
          <!-- // content-item -->

          <!-- 도움이 필요해요 -->
          <div class="inner-section">
            <div class="notice-roaming-guide-wrap">
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
          <!-- // 도움이 필요해요 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LayoutOptions } from "@/types/layout";
import Tab from "@/components/Tab.vue";
import RectTab from "@/components/v2/common/Tab.vue";
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

const useList01 = ref([
  {
    title: "해외 로밍",
    img: "/images/roaming/ico_p_plane1.png",
    alt: "해외 로밍 이미지",
    text: "도착해서 휴대폰 전원만 <br class='mobile_hide' />껐다 켜면 돼요.",
  },
  {
    title: "해외 유심카드",
    img: "/images/roaming/ico_p_plane2.png",
    alt: "해외 유심카드 이미지",
    text: "그 나라 유심 (사용자 정보 저장) <br class='mobile_hide' />카드를 사서 바꿔 끼워야 해요.",
  },
  {
    title: "휴대용 와이파이",
    img: "/images/roaming/ico_p_plane3.png",
    alt: "휴대용 와이파이 이미지",
    text: "공유기를 빌려 충전해서 가지고 다녀야 해요. <br class='mobile_hide' />반납도 해야 해요.",
  },
]);

const useList02 = ref([
  {
    title: "해외 로밍",
    img: "/images/roaming/ico_p_call1.png",
    alt: "해외 로밍 이미지",
    text: "내 번호 그대로 전화를 <br class='mobile_hide' />걸고 받을 수 있어요.",
  },
  {
    title: "해외 유심카드",
    img: "/images/roaming/ico_p_call2.png",
    alt: "해외 유심카드 이미지",
    text: "현지 번호로 바뀌기 때문에 원래 내 번호로 <br class='mobile_hide' />걸려오는 전화는 못 받아요.",
  },
  {
    title: "휴대용 와이파이",
    img: "/images/roaming/ico_p_call3.png",
    alt: "휴대용 와이파이 이미지",
    text: "현지 번호로 바뀌기 때문에 원래 <br class='mobile_hide' />내 번호로 걸려오는 전화는 못 받아요.",
  },
]);
const useList03 = ref([
  {
    title: "해외 로밍",
    img: "/images/roaming/ico_p_message1.png",
    alt: "해외 로밍 이미지",
    text: "한국에서처럼 똑같이 <br class='mobile_hide' />이용할 수 있어요.",
  },
  {
    title: "해외 유심카드",
    img: "/images/roaming/ico_p_message2.png",
    alt: "해외 유심카드 이미지",
    text: "한국과 문자 메시지를 <br class='mobile_hide' />주고 받을 수 없어요.",
  },
  {
    title: "휴대용 와이파이",
    img: "/images/roaming/ico_p_message3.png",
    alt: "휴대용 와이파이 이미지",
    text: "한국과 문자 메시지를 <br class='mobile_hide' />주고 받을 수 없어요.",
  },
]);
const useList04 = ref([
  {
    title: "해외 로밍",
    img: "/images/roaming/ico_p_wifi1.png",
    alt: "해외 로밍 이미지",
    text: "어느 사이트든 제한없이 <br class='mobile_hide' />이용할 수 있어요.",
  },
  {
    title: "해외 유심카드",
    img: "/images/roaming/ico_p_wifi2.png",
    alt: "해외 유심카드 이미지",
    text: "중국에서는 구글, 페이스북에 접속할 수 없어요. <br class='mobile_hide' />*VPN으로 우회접속 필요",
  },
  {
    title: "휴대용 와이파이",
    img: "/images/roaming/ico_p_wifi3.png",
    alt: "휴대용 와이파이 이미지",
    text: "중국에서는 구글, 페이스북에 접속할 수 없어요. <br class='mobile_hide' />*VPN으로 우회접속 필요",
  },
]);

onMounted(async () => {
  emit("setLayout", layout);
  await nextTick(() => {});
});

const firstOpenPannel = ref([0]);
</script>

<style scoped lang="scss">
@use "@/assets/scss/pages/ro/page-al-ms-04-002.scss" as *;
</style>
