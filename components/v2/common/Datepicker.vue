<template>
  <VueDatePicker
    v-model="date"
    inline
    auto-apply
    locale="ko"
    :enableTimePicker="false"
    :format="format"
    :disabled-dates="disabledDates"
    week-start="0"
    @update:model-value="handleDate"
    class="calander-wrap"
  >
    <template #month-year="{ month, year, handleMonthYearChange }">
      <div class="custom-dp-header">
        <button @click="handleMonthYearChange(false)" class="btn-arrow prev"></button>
        <div class="month-year">
          <span>{{ year }}년</span>
          <span>{{ month + 1 }}월</span>
        </div>
        <button @click="handleMonthYearChange(true)" class="btn-arrow next"></button>
      </div>
    </template>
  </VueDatePicker>
</template>

<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";

const emit = defineEmits(["select"]);

const date = ref(new Date());
const disabledDates = ref(null);

const handleDate = (modelData) => {
  date.value = modelData;
  isOpen.value = false;
};

const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}.${month}.${day}`;
};

const isOpen = ref(false);
const openPopup = () => {
  isOpen.value = true;
};

watch(date, (val) => {
  if (val) {
    emit("select", date);
  }
});
</script>
