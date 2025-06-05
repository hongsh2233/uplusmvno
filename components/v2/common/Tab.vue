<template>
  <div class="content-tabs" :class="tabType">
    <div class="tab-title-wrap">
      <button
        v-for="(title, idx) in titles"
        :key="idx"
        :class="{ on: activeTab === idx }"
        class="btn-tab-title"
        @click="setActiveTab(idx)"
      >
        {{ title }}
      </button>
    </div>
    <div class="tab-content">
      <div v-for="(title, idx) in titles" :key="idx">
        <slot v-if="activeTab === idx" :name="'content' + (idx + 1)"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
/* 2025-06-05 1749095426 (정C) 선택된 탭버튼 기능으로 props activeTabIndex 추가 */
const props = defineProps({
  activeTabIndex: {
    type: Number,
    default: 0,
  },
  titles: {
    type: Array,
    required: true,
  },
  tabType: {
    type: String,
    default: "normal",
  },
});

const activeTab = ref(props.activeTabIndex);

const setActiveTab = (idx) => {
  activeTab.value = idx;
};
</script>
