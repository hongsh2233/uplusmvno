<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section asso"> <!-- class="asso" 이동 ; 23/11/24 -->
        <Tab :data="{
            option: { type:1 },
            data: [
              { selected:true, controls:'tab_panel_01_01', title: '삼성카드'},
              { selected:false, controls:'tab_panel_01_02', title: '우리카드'},
              { selected:false, controls:'tab_panel_01_03', title: '신한카드'}
            ]
          }
        ">
          <template v-slot:tab_panel_01_01>
            <h3 class="blind">삼성카드</h3>
            <div class="panel_cnt">

							<!-- tab panel로 위치 이동 ; 23/11/23 -->
							<div class="card_info_wrap">
								<div class="logo_area">
									<img src="/images/data/img_samsung_card.png" alt="삼성카드">
								</div>

								<div class="tit_area">
									<div class="tit">
										U<sup>+</sup> 알뜰폰 파트너스 삼성카드
									</div>
									<strong class="asso_point fc01">매월 최대 2만원/2만 2천원 할인</strong>
								</div>

								<div class="img_area">
									<img src="/images/data/card.png" alt="삼성카드">
								</div>

								<div class="info_area">
									<ul>
										<li>
											<div class="img_info"></div>
											<div class="txt_info">
												<strong>이용실적</strong>
												<p>전월 카드 이용 실적이 30만/70만 이상일 경우</p>
											</div>
										</li>
										<li>
											<div class="img_info"></div>
											<div class="txt_info">
												<strong>정기결제</strong>
												<p>U+알뜰폰 통신요금정기결제 시</p>
											</div>
										</li>
									</ul>
								</div>
							</div>

							<div class="box_gray">
								<ul class="text_list bull">
									<li>자세한 내용은 카드 혜택 페이지에서 확인해주세요.</li>
								</ul>
							</div>
							<div class="btn_group">
								<button type="button" class="btn md c03">카드 혜택 자세히 보기</button>
							</div>
							<!-- //카드 정보 -->

							<div class="tit_wrap">
								<strong class="tit_sub">알뜰폰 통신요금 정기 결제 시</strong>
								<h3 class="tit03">전월 이용금액대별 추가 결제일 <br>할인 혜택 제공</h3>
								<div class="bag card">카드당 1회</div>
							</div>
							<div class="asso_bar_wrap">
								<strong class="asso_bar_tit">전월 카드 이용금액 기준</strong>
								<!-- graph -->
								<div class="asso_bar">
									<ul class="bar_cmpri">
										<li>
											<div class="bar_area">
												<div class="bar_inner" style="height: 20%;">
													<strong class="max">최대 <br>20,000원</strong>
												</div>
											</div>
											<span class="price">30만원 이상</span>
										</li>
										<li>
											<div class="bar_area">
												<div class="bar_inner" style="height: 50%;">
													<strong class="max">최대 <br>22,000원</strong>
												</div>
											</div>
											<span class="price">70만원 이상</span>
										</li>
										<li>
											<div class="bar_area">
												<div class="bar_inner" style="height: 100%;">
													<strong class="max">최대 <br>30,000원</strong>
												</div>
											</div>
											<span class="price">120만원 이상</span>
										</li>
									</ul>
								</div>
								<!-- //graph -->
							</div>
							<!-- //알뜰폰 통신요금 정기 결제 -->

							<div class="tit_wrap">
								<h3 class="tit03">추가 할인 이벤트</h3>
							</div>
							<div class="table">
								<table>
									<caption>통신요금정보</caption>
									<colgroup>
										<col style="width:26%">
										<col style="width:26%">
										<col style="width:auto;">
										<col style="width:26%">
									</colgroup>
									<thead>
										<tr>
											<th scope="colgroup" colspan="4"><strong>통신요금 월 할인한도</strong></th>
										</tr>
										<tr>
											<th scope="col">전월 이용 금액</th>
											<th scope="col">카드 할인</th>
											<th scope="col">추가 할인</th>
											<th scope="col">총 할인 한도</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(d, i) in dataTableDiscount" :key="i">
											<td v-html="d.cost"></td>
											<td v-html="d.card"></td>
											<td v-html="d.add"></td>
											<td v-html="d.total"></td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="box_gray">
								<ul class="text_list bull">
									<li>카드 할인은 전월 생활요금 정기결제 건수(0건~3건이상)에 따라서 금액이 달라집니다.</li>
									<li>프로모션 할인 행사 기간 : 2022.04.01.2022.06.30</li>
									<li>추가 할인 제공기간 : U+ 알뜰폰 파트너스 삼성카드 최초 카드 사용 등록일 기준 24개월간 제공</li>
								</ul>
							</div>
							<!-- //추가 할인 이벤트 -->

							<div class="tit_wrap">
								<h3 class="tit03">연회비</h3>
							</div>
							<div class="list_info_ty01 w50">
								<dl v-for="(d, i) in dataAnnualFee" :key="i">
									<dt>{{ d.type }}</dt>
									<dd class="ann_fee"><strong>{{ d.fee }}원</strong></dd>
								</dl>
							</div>
							<div class="text_info">후불교통기능이 탑재되어 발급</div>
							<!-- //연회비 -->
							
							<div class="tit_wrap">
								<h3 class="tit03">제휴카드 이용 및 등록 안내</h3>
							</div>
							<div class="list_box_gray">
								<ul>
									<li>
										<div class="box_gray">
											<div class="list_box_num">
												<b></b>
												<span>꼭! ‘U+ 알뜰 모바일‘ 전용 제휴카드로 이용</span>
											</div>
											<NuxtLink :to="{}" class="btn xsm c07">자세히 보기</NuxtLink>
										</div>
									</li>
									<li>
										<div class="box_gray">
											<div class="list_box_num">
												<b></b>
												<span>통신료 자동이체 수단 변경 필수</span>
											</div>
										</div>
									</li>
									<li>
										<div class="box_gray">
											<div class="list_box_num">
												<b></b>
												<span>제휴카드 전월 실 충족 시 통신료 할인</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<!-- //제휴카드 이용 -->


							<div class="tit_wrap">
								<h3 class="tit03">카드문의</h3>
							</div>
							<div class="list_info_ty01 w50">
								<dl>
									<dt>{{ csLabel }}</dt>
									<dd class="ann_fee" v-html="csTel"></dd>
								</dl>
							</div>
							<!-- //카드문의 -->

							<v-expansion-panels class="acd_wrap"  v-model="toggle" multiple>
								<v-expansion-panel class="acd_item">
									<div class="acd_title">
										<v-expansion-panel-title>유의사항</v-expansion-panel-title>
									</div>
									<div class="acd_panel">
										<v-expansion-panel-text>
											<ul class="text_list bull">
												<li>본 혜택은 결제일 할인으로 제공됩니다.</li>
												<li>U+알뜰폰 파트너사의 LG U+ 통신요금에 한해 혜택이 제공됩니다.</li>
												<li>U+알뜰폰 통신요금 2건 이상 정기결제 시에도 합산하여 통합 월 1회 제공됩니다.</li>
												<li>U+알뜰폰 통신요금 정기결제 합산 금액이 월 할인금액보다 적은 경우, 통신요금 정기결제 금액만큼 해당월 회원님의 카드 결제대금에서 자동 차감됩니다.</li>
												<li>U+알뜰폰 파트너사 및 요금제는 U+알뜰폰 파트너스 홈페이지(mvnopartners.uplus.co.kr) 또는 해당 알뜰폰 파트너사 홈페이지에서 확인 가능합니다.</li>
												<li>전월 이용금액이란, 매월 1일부터 말일까지 이용한 일시불 및 할부 이용금액에 한하며, 무이자할부, 건강보험/국민연금//고용보험/산재보험 및 장애인 고용부담금, 국세/지방세/공과금, 초 · 중 · 고등학교 학교납입금,  대학 등록금, 대중교통, 택시, 아파트 관리비, 부동산임대료, 기프트/선불카드(포인트, 사이버머니 등 전자지급수단 포함) 구매 및 충전, 상품권 구매건은 제외됩니다.</li>
												<li>프로모션 할인혜택은 카드사 및 제휴사의 사정으로 사전 안내 없이 변경·중단될 수 있습니다.</li>
											</ul>
										</v-expansion-panel-text>
									</div>
								</v-expansion-panel>

								<v-expansion-panel class="acd_item">
									<div class="acd_title">
										<v-expansion-panel-title>필수 안내 사항</v-expansion-panel-title>
									</div>
									<div class="acd_panel">
										<v-expansion-panel-text>
											<ul class="text_list bull">
												<li>연회비 : 해외겸용(Visa) 2만원 / 국내전용 2만원</li>
												<li>
													연체이자율 : 회원별·이용상품별 정상이자율+3%p(최고 연 20.0%) <br>
													※ 연체 발생 시점에 정상이자율이 없는 경우 아래와 같이 적용 <br>
													① 일시불 거래 연체 시 : 거래 발생 시점의 최소 기간(2개월) 유이자할부 이자율 <br>
													② 무이자할부 거래 연체 시 : 거래 발생 시점의 동일한 할부 계약기간 유이자할부 이자율
												</li>
												<li>금융상품 이용 전 상품설명서, 홈페이지, 약관을 통해 이용 조건을 확인해 주시기 바랍니다.</li>
												<li>금융소비자는 해당 상품 또는 서비스에 대하여 설명을 받을 권리가 있습니다.</li>
												<li>카드 이용대금과 이에 수반되는 모든 수수료를 지정된 대금 결제일에 상환합니다.</li>
												<li>상환 능력에 비해 신용카드 사용액이 과도할 경우 귀하의 개인 신용평점이 하락할 수 있습니다.</li>
												<li>개인신용평점 하락 시 금융거래 관련된 불이익이 발생할 수 있습니다.</li>
												<li>일정 기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가 발생할 수 있습니다.</li>
												<li>여신금융협회 심의필 제 2021 - C1h - 09436호</li>
												<li>카드사 및 제휴사의 사정으로 사전 안내 없이 변경·중단될 수 있습니다. ( 2021.11.01 ~ 2022.10.31 )</li>
											</ul>
										</v-expansion-panel-text>
									</div>
								</v-expansion-panel>
							</v-expansion-panels>
							<!-- //유의사항 & 필수 안내 사항 toggle -->


            </div> <!-- //panel_cnt -->
          </template>
          <template v-slot:tab_panel_01_02>
            <h3 class="blind">우리카드</h3>
            <div class="panel_cnt">
              우리카드
            </div> <!-- //panel_cnt -->
          </template>
          <template v-slot:tab_panel_01_03>
            <h3 class="blind">신한카드</h3>
            <div class="panel_cnt">
              신한카드
            </div> <!-- //panel_cnt -->
          </template>
        </Tab>

				<!-- 위치 이동 ; 23/11/23 -->
				<div class="tit_wrap">
					<h3 class="tit03">함께하는 파트너사</h3>
				</div>
				<SwiperFlow />
				<!-- //함께하는 파트너사 swiper -->

      </div>

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import SwiperFlow from '@/components/SwiperFlow'

