<template>
  <!-- 24.12.18 readonly, disabled -->
  <v-expansion-panels :class="styleClass" class="acco-wrap" v-model="toggle" :readonly="readonly" :disabled="disabled">
    <v-expansion-panel class="acco-item" :class="{'readonly': readonly}">
      <div class="acco-title">
        <!-- 버튼 별도 -->
        <div v-if="option.separateButton" class="separate-wrap">
          <slot name="title">{{ title }}</slot>
          <v-expansion-panel-title class="separate-button" v-if="!option.listMode"> <!--25.05.15 추가 v-if="!option.listMode"-->
            <span class="blind">아코디언 버튼</span>
          </v-expansion-panel-title>
        </div>
        <!--// 버튼 별도 -->
        <!-- 기본 -->
        <v-expansion-panel-title v-else>
          <slot name="title">{{ title }}</slot>
        </v-expansion-panel-title>
        <!--// 기본 -->
      </div>
      <div class="acco-panel">
        <v-expansion-panel-text>
           <slot name="content"></slot>
        </v-expansion-panel-text>
      </div>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String, 
      default: '',
    },
    isExpanded: {
      type: Boolean,
      default: false,
    },
    readonly: { // 24.12.18 readonly 추가
      type: Boolean,
      default: false,
    },
    disabled: { // 24.12.18 disabled 추가
      type: Boolean,
      default: false,
    },
    styleClass: {
      type: String,
      default: '',
    },
    option: {
      type: Object,
      default: () => ({ 
        separateButton: false, // 분리된 버튼 레이아웃 용도
        listMode: false, //25.05.15 추가
      }),
    },
  });

  const toggle = ref([]);
  watch(
    () => props.isExpanded,
    (newVal) => {
      toggle.value = newVal ? [0] : [];
    },
    { immediate: true }
  );
</script>
