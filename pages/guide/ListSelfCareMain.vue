<template>
  <GuideTable :data="ListSelfCareMain" :colgroup="colgroup"/>
</template>

<script setup>
  import GuideTable from './GuideTable.vue'

  const ListSelfCareMain = [
    {
      name: "서브메인 및 공통",
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
            "1deps": "서브메인",
            "2deps": "",
            "3deps": "",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-01-001",
            "date": "24.10.24 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "본인 확인을 위한 인증 방법",
            "3deps": "",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-00-004-1",
            "date": "24.10.24 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "알닷케어 안내",
            "2deps": "웹회원",
            "3deps": "",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-00-006-1",
            "date": "24.10.24 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "정회원(셀프케어 미제공 회선) 고객",
            "3deps": "",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-00-006-2",
            "date": "24.10.24 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "선불 고객",
            "3deps": "",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-00-006-3",
            "date": "24.10.24 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "알닷케어 이용 신청 완료",
            "3deps": "",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-00-006-4",
            "date": "24.10.24 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "GNB",
            "2deps": "",
            "3deps": "",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-NV-00-01",
            "date": "24.10.24 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "내 정보 수정",
            "2deps": "",
            "3deps": "",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/ALFM-MY08-PG01",
            "date": "24.10.24 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "이용약관 동의",
            "2deps": "",
            "3deps": "",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/ALFM-LG04-PG03",
            "date": "24.10.24 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "회원가입완료",
            "2deps": "",
            "3deps": "",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/ALFM-LG04-PG04",
            "date": "24.10.24 배포",
            "desc": ""
          }
        }
      ]
    }
  ]

const colgroup = ['','','','','','','','80px','','',]

</script>
