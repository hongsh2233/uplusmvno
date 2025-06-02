<template>
  <div class="iframe-wrap">
    <iframe :src="srcUrl" frameborder="0"></iframe>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ srcUrl: string }>();
</script>

<style scoped lass="scss">
.iframe-wrap {
  border: 1px solid #eee;
  iframe {
    width: 100%;
  }
}
</style>
