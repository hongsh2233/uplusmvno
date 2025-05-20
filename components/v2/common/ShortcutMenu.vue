<template>
  <div class="shortcut-menu">
    <!-- 24.10.21 팝업 열 수 있게 수정 -->
    <ul class="content-inner">
        <li v-for="(item, idx) in links">
          <button class="shortcut-link"
            v-if="item.link === 'popup'"
            @click="handleAlert(item.popName, true)"
          >
            {{ item.title }}
          </button>
          <NuxtLink class="shortcut-link"
            v-else
            :key="idx"
            :to="item.link"
            >
            {{ item.title }}

            <!-- 24.11.01 준비중 텍스트 추가 -->
            <span class="txt-gray" v-if="item.preparing">(준비중)</span>
          </NuxtLink>
        </li>
    </ul>
  </div>
</template>

<script setup>
  const props = defineProps({
    links: {
      type: Array,
      required: true,
      default: () => [{
        title: '',
        link: '',
        preparing: false
      }]
    }
  });

  const emit = defineEmits(['openPopup']);

  const handleAlert = (popName, value) => {
    emit('openPopup', popName, value);
  };

</script>
