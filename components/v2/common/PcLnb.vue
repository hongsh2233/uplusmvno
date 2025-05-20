<template>
  <div v-if="!front.isMobile()" class="crp_l">
    <div class="section lnb-wrap sticky" ref="PC_scrollFixed">
      <h1>알닷케어</h1>
      <v-expansion-panels class="lnb" v-model="deps1">
        <!-- 25.05.16 자식 없음 옵션 추가 --start -->
        <template v-for="(item, index) in getChild(null)">
          <v-expansion-panel 
            v-if="!isLeaf(item.id)"
            :key="index" 
            class="lnb-item" 
            >
            <v-expansion-panel-title>{{ item.name }}</v-expansion-panel-title>
            <v-expansion-panel-text>
              <!-- 2depth -->
              <v-expansion-panels v-model="lnb1">
                <v-expansion-panel v-for="(depth2, j) in getChild(item.id)" :key="j">
                  <NuxtLink :to="`${depth2.link}`" :class="{ current: isCurrent(depth2.link), subin: depth2.link == '' }">
                    {{ depth2.name }}
                  </NuxtLink>

                  <!-- 3depth -->
                  <v-expansion-panel-text
                    v-for="(depth3, k) in getChild(depth2.id)"
                    :key="k"
                    :class="{ current: isCurrent(depth3.link) }"
                    ><NuxtLink :to="`${depth3.link}`">{{ depth3.name }}</NuxtLink></v-expansion-panel-text
                  >
                  <!-- // 3depth -->
                </v-expansion-panel>
              </v-expansion-panels>
              <!-- // 2depth -->
            </v-expansion-panel-text>
          </v-expansion-panel>

          <div v-else class="v-expansion-panel lnb-item">
            <NuxtLink :to="item.link" class="v-expansion-panel-title">{{ item.name }}</NuxtLink>
          </div>
        </template>
        <!-- 25.05.16 자식 없음 옵션 추가 --end -->

      </v-expansion-panels>
    </div>
  </div>
</template>

<script setup>
/**
 * Props Options
 *
 * @String currentLink - route link data (ex. /sc/AL-MY-02-001)
 *
 */
import { ref, defineProps } from "vue";

const props = defineProps({
  currentLink: {
    type: String,
    default: "",
  },
});

const lnb1 = ref([0, 1, 2, 3, 4, 5]);

//lnb data
// The following items with IDs starting with "D" are temporary placeholders, indicating that these items do not yet have finalized IDs.
const lnbData = ref([
  { id: "AL-MY-05", name: "가입정보 관리", parentId: null },
  // { id: "D-05-001", name: "가입 정보 조회/변경", link: "", parentId: "AL-MY-05" },
  { id: "AL-MY-05-001-1", name: "가입 정보", link: "/sc/AL-MY-05-001", parentId: "AL-MY-05" },
  { id: "AL-MY-05-002", name: "가입 회선 관리", link: "/sc/AL-MY-05-002", parentId: "AL-MY-05" },
  { id: "AL-MY-05-005", name: "휴대폰 정보 등록", link: "/sc/AL-MY-05-005", parentId: "AL-MY-05" },
  // { id: "D-05-003", name: "유심/이심 변경 신청", link: "", parentId: "D-05-001" },

  { id: "AL-MY-03", name: "요금/납부", parentId: null },
  // { id: "AL-MY-03-001", name: "요금 바로 납부", link: "", parentId: "AL-MY-03" },
  { id: "AL-MY-03-002", name: "청구요금 조회", link: "", parentId: "AL-MY-03" },
  {
    id: "AL-MY-03-002-1",
    name: "청구 요금 보기",
    link: "/sc/AL-MY-03-002",
    parentId: "AL-MY-03-002",
  },
  {
    id: "AL-MY-03-004",
    name: "청구서 받는 방법 변경",
    link: "/sc/AL-MY-03-004",
    parentId: "AL-MY-03-002",
  },
  { id: "AL-MY-03-005", name: "청구서 재발행", link: "/sc/AL-MY-03-005", parentId: "AL-MY-03-002" },

  { id: "AL-MY-02", name: "사용 현황", parentId: null },
  { id: "AL-MY-02-001", name: "실시간 사용량", link: "/sc/AL-MY-02-001", parentId: "AL-MY-02" },
  { id: "AL-MY-02-002", name: "실시간 요금", link: "/sc/AL-MY-02-002", parentId: "AL-MY-02" },
  { id: "AL-MY-02-003", name: "월별 사용량", link: "/sc/AL-MY-02-003", parentId: "AL-MY-02" },
  { id: "AL-MY-02-004", name: "로밍 이용 내역", link: "/sc/AL-MY-02-004", parentId: "AL-MY-02" },

  { id: "D-04", name: "납부 조회/변경", link: "", parentId: "AL-MY-03" },
  { id: "AL-MY-04-001", name: "납부내역 조회", link: "/sc/AL-MY-04-001", parentId: "D-04" },
  { id: "AL-MY-04-002", name: "납부 방법 변경", link: "/sc/AL-MY-04-002", parentId: "D-04" },
  { id: "AL-MY-04-003", name: "결제일 변경", link: "/sc/AL-MY-04-003", parentId: "D-04" },
  { id: "D-04-004", name: "입금 전용 계좌 발급", link: "", parentId: "D-04" },

  { id: "AL-MY-06", name: "분실/정지/해제", parentId: null },
  {
    id: "AL-MY-06-001",
    name: "휴대폰(유심) 분실 등록/해제",
    link: "/sc/AL-MY-06-001",
    parentId: "AL-MY-06",
  },
  { id: "AL-MY-06-004", name: "일시정지/해제", link: "/sc/AL-MY-06-004", parentId: "AL-MY-06" },
  { id: "AL-MY-07-001", name: "유심보호서비스 신청/해지", link: "/sc/AL-MY-07-001", parentId: null },
]);

//lnb filter deps2, deps3
const getChild = (parentId) => {
  return lnbData.value.filter((item) => item.parentId === parentId);
};

//lnb open value
const findDeps1 = (link) => {
  let currentItem = lnbData.value.find((item) => item.link === link);
  while (currentItem && currentItem.parentId) {
    currentItem = lnbData.value.find((item) => item.id === currentItem.parentId);
  }
  return deps1List.value.findIndex((item) => item.id === currentItem?.id);
};

const deps1List = computed(() => lnbData.value.filter((item) => item.parentId === null));
const deps1 = ref(findDeps1(props.currentLink));

console.log(deps1List.value)

//lnb add class 'current'
const isCurrent = (link) => {
  if (props.currentLink == "") return false;
  return link === props.currentLink;
};

//25.05.16 자식 없음 옵션 추가
const isLeaf = (id) => {
  return getChild(id).length === 0;
};


</script>
