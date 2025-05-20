<template>
  <GuideTable :data="ListLogin"/>
</template>

<script setup>
  import GuideTable from './GuideTable.vue'

  const ListLogin = [
    {
      name: "로그인 : v0.0",
			children: [
				{
					"state": "end",
					"row": {
						"1deps": "로그인",
						"2deps": "",
						"3deps": "",
						"4deps": "",
						"url": "/lg/ALFM-LG01-PG00",
						"state": "",
						"date": "07.21",
						"desc": ""
					}
				},
				{
					"state": "ing",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "",
						"url": "/lg/ALFM-LG01-PG00-vuetify",
						"state": "",
						"date": "",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "",
						"url": "/lg/ALFM-LG01-PO00",
						"state": "",
						"date": "07.21",
						"desc": "[08/22] 소셜회원 안내 팝업 추가"
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "이메일 찾기 결과",
						"3deps": "",
						"4deps": "",
						"url": "/lg/ALFM-LG02-PG00",
						"state": "",
						"date": "07.21",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "비밀번호 재설정",
						"3deps": "새 비밀번호 입력",
						"4deps": "",
						"url": "/lg/ALFM-LG03-PG01",
						"state": "",
						"date": "07.21",
						"desc": "<p><b>[11/10]</b> 중복 section 삭제(23/11/10 주석처리)</p>"
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "팝업",
						"4deps": "",
						"url": "/lg/ALFM-LG03-PO00",
						"state": "",
						"date": "11.10",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "완료",
						"4deps": "",
						"url": "/lg/ALFM-LG03-PG02",
						"state": "",
						"date": "07.21",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "회원가입 메인",
						"3deps": "",
						"4deps": "",
						"url": "/lg/ALFM-LG04-PG00",
						"state": "",
						"date": "07.24",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "STEP2_정보입력",
						"4deps": "",
						"url": "/lg/ALFM-LG04-PG02",
						"state": "",
						"date": "07.24",
						"desc": "<p><b>[11/10]</b> 중복 section 삭제(23/11/10 주석처리)</p>"
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "중복확인 팝업",
						"url": "/lg/ALFM-LG04-PO00",
						"state": "",
						"date": "07.24",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "STEP3_약관동의",
						"4deps": "",
						"url": "/lg/ALFM-LG04-PG03",
						"state": "",
						"date": "07.24",
						"desc": ""
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "본인인증",
						"4deps": "",
						"url": "/lg/ALFM-LG04-PG05",
						"state": "",
						"date": "12.20",
						"desc": ""
					}
				},
				{
					"state": "hid",
					"row": {
						"1deps": "",
						"2deps": "",
						"3deps": "",
						"4deps": "광고성 정보 수신 알림 팝업",
						"url": "/cm/ALFM-CM13-PO00",
						"state": "",
						"date": "11.16",
						"desc": "공통으로 이전"
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
						"date": "07.24",
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
						"url": "/lg/ALFM-LG04-PG04",
						"state": "",
						"date": "07.24",
						"desc": ""
					}
				}
			]
    }
  ]
</script>
