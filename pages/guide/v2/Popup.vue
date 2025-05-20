<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>

      <div class="page_info">popup</div>

      <div class="section">
        <h3 class="tit02">popup -</h3>

        <ul>
          <li v-for="(pop, idx) in popButtons" :key="idx" style="margin-top: 11px;">
            <button 
              ref="partnerName" 
              class="btn-rounded" 
              @click="handlePopup(pop.popState, true)">
              {{ pop.name  }}
            </button>
          </li>
        </ul>

      </div>

      <div class="section">
        <h3 class="tit02">alert - normal</h3>

        <ul>
          <li v-for="(alert, idx) in alertButtons" :key="idx" style="margin-top: 11px;">
            <button 
              ref="partnerName" 
              class="btn-rounded" 
              @click="handlePopup(alert.popState, true)">
              {{ alert.name  }}
            </button>
          </li>
        </ul>

      </div>

      <!-- popup ------------------->
      <Popup
        title="팝업 타이틀"
        :isOpen="popState.pop0"
        @update:isOpen="popState.pop0 = $event"
        confirmText="확인 버튼"
        :showCancelButton="false"
        cancelText="취소 버튼"
      >
        기본 팝업( 토스트 형태)
      </Popup>

      <Popup
        title="가입 회선"
        :isOpen="popState.pop1"
        @update:isOpen="popState.pop1 = $event"
      >
        <PopupListItem 
          v-model="selectState.select1"
          :ListItemData="dataSelectList" 
          :option="{multiple: false }" 
          @select="console.log(selectState.select1)"
        />
      </Popup>

      <Popup
        title="가입 회선"
        :isOpen="popState.pop2"
        @update:isOpen="popState.pop2 = $event"
      >
        <PopupListItem 
          v-model="selectState.select2"
          :ListItemData="dataSelectList" 
          :option="{multiple: true }" 
          @select="console.log(selectState.select2)"
        />
      </Popup>

      <Popup
        title="팝업 타이틀"
        popType="full"
        :isOpen="popState.pop3"
        @update:isOpen="popState.pop3 = $event"
        :showCancelButton="true"
      >
        풀 팝업 (모바일에서만)
      </Popup>

      <Popup
        title="팝업 타이틀"
        popType="full no-title"
        :isOpen="popState.pop4"
        @update:isOpen="popState.pop4 = $event"
        :showCancelButton="true"
      >
        타이틀 없는 풀 팝업
      </Popup>

      <Popup
        title="팝업 타이틀"
        popType="alert-gray"
        :isOpen="popState.pop5"
        @update:isOpen="popState.pop5 = $event"
        :showCancelButton="true"
      >
        <div class="policy-wrap">
          <h4 class="policy-tit">제1조 (목적)</h4>
          <div class="policy-cnts">
            list text
          </div>
        </div>
      </Popup>

      <Popup
        title="타이틀 텍스트"
        :isOpen="popState.pop6"
        :popType="'alert-v2'"
        :showCancelButton = true
        :cancelText = "'다음에'"
        :confirmText="'지금 시작'"
        @update:isOpen="popState.freedom = $event"
        @confirm="console.log('confirm')"
      >
        <div class="alert-subhead">
          <p class="tit">알닷의 소중한 <b class="txt-red">회원</b>이시네요</p>
          <span class="desc">
            alertV2와 동일한 형태<br/> (alertV2의 z-index 이슈로 인한 popup)
          </span>
        </div>
        <div class="cont-orange">
          <dl class="info-tbl">
              <dt>휴대폰 번호</dt>
              <dd>010-12**-34**</dd>
          </dl>
        </div>
      </Popup>

      <!--// popup ------------------->


      <!-- alertV2 ------------------->
      <!--// alertV2 ------------------->


    </div> <!-- // content -->
  </div> <!-- // container -->

</template>

<script setup>
  import Popup from "@/components/v2/common/Popup";
  import PopupListItem from "@/components/v2/common/PopupListItem";
  import AlertV2 from "@/components/v2/common/AlertV2";

  const emit = defineEmits(['setLayout']);
  const layout = reactive({ header: 'sub', footer: '', title: '', floatMenu: '', });
  

  /*팝업 상태 관리  */
  const popState = ref({
    pop0: false,
    pop1: false, // 번호 변경
    pop2: false,
    pop3: false,
    pop4: false,
    pop5: false,
    pop6: false,
  });

  const handlePopup = (popName, val) => {
    popState.value[popName] = val;
  };
  const clickConfirm = () => {
    console.log("확인");
  };

  /*팝업 클릭 목업 버튼*/
  const popButtons = ref([
    {name: '기본', popState: 'pop0'},
    {name: '기본 - select radio list', popState: 'pop1'},
    {name: '기본 - select checkbox list', popState: 'pop2'},
    {name: '풀팝업', popState: 'pop3'},
    {name: '타이틀 없는 풀팝업', popState: 'pop4'},
    {name: '약관 팝업', popState: 'pop5'},
    {name: '텍스트 가운데에 있는 팝업', popState: 'pop6'},
  ])

  /*얼럿 상태 관리  */
  const alertState = ref({
    alert0: false,
    alert1: false, // 번호 변경
    alert2: false,
    alert3: false,
    alert4: false,
    alert5: false,
    alert6: false,
  });

  /*팝업 클릭 목업 버튼*/
  const alertButtons = ref([
    {name: '기본', popState: 'alert0'},
  ])
  
  
  /*
  목업 데이터
  */

 /*셀렉트 상태 관리 */
 const selectState = ref({
   select1: '',
   select2: [],
 })

 // 가입회선 정보 목업
  const dataSelectList = ref([
    {value: 0, phone: "010-12**-56**", name: "에스원안심모바일" },
    {value: 1, phone: "010-12**-65**", name: "모나" },
    {value: 2, phone: "010-12**-92**", name: "FLASH모바일" },
  ]);


  onMounted(() => {
    emit('setLayout', layout);
  });
</script>
<style scoped>

</style>