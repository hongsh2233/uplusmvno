<template>

	<div class="container">
		<div class="content" id="content">
			<h2 class="title_nav">{{ layout.title }}</h2>
		
      <div class="section">
        
        <div class="list_version">
          <button type="button" class="btn_select" ref="btn_privacyVer" @click="$refs.privacyVer.open">버전 V.20231101</button>
          <PopupSelect ref="privacyVer" :option="{ data:'privacyVer', popupTitle:'선택', targetBtn:'btn_privacyVer' }" @selectItem="console.log($event)" />
        </div>

        <div class="box_gray terms">
          <ol class="list decimal">
            <li><button type="button" class="link" @click="move('cnt1')">총칙</button></li>
            <li><button type="button" class="link" @click="move('cnt2')">개인정보의 수집항목 및 이용목적</button></li>
            <li><button type="button" class="link" @click="move('cnt3')">개인정보의 이용·보관 기간</button></li>
            <li><button type="button" class="link" @click="move('cnt4')">개인정보의 이용 및 제3자 제공</button></li>
            <li><button type="button" class="link" @click="move('cnt5')">개인정보의 국외이전</button></li>
            <li><button type="button" class="link" @click="move('cnt6')">개인정보의 처리위탁</button></li>
            <li><button type="button" class="link" @click="move('cnt7')">개인정보의 파기</button></li>
            <li><button type="button" class="link" @click="move('cnt8')">고객의 권리와 그 행사방법</button></li>
            <li><button type="button" class="link" @click="move('cnt9')">아동의 개인정보보호 및 법정대리인의 권리와 행사방법</button></li>
            <li><button type="button" class="link" @click="move('cnt10')">개인정보 자동수집장치의 설치·운영 및 그 거부방법</button></li>
            <li><button type="button" class="link" @click="move('cnt11')">개인정보보호를 위한 안전성 확보 조치</button></li>
            <li><button type="button" class="link" @click="move('cnt12')">의견수렴 및 불만처리</button></li>
            <li><button type="button" class="link" @click="move('cnt13')">개인정보보호책임자 및 담당자</button></li>
            <li><button type="button" class="link" @click="move('cnt14')">개인정보 처리방침 변경 안내</button></li>
          </ol>
        </div>
        <h3 class="tit_terms">위치정보 활용정보 제공에 관한 동의서</h3>
        <div class="terms_wrap">
          <div class="terms_cnts" ref="cnt1">
            <h4 class="tit_terms">
              <span class="num">1.</span>
              <span class="title">총칙</span>
            </h4>
            <ol class="list depth">
              <li>
                <div class="num">(1)</div>
                <div class="cnts">개인정보란 생존하는 개인에 관한 정보로서 성명, <strong>주민등록번호</strong> 등에 의하여 특정한 개인을 알아볼 수 있는 부호 · 문자 · 음성 · 음향 및 영상 등의 정보를 말하며, 해당 정보만으로는 특정 개인을 알아볼 수 없어도 다른 정보와 쉽게 결합하여 알아볼 수 있는 정보, 가명 처리함으로써 원래의 상태로 복원하기 위한 추가 정보의 사용·결합 없이는 특정 개인을 알아볼 수 없는 정보(이하 '가명정보') 도 개인정보에 포함됩니다.</div>
              </li>
              <li>
                <div class="num">(2)</div>
                <div class="cnts">회사는 개인정보처리방침을 통하여 고객의 개인정보가 어떤 용도와 방식으로 이용되고 있으며 개인정보 보호를 위하여 어떤 조치가 취해지고 있는지 알려드립니다.</div>
              </li>
              <li>
                <div class="num">(3)</div>
                <div class="cnts">회사는 개인정보처리방침을 홈페이지(https://mvnopartners.uplus.co.kr) 첫 화면에 공개함으로써 고객이 언제나 쉽게 보고 확인할 수 있도록 조치하고 있습니다.</div>
              </li>
              <li>
                <div class="num">(4)</div>
                <div class="cnts">회사는 개인정보처리방침을 관련 법령 또는 내부 운영규정의 변경에 따라 개정할 수 있으며, 개인정보처리방침을 개정하는 경우 버전번호 등을 부여하여 개정된 사항을 고객이 쉽게 알아볼 수 있도록 하고 있습니다.</div>
              </li>
            </ol>
          </div>
          <div class="terms_cnts" ref="cnt2">
            <h4 class="tit_terms">
              <span class="num">2.</span>
              <span class="title">개인정보의 수집항목 및 이용목적</span>
            </h4>
            <ol class="list depth">
              <li>
                <div class="num">(1)</div>
                <div class="cnts">회사는 고객의 개인정보를 수집하는 경우 관련 법령에 따라 가입신청서 또는 이용약관 등을 통하여 그 수집범위 및 수집 · 이용 목적을 사전에 고지합니다.</div>
              </li>
              <li>
                <div class="num">(2)</div>
                <div class="cnts">회사는 다음 각호와 같이 고유식별 정보를 수집 및 이용하고 있습니다.</div>
                <!-- 2 depth -->
                <ol class="list depth dep_2">
                  <li>
                    <div class="num">1)</div>
                    <div class="cnts">고유식별정보의 수집·이용 목적 : 휴대폰 본인확인 서비스 제공, 본인확인, 본인인증, 실명인증</div>
                  </li>
                  <li>
                    <div class="num">2)</div>
                    <div class="cnts">수집 고유식별 정보의 항목 : <strong>주민등록번호, 운전면허번호, 외국인등록번호</strong>(본인·대리인 신분확인 내용 포함) <br>
                      ※ <strong>주민등록번호</strong>는 전기통신사업법 시행령 제65조의2에 근거하여 기간통신 사업자는 수집·이용이 가능합니다.
                    </div>
                  </li>
                  <li>
                    <div class="num">3)</div>
                    <div class="cnts">고유식별 정보의 보유 및 이용기간 : <strong>서비스 가입기간 동안 이용하고, 요금전산 과·오납 분쟁대리를 위하여 해지 후 요금완납 후 6개월까지 이용</strong></div>
                  </li>
                </ol>
              </li>
              <li>
                <div class="num">(3)</div>
                <div class="cnts">고객의 사생활을 현저하게 침해할 우려가 있는 민감정보(사상ㆍ신념, 노동조합ㆍ정당의 가입ㆍ탈퇴, 정치적 견해, 건강, 성생활 등에 관한 정보)는 수집하지 않습니다. 다만, 서비스 제공을 위해 일부 민감정보를 필요최소한으로 수집, 처리할 필요가 있는 경우 관련 법령의 제한에 따라 고객의 동의 등 필요한 조치를 거쳐 그 개인정보를 수집, 처리할 수 있습니다.</div>
              </li>
              <li>
                <div class="num">(4)</div>
                <div class="cnts">회사는 다음 각호의 개인정보를 아래와 같은 목적을 위하여 수집하고 있습니다.</div>
                <!-- 2 depth -->
                <ol class="list depth dep_2">
                  <li>
                    <div class="num">1)</div>
                    <div class="cnts">성명(상호), 성별, 내외국인 여부, 대리인(성명,연락처,주소,본인과의 관계), 웹사이트/어플리케이션 접속 이력, 단말기 정보(IMSI, UICCID, IMEI)<br>
                      - 본인확인 · 인증(제3자의 모바일 인증 서비스포함), 신청 대리인 관계 및 본인확인, 본인확인 건수 확인 및 부정 사용 방지</div>
                  </li>
                  <li>
                    <div class="num">2)</div>
                    <div class="cnts">성명(상호), 주소, 휴대폰번호, 이메일 <br>
                      - 서비스 · 상품제공 및 안내, 물품배송, 고지사항 전달, 본인의사 확인 등 원활한 의사소통 경로 확보</div>
                  </li>
                  <li>
                    <div class="num">3)</div>
                    <div class="cnts">납부자(성명, 생년월일, 주소) 은행(카드사)명, 계좌(카드)번호, 카드유효기간, 명의자와의 관계 <br>
                      - 요금정산(청구,수납,채권추심,국제전화 요금,데이터 등 정보이용료 정산 등) 설비비 반환</div>
                  </li>
                  <li>
                    <div class="num">4)</div>
                    <div class="cnts">성명, 생년월일, 성별, 내외국인여부, 이동전화번호, 이동통신사정보, 연계정보(CI), 중복가입확인정보(DI) <br>
                      - 이동전화 가입고객을 대상으로 본인 확인서비스 제공 <br>
                      ※ 연계정보(CI)는 웹사이트 간 제휴서비스와 중복가입 확인을 위한 고객 확인 정보임</div>
                  </li>
                  <li>
                    <div class="num">5)</div>
                    <div class="cnts">성명, 생년월일, 연락처, 주소, 접속기록(접속여부, 접속횟수, 데이터량 등)</div>
                  </li>
                  <li>
                    <div class="num">6)</div>
                    <div class="cnts">서비스 이용과정 중 생성 및 기타수집정보 (단말기 정보, 이용내역, 변경내역, 가입정보, 쿠키 및 접속로그, 광고식별자, 접속 IP, 통계데이터, 웹사이트 설정 정보 등) <br>
                      - 신청 서비스·상품제공 및 안내, 이용빈도파악 및 통계학적 특성에 따른 서비스 제공, 개인 맞춤형 서비스 제공, 서비스·상품개발·특화, 이용자 및 서비스 이용에 대한 통계·분석, 고객관계 관리</div>
                  </li>
                  <li>
                    <div class="num">7)</div>
                    <div class="cnts">상담내용 <br>
                      - 편의제공 및 불편사항 개선과 서비스 품질 향상을 위한 분석</div>
                  </li>
                </ol>
              </li>
              <li>
                <div class="num">(5)</div>
                <div class="cnts">
                  회사는 서비스의 제공에 관한 계약을 이행하기 위하여 필요한 개인정보로서 경제적 · 기술적인 사유로 통상적인 동의를 받는 것이 뚜렷하게 곤란한 경우에는 고객의 동의가 없더라도 개인정보를 수집 · 이용할 수 있습니다. 요금정산을 위하여 필요한 경우, 법, 국세기본법, 지방세법, 통신비밀보호법, 금융실명거래 및 비밀보장에 관한 법률, 신용정보의 이용 및 보호에 관한 법률, 전기통신기본법, 전기통신사업법, 소비자기본법, 한국은행법, 형사소송법 등 관련 법령에 특별한 규정이 있는 경우, 회사는 고객의 개인정보 수집 시에 고객에게 고지한 범위 또는 이용약관에 명시한 범위를 넘어서 이용하거나 제3자에게 제공할 수 있습니다. 다만, 관련 법령에 의한 경우에도 고객의 개인정보는 법령에 정해진 절차와 방법에 따라 제공됩니다.
                </div>
              </li>
              <li>
                <div class="num">(6)</div>
                <div class="cnts">
                  회사는 개인정보 보호법 등 관련 법령에 따라 수집 목적과 합리적으로 관련된 범위에서는 고객의 동의 없이 개인정보를 이용할 수 있으며, 이 때 '당초 수집 목적과 관련성이 있는지, 수집한 정황 또는 처리 관행에 비추어 볼 때 예측 가능성이 있는지, 고객님의 이익을 부당하게 침해하는지, 가명처리 또는 암호화 등 안전성 확보에 필요한 조치를 하였는지'를 종합적으로 고려합니다.
                </div>
              </li>
            </ol>
          </div>
          <div class="terms_cnts" ref="cnt3">
            <h4 class="tit_terms">
              <span class="num">3.</span>
              <span class="title">개인정보의 이용·보관 기간</span>
            </h4>
            <ol class="list depth">
              <li>
                <div class="num">(1)</div>
                <div class="cnts">고객의 개인정보는 서비스 가입기간 동안 이용 · 보관함을 원칙으로 하고 요금정산, 과 · 오납 등에 관한 분쟁에 대비하기 위하여 <strong>서비스 해지 또는 요금완납 후 6개월까지</strong> 보유·이용합니다.</div>
              </li>
              <li>
                <div class="num">(2)</div>
                <div class="cnts">개인위치정보 3개월간 보존하며, 위치정보 수집·이용·제공사실 확인자료는 자동으로 기록하여 6개월간 보존합니다. (단, 국세기본법, 법인세법, 부가가치세법, 상법 등 관계법령의 규정에 의하여 보존할 필요성이 있는 경우에는 그에 따라 위치정보 수집·이용·제공사실 확인자료를 보존함.)</div>
              </li>
              <li>
                <div class="num">(3)</div>
                <div class="cnts">다음 각 호의 1에 해당하는 경우에는 그 기간이 도래하거나, 조건이 성취되는 때까지 필요한 범위 내에서 고객의 개인정보를 보관할 수 있습니다.</div>
                <!-- 2 depth -->
                <ol class="list depth dep_2">
                  <li>
                    <div class="num">1)</div>
                    <div class="cnts">상법 등 관련 법령의 규정에 의하여 일정기간 보유하여야 할 필요가 있을 경우에는 그 기간 동안 보유합니다. 그 예는 아래와 같습니다.</div>
                      <ol class="list depth dep_3">
                        <li>
                          <div class="num">①</div>
                          <div class="cnts">상업장부와 영업에 관한 중요서류에 포함된 개인정보 : <strong>10년(상법)</strong></div>
                        </li>
                        <li>
                          <div class="num">②</div>
                          <div class="cnts">전표 또는 이와 유사한 서류에 포함된 개인정보 : <strong>5년(상법)</strong></div>
                        </li>
                        <li>
                          <div class="num">③ </div>
                          <div class="cnts">고객의 성명, <strong>주민등록번호</strong>, 전화번호, 주소, 요금납부내역(청구액, 수납액, 수납일시, 요금납부 방법 등), 기타 거래에 관한 장부: 관련 국세의 법정신고기한이 경과한 날로부터 5년(국세기본법)</div>
                        </li>
                        <li>
                          <div class="num">④ </div>
                          <div class="cnts">계약 또는 청약철회 등에 관한 기록 : <strong>계약 또는 청약철회 시부터 5년(전자상거래 등에서의 소비자보호에 관한 법률)</strong></div>
                        </li>
                        <li>
                          <div class="num">⑤ </div>
                          <div class="cnts">대금결제 및 재화 등의 공급에 관한 기록 : <strong>공급 시부터 5년(전자상거래 등에서의 소비자보호에 관한 법률)</strong></div>
                        </li>
                        <li>
                          <div class="num">⑥</div>
                          <div class="cnts">소비자의 불만 또는 분쟁처리에 관한 기록 : <strong> 불만 또는 분쟁 처리 시부터 3년(전자상거래 등에서의 소비자보호에 관한 법률)</strong></div>
                        </li>
                        <li>
                          <div class="num">⑦ </div>
                          <div class="cnts">표시광고에 관한 기록 : <strong>6개월(전자상거래 등에서의 소비자보호에 관한 법률)</strong></div>
                        </li>
                        <li>
                          <div class="num">⑧ </div>
                          <div class="cnts">신용정보의 수집 처리 및 이용 등에 관한 기록 : <strong>3년(신용정보의 이용 및 보호에 관한 법률)</strong></div>
                        </li>
                        <li>
                          <div class="num">⑨ </div>
                          <div class="cnts">통신사실확인자료 제공 시 이용자 확인에 필요한 성명, <strong>주민등록번호</strong>, 전화번호 등 : <strong>12개월(통신비밀보호법)</strong></div>
                        </li>
                        <li>
                          <div class="num">⑩ </div>
                          <div class="cnts">전기통신 일시, 전기통신 개시종료 시간, 발 · 착신 통신번호 등 상대방의 가입자 번호, 사용도수, 정보통신망에 접속된 정보통신기기의 위치를 확인할 수 있는 발신기지국의 위치추적자료 등 : <strong>12개월(통신비밀보호법)</strong></div>
                        </li>
                        <li>
                          <div class="num">⑪ </div>
                          <div class="cnts">컴퓨터 통신 또는 인터넷의 사용자가 전기통신역무를 이용한 사실에 관한 컴퓨터 통신 또는 인터넷의 로그기록자료, 컴퓨터 통신 또는 인터넷 사용자가 정보통신망에 접속하기 위하여 사용하는 정보통신기기의 위치를 확인할 수 있는 접속지의 추적자료 : <strong>3개월(통신비밀보호법)</strong></div>
                        </li>
                      </ol>
                  </li>
                  <li>
                    <div class="num">2)</div>
                    <div class="cnts">개별적으로 고객의 동의를 받은 경우 <strong>그 동의 받은 기간</strong></div>
                  </li>
                  <li>
                    <div class="num">3)</div>
                    <div class="cnts">서비스가 해지 등으로 종료되었으나 이용요금(기타 거래대금을 포함)을 납부하지 않은 경우 <strong>그 요금을 완납할 때까지</strong></div>
                  </li>
                  <li>
                    <div class="num">4)</div>
                    <div class="cnts">회사와 고객 간에 민원, 소송 등 분쟁이 발생한 경우에 그 보유기간 내에 분쟁이 해결되지 않을 경우 <strong>그 분쟁이 해결될 때까지</strong></div>
                  </li>
                </ol>

              </li>
            </ol>
          </div>
          <div class="terms_cnts" ref="cnt4">
            <h4 class="tit_terms">
              <span class="num">4.</span>
              <span class="title">개인정보의 이용 및 제3자 제공</span>
            </h4>
            <ol class="list depth">
              <li>
                <div class="num">(1)</div>
                <div class="cnts">회사는 고객의 개인정보를 가입신청서, 이용약관, 개인정보처리방침의 "개인정보 수집 · 이용 목적상 고지한 범위 내에서 이용 및 제공하며, 그 범위를 넘어서 이용하거나 제공하지 않습니다. 특히, 다음의 경우는 주의를 기울여 개인정보를 이용 및 제공할 것입니다.</div>
                <!-- 2 depth -->
                <ol class="list depth dep_2">
                  <li>
                    <div class="num">1)</div>
                    <div class="cnts">제휴관계 <br>
                      보다 나은 서비스 제공을 위하여 고객의 개인정보를 제휴사에게 제공하거나 제휴사와 공유할 수 있습니다. 이 경우 사전에 고객에게 제휴사가 누구인지, 제공 또는 공유되는 개인정보의 항목이 무엇인지, 왜 그러한 개인정보가 제공되거나 공유되어야 하는지, 그리고 언제까지 어떻게 보관 · 관리되는지에 관하여 개별적으로 이메일 등 전자적 방법이나, 전화, 서면, 팩스, 우편 등을 통해 고지하여 동의를 구하는 절차를 거치게 되며, 고객이 동의하지 않는 경우에는 제휴사에게 제공하거나 제휴사와 공유하지 않습니다.
                    </div>
                  </li>
                  <li>
                    <div class="num">2)</div>
                    <div class="cnts">매각 · 인수합병 등 <br>
                      회사의 서비스제공자로서의 권리와 의무가 완전 승계 또는 이전되는 경우 사전에 개인정보를 이전하려는 사실, 개인정보의 이전을 받는 자(이하 "영업양수자 등")의 성명(법인인 경우 법인의 명칭) · 주소 · 전화번호 그 밖에 연락처, 고객이 개인정보의 이전을 원하지 아니하는 경우 그 동의를 철회할 수 있는 방법과 절차에 대해 상세하게 고지할 것이며 고객의 개인정보에 대한 동의 철회의 선택권을 부여합니다.
                    </div>
                  </li>
                </ol>
              </li>
              <li>
                <div class="num">(2)</div>
                <div class="cnts">회사는 개인위치정보 주체의 동의가 있거나 다음 각 호의 1에 해당하는 경우를 제외하고 개인위치정보 또는 위치정보 수집ㆍ이용ㆍ제공사실 확인자료를 위치정보사업 및 위치기반서비스 이용약관에 명시 또는 고지한 범위를 넘어 이용하거나 제3자에게 제공하지 않습니다.</div>
                <!-- 2 depth -->
                <ol class="list depth dep_2">
                  <li>
                    <div class="num">1)</div>
                    <div class="cnts">위치정보 및 위치기반 서비스 등의 제공에 따른 요금 정산을 위하여 위치정보 수집ㆍ이용ㆍ제공사실 확인자료가 필요한 경우</div>
                  </li>
                  <li>
                    <div class="num">2)</div>
                    <div class="cnts">통계작성, 학술연구 또는 시장조사를 위하여 특정 개인을 알아볼 수 없는 형태로 가공하여 제공하는 경우</div>
                  </li>
                </ol>
              </li>
              <li>
                <div class="num">(3)</div>
                <div class="cnts">제3자에게 위치정보를 제공하는 서비스의 경우, 회사는 개인위치정보를 수집 및 제공한 즉시 개인위치정보를 수집한 당해 통신단말장치로 매회 개인위치정보주체에게 SMS의 방법으로 제공받은 자, 제공 일시, 제공 목적을 통보합니다. 단, 다음에 해당하는 경우에는 개인위치정보주체가 미리 특정하여 지정한 통신단말장치 또는 전자우편주소 등으로 통보합니다.</div>
                <!-- 2 depth -->
                <ol class="list depth dep_2">
                  <li>
                    <div class="num">1)</div>
                    <div class="cnts">개인위치정보를 수집한 당해 통신단말장치가 문자, 음성 또는 영상의 수신기능을 갖추지 아니한 경우</div>
                  </li>
                  <li>
                    <div class="num">2)</div>
                    <div class="cnts">개인위치정보주체가 개인위치정보를 수집한 당해 통신단말장치 외의 통신단말장치 또는 전자우편주소 등으로 통보할 것을 미리 요청한 경우</div>
                  </li>
                </ol>
              </li>
              <li>
                <div class="num">(4)</div>
                <div class="cnts">회사가 고객의 개인정보를 제3자에게 제공하는 경우 그 제공하는 목적, 제공하는 개인정보의 항목, 개인정보를 제공받는 자 및 그 보유 · 이용기간은 다음 표와 같습니다.</div>
                <!-- table -->
                <div class="table ty04">
                  <table>
                    <caption>개인정보를 제공받는 자, 제공하는 목적, 제공정보종류 및 그 보유 · 이용기간 안내</caption>
                    <colgroup>
                      <col style="width:80px">
                      <col style="width:100px">
                      <col style="width:100px;">
                      <col style="width:100px">
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">제공받는자</th>
                        <th scope="col">제공목적</th>
                        <th scope="col">보제공정보종류</th>
                        <th scope="col">보유 및 이용기간</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>한국모바일인증(주)</td>
                        <td>모바일 인증서비스 제공(이용고객에 한함)</td>
                        <td>인증정보</td>
                        <td rowspan="6">정보 제공일 부터 서비스 해지 또는 제공 계약 종료일 중 먼저 도래하는 시점 까지 이용 하며, 이용 기간이 종료 한 시점에 파기. 단 ,다른 법령에 특별한 규정이 있을 경우 관련 법령에 따라 보관</td>
                      </tr>
                      <tr>
                        <td>스마트콘</td>
                        <td>유심 쿠폰 서비스 제공</td>
                        <td class="brd_r">이동전화번호(CTN)</td>
                      </tr>
                      <tr>
                        <td>토스페이먼츠 주식회사</td>
                        <td>신용카드 결제(이용고객에 한함)</td>
                        <td class="brd_r">고객명,주민등록번호,전화번호,계좌번호,계좌주 성명,청구금액,수납금액,출금금액,생년월일</td>
                      </tr>
                      <tr>
                        <td>자동인출을 신청한 카드사</td>
                        <td>신용카드 결제(이용고객에 한함)</td>
                        <td class="brd_r">전화번호,카드번호,카드유효기간,생년월일</td>
                      </tr>
                      <tr>
                        <td>금융결제원,KSnet</td>
                        <td>신용카드 자동이체</td>
                        <td class="brd_r">전화번호,카드번호,카드유효기간,생년월일</td>
                      </tr>
                      <tr>
                        <td>금융결제원</td>
                        <td>자동이체계좌 유효성인증 등(이용고객에 한함)</td>
                        <td class="brd_r">고객명,계좌번호,생년월일</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
            </ol>
          </div>
          <div class="terms_cnts" ref="cnt5">
            <h4 class="tit_terms">
              <span class="num">5.</span>
              <span class="title">개인정보의 국외이전</span>
            </h4>
          </div>
          <div class="terms_cnts" ref="cnt6">
            <h4 class="tit_terms">
              <span class="num">6.</span>
              <span class="title">개인정보의 처리위탁</span>
            </h4>
            <ol class="list depth">
              <li>
                <div class="num">(1)</div>
                <div class="cnts">회사는 보다 나은 서비스 제공과 고객편의 제공 등 업무 수행을 원활하게 하기 위하여 외부 전문업체에 고객의 개인정보에 대한 수집 · 보관 · 처리 · 이용 · 제공 · 관리 · 파기 등(이하 "처리")을 위탁할 수 있습니다.</div>
              </li>
              <li>
                <div class="num">(2)</div>
                <div class="cnts">회사가 고객의 개인정보를 처리 위탁하는 경우 그 위탁업무의 내용, 수탁자는 다음 표와 같습니다.<br>
                  - 수탁사 중 ‘고객 유치 및 상담 업무’를 판매점에 재위탁하는 경우 그 업체정보는 다음 표와 같습니다.</div>
                <!-- table -->
                <div class="table ty04">
                  <table>
                    <caption>수탁자, 위탁업무내용 안내</caption>
                    <colgroup>
                      <col style="width:50%">
                      <col style="width:50%">
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">수탁자</th>
                        <th scope="col">위탁업무내용</th>
                      </tr>                        
                    </thead>
                    <tbody>
                      <tr>
                        <td>(주)미디어로그</td>
                        <td>홈페이지 개발·운영, 온라인마케팅 등</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- //table -->
              </li>
              <li>
                <div class="num">(3)</div>
                <div class="cnts">회사는 개인정보의 처리업무를 위탁하는 경우 위탁업무의 목적 외 처리금지에 관한 사항, 기술적· 관리적 보호조치에 관한 사항, 위탁업무의 목적 및 범위, 재위탁 제한에 관한 사항, 안전성 확보 조치에 관한 사항, 개인정보의 관리 현황 점검 등 감독에 관한 사항, 수탁자 의무 위반시의 손해배상 등 책임에 관한 사항 등을 문서로 명확히 규정하고 해당 계약의 내용을 서면 또는 전자적으로 보관합니다.</div>
              </li>
              <li>
                <div class="num">(4)</div>
                <div class="cnts">회사는 사전 고지없이 서비스 제공 이외의 목적으로 개인정보를 처리 위탁하지 않는 것을 원칙으로 합니다. 다만, 그러한 필요가 생기는 경우 위탁업무의 내용과 수탁자를 고객에게 고지합니다.</div>
              </li>
            </ol>
          </div>
          <div class="terms_cnts" ref="cnt7">
            <h4 class="tit_terms">
              <span class="num">7.</span>
              <span class="title">개인정보의 파기</span>
            </h4>
            <ol class="list depth">
              <li>
                <div class="num">(1)</div>
                <div class="cnts">회사는 수집한 개인정보 및 개인위치정보의 수집 · 이용 목적이 달성되거나 그 보유 · 이용기간이 종료되는 등 개인정보가 불필요하게 되었을 경우 고객의 동의, 이용약관, 관련 법령에 따라 보관이 필요한 경우를 제외하고 해당 정보를 지체 없이 파기합니다.</div>
              </li>
              <li>
                <div class="num">(2)</div>
                <div class="cnts">회사는 서면 등에 기재된 개인정보의 경우 분쇄기로 분쇄하거나 소각, 전자적 방법으로 저장된 개인정보의 경우 그 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제 등 개인정보 보호 관련 법령에 따라 개인정보를 파기합니다.</div>
              </li>
            </ol>
          </div>
          <div class="terms_cnts" ref="cnt8">
            <h4 class="tit_terms">
              <span class="num">8.</span>
              <span class="title">고객의 권리와 그 행사방법</span>
            </h4>
            <ol class="list depth">
              <li>
                <div class="num">(1)</div>
                <div class="cnts">고객은 언제든지 회사가 보유하는 개인정보, 개인정보의 이용 · 제공내역, 수집 · 이용 · 제공에 대한 동의내역을 열람하거나 정정· 삭제, 처리정지를 요구할 수 있습니다. 해당 개인정보에 오류가 있거나 보존기간이 경과한 것으로 판명되는 등 고객의 요구에 정당한 사유가 있다고 인정되는 경우에는 회사는 지체 없이 필요한 조치를 취합니다.</div>
              </li>
              <li>
                <div class="num">(2)</div>
                <div class="cnts">온라인 가입정보의 열람, 정정, 삭제 및 처리정지에 관한 구체적인 방법과 절차는 다음과 같으며, 아래 절차를 통해 관련 요청 시 회사는 지체없이 필요한 조치를 취합니다.</div>
                <!-- table -->
                <div class="table ty04">
                  <table>
                    <caption>구분, 가입정보 열람 등 방법과 절차 안내</caption>
                    <colgroup>
                      <col style="width:50%">
                      <col style="width:50%">
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">구분</th>
                        <th scope="col">가입정보 열람 등 방법과 절차</th>
                      </tr>                        
                    </thead>
                    <tbody>
                      <tr>
                        <td>홈페이지</td>
                        <td>홈페이지 내의 "내 가입정보 - 회원정보변경" 클릭하여 직접 열람 또는 정정, 철회(탈퇴)</td>
                      </tr>
                      <tr>
                        <td>전화(고객센터)</td>
                        <td>1544-0001</td>
                      </tr>
                      <tr>
                        <td>이메일</td>
                        <td>접수처 : 고객보호팀 (privacy@lguplus.co.kr)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- //table -->
              </li>
              <li>
                <div class="num">(3)</div>
                <div class="cnts">회사는 대리인이 방문하여 열람 · 증명을 요구하는 경우에는 적법한 위임을 받았는지 확인할 수 있는 위임장 및 본인의 인감증명서와 대리인의 신분증 등을 제출 받아 정확히 대리인 여부를 확인합니다.</div>
              </li>
              <li>
                <div class="num">(4)</div>
                <div class="cnts">고객은 개인정보를 최신의 상태로 정확하게 입력하여야 하고, 변동 사항이 있는 경우 이를 회사에 통보하여야 하며, 스스로 부정확한 정보를 입력하거나 회사에 고객정보의 변경을 통보하지 않아 발생한 책임은 고객 자신에게 귀속됩니다.</div>
              </li>
              <li>
                <div class="num">(5)</div>
                <div class="cnts">고객이 타인 정보의 도용이나 침해, 허위정보를 입력하는 경우 서비스 해지 및 회원자격이 상실될 수 있으며 관련 법령에 따라 처벌받을 수 있습니다.</div>
              </li>
              <li>
                <div class="num">(6)</div>
                <div class="cnts">고객이 개인정보의 열람 · 제공을 반복적으로 요구하는 등 업무에 지장을 줄 우려가 있거나 그 분량이 상당하여 비용이 드는 경우, 또는 개인정보 보호 관련 법령상 고객의 요구를 거절할 정당한 사유가 있는 경우, 회사는 고객의 요구를 제한·연기 또는 거절하거나 업무처리에 따른 실비(복사비 등)를 고객에게 청구할 수 있습니다.</div>
              </li>
            </ol>
          </div>
          <div class="terms_cnts" ref="cnt9">
            <h4 class="tit_terms">
              <span class="num">9.</span>
              <span class="title">아동의 개인정보보호 및 법정대리인의 권리와 행사방법</span>
            </h4>
            <ol class="list depth">
              <li>
                <div class="num">(1)</div>
                <div class="cnts">회사는 만14세 미만 아동의 개인정보를 보호하기 위하여 다음의 조치를 하고 있습니다.</div>

                <!-- 2 depth -->
                <ol class="list depth dep_2">
                  <li>
                    <div class="num">1)</div>
                    <div class="cnts">만14세 미만 아동에 대한 개인정보 수집 시 부모 등 법정대리인의 동의를 구합니다.</div>
                  </li>
                  <li>
                    <div class="num">2)</div>
                    <div class="cnts">회사는 만14세 미만 아동에 관한 정보를 법정대리인 동의 없이 제3자에게 제공하거나 공유하지 않습니다.</div>
                  </li>
                  <li>
                    <div class="num">3)</div>
                    <div class="cnts">회사는 관련 법령에 따라 법정대리인의 동의를 받기 위하여 법정대리인의 개인정보(이름, 생년월일, 휴대폰번호, 관계, 주소)를 수집하며, 법정대리인 정보는 동의 여부를 확인하는 용도로 사용합니다.</div>
                  </li>
                  <li>
                    <div class="num">4)</div>
                    <div class="cnts">만14세 미만 아동의 법정대리인은 아동의 개인정보에 대한 열람, 수정 및 삭제를 요청할 수 있으며, 회사는 이러한 요청에 지체 없이 필요한 조치를 취합니다.</div>
                  </li>
                </ol>

              </li>
              <li>
                <div class="num">(2)</div>
                <div class="cnts">고객이 개인정보의 열람 · 제공을 반복적으로 요구하는 등 업무에 지장을 줄 우려가 있거나 그 분량이 상당하여 비용이 드는 경우, 또는 개인정보 보호 관련 법령상 고객의 요구를 거절할 정당한 사유가 있는 경우, 회사는 고객의 요구를 제한·연기 또는 거절하거나 업무처리에 따른 실비(복사비 등)를 고객에게 청구할 수 있습니다.</div>
              </li>
            </ol>
          </div>
          <div class="terms_cnts" ref="cnt10">
            <h4 class="tit_terms">
              <span class="num">10.</span>
              <span class="title">개인정보 자동수집장치의 설치·운영 및 그 거부방법</span>
            </h4>
            <ol class="list depth">
              <li>
                <div class="num">(1)</div>
                <div class="cnts">회사는 고객이 회사 홈페이지에 접속하는 경우 고객의 브라우저 내 쿠키(cookie)(홈페이지가 고객의 웹 브라우저로 전송하는 소량의 정보)를 사용하여 서비스를 제공할 수 있습니다. 고객은 웹 브라우저 상단의 "도구> 인터넷 옵션 탭에서 쿠키 이용을 거부할 수 있는 선택권을 가질 수 있으며, 다음과 같은 경로로 쿠키 설정을 확인 및 변경할 수 있습니다. 단, 고객이 쿠키 이용을 거부할 경우 회사의 서비스 이용에 어려움이 발생할 수 있습니다.</div>
                <!-- table -->
                <div class="table ty04">
                  <table>
                    <caption>브라우저, 쿠키 설정 확인 안내</caption>
                    <colgroup>
                      <col style="width:20%">
                      <col style="width:80%">
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">브라우저</th>
                        <th scope="col">쿠키 설정 확인 안내</th>
                      </tr>                        
                    </thead>
                    <tbody>
                      <tr>
                        <td>Internet Explorer</td>
                        <td><a href="https://support.microsoft.com/ko-kr/help/17442/windows-internet-explorer-delete-manage-cookies" target="blank">https://support.microsoft.com/ko-kr/help/17442/windows-internet-explorer-delete-manage-cookies</a></td>
                      </tr>
                      <tr>
                        <td>Edge</td>
                        <td><a href="https://support.microsoft.com/ko-kr/help/4027947/microsoft-edge-delete-cookies" target="blank">https://support.microsoft.com/ko-kr/help/4027947/microsoft-edge-delete-cookies</a></td>
                      </tr>
                      <tr>
                        <td>Safari</td>
                        <td><a href="https://support.apple.com/ko-kr/guide/safari/sfri11471/mac" target="blank">https://support.apple.com/ko-kr/guide/safari/sfri11471/mac</a></td>
                      </tr>
                      <tr>
                        <td>FireFox</td>
                        <td><a href="https://support.mozilla.org/ko/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=ko" target="blank">https://support.mozilla.org/ko/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=ko</a></td>
                      </tr>
                      <tr>
                        <td>Chrome</td>
                        <td><a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=ko" target="blank">https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=ko</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- //table -->
              </li>
              <li>
                <div class="num">(2)</div>
                <div class="cnts">회사는 유/무선인터넷 서비스 이용 시 주기적으로 회사의 서버로 전달되는 정보인 통계데이터 및 이용행태정보를 운영할 수 있습니다. 서비스 개선 및 이용통계, 고객분석, 맞춤형서비스 제공 등에 활용하기 위해 이용자가 웹 내에서 행해지는 주요활동 이력에 대해 수집 툴을 통해 자동으로 수집되며 세부 항목은 다음과 같습니다.  </div>

                <!-- 2 depth -->
                <ol class="list depth dep_2">
                  <li>
                    <div class="num">1)</div>
                    <div class="cnts">서비스 사용통계</div>
                    <!-- table -->
                    <div class="table ty04">
                      <table>
                        <caption>서비스 사용통계 항목, 세부내용 안내</caption>
                        <colgroup>
                          <col style="width:20%">
                          <col style="width:80%">
                        </colgroup>
                        <thead>
                          <tr>
                            <th scope="col">항목</th>
                            <th scope="col">세부내용</th>
                          </tr>                        
                        </thead>
                        <tbody>
                          <tr>
                            <td>세션정보</td>
                            <td>세션을 유지하거나 타사이트 연동을 위한 세션정보</td>
                          </tr>
                          <tr>
                            <td>모바일구분</td>
                            <td>모바일기기 접속여부 확인</td>
                          </tr>
                          <tr>
                            <td>메뉴정보</td>
                            <td>조회, 검색, 접속을 위한 메뉴 처리 정보</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- //table -->
                  </li>
                  <li>
                    <div class="num">2)</div>
                    <div class="cnts"> 이용행태 정보(분석|통계 : 웹 서비스 활동이력)</div>
                    <!-- table -->
                    <div class="table ty04">
                      <table>
                        <caption>이용행태 정보 항목, 세부내용, 보유기간 안내</caption>
                        <colgroup>
                          <col style="width:20%">
                          <col style="width:40%">
                          <col style="width:40%">
                        </colgroup>
                        <thead>
                          <tr>
                            <th scope="col">항목</th>
                            <th scope="col">세부내용</th>
                            <th scope="col">보유기간</th>
                          </tr>                        
                        </thead>
                        <tbody>
                          <tr>
                            <td>이용행태 정보</td>
                            <td>웹사이트 방문 이력, 사용 이력(메뉴 이동경로, 이용횟수, 방문자수, 이용시간 등)</td>
                            <td>수집일로부터 최대 2년간 보관·이용되며, 이용기간 종료 시 즉시 삭제</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- //table -->
                  </li>
                </ol>
              </li>
              <li>
                <div class="num">(3)</div>
                <div class="cnts">회사는 이용자의 편의를 위하여 쿠키, 통계데이터를 운영합니다. 회사의 쿠키, 통계데이터 사용목적은 다음과 같습니다.</div>

                <!-- 2 depth -->
                <ol class="list depth dep_2">
                  <li>
                    <div class="num">1)</div>
                    <div class="cnts">개인의 관심 분야에 따라 차별화된 정보를 제공</div>
                  </li>
                  <li>
                    <div class="num">2)</div>
                    <div class="cnts">회원과 비회원의 접속빈도 또는 머문 시간 등을 분석하여 이용자의 취향과 관심분야를 파악하여 타겟(target) 마케팅에 활용</div>
                  </li>
                  <li>
                    <div class="num">3)</div>
                    <div class="cnts">관심있게 둘러본 내용들에 대한 자취를 추적하여 다음 번 접속 때 개인 맞춤 서비스를 제공</div>
                  </li>
                  <li>
                    <div class="num">4)</div>
                    <div class="cnts">회원들의 습관을 분석하여 서비스 개편 시 기준으로 이용</div>
                  </li>
                  <li>
                    <div class="num">5)</div>
                    <div class="cnts">게시판의 글 등록</div>
                  </li>
                </ol>

              </li>
              <li>
                <div class="num">(4)</div>
                <div class="cnts">별도 보관기간이 안내되지 않은 쿠키정보의 보유 및 이용기간은 브라우저의 종료 또는 로그아웃 시까지입니다.</div>
              </li>
            </ol>
          </div>
          <div class="terms_cnts" ref="cnt11">
            <h4 class="tit_terms">
              <span class="num">11.</span>
              <span class="title">개인정보보호를 위한 안전성 확보 조치</span>
            </h4>
            <ol class="list depth">
              <li>
                <div class="num">(1)</div>
                <div class="cnts">기술적 조치 <br> 회사는 개인정보를 처리함에 있어 분실, 도난, 유출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적 대책을 강구하고 있습니다.</div>

                <!-- 2 depth -->
                <ol class="list depth dep_2">
                  <li>
                    <div class="num">1)</div>
                    <div class="cnts">접속기록의 위 · 변조 방지 조치를 취하고 있습니다.</div>
                  </li>
                  <li>
                    <div class="num">2)</div>
                    <div class="cnts">개인정보는 그 종류에 따라 관련 법령이 요구하는 수준의 암호화 저장 또는 전송 시 암호화 기술의 적용하여 관리합니다.</div>
                  </li>
                  <li>
                    <div class="num">3)</div>
                    <div class="cnts">백신프로그램을 이용하여 컴퓨터 바이러스에 의한 피해를 방지하기 위한 조치를 취하고 있으며, 백신프로그램을 주기적으로 업데이트하고 갑작스러운 바이러스 출현 시에 백신이 나오는 즉시 이를 제공함으로써 개인정보가 침해되는 것을 방지하고 있습니다.</div>
                  </li>
                  <li>
                    <div class="num">4)</div>
                    <div class="cnts">암호알고리즘을 이용하여 네트워크상 개인정보를 안전하게 전송하는 보안장치(SSL 등)를 채택하고 있습니다.</div>
                  </li>
                  <li>
                    <div class="num">5)</div>
                    <div class="cnts">해킹 등 외부 침입에 대비하여 각 서버마다 침입차단시스템 및 취약점분석시스템을 이용하여 보안에 최선을 다하고 있습니다.</div>
                  </li>
                </ol>

              </li>
              <li>
                <div class="num">(2)</div>
                <div class="cnts">관리적∙물리적 조치 <br> 개인정보의 안전한 보호를 위하여 주요 시스템 및 설비에 대하여 외부 전문기관으로부터 정보보호관리체계 인증 등 객관적인 인증을 받고 있으며 다음과 같은 관리적∙물리적 조치를 취하고 있습니다. </div>

                <!-- 2 depth -->
                <ol class="list depth dep_2">
                  <li>
                    <div class="num">1)</div>
                    <div class="cnts">회사는 개인정보 보호에 관한 내부관리계획을 수립, 시행하고 있습니다.</div>
                  </li>
                  <li>
                    <div class="num">2)</div>
                    <div class="cnts">회사는 개인정보에 대한 접근권한을 필요 · 최소한의 인원으로 제한하고 있습니다. 그 최소한의 인원에 해당하는 자는 다음과 같습니다.</div>

                    <!-- 3 depth -->
                    <ol class="list depth dep_3">
                      <li>
                        <div class="num">①</div>
                        <div class="cnts">고객을 직접 상대하여 상담, CRM(마케팅 등) 업무를 수행하는 자</div>
                      </li>
                      <li>
                        <div class="num">②</div>
                        <div class="cnts">개인정보보호책임자 및 그 담당자 등 개인정보관리업무를 수행하는 자</div>
                      </li>
                      <li>
                        <div class="num">③</div>
                        <div class="cnts"> 기타 업무상 개인정보의 처리가 불가피한 자</div>
                      </li>
                    </ol>

                  </li>
                  <li>
                    <div class="num">3)</div>
                    <div class="cnts">회사는 개인정보를 처리하는 직원을 대상으로 새로운 보안기술 습득 및 개인정보 보호의무 등에 관해 정기적인 사내 교육 및 외부 위탁 교육을 실시합니다.</div>
                  </li>
                  <li>
                    <div class="num">4)</div>
                    <div class="cnts">회사는 직원 입사 시 보안서약서를 통하여 사람에 의한 정보유출을 사전에 방지하고 개인정보처리방침에 대한 이행사항 및 직원의 준수 여부를 감사하기 위한 내부절차를 마련하고 있습니다.</div>
                  </li>
                  <li>
                    <div class="num">5)</div>
                    <div class="cnts">개인정보 처리자의 업무 인수인계는 보안이 유지된 상태에서 철저하게 이루어지도록 하며 입사 및 퇴사 후 개인정보 사고에 관한 책임을 명확히 합니다.</div>
                  </li>
                  <li>
                    <div class="num">6)</div>
                    <div class="cnts">개인정보와 일반 데이터는 혼합하여 보관하지 않고 분리하여 보관합니다.</div>
                  </li>
                  <li>
                    <div class="num">7)</div>
                    <div class="cnts">회사는 가명정보처리에 대한 기록을 작성 보관하고 있습니다. 또한 가명정보 활용시 추가정보는 분리하여 별도로 저장·관리하고 있으며, 가명정보와 불법적으로 결합되어 재식별에 악용되지 않도록 접근권한을 분리하는 등 필요한 조치를 하고 있습니다.</div>
                  </li>
                  <li>
                    <div class="num">8)</div>
                    <div class="cnts">전산실 및 자료 보관실 등을 특별 보호구역으로 설정하여 출입을 통제합니다.</div>
                  </li>
                  <li>
                    <div class="num">9)</div>
                    <div class="cnts">회사는 고객의 실수나 기본적인 인터넷의 위험성 때문에 일어나는 일들에 대해 책임을 지지 않습니다. 고객 스스로가 본인의 개인정보를 보호하기 위해서 자신의 아이디와 비밀번호를 적절하게 관리하고 스스로 책임을 져야 합니다.</div>
                  </li>
                  <li>
                    <div class="num">10)</div>
                    <div class="cnts">회사는 내부 관리자의 실수나 기술관리상 사고로 인하여 개인정보의 도난, 유출, 변조, 훼손이 유발될 경우 적절한 대책과 보상을 강구합니다.</div>
                  </li>
                </ol>

              </li>
            </ol>
          </div>
          <div class="terms_cnts" ref="cnt12">
            <h4 class="tit_terms">
              <span class="num">12.</span>
              <span class="title">의견수렴 및 불만처리</span>
            </h4>
            <ol class="list depth">
              <li>
                <div class="num">(1)</div>
                <div class="cnts">회사는 고객의 의견을 소중하게 생각하며, 고객센터나 대리점에 고객 문의 시 신속하고 정확한 답변을 드리겠습니다.</div>
              </li>
              <li>
                <div class="num">(2)</div>
                <div class="cnts">회사는 고객과의 원활한 의사소통을 위해 고객센터를 운영하고 있으며, 그 연락처는 다음과 같습니다.</div>

                <!-- 2 depth -->
                <ol class="list depth dep_2">
                  <li>
                    <div class="num">1)</div>
                    <div class="cnts">이메일: webmaster@lguplus.co.kr / privacy@lguplus.co.kr</div>
                  </li>
                  <li>
                    <div class="num">2)</div>
                    <div class="cnts">전화번호: 모바일(휴대폰+114, 1544-0010)</div>
                  </li>
                </ol>

              </li>
              <li>
                <div class="num">(3)</div>
                <div class="cnts">전화상담은 평일 09:00 ~ 18:00이며, 이메일, 팩스, 우편을 이용한 상담은 접수 후 12시간 내에 성실하게 답변 드리겠습니다. 다만, 근무시간 이후 또는 주말 및 공휴일에는 익일 처리하는 것을 원칙으로 합니다.</div>
              </li>
              <li>
                <div class="num">(4)</div>
                <div class="cnts">기타 개인정보에 관한 상담이 필요한 경우에는 개인정보침해신고센터, 대검찰청 사이버수사과, 경찰청 사이버수사국 등으로 문의하실 수 있습니다.</div>

                <!-- 2 depth -->
                <ol class="list depth dep_2">
                  <li>
                    <div class="num">1)</div>
                    <div class="cnts">개인정보침해신고센터: 전화 118 / 이메일 privacy@kisa.or.kr / 홈페이지 <a href="http://privacy.kisa.or.kr" target="blank">http://privacy.kisa.or.kr</a></div>
                  </li>
                  <li>
                    <div class="num">2)</div>
                    <div class="cnts">대검찰청 사이버수사과: 국번없이 1301 / 홈페이지 <a href="https://www.spo.go.kr" target="blank">www.spo.go.kr</a></div>
                  </li>
                  <li>
                    <div class="num">3)</div>
                    <div class="cnts">경찰청 사이버수사국: 전화 182 / 홈페이지 <a href="https://ecrm.police.go.kr" target="blank">https://ecrm.police.go.kr</a></div>
                  </li>
                </ol>

              </li>
            </ol>
          </div>
          <div class="terms_cnts" ref="cnt13">
            <h4 class="tit_terms">
              <span class="num">13.</span>
              <span class="title">개인정보보호책임자 및 담당자</span>
            </h4>
            <div class="text">회사는 고객이 안전하게 서비스를 이용할 수 있도록 개인정보 보호에 최선을 다하고 있으며 고객의 개인정보 관련 문의, 불만처리, 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자 및 담당부서를 지정하여 운영하고 있습니다.</div>
            <ol class="list depth">
              <li>
                <div class="num">(1)</div>
                <div class="cnts">개인정보고충처리책임자</div>

                <!-- table -->
                <div class="table ty04">
                  <table>
                    <caption>개인정보고충처리책임자 성명, 전화, 메일  안내</caption>
                    <colgroup>
                      <col style="width:33.333%">
                      <col style="width:33.333%">
                      <col style="width:33.333%">
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">성명</th>
                        <th scope="col">전화</th>
                        <th scope="col">메일</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>문찬오</td>
                        <td>1544-0010,101,114(이동전화)</td>
                        <td>privacy@lguplus.co.kr</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- //table -->

              </li>
              <li>
                <div class="num">(2)</div>
                <div class="cnts">개인정보보호책임자</div>

                <!-- table -->
                <div class="table ty04">
                  <table>
                    <caption>개인정보보호책임자 성명, 전화, 메일  안내</caption>
                    <colgroup>
                      <col style="width:33.333%">
                      <col style="width:33.333%">
                      <col style="width:33.333%">
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">성명</th>
                        <th scope="col">전화</th>
                        <th scope="col">메일</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>홍관희</td>
                        <td>1544-0010,101,114(이동전화)</td>
                        <td>securitypol@lguplus.co.kr</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- //table -->


              </li>
              <li>
                <div class="num">(3)</div>
                <div class="cnts">위치정보보호책임자</div>

                <!-- table -->
                <div class="table ty04">
                  <table>
                    <caption>위치정보보호책임자 성명, 전화, 메일  안내</caption>
                    <colgroup>
                      <col style="width:33.333%">
                      <col style="width:33.333%">
                      <col style="width:33.333%">
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">성명</th>
                        <th scope="col">전화</th>
                        <th scope="col">메일</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>이우석</td>
                        <td>1544-0010,101,114(이동전화)</td>
                        <td>infudrha@lguplus.co.kr</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- //table -->

              </li>
            </ol>
          </div>
          <div class="terms_cnts" ref="cnt14">
            <h4 class="tit_terms">
              <span class="num">14.</span>
              <span class="title">개인정보 처리방침 변경 안내</span>
            </h4>
            <div class="text">회사의 개인정보처리방침은 2023년 11월 01일에 개정되었으며, 정부의 정책 또는 보안기술의 변경에 따라 내용의 추가ㆍ삭제 및 수정이 있을 시에는 개정 전에 개인정보처리방침 페이지의 "공지"란을 통해 고지합니다.</div>
          </div>
          <div class="terms_cnts">
            <ul class="version">
              <li>개인정보처리방침 버전번호: V.20231101</li>
              <li>개인정보처리방침 시행일: 2023-11-01</li>
            </ul>

          </div>
        </div>
    </div> <!-- // section -->

		</div> <!-- // content -->
	</div><!-- // container -->

</template>

<script>
import PopupSelect from '@/components/PopupSelect';

export default {
  name: 'ALFM-FT02-PG00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '개인정보처리방침' },
      headerSize: 0,
    }
  },
  methods: {
    move(ref){
      const elem = this.$refs[ref];
      const move = elem.offsetTop - this.headerSize;
      window.scrollTo({
        top: move,
        behavior: 'smooth'
      });
    },
  },
  mounted(){
    this.$emit('setLayout', this.layout);
    setTimeout(()=>{ this.headerSize = document.querySelector(".header").offsetHeight; }, 10);
  },
  components:{
    PopupSelect,
  },
  // props: {
  //   frontData: Object,  // @/assets/frontData.js
  // }
}
</script>
