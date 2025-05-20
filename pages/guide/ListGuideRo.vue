<template>
  <div class="container">
    <div class="publishing-guide-v3">
      <div class="content" id="content">
        <div class="section">
          <h1 class="title-h1"><span>Guide Tags</span></h1>
          <ul class="tag-list">
            <li v-for="item in referenceList" :key="item.id">
              <NuxtLink :to="item.linkURL" target="_blank">{{ item.title }}</NuxtLink>
            </li>
          </ul>
          <hr />
          <br /><br />
          <SwiperBnr />
          <h1 class="title-h1"><span>h1.title-h1>span{TITLE01}</span></h1>
          <h2 class="title-h2"><span>h2.title-h2>span{TITLE02}</span></h2>
          <MDC :value="md1_1" class="pub-md-wrap" />
        </div>
        <div class="section">
          <h1 class="title-h1"><span>로밍 테스트</span></h1>
          <MDC :value="md1_2" class="pub-md-wrap" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SwiperBnr from "@/components/SwiperBnr.vue";
import type { LayoutOptions } from "@/types/layout";
import { md1_1, md1_2 } from "~/pages/guide/docs/md1";

const referenceList = ref([
  {
    id: 1,
    title: "Defaut Page",
    linkURL: "/guide/sample/DefaultLayoutSvc",
    desc: "",
  },
  { id: 2, title: "BUTTON", linkURL: "/guide/v2/Button", desc: "" },
  { id: 3, title: "TABLE", linkURL: "/guide/component-guide/Table", desc: "" },
  {
    id: 4,
    title: "Flag & Badge",
    linkURL: "/guide/component-guide/Flag",
    desc: "",
  },
  {
    id: 5,
    title: "Accordion(1)",
    linkURL: "/guide/component-guide/Accordion",
    desc: "",
  },
  { id: 6, title: "Accordion(2)", linkURL: "/guide/v2/Accordion", desc: "" },
  {
    id: 7,
    title: "Tag & Filter",
    linkURL: "/guide/component-guide/TagVue",
    desc: "",
  },
  {
    id: 8,
    title: "Tab(1)",
    linkURL: "/guide/component-guide/Tab",
    desc: "아래 밑줄 형식",
  },
  {
    id: 9,
    title: "Tab(2)",
    linkURL: "/guide/component-guide/Tab",
    desc: "둥근 사각형, 텍스트 형식",
  },
  {
    id: 10,
    title: "Form",
    linkURL: "/guide/component-guide/FormVue",
    desc: "",
  },
]);

if (front.isMobile()) {
  console.log("모바일");
}

const emit = defineEmits<{
  (e: "setLayout", payload: LayoutOptions): void;
}>();

const layout = reactive<LayoutOptions>({
  header: "sub",
  footer: "",
  floatMenu: "",
  title: "파트너사 소개",
});

onMounted(() => {
  emit("setLayout", layout);
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/guide/pub_guide.scss" as *;
</style>
