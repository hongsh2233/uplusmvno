<template>
	<GuideTable :data="ListMain"/>
</template>

<script setup>
  import GuideTable from './GuideTable.vue'

	const ListMain = [
		{
			name: '메인 v0.0',
			children: [
				{
					"state": "end",
					"row": {
						"1deps": "메인",
						"2deps": "",
						"3deps": "",
						"4deps": "",
						"url": "/ma/ALFM-MA01-PG00",
						"state": "",
						"date": "01.17",
						"desc": "<p>SwiperNotice.vue, SwiperMainBnr.vue 수정</p>"
					}
				},
				{
					"state": "hid",
					"row": {
						"1deps": "",
						"2deps": "메인 팝업",
						"3deps": "",
						"4deps": "",
						"url": "/ma/ALFM-MA01-PO00",
						"state": "",
						"date": "",
						"desc": "ALFM-MA01-PG00"
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "요금제 랭킹",
						"3deps": "",
						"4deps": "",
						"url": "/ma/ALFM-MA01-PG01",
						"state": "",
						"date": "07.28",
						"desc": "[08.30] 상단 - 텍스트 영역 추가 작업(추가 요건)"
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "파트너사 소개",
						"3deps": "",
						"4deps": "",
						"url": "/ma/ALFM-MA01-PG02",
						"state": "",
						"date": "07.28",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "파트너사 상세",
						"4deps": "",
						"url": "/ma/ALFM-MA01-PG03",
						"state": "",
						"date": "07.28",
						"desc": ""
					}
				},
				{
					"state": "hid",
					"row": {
						"1deps": "GNB",
						"2deps": "GNB(Mobile)",
						"3deps": "",
						"4deps": "",
						"url": "/ma/ALFM-MA02-PG00",
						"state": "",
						"date": "",
						"desc": "./guide/layout.html"
					}
				},
				{
					"state": "hid",
					"row": {
						"1deps": "",
						"2deps": "GNB(PC)",
						"3deps": "",
						"4deps": "",
						"url": "/ma/ALFP-MA02-PG00",
						"state": "",
						"date": "",
						"desc": "./guide/layout.html"
					}
				}
			]
		}
	]
</script>