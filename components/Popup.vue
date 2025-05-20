<template>
  <div>
    <!-- [ALFM-MA01-PG00] 메인 공지 스와이퍼 팝업 -->
    <Transition name="popupNotice">
      <div
        class="pop_layer notice"
        :class="{ open: popupItem.notice.isOpen }"
        :style="{ zIndex: popupItem.notice.idx }"
        ref="notice"
        v-if="popupItem.notice"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap" tabindex="0">
          <div class="pop_content">
            <SwiperNotice />
          </div>
          <div class="pop_footer">
            <button type="button" @click="closePopup('notice', 'btn_notice')">
              오늘은 더 안볼래요
            </button>
            <button type="button" class="close" @click="closePopup('notice', 'btn_notice')">
              닫기
            </button>
          </div>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [공통][ALFM-CM05-PO00] 우편번호 검색 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.CM05PO00.isOpen }"
        :style="{ zIndex: popupItem.CM05PO00.idx }"
        ref="CM05PO00"
        v-if="popupItem.CM05PO00"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap height_fix" tabindex="0">
          <div class="pop_header">
            <h3>⁠우편번호 검색</h3>
          </div>
          <div class="pop_content">
            <div class="section">
              <div class="form_list post">
                <ul>
                  <li>
                    <InputBox
                      :option="{
                        placeholder: '⁠도로명+건물번호 / 지역명(동/리)+번지',
                        search: true,
                      }"
                      @inputValue="console.log($event)"
                    />
                  </li>
                  <li>
                    <div class="addr_search_info">
                      <!-- 우편번호 검색 시 미노출 -->
                      <span class="info_desc"
                        >⁠아래와 같은 조합으로 검색을 하시면 더욱 정확한 결과가 검색됩니다.</span
                      >
                      <ul>
                        <li>
                          <span class="tit">⁠도로명 주소 검색</span>
                          <span class="fc03">예) 한강대로 32</span>
                        </li>
                        <li>
                          <span class="tit">⁠도로명+건물번호 검색</span>
                          <span class="fc03">예) 한강대로 32</span>
                        </li>
                        <li>
                          <span class="tit">⁠건물명 검색</span>
                          <span class="fc03">예) 엘지유플러스</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div class="sort_wrap">
                      <div>총 1342건 검색되었습니다</div>
                    </div>

                    <div class="line_list">
                      <ul>
                        <li>
                          <NuxtLink :to="{}" class="list_con ty02">
                            <div class="addr_list">
                              <span class="bag clr c09">도로명</span>⁠경기도 성남시 분당구 판교역로
                              164
                            </div>
                            <div class="addr_list">
                              <span class="bag clr c07">지번</span>⁠경기도 성남시 분당구 삼평동 640
                            </div>
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink :to="{}" class="list_con ty02">
                            <div class="addr_list">
                              <span class="bag clr c09">도로명</span>⁠경기도 성남시 분당구 판교역로
                              164
                            </div>
                            <div class="addr_list">
                              <span class="bag clr c07">지번</span>⁠경기도 성남시 분당구 삼평동 640
                            </div>
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink :to="{}" class="list_con ty02">
                            <div class="addr_list">
                              <span class="bag clr c09">도로명</span>⁠경기도 성남시 분당구 판교역로
                              164
                            </div>
                            <div class="addr_list">
                              <span class="bag clr c07">지번</span>⁠경기도 성남시 분당구 삼평동 640
                            </div>
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink :to="{}" class="list_con ty02">
                            <div class="addr_list">
                              <span class="bag clr c09">도로명</span>⁠경기도 성남시 분당구 판교역로
                              164
                            </div>
                            <div class="addr_list">
                              <span class="bag clr c07">지번</span>⁠경기도 성남시 분당구 삼평동 640
                            </div>
                          </NuxtLink>
                        </li>
                      </ul>

                      <!-- markup 변경 ; 23/11/08 -->
                      <div class="btn_wrap center">
                        <button type="button" class="btn round more_d">더 볼래요</button>
                      </div>
                      <!-- //markup 변경 ; 23/11/08 -->

                      <div class="form_item mgt20">
                        <!-- 주소 선택 시 노출 -->
                        <InputBox
                          :option="{ placeholder: '⁠상세주소 입력' }"
                          @inputValue="console.log($event)"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <NoData
                :option="{
                  type: 'sch',
                  html: '<p>검색 결과가 없습니다.<br>⁠정확한 주소인지 다시 한번 확인해주세요.</p>',
                }"
              />
            </div>
            <!-- // section -->
          </div>
          <div class="pop_footer">
            <div class="btn_group">
              <button type="button" class="btn md c03" id="nextBtn">확인</button>
            </div>
          </div>

          <button type="button" class="pop_close" @click="closePopup('CM05PO00', 'btn_CM05PO00')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [공통][ALFM-CM06-PO00] 약관 상세 팝업 : 약관 상세 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.terms.isOpen }"
        :style="{ zIndex: popupItem.terms.idx }"
        ref="terms"
        v-if="popupItem.terms"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap" tabindex="0">
          <div class="pop_header">
            <h3>약관 상세</h3>
          </div>
          <div class="pop_content">
            <div class="section">
              <div class="terms_area">
                위치정보 활용정보 제공에 관한 동의서 <br />
                <br />
                제 1조(목적) <br />
                (주)뉴플로이(이하 ‘회사’라 한다)의 뉴플로이에 관한 모든 관련 서비스(이하 ‘서비스’라
                한다)는 회원님에게 보다 다양한 정보를 제공하고, 서비스의 질을 향상시키기 위하여
                당사의 제휴사에게 「개인정보보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한
                법률 」및 「신용정보의 이용 및 보호에 관한 법률」의 규정을 준수하여 회원님의
                개인(신용)정보를 제3자에게 상품소개 및 홍보 등 영업목적으로 제공할 수 있습니다.
                <br />
                <br />
                제 2조(수집 및 활용 관련 정보) <br />
                개인정보가 제공되는 비즈니스 파트너사, 제공 정보, 제공된 정보의 이용목적은 아래와
                같습니다. 회원님들 중 이 개인정보의 제3자 마케팅 활용동의서 등에 동의하신 회원님들의
                정보만이 제공되며, 제공된 정보는 명시된 이용목적을 벗어나 이용되지 않고, 개인정보의
                유출 등 사고가 일어나지 않도록 더욱 철저한 보안이 이루어지도록 노력하고 있습니다.
                <br />
                <br />
                제 3조(제3자 정보제공의 동의 철회) <br />
                본 동의서에 동의하고 가입하신 신규회원 중 제3자 정보제공을 철회하고 싶은 회원은 이미
                제3자에게 제공된 개인정보라 하더라도, 언제든지 열람, 정정, 삭제를 요구할 수
                있습니다. 열람, 정정, 삭제 및 정보제공 동의 철회는 뉴플로이 고객센터(02-6956-4660)를
                통해 본인확인 후 요청할 수 있습니다. 해당 요청의 근거자료를 남기기 위해 해당
                통화내역은 녹취될 수 있으며 회원은 이에 동의하는 것으로 간주합니다. <br />
                이미 제공된 회원정보를 철회하는 데는 최대 10일의 기간이 소요됩니다. 활용동의 철회를
                요청하시더라도 위와 같은 이유로 해당 철회 적용 이전까지 마케팅에 활용 될 수 있음을
                알려드립니다. <br />
                회사는 회원님의 소중한 정보를 보호하기 위하여 신속하게 처리되도록 최선의 노력을
                다하겠습니다. <br />
              </div>
            </div>
          </div>
          <!-- 08/31 기획 요청으로 삭제 -->
          <!-- <div class="pop_footer">
          <div class="btn_group">
            <button type="button" class="btn md c03" @click="closePopup('terms','btn_terms')">확인</button>
          </div>
        </div> -->
          <button type="button" class="pop_close" @click="closePopup('terms', 'btn_terms')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [공통][ALFM-CM07-PO00] 지도 보기 팝업 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full map_pop"
        :class="{ open: popupItem.CM07PO00.isOpen }"
        :style="{ zIndex: popupItem.CM07PO00.idx }"
        ref="CM07PO00"
        v-if="popupItem.CM07PO00"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap height_fix" tabindex="0">
          <div class="pop_header">
            <h3>지도 보기</h3>
          </div>
          <div class="pop_content">
            <div class="map_address">
              <dl>
                <dt>GS25상일동아점</dt>
                <dd>
                  서울 강동구 상암로 405, 제101동 제상가1호 (상일동 473, 외 1필지 상일동아아파트)
                </dd>
                <dd class="tel_info">070-358-3515</dd>
              </dl>
              <div class="btn_group">
                <NuxtLink :to="{}" class="btn md c03">전화하기</NuxtLink>
              </div>
            </div>
            <div class="map_area">
              <span style="display: block; padding: 5rem; text-align: center">지도</span>

              <div class="map_pin_shop" style="position: absolute; left: 150px; top: 200px">
                <i>
                  <img src="/images/component/img_gs25.png" alt="gs25" />
                  <!--
                  <img src="/images/component/img_cu.png" alt="cu">
                  <img src="/images/component/img_emart.png" alt="emart">
                  <img src="/images/component/img_seven_eleven.png" alt="seven eleven">
                  -->
                </i>
              </div>
            </div>
          </div>
          <button type="button" class="pop_close" @click="closePopup('CM07PO00', 'btn_CM07PO00')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [공통][ALFM-CM08-PO00] eSIM 활성화 방법 팝업 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.CM08PO00.isOpen }"
        :style="{ zIndex: popupItem.CM08PO00.idx }"
        ref="CM08PO00"
        v-if="popupItem.CM08PO00"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap height_fix" tabindex="0">
          <div class="pop_header">
            <h3>eSIM 활성화 방법</h3>
          </div>
          <div class="pop_content">
            <div class="section">
              <div class="box_red ty02">
                <div class="noti_img"></div>
                <strong class="fc01"
                  >eSIM을 활성화 하기 위해서는 <br />반드시 인터넷에 연결 되어 있어야 해요</strong
                >
              </div>
              <div class="box_gray mgt12">
                <ul class="text_list bull">
                  <li>
                    eSIM을 가입하면, 내 휴대폰 설정 메뉴 또는 QR코드를 스캔해서 eSIM을 활성화 후
                    바로 사용할 수 있어요.
                  </li>
                  <li>한개의 단말에 동일 명의의 번호만 사용 가능해요!</li>
                </ul>
              </div>
            </div>
            <!-- // section -->

            <div class="section">
              <v-expansion-panels class="acd_wrap" v-model="toggle08" multiple>
                <v-expansion-panel class="acd_item">
                  <div class="acd_title">
                    <v-expansion-panel-title>QR 스캔해서 개통하는 방법</v-expansion-panel-title>
                  </div>
                  <div class="acd_panel">
                    <v-expansion-panel-text>
                      <div class="qr_wrap">
                        <div class="qr_img">
                          <img src="/images/content/img_qr.png" alt="" />
                        </div>
                        <strong>
                          eSIM 개통할 휴대폰으로 <br />
                          QR코드를 스캔해주세요
                        </strong>
                      </div>
                    </v-expansion-panel-text>
                  </div>
                </v-expansion-panel>

                <v-expansion-panel class="acd_item">
                  <div class="acd_title">
                    <v-expansion-panel-title
                      >내 휴대폰 설정에서 개통하는 방법</v-expansion-panel-title
                    >
                  </div>
                  <div class="acd_panel">
                    <v-expansion-panel-text>
                      <div>
                        <strong>아이폰</strong>
                        <SwiperEsim :option="{ type: 'ios' }" />

                        <strong>갤럭시(안드로이드)</strong>
                        <SwiperEsim :option="{ type: 'aos' }" />
                      </div>
                    </v-expansion-panel-text>
                  </div>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <!-- .section -->
          </div>

          <div class="pop_footer">
            <div class="btn_group">
              <button
                type="button"
                class="btn md c03"
                @click="closePopup('CM08PO00', 'btn_CM08PO00')"
              >
                확인
              </button>
            </div>
          </div>
          <button type="button" class="pop_close" @click="closePopup('CM08PO00', 'btn_CM08PO00')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-PR01-PG00] 꼼꼼하게 찾기 필터 -->
    <Transition name="popupNormal">
      <div
        class="pop_layer normal filter_pop"
        :class="{ open: popupItem.PR01PG00.isOpen }"
        :style="{ zIndex: popupItem.PR01PG00.idx }"
        ref="PR01PG00"
        v-if="popupItem.PR01PG00"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap" tabindex="0">
          <div class="pop_header">
            <h3>필터</h3>
          </div>
          <div class="pop_content">
            <Tab
              :data="{
                option: { type: 2 },
                data: [
                  {
                    selected: true,
                    controls: 'tab_panel_filter_01',
                    title: '데이터',
                    active: true,
                  },
                  {
                    selected: false,
                    controls: 'tab_panel_filter_02',
                    title: '소진시 속도',
                    active: true,
                  },
                  {
                    selected: false,
                    controls: 'tab_panel_filter_03',
                    title: '가격',
                    active: false,
                  },
                  {
                    selected: false,
                    controls: 'tab_panel_filter_04',
                    title: '통화량',
                    active: false,
                  },
                  {
                    selected: false,
                    controls: 'tab_panel_filter_05',
                    title: '문자량',
                    active: false,
                  },
                  {
                    selected: false,
                    controls: 'tab_panel_filter_06',
                    title: '파트너사',
                    active: false,
                  },
                  {
                    selected: false,
                    controls: 'tab_panel_filter_07',
                    title: '통신기술',
                    active: false,
                  },
                  {
                    selected: false,
                    controls: 'tab_panel_filter_08',
                    title: '할인 기간',
                    active: false,
                  },
                  {
                    selected: false,
                    controls: 'tab_panel_filter_09',
                    title: '부가서비스',
                    active: false,
                  },
                  {
                    selected: false,
                    controls: 'tab_panel_filter_10',
                    title: '전용요금제',
                    active: false,
                  },
                ],
              }"
            >
              <template v-slot:tab_panel_filter_01>
                <h3 class="blind">데이터</h3>
                <div class="item_list02">
                  <ul>
                    <li v-for="(a, i) in PR01PG00.data" :key="i">
                      <div class="radio_item ty01">
                        <input
                          type="radio"
                          :id="a.id"
                          name="filter_radio01"
                          :value="a.id"
                          v-bind:checked="a.checked"
                          @change="PR01PG00Change('data', a, i)"
                        />
                        <label :for="a.id">{{ a.title }}</label>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- // item_list02 -->
              </template>
              <template v-slot:tab_panel_filter_02>
                <h3 class="blind">소진시 속도</h3>
                <div class="item_list ty03">
                  <ul>
                    <li v-for="(a, i) in PR01PG00.speed" :key="i">
                      <div class="check_st st02">
                        <input
                          type="checkbox"
                          :id="a.id"
                          :value="a.id"
                          name=""
                          v-bind:checked="a.checked"
                          @change="PR01PG00Change('speed', a, i)"
                        />
                        <label :for="a.id"
                          >{{ a.title }}<span>{{ a.info }}</span></label
                        >
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- // item_list ty03 -->
              </template>
              <template v-slot:tab_panel_filter_03>
                <h3 class="blind">가격</h3>
                <div class="range_area">
                  <div class="value">
                    <input
                      type="text"
                      id="range_val"
                      :value="`${PR01PG00_range[0]}원 ~ ${PR01PG00_range[1]}원`"
                      readonly
                    />
                  </div>
                  <div class="slider">
                    <v-range-slider
                      v-model="PR01PG00_range"
                      min="0"
                      max="60000"
                      step="1000"
                      track-color="#ddd"
                      track-fill-color="#fc6969"
                      strict
                    ></v-range-slider>

                    <!-- <div id="filter_range"></div> -->
                  </div>
                </div>
                <div class="item_list02">
                  <ul>
                    <li v-for="(a, i) in PR01PG00.price" :key="i">
                      <div class="radio_item ty01">
                        <input
                          type="radio"
                          :id="a.id"
                          :value="a.id"
                          name="filter_radio02"
                          :data-min="a.min"
                          :data-max="a.max"
                          @change="PR01PG00Change('price', a, i)"
                          v-bind:checked="a.checked"
                        />
                        <label :for="a.id">{{ a.title }}</label>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- // item_list02 -->
              </template>
              <template v-slot:tab_panel_filter_04>
                <h3 class="blind">통화량</h3>
                <div class="item_list ty03">
                  <ul>
                    <li v-for="(a, i) in PR01PG00.call" :key="i">
                      <div class="check_st">
                        <input
                          type="checkbox"
                          :id="a.id"
                          :value="a.id"
                          name=""
                          v-bind:checked="a.checked"
                          @change="PR01PG00Change('call', a, i)"
                        />
                        <label :for="a.id">{{ a.title }}</label>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- // item_list ty03 -->
              </template>
              <template v-slot:tab_panel_filter_05>
                <h3 class="blind">문자량</h3>
                <div class="item_list ty03">
                  <ul>
                    <li v-for="(a, i) in PR01PG00.sms" :key="i">
                      <div class="check_st">
                        <input
                          type="checkbox"
                          :id="a.id"
                          :value="a.id"
                          name=""
                          v-bind:checked="a.checked"
                          @change="PR01PG00Change('sms', a, i)"
                        />
                        <label :for="a.id">{{ a.title }}</label>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- // item_list ty03 -->
              </template>
              <template v-slot:tab_panel_filter_06>
                <h3 class="blind">파트너사</h3>
                <div class="item_list02 ty02">
                  <ul>
                    <li v-for="(a, i) in PR01PG00.partner" :key="i">
                      <div class="check_st">
                        <input
                          type="checkbox"
                          :id="a.id"
                          :value="a.id"
                          name=""
                          v-bind:checked="a.checked"
                          @change="PR01PG00Change('partner', a, i)"
                        />
                        <label :for="a.id">{{ a.title }}</label>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- // item_list02 ty02 -->
              </template>
              <template v-slot:tab_panel_filter_07>
                <h3 class="blind">통신기술</h3>
                <div class="item_list02">
                  <ul>
                    <li v-for="(a, i) in PR01PG00.tech" :key="i">
                      <div class="radio_item ty01">
                        <input
                          type="radio"
                          :id="a.id"
                          :value="a.id"
                          name="filter_radio03"
                          v-bind:checked="a.checked"
                          @change="PR01PG00Change('tech', a, i)"
                        />
                        <label :for="a.id">{{ a.title }}</label>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- // item_list02 -->
              </template>
              <template v-slot:tab_panel_filter_08>
                <h3 class="blind">할인 기간</h3>
                <div class="item_list02">
                  <ul>
                    <li v-for="(a, i) in PR01PG00.discount" :key="i">
                      <div class="radio_item ty01">
                        <input
                          type="radio"
                          :id="a.id"
                          :value="a.id"
                          name="filter_radio04"
                          v-bind:checked="a.checked"
                          @change="PR01PG00Change('discount', a, i)"
                        />
                        <label :for="a.id">{{ a.title }}</label>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- // item_list02 -->
              </template>
              <template v-slot:tab_panel_filter_09>
                <h3 class="blind">부가서비스</h3>
                <div class="item_list ty03">
                  <ul>
                    <li v-for="(a, i) in PR01PG00.service" :key="i">
                      <div class="check_st">
                        <input
                          type="checkbox"
                          :id="a.id"
                          :value="a.id"
                          name=""
                          v-bind:checked="a.checked"
                          @change="PR01PG00Change('service', a, i)"
                        />
                        <label :for="a.id">{{ a.title }}</label>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- // item_list ty03 -->
              </template>
              <template v-slot:tab_panel_filter_10>
                <h3 class="blind">전용요금제</h3>
                <div class="item_list ty03">
                  <ul>
                    <li v-for="(a, i) in PR01PG00.target" :key="i">
                      <div class="check_st">
                        <input
                          type="checkbox"
                          :id="a.id"
                          :value="a.id"
                          name=""
                          v-bind:checked="a.checked"
                          @change="PR01PG00Change('target', a, i)"
                        />
                        <label :for="a.id">{{ a.title }}</label>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- // item_list ty03 -->
              </template>
            </Tab>
          </div>
          <!-- .pop_content -->

          <div class="pop_footer">
            <div class="filter_keyword" v-if="PR01PG00_checked.length <= 0">
              <p class="none">항목을 선택해 주세요</p>
            </div>
            <div class="filter_keyword" v-else>
              <!-- <Filter :data="['지금 HOT한', '이달의 추천', '데이터x통화 무제한', '사은품 팡팡', '인터넷 결합 요금제', '카톡/인터넷용', '5G 요금제', '부모님 추천', '초저가요금제', '통화무제한' ]" /> -->
              <Filter :data="PR01PG00_checked" @filterDelete="filterDelete($event)" />
            </div>
            <div class="btn_group">
              <button type="button" class="btn md reset">초기화</button>
              <button type="button" class="btn md c01">
                <div v-if="PR01PG00_loading" class="loading_bar">
                  <img src="/images/common/loading_bar.png" alt="로딩바" />
                </div>
                <div v-else class="result"><span>1,232</span>개의 결과 보기</div>
              </button>
            </div>
          </div>
          <button type="button" class="pop_close" @click="closePopup('PR01PG00', 'btn_PR01PG00')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <!-- .pop_wrap -->
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.PR01PG00B.isOpen }"
        :style="{ zIndex: popupItem.PR01PG00B.idx }"
        ref="PR01PG00B"
        v-if="popupItem.PR01PG00B"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap" tabindex="0">
          <div class="pop_header">
            <h3>요금제 비교</h3>
          </div>
          <div class="pop_content">
            <div class="section">
              <div class="comp_item_area">
                <div class="comp_item">
                  <div>
                    <em>인스 모바일 인터넷결합 5G 150GB+</em>
                    <strong>월 <span>14,900</span>원</strong>
                    <button type="button"><span class="blind">삭제</span></button>
                  </div>
                </div>
                <div class="comp_item">
                  <button type="button" @click="closePopup('PR01PG00B', 'content')">
                    요금제를 선택해주세요
                  </button>
                </div>
                <div class="comp_item pc_show">
                  <button type="button" @click="closePopup('PR01PG00B', 'content')">
                    요금제를 선택해주세요
                  </button>
                </div>
              </div>

              <div class="comp_item_info">
                <dl>
                  <dt>파트너사</dt>
                  <dd>
                    <div class="comp_dat">
                      <div class="img"><img src="/images/data/logo_partner20.png" alt="" /></div>
                      <b>인스모바일</b>
                    </div>
                  </dd>
                  <dd></dd>
                  <dd class="pc_show"></dd>
                </dl>
                <dl>
                  <dt>월 요금</dt>
                  <dd>
                    <div class="comp_dat">
                      <strong>월 <span>14,900</span>원</strong>
                      <em>6개월 이후 38,900원 (VAT 포함)</em>
                    </div>
                  </dd>
                  <dd></dd>
                  <dd class="pc_show"></dd>
                </dl>
                <dl>
                  <dt>데이터</dt>
                  <dd>
                    <div class="comp_dat">
                      <strong>150GB</strong>
                      <em>매일 2GB+3Mbps 속도로 무제한</em>
                    </div>
                  </dd>
                  <dd></dd>
                  <dd class="pc_show"></dd>
                </dl>
                <dl>
                  <dt>음성</dt>
                  <dd>
                    <div class="comp_dat">
                      <strong>기본제공</strong>
                      <em>부가/영상 100분</em>
                    </div>
                  </dd>
                  <dd></dd>
                  <dd class="pc_show"></dd>
                </dl>
                <dl>
                  <dt>문자</dt>
                  <dd>
                    <div class="comp_dat">
                      <strong>기본제공</strong>
                    </div>
                  </dd>
                  <dd></dd>
                  <dd class="pc_show"></dd>
                </dl>
                <dl>
                  <dt>초과 이용요금</dt>
                  <dd>
                    <ul class="text_list bull">
                      <li>음성통화(초) 1.98원, 영상통화(초) 3.3원</li>
                      <li>문자 SMS(건) 22원, LMS(건) 44원</li>
                      <li>MMS 사진/그림/배경음악(건) 220원</li>
                      <li>MMS 동영상 첨부(건) 440원</li>
                      <li>데이터 22.528원</li>
                    </ul>
                  </dd>
                  <dd></dd>
                  <dd class="pc_show"></dd>
                </dl>
                <dl>
                  <dt>유의사항</dt>
                  <dd>
                    <ul class="text_list bull">
                      <li>
                        잔여 음성/문자/데이터는 이월불가<br />
                        ※ [예시] USIM LTE 35 고객이 2016년 5월에 데이터를 550MB사용 200MB 미사용 시
                        200MB 소멸 (6월로 이월 불가)
                      </li>
                      <li>
                        요금제의 변경신청을 하는 경우에는 변경신청일 당일부터 변경된 요금을
                        적용합니다.
                      </li>
                    </ul>
                  </dd>
                  <dd></dd>
                  <dd class="pc_show"></dd>
                </dl>
              </div>
            </div>
            <!-- // section -->
          </div>
          <button type="button" class="pop_close" @click="closePopup('PR01PG00B', 'content')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-MA01-PG03 / ALFM-PR01-PG01] 사용자 리뷰 팝업 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.userReview.isOpen }"
        :style="{ zIndex: popupItem.userReview.idx }"
        ref="userReview"
        v-if="popupItem.userReview"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap" tabindex="0">
          <div class="pop_header">
            <h3>사용자 리뷰</h3>
          </div>
          <div class="pop_content">
            <div class="section">
              <div class="line_list">
                <ul>
                  <li>
                    <div class="list_con ty02">
                      <div class="cus">
                        <span class="name">김*파</span>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width: 40%"></div>
                        </div>
                        <span class="score">0.0</span>
                        <span class="date">2023.04.11</span>
                      </div>
                      <span class="tit">
                        전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과
                        비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="list_con ty02">
                      <div class="cus">
                        <span class="name">김*파</span>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width: 40%"></div>
                        </div>
                        <span class="score">0.0</span>
                        <span class="date">2023.04.11</span>
                      </div>
                      <span class="tit">
                        전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과
                        비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="list_con ty02">
                      <div class="cus">
                        <span class="name">김*파</span>
                        <div class="star_box">
                          <div class="star"></div>
                          <div class="star_active" style="width: 40%"></div>
                        </div>
                        <span class="score">0.0</span>
                        <span class="date">2023.04.11</span>
                      </div>
                      <span class="tit">
                        전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과
                        비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- // section -->
          </div>
          <button
            type="button"
            class="pop_close"
            @click="closePopup('userReview', 'btn_userReview')"
          >
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-MA01-PG03 / ALFM-PR01-PG01] 블로그 리뷰 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.blogReview.isOpen }"
        :style="{ zIndex: popupItem.blogReview.idx }"
        ref="blogReview"
        v-if="popupItem.blogReview"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap" tabindex="0">
          <div class="pop_header">
            <h3>블로그 리뷰</h3>
          </div>
          <div class="pop_content">
            <div class="section">
              <div class="line_list">
                <ul>
                  <li>
                    <NuxtLink :to="{}" class="list_con ty03">
                      <div class="list_lft">
                        <div class="cus">
                          <span class="name">올리브소스 님</span>
                          <span class="date">2023.04.11</span>
                        </div>
                        <span class="tit ellipsis2">
                          전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과
                          비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다.
                        </span>
                      </div>
                      <div class="img">
                        <img src="/images/data/img_thum.png" alt="블로그 리뷰 썸네일" />
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink :to="{}" class="list_con ty03">
                      <div class="list_lft">
                        <div class="cus">
                          <span class="name">올리브소스 님</span>
                          <span class="date">2023.04.11</span>
                        </div>
                        <span class="tit ellipsis2">
                          전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과
                          비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다.
                        </span>
                      </div>
                      <div class="img">
                        <img src="/images/data/img_thum.png" alt="블로그 리뷰 썸네일" />
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink :to="{}" class="list_con ty03">
                      <div class="list_lft">
                        <div class="cus">
                          <span class="name">올리브소스 님</span>
                          <span class="date">2023.04.11</span>
                        </div>
                        <span class="tit ellipsis2">
                          전에 LG U+사용했었는데 현재 알뜰요금제 변경후 10일정도 된것 같은데 전과
                          비교해서 사용하는데 아무 문제없이 잘 사용 하고 있습니다.
                        </span>
                      </div>
                      <div class="img">
                        <img src="/images/data/img_thum.png" alt="블로그 리뷰 썸네일" />
                      </div>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
            <!-- // section -->
          </div>
          <button
            type="button"
            class="pop_close"
            @click="closePopup('blogReview', 'btn_blogReview')"
          >
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-CM02-PG00] 서비스 점검중 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.CM02PG00.isOpen }"
        :style="{ zIndex: popupItem.CM02PG00.idx }"
        ref="CM02PG00"
        v-if="popupItem.CM02PG00"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap" tabindex="0">
          <div class="pop_header">
            <h3>안내</h3>
          </div>
          <div class="pop_content">
            <div class="section error_area ty02">
              <div class="ttl">
                <h2>지금은<br />시스템 점검중입니다</h2>
                <p>
                  보다 나은 서비스 제공을 위해<br />
                  서비스 점검 작업을 진행하고 있습니다.<br />
                  이용에 불편을 드려 죄송합니다.<br />
                  빠른 시간 내에 정상적인 서비스가 가능하도록<br />
                  최선을 다하겠습니다.<br /><br />

                  감사합니다.
                </p>
                <div class="error_time">
                  <strong>점검시간</strong>
                  <span>1월25일 00:00 ~ 1월 25일 04:00</span>
                </div>
              </div>
            </div>
            <!-- // section -->
          </div>
          <div class="pop_footer">
            <div class="btn_group">
              <button
                type="button"
                class="btn lg c01"
                @click="closePopup('CM02PG00', 'btn_CM02PG00')"
              >
                이전 화면으로 돌아가기
              </button>
            </div>
          </div>
          <button type="button" class="pop_close" @click="closePopup('CM02PG00', 'btn_CM02PG00')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-PR01-PG01] 알파만의 혜택 > 혜택보기 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.PR01PG01.isOpen }"
        :style="{ zIndex: popupItem.PR01PG01.idx }"
        ref="PR01PG01"
        v-if="popupItem.PR01PG01"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap" tabindex="0">
          <div class="pop_header">
            <h3>스타벅스</h3>
          </div>
          <div class="pop_content">
            <div class="section">
              <img src="/images/data/img_benefits02.png" alt="" style="max-width: 100%" />
            </div>
          </div>
          <button type="button" class="pop_close" @click="closePopup('PR01PG01', 'btn_PR01PG01')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- 유심구매 [ALFM-BU01-PO00] eSIM 가능 핸드폰 모델 확인 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.BU01PO00.isOpen }"
        :style="{ zIndex: popupItem.BU01PO00.idx }"
        ref="BU01PO00"
        v-if="popupItem.BU01PO00"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap height_fix" tabindex="0">
          <div class="pop_header">
            <h3>eSIM 가능 핸드폰 모델 확인</h3>
          </div>
          <div class="pop_content">
            <div class="section">
              <div class="box_line">
                <strong>삼성</strong>
                <ul class="text_list bull">
                  <li>갤럭시 S23</li>
                  <li>갤럭시 S23+</li>
                  <li>갤럭시 S23 Ultra</li>
                  <li>갤럭시 플립 4</li>
                  <li>갤럭시 폴드 4</li>
                </ul>
              </div>
              <div class="box_line">
                <strong>아이폰</strong>
                <ul class="text_list bull">
                  <li>IPhone XR / XS / XS Max</li>
                  <li>IPhone 11 / 11 Pro / 11 Pro Max</li>
                  <li>IPhone 12 mini / 12 / 12 Pro / 12 Pro Max</li>
                  <li>IPhone 13 mini / 13 / 13 Pro / 13 Pro Max</li>
                  <li>IPhone SE2 / IPhone SE3</li>
                  <li>IPhone 14 / 14 Pro / 14 Pro Max / 14 Plus</li>
                </ul>
              </div>
            </div>
            <!-- // section -->
            <div class="section">
              <div class="box_gray">
                <ul class="text_list bull">
                  <li>
                    eSIM서비스는 eSIM을 지원하는 핸드폰 모델에서만 사용 가능하며, 사용가능한
                    단말기는 추후 계속 늘어날 수 있습니다.
                  </li>
                  <li>제조사 홈페이지에서 모델별 eSIM지원 여부 확인 후 신청해주세요.</li>
                </ul>
              </div>
            </div>
            <!-- // section -->
          </div>
          <div class="pop_footer">
            <div class="btn_group">
              <button type="button" class="btn md c03">확인</button>
            </div>
          </div>
          <button type="button" class="pop_close" @click="closePopup('BU01PO00', 'btn_BU01PO00')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- 유심구매 [ALFM-BU02-PO00] 편의점 검색 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.BU02PO00.isOpen }"
        :style="{ zIndex: popupItem.BU02PO00.idx }"
        ref="BU02PO00"
        v-if="popupItem.BU02PO00"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap height_fix" tabindex="0">
          <div class="pop_header">
            <h3>GS25 편의점</h3>
            <!-- 편의점 명 -->
          </div>
          <div class="pop_content">
            <div class="section">
              <div class="box_gray">
                <ul class="text_list bull">
                  <li>
                    매장 방문 전 반드시 매장에 바로픽업이 가능한지 전화로 확인 하시기 바랍니다.
                  </li>
                </ul>
              </div>
            </div>
            <div class="section">
              <Tab
                :data="{
                  option: { type: 1 },
                  data: [
                    { selected: true, controls: 'tab_panel_01_01', title: '주소/매장명' },
                    { selected: false, controls: 'tab_panel_01_02', title: '지하철' },
                    { selected: false, controls: 'tab_panel_01_03', title: '내 위치' },
                  ],
                }"
              >
                <template v-slot:tab_panel_01_01>
                  <h3 class="blind">주소/매장명</h3>
                  <div class="panel_cnt">
                    <div class="form_wrap">
                      <div class="form_group">
                        <div class="form_item">
                          <InputBox
                            :option="{ placeholder: '주소 또는 매장명 입력', search: true }"
                            @inputValue="console.log($event)"
                          />
                        </div>
                        <div class="text_info">
                          매장 주소가 '한강대로23'일 경우, '한강대로'로 검색하셔야 합니다.
                        </div>
                      </div>
                    </div>
                    <!-- filter -->
                    <!-- <Tag :data="frontData.tag.usim" :option="{ type:'default', multi: false }" /> 24.04.09 삭제 -->
                    <!-- //filter -->
                    <!-- 검색 결과 리스트 -->
                    <div class="sort_wrap">
                      <div>총 1342건 검색되었습니다</div>
                    </div>
                    <div class="line_list">
                      <ul>
                        <li>
                          <div class="list_con ty03">
                            <div class="list_lft">
                              <div class="cus">
                                <span class="tit_bo">GS25상일동아점</span>
                                <strong class="tit_inven fc01">재고 4개</strong>
                              </div>
                              <span class="tit ty03"
                                >서울 강동구 상암로 405, 제101동 제상가1호 (상일동 473, 외 1필지
                                상일동아아파트)</span
                              >
                              <div class="tel_info">070-1111-2222</div>
                              <!-- 전화번호 추가 23/11/15 -->
                              <div class="bag_list">
                                <span class="bag clr c02">유심판매</span>
                                <span class="bag clr c03">바로픽업</span>
                              </div>
                            </div>
                            <div class="bo_btn_list">
                              <button type="button" class="btn_bo local">
                                <span class="blind">지도 보기</span>
                              </button>
                              <button type="button" class="btn_bo call">
                                <span class="blind">전화 걸기</span>
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="list_con ty03">
                            <div class="list_lft">
                              <div class="cus">
                                <span class="tit_bo">GS25상일동아점</span>
                                <strong class="tit_inven fc01">재고 4개</strong>
                              </div>
                              <span class="tit ty03"
                                >서울 강동구 상암로 405, 제101동 제상가1호 (상일동 473, 외 1필지
                                상일동아아파트)</span
                              >
                              <div class="tel_info">070-1111-2222</div>
                              <!-- 전화번호 추가 23/11/15 -->
                              <div class="bag_list">
                                <span class="bag clr c02">유심판매</span>
                                <span class="bag clr c03">바로픽업</span>
                              </div>
                            </div>
                            <div class="bo_btn_list">
                              <button type="button" class="btn_bo local">
                                <span class="blind">지도 보기</span>
                              </button>
                              <button type="button" class="btn_bo call">
                                <span class="blind">전화 걸기</span>
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="list_con ty03">
                            <div class="list_lft">
                              <div class="cus">
                                <span class="tit_bo">GS25상일동아점</span>
                                <strong class="tit_inven fc01">재고 4개</strong>
                              </div>
                              <span class="tit ty03"
                                >서울 강동구 상암로 405, 제101동 제상가1호 (상일동 473, 외 1필지
                                상일동아아파트)</span
                              >
                              <div class="tel_info">070-1111-2222</div>
                              <!-- 전화번호 추가 23/11/15 -->
                              <div class="bag_list">
                                <span class="bag clr c02">유심판매</span>
                                <span class="bag clr c03">바로픽업</span>
                              </div>
                            </div>
                            <div class="bo_btn_list">
                              <button type="button" class="btn_bo local">
                                <span class="blind">지도 보기</span>
                              </button>
                              <button type="button" class="btn_bo call">
                                <span class="blind">전화 걸기</span>
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <!-- markup 변경 ; 23/11/08 -->
                      <div class="btn_wrap center">
                        <button type="button" class="btn round more_d">더 볼래요</button>
                      </div>
                      <!-- //markup 변경 ; 23/11/08 -->
                    </div>
                    <!-- //검색 결과 리스트 -->
                  </div>
                </template>
                <template v-slot:tab_panel_01_02>
                  <h3 class="blind">지하철</h3>
                  <div class="panel_cnt">
                    <div class="form_wrap">
                      <div class="form_group">
                        <div class="form_item">
                          <button
                            type="button"
                            class="btn_select"
                            ref="btn_subwayArea"
                            id="btn_subwayArea"
                            @click="$refs.subwayArea.open"
                          >
                            지역 선택
                          </button>
                        </div>
                        <div class="form_item">
                          <button
                            type="button"
                            class="btn_select"
                            ref="btn_subwayLine"
                            id="btn_subwayLine"
                            @click="$refs.subwayLine.open"
                          >
                            노선 선택
                          </button>
                        </div>
                        <div class="form_item">
                          <button
                            type="button"
                            class="btn_select"
                            ref="btn_subwayStation"
                            id="btn_subwayStation"
                            @click="$refs.subwayStation.open"
                          >
                            역 선택
                          </button>
                        </div>
                        <PopupSelect
                          ref="subwayArea"
                          :option="{
                            data: 'subwayArea',
                            popupTitle: '지역 선택',
                            targetBtn: 'btn_subwayArea',
                          }"
                          @selectItem="console.log($event)"
                        />
                        <PopupSelect
                          ref="subwayLine"
                          :option="{
                            data: 'subwayLine',
                            popupTitle: '노선 선택',
                            targetBtn: 'btn_subwayLine',
                          }"
                          @selectItem="console.log($event)"
                        />
                        <PopupSelect
                          ref="subwayStation"
                          :option="{
                            data: 'subwayStation',
                            popupTitle: '역 선택',
                            targetBtn: 'btn_subwayStation',
                          }"
                          @selectItem="console.log($event)"
                        />
                      </div>
                    </div>
                    <!-- filter -->
                    <Tag :data="frontData.tag.usim" :option="{ type: 'default', multi: false }" />
                    <!-- //filter -->
                    <!-- 검색 결과 리스트 -->
                    <div class="sort_wrap">
                      <div>총 1342건 검색되었습니다</div>
                    </div>
                    <div class="line_list">
                      <ul>
                        <li>
                          <div class="list_con ty03">
                            <div class="list_lft">
                              <div class="cus">
                                <span class="tit_bo">GS25상일동아점</span>
                                <strong class="tit_inven fc01">재고 4개</strong>
                              </div>
                              <span class="tit ty03"
                                >서울 강동구 상암로 405, 제101동 제상가1호 (상일동 473, 외 1필지
                                상일동아아파트)</span
                              >
                              <div class="tel_info">070-1111-2222</div>
                              <!-- 전화번호 추가 23/11/15 -->
                              <div class="bag_list">
                                <span class="bag clr c02">유심판매</span>
                                <span class="bag clr c03">바로픽업</span>
                              </div>
                            </div>
                            <div class="bo_btn_list">
                              <button type="button" class="btn_bo local">
                                <span class="blind">지도 보기</span>
                              </button>
                              <button type="button" class="btn_bo call">
                                <span class="blind">전화 걸기</span>
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="list_con ty03">
                            <div class="list_lft">
                              <div class="cus">
                                <span class="tit_bo">GS25상일동아점</span>
                                <strong class="tit_inven fc01">재고 4개</strong>
                              </div>
                              <span class="tit ty03"
                                >서울 강동구 상암로 405, 제101동 제상가1호 (상일동 473, 외 1필지
                                상일동아아파트)</span
                              >
                              <div class="tel_info">070-1111-2222</div>
                              <!-- 전화번호 추가 23/11/15 -->
                              <div class="bag_list">
                                <span class="bag clr c02">유심판매</span>
                                <span class="bag clr c03">바로픽업</span>
                              </div>
                            </div>
                            <div class="bo_btn_list">
                              <button type="button" class="btn_bo local">
                                <span class="blind">지도 보기</span>
                              </button>
                              <button type="button" class="btn_bo call">
                                <span class="blind">전화 걸기</span>
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="list_con ty03">
                            <div class="list_lft">
                              <div class="cus">
                                <span class="tit_bo">GS25상일동아점</span>
                                <strong class="tit_inven fc01">재고 4개</strong>
                              </div>
                              <span class="tit ty03"
                                >서울 강동구 상암로 405, 제101동 제상가1호 (상일동 473, 외 1필지
                                상일동아아파트)</span
                              >
                              <div class="tel_info">070-1111-2222</div>
                              <!-- 전화번호 추가 23/11/15 -->
                              <div class="bag_list">
                                <span class="bag clr c02">유심판매</span>
                                <span class="bag clr c03">바로픽업</span>
                              </div>
                            </div>
                            <div class="bo_btn_list">
                              <button type="button" class="btn_bo local">
                                <span class="blind">지도 보기</span>
                              </button>
                              <button type="button" class="btn_bo call">
                                <span class="blind">전화 걸기</span>
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <!-- markup 변경 ; 23/11/08 -->
                      <div class="btn_wrap center">
                        <button type="button" class="btn round more_d">더 볼래요</button>
                      </div>
                      <!-- //markup 변경 ; 23/11/08 -->
                    </div>
                    <!-- //검색 결과 리스트 -->
                  </div>
                </template>
                <template v-slot:tab_panel_01_03>
                  <h3 class="blind">내 위치</h3>
                  <div class="panel_cnt">
                    <!-- 검색 결과 리스트 -->
                    <div class="sort_wrap">
                      <div>총 1342건 검색되었습니다</div>
                    </div>
                    <div class="line_list">
                      <ul>
                        <li>
                          <div class="list_con ty03">
                            <div class="list_lft">
                              <div class="cus">
                                <span class="tit_bo">GS25상일동아점</span>
                                <strong class="tit_inven fc01">재고 4개</strong>
                              </div>
                              <span class="tit ty03"
                                >서울 강동구 상암로 405, 제101동 제상가1호 (상일동 473, 외 1필지
                                상일동아아파트)</span
                              >
                              <div class="tel_info">070-1111-2222</div>
                              <!-- 전화번호 추가 23/11/15 -->
                              <div class="bag_list">
                                <span class="bag clr c02">유심판매</span>
                                <span class="bag clr c03">바로픽업</span>
                              </div>
                            </div>
                            <div class="bo_btn_list">
                              <button type="button" class="btn_bo local">
                                <span class="blind">지도 보기</span>
                              </button>
                              <button type="button" class="btn_bo call">
                                <span class="blind">전화 걸기</span>
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="list_con ty03">
                            <div class="list_lft">
                              <div class="cus">
                                <span class="tit_bo">GS25상일동아점</span>
                                <strong class="tit_inven fc01">재고 4개</strong>
                              </div>
                              <span class="tit ty03"
                                >서울 강동구 상암로 405, 제101동 제상가1호 (상일동 473, 외 1필지
                                상일동아아파트)</span
                              >
                              <div class="tel_info">070-1111-2222</div>
                              <!-- 전화번호 추가 23/11/15 -->
                              <div class="bag_list">
                                <span class="bag clr c02">유심판매</span>
                                <span class="bag clr c03">바로픽업</span>
                              </div>
                            </div>
                            <div class="bo_btn_list">
                              <button type="button" class="btn_bo local">
                                <span class="blind">지도 보기</span>
                              </button>
                              <button type="button" class="btn_bo call">
                                <span class="blind">전화 걸기</span>
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="list_con ty03">
                            <div class="list_lft">
                              <div class="cus">
                                <span class="tit_bo">GS25상일동아점</span>
                                <strong class="tit_inven fc01">재고 4개</strong>
                              </div>
                              <span class="tit ty03"
                                >서울 강동구 상암로 405, 제101동 제상가1호 (상일동 473, 외 1필지
                                상일동아아파트)</span
                              >
                              <div class="tel_info">070-1111-2222</div>
                              <!-- 전화번호 추가 23/11/15 -->
                              <div class="bag_list">
                                <span class="bag clr c02">유심판매</span>
                                <span class="bag clr c03">바로픽업</span>
                              </div>
                            </div>
                            <div class="bo_btn_list">
                              <button type="button" class="btn_bo local">
                                <span class="blind">지도 보기</span>
                              </button>
                              <button type="button" class="btn_bo call">
                                <span class="blind">전화 걸기</span>
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <!-- markup 변경 ; 23/11/08 -->
                      <div class="btn_wrap center">
                        <button type="button" class="btn round more_d">더 볼래요</button>
                      </div>
                      <!-- //markup 변경 ; 23/11/08 -->
                    </div>
                    <!-- //검색 결과 리스트 -->
                  </div>
                </template>
              </Tab>

              <NoData :option="{ type: 'sch', html: '<p>검색 결과가 없습니다.</p>' }" />
            </div>
            <!-- // section -->
          </div>

          <button type="button" class="pop_close" @click="closePopup('BU02PO00', 'btn_BU02PO00')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
      <!-- // pop_layer -->
    </Transition>

    <!-- [ALFM-PR02-PO00] 내게 맞는 요금제 찾기 : intro -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.PR02PO00.isOpen }"
        :style="{ zIndex: popupItem.PR02PO00.idx }"
        ref="PR02PO00"
        v-if="popupItem.PR02PO00"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap height_fix" tabindex="0">
          <div class="pop_header">
            <h3>내게 맞는 요금제 찾기</h3>
          </div>
          <div class="pop_content">
            <div class="page_info">
              고객님에게 꼭 맞는 <br />
              요금제를 추천해드리기 위해 <br />
              몇가지만 물어볼게요!
            </div>
            <div class="section">
              <div class="char_myplintro">
                <Lottie name="complete" />
              </div>
            </div>
          </div>
          <div class="pop_footer">
            <div class="btn_group">
              <button type="button" class="btn lg c01">시작하기</button>
            </div>
          </div>
          <button
            type="button"
            class="pop_close"
            id="btn_PR02Alert"
            @click="this.$emit('openAlert', ['PR02Alert', 'btn_PR02Alert', 101])"
          >
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-PR02-PO01] 내게 맞는 요금제 찾기 : STEP1 통신사 선택 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.PR02PO01.isOpen }"
        :style="{ zIndex: popupItem.PR02PO01.idx }"
        ref="PR02PO01"
        v-if="popupItem.PR02PO01"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap height_fix" tabindex="0">
          <div class="pop_header">
            <h3>내게 맞는 요금제 찾기</h3>
          </div>
          <div class="pop_content">
            <!-- progress bar 추가 ; 23/11/23 -->
            <ProgressBar :barInfo="{ type: 'ty01' }" />
            <!-- //progress bar -->

            <div class="page_info">
              현재 사용하고 있는<br />
              <span class="fc01">통신사</span>는 어디인가요?
            </div>

            <div class="section">
              <RadioActive
                :data="{
                  option: { type: 'ty02', itemList: 1 },
                  data: [
                    { checked: false, id: 'step01_01', value: 'LG U+' },
                    { checked: false, id: 'step01_02', value: 'KT' },
                    { checked: false, id: 'step01_03', value: 'SKT' },
                    { checked: false, id: 'step01_04', value: 'LG U+ 알뜰폰' },
                    { checked: false, id: 'step01_05', value: 'KT 알뜰폰' },
                    { checked: false, id: 'step01_06', value: 'SKT 알뜰폰' },
                    { checked: false, id: 'step01_07', value: '사용중인 통신사가 없어요' },
                  ],
                }"
                @checkItem="findRatePlan = $event"
              />
            </div>
            <!-- // section -->
          </div>
          <div class="pop_footer">
            <div class="btn_group">
              <button
                type="button"
                class="btn lg c01"
                id="nextBtn"
                v-bind:disabled="findRatePlan == false"
              >
                다음으로
              </button>
            </div>
          </div>
          <button
            type="button"
            class="pop_close"
            id="btn_PR02Alert"
            @click="this.$emit('openAlert', ['PR02Alert', 'btn_PR02Alert', 101])"
          >
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-PR02-PO02] 내게 맞는 요금제 찾기 : STEP2 데이터 이용량 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.PR02PO02.isOpen }"
        :style="{ zIndex: popupItem.PR02PO02.idx }"
        ref="PR02PO02"
        v-if="popupItem.PR02PO02"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap height_fix" tabindex="0">
          <div class="pop_header">
            <h3>내게 맞는 요금제 찾기</h3>
          </div>
          <div class="pop_content">
            <!-- progress bar 추가 ; 23/11/23 -->
            <ProgressBar :barInfo="{ type: 'ty01' }" />
            <!-- //progress bar -->

            <div class="page_info">
              한달에 <span class="fc01">데이터</span>는 <br />
              얼마나 사용하세요?
            </div>

            <div class="section">
              <RadioActive
                :data="{
                  option: { type: 'ty04', itemList: 1 },
                  data: [
                    {
                      checked: false,
                      id: 'ty04_radio_01',
                      value: '고화질의 영상을 즐기고, 고용량의 게임도 즐겨요',
                      info: '100GB 보다 많이 사용',
                      img: '/images/component/img_data_1.png',
                    },
                    {
                      checked: false,
                      id: 'ty04_radio_02',
                      value: '1-2시간 이상 영상을 보고, SNS를 자주해요',
                      info: '약 50~100B 사용',
                      img: '/images/component/img_data_2.png',
                    },
                    {
                      checked: false,
                      id: 'ty04_radio_03',
                      value: '카톡, SNS, 인터넷에 주로 데이터를 사용해요',
                      info: '약 10~50GB 사용',
                      img: '/images/component/img_data_3.png',
                    },
                    {
                      checked: false,
                      id: 'ty04_radio_04',
                      value: '데이터는 거의 사용하지 않아요',
                      info: '약 10GB 미만 사용',
                      img: '/images/component/img_data_4.png',
                    },
                  ],
                }"
                @checkItem="findRatePlan = $event"
              />
            </div>
            <!-- // section -->
          </div>
          <div class="pop_footer">
            <div class="btn_group">
              <button
                type="button"
                class="btn lg c01"
                id="nextBtn"
                v-bind:disabled="findRatePlan == false"
              >
                다음으로
              </button>
            </div>
          </div>
          <button
            type="button"
            class="pop_close"
            id="btn_PR02Alert"
            @click="this.$emit('openAlert', ['PR02Alert', 'btn_PR02Alert', 101])"
          >
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-PR02-PO03] 내게 맞는 요금제 찾기 : STEP3 통화 이용량 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.PR02PO03.isOpen }"
        :style="{ zIndex: popupItem.PR02PO03.idx }"
        ref="PR02PO03"
        v-if="popupItem.PR02PO03"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap height_fix" tabindex="0">
          <div class="pop_header">
            <h3>내게 맞는 요금제 찾기</h3>
          </div>
          <div class="pop_content">
            <!-- progress bar 추가 ; 23/11/23 -->
            <ProgressBar :barInfo="{ type: 'ty01' }" />
            <!-- //progress bar -->

            <div class="page_info">
              하루에 <span class="fc01">통화</span>는 <br />
              얼마나 하시나요?
            </div>

            <div class="section">
              <RadioActive
                :data="{
                  option: { type: 'ty03', itemList: 1 },
                  data: [
                    {
                      checked: false,
                      id: 'step03_01',
                      value: '걱정 없이 마음껏 통화해요',
                      info: '한 달에 600분 이상',
                    },
                    {
                      checked: false,
                      id: 'step03_02',
                      value: '10분~20분 정도 해요',
                      info: '한 달에 200분 이상~ 600분 미만',
                    },
                    {
                      checked: false,
                      id: 'step03_03',
                      value: '5~10분 정도 해요',
                      info: '한 달에 90분 이상~ 200분 미만',
                    },
                    {
                      checked: false,
                      id: 'step03_04',
                      value: '3분 이내로 필요한 통화만 해요',
                      info: '한 달에 30분 이상~ 90분 미만',
                    },
                    {
                      checked: false,
                      id: 'step03_05',
                      value: '전화는 거의 하지 않아요',
                      info: '한 달에 30분 미만',
                    },
                  ],
                }"
                @checkItem="findRatePlan = $event"
              />
            </div>
            <!-- // section -->
          </div>
          <div class="pop_footer">
            <div class="btn_group">
              <button
                type="button"
                class="btn lg c01"
                id="nextBtn"
                v-bind:disabled="findRatePlan == false"
              >
                다음으로
              </button>
            </div>
          </div>
          <button
            type="button"
            class="pop_close"
            id="btn_PR02Alert"
            @click="this.$emit('openAlert', ['PR02Alert', 'btn_PR02Alert', 101])"
          >
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-PR02-PO04] 내게 맞는 요금제 찾기 : STEP4 통신 요금 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.PR02PO04.isOpen }"
        :style="{ zIndex: popupItem.PR02PO04.idx }"
        ref="PR02PO04"
        v-if="popupItem.PR02PO04"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap height_fix" tabindex="0">
          <div class="pop_header">
            <h3>내게 맞는 요금제 찾기</h3>
          </div>
          <div class="pop_content">
            <!-- progress bar 추가 ; 23/11/23 -->
            <ProgressBar :barInfo="{ type: 'ty01' }" />
            <!-- //progress bar -->

            <div class="page_info">
              지금 월 <span class="fc01">통신요금</span>은 <br />
              얼마나 내고 있으세요?
              <div class="sub">기기 할부금 제외</div>
            </div>

            <div class="section">
              <RadioActive
                :data="{
                  option: { type: 'ty02', itemList: 1 },
                  data: [
                    { checked: false, id: 'step04_01', value: '7만원 이상' },
                    { checked: false, id: 'step04_02', value: '5-6만원 대' },
                    { checked: false, id: 'step04_03', value: '3-4만원 대' },
                    { checked: false, id: 'step04_04', value: '1-2만원 대' },
                  ],
                }"
                @checkItem="findRatePlan = $event"
              />
            </div>
            <!-- // section -->
          </div>
          <div class="pop_footer">
            <div class="btn_group">
              <button
                type="button"
                class="btn lg c01"
                id="nextBtn"
                v-bind:disabled="findRatePlan == false"
              >
                다음으로
              </button>
            </div>
          </div>
          <button
            type="button"
            class="pop_close"
            id="btn_PR02Alert"
            @click="this.$emit('openAlert', ['PR02Alert', 'btn_PR02Alert', 101])"
          >
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-PR02-PO05] 내게 맞는 요금제 찾기 : STEP5 인터넷/TV 결합 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.PR02PO05.isOpen }"
        :style="{ zIndex: popupItem.PR02PO05.idx }"
        ref="PR02PO05"
        v-if="popupItem.PR02PO05"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap height_fix" tabindex="0">
          <div class="pop_header">
            <h3>내게 맞는 요금제 찾기</h3>
          </div>
          <div class="pop_content">
            <!-- progress bar 추가 ; 23/11/23 -->
            <ProgressBar :barInfo="{ type: 'ty01' }" />
            <!-- //progress bar -->

            <div class="page_info">
              혹시 <span class="fc01">인터넷/TV 결합</span>도 <br />
              필요하신가요?
            </div>

            <div class="section">
              <RadioActive
                :data="{
                  option: { type: 'ty02', itemList: 1 },
                  data: [
                    { checked: false, id: 'step05_01', value: '필요해요!' },
                    { checked: false, id: 'step05_02', value: '필요하지 않아요' },
                  ],
                }"
                @checkItem="findRatePlan = $event"
              />
            </div>
            <!-- // section -->
            <!-- banner 추가 23/11/22 -->
            <div class="section">
              <div class="con_bnr combi">
                <div class="combi_banner">
                  <div class="tex">
                    <span>U<sup>+</sup> 인터넷/TV 신규 가입 및 결합시</span>
                    <strong>1년간 매월 최대 11,000원 요금 할인</strong>
                  </div>
                  <img src="/images/content/img_bnr01.png" alt="" />
                </div>
              </div>
            </div>
            <!-- // section -->
          </div>
          <div class="pop_footer">
            <div class="btn_group">
              <button
                type="button"
                class="btn lg c01"
                id="nextBtn"
                v-bind:disabled="findRatePlan == false"
              >
                다음으로
              </button>
            </div>
          </div>
          <button
            type="button"
            class="pop_close"
            id="btn_PR02Alert"
            @click="this.$emit('openAlert', ['PR02Alert', 'btn_PR02Alert', 101])"
          >
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-PR02-PO06] 내게 맞는 요금제 찾기 : 요금제 로딩 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.PR02PO06.isOpen }"
        :style="{ zIndex: popupItem.PR02PO06.idx }"
        ref="PR02PO06"
        v-if="popupItem.PR02PO06"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap height_fix" tabindex="0">
          <div class="pop_header">
            <h3>내게 맞는 요금제 찾기</h3>
          </div>
          <div class="pop_content">
            <div class="page_info">
              지금 고객님의 취향에 <br />
              딱 맞는 요금제만 고르고 있어요
            </div>

            <div class="section">
              <div class="char_myplloading">
                <Lottie name="plan02" />
              </div>
            </div>
            <!-- // section -->
          </div>
          <div class="pop_footer" style="display: none">
            <div class="btn_group">
              <button type="button" class="btn lg c01" disabled>다음으로</button>
            </div>
          </div>
          <button
            type="button"
            class="pop_close"
            id="btn_PR02Alert"
            @click="this.$emit('openAlert', ['PR02Alert', 'btn_PR02Alert', 101])"
          >
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-PR02-PO07] 내게 맞는 요금제 찾기 : step6 추천 요금제 보기 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.PR02PO07.isOpen }"
        :style="{ zIndex: popupItem.PR02PO07.idx }"
        ref="PR02PO07"
        v-if="popupItem.PR02PO07"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap height_fix" tabindex="0">
          <div class="pop_header">
            <h3>내게 맞는 요금제 찾기</h3>
          </div>
          <div class="pop_content" ref="PR02PO07Content">
            <!-- 해당 컨텐츠 삭제 ; 23/11/22 -->
            <!-- <div class="section">
            <div class="usage_wrap result">
              <p class="speech gray">1-2시간 이상 영상을 시청하고, SNS 등 사용량이 많은 편이시군요</p>
              <p class="speech darkblue">1-2시간 정도 통화를 하시네요!</p>
              <Lottie name="plan04" />
            </div>
          </div> -->

            <!-- 추천 요금제 비교 table 추가 ; 23/11/22 -->
            <div class="section">
              <div class="page_info mgb20">
                얼마나 절약되었는지 <br />
                비교해 볼까요?
              </div>

              <!-- 요금제 table  -->
              <div class="table ty04 sticky">
                <table>
                  <caption>
                    통신사별 요금 정보
                  </caption>
                  <colgroup>
                    <col style="min-width: 80px" />
                    <col style="min-width: 100px" />
                    <col style="min-width: 100px" />
                    <col style="min-width: 100px" />
                  </colgroup>
                  <tbody>
                    <tr v-for="(d, i) in frontData.ratePlanTable" :key="i">
                      <th scope="row" v-html="d.name"></th>
                      <td v-html="d.skt"></td>
                      <td v-html="d.kt"></td>
                      <td v-html="d.lg"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="text_info">
                비교된 요금제는 예시로서, 각 통신사의 영업 상황에 요금제 상세 내용에 따라 월 요금과
                제공량 등이 달라질 수 있습니다.
              </div>
            </div>

            <div class="section" ref="PR02PO07Active">
              <div class="page_info mgb20">
                알뜰폰닷컴 요금제라면, <br />
                연간 <span class="fc01">최대 466,000원</span> 절약!
              </div>

              <div class="graph_wrap">
                <div class="inner">
                  <span class="caption">12개월 기준</span>
                  <div class="before">
                    <div class="price"><span>653,290원</span></div>
                    <p>변경 전</p>
                  </div>
                  <div class="after">
                    <div class="price"><span>120,000원</span></div>
                    <p>변경 후</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 656 520"
                  >
                    <rect
                      id="background"
                      data-name="background"
                      width="656"
                      height="520"
                      rx="23"
                      fill="#f8f8f8"
                    />
                    <path
                      id="graph"
                      data-name="graph"
                      d="M20809.668,18046.543s78.77-8.537,167.336,90.746,174.664,97.254,174.664,97.254"
                      transform="translate(-20652.668 -17859.543)"
                      fill="none"
                      stroke="#fc6969"
                      stroke-linecap="round"
                      stroke-width="6"
                    />
                    <rect
                      id="bar"
                      data-name="bar"
                      width="528"
                      height="2"
                      rx="1"
                      transform="translate(64 407)"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <!-- // section -->

            <!-- info box/데이터/통화량 추가 ; 23/11/22 -->
            <div class="section">
              <div class="box_red ratePlan_recom">
                다양한 요금제 중<br />
                고객님의 성향에 맞는 요금제를<br />
                찾아 드렸어요!
              </div>
            </div>
            <div class="section ty02">
              <div class="page_info mgb20">
                이용하시는 <span class="fc01">데이터</span>만큼 제공하면서 <br />
                제일 저렴한 요금제를 추천드려요!
              </div>
              <div class="item_list ty02 f_bag">
                <Card :cardInfo="{ type: 'ty02', name: 'rateplan1', flag: 'recom' }" />
              </div>
            </div>

            <div class="section ty02">
              <div class="page_info mgb20">
                이용하시는 <span class="fc01">통화량</span>만큼 제공하면서 <br />
                제일 저렴한 요금제를 추천드려요!
              </div>
              <div class="item_list ty02 f_bag">
                <Card :cardInfo="{ type: 'ty02', name: 'rateplan1', flag: 'recom' }" />
              </div>
            </div>
            <!-- //info box/데이터/통화량 추가 ; 23/11/22 -->

            <!-- 하단에 tooltip style로 수정 ; 23/11/22 -->
            <!-- <div class="section ty02">
            <div class="page_info mgb20">
              이미 알뜰하게 절약하며<br>이용하고 있으시군요
            </div>
          </div> -->

            <div class="section ty02">
              <div class="tooltip_wrap">
                <i class="txt btm">이미 알뜰하게 절약하며<br />이용하고 있으시군요</i>
              </div>
              <div class="page_info mgb20">
                알뜰한 고객님에게 딱 맞는<br />
                요금제를 추천 드려요!
              </div>

              <div class="item_list ty02 f_bag">
                <Card :cardInfo="{ type: 'ty02', name: 'rateplan1', flag: 'recom' }" />
                <Card :cardInfo="{ type: 'ty02', name: 'rateplan2', flag: 'best' }" />
                <Card :cardInfo="{ type: 'ty02', name: 'rateplan3', flag: '' }" />
              </div>

              <!-- banner 추가 23/11/22 -->
              <div class="con_bnr combi">
                <NuxtLink :to="{}">
                  <div class="tex">
                    <span>U<sup>+</sup> 인터넷/TV 신규 가입 및 결합시</span>
                    <strong>1년간 매월 최대 11,000원 요금 할인</strong>
                  </div>
                  <img src="/images/content/img_bnr01.png" alt="" />
                </NuxtLink>
              </div>
            </div>
            <!-- // section -->
          </div>
          <div class="pop_footer">
            <div class="btn_group">
              <button type="button" class="btn lg c01">추천 요금제 더 보러가기</button>
            </div>
          </div>
          <button
            type="button"
            class="pop_close"
            id="btn_PR02Alert"
            @click="this.$emit('openAlert', ['PR02Alert', 'btn_PR02Alert', 101])"
          >
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-PR02-PO08] 내게 맞는 요금제 찾기 : step6 추천 요금제 보기 (추천 요금제가 없을 경우) -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.PR02PO08.isOpen }"
        :style="{ zIndex: popupItem.PR02PO08.idx }"
        ref="PR02PO08"
        v-if="popupItem.PR02PO08"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap height_fix" tabindex="0">
          <div class="pop_header">
            <h3>내게 맞는 요금제 찾기</h3>
          </div>
          <div class="pop_content">
            <div class="section">
              <div class="usage_wrap no">
                <p class="speech darkblue">아쉽게도 고객님에게 맞는 요금제를 찾지 못했어요</p>
                <Lottie name="plan01" />
              </div>
            </div>

            <div class="section ty02">
              <div class="page_info mgb20">
                이용하시는 <span class="fc01">데이터</span>만큼 제공하면서 <br />
                제일 저렴한 요금제를 추천드려요!
              </div>

              <div class="item_list plan_list ty02">
                <Card :cardInfo="{ type: 'ty02', name: 'rateplan1', flag: 'recom' }" />
              </div>
            </div>
            <!-- // section -->

            <div class="section ty02">
              <div class="page_info mgb20">
                이용하시는 <span class="fc01">통화량</span>만큼 제공하면서 <br />
                제일 저렴한 요금제를 추천드려요!
              </div>

              <div class="item_list plan_list ty02">
                <Card :cardInfo="{ type: 'ty02', name: 'rateplan2', flag: 'recom' }" />
              </div>
            </div>
            <!-- // section -->
          </div>
          <div class="pop_footer">
            <div class="btn_group">
              <button type="button" class="btn lg c01">추천 요금제 더 보러가기</button>
            </div>
          </div>
          <button
            type="button"
            class="pop_close"
            id="btn_PR02Alert"
            @click="this.$emit('openAlert', ['PR02Alert', 'btn_PR02Alert', 101])"
          >
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-MY02-PO00] USIM 정보 입력 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.MY02PO00.isOpen }"
        :style="{ zIndex: popupItem.MY02PO00.idx }"
        ref="MY02PO00"
        v-if="popupItem.MY02PO00"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap height_fix" tabindex="0">
          <div class="pop_header">
            <h3>USIM 정보 입력</h3>
          </div>
          <div class="pop_content">
            <div class="page_info">가지고 계신 USIM의 <br />정보를 입력해 주세요</div>

            <div class="section">
              <div class="info_input_img">
                <img
                  src="/images/component/img_bar_code.png"
                  alt="LG U+ 모두의 유심, 원칩 U+ 알뜰폰(MVNO) 공용, 바코드 예시 유심 모델명 K3620XX 유심 일련번호 00001234"
                />
              </div>
            </div>
            <!-- // section -->

            <div class="section">
              <div class="form_group">
                <strong class="form_label">USIM 모델명</strong>
                <div class="form_item">
                  <button
                    type="button"
                    class="btn_select"
                    ref="btn_usimModel"
                    @click="$refs.usimModel.open"
                  >
                    선택
                  </button>
                </div>
                <PopupSelect
                  ref="usimModel"
                  :option="{ data: 'usimModel', popupTitle: '선택', targetBtn: 'btn_usimModel' }"
                  @selectItem="console.log($event)"
                />
              </div>

              <div class="form_group">
                <strong class="form_label">일련번호</strong>
                <div class="form_item">
                  <InputBox
                    :option="{ type: 'number', placeholder: '숫자 8자리 입력', maxLength: 8 }"
                    @inputValue="console.log($event)"
                  />
                </div>
                <div class="error">USIM 정보를 다시 확인해주세요</div>
              </div>

              <div class="form_group">
                <div class="box_gray">
                  <p class="title"><strong>USIM 일련번호 유의사항</strong></p>
                  <ul class="text_list bull">
                    <li>
                      일부 유심의 경우 유심 일련번호가 8자리가 아닌 6~7자리만 표기되어 있을 수
                      있어요.
                    </li>
                    <li>이런 경우, 앞에 “0”을 채워서 8자리를 맞춰 주세요.</li>
                    <li>예 : “123456”만 표기된 경우 “00123456”으로 입력</li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- // section -->
          </div>

          <div class="pop_footer">
            <div class="btn_group">
              <button type="button" class="btn lg c01" disabled>인증하기</button>
            </div>
          </div>
          <button type="button" class="pop_close" @click="closePopup('MY02PO00', 'btn_MY02PO00')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-PR03-PO01] 이미지 업로드 가이드 팝업 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.PR03PO01.isOpen }"
        :style="{ zIndex: popupItem.PR03PO01.idx }"
        ref="PR03PO01"
        v-if="popupItem.PR03PO01"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap height_fix" tabindex="0">
          <div class="pop_header">
            <h3>이미지 업로드 가이드</h3>
          </div>
          <div class="pop_content">
            <div class="section">
              <div class="box_gray">
                <div class="guid_img_item">
                  <strong class="fs12 fc01">STEP 01</strong>
                  <h3 class="tit02">통화창에 *#06# 입력</h3>
                  <div class="guid_img">
                    <img src="/images/content/img_s_num_01.png" alt="통화창 예시" />
                  </div>
                </div>

                <div class="next_arrow_bott"></div>

                <div class="guid_img_item">
                  <strong class="fs12 fc01">STEP 02</strong>
                  <h3 class="tit02">이미지 캡처본 업로드</h3>
                  <div class="guid_img">
                    <img src="/images/content/img_s_num_02.png" alt="이미지 캡쳐 예시" />
                  </div>
                </div>
              </div>
            </div>
            <!-- // section -->

            <div class="section">
              <div class="box_gray">
                <ul class="text_list bull">
                  <li>
                    eSIM 개통을 위해서는 가지고 계신 단말기의 EID 및 IMEI 정보 입력이 필요합니다.
                  </li>
                  <li>이미지 업로드 시 각 항목이 자동으로 입력됩니다.</li>
                </ul>
              </div>
            </div>
          </div>

          <button type="button" class="pop_close" @click="closePopup('PR03PO01', 'btn_PR03PO01')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-PR03-PO02] 휴대폰 정보 확인 방법 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.PR03PO02.isOpen }"
        :style="{ zIndex: popupItem.PR03PO02.idx }"
        ref="PR03PO02"
        v-if="popupItem.PR03PO02"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap height_fix" tabindex="0">
          <div class="pop_header">
            <h3>휴대폰 정보 확인 방법</h3>
          </div>
          <div class="pop_content">
            <div class="section">
              <div class="item_list02">
                <ul>
                  <li>
                    <div class="radio_item ty01">
                      <input
                        type="radio"
                        name="ty_list_01"
                        id="ty_list_01_01"
                        value="ios"
                        v-model="PR03PO02_value"
                      />
                      <label for="ty_list_01_01">iOS</label>
                    </div>
                  </li>
                  <li>
                    <div class="radio_item ty01">
                      <input
                        type="radio"
                        name="ty_list_01"
                        id="ty_list_01_02"
                        value="aos"
                        v-model="PR03PO02_value"
                      />
                      <label for="ty_list_01_02">Android</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="section">
              <div id="tabpanel_ty_list_01_01" v-if="PR03PO02_value == 'ios'">
                <div class="box_gray">
                  <div class="guid_img_item ty02">
                    <strong>모델번호 확인 방법</strong>
                    <ul class="text_list bull">
                      <li>
                        휴대폰 설정 > 일반 > 정보 > 모델번호 확인 모델번호 숫자 영역을 “클릭”하여
                        확인
                      </li>
                    </ul>

                    <strong class="mgt20">일련번호 확인 방법</strong>
                    <ul class="text_list bull">
                      <li>휴대폰 설정 > 일반 > 정보 > 일련번호 확인</li>
                    </ul>

                    <div class="guid_img">
                      <img src="/images/content/img_s_num_05.png" alt="모델번호 확인 방법" />
                    </div>
                  </div>

                  <div class="next_arrow_bott"></div>

                  <div class="guid_img_item ty02">
                    <div class="guid_img">
                      <img src="/images/content/img_s_num_06.png" alt="일련번호 확인 방법" />
                    </div>
                  </div>
                </div>
              </div>
              <div id="tabpanel_ty_list_01_02" v-if="PR03PO02_value == 'aos'">
                <div class="box_gray">
                  <div class="guid_img_item ty02">
                    <strong>휴대폰 정보 확인 방법(모델명/일련번호)</strong>
                    <ul class="text_list bull">
                      <li>설정 > 휴대전화 정보 > 규제 정보 > 모델명, 일련번호 확인</li>
                    </ul>

                    <div class="guid_img">
                      <img src="/images/content/img_s_num_07.png" alt="모델명/일련번호 확인 방법" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- // section -->
          </div>

          <div class="pop_footer">
            <div class="btn_group">
              <button type="button" class="btn md c03" id="nextBtn">확인</button>
            </div>
          </div>
          <button type="button" class="pop_close" @click="closePopup('PR03PO02', 'btn_PR03PO02')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-CS02-PG00] 위치정보 활용 동의 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.CS02PG00.isOpen }"
        :style="{ zIndex: popupItem.CS02PG00.idx }"
        ref="CS02PG00"
        v-if="popupItem.CS02PG00"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap" tabindex="0">
          <div class="pop_header">
            <h3>위치정보 이용약관</h3>
          </div>
          <div class="pop_content">
            <div class="section">
              <div class="terms_area">
                제1장 총칙<br /><br />

                제1조 (목적)<br />
                본 약관은 주식회사 LG U+(이하 "회사"라 함)가 수집하는 위치정보 및 이를 기반으로
                제공하는 위치기반서비스의 이용조건 및 절차 등에 관한 사항을 규정함을 목적으로 함.<br /><br />

                제2조 (약관의 효력 및 변경) <br />
                ① 본 약관은 회사가 각종 위치기반서비스를 회사와 이용계약을 체결한 고객에게 제공하기
                위하여 회사가 개인위치정보를 수집하고, 위치정보사업자의 지위에서 위치정보의 보호 및
                이용 등에 관한 법률의 규정에 의거 위치기반서비스 사업자에게 개인위치정보를 제공함에
                있어 필요한 회사와 고객, 회사와 위치기반서비스 사업자간의 권리와 의무, 기타 제반
                사항을 정함을 목적으로 함.<br />
                ② 제 1 항과 더불어 본 약관은 회사가 자체 개발하여 제공하는 위치기반서비스를 이용하는
                모든 고객에 대하여 회사와 고객의 권리 및 의무, 기타 제반 사항을 정함을 목적으로
                함.<br />
                ③ 본 약관의 내용은 서비스의 일부 화면, 회사 홈페이지(uplusmvno.com) 및 기타 방법
                등에 의하여 그 내용을 게재함으로써 적용일에 그 효력을 발생함. <br />
                ④ 회사가 약관을 개정할 경우에는 적용일 및 개정사유를 명시하여 서비스 일부 화면 또는
                회사 홈페이지(uplusmvno.com)에 그 적용일 30 일전부터 적용일 전일까지 공지함. 단,
                고객에게 불리한 약관의 개정의 경우에는 공지 외에 서비스 내 전자우편, 쪽지, 로그인시
                동의창 등의 전자적 수단이나 청구서에 표시하여 발송하는 등의 방법을 통해 따로 명확히
                통지함.<br />
                ⑤ 회사가 전항에 따라 개정약관을 공지 또는 통지하면서 고객에게 30 일 기간 내에
                의사표시를 하지 않으면 의사표시가 표명된 것으로 본다는 뜻을 명확하게 따로 공지 또는
                고지하였음에도 고객이 명시적으로 거부의사를 표시하지 아니한 경우 고객이 개정약관에
                동의한 것으로 봄. <br />
                ⑥ 고객이 개정약관의 적용에 동의하지 않는 경우 회사는 개정약관의 내용을 적용할 수
                없으며, 이 경우 고객은 이용계약을 해지할 수 있음. 다만,<br />
                기존 약관을 적용할 수 없는 특별한 사정이 있는 경우에는 회사는 이용계약을 해지할 수
                있음. <br /><br />

                제3조 (약관 외 준칙)<br />
                본 약관에 명시되지 않은 사항은 위치정보의 보호 및 이용 등에 관한 법률, 정보통신망
                이용촉진 및 정보보호 등에 관한 법률, 전기통신기본법, 전기통신사업법 등 관계법령과
                회사의 이동통신 서비스에 관한 LG U+ 서비스 이용약관이나 회사가 별도로 정한 지침 등에
                의함.<br /><br />

                제4조 (약관의 효력 및 변경)<br />
                회사는 고객에게 자기 위치조회, 제 3 자의 위치조회 등 위치기반서비스를 제공하고
                위치기반서비스사업자에게 위치정보를 제공하는 서비스를 제공함. 단, 회사의 사정상 각
                서비스 별로 제공일정 및 제공방법이 변경되거나 지연, 미 제공될 수도 있음.
                <br /><br />

                제2장 서비스 이용 계약 체결<br /><br />

                제5조 (이용계약의 성립)<br />
                ① 고객이 유·무선 인터넷을 통하여 서비스 이용 시 이용약관에 대한 동의를 누르면 본
                약관에 동의하는 것으로 간주됨.<br /><br />

                제6조 (서비스의 수준)<br />
                ① 서비스의 이용은 연중무휴 1 일 24 시간을 원칙으로 함. 단, 회사의 업무상·기술상의
                이유로 서비스가 일시 중단될 수 있으며, 이러한 경우 회사는 사전 또는 사후에 이를
                공지함.<br />
                ② 회사의 위치정보서비스는 관련 기술의 수준에 따라 오차가 발생할 수 있고 회사의
                서비스 제공 당시 기술 수준에 비추어 통상 생길 수 있는 오차의 경우 회사는 그에 관한
                책임을 지지 않음.<br /><br />

                제7조 (서비스의 변경 및 중지)<br />
                ① 회사는 다음 각 호 1 에 해당하는 사유가 발생하는 경우 서비스의 전부 또는 일부를
                제한, 변경하거나 중지할 수 있음.<br />
                1. 서비스용 설비의 보수 등 공사로 부득이한 경우<br />
                2. 정전, 설비 장애, 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우<br />
                3. 서비스 제휴업체와의 계약 종료 등과 같은 법률상의 사정으로 서비스를 유지할 수 없는
                경우<br />
                4. 천재지변, 국가비상사태, 법령의 변경, 법원이나 국가기관의 판결, 처분, 명령 등
                불가항력적 사유로 서비스를 유지할 수 없는 경우<br />
                ② 제1 항에 의하여 서비스를 중단하는 경우 회사는 홈페이지(uplusmvno.com), 유·무선
                인터넷 서비스 화면 등으로 공지하거나 고객에게 개별 통지함. 단, 회사가 통제 불가능한
                사정으로 인하여 사전 통지가 불가능한 경우에는 사후에 통지함.<br /><br />

                제8조 (위치정보의 수집방법)<br />
                ① 회사는 다음과 같은 방식으로 개인위치정보를 수집함. <br />
                - 휴대폰 단말기를 통한 기지국 기반(Cell ID 방식)의 수집 <br />
                - GPS 칩이 내장된 단말기를 통해 수집되는 GPS 정보를 통한 수집 - Zigbee 칩이 내장된
                단말기와 리더기로부터 수집되는 정보를 통한 수집 <br />
                - Wi-Fi(무선랜) Access Point 에 대한 MAC Address(AP ID)정보를 통한 수집 <br />
                - Tag 부착 위치로부터 수집되는 정보를 통한 수집 <br />
                - 휴대폰 단말기를 통해 Bluetooth 칩이 내장된 단말의 송출 정보 기반의 수집 <br />
                - 비콘(Beacon)을 통한 단말기 위치 정보 기반의 수집 <br />
                ② GPS 및 Wifi 수집 방법<br />
                - GPS 및 Wifi 위치정보의 경우 고객의 폰이 GPS 및 Wifi 기능이 off 되어 있더라도
                회사에서 해당 기능을 On (활성화) 시켜 위치정보를 수집 할 수 있음. 수집 후에는 해당
                기능을 즉시 off (비활성화)로 전환함.<br />
                - GPS 및 Wifi 수집방법은 해당 기능을 제공하는 폰에 한해서만 측위가 가능함. <br />
                - GPS 및 Wifi 수집 대상은 회사가 제공하는 (별표 3) 서비스 및 공공의 목적인 119 및
                112 에 한 함.<br />

                제3장 위치기반 서비스의 내용<br />
                <br />
                제9조 (자기위치 제공형 서비스)<br />
                (위치기반 가까운 영업점 위치 제공 서비스) 사용자 위치에서 근거리에 위치한 회사의
                영업점 위치 및 정보를 알려주는 서비스<br />
                <br />

                제4장 기타<br /><br />
                제10조 (회사 및 위치정보 보호책임자의 표시)<br />
                별표 1 및 별표 2 의 기재와 같음.<br />
                <br />

                제11조 (회사의 서비스 이용약관과 관계) <br />
                본 약관은 회사의 위치정보사업과 위치기반서비스에 관하여 회사의 홈페이지 이용약관에
                우선하여 적용됨. <br />
                <br />

                [부 칙]<br />
                본 약관은 2024 년 4 월30일부터 시행함.<br /><br />

                [별 표 1]<br />
                * 회사정보 *<br />
                상 호 : 주식회사 LG U+<br />
                주 소 : 서울특별시 용산구 한강대로 32 전 화 : 1544-0010 <br /><br />

                [별 표 2]<br />
                * 위치정보 보호책임자 * <br />
                성 명 : 이 우 석 <br />
                소 속 : 모바일서비스트라이브 모바일서비스운영팀 직 책 : 팀 장<br />
                E-mail : infudrha@lguplus.co.kr<br /><br />

                [별 표 3]<br />
                * 위치기반서비스 요금표 *<br />
                위치기반 가까운 영업점 위치 제공 서비스<br />
                <div class="table ty04 mgt4">
                  <table>
                    <caption>
                      수탁자, 위탁업무내용 안내
                    </caption>
                    <colgroup>
                      <col style="width: 33.33%" />
                      <col style="width: 33.33%" />
                      <col style="width: 33.33%" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">요금제</th>
                        <th scope="col">요금</th>
                        <th scope="col">제공내역</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>위치기반 가까운 영업점 위치<br />제공 서비스</td>
                        <td>무료</td>
                        <td>사용자 주변의 회사 영업점 위치<br />-사용자 주변의 회사 영업점 정보</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />
                - 무선 인터넷 접속료 별도 부과<br />
              </div>
            </div>
            <!-- // section -->
          </div>
          <div class="pop_footer">
            <div class="terms_consent mgb32">
              <div class="cst_box check_st">
                <input type="checkbox" ref="CS02PG00CheckBox" id="check01" name="" />
                <label for="check01"
                  >매장안내를 받기 위해 위치정보 활용 이용약관에 동의합니다. (필수)</label
                >
              </div>
            </div>
            <div class="btn_group">
              <button type="button" class="btn md c03" id="btn_CS02Alert" @click="CS02PG00">
                확인
              </button>
            </div>
          </div>
          <button type="button" class="pop_close" @click="closePopup('CS02PG00', 'btn_CS02PG00')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-CS02-PG00 / ALFM-CS02-PG01] 내 주변매장 찾기 상세 팝업 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full shop_pop"
        :class="{ open: popupItem.shopDetail.isOpen }"
        :style="{ zIndex: popupItem.shopDetail.idx }"
        ref="shopDetail"
        v-if="popupItem.shopDetail"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap" tabindex="0">
          <div class="pop_header">
            <h3>LG유플러스 상암동 누리꿈점</h3>
          </div>
          <div class="pop_content">
            <div class="section pop_l">
              <div class="section">
                <SwiperShop />
              </div>
              <!-- // section -->
              <div class="section">
                <dl class="shop_work">
                  <dt>알뜰폰 전용 매장에서는,</dt>
                  <dd>USIM/eSIM 개통이 가능해요!</dd>
                  <dd>알뜰폰 관련 CS 상담이 가능해요!</dd>
                  <dd>선불요금제 개통도 할 수 있어요!</dd>
                </dl>
              </div>
              <!-- // section -->
            </div>
            <!-- // section pop_l -->

            <div class="section pop_r">
              <div class="section">
                <!-- 0621 .table_ty01 > .list_info_ty01 수정 -->
                <div class="list_info_ty02">
                  <dl>
                    <dt><span class="th_ico">주소</span></dt>
                    <dd>서울 마포구 월드컵북로 396, 100호(상암동 1605,누리꿈스퀘어 1F)</dd>
                  </dl>
                  <dl>
                    <dt><span class="th_ico">전화번호</span></dt>
                    <dd>
                      <span>070-358-3515</span>
                      <!-- 전화걸기 추가  23/11/15 -->
                      <button type="button" class="btn_bo call">
                        <span class="blind">전화 걸기</span>
                      </button>
                    </dd>
                  </dl>
                  <dl>
                    <dt><span class="th_ico">영업시간</span></dt>
                    <dd>
                      <dl>
                        <dt><b>평일</b></dt>
                        <dd>오전 10:00 ~ 오후 08:00</dd>
                        <dt><b>토요일</b></dt>
                        <dd>오전 10:00 ~ 오후 08:00</dd>
                        <dt><b>일요일</b></dt>
                        <dd>오전 10:00 ~ 오후 08:00</dd>
                        <dt><b>공휴일</b></dt>
                        <dd>오전 10:00 ~ 오후 08:00</dd>
                      </dl>
                    </dd>
                  </dl>
                  <dl>
                    <dt><span class="th_ico">매장 휴무일</span></dt>
                    <dd>일요일 휴무, 명절 당일</dd>
                  </dl>
                </div>
              </div>
              <!-- // section -->
              <div class="section">
                <div class="btn_group">
                  <NuxtLink :to="{}" class="btn md c03">매장 방문 예약하기</NuxtLink>
                </div>
                <div class="text_info">
                  매장 방문예약은 네이버 플레이스를 통해 쉽고 빠르게 할 수 있어요.
                </div>
              </div>
              <!-- // section -->
            </div>
            <!-- // section pop_r -->
          </div>
          <button
            type="button"
            class="pop_close"
            @click="closePopup('shopDetail', 'btn_shopDetail')"
          >
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-CS02-PO01] 매장 상세 팝업(U+ 및 대리점 매장) -->
    <Transition name="popupFull">
      <div
        class="pop_layer full shop_pop"
        :class="{ open: popupItem.CS02PO01.isOpen }"
        :style="{ zIndex: popupItem.CS02PO01.idx }"
        ref="CS02PO01"
        v-if="popupItem.CS02PO01"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap" tabindex="0">
          <div class="pop_header">
            <h3>LG유플러스 상암동 누리꿈점</h3>
          </div>
          <div class="pop_content">
            <div class="section pop_r">
              <div class="section">
                <div class="list_info_ty02">
                  <dl>
                    <dt><span class="th_ico">주소</span></dt>
                    <dd>서울 마포구 월드컵북로 396, 100호(상암동 1605,누리꿈스퀘어 1F)</dd>
                  </dl>
                  <dl>
                    <dt><span class="th_ico">전화번호</span></dt>
                    <dd>
                      <span>070-358-3515</span>
                      <!-- 전화걸기 추가  23/11/15 -->
                      <button type="button" class="btn_bo call">
                        <span class="blind">전화 걸기</span>
                      </button>
                    </dd>
                  </dl>
                  <dl>
                    <dt><span class="th_ico">영업시간</span></dt>
                    <dd>
                      <dl>
                        <dt><b>평일</b></dt>
                        <dd>오전 10:00 ~ 오후 08:00</dd>
                        <dt><b>토요일</b></dt>
                        <dd>오전 10:00 ~ 오후 08:00</dd>
                        <dt><b>일요일</b></dt>
                        <dd>오전 10:00 ~ 오후 08:00</dd>
                        <dt><b>공휴일</b></dt>
                        <dd>오전 10:00 ~ 오후 08:00</dd>
                      </dl>
                    </dd>
                  </dl>
                  <dl>
                    <dt><span class="th_ico">매장 휴무일</span></dt>
                    <dd>일요일 휴무, 명절 당일</dd>
                  </dl>
                </div>
              </div>
              <!-- // section -->
              <div class="section">
                <div class="btn_group">
                  <NuxtLink :to="{}" class="btn md c03">매장 홈페이지 이동하기</NuxtLink>
                </div>
              </div>
              <!-- // section -->
            </div>
            <!-- // section pop_r -->
          </div>
          <button type="button" class="pop_close" @click="closePopup('CS02PO01', 'btn_CS02PO01')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- 요금제 [ALFM-PR03-PO03] 알럿 : 희망번호 찾기-->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.PR03PO03.isOpen }"
        :style="{ zIndex: popupItem.PR03PO03.idx }"
        ref="PR03PO03"
        v-if="popupItem.PR03PO03"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap" tabindex="0">
          <div class="pop_header">
            <h3>희망번호 찾기</h3>
          </div>
          <div class="pop_content">
            <div class="section">
              <div class="form_wrap">
                <div class="form_group">
                  <div class="form_item">
                    <InputBox
                      :option="{ placeholder: '4자리 숫자', findNum: true, maxLength: 4 }"
                      @inputValue="console.log($event)"
                    />
                  </div>
                  <div class="text_info">희망하는 번호를 입력해 주세요.</div>
                </div>
              </div>
              <!-- 검색결과 있을 경우 -->
              <div class="list_info line phone">
                <div class="info_tit">희망하는 번호를 선택해주세요</div>
                <ul>
                  <li>
                    <div class="radio_st">
                      <input type="radio" id="radio01_00" name="radio01" />
                      <label for="radio01_00"><span>010-8286-9635</span></label>
                    </div>
                  </li>
                  <li>
                    <div class="radio_st">
                      <input type="radio" id="radio01_01" name="radio01" />
                      <label for="radio01_01"><span>010-8286-9635</span></label>
                    </div>
                  </li>
                  <li>
                    <div class="radio_st">
                      <input type="radio" id="radio01_02" name="radio01" />
                      <label for="radio01_02"><span>010-8286-9635</span></label>
                    </div>
                  </li>
                  <li>
                    <div class="radio_st">
                      <input type="radio" id="radio01_03" name="radio01" />
                      <label for="radio01_03"><span>010-8286-9635</span></label>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="list_info line phone">
                <div class="info_tit">유사번호를 선택해주세요</div>
                <ul>
                  <li>
                    <div class="radio_st">
                      <input type="radio" id="radio02_00" name="radio02" />
                      <label for="radio02_00"><span>010-8286-9635</span></label>
                    </div>
                  </li>
                  <li>
                    <div class="radio_st">
                      <input type="radio" id="radio02_01" name="radio02" />
                      <label for="radio02_01"><span>010-8286-9635</span></label>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- 검색결과 없을 경우 -->
              <NoData :option="{ type: 'sch', html: '<p>검색 결과가 없습니다</p>' }" />
            </div>
            <!-- // section -->
          </div>
          <div class="pop_footer">
            <div class="btn_group">
              <button type="button" class="btn md c03" disabled>번호선택</button>
            </div>
          </div>
          <button type="button" class="pop_close" @click="closePopup('PR03PO03', 'btn_PR03PO03')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-MY08-PO00] 마이페이지 > 내 정보 수정 > 회원탈퇴 안내 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.MY08PO00.isOpen }"
        :style="{ zIndex: popupItem.MY08PO00.idx }"
        ref="MY08PO00"
        v-if="popupItem.MY08PO00"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap height_fix" tabindex="0">
          <div class="pop_header">
            <h3>탈퇴 안내</h3>
          </div>
          <div class="pop_content">
            <div class="section">
              <div class="box_yellow">
                <div class="my_box">
                  <p>
                    홍길동님, 알뜰폰닷컴 서비스에 불편한 점이 있으셨다면, <br />1:1 문의를 통해
                    해결해 보시면 어떨까요?
                  </p>
                  <button type="button" class="btn sm c01">1:1 문의하기</button>
                </div>
              </div>
            </div>
            <div class="section">
              <h3 class="tit02">탈퇴사유</h3>
              <div class="item_list ty03">
                <ul>
                  <li>
                    <div class="radio_st">
                      <input
                        type="radio"
                        id="radio01_00"
                        name="radio01"
                        value="MY08PO00_01"
                        v-model="MY08PO00_value"
                      />
                      <label for="radio01_00">마음에 드는 요금제가 없어요</label>
                    </div>
                  </li>
                  <li>
                    <div class="radio_st">
                      <input
                        type="radio"
                        id="radio01_01"
                        name="radio01"
                        value="MY08PO00_02"
                        v-model="MY08PO00_value"
                      />
                      <label for="radio01_01">회원혜택이 부족해요</label>
                    </div>
                  </li>
                  <li>
                    <div class="radio_st">
                      <input
                        type="radio"
                        id="radio01_02"
                        name="radio01"
                        value="MY08PO00_03"
                        v-model="MY08PO00_value"
                      />
                      <label for="radio01_02">이용 빈도가 낮아요</label>
                    </div>
                  </li>
                  <li>
                    <div class="radio_st">
                      <input
                        type="radio"
                        id="radio01_03"
                        name="radio01"
                        value="MY08PO00_04"
                        v-model="MY08PO00_value"
                      />
                      <label for="radio01_03">사이트 이용이 불편해요</label>
                    </div>
                  </li>
                  <li>
                    <div class="radio_st">
                      <input
                        type="radio"
                        id="radio01_04"
                        name="radio01"
                        value="MY08PO00_05"
                        v-model="MY08PO00_value"
                      />
                      <label for="radio01_04">기타</label>
                    </div>
                  </li>
                </ul>

                <TextareaBox
                  :data="dataTextareaOut"
                  @textareaValue="console.log($event)"
                  @textareaSubmit="console.log($event)"
                  ref="MY08PO00_textarea"
                />
              </div>
            </div>
            <div class="section">
              <h3 class="tit02">탈퇴안내사항</h3>
              <div class="terms_box">
                <p>
                  탈퇴안내사항 약관 내용 탈퇴안내사항 약관 내용 탈퇴안내사항 약관 내용 탈퇴안내사항
                  약관 내용 탈퇴안내사항 약관 내용 탈퇴안내사항 약관 내용 탈퇴안내사항 약관 내용
                  탈퇴안내사항 약관 내용 탈퇴안내사항 약관 내용 탈퇴안내사항 약관 내용 탈퇴안내사항
                  약관 내용 탈퇴안내사항 약관 내용 탈퇴안내사항 약관 내용탈퇴안내사항 약관
                  내용탈퇴안내사항 약관 내용 탈퇴안내사항 약관 내용탈퇴안내사항 약관 내용
                  탈퇴안내사항 약관 내용 탈퇴안내사항 약관 내용탈퇴안내사항 약관 내용탈퇴안내사항
                  약관 내용
                </p>
              </div>
              <div class="terms_consent">
                <div class="cst_box check_st">
                  <input type="checkbox" id="check_required" />
                  <label for="check_required"
                    >탈퇴안내사항을 모두 확인하였으며 탈퇴에 동의합니다. (필수)</label
                  >
                </div>
              </div>
              <div class="btn_group">
                <button type="button" class="btn md c06">취소</button>
                <button type="button" class="btn md c03" disabled>탈퇴하기</button>
              </div>
            </div>
          </div>
          <button type="button" class="pop_close" @click="closePopup('MY08PO00', 'btn_MY08PO00')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- [ALFM-CS02-PG00] 모두의 유심, 원칩 이벤트 -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.BE02PO00.isOpen }"
        :style="{ zIndex: popupItem.BE02PO00.idx }"
        ref="BE02PO00"
        v-if="popupItem.BE02PO00"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap" tabindex="0">
          <div class="pop_header">
            <h3>모두의 유심, 원칩 이벤트(10월)</h3>
          </div>
          <div class="pop_content">
            <div class="section">
              <div class="survey_box">
                <p class="title">
                  너 get(너겟) 출시 기념 빈칸 퀴즈 이벤트 <br />빈칸에 들어갈 단어를 맞추고 선물
                  받으세요! <br />*당첨자 발표 2024.01.02
                </p>

                <ul class="survey_box__list">
                  <li>
                    <p class="question">빈칸에 들어갈 단어를 선택해 주세요.</p>
                    <div class="item_list">
                      <div class="radio_st">
                        <input type="radio" id="radio01_00" name="radio01" checked />
                        <label for="radio01_00">나 get, 나겟</label>
                      </div>
                      <div class="radio_st">
                        <input type="radio" id="radio01_01" name="radio01" />
                        <label for="radio01_01">타 get, 타겟</label>
                      </div>
                      <div class="radio_st">
                        <input type="radio" id="radio01_02" name="radio01" />
                        <label for="radio01_02">티 get, 티겟</label>
                      </div>
                      <div class="radio_st">
                        <input type="radio" id="radio01_03" name="radio01" />
                        <label for="radio01_03">너 get, 너겟</label>
                      </div>
                      <div class="radio_st">
                        <input type="radio" id="radio01_04" name="radio01" />
                        <label for="radio01_04">유get, 유겟</label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <p class="question">
                      유플러스 홈 인터넷 상품을 전화로 가입 상담 받고 싶어요. <br />LG유플러스 전문
                      상담사가 연락 드립니다. <br />★신규 가입시 상품권(최대 45만원) 또는 가전제품을
                      드립니다.
                    </p>
                    <div class="item_list">
                      <div class="radio_st">
                        <input type="radio" id="radio02_00" name="radio02" checked />
                        <label for="radio02_00">NO</label>
                      </div>
                      <div class="radio_st">
                        <input type="radio" id="radio02_01" name="radio02" />
                        <label for="radio02_01">YES</label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <p class="question">인터넷을 가입하실 집의 주소를 알려주세요.</p>
                    <div class="item_list">
                      <div class="form_st">
                        <InputBox :option="{ placeholder: '' }" @inputValue="console.log($event)" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <p class="question">받고 싶은 사은품은 무엇인가요?</p>
                    <div class="item_list">
                      <div class="radio_st">
                        <input type="radio" id="radio03_00" name="radio03" checked />
                        <label for="radio03_00">스타벅스 커피</label>
                      </div>
                      <div class="radio_st">
                        <input type="radio" id="radio03_01" name="radio03" />
                        <label for="radio03_01">보조 배터리</label>
                      </div>
                      <div class="radio_st">
                        <input type="radio" id="radio03_02" name="radio03" />
                        <label for="radio03_02">블루투스 스피커</label>
                      </div>
                      <div class="radio_st">
                        <input type="radio" id="radio03_03" name="radio03" />
                        <label for="radio03_03">문화상품권 1만원</label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <p class="question">추가 요청사항이 있으시면 적어주세요.</p>
                    <div class="item_list">
                      <div class="form_st">
                        <TextareaBox
                          :data="{
                            type: 'ty01',
                            placeholder: '',
                            rows: 1,
                            maxlength: 100,
                          }"
                          @textareaValue="console.log($event)"
                          @textareaSubmit="console.log($event)"
                        />
                      </div>
                    </div>
                  </li>
                </ul>

                <div class="hr">
                  <div class="scroll_box">
                    <div class="inner">
                      <p class="sub_title">1. 개인정보 수집 및 이용동의 안내</p>
                      <ul class="list">
                        <li>- 수집항목 : 이름, 휴대폰번호, 통신사, 성별, 생년월일, IP주소, 쿠키</li>
                        <li>
                          - 수집, 이용 목적 : 사은품 지급, LG U+모바일상품 및 홈상품, LG U+망 알뜰폰
                          요금제 판매 및 가입 안내를 위한 정보 제공
                        </li>
                        <li>
                          - 개인정보 보유 및 이용기간 : 개인정보는 사은품 지급, 마케팅 홍보 목적
                          달성 시까지 (최대 3개월) 보유하며, 개인정보의 수집 및 이용 목적을 달성하게
                          되면 지체 없이 파기하는 것을 원칙으로 함
                        </li>
                        <li>
                          - 고객은 개인정보 수집 및 이용에 동의하지 않을 수 있으며, 동의하지 않을
                          경우 사은품 지급이 불가함
                        </li>
                      </ul>

                      <p class="sub_title">2.개인정보의 취급위탁안내</p>
                      <ul class="list">
                        <li>
                          - 개인정보 취급 위탁을 받는자 : ㈜엘지유플러스, (주)케이지모빌리언스,
                          ㈜큰사람커넥션, 에넥스텔레콤, 원텔레콤, 주식회사 에스원, ㈜아이즈비전,
                          ㈜코드모바일, ACN코리아, ㈜인스코비, ㈜유니컴즈, ㈜머천드코리아,
                          ㈜서경방송, ㈜스마텔, 주식회사 와이엘랜드, ㈜미디어로그, ㈜엘지헬로비전,
                          한국피엠오 주식회사, ㈜KB국민은행, 세종텔레콤 주식회사,
                          ㈜한국케이블텔레콤, ㈜씨케이커뮤스트리, ㈜인스코리아, ㈜메가존, ㈜니즈몰,
                          ㈜케이디글로벌, ㈜씨에스원파트너, ㈜씨에스리더, ㈜아인텔레서비스, LB휴넷,
                          ㈜더브리즈
                        </li>
                        <li>
                          - 개인정보 취급 위탁을 하는 업무의 내용 : 가입 관련 고객 상담 업무 및
                          사은품 발송
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- // section -->
          </div>
          <div class="pop_footer">
            <div class="terms_consent mgb32">
              <div class="cst_box check_st">
                <input type="checkbox" ref="BE02PO00CheckBox" id="check01" name="" />
                <label for="check01">개인정보 수집·이용동의 (필수)</label>
              </div>
            </div>
            <div class="btn_group">
              <button type="button" class="btn md c01" id="btn_BE02PO00" disabled>신청하기</button>
            </div>
          </div>
          <button type="button" class="pop_close" @click="closePopup('BE02PO00', 'btn_BE02PO00')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- 신규 인터넷 상담 (2025-03-14) -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.BE02PO01.isOpen }"
        :style="{ zIndex: popupItem.BE02PO01.idx }"
        ref="BE02PO01"
        v-if="popupItem.BE02PO01"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap" tabindex="0">
          <div class="pop_header">
            <h3>신규 인터넷 상담 신청하기</h3>
          </div>
          <div class="pop_content">
            <div class="section custom-time">
              <h4>
                전문 상담사가 빠른 시간 내 친절하게<br />
                전화 상담해 드리겠습니다.
              </h4>
              <p class="badge"><span class="bag card ty02">상담 가능 시간</span></p>
              <dl class="time-info">
                <div>
                  <dt>평일 :</dt>
                  <dd>오전 9시 ~ 오후 7시</dd>
                </div>
                <div>
                  <dt>토요일 :</dt>
                  <dd>오전 9시 ~ 정오</dd>
                </div>
              </dl>
              <p class="tel">※ 상담 전화번호 : <a href="tel:1833-2979">1833-2979</a></p>
            </div>

            <div class="section">
              <div class="form_group">
                <strong class="form_label">이름</strong>
                <div class="form_item val_chk">
                  <!-- error시 val_chk추가 -->
                  <InputBox :option="{ placeholder: '이름 입력', readonly: false }" />
                </div>
                <div class="error">고객명을 입력해 주세요</div>
              </div>

              <div class="form_group">
                <strong class="form_label">휴대폰 번호</strong>
                <!-- error시 val_chk추가 -->
                <div class="form_item val_chk">
                  <InputBox :option="{ placeholder: `'-'없이 숫자만 입력`, readonly: false }" />
                </div>
                <div class="error">휴대폰 번호를 입력해주세요</div>
              </div>

              <div class="form_group">
                <div class="form_item val_chk">
                  <v-expansion-panels class="acd_wrap" v-model="BE02PO01Acd[0]">
                    <v-expansion-panel class="acd_item ty02">
                      <div class="acd_title">
                        <div class="acd_tab">
                          <div class="check_st">
                            <input type="checkbox" id="check_consent01_all" name="" />
                            <label for="check_consent01_all"
                              >개인정보 수집 · 이용 동의 및 상담업무 처리위탁 안내 <em class="fc01"
                                >(필수)</em
                              ></label
                            >
                          </div>
                        </div>
                        <v-expansion-panel-title></v-expansion-panel-title>
                      </div>
                      <div class="acd_panel">
                        <v-expansion-panel-text>
                          <p>
                            본인은 아래와 같이 ㈜LG유플러스가 본인의 개인정보를 수집·이용하는 것에
                            동의합니다.
                          </p>
                          <ol class="text_list">
                            <li>
                              1. 개인정보 수집 · 이용 동의<br />
                              - 이용 목적: LG유플러스 서비스(휴대폰, 인터넷, IPTV, 스마트홈 서비스
                              등) 가입, 상품 구매 및 결합신청을 위한 전화상담<br />
                              - 수집 항목: 이름, 휴대폰 번호, 상담정보<br />
                              - 보유 및 이용기간 : 상담신청일로부터 3개월까지<br />
                              ※ 고객님은 동의에 거부하실 수 있는 권리가 있으나, 거부 시 본 상담
                              신청이 제한됩니다.
                            </li>
                          </ol>

                          <p class="mgt20">
                            본인은 아래와 같이 ㈜LG유플러스가 본인의 개인정보를 수집·이용하는 것에
                            동의합니다.
                          </p>
                          <ol class="text_list">
                            <li>
                              1. 개인정보 수집 · 이용 동의- 이용 목적: LG유플러스 서비스(휴대폰,
                              인터넷, IPTV, 스마트홈 서비스 등) 가입, 상품 구매 및 결합신청을 위한
                              전화상담 <br />
                              - 수집 항목: 이름, 휴대폰 번호, 상담정보 <br />
                              - 보유 및 이용기간 : 상담신청일로부터 3개월까지 <br />
                              ※ 고객님은 동의에 거부하실 수 있는 권리가 있으나, 거부 시 본 상담
                              신청이 제한됩니다.
                            </li>
                            <li>
                              2. 고객 상담업무를 위한 개인정보 처리위탁 안내<br />
                              LG유플러스는 서비스 가입 · 갱신을 위한 고객 상담 업무를 LG유플러스의
                              고객센터 ㈜씨에스리더, ㈜아인텔레서비스, ㈜씨에스원파트너,
                              엘비휴넷㈜에 위탁하고 있어 고객님께 위 고객센터 전문상담사가 입력하신
                              전화번호로 연락드릴 예정입니다.
                            </li>
                          </ol>
                        </v-expansion-panel-text>
                      </div>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </div>
                <div class="error">약관에 동의해 주세요</div>
              </div>
            </div>
            <!-- // section -->
          </div>
          <div class="pop_footer">
            <div class="btn_group">
              <button
                type="button"
                class="btn md c01"
                id="btn_BE02PO01"
                @click="closePopup('BE02PO01', 'btn_BE02PO01')"
              >
                닫기
              </button>
              <button
                type="button"
                class="btn md c03"
                id="nextBtn"
                @click="closePopup('BE02PO01', 'btn_BE02PO01')"
              >
                확인
              </button>
            </div>
          </div>
          <button type="button" class="pop_close" @click="closePopup('BE02PO01', 'btn_BE02PO01')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>

    <!-- 인터넷 결합 상담(2025-03-14) -->
    <Transition name="popupFull">
      <div
        class="pop_layer full"
        :class="{ open: popupItem.BE02PO02.isOpen }"
        :style="{ zIndex: popupItem.BE02PO02.idx }"
        ref="BE02PO02"
        v-if="popupItem.BE02PO02"
      >
        <div @focus="focus" tabindex="0"></div>
        <div class="pop_wrap" tabindex="0">
          <div class="pop_header">
            <h3>인터넷 결합 상담 신청하기</h3>
          </div>
          <div class="pop_content">
            <div class="section custom-time">
              <h4>
                전문 상담사가 빠른 시간 내 친절하게<br />
                전화 상담해 드리겠습니다.
              </h4>
              <p class="badge"><span class="bag card ty02">상담 가능 시간</span></p>
              <dl class="time-info">
                <div>
                  <dt>평일 :</dt>
                  <dd>오전 9시 ~ 오후 7시</dd>
                </div>
                <div>
                  <dt>토요일 :</dt>
                  <dd>오전 9시 ~ 정오</dd>
                </div>
              </dl>
              <p class="tel">※ 상담 전화번호 : <a href="tel:1644-7070">1644-7070</a></p>
            </div>

            <div class="section">
              <div class="form_group">
                <strong class="form_label">이름</strong>
                <div class="form_item val_chk">
                  <!-- error시 val_chk추가 -->
                  <InputBox :option="{ placeholder: '이름 입력', readonly: false }" />
                </div>
                <div class="error">고객명을 입력해 주세요</div>
              </div>

              <div class="form_group">
                <strong class="form_label">휴대폰 번호</strong>
                <!-- error시 val_chk추가 -->
                <div class="form_item val_chk">
                  <InputBox :option="{ placeholder: `'-'없이 숫자만 입력`, readonly: false }" />
                </div>
                <div class="error">휴대폰 번호를 입력해주세요</div>
              </div>

              <div class="form_group">
                <div class="form_item val_chk">
                  <v-expansion-panels class="acd_wrap" v-model="BE02PO01Acd[1]">
                    <v-expansion-panel class="acd_item ty02">
                      <div class="acd_title">
                        <div class="acd_tab">
                          <div class="check_st">
                            <input type="checkbox" id="check_consent01_all" name="" />
                            <label for="check_consent01_all"
                              >개인정보 수집 · 이용 동의 및 상담업무 처리위탁 안내 <em class="fc01"
                                >(필수)</em
                              ></label
                            >
                          </div>
                        </div>
                        <v-expansion-panel-title></v-expansion-panel-title>
                      </div>
                      <div class="acd_panel">
                        <v-expansion-panel-text>
                          <p>
                            본인은 아래와 같이 ㈜LG유플러스가 본인의 개인정보를 수집·이용하는 것에
                            동의합니다.
                          </p>
                          <ol class="text_list">
                            <li>
                              1. 개인정보 수집 · 이용 동의<br />
                              - 이용 목적: LG유플러스 서비스(휴대폰, 인터넷, IPTV, 스마트홈 서비스
                              등) 가입, 상품 구매 및 결합신청 을 위한 전화상담<br />
                              - 수집 항목: 이름, 휴대폰 번호, 상담정보<br />
                              - 보유 및 이용기간 : 상담신청일로부터 3개월까지<br />
                              ※ 고객님은 동의에 거부하실 수 있는 권리가 있으나, 거부 시 본 상담
                              신청이 제한됩니다.
                            </li>
                          </ol>

                          <p class="mgt20">
                            본인은 아래와 같이 ㈜LG유플러스가 본인의 개인정보를 수집·이용하는 것에
                            동의합니다.
                          </p>
                          <ol class="text_list">
                            <li>
                              1. 개인정보 수집 · 이용 동의- 이용 목적: LG유플러스 서비스(휴대폰,
                              인터넷, IPTV, 스마트홈 서비스 등) 가입, 상품 구매 및 결합신청을 위한
                              전화상담 <br />
                              - 수집 항목: 이름, 휴대폰 번호, 상담정보 <br />
                              - 보유 및 이용기간 : 상담신청일로부터 3개월까지 <br />
                              ※ 고객님은 동의에 거부하실 수 있는 권리가 있으나, 거부 시 본 상담
                              신청이 제한됩니다.
                            </li>
                            <li>
                              2. 고객 상담업무를 위한 개인정보 처리위탁 안내<br />
                              LG유플러스는 서비스 가입 · 갱신을 위한 고객 상담 업무를 LG유플러스의
                              고객센터 ㈜씨에스리더, ㈜아인텔레서비스, ㈜씨에스원파트너,
                              엘비휴넷㈜에 위탁하고 있어 고객님께 위 고객센터 전문상담사가 입력하신
                              전화번호로 연락드릴 예정입니다.
                            </li>
                          </ol>
                        </v-expansion-panel-text>
                      </div>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </div>
                <div class="error">약관에 동의해 주세요</div>
              </div>
            </div>
            <!-- // section -->
          </div>
          <div class="pop_footer">
            <div class="btn_group">
              <button
                type="button"
                class="btn md c01"
                id="btn_BE02PO02"
                @click="closePopup('BE02PO02', 'btn_BE02PO02')"
              >
                닫기
              </button>
              <button
                type="button"
                class="btn md c03"
                id="nextBtn"
                @click="closePopup('BE02PO02', 'btn_BE02PO02')"
              >
                확인
              </button>
            </div>
          </div>
          <button type="button" class="pop_close" @click="closePopup('BE02PO02', 'btn_BE02PO02')">
            <span class="blind">팝업 닫기</span>
          </button>
        </div>
        <div @focus="focus" tabindex="0"></div>
      </div>
    </Transition>
  </div>
