<template>
  <GuideTable :data="ListRsModify" :colgroup="colgroup"/>
</template>

<script setup>
  import GuideTable from './GuideTable.vue'

  const ListRsModify = [
    {
      name: "수정리스트 : v0.1 - 24.11.01 최초 작성",
      headers: [
        { key: "menu", text: "메뉴명" },
        { key: "item", text: "항목" },
        { key: "issue", text: "이슈사항" },
        { key: "url", text: "URL" },
        { key: "request", text: "요청일" },
        { key: "release", text: "배포일" },
        { key: "file", text: "적용 파일" },
        { key: "state", text: "상태" },
      ],
			children: [
        {
          "state": "end",
          "row": {
            "menu": "공통",
            "item": "",
            "issue": "LNB내 정보 메뉴[가입회선]",
            "url": "/sc/AL-MY-02-001",
            "urlName": "",
            "request": "2024.10.31",
            "release": "2024.11.06",
            "file": "",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "사용현황",
            "item": "",
            "issue": "그래프",
            "url": "/sc/AL-MY-02-001",
            "urlName": "",
            "request": "2024.10.31",
            "release": "2024.11.06",
            "file": "",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "가입 회선 관리",
            "item": "",
            "issue": "요금제 텍스트 말줄임 처리 수정텍스트 선택하여 약관 확인 가능하게 수정",
            "url": "/sc/AL-MY-05-002",
            "urlName": "",
            "request": "2024.11.11",
            "release": "2024.11.11",
            "file": "/sc/AL-MY-05-002.vue<br/>\n              selfcare.css",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "",
            "item": "기획서 v0.97 반영",
            "issue": "선택동의 영역 디자인 및 기능 수정 반영",
            "url": "/sc/AL-MY-00-006-1",
            "urlName": "",
            "request": "2024.11.18",
            "release": "2024.11.22",
            "file": "/sc/AL-MY-00-006-1.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "",
            "item": "기획서 v0.97 반영",
            "issue": "v0.97 꼭 알아두세요 영역 업데이트v0.97 그래프 초과사용 디자인 반영",
            "url": "/sc/AL-MY-02-001",
            "urlName": "",
            "request": "2024.11.18",
            "release": "2024.11.22",
            "file": "/sc/AL-MY-02-001.vue<br/>",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "",
            "item": "기획서 v0.97 반영",
            "issue": "v0.97 안내 팝업 추가",
            "url": "/sc/AL-MY-03-004",
            "urlName": "",
            "request": "2024.11.18",
            "release": "2024.11.22",
            "file": "/sc/AL-MY-03-004.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "",
            "item": "기획서 v0.97 반영",
            "issue": "v0.97 안내 팝업 추가",
            "url": "/sc/AL-MY-03-005-1",
            "urlName": "",
            "request": "2024.11.18",
            "release": "2024.11.22",
            "file": "/ratepInqry/ALMY030051.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "",
            "item": "기획서 v0.97 반영",
            "issue": "v0.97 꼭 알아두세요 영역 업데이트",
            "url": "/sc/AL-MY-04-002-2.vue",
            "urlName": "",
            "request": "2024.11.18",
            "release": "2024.11.22",
            "file": "/sc/AL-MY-04-002-2.vue<br/>",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "",
            "item": "기획서 v0.97 반영",
            "issue": "v0.97 안내 팝업 추가",
            "url": "/sc/AL-MY-04-002-2",
            "urlName": "",
            "request": "2024.11.18",
            "release": "2024.11.22",
            "file": "/paymentchange/ALMY040022.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "",
            "item": "기획서 v0.97 반영",
            "issue": "v0.97 안내 팝업 추가",
            "url": "/sc/AL-MY-04-003",
            "urlName": "",
            "request": "2024.11.18",
            "release": "2024.11.22",
            "file": "/sc/AL-MY-04-003.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "",
            "item": "기획서 v0.97 반영",
            "issue": "v0.97 약관 문구 수정v0.97 파트너사 기본링크 목업 추가",
            "url": "/sc/AL-MY-05-002",
            "urlName": "",
            "request": "2024.11.18",
            "release": "2024.11.22",
            "file": "/sc/AL-MY-05-002.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "",
            "item": "기획서 v0.97 반영",
            "issue": "v0.97 IMEI2 오류 문구 삭제",
            "url": "/sc/AL-MY-05-008-1",
            "urlName": "",
            "request": "2024.11.18",
            "release": "2024.11.22",
            "file": "/info-management/ALMY050081.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "",
            "item": "기획서 v0.97 반영",
            "issue": "v0.97 IMEI2 오류 문구 삭제모델명 선택 팝업 < 기타 선택 부분 수정",
            "url": "/sc/AL-MY-05-009",
            "urlName": "",
            "request": "2024.11.18",
            "release": "2024.11.22",
            "file": "/info-management/ALMY05009.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "",
            "item": "기획서 v0.97 반영",
            "issue": "v0.97 안내 팝업 추가v0.97 일시 정지/해제 문구 수정",
            "url": "/sc/AL-MY-06-004",
            "urlName": "",
            "request": "2024.11.18",
            "release": "2024.11.22",
            "file": "/sc/AL-MY-06-004.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "",
            "item": "기획서 v0.97 반영",
            "issue": "v0.97 선택 동의 문구 수정텍스트 선택하여 약관 확인 가능하게 수정",
            "url": "/sc/AL-MY-05-009",
            "urlName": "",
            "request": "2024.11.18",
            "release": "2024.11.22",
            "file": "/sc/ALFM-MY08-PG01.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "요금납부",
            "item": "기획서 v0.98 반영",
            "issue": "지난 1년 데이터 조회 기능 추가nodata 영역 추가",
            "url": "/sc/AL-MY-04-001",
            "urlName": "",
            "request": "2024.11.25",
            "release": "2024.11.26",
            "file": "MonthPicker.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "알닷케어 안내",
            "item": "웹회원",
            "issue": "문구 수정 및 혜택 정보 모두 받을게요 체크시 선택 해제",
            "url": "/sc/AL-MY-00-006-1",
            "urlName": "",
            "request": "2024.11.25",
            "release": "2024.11.26",
            "file": "/sc/AL-MY-00-006-1.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "공통팝업",
            "item": "기획서 v0.98 반영",
            "issue": "알닷 서비스 선택 약관 동의 팝업알닷 회원정보 확인 및 약관 동의 안내",
            "url": "/sc/AL-MY-00-002",
            "urlName": "",
            "request": "2024.11.25",
            "release": "2024.11.26",
            "file": "/sc/AL-MY-00-002.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "마이페이지",
            "item": "기획서 v0.98 반영",
            "issue": "번호 변경 팝업 추가선택동의, 알닷케어 가능 회선(타이틀)추가",
            "url": "/sc/ALFM-MY08-PG01",
            "urlName": "",
            "request": "2024.11.25",
            "release": "2024.11.26",
            "file": "/sc/ALFM-MY08-PG01.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "요금/납부",
            "item": "기획서 v0.98 반영",
            "issue": "nodata 영역 추가",
            "url": "/sc/AL-MY-03-003",
            "urlName": "",
            "request": "2024.11.25",
            "release": "2024.11.26",
            "file": "/sc/AL-MY-03-003.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "납부 조회/변경",
            "item": "기획서 v0.98 반영",
            "issue": "결제일 툴팁 추가",
            "url": "/sc/AL-MY-04-002",
            "urlName": "",
            "request": "2024.11.25",
            "release": "2024.11.26",
            "file": "/sc/AL-MY-04-002.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "사용현황",
            "item": "기획서 v0.98 반영",
            "issue": "링 그래프 추가",
            "url": "/sc/AL-MY-02-001",
            "urlName": "",
            "request": "2024.11.25",
            "release": "2024.11.26",
            "file": "/sc/AL-MY-02-001.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "공통",
            "item": "GNB",
            "issue": "마이페이지 메뉴 추가",
            "url": "/sc/AL-MY-01-001",
            "urlName": "",
            "request": "2024.11.25",
            "release": "2024.11.29",
            "file": "common/AllMenu.vue <br/>\n              layouts/SelfcareHeader.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "가입정보 관리",
            "item": "휴대폰 정보 등록",
            "issue": "등록한 휴대폰 정보 수정",
            "url": "/sc/AL-MY-05-005",
            "urlName": "",
            "request": "2024.11.25",
            "release": "2024.11.29",
            "file": "/sc/AL-MY-05-005.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "공통",
            "item": "",
            "issue": "모바일 헤더 뱃지 추가",
            "url": "/sc/AL-MY-01-001",
            "urlName": "",
            "request": "2024.11.25",
            "release": "2024.11.29",
            "file": "/sc/AL-MY-01-001",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "메인",
            "item": "",
            "issue": "container 에 main 클래스 확인",
            "url": "/sc/AL-MY-01-001",
            "urlName": "",
            "request": "2024.12.02",
            "release": "2024.12.03",
            "file": "layouts/SelfcareHeader.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "사용현황",
            "item": "",
            "issue": "실시간 사용량 > 기본제공량 없음 case 추가",
            "url": "/sc/AL-MY-02-001",
            "urlName": "",
            "request": "2024.12.02",
            "release": "2024.12.03",
            "file": "/sc/AL-MY-02-001.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "공통",
            "item": "GNB",
            "issue": "신청 중 요금제 뱃지 추가",
            "url": "/sc/AL-MY-01-001",
            "urlName": "",
            "request": "2024.12.05",
            "release": "2024.12.05",
            "file": "/sc/AL-MY-01-001.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "요금 조회/납부",
            "item": "청구서 받는 방법 변경",
            "issue": "완료 ui수정",
            "url": "/sc/AL-MY-03-004",
            "urlName": "",
            "request": "2024.12.05",
            "release": "2024.12.05",
            "file": "/sc/AL-MY-03-004.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "마이페이지",
            "item": "메인",
            "issue": "정회원 뱃지 추가",
            "url": "/sc/AL-MY-01-001",
            "urlName": "",
            "request": "2024.12.12",
            "release": "2024.12.13",
            "file": "/sc/AL-MY-01-001.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "분실/정지/해제",
            "item": "휴대폰 분실 해제",
            "issue": "문구수정_241212",
            "url": "/sc/AL-MY-06-003-2",
            "urlName": "",
            "request": "2024.12.12",
            "release": "2024.12.13",
            "file": "/sc/AL-MY-06-003-2.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "분실/정지/해제",
            "item": "일시정지 신청/해제",
            "issue": "일시정지 신청/해제 안내 문구수정_241212",
            "url": "/sc/AL-MY-06-004",
            "urlName": "",
            "request": "2024.12.12",
            "release": "2024.12.13",
            "file": "/sc/AL-MY-06-004.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "분실/정지/해제",
            "item": "일시정지 신청/해제",
            "issue": "일시정지 신청 문구수정_241212",
            "url": "/sc/AL-MY-06-005",
            "urlName": "",
            "request": "2024.12.12",
            "release": "2024.12.13",
            "file": "/sc/AL-MY-06-005.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "분실/정지/해제",
            "item": "휴대폰 분실등록",
            "issue": "유의사항 추가, 시작시간, 종료시간 UI 변경",
            "url": "/sc/AL-MY-06-003",
            "urlName": "",
            "request": "2024.12.12",
            "release": "2024.12.13",
            "file": "/sc/AL-MY-06-003.vue <br/>\n              ALMY06003.vue <br/>\n              PopupListItem.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "분실/정지/해제",
            "item": "휴대폰 분실 해제",
            "issue": "분실/도난 해제품목 텍스트 수정",
            "url": "/sc/AL-MY-06-003-2",
            "urlName": "",
            "request": "2024.12.12",
            "release": "2024.12.13",
            "file": "ALMY060032.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "요금 납부",
            "item": "요금 납부방법 변경정보 입력",
            "issue": "유의사항 추가_241212",
            "url": "/sc/AL-MY-04-002-2",
            "urlName": "",
            "request": "2024.12.12",
            "release": "2024.12.13",
            "file": "AL-MY-04-002-2.vue<br/>\n              ALMY040022.vue",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "menu": "요금 납부",
            "item": "실시간 요금 확인",
            "issue": "버튼 색상 변경",
            "url": "/sc/AL-MY-03-002-1",
            "urlName": "",
            "request": "2024.12.12",
            "release": "2024.12.13",
            "file": "AL-MY-03-002-1.vue <br/>AL-MY-03-002.vue",
            "desc": ""
          }
        }
      ]
    }
  ]

  const colgroup = ['10%', '10%', '', '8%', '5%', '5%', '25%', '10%']

  
</script>