export default {
  name: 'ALFM-BE04-PG00',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '제휴카드 안내' },
      dataTableDiscount: [
        { 
          cost: '<span>30</span>만원 이상~<span>70</span>만원 미만', 
          card: '<strong><span>7,000</span>원~<span>10,000</span>원</strong>', 
          add: '<strong><span class="fc01">10,000</span>원</strong>', 
          total: '<strong><span>17,000</span>원~<span>20,000</span>원</strong>', 
        },
        { 
          cost: '<span>70</span>만원 이상~<span>120</span>만원 미만', 
          card: '<strong><span>10,000</span>원~<span>13,000</span>원</strong>', 
          add: '<strong><span class="fc01">9,000</span>원</strong>', 
          total: '<strong><span>19,000</span>원~<span>22,000</span>원</strong>', 
        },
        { 
          cost: '<span>120</span>만원 미만', 
          card: '<strong><span>13,000</span>원~<span>16,000</span>원</strong>', 
          add: '<strong><span class="fc01">6,000</span>원</strong>', 
          total: '<strong><span>19,000</span>원~<span>22,000</span>원</strong>', 
        },
      ],
      dataAnnualFee: [
        { type: '국내전용', fee: '10,000'},
        { type: '해외 겸용(VISA)', fee: '15,000'},
      ],
      csLabel: '삼성카드 대표전화',
      csTel: '<strong>1588-8700</strong>',
      toggle: [0, 1],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components : {
    SwiperFlow,
  }
}
</script>