</template>

<script>
import Lottie from "@/components/Lottie";
import Card from "@/components/Card";
import NoData from "@/components/NoData";
import ProgressBar from "@/components/ProgressBar";

import SwiperNotice from "@/components/SwiperNotice";
import SwiperEsim from "@/components/SwiperEsim";
import SwiperShop from "@/components/SwiperShop";

import Tag from "@/components/Tag";
import Filter from "@/components/Filter";

import PopupSelect from "@/components/PopupSelect";
import TextareaBox from "@/components/TextareaBox";
import RadioActive from "@/components/RadioActive";
import Tab from "@/components/Tab";
import InputBox from "@/components/InputBox";

export default {
  name: "compPopup",
  emits: ["openPopup", "closePopup", "openAlert"],
  data() {
    return {
      toggle08: [0], // eSIM 활성화 방법 팝업 toggle
      findRatePlan: false, // 내게 맞는 요금제 찾기 버튼 활성화
      PR03PO02_value: "ios", // 휴대폰 정보 확인 방법 radio
      MY08PO00_value: "", // [ALFM-MY08-PO00] 탈퇴안내 팝업 > 탈퇴사유 radio

      // [ALFM-PR01-PG00]  찾기 필터
      PR01PG00: this.frontData.filter,
      PR01PG00_range: [0, 60000],
      PR01PG00_value: {
        data: "filter_radio01_01",
        speed: [],
        price: "filter_radio02_01",
        call: [],
        sms: [],
        partner: [],
        tech: "filter_radio03_01",
        discount: "filter_radio04_01",
        service: [],
        target: [],
      },
      PR01PG00_checked: [], // 최종 선택 된 필터 Array
      PR01PG00_loading: true,

      dataTextareaOut: {
        type: "ty01",
        placeholder: "기타 탈퇴 사유를 알려주세요 (1,000자 내외)",
        value: "",
        rows: 1,
        maxlength: 1000,
        byteCheck: true,
        button: false,
        buttonValue: "",
        disabled: true,
        readonly: false,
      },

      BE02PO01Acd: [false, false],
    };
  },
  watch: {
    popupItem: {
      handler(data) {
        this.scrollCheck();
        if (typeof data.PR01PG00 == "object") {
          this.PR01PG00Init();
        } // filter 초기화
        if (typeof data.PR02PO07 == "object") {
          this.PR02PO07Init();
        } // 내게 맞는 요금제 찾기 스크롤 이벤트
      },
      deep: true,
    },

    /** [ALFM-MY08-PO00] 탈퇴 완료 > 탈퇴 사유 > 기타 선택 시 동작 */
    MY08PO00_value(a) {
      if (a == "MY08PO00_05") {
        this.dataTextareaOut.disabled = false;
        setTimeout(() => {
          this.$refs.MY08PO00_textarea.$refs.textarea.focus();
        }, 10);
      } else {
        this.dataTextareaOut.disabled = true;
      }
    },
  },
  methods: {
    closePopup(id, btn) {
      this.$emit("closePopup", id);
      if (btn == "") return;

      setTimeout(() => {
        if (document.querySelector(`#${btn}`) != null) document.querySelector(`#${btn}`).focus();
      }, 202); // focus
    },
    scrollCheck() {
      const key = Object.keys(this.popupItem);
      if (key.length < 1) {
        scroll.scroll();
      } else {
        scroll.noScroll();
        this.openPopupFocus(key);
      }
    },
    openPopupFocus(key) {
      const target = key[key.length - 1];
      setTimeout(() => {
        this.$refs[target].querySelector(".pop_wrap").focus();
      }, 201);
    },
    focus($event) {
      // this.$refs[id].querySelector('.pop_wrap').focus();
      $event.target.parentElement.querySelector(".pop_wrap").focus();
    },

    /** [ALFM-CS02-PG00] 위치정보 활용동의 팝업[CS02PG00] 동의 checkbox 체크 여부 */
    CS02PG00() {
      const isChecked = this.$refs.CS02PG00CheckBox.checked;
      if (isChecked) this.closePopup("CS02PG00", "btn_CS02PG00");
      else this.$emit("openAlert", ["CS02Alert", "btn_CS02Alert", 101]);
    },

    /** 내게 맞는 요금제 찾기 스크롤 이벤트 */
    PR02PO07Init() {
      // const isMobile = document.querySelector("html").classList.contains("mobile");

      setTimeout(() => {
        const wrap = this.$refs.PR02PO07Content;
        const target = this.$refs.PR02PO07Active;

        // if( !isMobile ){
        if (!front.isMobile()) {
          target.classList.add("graphActive");
          wrap.removeEventListener("scroll", onScroll);
          return;
        }

        var onScroll = function () {
          const scrollTop = wrap.scrollTop;
          const targetTop = target.offsetTop;
          if (scrollTop >= targetTop) {
            target.classList.add("graphActive");
            wrap.removeEventListener("scroll", onScroll);
          }
        };
        wrap.addEventListener("scroll", onScroll);
      }, 20);
    },

    /** [ALFM-PR01-PG00] 꼼꼼하게 찾기 필터 */
    PR01PG00Init() {
      this.PR01PG00_checked = [];
      // const values = Object.values(this.PR01PG00);
      const keys = Object.keys(this.PR01PG00);

      keys.forEach((a) => {
        this.PR01PG00[a].forEach((item) => {
          if (item.checked == true) {
            this.PR01PG00_checked.push({ id: item.id, value: item.value });

            setTimeout(() => {
              this.PR01PG00_loading = false;
            }, 200); // setTimeout은 임시 처리 개발시 삭제
          }
        });
      });
      // console.log(this.PR01PG00_checked);
    },
    PR01PG00Change(data, a, i, e) {
      // console.log(data, a);
      if (data == "price") {
        this.PR01PG00_range[0] = a.min;
        this.PR01PG00_range[1] = a.max;
      }
      this.PR01PG00_loading = true;

      const isCheckbox = a.id.includes("checkbox");
      if (isCheckbox) {
        this.PR01PG00[data][i].checked = !this.PR01PG00[data][i].checked;
      } else {
        this.PR01PG00[data] = this.PR01PG00[data].map((item) => {
          item.checked = a == item ? true : false;
          return item;
        });
      }
      this.PR01PG00Init();
      // console.log(this.PR01PG00[data]);
    },
    filterDelete($event) {
      const deleteId = $event.id;
      const keys = Object.keys(this.PR01PG00);
      keys.forEach((a) => {
        this.PR01PG00[a].forEach((item) => {
          if (item.id == deleteId) {
            item.checked = false;
          }
        });
      });
      this.PR01PG00Init();
    },
  },
  components: {
    Lottie,
    Card,
    NoData,
    ProgressBar,
    SwiperEsim,
    SwiperNotice,
    SwiperShop,
    Tag,
    Filter,
    PopupSelect,
    TextareaBox,
    RadioActive,
    Tab,
    InputBox,
  },
  props: {
    frontData: Object, // @/assets/frontData.js
    popupItem: Object,
  },
};
</script>
