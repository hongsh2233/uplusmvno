<template>
  <GuideTable :data="ListCS"/>
</template>

<script setup>
  import GuideTable from './GuideTable.vue'

  const ListCS = [
    {
      name: "고객지원 : v0.0",
      children: [
        {
          "state": "end",
          "row": {
            "1deps": "고객지원",
            "2deps": "내 주변 매장 찾기(MO)",
            "3deps": "",
            "4deps": "",
            "url": "",
            "state": "",
            "date": "01.17",
            "desc": "<p>U+매장 신규 유향 추가 팝업 추가, Popup.vue수정</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "",
            "url": "",
            "state": "",
            "date": "08.16",
            "desc": "검색 결과가 없는 경우"
          }
        },
        {
          "state": "hid",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "매장 상세 팝업",
            "4deps": "",
            "url": "",
            "state": "",
            "date": "",
            "desc": "ALFM-CS02-PG00(페이지내 포함)"
          }
        },
        {
          "state": "hid",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "위치정보 활용 동의 팝업",
            "4deps": "",
            "url": "",
            "state": "",
            "date": "",
            "desc": "ALFM-CS02-PG00(페이지내 포함)"
          }
        },
        {
          "state": "hid",
          "row": {
            "1deps": "",
            "2deps": "내 주변 매장 찾기(PC)",
            "3deps": "",
            "4deps": "",
            "url": "",
            "state": "",
            "date": "",
            "desc": "ALFM-CS02-PG00(페이지내 포함)"
          }
        },
        {
          "state": "hid",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "매장 상세 팝업",
            "4deps": "",
            "url": "",
            "state": "",
            "date": "",
            "desc": "ALFM-CS02-PO00(페이지내 포함)"
          }
        },
        {
          "state": "hid",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "위치정보 활용 동의 팝업",
            "4deps": "",
            "url": "",
            "state": "",
            "date": "",
            "desc": "ALFM-CS02-PO01(페이지내 포함)"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "공지사항",
            "3deps": "목록",
            "4deps": "",
            "url": "",
            "state": "",
            "date": "08.16",
            "desc": "<p><b>[11/10]</b> 중복 section 삭제(23/11/10 주석처리)</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "상세",
            "url": "",
            "state": "",
            "date": "08.16",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "유심교체신청",
            "4deps": "",
            "url": "",
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
            "3deps": "유심변경개통신청",
            "4deps": "",
            "url": "",
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
            "3deps": "유심 교체 개통 공통 에러 케이스",
            "4deps": "",
            "url": "",
            "state": "",
            "date": "",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "자주하는 질문",
            "3deps": "목록",
            "4deps": "",
            "url": "",
            "state": "",
            "date": "08.16",
            "desc": "<p><b>[11/10]</b> 중복 section 삭제(23/11/10 주석처리)</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "1:1 문의하기",
            "3deps": "본인인증",
            "4deps": "",
            "url": "",
            "state": "",
            "date": "08.16",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "본인인증 팝업",
            "url": "",
            "state": "",
            "date": "08.16",
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
            "url": "",
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
            "3deps": "등록",
            "4deps": "",
            "url": "",
            "state": "",
            "date": "08.16",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "등록확인",
            "url": "",
            "state": "",
            "date": "08.16",
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
            "url": "",
            "state": "",
            "date": "08.16",
            "desc": ""
          }
        }
      ]
    }
  ]
</script>
