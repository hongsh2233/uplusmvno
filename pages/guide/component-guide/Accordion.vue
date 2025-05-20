<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>
      <div class="page_info">accordion</div>

      <div class="section">
        <h3 class="tit02">accordion(default)</h3>
        
        <v-expansion-panels class="acd_wrap" v-model="acd">
          <v-expansion-panel class="acd_item">
            <div class="acd_title">
              <v-expansion-panel-title>일련번호 확인 방법</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                일련번호 확인 방법
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

          <v-expansion-panel class="acd_item">
            <div class="acd_title">
              <v-expansion-panel-title>일련번호 확인 방법</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                일련번호 확인 방법
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>

      </div>
      
      <div class="section">
        <h3 class="tit02">toggle</h3>

        <v-expansion-panels class="acd_wrap"  v-model="toggle" multiple>
          <v-expansion-panel class="acd_item">
            <div class="acd_title">
              <v-expansion-panel-title>일련번호 확인 방법 toggle(default)</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                일련번호 확인 방법
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

          <v-expansion-panel class="acd_item">
            <div class="acd_title">
              <v-expansion-panel-title>일련번호 확인 방법 toggle(default)</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                일련번호 확인 방법
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

          <v-expansion-panel class="acd_item ty02">
            <div class="acd_title">
              <div class="acd_tab">
                <div class="check_st">
                    <input type="checkbox" id="check_consent01_all" name="">
                    <label for="check_consent01_all">알뜰폰닷컴 동의항목(ty02)</label>
                </div>
              </div>
              <v-expansion-panel-title></v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

        </v-expansion-panels>
      </div>




      
      <div class="section">
        <h3 class="tit02">terms_consent(ty04)</h3>

        <div class="terms_consent">
          
          <div class="cst_box check_st">
            <input type="checkbox" id="check_terms_all01" name="all">
            <label for="check_terms_all01"><b>전체 약관에 모두 동의합니다.</b></label>
          </div>


          <v-expansion-panels class="acd_wrap" v-model="terms_toggle" multiple>

            <v-expansion-panel class="acd_item ty04">
              <div class="acd_title">
                <div class="acd_tab">
                  <div class="check_st">
                      <input type="checkbox" id="check_terms_consent01_all" name="">
                      <label for="check_terms_consent01_all"><b>알뜰폰닷컴 동의항목</b></label>
                  </div>
                </div>
                <v-expansion-panel-title></v-expansion-panel-title>
              </div>
              <div class="acd_panel">
                <v-expansion-panel-text>
                  <ul>
                    <li>
                      <div class="check_st ty02">
                        <input type="checkbox" id="check_consent01_01" name="">
                        <label for="check_consent01_01">개인정보 수집·이용동의 (필수)</label>
                      </div>
                      <button type="button"><span class="blind">약관 보기</span></button>
                    </li>
                    <li>
                      <div class="check_st ty02">
                        <input type="checkbox" id="check_consent01_02" name="">
                        <label for="check_consent01_02">개인정보 제3자 제공 동의 (필수)</label>
                      </div>
                      <button type="button"><span class="blind">약관 보기</span></button>
                    </li>
                    <li>
                      <div class="check_st ty02">
                        <input type="checkbox" id="check_consent01_03" name="">
                        <label for="check_consent01_03">고유식별정보 처리 동의 (필수)</label>
                      </div>
                      <button type="button"><span class="blind">약관 보기</span></button>
                    </li>
                  </ul>
                </v-expansion-panel-text>
              </div>
            </v-expansion-panel>

            <v-expansion-panel class="acd_item ty04">
              <div class="acd_title">
                <div class="acd_tab">
                  <div class="check_st">
                    <input type="checkbox" id="check_terms_consent02_all" name="">
                    <label for="check_terms_consent02_all"><b>통신사 동의 항목</b></label>
                  </div>
                </div>
                <v-expansion-panel-title></v-expansion-panel-title>
              </div>
              <div class="acd_panel">
                <v-expansion-panel-text>
                  <ul>
                    <li>
                      <div class="check_st ty02">
                        <input type="checkbox" id="check_consent02_01" name="">
                        <label for="check_consent02_01">통신 이용 약관 (필수)</label>
                      </div>
                      <button type="button"><span class="blind">약관 보기</span></button>
                    </li>
                    <li>
                      <div class="check_st ty02">
                        <input type="checkbox" id="check_consent02_02" name="">
                        <label for="check_consent02_02">개인 수집 이용 동의 (필수)</label>
                      </div>
                      <button type="button"><span class="blind">약관 보기</span></button>
                    </li>
                    <li>
                      <div class="check_st ty02">
                        <input type="checkbox" id="check_consent02_03" name="">
                        <label for="check_consent02_03">서비스 제공을 위한 개인정보 제공 이전 동의 (필수)</label>
                      </div>
                      <button type="button"><span class="blind">약관 보기</span></button>
                    </li>
                    <li>
                      <div class="check_st ty02">
                        <input type="checkbox" id="check_consent02_04" name="">
                        <label for="check_consent02_04">개인정보 취급 위탁 동의·신용정보 조회에 관한 동의·본인인증 서비스 이용에 대한 동의 (필수)</label>
                      </div>
                      <button type="button"><span class="blind">약관 보기</span></button>
                    </li>
                    <li>
                      <div class="check_st ty02">
                        <input type="checkbox" id="check_consent02_05" name="">
                        <label for="check_consent02_05">서비스 계약의 인수관련 동의 (필수)</label>
                      </div>
                      <button type="button"><span class="blind">약관 보기</span></button>
                    </li>
                  </ul>
                </v-expansion-panel-text>
              </div>
            </v-expansion-panel>
                        
          </v-expansion-panels>


        </div> <!-- // terms_consent -->
      </div> <!-- // section -->








      

      <div class="section">
        <h3 class="tit03">요금제 상세정보(ty03)</h3>

        <v-expansion-panels class="acd_wrap"  v-model="acd2" multiple>
          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>초과 이용 요금 toggle</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <div class="ove_charge">
                  <dl class="div01">
                    <dt>음성(초)</dt>
                    <dd>1.98원</dd>
                  </dl>
                  <dl class="div02">
                    <dt>영상(초)</dt>
                    <dd>22원</dd>
                  </dl>
                  <dl class="div03">
                    <dt>SMS(건)</dt>
                    <dd>22원</dd>
                  </dl>
                  <dl class="div04">
                    <dt>LMS(건)</dt>
                    <dd>22원</dd>
                  </dl>
                  <dl class="div05">
                    <dt>MMS(건)</dt>
                    <dd>220원</dd>
                  </dl>
                  <dl class="div06">
                    <dt>데이터(MB)</dt>
                    <dd>22.58원</dd>
                  </dl>
                </div>

                <ul class="text_list bull">
                  <li>SMS : 단문 Text형 문자 (한글 70자/영문 140자 이하)</li>
                  <li>LMS : 장문 Text형 문자 (한글 71자/영문 141자 이상)</li>
                  <li>MMS : 멀티미디어형 문자 (사진, 동영상)</li>
                  <li>VAT 포함</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>데이터(상세)</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <ul class="text_list bull">
                  <li>데이터(상세)</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>음성(상세)</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <ul class="text_list bull">
                  <li>음성(상세)</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>메시지(상세)</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <ul class="text_list bull">
                  <li>메시지(상세)</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>유의사항</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <ul class="text_list bull">
                  <li>유의사항</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>
      </div> <!-- // section -->


      <div class="section">
        <h3 class="tit03">요금제 상세정보(ty03)</h3>

        <v-expansion-panels class="acd_wrap"  v-model="acd3" multiple>
          <v-expansion-panel class="acd_item ty03">
            <div class="acd_title">
              <v-expansion-panel-title>초과 이용 요금 toggle</v-expansion-panel-title>
            </div>
            <div class="acd_panel">
              <v-expansion-panel-text>
                <div class="ove_charge">
                  <dl class="div01">
                    <dt>음성(초)</dt>
                    <dd>1.98원</dd>
                  </dl>
                  <dl class="div02">
                    <dt>영상(초)</dt>
                    <dd>22원</dd>
                  </dl>
                  <dl class="div03">
                    <dt>SMS(건)</dt>
                    <dd>22원</dd>
                  </dl>
                  <dl class="div04">
                    <dt>LMS(건)</dt>
                    <dd>22원</dd>
                  </dl>
                  <dl class="div05">
                    <dt>MMS(건)</dt>
                    <dd>220원</dd>
                  </dl>
                  <dl class="div06">
                    <dt>데이터(MB)</dt>
                    <dd>22.58원</dd>
                  </dl>
                </div>

                <ul class="text_list bull">
                  <li>SMS : 단문 Text형 문자 (한글 70자/영문 140자 이하)</li>
                  <li>LMS : 장문 Text형 문자 (한글 71자/영문 141자 이상)</li>
                  <li>MMS : 멀티미디어형 문자 (사진, 동영상)</li>
                  <li>VAT 포함</li>
                </ul>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>
      </div> <!-- // section -->


      <div class="section">
        <h3 class="tit03">고객지원 > 자주하는 질문(ty05)</h3>

        <v-expansion-panels class="acd_wrap" v-model="acd" multiple>

          <v-expansion-panel class="acd_item ty05">
            <div class="acd_title qna_tit">
              <v-expansion-panel-title>
                <strong><b>Q</b> 납기일은 어떻게 되나요?</strong>
                <div class="qna_ty">
                    <div class="bag clr c01">요금 및 납부</div>
                    <span>공통</span>
                </div>
              </v-expansion-panel-title>
            </div>
            <div class="acd_panel qna_con">
              <v-expansion-panel-text>
                <div role="region">
                  <p>
                    요금 납기일(납부기한)은 해당 청구월의 말일까지 입니다.
                    납기일 경과 후 납부된 경우에는 연체료(이용요금의 2%)가
                    다음달 청구요금에 포함되어 청구됩니다.
                  </p>
                  <div class="box_gray">
                    <span>
                      더 자세히 알고 싶으시면, 
                      1:1 문의하기를 이용해주세요.
                    </span>
                    <NuxtLink :to="{}" role="button" class="btn xsm c07">1:1문의하기</NuxtLink>
                  </div>
                </div>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

          <v-expansion-panel class="acd_item ty05">
            <div class="acd_title qna_tit">
              <v-expansion-panel-title>
                <strong><b>Q</b> 미납 문자메시지를 받았어요. 어떻게 해야 하나요?</strong>
                <div class="qna_ty">
                    <div class="bag clr c02">가입 및 변경</div>
                    <span>공통</span>
                </div>
              </v-expansion-panel-title>
            </div>
            <div class="acd_panel qna_con">
              <v-expansion-panel-text>
                <div role="region">
                  <p>
                    요금 납기일(납부기한)은 해당 청구월의 말일까지 입니다.
                    납기일 경과 후 납부된 경우에는 연체료(이용요금의 2%)가
                    다음달 청구요금에 포함되어 청구됩니다.
                  </p>
                  <div class="box_gray">
                    <span>
                      더 자세히 알고 싶으시면, 
                      1:1 문의하기를 이용해주세요.
                    </span>
                    <NuxtLink :to="{}" role="button" class="btn xsm c07">1:1문의하기</NuxtLink>
                  </div>
                </div>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

          <v-expansion-panel class="acd_item ty05">
            <div class="acd_title qna_tit">
              <v-expansion-panel-title>
                <strong><b>Q</b> 신용카드로 자동이체가 되어 있는데, 요금이 왜 결제되지 않나요?</strong>
                <div class="qna_ty">
                    <div class="bag clr c03">혜택/이벤트</div>
                    <span>공통</span>
                </div>
              </v-expansion-panel-title>
            </div>
            <div class="acd_panel qna_con">
              <v-expansion-panel-text>
                <div role="region">
                  <p>
                    요금 납기일(납부기한)은 해당 청구월의 말일까지 입니다.
                    납기일 경과 후 납부된 경우에는 연체료(이용요금의 2%)가
                    다음달 청구요금에 포함되어 청구됩니다.
                  </p>
                  <div class="box_gray">
                    <span>
                      더 자세히 알고 싶으시면, 
                      1:1 문의하기를 이용해주세요.
                    </span>
                    <NuxtLink :to="{}" role="button" class="btn xsm c07">1:1문의하기</NuxtLink>
                  </div>
                </div>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

          <v-expansion-panel class="acd_item ty05">
            <div class="acd_title qna_tit">
              <v-expansion-panel-title>
                <strong><b>Q</b> 미납 문자메시지를 받았어요. 어떻게 해야 하나요?</strong>
                <div class="qna_ty">
                    <div class="bag clr c01">요금 및 납부</div>
                    <span>공통</span>
                </div>
              </v-expansion-panel-title>
            </div>
            <div class="acd_panel qna_con">
              <v-expansion-panel-text>
                <div role="region">
                  <p>
                    요금 납기일(납부기한)은 해당 청구월의 말일까지 입니다.
                    납기일 경과 후 납부된 경우에는 연체료(이용요금의 2%)가
                    다음달 청구요금에 포함되어 청구됩니다.
                  </p>
                  <div class="box_gray">
                    <span>
                      더 자세히 알고 싶으시면, 
                      1:1 문의하기를 이용해주세요.
                    </span>
                    <NuxtLink :to="{}" role="button" class="btn xsm c07">1:1문의하기</NuxtLink>
                  </div>
                </div>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

          <v-expansion-panel class="acd_item ty05">
            <div class="acd_title qna_tit">
              <v-expansion-panel-title>
                <strong><b>Q</b> 미납 문자메시지를 받았어요. 어떻게 해야 하나요?</strong>
                <div class="qna_ty">
                    <div class="bag clr c04">결합할인</div>
                    <span>공통</span>
                </div>
              </v-expansion-panel-title>
            </div>
            <div class="acd_panel qna_con">
              <v-expansion-panel-text>
                <div role="region">
                  <p>
                    요금 납기일(납부기한)은 해당 청구월의 말일까지 입니다.
                    납기일 경과 후 납부된 경우에는 연체료(이용요금의 2%)가
                    다음달 청구요금에 포함되어 청구됩니다.
                  </p>
                  <div class="box_gray">
                    <span>
                      더 자세히 알고 싶으시면, 
                      1:1 문의하기를 이용해주세요.
                    </span>
                    <NuxtLink :to="{}" role="button" class="btn xsm c07">1:1문의하기</NuxtLink>
                  </div>
                </div>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>

          <v-expansion-panel class="acd_item ty05">
            <div class="acd_title qna_tit">
              <v-expansion-panel-title>
                <strong><b>Q</b> 미납 문자메시지를 받았어요. 어떻게 해야 하나요?</strong>
                <div class="qna_ty">
                    <div class="bag clr c05">회원가입</div>
                    <span>공통</span>
                </div>
              </v-expansion-panel-title>
            </div>
            <div class="acd_panel qna_con">
              <v-expansion-panel-text>
                <div role="region">
                  <p>
                    요금 납기일(납부기한)은 해당 청구월의 말일까지 입니다.
                    납기일 경과 후 납부된 경우에는 연체료(이용요금의 2%)가
                    다음달 청구요금에 포함되어 청구됩니다.
                  </p>
                  <div class="box_gray">
                    <span>
                      더 자세히 알고 싶으시면, 
                      1:1 문의하기를 이용해주세요.
                    </span>
                    <NuxtLink :to="{}" role="button" class="btn xsm c07">1:1문의하기</NuxtLink>
                  </div>
                </div>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>


          </v-expansion-panels>
      </div>

      <div class="section">
        <h3 class="tit03">마이페이지 > 1:1 문의 내역(ty06) </h3>

        <v-expansion-panels class="acd_wrap" v-model="acd" multiple>
          <v-expansion-panel class="acd_item ty06">
            <div class="acd_title qna_tit">
              <v-expansion-panel-title>
                <strong> 납기일은 어떻게 되나요?</strong>
                <div class="qna_ty">
                    <div class="bag clr c02">접수완료</div>
                    <span>2022.08.03</span>
                    <span>가입/변경/해지</span>
                </div>
              </v-expansion-panel-title>
            </div>
            <div class="acd_panel qna_con">
              <v-expansion-panel-text>
                <div role="region">
                  <dl class="con_area">
                    <dt class="label">Q</dt>
                    <dd class="txt">혜택으로 받은 포인트는 기간이 정해져있나요?</dd>
                    <dt class="label">A</dt>
                    <dd class="txt">안녕하세요 홍길동 고객님 홈페이지 문의 건 증가로 순차적으로 답변을 하다보니답변이 지연된 점 너그러운 마음으로 양해 부탁드립니다. 고객님께서 “요금제 혜택‘ 관련하여 문의를 하셨는데요. 문의 해주신 요금제와 관련하여 제공되는 혜택은</dd>
                  </dl>
                </div>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
          <v-expansion-panel class="acd_item ty06">
            <div class="acd_title qna_tit">
              <v-expansion-panel-title>
                <strong>미납 문자메시지를 받았어요. 어떻게 해야 하나요?</strong>
                <div class="qna_ty">
                    <div class="bag clr c01">답변완료</div>
                    <span>2022.08.03</span>
                    <span>요금제</span>
                </div>
              </v-expansion-panel-title>
            </div>
            <div class="acd_panel qna_con">
              <v-expansion-panel-text>
                <div role="region">
                  <dl class="con_area">
                    <dt class="label">Q</dt>
                    <dd class="txt">혜택으로 받은 포인트는 기간이 정해져있나요?</dd>
                    <dt class="label">A</dt>
                    <dd class="txt">안녕하세요 홍길동 고객님 홈페이지 문의 건 증가로 순차적으로 답변을 하다보니답변이 지연된 점 너그러운 마음으로 양해 부탁드립니다. 고객님께서 “요금제 혜택‘ 관련하여 문의를 하셨는데요. 문의 해주신 요금제와 관련하여 제공되는 혜택은</dd>
                  </dl>
                </div>
              </v-expansion-panel-text>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>



    </div> <!-- // content -->
  </div> <!-- // container -->

</template>

<script>

export default {
  name: "GuideAccorion",
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },
      acd: [1],
      acd2: [0],
      acd3: [],
      toggle: [0],
      terms_toggle: [],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
};
</script>
<style>

</style>
