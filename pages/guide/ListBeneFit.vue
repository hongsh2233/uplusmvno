<template>
  <GuideTable :data="ListBeneFit"/>
</template>

<script setup>
  import GuideTable from './GuideTable.vue'

  const ListBeneFit = [
    {
      name: "혜택 : v0.0",
      children: [
        {
          "state": "end",
          "row": {
            "1deps": "혜택",
            "2deps": "알뜰폰닷컴 활용하기(MO)",
            "3deps": "",
            "4deps": "",
            "url": "/be/ALFM-BE01-PG00",
            "state": "",
            "date": "08.11",
            "desc": "<p><b>[09/11]</b> SwiperCard.vue 파일 내, date 및 id 위치 변경(말줄임 처리 완료)</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "알뜰폰닷컴 유튜브 컨텐츠",
            "4deps": "",
            "url": "/be/ALFM-BE01-LT00",
            "state": "",
            "date": "08.11",
            "desc": "<p><b>[11/10]</b> 중복 section 삭제(23/11/10 주석처리)</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "알뜰폰닷컴 유튜브 컨텐츠 상세",
            "url": "/be/ALFM-BE01-PG01",
            "state": "",
            "date": "08.11",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "알뜰폰닷컴 네이버 블로그",
            "4deps": "",
            "url": "/be/ALFM-BE01-LT01",
            "state": "",
            "date": "08.11",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "알뜰폰닷컴 인스타그램",
            "4deps": "",
            "url": "/be/ALFM-BE01-LT02",
            "state": "",
            "date": "08.11",
            "desc": ""
          }
        },
        {
          "state": "hid",
          "row": {
            "1deps": "",
            "2deps": "알뜰폰닷컴 활용하기(PC)",
            "3deps": "",
            "4deps": "",
            "url": "/be/ALFP-BE01-PG00",
            "state": "",
            "date": "",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "이벤트(T)",
            "3deps": "",
            "4deps": "",
            "url": "/be/ALFM-BE02-LT00",
            "state": "",
            "date": "08.11",
            "desc": "[09/25] 이벤트 카테고리(뱃지)는 다중 선택 가능(기능 변경 건으로 수정 예정)"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "상세",
            "4deps": "",
            "url": "/be/ALFM-BE02-PG00",
            "state": "",
            "date": "08.11",
            "desc": "[09/25] 이벤트 카테고리(뱃지)는 다중 선택 가능(기능 변경 건으로 수정 예정)"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "상세 - 종료",
            "4deps": "",
            "url": "/be/ALFM-BE02-PG01",
            "state": "",
            "date": "08.31",
            "desc": "페이지 추가"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "알럿",
            "4deps": "",
            "url": "/be/BE02PG00",
            "state": "",
            "date": "08.31",
            "desc": "<p><b>[08/31]</b> 댓글 삭제 관련 알럿 추가</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "응모형 이벤트 팝업",
            "4deps": "",
            "url": "/be/BE02PO00",
            "state": "",
            "date": "01.17",
            "desc": "<p>응모형 이벤트 팝업 추가, BE02PO00.vue 추가, Popup.vue 수정</p>"
          }
        },
        {
          "state": "com",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "신규 버튼 유형 생성 팝업",
            "4deps": "",
            "url": "/publish/be/BE02PO01",
            "state": "",
            "date": "03.14",
            "desc": "<p>2025년 추가건</p>"
          }
        },
        {
          "state": "hid",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "이벤트 공유하기 팝업",
            "url": "/cm/ALFM-CM11-PO00",
            "state": "",
            "date": "",
            "desc": "공통"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "당첨자 발표(T)",
            "3deps": "",
            "4deps": "",
            "url": "/be/ALFM-BE03-LT00",
            "state": "",
            "date": "08.11",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "상세",
            "4deps": "",
            "url": "/be/ALFM-BE03-PG00",
            "state": "",
            "date": "08.11",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "제휴카드 안내",
            "3deps": "",
            "4deps": "",
            "url": "/be/ALFM-BE04-PG00",
            "state": "",
            "date": "08.11",
            "desc": "[09.11] 전월 이용대금별 혜택 그래프 markup 변경"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "가족/친구 추천하기",
            "3deps": "",
            "4deps": "",
            "url": "/be/ALFM-BE05-PG00",
            "state": "",
            "date": "08.21",
            "desc": ""
          }
        }
      ]
    }
  ]
</script>
