<template>
  <div class="AL-MY-05-500">
    <div class="container">
      <div class="content" id="content">
        <h2 class="title_nav">{{ layout.title }}</h2>
        <div class="crp_wrap">
          <!-- LNB -->
          <PcLnb :currentLink="'/sc/AL-MY-05-500'" />
          <!-- // LNB -->

          <!-- contents -->
          <div class="crp_r">
            <h2 class="pc-title">{{ layout.title }}</h2>
            <!-- 내 정보 메뉴 -->
            <MyInfoMenu />
            <!-- // 내 정보 메뉴 -->
            <div class="content-item">
              <div class="content-inner">
                <div class="cont-head title-main">
                  <h3 class="cont-title-main">
                    휴대폰 번호를<br />
                    간편하게 <b class="txt-primary">변경</b>하세요
                  </h3>
                  <ul class="text-list bull">
                    <li>
                      변경 예약 및 취소, 변경 완료를 모두 포함하여 1일 1회, <strong>90일 동안 총 2회</strong>까지 변경이
                      가능해요.
                    </li>
                    <li>유심만 개통한 경우 <strong>휴대폰 등록(확정 기변)</strong> 후 번호 변경을 하실 수 있어요.</li>
                  </ul>
                </div>
                <Accodian title="번호 변경 정보" styleClass="acco-gray" :is-expanded="true">
                  <template #content>
                    <div class="mgt0">
                      <CardGroup :card-object="cardObject2">
                        <template #default="{ item }">
                          <div class="fl-ac">
                            <p v-html="item?.value"></p>
                            <NuxtLink to="AL-MY-05-005" v-if="item?.value === '미등록'" class="btn-rounded chip"
                              >휴대폰 등록</NuxtLink
                            >
                          </div>
                        </template>
                      </CardGroup>
                    </div>
                  </template>
                </Accodian>
                <div class="inner-section">
                  <hr class="hr-line" />
                </div>
                <div class="inner-section">
                  <CardGroup :card-object="cardObject1" />
                </div>

                <div class="inner-section">
                  <div class="cont-head">
                    <div class="cont-title">번호 변경 안내</div>
                  </div>
                  <ol class="text-list circle-num type-vertical">
                    <li>
                      <p>희망번호 검색하기</p>
                      <span>휴대폰 번호 뒤 4자리로 검색 후 선택해 주세요.</span>
                    </li>
                    <li>
                      <p>본인확인 인증</p>
                      <span>간단한 인증을 통해 본인확인을 해주세요.</span>
                    </li>
                    <li>
                      <p>번호 변경 완료</p>
                      <span>선택한 번호로 변경을 완료합니다.</span>
                    </li>
                    <li>
                      <p>변경된 번호로 개통하기</p>
                      <span>
                        2G, 3G 휴대폰은 변경된 번호를 휴대폰에 입력하세요. <br />
                        LTE, 5G 휴대폰은 번호 변경 후 30분 이내에 변경된 번호로 휴대폰을 개통하세요.
                      </span>
                    </li>
                  </ol>
                </div>
                <div class="inner-section">
                  <div class="btn-area">
                    <NuxtLink :to="'/sc/AL-MY-06-002'" class="btn-rounded btn-line">번호 변경 이력 보기</NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <div class="content-item">
              <div class="content-inner">
                <CardGroup :card-object="cardObject3" />
                <p class="notice-txt">일시 정지 해제 후 번호 변경 해주세요.</p>
              </div>
            </div>

            <BottomFixMenu :btnText="'번호 변경'" :disabled="false" />
            <!-- // bottom_button -->

            <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
              <template #content>
                <ul class="text-list bull">
                  <li>미납요금이 있거나, 휴대폰 일시정지 중에는 번호를 변경할 수 없습니다.</li>
                  <li>LTE, 5G 휴대폰의 경우 번호 변경 후 30분 이내 자동 개통 욉니다.</li>
                  <li>2G, 3G 휴대폰의 경우 변경된 번호를 휴대폰에 입력해야 변경 됩니다.</li>
                  <li>
                    일부 휴대폰은 온라인에서 직접 변경 불가합니다.
                    <p><a class="txt-link orange">온라인 변경 불가 휴대폰 확인하기</a></p>
                  </li>
                  <li>
                    안드로이드 휴대폰인 경우, 개통 안내 문자메시지를 받게 됩니다. 반드시 30분 안에 전화 키패드에
                    ‘#5487587#682# ‘ 번호 입력 후 ‘개통하시겠습니까?’ 라는 문구가 나타나면 [예]를 선택하세요. 휴대폰
                    전원이 자동으로 꺼졌다 켜지면 해당 번호로 변경된 것입니다.
                  </li>
                  <li>아이폰/수입폰의 경우 휴대폰을 껐다 켜면 해당 번호로 변경 개통됩니다.</li>
                  <li>
                    국가에서 통신사에 부여한 가운데 4자리 번호는 변경 후 24시간 이내에만 취소가 가능하며, 그 외 번호는
                    신청 당일 오전 10시~ 오후 8시 사이에만 취소가 가능합니다.
                  </li>
                  <li>변경 가능 잔여 횟수가 없을 경우 번호 변경 취소가 불가합니다.</li>
                </ul>
              </template>
            </Accodian>
          </div>
          <!--// contents -->
        </div>
        <Popup
          title="휴대폰 번호 변경 내역"
          popType="full no-title"
          confirmText="확인"
          :isOpen="popupQuery === '1' && popupOpen"
          :isPopFooter="false"
          @update:isOpen="popupOpen = false"
          class="pcpopup type-float-btn-1"
        >
          <ALMY05500P01 />
        </Popup>

        <Popup
          title="온라인 변경 불가 휴대폰 모델"
          popType="full no-title"
          confirmText="확인"
          :isOpen="popupQuery === '2' && popupOpen"
          :isPopFooter="false"
          @update:isOpen="popupOpen = false"
          class="pcpopup type-float-btn-1"
        >
          <ALMY05500P02 />
        </Popup>

        <Popup
          title="번호 변경 확인"
          popType="full no-title"
          confirmText="확인했어요"
          :isOpen="popupQuery === '3' && popupOpen"
          @update:isOpen="popupOpen = false"
          class="pcpopup"
        >
          <ALMY05500P03 />
        </Popup>

        <Popup
          title="번호 선택"
          popType="full no-title"
          :isOpen="popupQuery === '4' && popupOpen"
          :isPopFooter="false"
          @update:isOpen="popupOpen = false"
          class="pcpopup"
        >
          <ALMY05500P04 />
          <ALMY05505P05 />
        </Popup>

        <Popup
          title="변경 완료"
          popType="full no-title"
          :isOpen="popupQuery === '5' && popupOpen"
          :isPopFooter="false"
          @update:isOpen="popupOpen = false"
          class="pcpopup"
        >
          <ALMY05500P05 />
        </Popup>
      </div>
    </div>
  </div>
  <!-- // container -->
