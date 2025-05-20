<template>
  <div class="guide_wrap">
    <GuideHeader
      :page="page"
      :pageOn="currentBusiness.pageOn"
      :pageInfo="currentBusiness.pageInfo"
      @businessFunc="businessFunc"
    />
    <NuxtPage @updatePageInfo="updatePageInfo" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, watch, onMounted } from "vue";
import GuideHeader from "@/layouts/GuideHeader.vue";

interface PageItem {
  name: string;
  path: string;
}

interface PageInfo {
  total: number;
  end: number;
  per: number;
}

interface BusinessGroup {
  list: PageItem[];
  pageOn: number;
  pageInfo: PageInfo;
}

interface PageState {
  business: BusinessGroup[];
  businessCurrent: number;
}

const route = useRoute();

const page = ref<PageState>({
  business: [
    {
      // 1차
      list: [
        { name: "Guide", path: "/guide/ListGuide" },
        { name: "공통, etc", path: "/guide/ListCommon" },
        { name: "메인", path: "/guide/ListMain" },
        { name: "유심구매", path: "/guide/ListUsim" },
        { name: "요금제", path: "/guide/ListRatePlan" },
        { name: "혜택", path: "/guide/ListBeneFit" },
        { name: "고객지원", path: "/guide/ListCS" },
        { name: "마이페이지", path: "/guide/ListMypage" },
        { name: "로그인", path: "/guide/ListLogin" },
        { name: "푸터", path: "/guide/ListFooter" },
        { name: "수정리스트", path: "/guide/ListModify" },
        { name: "외국인/미성년 개통건", path: "/guide/ListUserActivation" },
      ],
      pageOn: 0,
      pageInfo: { total: 0, end: 0, per: 0 },
    },
    {
      // 2차
      list: [
        { name: "Guide", path: "/guide/ListGuide" },
        { name: "메인/공통", path: "/guide/ListSelfCareMain" },
        { name: "사용 현황", path: "/guide/ListUsageStatus" },
        { name: "요금 조회/납부", path: "/guide/ListPayment" },
        { name: "가입 정보 관리", path: "/guide/ListRgstrInfrm" },
        { name: "분실/정지/해제", path: "/guide/ListrRsOfLostStop" },
        { name: "유심보호서비스", path: "/guide/ListUsimSafe" },
        { name: "수정리스트", path: "/guide/ListRsModify" },
      ],
      pageOn: 0,
      pageInfo: { total: 0, end: 0, per: 0 },
    },
    {
      // 3차
      list: [
        { name: "Guide", path: "/guide/ListGuide" },
        { name: "로밍 가이드", path: "/guide/ListGuideRo" },
        { name: "로밍", path: "/guide/ListRoaming" },
      ],
      pageOn: 0,
      pageInfo: { total: 0, end: 0, per: 0 },
    },
  ],
  businessCurrent: 0,
});

const currentBusiness = computed(() => {
  return page.value.business[page.value.businessCurrent];
});

function businessFunc(idx: number): void {
  if (idx < 0 || idx >= page.value.business.length) return;
  page.value.businessCurrent = idx;
  nextTick(() => {
    setPageOn(route.path);
  });
}

function setPageOn(routePath: string): void {
  if (!routePath) return;

  page.value.business.forEach((business) => {
    if (!business.list || !Array.isArray(business.list)) return;

    let foundIdx = -1;

    for (let i = 0; i < business.list.length; i++) {
      const menuPath = business.list[i].path;
      const isGuide = menuPath === "/guide/ListGuide";

      if (
        (isGuide && routePath === menuPath) ||
        (!isGuide && (routePath === menuPath || routePath.startsWith(menuPath)))
      ) {
        foundIdx = i;
        break;
      }
    }

    if (foundIdx >= 0) {
      business.pageOn = foundIdx;
    }
  });
}

function updatePageInfo(info: PageInfo): void {
  page.value.business[page.value.businessCurrent].pageInfo = info;
}

watch(() => route.path, setPageOn);

onMounted(() => {
  nextTick(() => setPageOn(route.path));
});
</script>

<style>
@import url(@/pages/guide/guide.css);
</style>
