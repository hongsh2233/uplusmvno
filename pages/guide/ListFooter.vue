<template>
  <GuideTable :data="ListFooter"/>
</template>

<script setup>
  import GuideTable from './GuideTable.vue'

  const ListFooter = [
    {
      name: "푸터 : v0.0",
			children: [
				{
					"state": "end",
					"row": {
						"1deps": "footer",
						"2deps": "이용약관",
						"3deps": "서비스 이용약관(T)",
						"4deps": "",
						"url": "/ft/ALFM-FT01-PG00",
						"state": "",
						"date": "07.28",
						"desc": ""
					}
				},
				{
					"state": "hid",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "서비스 이용약관(T)",
						"4deps": "",
						"url": "/ft/ALFM-FT01-TA00",
						"state": "",
						"date": "",
						"desc": ""
					}
				},
				{
					"state": "hid",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "홈페이지 이용약관(T)",
						"4deps": "",
						"url": "/ft/ALFM-FT01-TA01",
						"state": "",
						"date": "",
						"desc": ""
					}
				},
				{
					"state": "hid",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "휴대폰 보험 보통약관(T)",
						"4deps": "",
						"url": "/ft/ALFM-FT01-TA02",
						"state": "",
						"date": "",
						"desc": ""
					}
				},
				{
					"state": "hid",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "구독 서비스 이용약관(T)",
						"4deps": "",
						"url": "/ft/ALFM-FT01-TA03",
						"state": "",
						"date": "",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "개인정보처리방침",
						"3deps": "",
						"4deps": "",
						"url": "/ft/ALFM-FT02-PG00",
						"state": "",
						"date": "07.28",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "개인정보이용내역",
						"3deps": "",
						"4deps": "",
						"url": "/ft/ALFM-FT03-PG00",
						"state": "",
						"date": "07.28",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "이메일무단수집거부",
						"3deps": "",
						"4deps": "",
						"url": "/ft/ALFM-FT04-PG00",
						"state": "",
						"date": "07.28",
						"desc": ""
					}
				}
			]
    }
  ]
</script>
