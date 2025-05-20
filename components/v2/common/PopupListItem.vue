<template>
  <!--2024.10.14 클래스 추가 -->
  <ul class="list-item" role="listbox" :class="ListItemData.length % 2 == 0 ? 'even':'odd'" >
    <!-- <li role="none" :class="{ on: a.selected }" v-for="(a, i) in ListItemData" :key="i">
      <button
        type="button"
        role="option"
        :aria-selected="a.selected"
        :data-option="a.name"
        @click="clickSelectListItem(a)"
        class="button"
        :class="a.class"
      >
        <span class="name">{{ a.name }}</span>
      </button>
    </li> -->

    <!--2024.10.08 구조 변경 (button -> radio, checkbox) -->
    <li role="none" v-for="(a, i) in ListItemData" :key="i">
      <label 
        class="listbox" 
        :class="{ selected: isSelected(a.value) }, {'list-multi': option.multiple}, {'disabled': a.disabled} ,a.class"
      >
        <!-- 24.12.12 disabled 추가 -->
        <input 
          class="blind"
          :type="option.multiple ? 'checkbox' : 'radio'" 
          :name="option.name"
          :value="a.value"
          :disabled="a.disabled"
          v-model="selectedOptions"
          @change="handleSelection(a)"
        />
        {{ a.name }}

        <!-- 24.11.25 v0.98 -->
        <span v-if="a.subText" class="sub">{{ a.subText }}</span>
        <!--// 24.11.25 v0.98 -->
      </label>
    </li>
    <!--// 2024.10.08 구조 변경 (button -> radio, checkbox) -->
  </ul>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["select", 'update:modelValue']);

const props = defineProps({
  ListItemData: {
    type: [Array, Object],
    default: () => {},
  },
  option: {
    type: Object,
    default: () => ({ name: 'single-select', multiple: false }),
  },
  modelValue: {
    type: [String, Array, Number],
    default: () => ([]) // 기본값 설정
  }
});

//옵션변수
const selectedOptions = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const isSelected = (value) => {
  return props.option.multiple
    ? selectedOptions.value.includes(value)
    : selectedOptions.value === value;
};

// 선택 이벤트 핸들러
const handleSelection = (option) => {
  emit('select');
  // console.log("Selected option:", option);
};


</script>
