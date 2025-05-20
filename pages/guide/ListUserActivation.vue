<template>
  <GuideTable :data="ListLogin"/>
</template>

<script setup>
  import GuideTable from './GuideTable.vue'

  const ListLogin = [
    {
      name: "외국인/미성년 개통건 : v0.0",
      children: [
        {
          "state": "end",
          "row": {
            "1deps": "외국인/미성년 개통건",
            "2deps": "회원가입",
            "3deps": "00회원유형선택",
            "4deps": "",
            "url": "/publish/lg/ALFM-LG00-PG00",
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
            "3deps": "01이용약관동의",
            "4deps": "",
            "url": "/publish/lg/ALFM-LG00-PG01",
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
            "3deps": "1.5본인인증수단선택",
            "4deps": "",
            "url": "/publish/lg/ALFM-LG00-PG02",
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
            "3deps": "1.7법정대리인본인인증",
            "4deps": "",
            "url": "/publish/lg/ALFM-LG00-PG03",
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
            "3deps": "03아이디만들기",
            "4deps": "",
            "url": "/publish/lg/ALFM-LG00-PG04",
            "state": "",
            "date": "",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "가입대상선택",
            "3deps": "",
            "4deps": "",
            "url": "/publish/lg/ALFM-LG01-PG00",
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
            "3deps": "미성년자",
            "4deps": "06_본인인증(미성년자-1)",
            "url": "/publish/lg/ALFM-LG01-PG01",
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
            "3deps": "",
            "4deps": "06-2_법정대리인정보입력+인증수단선택",
            "url": "/publish/lg/ALFM-LG01-PG02",
            "state": "",
            "date": "",
            "desc": "인증 방법은 개발에 있는 공통 컴포넌트를 쓰면 됩니다. [AuthMethod]"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "07_법정대리인신분증정보입력_주민등록증",
            "url": "https://dev.uplusmvno.com/plan/plan-list/subscriptionTobe?mvnopPpId=CP0000004181&amp;mvnopPtnId=PC0000000022&amp;mvnopSbgnStgeDivsCd=NEW&amp;continuedFlag=N",
            "urlName": '법정대리인신분증정보입력',
            "state": "",
            "date": "",
            "desc": "dev에 있는 똑같은 페이지 하나 추가해 만들어서 타이틀만 바꾸면 될듯싶습니다.(팝업포함)"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "07.5_부가서비스가입",
            "url": "/publish/lg/ALFM-LG01-PG04",
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
            "3deps": "",
            "4deps": "12가입신청정보확인",
            "url": "/publish/lg/ALFM-LG01-PG05",
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
            "3deps": "외국인",
            "4deps": "06-3가입대상선택_본인인증(외국인)",
            "url": "/publish/lg/ALFM-LG02-PG00",
            "state": "",
            "date": "",
            "desc": "인증 방법은 개발에 있는 공통 컴포넌트를 쓰면 됩니다. [AuthMethod]"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "07신분증정보입력(외국인)",
            "url": "/publish/lg/ALFM-LG02-PG01",
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
            "3deps": "외국인 미성년자",
            "4deps": "06-3가입대상선택_본인인증(외국인미성년자)",
            "url": "/publish/lg/ALFM-LG03-PG00",
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
            "3deps": "",
            "4deps": "06-2_법정대리인정보입력+인증수단선택(외국인미성년자)",
            "url": "/publish/lg/ALFM-LG03-PG01",
            "state": "",
            "date": "",
            "desc": "인증 방법은 개발에 있는 공통 컴포넌트를 쓰면 됩니다. [AuthMethod]"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "07신분증정보입력(외국인미성년자)",
            "url": "/publish/lg/ALFM-LG03-PG02",
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
            "3deps": "내가 신청한 요금제 상세",
            "4deps": "요금제선택_12가입신청정보확인",
            "url": "/publish/lg/ALFM-LG04-PG00",
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
            "3deps": "",
            "4deps": "요금제선택_12가입신청정보확인(외국인)",
            "url": "/publish/lg/ALFM-LG04-PG01",
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
            "3deps": "",
            "4deps": "신분증정보입력(외국인)팝업",
            "url": "/publish/lg/ALFM-LG04-PO00",
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
            "3deps": "알럿",
            "4deps": "",
            "url": "/publish/lg/ALFM-LG-ALERT",
            "state": "",
            "date": "",
            "desc": ""
          }
        }
      ]
    }
  ]
</script>
