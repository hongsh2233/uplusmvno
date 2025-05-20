<template>
	<GuideTable :data="ListUsim"/>
</template>

<script setup>
  import GuideTable from './GuideTable.vue'

	const ListUsim = [
		{
			name: '유심 v0.0',
			children: [
				{
					"state": "end",
					"row": {
						"1deps": "유심구매",
						"2deps": "바로배송(MO)",
						"3deps": "",
						"4deps": "",
						"url": "/bu/ALFM-BU01-PG00",
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
						"4deps": "eSIM 가능 핸드폰 모델 확인 팝업",
						"url": "/bu/ALFM-BU01-PO00",
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
						"4deps": "바로배송 안내 팝업(추가)",
						"url": "/bu/ALFM-BU01-PO02",
						"state": "",
						"date": "08.22",
						"desc": "[08.25] 디자인 수급, 작업 완료"
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
						"2deps": "",
						"3deps": "STEP1_배송정보",
						"4deps": "",
						"url": "/bu/ALFM-BU01-PG01",
						"state": "",
						"date": "08.10",
						"desc": "[08/22] 통신사 선택 항목 삭제(주석처리)"
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "택배배송 안내 팝업 (바로배송 불가한 지역일 경우)",
						"url": "/bu/ALFM-BU01-PO01",
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
						"3deps": "STEP2_결제 및 약관동의",
						"4deps": "",
						"url": "/bu/ALFM-BU01-PG02",
						"state": "",
						"date": "08.10",
						"desc": ""
					}
				},
				{
					"state": "hid",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "약관 상세 공통 팝업",
						"url": "/cm/ALFM-CM06-PO00",
						"state": "",
						"date": "",
						"desc": "공통"
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "완료",
						"4deps": "",
						"url": "/bu/ALFM-BU01-PG03",
						"state": "",
						"date": "08.10",
						"desc": ""
					}
				},
				{
					"state": "hid",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "eSIM 안내",
						"4deps": "",
						"url": "/bu/ALFM-BU01-PG04",
						"state": "",
						"date": "",
						"desc": "미정"
					}
				},
				{
					"state": "hid",
					"row": {
						"1deps": "",
						"2deps": "바로배송(PC)",
						"3deps": "",
						"4deps": "",
						"url": "/bu/ALFP-BU01-PG00",
						"state": "",
						"date": "",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "편의점 픽업",
						"3deps": "STEP1_편의점 선택",
						"4deps": "",
						"url": "/bu/ALFM-BU02-PG00",
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
						"3deps": "STEP2_픽업정보",
						"4deps": "",
						"url": "/bu/ALFM-BU02-PG01",
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
						"4deps": "편의점 조회 팝업(주소/매장명T)",
						"url": "/bu/ALFM-BU02-PO00",
						"state": "",
						"date": "08.10",
						"desc": ""
					}
				},
				{
					"state": "hid",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "편의점 조회 팝업(지하철T)",
						"url": "/bu/ALFM-BU02-PO01",
						"state": "",
						"date": "",
						"desc": "ALFM-BU02-PO00"
					}
				},
				{
					"state": "hid",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "편의점 조회 팝업(내위치T)",
						"url": "/bu/ALFM-BU02-PO02",
						"state": "",
						"date": "",
						"desc": "ALFM-BU02-PO00"
					}
				},
				{
					"state": "hid",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "지도 보기 공통 팝업",
						"url": "/cm/ALFM-CM07-PO00",
						"state": "",
						"date": "",
						"desc": "공통"
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "STEP3_결제 및 약관동의",
						"4deps": "",
						"url": "/bu/ALFM-BU02-PG02",
						"state": "",
						"date": "08.10",
						"desc": ""
					}
				},
				{
					"state": "hid",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "약관 상세 공통 팝업",
						"url": "/cm/ALFM-CM06-PO00",
						"state": "",
						"date": "",
						"desc": "공통"
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "완료",
						"4deps": "",
						"url": "/bu/ALFM-BU02-PG03",
						"state": "",
						"date": "08.10",
						"desc": ""
					}
				}
			]
		}
	]
</script>