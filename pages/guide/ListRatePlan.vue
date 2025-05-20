<template>
	<GuideTable :data="ListRatePlan"/>
</template>

<script setup>
  import GuideTable from './GuideTable.vue'

	const ListRatePlan = [
		{
			name: '요금제 v0.0',
      children: [
        {
          "state": "end",
          "row": {
            "1deps": "요금제",
            "2deps": "요금제 목록(MO)",
            "3deps": "",
            "4deps": "",
            "url": "/pr/ALFM-PR01-PG00",
            "state": "",
            "date": "07.26",
            "desc": "<p><b>[10/12]</b> 텍스트 수정 3개 (\"10/12 문구 변경\" 주석처리)</p>\n<p><b>[06/30]</b> 요금제 비교하기 점선 수정</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "특가전 요금제 리스트",
            "3deps": "",
            "4deps": "",
            "url": "/pr/ALFM-PR04-PG00",
            "state": "",
            "date": "04.04",
            "desc": ""
          }
        },
        {
          "state": "hid",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "요금제 비교 팝업",
            "4deps": "",
            "url": "/pr/ALFM-PR01-PO00",
            "state": "",
            "date": "",
            "desc": "ALFM-PR01-PG00"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "요금제 상세(MO)",
            "4deps": "",
            "url": "/pr/ALFM-PR01-PG01",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "요금제 가입/개통 안내 팝업",
            "url": "/cm/ALFM-CM10-PO00",
            "state": "",
            "date": "",
            "desc": "[11/16] 공통"
          }
        },
        {
          "state": "hid",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "사용자 리뷰 팝업",
            "url": "/pr/ALFM-PR01-PO01",
            "state": "",
            "date": "",
            "desc": "ALFM-PR01-PG01"
          }
        },
        {
          "state": "hid",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "요금제 공유하기 팝업",
            "url": "/cm/ALFM-CM11-PO00",
            "state": "",
            "date": "",
            "desc": "공통"
          }
        },
        {
          "state": "hid",
          "row": {
            "1deps": "",
            "2deps": "요금제 목록(PC)",
            "3deps": "",
            "4deps": "",
            "url": "/pr/ALFP-PR01-PG00",
            "state": "",
            "date": "",
            "desc": "ALFM-PR01-PG00"
          }
        },
        {
          "state": "hid",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "요금제 상세(PC)",
            "4deps": "",
            "url": "/pr/ALFP-PR01-PG01",
            "state": "",
            "date": "",
            "desc": "ALFM-PR01-PG01"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "내게 맞는 요금제 찾기",
            "3deps": "Intro",
            "4deps": "",
            "url": "/pr/ALFM-PR02-PO00",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP1_통신사 선택",
            "4deps": "",
            "url": "/pr/ALFM-PR02-PO01",
            "state": "",
            "date": "07.26",
            "desc": "<p><b>[11.22]</b>진행 상태바 추가(Popup.vue) (23/11/22 주석처리)</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP2_데이터 이용량",
            "4deps": "",
            "url": "/pr/ALFM-PR02-PO02",
            "state": "",
            "date": "07.26",
            "desc": "<p><b>[11.22]</b>선택 항목 문구 수정(Popup.vue)</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP3_통화 이용량",
            "4deps": "",
            "url": "/pr/ALFM-PR02-PO03",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP4_통신 요금",
            "4deps": "",
            "url": "/pr/ALFM-PR02-PO04",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP5_인터넷/TV 결합",
            "4deps": "",
            "url": "/pr/ALFM-PR02-PO05",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "요금제 로딩",
            "4deps": "",
            "url": "/pr/ALFM-PR02-PO06",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP6_추천 요금제 보기",
            "4deps": "",
            "url": "/pr/ALFM-PR02-PO07",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP6_추천 요금제 보기(추천 요금제가 없을 경우)",
            "4deps": "",
            "url": "/pr/ALFM-PR02-PO08",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "가입신청 프로세스",
            "3deps": "STEP0_가입유형 선택",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG24",
            "state": "",
            "date": "07.05",
            "desc": "<p>추가</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP1_가입유형 선택",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG00",
            "state": "",
            "date": "01.17",
            "desc": "<p>문구 변경, frontData.js 수정</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "셀프개통 불가 Alert",
            "url": "/pr/ALFM-PR03-PO00",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP2_개통방식 선택",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG01",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP3-1_USIM 여부 선택",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG02",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "STEP3-1-1_USIM 배송 선택",
            "url": "/pr/ALFM-PR03-PG02-1",
            "state": "",
            "date": "11.14",
            "desc": "신규 페이지"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "STEP3-1-1_USIM 정보 입력",
            "url": "/pr/ALFM-PR03-PG03",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "STEP3-1-2_USIM 선택",
            "url": "/pr/ALFM-PR03-PG23",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP3-2_eSIM 정보 입력",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG04",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "eSIM 미지원 단말기인 경우 Alert",
            "url": "/pr/ALFM-PR03-PO04",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "이미지 업로드 가이드 팝업",
            "url": "/pr/ALFM-PR03-PO01",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP3-2-1_eSIM 단말기 정보 입력",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG05",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "조회된 일련번호가 없을 경우 Alert",
            "url": "/pr/ALFM-PR03-PO05",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "휴대폰 정보 확인 방법 팝업",
            "url": "/pr/ALFM-PR03-PO02",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP4_가입대상 선택",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG06",
            "state": "",
            "date": "07.26",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP5-1_본인인증(일반)",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG07",
            "state": "",
            "date": "01.17",
            "desc": "본인인증 수단 추가 및 인증 방식 변경, AuthMethod.vue 수정"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP5-2_본인인증(미성년자)",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG08",
            "state": "",
            "date": "08.02",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP5-2_본인인증(미성년자-2)",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG20",
            "state": "",
            "date": "01.17",
            "desc": "본인인증 수단 추가 및 인증 방식 변경, AuthMethod.vue 수정"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP5-3_본인인증(외국인)",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG09",
            "state": "",
            "date": "01.17",
            "desc": "본인인증 수단 추가 및 인증 방식 변경, AuthMethod.vue 수정"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP5-4_본인인증(외국인 미성년자-1)",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG21",
            "state": "",
            "date": "08.02",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP5-4_본인인증(외국인 미성년자-2)",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG22",
            "state": "",
            "date": "01.17",
            "desc": "본인인증 수단 추가 및 인증 방식 변경, AuthMethod.vue 수정"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP6_약관동의",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG10",
            "state": "",
            "date": "08.02",
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
            "url": "/cm/ALFM-CM06-PO00",
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
            "3deps": "STEP7-1_고객정보 입력(휴대폰 번호)",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG11",
            "state": "",
            "date": "01.17",
            "desc": "번호이동 시 영역 추가, AuthMyInfoPage.vue, AuthSelect.vue 추가"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP7-2_고객정보 입력(주소)",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG12",
            "state": "",
            "date": "08.03",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP7-3_고객정보 입력(이메일)",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG13",
            "state": "",
            "date": "08.03",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP8-1_희망번호 선택",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG14",
            "state": "",
            "date": "08.03",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "희망번호 찾기 팝업",
            "url": "/pr/ALFM-PR03-PO03",
            "state": "",
            "date": "08.03",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP8-2_번호이동 추가인증",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG15",
            "state": "",
            "date": "08.03",
            "desc": "[09/21] 문구 변경 (09/21 주석처리)"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP9_요금납부정보",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG16",
            "state": "",
            "date": "08.03",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP10_청구서수령방법",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG17",
            "state": "",
            "date": "08.03",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP11_추천인 정보(선택)",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG18",
            "state": "",
            "date": "08.03",
            "desc": "<p><b>[11/21]</b>버튼명 수정(23/11/21 주석처리)</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "STEP12_가입신청 정보 확인",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG18-1",
            "state": "",
            "date": "11.21",
            "desc": "신규"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "가입신청 완료",
            "4deps": "",
            "url": "/pr/ALFM-PR03-PG19",
            "state": "",
            "date": "08.03",
            "desc": ""
          }
        },
        {
          "state": "hid",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "가입신청 프로세스 이탈 안내 팝업",
            "4deps": "",
            "url": "/cm/ALFM-CM09-PO00",
            "state": "",
            "date": "",
            "desc": "공통"
          }
        },
        {
          "state": "hid",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "가입신청 이어하기 안내 팝업",
            "4deps": "",
            "url": "/cm/ALFM-CM10-PO00",
            "state": "",
            "date": "",
            "desc": "공통"
          }
        }
      ]
		}
	]
</script>