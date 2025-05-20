<template>
  <GuideTable :data="ListGuide"/>
</template>

<script setup>
  import GuideTable from './GuideTable.vue'

  const ListGuide = [
    {
      name: "요금 조회/납부",
      children: [
        {
          "state": "two",
          "row": {
            "1deps": "요금 조회/납부",
            "2deps": "요금 바로 납부",
            "3deps": "",
            "4deps": "",
            "5deps": "",
            "st": "2차",
            "url": "/sc/AL-MY-03-001",
            "urlName": "",
            "state": "",
            "date": "",
            "desc": ""
          }
        },
        {
          "state": "two",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "납부정보 입력 - 은행",
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
            "3deps": "납부정보 입력 - 신용카드",
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
            "4deps": "요금 결제 정보",
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
            "5deps": "납부완료",
            "st": "2차",
            "url": "/sc/",
            "urlName": "",
            "state": "",
            "date": "",
            "desc": "화면ID필요"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "청구요금 조회",
            "3deps": "이번 달 청구요금",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-03-002",
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
            "2deps": "",
            "3deps": "",
            "4deps": "요금 상세 내역",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-03-002-1",
            "urlName": "",
            "state": "",
            "date": "24.10.2 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "지난 청구내역",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-03-003",
            "urlName": "",
            "state": "",
            "date": "24.10.2 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "청구 요금 없는 경우",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-03-003-1",
            "urlName": "",
            "state": "",
            "date": "24.10.2 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "청구서 받는 방법 변경",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-03-004",
            "urlName": "",
            "state": "",
            "date": "24.10.2 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "완료",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-03-004-1",
            "urlName": "",
            "state": "",
            "date": "24.10.2 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "청구서 재발행",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-03-005",
            "urlName": "",
            "state": "",
            "date": "24.10.2 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "받는 방법 선택",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-03-005-1",
            "urlName": "",
            "state": "",
            "date": "24.10.2 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "재발행 완료",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-03-005-2",
            "urlName": "",
            "state": "",
            "date": "24.10.2 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "납부내역 조회/변경",
            "3deps": "납부내역 조회",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-04-001",
            "urlName": "",
            "state": "",
            "date": "24.10.11 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "납부 방법 변경",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-04-002",
            "urlName": "",
            "state": "",
            "date": "24.10.11 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "납부 방법 선택",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-04-002-1",
            "urlName": "",
            "state": "",
            "date": "24.10.11 배포",
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
            "5deps": "납부 정보 입력",
            "st": "1차",
            "url": "/sc/AL-MY-04-002-2",
            "urlName": "",
            "state": "",
            "date": "24.10.11 배포",
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
            "5deps": "변경 완료",
            "st": "1차",
            "url": "/sc/AL-MY-04-002-3",
            "urlName": "",
            "state": "",
            "date": "24.10.11 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "결제일 변경",
            "4deps": "",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-04-003",
            "urlName": "",
            "state": "",
            "date": "24.10.11 배포",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "변경완료",
            "5deps": "",
            "st": "1차",
            "url": "/sc/AL-MY-04-003-1",
            "urlName": "",
            "state": "",
            "date": "24.10.11 배포",
            "desc": ""
          }
        },
        {
          "state": "two",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "입금전용계좌 발급",
            "4deps": "",
            "5deps": "",
            "st": "2차",
            "url": "/sc/AL-MY-04-004",
            "urlName": "",
            "state": "",
            "date": "",
            "desc": ""
          }
        },
        {
          "state": "two",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "입금계좌안내",
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
            "4deps": "은행선택",
            "5deps": "발급완료",
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
