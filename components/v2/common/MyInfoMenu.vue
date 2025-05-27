<template>
  <div class="content_info_wrap">
    <div class="content-info-menu">
      <!-- 24.11.22 우측 버튼 case 수정 : 단일 옵션이 아닐 때, active-dropdown 클래스를 붙여주세요 -->
      <button
        ref="partnerName"
        class="info-menu--list"
        @click="handlePartners"
        :class="{ 'active-dropdown': dataSelectList.lenght !== 0, 'on': isOpen }"
      >
        <span class="badge">대표</span>
        <span class="phone">{{ dataSelectList[0].phone }}</span>
        <span class="partner">
          {{ dataSelectList[0].brand }}
        </span>
      </button>
      <!-- // 24.11.22 우측 버튼 case 수정 -->
      <div class="info-menu--item">
        <span class="line">[★모나 캐시 15,000원 지급★]NA알뜰11G+일2G+3Mbps</span>
      </div>
    </div>

    <!-- 가입 회선 팝업 -->
    <Popup
      title="가입 회선"
      :titleLink="titleLink"
      :isOpen="isOpen"
      @update:isOpen="isOpen = $event"
      @confirm="clickConfirm1"
    >
      <ul class="select-list" role="listbox">
        <li role="none" :class="{ on: a.selected }" v-for="(a, i) in dataSelectList" :key="i">
          <button
            type="button"
            role="option"
            :aria-selected="a.selected"
            :data-option="a.phone"
            @click="clickSelectListItem(a)"
            class="line-info"
          >
            <span v-if="i === 0" class="badge">대표</span>
            <span class="phone">{{ a.phone }}</span>

            <span class="brand">{{ a.brand }}</span>
          </button>
        </li>
      </ul>
      <div class="gray-box main-line-checkbox">
        <div class="check-txt check_st">
          <input type="checkbox" id="checkbox01_01" name="radio01" />
          <label for="checkbox01_01">선택한 회선을 대표 회선으로 지정할게요.</label>
        </div>
      </div>
    </Popup>
    <!-- // 가입 회선 팝업 -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import Popup from "@/components/v2/common/Popup";

// 팝업 열기
const isOpen = ref(false);
const handlePartners = () => {
  isOpen.value = true;
};

// 가입회선 정보
const titleLink = ref("https://www.naver.com");
const dataSelectList = ref([
  { selected: true, value: 0, phone: "010-12**-56**", brand: "에스원안심모바일" },
  { selected: false, value: 1, phone: "010-12**-65**", brand: "모나" },
  { selected: false, value: 2, phone: "010-12**-92**", brand: "FLASH모바일" },
]);

// 회선 선택
const representData = ref(dataSelectList.value[0]);
const clickSelectListItem = (v) => {
  dataSelectList.value.forEach((item) => {
    item.selected = item === v ? true : false;

    representData.value = item;
  });
};

// 확인 버튼
const clickConfirm1 = () => {
  console.log(representData);
};
</script>
