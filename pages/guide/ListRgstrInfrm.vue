<template>
  <GuideTable :data="ListRgstrInfrm"/>
</template>

<script setup>
  import GuideTable from './GuideTable.vue'

  const ListRgstrInfrm = [
    {
      name: "가입 정보 관리 : v0.0",
			children: [
        {
          "state": "end",
          "row": {
            "1deps": "가입정보 관리",
            "2deps": "가입정보",
            "3deps": "",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-05-001",
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
            "2deps": "가입 회선 관리",
            "3deps": "",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-05-002",
            "urlName": "",
            "state": "",
            "date": "24.10.18 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "휴대폰 정보 등록",
            "3deps": "",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-05-005",
            "urlName": "",
            "state": "",
            "date": "24.10.18 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "고객정보 입력",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-05-006",
            "urlName": "",
            "state": "",
            "date": "24.10.18 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "등록 방법 선택",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-05-007",
            "urlName": "",
            "state": "",
            "date": "24.10.18 배포",
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
            "5deps": "자동 등록 하기",
            "st": "1차",
            "url": "/sc/AL-MY-05-008-1",
            "urlName": "",
            "state": "",
            "date": "24.10.18 배포",
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
            "5deps": "직접 등록 하기",
            "st": "1차",
            "url": "/sc/AL-MY-05-008-2",
            "urlName": "",
            "state": "",
            "date": "24.10.18 배포",
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
            "5deps": "휴대폰정보 입력",
            "st": "1차",
            "url": "/sc/AL-MY-05-009",
            "urlName": "",
            "state": "",
            "date": "24.10.18 배포",
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
            "5deps": "등록완료",
            "st": "1차",
            "url": "/sc/AL-MY-05-010",
            "urlName": "",
            "state": "",
            "date": "24.10.18 배포",
            "desc": ""
          }
        },
        {
          "state": "two",
          "row": {
            "1deps": "",
            "2deps": "가입정보조회/변경",
            "3deps": "유심 변경 신청",
            "4deps": "",
            "5deps": "",
            "st": "2차",
            "url": "/sc/",
            "urlName": "",
            "state": "",
            "date": "",
            "desc": "화면ID필요"
          }
        },
        {
          "state": "two",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "",
            "5deps": "완료",
            "st": "2차",
            "url": "/sc/",
            "urlName": "",
            "state": "",
            "date": "",
            "desc": "화면ID필요"
          }
        }
      ]
    }
  ]
</script>
