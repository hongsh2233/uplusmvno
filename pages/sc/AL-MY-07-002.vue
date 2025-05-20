<template>
  <div class="container deps4">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-07-002'" />
        <!-- // LNB -->

        <!-- contents -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>
          <!-- 내 정보 메뉴 -->
          <!-- // 내 정보 메뉴 -->

          <div class="content-item">
            <div class="content-inner">
              <div class="cont-head title-main">
                <h3 class="cont-title-main">
                  유심보호 서비스를 신청/해지할<br/>
                  회선을 <strong class="txt-primary">선택</strong>하세요
                </h3>
              </div>
              <ul class="bdr-list">
                <li v-for="(data, idx) in phoneDatas" :key="idx">
                  <Accodian
                    :option="{ separateButton: true, listMode: !data.infoArray}"
                    :isExpanded="idx === radioSelect && data.infoArray"
                    :none="!data.infoArray"
                  >
                    <template #title>
                      <div class="radio-circle-group">
                        <input
                          :id="'radio-01' + idx"
                          type="radio"
                          class="blind"
                          name="radio_val"
                          :value="idx"
                          v-model="radioSelect"
                        />
                        <label :for="'radio-01' + idx" class="radio-circle">
                          {{ data.number }}
                        </label>
                        <strong
                          class="indicator"
                          :class="data.isCompleted === '신청 완료' ? 'txt-red' : ''"
                        >
                          <template v-if="data.isCompleted === '신청 완료'">
                            {{ data.isCompleted }}
                          </template>
                        </strong>
                      </div>
                    </template>
                    <template #content>
                      <CardGroup :card-object="data.infoArray">
                        <template #default="{ item }">
                          <p class="txt-skip">{{ item.value }}</p>
                        </template>
                      </CardGroup>
                    </template>
                  </Accodian>
                </li>
              </ul>
            </div>
          </div>

          <div class="text-list-wrap">
            <!-- 분실 등록 시 안내 문구 -->
            <ul class="text-list bull">
              <li>서비스의 정상적인 작동을 위해서는 유심이 기기에 장착된 상태에서 신청을 진행해야 해요. 유심이 없는 상태에서 신청할 경우, 기능이 정상적으로 작동하지 않을 수 있어요.</li>
              <li>유심보호서비스를 신청하시면 <strong>음성 로밍차단</strong>과 <strong>데이터 로밍 차단 </strong> 서비스도 함께 신청되어요. 해외로밍을 이용하시려면 서비스를 해지해 주세요.</li>
            </ul>
          </div>

          <BottomFixMenu
            :btnText="buttonInfo.btnText"
            :disabled="radioSelect == null"
            @click="nextPage"
          />
        </div>

        <Popup
          v-if="!front.isMobile()"
          :title="buttonInfo.pcPopTitle"
          :isOpen="popState.pcResult"
          :isPopFooter="false"
          @update:isOpen="popState.pcResult = $event"
          class="pcpopup"
        >
          <ALMY070021 v-if="pageStep === 0" @nextStep="nextView" />
          <ALMY070022 v-if="pageStep === 1" @nextStep="nextView" />
        </Popup>

        <!--서비스 해지 신청하기 확인-->
        <AlertV2
          v-model="popState.service"
          :textData="{
            title: '서비스 해지 신청을 하시겠어요?',
          }"
          :confirm="true"
          :buttonText="{ cancel: '취소', confirm: '해지 신청' }"
          @close="handleClose"
          @proceed="handleProceed"
        >
        </AlertV2>
        <!--서비스 해지 신청하기 확인-->

        <!-- // contents -->   
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import { useRouter } from 'vue-router';

  // components
  import PcLnb from '@/components/v2/common/PcLnb';
  import Accodian from '@/components/v2/common/Accodian';
  import CardGroup from '@/components/v2/common/CardGroup';
  import BottomFixMenu from '@/components/v2/common/BottomFixMenu';
  import Popup from '@/components/v2/common/Popup';
  import AlertV2 from '@/components/v2/common/AlertV2';
  import ALMY070021 from '@/components/v2/pages/usimsafe/ALMY070021';
  import ALMY070022 from '@/components/v2/pages/usimsafe/ALMY070022';

  // 레이아웃 정의
  interface LayoutInfo {
    header: string;
    footer: string;
    floatMenu: string;
    title: string;
  }
  const layout = ref({
    header: 'sub',
    footer: '',
    floatMenu: 'none',
    title: '유심보호서비스 신청/해지',
  });

  // emit 
  const emit = defineEmits<{
    (e: 'setLayout', layout: LayoutInfo): void
  }>();

  // 타입 정의
  interface InfoItem {
    name: string;
    value: string;
  }

  interface PhoneData {
    number: string;
    isCompleted: string;
    infoArray?: {
      list: InfoItem[];
    }[];
  }

  // 상태 정의
  const router = useRouter();
  const radioSelect = ref<number>(0);
  const pageStep = ref<number>(0);
  const popState = ref<Record<'service' | 'pcResult', boolean>>({
    service: false,
    pcResult: false,
  });


  //폰 데이터 목록 목업
  const phoneDatas: PhoneData[] = [
    {
      number: '010-12**-34**',
      isCompleted: '신청 완료',
      infoArray: [
        {
          list: [
            { name: '신청 날짜', value: '2025.05.07' },
            { name: '신청 구분', value: '신청 완료' },
          ],
        },
      ],
    },
    { number: '010-12**-34**', isCompleted: '' },
    { number: '010-12**-34**', isCompleted: '' },
  ];

  //버튼 정보 설정
  const buttonInfo = computed(() => {
    const isCompleted = !!phoneDatas[radioSelect.value]?.isCompleted;
    return {
      isCompleted,
      btnText: isCompleted ? '서비스 해지하기' : '서비스 신청하기',
      link: isCompleted ? '/sc/AL-MY-07-002-2' : '/sc/AL-MY-07-002-1',
      pcPopTitle: '유심보호서비스 신청 완료',
      viewMode: '팝업',
    };
  });

  // 팝업 제어 함수
  const handlePopup = (name: keyof typeof popState.value, value: boolean): void => {
    popState.value[name] = value;
  };

  const processCurrentState = (): void => {
    const { isCompleted, link } = buttonInfo.value;
    pageStep.value = isCompleted ? 1 : 0;

    if (isCompleted) {
      handlePopup('service', true);
    } else {
      // 서비스 신청
      if (front.isMobile()) {
        router.push(link);
      } else {
        handlePopup('pcResult', true);
      }
    }
  };

  // 버튼 클릭
  const nextPage = (): void => {
    processCurrentState();
  };

  // 해지 확인 팝업 > 해지 진행
  const handleProceed = (): void => {
    handlePopup('service', false);

    const { link } = buttonInfo.value;

    if (front.isMobile()) {
      router.push(link); 
    } else {
      handlePopup('pcResult', true);
    }
  };
  // 팝업 내부 화면 전환
  const nextView = (page: number): void => {
    pageStep.value = page;
    handlePopup('pcResult', false);
  };

  // 레이아웃 초기 설정
  onMounted(() => {
    emit('setLayout', layout.value);
  });
</script>

