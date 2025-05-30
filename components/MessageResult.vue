<template>
  <div class="result-message-box no-data">
    <p class="message-icon" :style="`--icon-url: url(${iconURL})`" v-if="iconURL">
      <i class="img-payment"></i>
    </p>
    <p class="message-txt" v-html="description"></p>
  </div>
</template>

<script setup lang="ts">
interface Data {
  description?: string;
  iconURL?: string;
}
const props = withDefaults(defineProps<Data>(), {
  description: "등록된 데이터가 없습니다",
  iconURL: "/images/roaming/icons/icon_result_no_data_1.svg",
});
</script>

<style lang="scss" scoped></style>
