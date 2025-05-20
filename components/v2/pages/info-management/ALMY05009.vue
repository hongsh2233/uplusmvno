<template>
  <div class="first-content-item">
    <Progress :step="{total: 4, current: 4}"  v-if="front.isMobile()" />
    <div class="content-item">
      <div class="content-inner">
        <div class="cont-head">
          <h3 class="cont-title-main">
            휴대폰 정보를<br /><strong class="txt-primary">입력</strong>해 주세요
          </h3>
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">기기 종류</strong>
          </div>

          <div class="btn-flex">
            <div v-for="item in radioData" :key="item.id" class="radio_item ty05">
              <input
                type="radio"
                name="radio01"
                :id="item.id"
                :value="item.value"
                v-model="radioSelected"
              />
              <label :for="item.id">{{ item.text }}</label>
            </div>
          </div>
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">용량</strong>
          </div>
          <div class="form_item">
            <InputForm
              class="combobox-bottom"
              :option="{ readonly: true, action: 'dropdown', value:'256GB' }"
              @click="handlePopup('storage' ,true)"
            />
          </div>
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">모델명</strong>
            <button class="btn-rounded btn-xs" @click="handlePopup('serialNumber' ,true)">모델명 확인방법</button>
          </div>
          <div class="form_item">
            <InputForm
              class="combobox-bottom"
              :option="{ readonly: true, action: 'dropdown', value:'아이폰 15 Pro Max-256GB' }"
              @click="handlePopup('modelSelect' ,true)"
            />
          </div>
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">일련번호</strong>
            <button class="btn-rounded btn-xs" @click="handlePopup('serialNumber' ,true)">일련번호 확인방법</button>
          </div>
          <div class="form_group">            
            <div class="form_item val_chk">
              <InputForm
                class="combobox-bottom"
                :option="{ placeholder: '영문, 숫자만 입력해 주세요'}"
              />
            </div>
            <div class="error">
              <em>영문과 숫자를 8자리 이상을 입력해 주세요.</em><!--ios error txt -->
              <em>숫자 6자리 이상을 입력해 주세요.</em><!--android error txt -->
            </div>
            <div class="error">
              <em>영문과 숫자를 8자리 이상을 입력해 주세요.</em><!--ios error txt -->
              <em>숫자 6자리 이상을 입력해 주세요.</em><!--android error txt -->
            </div>
          </div>
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">IMEI2</strong>
          </div>
          <div class="form_group">
            <div class="form_item val_chk">
              <InputForm
                class="combobox-bottom"
                :option="{ placeholder: '', value:'39284848939193', }"
              />
            </div>
            <div class="error">
              <em>숫자 14자리를 입력해 주세요.</em>
              <!-- 24.11.19 v0.97 수정 - 오류 문구 삭제 -->
              <!-- <em>IMEI2 정보를 정확히 입력해 주세요.</em> -->
            </div>
          </div>
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">EID</strong>
          </div>
          <div class="form_item">
            <InputForm
              class="combobox-bottom"
              :option="{ placeholder: '', value:'39284848939193', }"
            />
          </div>
        </div>
      </div>
    </div>

    <BottomFixMenu 
      :btnText="'휴대폰 등록하기'" 
      :disabled="false"
      @click="nextPage"
    />            
    <!--디폴트 :disabled="true"-->
    <!-- // bottom_button -->

    <!-- 용량 수동 선택 팝업 -->
    <Popup
      :title="'휴대폰 용량 선택'"
      :isOpen="popState.storage"
      @update:isOpen="popState.storage = $event"
      @confirm="clickConfirm"
    >
      <PopupListItem
        v-model="storageSelect"
        :option="{name:'select_storage'}" 
        :ListItemData="storageList" 
      />
    </Popup>
    <!-- // 용량 수동 선택 팝업 -->


    <!-- 모델명/일련번호 확인 방법 full 팝업 (AL-MY-05-009-1) -->
    <Popup
      :title="front.isMobile()? '모델명/일련번호 확인<br/> 방법이예요' : '모델명/일련번호 확인 방법'"
      :isOpen="popState.serialNumber"
      :popType="'full'"
      :isPopFooter="false"
      @update:isOpen="popState.serialNumber = $event"
      @confirm="clickConfirm"
    >
      <!-- ios/android -->
      <div class="btn-flex">
        <div v-for="(item, idx) in radioData" :key="item.id+idx" class="radio_item lined">
          <input 
            type="radio"
            name="radio02"
            :id="item.id + idx"
            :value="item.value"
            v-model="radioSelected"
          >
          <label :for="item.id">{{ item.value }}</label>
        </div>
      </div>
      <!-- ios/android -->
      <div class="pop-guide-overview">
        <div v-if="radioSelected == 'iOS'">
          <span class="guide-image-wrap">
            <img src="/images/v2/content/img_num_info_ios.png" alt="고유번호 복사 안내 이미지">
          </span>
          <dl class="pop-guide-details">
            <div>
              <dt>모델명 확인 방법</dt>
              <dd>휴대폰 설정 → 일반 → 정보 → 모델명 확인</dd>
            </div>
            <div>
              <dt>일련번호 확인 방법</dt>
              <dd>휴대폰 설정 → 일반 → 정보 → 일련번호 확인</dd>
            </div>
          </dl>
        </div>
        <div v-if="radioSelected == '안드로이드'">
          <span class="guide-image-wrap">
            <img src="/images/v2/content/img_num_info_android.png" alt="고유번호 복사 안내 이미지">
          </span>
          <dl class="pop-guide-details">
            <div>
              <dt>모델명 확인 방법</dt>
              <dd>설정 → 휴대전화 정보 → 규제정보 → 모델명 확인</dd>
            </div>
            <div>
              <dt>일련번호 확인 방법</dt>
              <dd>설정 → 휴대전화 정보 → 규제정보 → 일련번호 확인</dd>
            </div>
          </dl>
        </div>
      </div>
    </Popup>
    <!-- // 모델명/일련번호 확인 방법 full 팝업 (AL-MY-05-009-1) -->

    <!--모델명 선택 팝업 (AL-MY-05-009-2) -->
    <Popup
      :title="front.isMobile() ? '모델명을<br/> 선택해 주세요' : '모델명 선택'"
      :isOpen="popState.modelSelect" 
      :popType="'full'"
      @update:isOpen="popState.modelSelect = $event"
      @confirm="clickConfirm"
    >
      <!-- ios/android -->
      <div class="btn-flex">
        <div v-for="(item, idx) in radioData" :key="item.id" class="radio_item lined">
          <input 
            type="radio"
            name="radio02"
            :id="item.id+idx"
            :value="item.value"
            v-model="radioSelected"
          >
          <label :for="item.id">{{ item.value }}</label>
        </div>
      </div>
      <!-- ios/android -->

      <div v-for="(data, idx) in selectedModelList" class="pop-select-list">
        <h4 v-if="data.seriesTitle" class="multi-label" >
          {{ data.seriesTitle }}
        </h4>
        <Accodian 
          v-for="(detail, idx) in data.seriesDetail"
          class="pop-select-item" 
          :title="detail.seriesLabel" 
          :isExpanded="false"
        >
          <template #content>
            <PopupListItem 
              v-model="modelListSelect"
              :option="{name:'select_model'}" 
              :ListItemData="detail.seriesList" 
              @select="clickSelectListItem" 
            />
          </template>
        </Accodian>
      </div>

      <!-- 24.11.19 v0.97 수정 -->
      <!-- <div class="pop-select-list">
        <div class="pop-select-item lonely">
          <ul class="list-item" role="listbox">
            <li role="none" >
              <label class="listbox" :class="{selected: modelListSelect === 'athor'}">
                <input class="blind" type="radio" name="select_model" value="athor" v-model="modelListSelect"/>
                기타
              </label>
            </li>
          </ul>
        </div>
      </div> -->
      <!--// 24.11.19 v0.97 수정 -->
    </Popup>
    <!--// 모델명 선택 팝업 (AL-MY-05-009-2)-->

  </div>
