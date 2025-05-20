<template>
  <GuideTable :data="ListrRsOfLostStop"/>
</template>

<script setup>
  import GuideTable from './GuideTable.vue'

  const ListrRsOfLostStop = [
    {
      name: "분실/정지/해제 : v0.0",
			children: [
        {
          "state": "end",
          "row": {
            "1deps": "분실/정지/해제",
            "2deps": "휴대폰 분실 등록/해제",
            "3deps": "",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-06-001",
            "urlName": "",
            "state": "",
            "date": "24.10.29 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "분실 등록/해제",
            "3deps": "휴대폰 분실 등록/해제",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-06-002",
            "urlName": "",
            "state": "",
            "date": "24.10.29 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "분실 정보 입력",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-06-003",
            "urlName": "",
            "state": "",
            "date": "24.10.29 배포",
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
            "5deps": "신청 완료",
            "st": "1차",
            "url": "/sc/AL-MY-06-003-1",
            "urlName": "",
            "state": "",
            "date": "24.10.29 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "분실 해제",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-06-003-2",
            "urlName": "",
            "state": "",
            "date": "24.10.29 배포",
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
            "5deps": "해제 완료",
            "st": "1차",
            "url": "/sc/AL-MY-06-002-1",
            "urlName": "",
            "state": "",
            "date": "24.10.29 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "일시정지/해제",
            "3deps": "",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-06-004",
            "urlName": "",
            "state": "",
            "date": "24.10.29 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "일시정지 신청",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-06-005",
            "urlName": "",
            "state": "",
            "date": "24.10.29 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "신청 완료",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-06-005-1",
            "urlName": "",
            "state": "",
            "date": "24.10.29 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "일시정지 안내",
            "3deps": "일시정지 해제 신청",
            "4deps": "해제 완료",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-06-006-1",
            "urlName": "",
            "state": "",
            "date": "24.10.29 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "일시정지 예약 취소",
            "4deps": "예약 취소 완료",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-06-006-2",
            "urlName": "",
            "state": "",
            "date": "24.10.29 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "일시정지/해제 내역",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-06-004",
            "urlName": "",
            "state": "",
            "date": "24.10.29 배포",
            "desc": "'일시 정지/해제 > 일시정지/해제 내역 보기' 버튼 클릭 시 노출되는 full popup"
          }
        }
      ]
    }
  ]
</script>
