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
						"1deps": "유심보호서비스 신청/해지",
						"2deps": "index",
						"3deps": "",
						"4deps": "",
						"url": "/sc/AL-MY-07-001",
						"state": "",
						"date": "25.05.15",
						"desc": "화면ID 필요"
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "유심보호서비스 신청 회선 선택",
						"3deps": "",
						"4deps": "",
						"url": "/sc/AL-MY-07-002",
						"state": "",
						"date": "25.05.15",
						"desc": "화면ID 필요"
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "유심보호서비스 신청 완료",
						"3deps": "",
						"4deps": "",
						"url": "/sc/AL-MY-07-002-1",
						"state": "",
						"date": "25.05.15",
						"desc": "화면ID 필요"
					}
				},
				{
					"state": "end",
					"row": {
						"1deps": "",
						"2deps": "유심보호서비스 해지 완료",
						"3deps": "",
						"4deps": "",
						"url": "/sc/AL-MY-07-002-2",
						"state": "",
						"date": "25.05.15",
						"desc": "화면ID 필요"
					}
				},
			]
		}
	]
</script>