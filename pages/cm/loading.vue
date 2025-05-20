<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <!-- 로딩바 -->
        <Loading v-if="loading" />
        <!-- // 로딩바 -->
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';

const emit = defineEmits(['setLayout', 'openPopup', 'openAlert']);
const layout = ref({
  header : 'sub',
  footer : 'none',
	floatMenu : 'none',
  title: '로딩바 샘플'
});

const loading: Ref<boolean> = ref(true);
</script>
