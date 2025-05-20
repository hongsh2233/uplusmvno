<template>
  <div class="content-item__wrap" :class="className">
    <div v-for="(items, i) in cardObject" :key="i" class="content-item">
      <div class="content-inner">
        <div v-if="items.title" class="cont-head fl-sb">
          <h3 class="cont-title">
            <!-- {{ items.title }} -->
            <span v-html="items.title" />
            <span v-if="items.sub" class="sub">{{ items.sub }}</span>
          </h3>
          <div v-if="items.chip">
            <template v-if="items.url || items.url !== ''">
              <NuxtLink :href="items.url" class="btn-rounded chip">
                {{ items.chip }}
              </NuxtLink>
            </template>
            <template v-else>
              <button type="button" class="btn-rounded chip" @click="popupOpen(items)">
                {{ items.chip }}
              </button>
            </template>
          </div>
        </div>
        <ul class="card-group">
          <li v-for="(item, j) in items.list" :key="j">
            <div class="name">
              <slot name="name" :item="item">{{ item.name }}</slot>
            </div>
            <div class="value">
              <slot :item="item">{{ item.value }}</slot>
              <p v-if="item.description" class="description">{{ item.description }}</p>
            </div>
          </li>
        </ul>
        <ul v-if="items.notice" class="text-list bull">
          <li v-for="(notice, noticeIndex) in items.notice" :key="noticeIndex">
            {{ notice }}
          </li>
        </ul>
      </div>
    </div>

    <!-- 청구/납부 변경 팝업 -->
    <Popup
      v-if="dataSelectList"
      title="청구/납부정보 변경"
      :isOpen="isOpen"
      @update:isOpen="isOpen = $event"
      :isPopFooter="isPopFooter"
    >
      <template v-if="!isPopCustom">
        <ul class="select-list" role="listbox">
          <li
            role="none"
            :class="{ on: data.selected }"
            v-for="(data, i) in dataSelectList"
            :key="i"
          >
            <NuxtLink v-if="data.url" role="option" :to="data.url">
              {{ data.name }}
            </NuxtLink>
          </li>
        </ul>
      </template>
      <template v-else>
        <slot></slot>
      </template>
    </Popup>
    <!-- // 청구/납부 변경 팝업 -->
  </div>
</template>

<script setup>
/**
 * Props Options
 *
 * @function cardObject - 목업 데이터
 * @function dataSelectList - 팝업 목업 데이터
 * @string className - 클래스 추가 옵션
 * @boolean isPopFooter - 푸터 여부
 * @boolean isPopCustom - 푸터 커스텀 여부
 *
 */

import { defineProps } from "vue";

import Popup from "@/components/v2/common/Popup";

const router = useRouter();
const props = defineProps({
  cardObject: {
    type: [Array, Object],
    required: true,
  },
  dataSelectList: {
    type: [Array, Object],
    default: () => {},
  },
  className: {
    type: String,
    default: "",
  },
  isPopFooter: {
    type: Boolean,
    default: false,
  },
  isPopCustom: {
    type: Boolean,
    default: false,
  },
});

// 팝업
const isOpen = ref(false);
const popupOpen = (items) => {
  isOpen.value = true;
};
</script>
