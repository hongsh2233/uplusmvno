<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-00-000-4'" />
        <!-- // LNB -->

        <!-- contents -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>
          <!-- 내 정보 메뉴 -->
          <!-- <MyInfoMenu /> -->
          <!-- // 내 정보 메뉴 -->
          <div class="content-item">
            <div class="content-inner">
              <div class="cont-head title-main">
                <h3 class="cont-title-main">본인인증 화면 목업</h3>
              </div>

              <div class="btn-area col">
                <button class="btn-rounded btn-line" @click="handlePopup('authSelect', true)">본인인증 - 인증방법 선택</button>
                <button class="btn-rounded btn-line" @click="handlePopup('authInfo1', true)">본인인증 - 인증정보 입력</button>
                <button class="btn-rounded btn-line" @click="handlePopup('authInfo2', true)">본인인증 - 인증완료 확인</button>
                <button class="btn-rounded btn-line" @click="handlePopup('authInfo3', true)">본인인증 - 신용카드 인증</button>
              </div>

            </div>
          </div>

        </div>
        <!-- popup - 인증방법 선택 -->
        <Popup
          :title="!front.isMobile() ? '본인인증 수단 선택' : ''"
          :isOpen="popState.authSelect"
          :popType="'full no-title'"
          :isPopFooter="false"
          @update:isOpen="popState.authSelect = $event"
          @confirm="clickConfirm"
        >
          <ALMY00004/>
        </Popup>
        <!--// popup - 인증방법 선택 -->
        <!-- popup - 인증정보 입력 -->
        <Popup
          :title="!front.isMobile() ? `본인인증 정보 입력` : ''"
          :isOpen="popState.authInfo1"
          :popType="'full no-title'"
          :confirmText="'인증 요청하기'"
          :confirmDisabled="confirmActivate"
          @update:isOpen="popState.authInfo1 = $event"
          @confirm="clickConfirm"
        >
          <ALMY000041 :confirmAuth="false"/>
        </Popup>
        <!--// popup - 인증정보 입력 -->
        <!-- popup - 인증완료 확인 -->
        <Popup
          :title="!front.isMobile() ? `본인인증 정보 입력` : ''"
          :isOpen="popState.authInfo2"
          :popType="'full no-title'"
          :confirmText="'인증완료 확인하기'"
          :confirmDisabled="confirmActivate"
          @update:isOpen="popState.authInfo2 = $event"
          @confirm="clickConfirm"
        >
          <ALMY000041 :confirmAuth="true"/>
        </Popup>
        <!--// popup - 인증완료 확인 -->

        <!-- 24.11.01 디자인 추가 -->
        <!-- popup - 신용카드 인증 -->
        <Popup
          :title="!front.isMobile() ? `본인인증 정보 입력` : ''"
          :isOpen="popState.authInfo3"
          :popType="'full no-title'"
          :confirmText="'다음으로'"
          :confirmDisabled="confirmActivate"
          @update:isOpen="popState.authInfo3 = $event"
          @confirm="clickConfirm"
        >
          <ALMY000041 :confirmAuth="true"/>
        </Popup>
        <!--// popup - 신용카드 인증 -->


        <!-- 24.11.01 디자인 추가 (alert) -->
        <!-- alert: 인증 진행 중 -->
        <AlertV2
          v-model="alertState.alert1"
          :textData="{
            title: '인증이 진행 중이에요',
            description: `
              인증 요청을 받은 앱에서<br/>
              인증 진행 후 다시 <br/>
              인증 완료 확인하기를 눌러주세요.
            `,
          }"
          @close="handleClose"
        />
        <!--// alert: 인증 진행 중 -->
        <!-- alert: 이름과 주민번호가 일치하지 않을 때 -->
        <AlertV2
          v-model="alertState.alert2"
          :textData="{
            title: '이름과 주민등록번호가<br/> 일치하지 않아요',
            description: `
              확인 후 다시 입력해 주세요
            `,
          }"
          @close="handleClose"
        />
        <!--// alert: 이름과 주민번호가 일치하지 않을 때 -->
        <!-- alert: 입력 정보가 정확하지 않을 때 -->
        <AlertV2
          v-model="alertState.alert3"
          :textData="{
            title: '입력하신 정보가 정확하지 않아요',
            description: `
              확인 후 다시 입력해 주세요
            `,
          }"
          @close="handleClose"
        />
        <!--// alert: 입력 정보가 정확하지 않을 때 -->
        <!-- alert: 본인인증 처리 실패 -->
        <AlertV2
          v-model="alertState.alert4"
          :textData="{
            title: '본인인증 처리를 실패했습니다',
            description: `
              다른 인증 방법으로 요청하시거나<br/>
              처음부터 다시 진행해 주세요
            `,
          }"
          @close="handleClose"
        />
        <!--// alert: 본인인증 처리 실패 -->
        <!-- alert: 이미 완료된 인증 건 -->
        <AlertV2
          v-model="alertState.alert5"
          :textData="{
            title: '이미 완료된 인증 건이에요',
            description: `
              다른 인증 방법으로 요청하시거나<br/>
              처음부터 다시 진행해 주세요
            `,
          }"
          @close="handleClose"
        />
        <!--// alert: 이미 완료된 인증 건 -->
        <!-- alert: 요청 허용 건수 초과 -->
        <AlertV2
          v-model="alertState.alert6"
          :textData="{
            title: '인증 확인하기 요청 허용 건수가<br/> 초과되었어요',
            description: `
              다른 인증 방법으로 요청하시거나<br/>
              처음부터 다시 진행해 주세요
            `,
          }"
          @close="handleClose"
        />
        <!--// alert: 요청 허용 건수 초과 -->


        <!-- 팝업 디자인 검수용입니다.-->
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" style="position: fixed; z-index: 1; bottom: 100px; left: 10px; font-size: 12px; background-color: rgb(255 93 0 / 23%); color: #4f4f4f;">
                팝업 디자인<br/> 검수용입니다
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in buttonName" :key="index" :value="index"  @click="handleAlert(item.alertName,true)" >
                <v-list-item-title style="font-size: 13px;">{{ item.txt }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        <!--// 팝업 디자인 검수용입니다.-->
        <!-- // content -->
      </div>
    </div>
  </div>
  <!-- // container -->
</template>

<script setup>
  import PcLnb from "@/components/v2/common/PcLnb";
  import Popup from "@/components/v2/common/Popup";
  import AlertV2 from "@/components/v2/common/AlertV2";
  import ALMY00004 from "@/components/v2/pages/auth/ALMY00004";
  import ALMY000041 from "@/components/v2/pages/auth/ALMY000041";

  import { useRouter } from "vue-router";

  const router = useRouter();
  const emit = defineEmits(["setLayout"]);

  const layout = reactive({
    header: "sub",
    footer: "",
    title: "본인인증",
    floatMenu: "none",
  });

  const confirmActivate = ref(false)

  const confirmState = ref(false)
  const confirmAuth = () => {
  }
  
  //팝업 목업
  const popState = ref({
    authSelect: false,
    authInfo1: false,
    authInfo2: false,
    authInfo3: false,
  });

  const handlePopup = (popName, val) => {
    popState.value[popName] = val;
  }
  const clickConfirm = () => {
    console.log("확인");
  };



  // alert
  const alertState = ref({
    alert1: false, // 인증 진행 중
    alert2: false, // 이름과 주민번호가 일치하지 않을 때
    alert3: false, // 입력 정보가 정확하지 않을 때
    alert4: false, // 본인인증 처리 실패
    alert5: false, // 이미 완료된 인증 건
    alert6: false, // 인증 확인하기 요청 허용 건수 초과
  });

  // alert 화면 검수용 목업
  const buttonName = [
    {txt: '인증 진행 중', alertName: 'alert1'},
    {txt: '이름과 주민번호가 일치하지 않을 때', alertName: 'alert2'},
    {txt: '입력 정보가 정확하지 않을 때', alertName: 'alert3'},
    {txt: '본인인증 처리 실패', alertName: 'alert4'},
    {txt: '이미 완료된 인증 건', alertName: 'alert5'},
    {txt: '인증 확인하기 요청 허용 건수 초과', alertName: 'alert6'},
  ];

  //얼럿창 open/close
  const handleAlert = (dialogName, value) => {
    alertState.value[dialogName] = value;
  };

  const handleClose = () => {
    console.log("닫기 버튼 클릭");
  };


  onMounted(() => {
    emit("setLayout", layout);
  });
</script>
