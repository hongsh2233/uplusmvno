<template>
  <div class="bottom_float on-selfcare">
    <div class="inner">
      <div class="float_btn_wrap">
        <div class="btn-area">
          <NuxtLink 
            v-if="link" 
            :to="link" 
            role="button" 
            class="btn-rounded primary"
            :class="{disabled : disabled}" 
            :disabled="disabled"
            @click="emit('click')"
          >
            {{ btnText }}
          </NuxtLink>

          <button 
            v-else 
            class="btn-rounded primary"
            :class="{disabled : disabled}" 
            :disabled="disabled"
             @click="emit('click')"
          >
            {{ btnText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const emit = defineEmits(["click"])

  const props = defineProps({
    btnText: {
      type: String,
      default: '확인'
    },
    link: {
      type: String,
      default: null 
    },
    disabled: {
      type: Boolean,
      default: false
    },
  });

  // 24.11.28 bottomLayer 실행
  onMounted(() => {
    floatLayer.bottomLayer(true);
  });

</script>