</template>

<script setup>
  import Progress from "@/components/v2/common/Progress";
  import BottomFixMenu from "@/components/v2/common/BottomFixMenu";
  import Popup from "@/components/v2/common/Popup";
  import PopupListItem from "@/components/v2/common/PopupListItem";
  import InputForm from "@/components/v2/common/InputForm";
  import Accodian from "@/components/v2/common/Accodian";

  import { useRouter } from "vue-router";
  const router = useRouter();
  const emit = defineEmits(["nextStep"]);

  //라디오 목업
  const radioData = ref([
    { id: "radio01_01", value: "iOS", text: "iOS"},
    { id: "radio01_02", value: "안드로이드", text: "안드로이드"},
  ])
  const radioSelected = ref(radioData.value[0].value);

  //팝업 - 모델명 일련번호 확인, 모델명 선택
  const popState = ref({
    serialNumber: false,
    modelSelect: false,
    storage: false
  });
  const handlePopup = (popName, val) => {
    popState.value[popName] = val;
  }
  const clickConfirm = () => {
    console.log("확인");
  };

  //저장공간 선택 목업
  const storageSelect = ref(0)
  const storageList = ref([
    {value: 0, name: '128GB'}, 
    {value: 1, name: '256GB'}, 
    {value: 2, name: '512GB'}, 
    {value: 3, name: '1TB'}, 
  ])

  //모델명 목업 (iphone)
  const sharedSelected = ref('');
  const modelListIphone = ref([
    {
      seriesTitle: '',
      seriesDetail: [
        {
          seriesLabel: 'iPhone 14/15/16',
          seriesList: [
            { value: 'iOS-1', name: 'iPhone 16' },
            { value: 'iOS-2', name: 'iPhone 16 Plus' },
            { value: 'iOS-3', name: 'iPhone 16 Pro' },
            { value: 'iOS-4', name: 'iPhone 16 Pro Max' },
            { value: 'iOS-5', name: 'iPhone 15' },
            { value: 'iOS-6', name: 'iPhone 15 Plus' },
            { value: 'iOS-7', name: 'iPhone 15 Pro' },
            { value: 'iOS-8', name: 'iPhone 15 Pro Max' },
          ]
        },
        {
          seriesLabel: 'iPhone 11/12/13',
          seriesList: [
            { value: 'iOS-9', name: 'iPhone 16' },
            { value: 'iOS-10', name: 'iPhone 16 Plus' },
            { value: 'iOS-11', name: 'iPhone 16 Pro' },
          ]
        },
        {
          seriesLabel: 'iPhone 6/7/8',
          seriesList: [
            { value: 'iOS-12', name: 'iPhone 16' },
            { value: 'iOS-13', name: 'iPhone 16 Plus' },
            { value: 'iOS-14', name: 'iPhone 16 Pro' },
            { value: 'iOS-15', name: 'iPhone 16 Pro Max' },
            { value: 'iOS-16', name: 'iPhone 15' },
          ]
        },
        {
          seriesLabel: 'iPhone SE/XR/XS',
          seriesList: [
            { value: 'iOS-17', name: 'iPhone 16 Pro Max' },
            { value: 'iOS-18', name: 'iPhone 15' },
            { value: 'iOS-19', name: 'iPhone 15 Plus' },
            { value: 'iOS-20', name: 'iPhone 15 Pro' },
            { value: 'iOS-21', name: 'iPhone 15 Pro Max' },
          ]
        },
      ]
    },
    {
      seriesDetail: [
        {
          seriesLabel: '기타',
          seriesList: [
            { value: 'iOS-none', name: '기타' },
          ]
        },
      ]
    }
  ]);
  //모델명 목업 (Android)
  const modelListAndroid = ref([
    {
      seriesTitle: 'SAMSUNG S series',
      seriesDetail: [
        {
          seriesLabel: 'Galaxy S22/S23/S24',
          seriesList: [
            { value: 'Android-1', name: 'Galaxy S24' },
            { value: 'Android-2', name: 'Galaxy S24+' },
            { value: 'Android-3', name: 'Galaxy S24 Ultra' },
            { value: 'Android-4', name: 'Galaxy S23' },
            { value: 'Android-5', name: 'Galaxy S23+' },
            { value: 'Android-6', name: 'Galaxy S23 Ultra' },
            { value: 'Android-7', name: 'Galaxy S22' },
            { value: 'Android-8', name: 'Galaxy S22+' },
            { value: 'Android-9', name: 'Galaxy S22 Ultra' },
          ]
        },
        {
          seriesLabel: 'Galaxy S20/S21',
          seriesList: [
            { value: 'Android-10', name: 'Galaxy S24' },
            { value: 'Android-11', name: 'Galaxy S24+' },
          ]
        },
        {
          seriesLabel: 'Galaxy S7/S8/S9/S10',
          seriesList: [
            { value: 'Android-12', name: 'Galaxy S24' },
            { value: 'Android-13', name: 'Galaxy S24+' },
          ]
        },
        {
          seriesLabel: 'Galaxy S4/S5/S6',
          seriesList: [
            { value: 'Android-14', name: 'Galaxy S24' },
            { value: 'Android-15', name: 'Galaxy S24+' },
          ]
        },
      ]
    },
    {
      seriesTitle: 'SAMSUNG Z series',
      seriesDetail: [
        {
          seriesLabel: 'Galaxy Z Fold',
          seriesList: [
            { value: 'Android-16', name: 'Galaxy S24' },
          ]
        },
        {
          seriesLabel: 'Galaxy Z Flip',
          seriesList: [
            { value: 'Android-17', name: 'Galaxy S24' },
            { value: 'Android-18', name: 'Galaxy S24+' },
          ]
        },
      ]
    },
    {
      seriesTitle: 'SAMSUNG A series',
      seriesDetail: [
        {
          seriesLabel: 'Galaxy A05/A15/A25/A35',
          seriesList: [
            { value: 'Android-19', name: 'Galaxy S24' },
          ]
        },
        {
          seriesLabel: 'Galaxy A04/A14/A24/A34',
          seriesList: [
            { value: 'Android-20', name: 'Galaxy S24' },
            { value: 'Android-21', name: 'Galaxy S24+' },
          ]
        },
        {
          seriesLabel: 'Galaxy A3/A5',
          seriesList: [
            { value: 'Android-22', name: 'Galaxy S24' },
            { value: 'Android-23', name: 'Galaxy S24+' },
          ]
        },
      ]
    },
   {
      seriesDetail: [
        {
          seriesLabel: '기타',
          seriesList: [
            { value: 'Android-none', name: '기타' },
          ]
        },
      ]
   } 
  ]);
  const modelListSelect = ref('iOS-1')

  const selectedModelList = computed(() => {
    return radioSelected.value === "iOS" ? modelListIphone.value : modelListAndroid.value;
  });

  const clickSelectListItem = (selectedValue) => {
    modelListSelect.value = selectedValue;
    console.log(selectedValue.value);
  };


  const nextPage = () => {
    // 화면 검수용 임시 라우터 처리
    const pageNumber = 4
    if (front.isMobile()) {
      router.push("/sc/AL-MY-05-010");
    } else {
      emit('nextStep', pageNumber);
    }
  };
</script>
