<template>
  <GuideTable :data="ListModify" :colgroup="colgroup"/>
</template>

<script setup>
  import GuideTable from './GuideTable.vue'

  const ListModify = [{
    name: "수정리스트: v0.0 - 1월 18일 최초 작성",
    headers: [
      { key: "menu", text: "메뉴명" },
      { key: "item", text: "항목" },
      { key: "issue", text: "이슈사항" },
      { key: "url", text: "URL" },
      { key: "request", text: "요청일" },
      { key: "release", text: "처리일" },
      { key: "file", text: "적용 파일" },
      { key: "desc-state", text: "비고" }
    ],
    children: [
      {
        "state": "end",
        "row": {
          "menu": "메인",
          "item": "메인",
          "issue": "<ul>\n<li>notice 팝업 PC에서 next,prev버튼 추가</li>\n<li>배너에서 swiper pc에서 pagination수정</li>\n</ul>",
          "url": "/ma/ALFM-MA01-PG00",
          "urlName": "",
          "request": "2024.01.08",
          "release": "2024.01.08",
          "file": "<ul>\n<li>SwiperNotice</li>\n<li>SwiperMainBnr</li>\n</ul>",
          "desc-state": " 퍼블, 개발 적용 완료"
        }
      },
      {
        "state": "end",
        "row": {
          "menu": "원칩 지금배송",
          "item": "지금배송 가능시간 변경",
          "issue": "<ul>\n<li>1) 주문가능 시간 : 09:00~22:00 &gt; 11:00~22:00</li>\n<li>2) 팝업 내 가능 시간 변경 : 11:00~22:00</li>\n</ul>",
          "url": "/bu/ALFM-BU01-PG00",
          "urlName": "",
          "request": "2024.01.18",
          "release": "2024.01.18",
          "file": "<ul>\n<li>ALFM-BU01-PG00</li>\n<li>frontData.js - BU01PO02 시간변경</li>\n</ul>",
          "desc-state": " 퍼블, 개발 적용 완료"
        }
      },
      {
        "state": "end",
        "row": {
          "menu": "마이페이지, 가입신청",
          "item": "번호이동 인증 영역 변경 불가하게 수정",
          "issue": "<ol>\n<li>1) 안내 문구 변경 : 번호이동 인증을 진행해 주세요.</li>\n<li>2) 통신사 선택 영역 제외 </li>\n<li>3) 전화 번호 입력영역 전화번호 입력된 상태에서 비활성화 </li>\n<li>4) 사전 인증하기 버튼 활성화로 노출, 사전인증 완료 후 버튼 비활성화</li>\n</ol>",
          "url": "/my/ALFM-MY02-PG00",
          "urlName": "",
          "request": "2024.01.19",
          "release": "2024.01.19",
          "file": "<ul>\n<li>ALFM-MY02-PG00</li>\n<li>ALFM-PR03-PG11</li>\n<li>AuthSelect</li>\n</ul>",
          "desc-state": " 퍼블, 개발 적용 완료"
        }
      },
      {
        "state": "end",
        "row": {
          "menu": "원칩 지금배송",
          "item": "지금배송 가능시간 변경",
          "issue": "<ul>\n<li>1) 주문가능 시간 : 11:00~22:00 &gt; 10:00~22:00</li>\n<li>2) 팝업 내 가능 시간 변경 : 10:00~22:00</li>\n</ul>",
          "url": "/bu/ALFM-BU01-PG00",
          "urlName": "",
          "request": "2024.01.25",
          "release": "2024.01.25",
          "file": "<ul>\n<li>purchse/delivery/index.vue</li>\n<li>ALFM-BU01-PG00</li>\n<li>frontData.js - BU01PO02 시간변경</li>\n</ul>",
          "desc-state": " 퍼블, 개발 적용 완료"
        }
      },
      {
        "state": "end",
        "row": {
          "menu": "메인",
          "item": "요금제랭킹",
          "issue": "<ul>\n<li>데이터 통화 무제한</li>\n</ul>",
          "url": "/ma/ALFM-MA01-PG01",
          "urlName": "",
          "request": "2024.01.30",
          "release": "2024.01.30",
          "file": "<ul>\n<li>ALFM-MA01-PG01</li>\n<li>24.01.30 수정 주석 처리</li>\n</ul>",
          "desc-state": " 퍼블, 개발 적용 완료"
        }
      },
      {
        "state": "end",
        "row": {
          "menu": "요금제",
          "item": "요금제 목록",
          "issue": "<ul>\n<li>요금제 찾기 배너 html로 코딩 변경</li>\n</ul>",
          "url": "/pr/ALFM-PR01-PG00",
          "urlName": "",
          "request": "2024.01.30",
          "release": "2024.01.30",
          "file": "<ul>\n<li>ALFM-PR01-PG00</li>\n<li>24.01.30 수정 주석 처리</li>\n</ul>",
          "desc-state": " 퍼블, 개발 적용 완료"
        }
      },
      {
        "state": "end",
        "row": {
          "menu": "요금제",
          "item": "요금제 목록",
          "issue": "<ul>\n<li>팝업 내 [00개 결과 보기] 버튼 영역 로딩 필요 </li>\n</ul>",
          "url": "/pr/ALFM-PR01-PG00",
          "urlName": "",
          "request": "2024.01.30",
          "release": "2024.01.30",
          "file": "<ul>\n<li>Popup</li>\n</ul>",
          "desc-state": " 퍼블, 개발 적용 완료"
        }
      },
      {
        "state": "end",
        "row": {
          "menu": "마이페이지",
          "item": "메인",
          "issue": "<ul>\n<li>지금배송 배너 변경</li>\n</ul>",
          "url": "/my/ALFM-MY01-PG00",
          "urlName": "",
          "request": "2024.01.30",
          "release": "2024.01.31",
          "file": "<ul>\n<li>ALFM-MY01-PG00</li>\n<li>24.01.31 수정 주석 처리</li>\n</ul>",
          "desc-state": " 퍼블, 개발 적용 완료"
        }
      },
      {
        "state": "end",
        "row": {
          "menu": "마이페이지",
          "item": "후기 등록 혜택 배너 관리",
          "issue": "<ul>\n<li>'알뜰폰닷컴 요금제 경험을 알려주세요. 이미지 배너로 변경</li>\n</ul>",
          "url": "/my/ALFM-MY07-LT00",
          "urlName": "",
          "request": "2024.01.30",
          "release": "2024.01.31",
          "file": "<ul>\n<li>ALFM-MY07-LT00</li>\n<li>24.01.31 수정 주석 처리</li>\n</ul>",
          "desc-state": " 퍼블, 개발 적용 완료"
        }
      },
      {
        "state": "end",
        "row": {
          "menu": "메인",
          "item": "메인",
          "issue": "<ul>\n<li>요금제 카드(공통), 파트너사소개 이미지 업데이트</li>\n</ul>",
          "url": "/ma/ALFM-MA01-PG00",
          "urlName": "",
          "request": "2024.01.30",
          "release": "2024.02.01",
          "file": "<ul>\n<li>ALFM-MA01-PG00 logo_s_****.png 이미지를 logo_****.png로 변경</li>\n<li>Card</li>\n<li>frontData</li>\n</ul>",
          "desc-state": " 퍼블, 개발 적용 완료"
        }
      },
      {
        "state": "end",
        "row": {
          "menu": "고객지원",
          "item": "내 주변 매장 찾기",
          "issue": "<ul>\n<li>MO버전 br 수정 처리</li>\n</ul>",
          "url": "/cs/ALFM-CS02-PG01",
          "urlName": "",
          "request": "2024.02.02",
          "release": "2024.02.02",
          "file": "<ul>\n<li>ALFM-CS02-PG01</li>\n</ul>",
          "desc-state": " 퍼블, 개발 적용 완료"
        }
      },
      {
        "state": "mod",
        "row": {
          "menu": "공통",
          "item": "전체 페이지",
          "issue": "<ul>\n<li>브랜드명 변경</li>\n</ul>",
          "url": "/ma/ALFM-MA01-PG00",
          "urlName": "",
          "request": "2024.02.01",
          "release": "2024.02.02",
          "file": "<ol class=\"order-list\">\n<li>* 전체 페이지 → 알파 &gt; 알뜰폰닷컴</li>\n<li>* GNB → 혜택 내 메뉴명 변경 알뜰폰닷컴 활용하기 &gt; 알닷 활용하기</li>\n<li>* 메인<nuxtlink :to=\"/ma/ALFM-MA01-PG00\" target=\"_blank\">[ALFM-MA01-PG00]</nuxtlink> → 로고의 경우 U+에서 전달하는 로고 반영 - 현재는 텍스트 가안으로 알뜰폰닷컴 반영 필요</li>\n<li>* 메인<nuxtlink :to=\"/ma/ALFM-MA01-PG00\" target=\"_blank\">[ALFM-MA01-PG00]</nuxtlink> → [플래그 변경] 알뜰폰닷컴ONLY &gt; 알닷ONLY 로 변경</li>\n<li>* 메인<nuxtlink :to=\"/ma/ALFM-MA01-PG00\" target=\"_blank\">[ALFM-MA01-PG00]</nuxtlink> → 3월 알파 요금제 랭킹 보기 &gt; 3월 요금제 랭킹 보기</li>\n<li>* 요금제 목록<nuxtlink :to=\"/pr/ALFM-PR01-PG00\" target=\"_blank\">[ALFM-PR01-PG00]</nuxtlink> → [체크박스 영역 텍스트 변경] 알뜰폰닷컴ONLY &gt; 알닷ONLY 로 변경, [플래그 변경] 알뜰폰닷컴ONLY &gt; 알닷ONLY 로 변경</li>\n<li>* 요금제 상세<nuxtlink :to=\"/pr/ALFM-PR01-PG01\" target=\"_blank\">[ALFM-PR01-PG01]</nuxtlink> → [플래그 변경] 알뜰폰닷컴ONLY &gt; 알닷ONLY 로 변경</li>\n<li>* 파트너사 상세<nuxtlink :to=\"/ma/ALFM-MA01-PG03\" target=\"_blank\">[ALFM-MA01-PG03]</nuxtlink> → [플래그 변경] 알뜰폰닷컴ONLY &gt; 알닷ONLY 로 변경</li>\n</ol>",
          "desc-state": "퍼블 적용 완료, 개발 미적용"
        }
      },
      {
        "state": "end",
        "row": {
          "menu": "GNB",
          "item": "혜택",
          "issue": "<ul>\n<li>가족/친구 추천하기 메뉴 추가</li>\n</ul>",
          "url": "/ma/ALFM-MA01-PG00",
          "urlName": "",
          "request": "2024.02.05",
          "release": "2024.02.05",
          "file": "<ul>\n<li>MainHeader</li>\n</ul>",
          "desc-state": " 퍼블, 개발 적용 완료"
        }
      },
      {
        "state": "end",
        "row": {
          "menu": "공통",
          "item": "GNB",
          "issue": "<ul>\n<li>모바일에서 routing시 GNB 레이어 닫기</li>\n</ul>",
          "url": "/ma/ALFM-MA01-PG00",
          "urlName": "",
          "request": "2024.02.13",
          "release": "2024.02.13",
          "file": "<ul>\n<li>MainHeader</li>\n</ul>",
          "desc-state": " 퍼블, 개발 적용 완료"
        }
      },
      {
        "state": "end",
        "row": {
          "menu": "요금제",
          "item": "요금제 찾기",
          "issue": "<ul>\n<li>왼쪽 메뉴 fixed처리 - 개발 소스(typescript, composition api) 반영</li>\n</ul>",
          "url": "/pr/ALFM-PR01-PG00",
          "urlName": "",
          "request": "2024.02.13",
          "release": "2024.02.13",
          "file": "<ul>\n<li>ALFM-PR01-PG00</li>\n</ul>",
          "desc-state": " 퍼블, 개발 적용 완료"
        }
      },
      {
        "state": "end",
        "row": {
          "menu": "혜택",
          "item": "이벤트",
          "issue": "<ul>\n<li>기본 박스 에서 간격 없는 클래스 추가 및 공통 이미지 최대 넓이 제한</li>\n</ul>",
          "url": "/be/ALFM-BE05-PG00",
          "urlName": "",
          "request": "2024.02.14",
          "release": "2024.02.14",
          "file": "<ul>\n<li>ALFM-BE05-PG00</li>\n</ul>",
          "desc-state": " 퍼블, 개발 적용 완료"
        }
      },
      {
        "state": "end",
        "row": {
          "menu": "로그인",
          "item": "메인",
          "issue": "<ul>\n<li>validation 체크시 에러</li>\n</ul>",
          "url": "/lg/ALFM-LG01-PG00",
          "urlName": "",
          "request": "2024.02.14",
          "release": "2024.02.14",
          "file": "<ul>\n<li>ALFM-LG01-PG00</li>\n</ul>",
          "desc-state": " 퍼블, 개발 적용 완료"
        }
      },
      {
        "state": "end",
        "row": {
          "menu": "공통",
          "item": "전체 layout",
          "issue": "<ul>\n<li>full페이지 시 composition 오류</li>\n<li>share버튼 ui</li>\n</ul>",
          "url": "/ma/ALFM-MA01-PG00",
          "urlName": "",
          "request": "2024.02.15",
          "release": "2024.02.15",
          "file": "<ul>\n<li>MainLayout</li>\n</ul>",
          "desc-state": " 퍼블, 개발 적용 완료"
        }
      }
    ]
  }]

  const colgroup = ['10%','10%','','8%','5%','5%','25%','10%']
</script>

<style scoped>
  .guide_cont table {
    table-layout: fixed;
  }
  .guide_cont table td {
    word-break: keep-all;
  }
  .order-list li {
    width: 100%;
    overflow: hidden;
    text-indent: -8px;
    padding-left: 8px;
  }
</style>