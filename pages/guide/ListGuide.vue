<template>
  <GuideTable :data="ListGuide"/>
</template>

<script setup>
  import GuideTable from './GuideTable.vue'

  const ListGuide = [
    {
      name: "Guide : v0.0",
      children: [
        {
          "state": "com",
          "row": {
            "1deps": "list guide",
            "2deps": "컨펌 진행중",
            "3deps": "",
            "4deps": "",
            "url": "",
            "state": "",
            "date": "",
            "desc": "tr class=\"com\" : 컨펌 진행 및 수정"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "퍼블완료",
            "3deps": "",
            "4deps": "",
            "url": "",
            "state": "",
            "date": "",
            "desc": "tr class=\"end\""
          }
        },
        {
          "state": "mod",
          "row": {
            "1deps": "",
            "2deps": "수정",
            "3deps": "",
            "4deps": "",
            "url": "",
            "state": "",
            "date": "",
            "desc": "tr class=\"mod\" : 퍼블리싱 완료 후 수정"
          }
        },
        {
          "state": "hid",
          "row": {
            "1deps": "",
            "2deps": "제외",
            "3deps": "",
            "4deps": "",
            "url": "",
            "state": "",
            "date": "",
            "desc": "tr class=\"hid\""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "layout",
            "2deps": "",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/Layout",
            "state": "",
            "date": "",
            "desc": "<p><b>[12/20]</b> aside floating 'kakao 공유' 추가 </p>\n<p><b>[07/13]</b> aside menu 상단 버튼 고정</p>\n<p><b>[07/12]</b> Header Layout 정리</p>\n<p><b>[07/05]</b> loading (lottie player) 작업완료</p>\n<p><b>[07/04]</b> gnb, aside script, skip menu 작업완료</p>\n<p class=\"fc\"><b>[07/03]</b> aside float 추가</p>\n            layout, loading, skip menu, header, aside menu, container, footer, floating area <br/>\n            PC header"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/template",
            "state": "",
            "date": "",
            "desc": "sample file"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "text",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/Text",
            "state": "",
            "date": "",
            "desc": ""
          }
        },
        {
          "state": "mod",
          "row": {
            "1deps": "",
            "2deps": "Icon",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/Icon",
            "state": "",
            "date": "",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "component",
            "2deps": "popup",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/PopupList",
            "state": "",
            "date": "",
            "desc": "<p><b>[10/10]</b> toast message 추가</p>\n<p><b>[08/23]</b> Alert component 추가, popup 호출방식 변경</p>\n<p><b>[07/13]</b> tooltip 위치 오류 수정</p>\n<p><b>[07/06]</b> tooltip contained 케이스 추가</p>\n<p><b>[07/04]</b> tooltip vuetify 작업완료</p>\n<p><b>[06/28]</b> popup script 작업완료</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "popup - selfcare",
            "3deps": "",
            "4deps": "",
            "url": "/guide/v2/Popup",
            "state": "",
            "date": "",
            "desc": ""
          }
        },
        {
          "state": "hid",
          "row": {
            "1deps": "",
            "2deps": "Form",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/Form",
            "state": "",
            "date": "",
            "desc": "<p><b>[06/21]</b> 디자인 적용된 form &gt; form etc 페이지 분리</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "Form",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/FormVue",
            "state": "",
            "date": "",
            "desc": "<p><b>[08/16]</b> InputBox component</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "Form - selfcare",
            "3deps": "",
            "4deps": "",
            "url": "/guide/v2/Form",
            "state": "",
            "date": "",
            "desc": "<p></p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "popup",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/FormPopupSelect",
            "state": "",
            "date": "",
            "desc": "<p><b>[08/17]</b> PopupSelect component 추가</p>"
          }
        },
        {
          "state": "ing",
          "row": {
            "1deps": "",
            "2deps": "form",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/FormVuetify",
            "state": "",
            "date": "",
            "desc": "vuetify form"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "form etc",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/FormEtc",
            "state": "",
            "date": "",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "tab",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/Tab",
            "state": "",
            "date": "",
            "desc": "<p><b>[06/28]</b> tab script 작업완료</p>\n<p><b>[06/29]</b> tab scroll script 작업완료</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "tab - selfcare",
            "3deps": "",
            "4deps": "",
            "url": "/guide/v2/Tab",
            "state": "",
            "date": "",
            "desc": ""
          }
        },
        {
          "state": "hid",
          "row": {
            "1deps": "",
            "2deps": "filter & tag",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/Tag",
            "state": "",
            "date": "",
            "desc": "<p><b>[06/29]</b> tag script 작업완료</p>\n<p><b>[06/29]</b> tag variable(반응형)을 포함한 컴포넌트의 경우 mounted(){ tag.variable.resize() } 필요</p>\n<p><b>[06/29]</b> Tag list02 마크업 검토 필요</p>\n<p><b>[06/29]</b> range vuetify 마이그레이션</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "tag & filter",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/TagVue",
            "state": "",
            "date": "",
            "desc": "<p><b>[10/16]</b> 텍스트 수정 4곳 (\"10/16 문구 변경\" 으로 주석처리)</p>\n<p><b>[08/04]</b> component로 변경</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "accordion",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/Accordion",
            "state": "",
            "date": "",
            "desc": "<p><b>[07/24]</b> accordion ty04 케이스 추가 (약관동의)</p>\n<p><b>[07/06]</b> accordion ty03 케이스 추가</p>\n<p><b>[07/03]</b> accordion, toggle vuetify 작업완료</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "accordion - selfcare",
            "3deps": "",
            "4deps": "",
            "url": "/guide/v2/Accordion",
            "state": "",
            "date": "",
            "desc": "<p></p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "button & more",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/Button",
            "state": "",
            "date": "",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "button - selfcare",
            "3deps": "",
            "4deps": "",
            "url": "/guide/v2/Button",
            "state": "",
            "date": "",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "table",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/Table",
            "state": "",
            "date": "",
            "desc": "06.21 2단 table > dl 태그로 수정, info list 페이지 분리"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "info list",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/InfoList",
            "state": "",
            "date": "",
            "desc": ""
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "flag & badge",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/Flag",
            "state": "",
            "date": "",
            "desc": "<p><b>[07/04]</b> flag 이벤트 처리 완료</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "list",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/ItemList",
            "state": "",
            "date": "",
            "desc": "<p><b>[07/07]</b> rating(vuetify) 추가</p>\n            sort, item, list, pagination"
          }
        },
        {
          "state": "hid",
          "row": {
            "1deps": "",
            "2deps": "swiper",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/Swiper",
            "state": "",
            "date": "",
            "desc": "<p><b>[07/04]</b> swiper 작업완료</p>"
          }
        },
        {
          "state": "hid",
          "row": {
            "1deps": "",
            "2deps": "swiper_sample",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/swiper_sample",
            "state": "",
            "date": "",
            "desc": "<p><b>[07/04]</b> swiper 샘플</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "SwiperVue",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/SwiperVue",
            "state": "",
            "date": "",
            "desc": "<p><b>[09/11]</b> SwiperCard 내, date 및 id 위치 변경 </p>\n<p><b>[08/03]</b> swiper Vue 샘플</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "logo",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/Logo",
            "state": "",
            "date": "",
            "desc": "<p><b>[07/06]</b> 페이지 추가</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "animation",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/Animation",
            "state": "",
            "date": "",
            "desc": "<p><b>[07/05]</b> loading (lottie player)</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "sticky",
            "3deps": "",
            "4deps": "",
            "url": "/guide/component-guide/Sticky",
            "state": "",
            "date": "",
            "desc": "<p><b>[07/07]</b> 사용자 &amp; 블로그 리뷰 팝업</p>\n<p><b>[07/05]</b> sticky script 작업완료</p>"
          }
        },
        {
          "state": "end",
          "row": {
            "1deps": "",
            "2deps": "chart",
            "3deps": "",
            "4deps": "",
            "url": "/guide/v2/Chart",
            "state": "",
            "date": "",
            "desc": ""
          }
        }
      ]
    }
  ]
</script>
