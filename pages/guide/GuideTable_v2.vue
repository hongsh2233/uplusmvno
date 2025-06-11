<template>
  <table class="pub-status-table">
    <tbody>
      <tr>
        <th class="total"><button @click="onShowFilterHandler('total')">전체</button></th>
        <td>{{ state.count.total }}</td>
        <th class="before"><button @click="onShowFilterHandler('before')">진행전</button></th>
        <td>{{ state.count.before }}</td>
        <th class="ing"><button @click="onShowFilterHandler('ing')">진행중</button></th>
        <td>{{ state.count.ing }}</td>
        <th class="end"><button @click="onShowFilterHandler('end')">퍼블완료</button></th>
        <td>{{ state.count.end }}</td>
        <th class="hid"><button @click="onShowFilterHandler('hid')">삭제됨</button></th>
        <td>{{ state.count.hid }}</td>
        <th class="stop"><button @click="onShowFilterHandler('stop')">보류중</button></th>
        <td>{{ state.count.stop }}</td>
        <th class="exclude"><button @click="onShowFilterHandler('exclude')">대상아님</button></th>
        <td>{{ state.count.exclude }}</td>
        <th class="rework"><button @click="onShowFilterHandler('rework')">재작업</button></th>
        <td>{{ state.count.rework }}</td>
        <th class="rate"><span>진행률</span></th>
        <td>{{ state.count.rate }} %</td>
        <td>※ 배포일 열에 날짜가 들어가 있는걸로 진행 부탁 드립니다. (그 외에는 아직 검수 반영중입니다.)</td>
      </tr>
    </tbody>
  </table>
  <table
    class="pub-work-table"
    :class="{
      'only-show-total': showTableFilter === 'total' || showTableFilter === null,
      'only-show-before': showTableFilter === 'before',
      'only-show-ing': showTableFilter === 'ing',
      'only-show-end': showTableFilter === 'end',
      'only-show-hid': showTableFilter === 'hid',
      'only-show-stop': showTableFilter === 'stop',
      'only-show-exclude': showTableFilter === 'exclude',
      'only-show-rework': showTableFilter === 'rework',
    }"
  >
    <thead v-if="data.length >= 0 && data[0]">
      <tr>
        <th
          v-for="key in Object.keys(data[0])"
          :key="key"
          :class="{
            'th-id': key === '화면ID',
            'th-date': key === '배포일' || key === '수정일' || key === '시작일' || key === '완료일',
            'th-publisher': key === '담당자',
            'th-status': key === '진행상태',
            'th-path': key === 'PATH',
            'th-new': key === '구분',
            'th-etc': key === '비고',
          }"
        >
          {{ key }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in data"
        v-if="data.length >= 1"
        :class="{
          ref: item['진행상태'] === '참고', //#eafffd
          before: item['진행상태'] === '진행전', //#fff
          ing: item['진행상태'] === '진행중', //#edffdd
          hid: item['진행상태'] === '삭제됨', //#444
          stop: item['진행상태'] === '보류중', //#777
          exclude: item['진행상태'] === '대상아님', //#777
          end: item['진행상태'] === '퍼블완료', //#53b100
          rework: item['진행상태'] === '재작업', //#ffe5f2
        }"
      >
        <td
          v-for="key in Object.keys(item)"
          :key="key"
          :class="[
            (key === '화면ID' || key === '시작일' || key === '완료일' || key === '진행상태' || key === '담당자') &&
              'ta-c',
            key === '진행상태' && 'cell-status',
            key === '화면ID' && item['구분'] === '신규' && 'cell-new',
            key === '화면ID' && item['구분'] === '개선' && 'cell-renew',
            key === '구분' && 'cell-gubun',
          ]"
        >
          <template v-if="key === 'PATH' && item[key] && item['진행상태'] !== '진행전'">
            <!-- <NuxtLink :to="(item[key] as string)" target="_blank">
              <span>{{ item[key] }}</span>
            </NuxtLink> -->
            <template v-if="!Array.isArray(item[key])">
              <NuxtLink :to="(item[key] as string)" target="_blank">
                <span>{{ item[key] }}</span>
              </NuxtLink>
            </template>
            <template v-if="Array.isArray(item[key]) && item[key].length > 0">
              <div class="popup-list-wrap">
                <ul>
                  <li v-for="(obj, index) in item[key]" :key="obj.id">
                    <p v-if="obj.id === '0'">
                      <template v-if="item[key][0] && item[key][0].noLink">
                        {{ item[key][0].url }}
                      </template>
                      <template v-else>
                        <NuxtLink :to="obj.url" target="_blank">
                          {{ item[key][0].url }}
                        </NuxtLink>
                      </template>
                    </p>
                    <p v-else-if="obj.type === 2">
                      <span class="popup-title">{{ obj.name }}</span>
                      <NuxtLink :to="`${item[key][0].url}?popup=${obj.id}`" target="_blank">
                        <span class="badge type-pc">PC</span>
                      </NuxtLink>

                      <span class="bar">|</span>

                      <!-- <NuxtLink
                        :to="`${item[key][0].url}-${Number(obj.id) < 10 ? '0' + obj.id : obj.id}`"
                        target="_blank"
                      > -->
                      <NuxtLink
                        :to="obj.url ? obj.url : `${item[key][0].url}-${Number(obj.id) < 10 ? '0' + obj.id : obj.id}`"
                        target="_blank"
                      >
                        <span class="badge type-mobile">MOBILE</span>
                      </NuxtLink>
                    </p>
                    <p v-else>
                      <template v-if="!obj.url?.includes('?')">
                        <span class="popup-title">{{ obj.name }}</span>
                        <NuxtLink :to="`${item[key][0].url}?popup=${obj.id}`" target="_blank">
                          <span class="badge type-pc-mobile">PC &#8226; MOBILE</span>
                        </NuxtLink>
                      </template>
                      <template v-else>
                        <span class="popup-title">CASE{{ obj.id }}: </span>
                        <NuxtLink :to="obj.url" target="_blank">
                          <span class="badge type-pc-mobile-page">{{ obj.name }}</span>
                        </NuxtLink>
                      </template>
                    </p>
                  </li>
                </ul>
              </div>
            </template>
            <!-- <template v-else-if="item[key] && item[key].length > 0">
              <ul>
                <li>
                  123
                  <NuxtLink :to="(item[key] as string)" target="_blank">
                    <span>{{ data.name }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </template> -->
          </template>
          <template
            v-else-if="
              key === 'PATH' &&
              !item[key] &&
              item['화면ID'] &&
              item['진행상태'] !== '진행전' &&
              item['진행상태'] !== '진행중'
            "
          >
            <NuxtLink :to="`/ro/${(item['화면ID'] as string)}`" target="_blank">
              <span>{{ `/ro/${item["화면ID"]}` }}</span>
            </NuxtLink>
          </template>
          <template
            v-else-if="
              key === 'PATH' &&
              item[key] &&
              item['진행상태'] !== '진행전' &&
              (item['진행상태'] === '진행전' || item['진행상태'] === '진행중')
            "
          >
            <span>{{ item[key] }}</span>
          </template>
          <template
            v-else-if="
              key === 'PATH' &&
              !item[key] &&
              item['화면ID'] &&
              (item['진행상태'] === '진행전' || item['진행상태'] === '진행중')
            "
          >
            <span>{{ `/ro/${item["화면ID"]}` }}</span>
          </template>
          <template v-else-if="key === '비고' && item[key]">
            <div v-html="item[key]"></div>
          </template>
          <template v-else-if="key === '수정일' && item[key]">
            <span v-html="getModifyInfoDate(String(item[key]))"></span>
          </template>
          <template v-else-if="!Array.isArray(item[key])">
            <span v-html="item[key]"></span>
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
interface Path {
  id: string;
  name: string;
  url?: string;
  type?: string | number;
  noLink?: boolean;
}
interface Item {
  [key: string]: string | number | null | Path[];
}
// Props 타입 정의
const props = defineProps<{
  data: Item[];
}>();
const showTableFilter = ref<string | null>("total");
const state = reactive({
  count: {
    before: 0,
    ing: 0,
    hid: 0,
    stop: 0,
    exclude: 0,
    end: 0,
    rework: 0,
    total: 0,
    rate: 0,
  },
});

props.data.map((item) => {
  switch (item["진행상태"]) {
    case "진행전": {
      state["count"]["before"] += 1;
      break;
    }
    case "진행중": {
      state["count"]["ing"] += 1;
      break;
    }
    case "삭제됨": {
      state["count"]["hid"] += 1;
      break;
    }
    case "보류중": {
      state["count"]["stop"] += 1;
      break;
    }
    case "대상아님": {
      state["count"]["exclude"] += 1;
      break;
    }
    case "퍼블완료": {
      state["count"]["end"] += 1;
      break;
    }
    case "재작업": {
      state["count"]["rework"] += 1;
      break;
    }
  }
});

for (const key in state.count) {
  if (key === "ing" || key === "before" || key === "end") {
    state.count.total += state.count[key];
  }
}

state.count.rate = Number(((state.count.end / state.count.total) * 100).toFixed(2));

const onShowFilterHandler = (state: string | null) => {
  showTableFilter.value = state;
};

const getModifyInfoDate = (num: string) => {
  const arrDates = num
    .trim()
    .replaceAll("\n", "")
    .split(",")
    .filter((a) => {
      return a.trim() != "" && a.trim();
    });
  let strDates = "";
  arrDates.forEach((a) => {
    const dn = Number(a.trim()) * 1000;
    const dateObj = new Date(dn);
    strDates += `<button onclick="copyDateNumber(${dn / 1000})"><b>${dateObj.getFullYear()}-${
      dateObj.getMonth() + 1
    }-${dateObj.getDate()}</b></button>`;
  });

  // @ts-ignore;
  window.copyDateNumber = (textToCopy) => {
    console.log(textToCopy);
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("복사되었습니다: " + textToCopy);
    });
  };
  return strDates;
};
</script>
<style lang="scss" scoped>
@use "@/assets/scss/guide/pub_guide_table.scss" as *;
</style>