</template>

<script setup lang="ts">
import PcLnb from "@/components/v2/common/PcLnb.vue";
import MyInfoMenu from "@/components/v2/common/MyInfoMenu.vue";
import CardGroup from "@/components/v2/common/CardGroupRoaming.vue";
import Popup from "@/components/v2/common/Popup.vue";
import BottomFixMenu from "@/components/v2/common/BottomFixMenu.vue";
import Accodian from "@/components/v2/common/Accodian.vue";
import ALMY05500P01 from "@/components/popup/AL-MY-05-500-P01.vue";
import ALMY05500P02 from "@/components/popup/AL-MY-05-500-P02.vue";
import ALMY05500P03 from "@/components/popup/AL-MY-05-500-P03.vue";
import ALMY05500P04 from "@/components/popup/AL-MY-05-500-P04.vue";
import ALMY05500P05 from "@/components/popup/AL-MY-05-500-P05.vue";

const emit = defineEmits(["setLayout"]);

const route = useRoute();
const popupQuery = ref(route.query.popup);
const popupOpen = ref(true);

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: "",
  floatMenu: "",
  title: "번호 변경",
  wrapClass: "selfcare roaming",
});

const cardObject1 = ref([
  {
    title: "단말 정보",
    sub: "",
    chip: [
      {
        name: "휴대폰 재등록",
        value: 1,
        url: null,
      },
    ],
    list: [
      { name: "등록 기기명", value: "iPhone15 Pro Max_1TB" },
      { name: "상태", value: "정상" },
    ],
  },
]);

const cardObject2 = ref([
  {
    list: [
      { name: "신청 번호", value: "010-12**26**", class: { value: "txt-orange" } },
      { name: "이전 번호", value: "10-12**26**" },
      { name: "신청일", value: "2025. 07. 18" },
      { name: "잔여횟수(총 회수)", value: "1/2" },
    ],
  },
]);

const cardObject3 = ref([
  {
    title: "회선이 일시정지 상태에요!",
    sub: "",
    chip: [
      {
        name: "일시정지 해제",
        value: 1,
        url: null,
      },
    ],
    list: [
      { name: "상태", value: "일시정지" },
      { name: "정지 사유", value: "휴대폰 분실" },
      { name: "정지 일수", value: "30일" },
      { name: "정지 기간", value: "2024. 01. 01 ~ 2024. 02. 01" },
    ],
  },
]);

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/pages/sc/page-al-my-05-500.scss" as *;
</style>
