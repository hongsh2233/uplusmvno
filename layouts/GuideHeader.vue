<template>
  <header>
    <h1>
      <NuxtLink to="/"><img src="/images/common/logo_plusalpha.png" alt="알뜰폰닷컴" /></NuxtLink> :
      {{ getCurrentPageName() }}
    </h1>

    <ul class="status">
      <li>
        페이지 수 : <span>{{ pageInfo?.total || 0 }}</span>
      </li>
      <li>
        완료된 페이지 수 : <span>{{ pageInfo?.end || 0 }}</span>
      </li>
      <li>
        진행율 : <span>{{ pageInfo?.per || 0 }}%</span>
      </li>
    </ul>

    <nav class="gnb">
      <ul>
        <template v-for="(business, inx) in page.business">
          <li v-if="inx === businessFlag" :key="inx">
            <span 
              v-for="(item, i) in business.list" 
              :key="i" 
              :class="{ on: isActive(item.path, i) }"
            >
              <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
            </span>
          </li>
        </template>
      </ul>

      <div class="business btn-group">
        <button class="btn xsm c03" @click="switchBusiness(0)">기존 페이지로 가기</button>
        <button class="btn xsm c03" @click="switchBusiness(1)">셀프케어로 가기</button>
        <button class="btn xsm c03" @click="switchBusiness(2)">로밍으로 가기</button>
      </div>
    </nav>

    <div class="marker">
      <NuxtLink to="/guide/ListStyleManual" class="btn fs12 c01">기본 가이드</NuxtLink>
      <p class="info">
        <strong v-if="businessFlag === 0">2024.02.15</strong>
        <strong v-if="businessFlag === 1">2025.1.08</strong>
        <strong v-if="businessFlag === 2">2025.4.11</strong>
        Last update
      </p>
      <ul>
        <li class="com">진행중</li>
        <li class="end">퍼블완료</li>
        <li class="mod">수정</li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRoute } from 'vue-router';


  interface MenuItem {
    name: string;
    path: string;
  }

  interface PageInfo {
    total: number;
    end: number;
    per: number | string;
  }

  interface BusinessGroup {
    list: MenuItem[];
    pageOn: number;
    pageInfo: PageInfo;
  }

  interface PageData {
    business: BusinessGroup[];
    businessCurrent: number;
  }


  export default defineComponent({
    name: "GuideHeader",
    props: {
      page: {
        type: Object as () => PageData,
        required: true
      },
      pageOn: {
        type: Number,
        required: true
      },
      pageInfo: {
        type: Object as () => PageInfo,
        required: true
      },
    },
    setup(props, { emit }) {
      const route = useRoute();

      const syncBusinessFlag = () => {
        businessFlag.value = props.page.businessCurrent;
      };

      const businessFlag = ref(0);

      const isActive = (menuPath: string, index: number): boolean => {
        const currentPath = route.path;

        const isActiveByIndex = props.pageOn === index;

        const isPathMatched = menuPath === '/guide/ListGuide'
          ? currentPath === menuPath
          : currentPath === menuPath || currentPath.startsWith(menuPath);

        return isActiveByIndex || isPathMatched;
      };

      const getCurrentPageName = (): string => {
        try {
          const business = props.page?.business?.[businessFlag.value];
          const list = business?.list;

          if (!list) return '';

          const currentPath = route.path;
          const matchedItem = list.find(item => {
            const isGuide = item.path === '/guide/ListGuide';
            return isGuide ? currentPath === item.path : 
                            currentPath === item.path || currentPath.startsWith(item.path);
          });

          if (matchedItem) {
            return matchedItem.name;
          }

          if (list[props.pageOn]) {
            return list[props.pageOn].name;
          }

          return '';
        } catch (e) {
          return '';
        }
      };

      const switchBusiness = (index: number) => {
        businessFlag.value = index;
        emit("businessFunc", index);
      };

      watch(() => props.page.businessCurrent, syncBusinessFlag, { immediate: true });

      onMounted(syncBusinessFlag);

      return {
        businessFlag,
        isActive,
        getCurrentPageName,
        switchBusiness,
      };
    }
  });
</script>