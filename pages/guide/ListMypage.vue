<template>
  <GuideTable :data="ListMypage"/>
</template>

<script setup>
  import GuideTable from './GuideTable.vue'

  const ListMypage = [
    {
      name: "마이페이지 : v0.0",
			children: [
				{
					"state": "end",
					"row": {
						"1deps": "마이페이지",
						"2deps": "",
						"3deps": "",
						"4deps": "",
						"url": "/my/ALFM-MY01-PG00",
						"state": "",
						"date": "08.10",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "요금제 가입 이어하기 안내 팝업",
						"url": "/my/ALFM-MY01-PO00",
						"state": "",
						"date": "11.21",
						"desc": "신규"
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "내가 신청한 요금제",
						"3deps": "목록",
						"4deps": "",
						"url": "/my/ALFM-MY02-LT00",
						"state": "",
						"date": "08.10",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "상세",
						"url": "/my/ALFM-MY02-PG00",
						"state": "",
						"date": "01.17",
						"desc": "<p>번호이동 인증 영역 추가</p>"
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "USIM 정보 입력 팝업",
						"url": "/my/ALFM-MY02-PO00",
						"state": "",
						"date": "08.10",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "USIM 정보 자동 등록 팝업",
						"url": "/my/ALFM-MY02-PO01",
						"state": "",
						"date": "11.17",
						"desc": "신규"
					}
				},
				{
					"state": "hid",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "eSIM 활성화 방법 팝업",
						"url": "/cm/ALFM-CM08-PO00",
						"state": "",
						"date": "",
						"desc": "공통"
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "USIM 구매 내역",
						"3deps": "목록",
						"4deps": "",
						"url": "/my/ALFM-MY03-LT00",
						"state": "",
						"date": "08.10",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "상세",
						"url": "/my/ALFM-MY03-PG00",
						"state": "",
						"date": "08.10",
						"desc": "<p><b>[11/20]</b> 배송현황 및 배송정보 추가 (23/11/20 주석 처리)</p>\n<p><b>[11/20]</b> section 원복 (23/11/20 주석 대체)</p>\n<p><b>[09/21]</b> section 삭제 (09/21 주석 처리)</p>"
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "내가 찜한 요금제",
						"3deps": "",
						"4deps": "",
						"url": "/my/ALFM-MY04-LT00",
						"state": "",
						"date": "08.10",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "최근 둘러본 요금제",
						"3deps": "",
						"4deps": "",
						"url": "/my/ALFM-MY05-LT00",
						"state": "",
						"date": "08.10",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "1:1 문의내역",
						"3deps": "목록",
						"4deps": "",
						"url": "/my/ALFM-MY06-LT00",
						"state": "",
						"date": "08.10",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "사용자 평점/후기 관리",
						"3deps": "목록",
						"4deps": "",
						"url": "/my/ALFM-MY07-LT00",
						"state": "",
						"date": "08.10",
						"desc": "<p><b>[11/20]</b> 리뷰 이벤트 배너 추가 (23/11/20 주석 처리)</p>"
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "상세",
						"url": "/my/ALFM-MY07-PG00",
						"state": "",
						"date": "08.10",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "사용자 평점/후기 등록",
						"3deps": "",
						"4deps": "",
						"url": "/my/ALFM-MY07-PG01",
						"state": "",
						"date": "08.10",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "추천 활동내역",
						"3deps": "목록",
						"4deps": "",
						"url": "/my/ALFM-MY09-LT00",
						"state": "",
						"date": "08.10",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "내 정보 수정",
						"3deps": "비밀번호 확인",
						"4deps": "",
						"url": "/my/ALFM-MY08-PG00",
						"state": "",
						"date": "08.10",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "상세",
						"url": "/my/ALFM-MY08-PG01",
						"state": "",
						"date": "08.10",
						"desc": "<p><b>[11/17]</b> \"알림톡\" 선택항목 추가</p>"
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "정보 수정 안내 팝업",
						"url": "/my/ALFM-MY08-PO00",
						"state": "",
						"date": "08.10",
						"desc": "<p>탈퇴 안내 팝업</p>\n<p><b>[11/17]</b> sns 계정 연결 안내 alert 추가</p>\n<p><b>[11/17]</b> 광고성 정보 수신 알림 alert 추가</p>\n<p><b>[11/17]</b> toast message 2 case 추가</p>"
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "회원탈퇴 완료 Alert",
						"url": "/my/ALFM-MY08-PO01",
						"state": "",
						"date": "08.10",
						"desc": "<p><b>[11/17]</b> 회원 탈퇴 안내 alert 추가</p>"
					}
				}
			]
    }
  ]
</script>
