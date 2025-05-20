<template>
  <div class="loading" :class="{'unit': unit}">
    <div class="lottie"><Lottie name="loading" /></div>
    <span class="blind">loading</span>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';

const unit: Ref<boolean> = ref(true);
</script>