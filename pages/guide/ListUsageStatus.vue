<template>
  <GuideTable :data="ListUsageStatus" :colgroup="colgroup"/>
</template>

<script setup>
  import GuideTable from './GuideTable.vue'

  const ListUsageStatus = [
    {
      name: "사용현황",
      headers: [
        { key: "1deps", text: "1 Depth" },
        { key: "2deps", text: "2 Depth" },
        { key: "3deps", text: "3 Depth" },
        { key: "4deps", text: "4 Depth" },
        { key: "5deps", text: "5 Depth" },
        { key: "st", text: "회차" },
        { key: "url", text: "URL" },
        { key: "state", text: "상태" },
        { key: "date", text: "Date" },
        { key: "desc", text: "비고" }
      ],
      children: [
        {
          "state": "end",
          "row": {
            "1deps": "사용 현황",
            "2deps": "실시간 사용량",
            "3deps": "",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-02-001",
            "urlName": "",
            "state": "",
            "date": "24.09.20 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "실시간 요금",
            "3deps": "",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-02-002",
            "urlName": "",
            "state": "",
            "date": "24.09.26 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "월별 사용량",
            "3deps": "",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-02-003",
            "urlName": "",
            "state": "",
            "date": "24.09.26 배포",
            "desc": ""
          }
        }
      ]
    }
  ]

  const colgroup = ['','','','','','','','80px','','',]
</script>
