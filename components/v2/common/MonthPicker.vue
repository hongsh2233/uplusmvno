<template>
  <div class="month-picker">
    <VueDatePicker
      v-model="month"
      month-picker
      inline
      auto-apply
      locale="ko"
      class="calander-wrap"
      :min-date="minDate"
      :max-date="maxDate"
    />
    <!-- <VueDatePicker
          v-model="month"
          month-picker
          inline
          auto-apply
          locale="ko"
          :hide-overlay-year="true"
          class="calendar-wrap"
        >
          <template #month-overlay="{ items, updateMonthYear }">
            <div class="custom-months">
              <button
                v-for="monthItem in items"
                :key="monthItem.value"
                @click="updateMonthYear(monthItem.value)"
              >
                {{ monthItem.text }}
              </button>
            </div>
          </template>
        </VueDatePicker> -->
  </div>
</template>

<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";

/* 24.11.25 수정 */
const month = ref(new Date());
const minDate = ref(new Date(new Date().setMonth(new Date().getMonth() - 11)));
const maxDate = ref(new Date(new Date().setMonth(new Date().getMonth())));

watch(month, (newValue) => {
  const selectedMonth = newValue.month + 1; // 0-11 -> 1-12로 변환
  const selectedYear = newValue.year;
  minDate.value = new Date(selectedYear, selectedMonth - 12, 1); // 12개월 전
  // maxDate.value = new Date(selectedYear, selectedMonth - 1, 1); // 현재월
});
</script>

<style>
.dp--year-mode-picker .dp__btn.dp--year-select {
  pointer-events: none;
}
</style>
