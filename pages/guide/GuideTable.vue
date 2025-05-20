<template>
  <div v-for="(item, i) in normalizedData" :key="i">
    <h2>{{ item.name }}</h2>
    <table>
      <caption>list</caption>
      <colgroup>
        <col
          v-for="(_, index) in item.headers ?? defaultHeaders"
          :key="index"
          :style="colgroup?.[index] ? `width: ${colgroup[index]}` : null"
          :span="!colgroup?.[index] ? 1 : undefined"
        />
      </colgroup>
      <thead>
        <tr>
          <th
            v-for="header in (item.headers ?? defaultHeaders)"
            :key="header.key"
          >
            {{ header.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(content, j) in item.children"
          :key="j"
          :class="content.state"
        >
          <td
            v-for="header in (item.headers ?? defaultHeaders)"
            :key="header.key"
            :class="header.key.includes('state') ? 'marker' : ''"
          >
            <!-- NuxtLink -->
            <template v-if="isLinkField(header.key)">
              <NuxtLink :to="content.row?.[header.key]" target="_blank">
                {{
                  content.row?.[`${header.key}Name`] &&
                  content.row?.[`${header.key}Name`].trim()
                    ? content.row?.[`${header.key}Name`]
                    : content.row?.[header.key]
                }}
              </NuxtLink>
            </template>

            <!-- HTML -->
            <template v-else-if="isHtmlField(header.key)">
              <div v-html="content.row?.[header.key]" />
            </template>

            <!-- 기본 텍스트 -->
            <template v-else>
              {{ content.row?.[header.key] }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, watch, defineProps, defineEmits, ref, watchEffect } from "vue";

  // 타입 정의
  interface TableHeader {
    key: string;
    text: string;
  }

  interface TableRow {
    [key: string]: string;
  }

  interface TableContent {
    state: string;
    row: TableRow;
  }

  interface TableGroup {
    name: string;
    headers?: TableHeader[];
    children?: TableContent[];
  }

  interface PageInfoPayload {
    total: number;
    end: number;
    per: number | string;
  }

  // Props 타입 정의
  const props = defineProps<{
    data: TableGroup[] | TableGroup;
    colgroup?: string[];
  }>();

  // Emits 정의
  const emit = defineEmits<{
    (e: "updatePageInfo", payload: PageInfoPayload): void;
  }>();

  const normalizedData = ref<TableGroup[]>([]);

  watchEffect(() => {
    normalizedData.value = Array.isArray(props.data) ? props.data : [props.data];
  });

  const defaultHeaders: TableHeader[] = [
    { key: "1deps", text: "1 Depth" },
    { key: "2deps", text: "2 Depth" },
    { key: "3deps", text: "3 Depth" },
    { key: "4deps", text: "4 Depth" },
    { key: "url", text: "URL" },
    { key: "state", text: "상태" },
    { key: "date", text: "Date" },
    { key: "desc", text: "비고" }
  ];

  function isLinkField(header: string): boolean {
    return ["url", "링크", "Link", "Path"].includes(header);
  }

  function isHtmlField(header: string): boolean {
    return ["state", "desc", "file", "issue"].includes(header);
  }

  function calculatePageInfo(): void {
    if (!normalizedData.value.length) return;

    let total = 0;
    let end = 0;
    let mod = 0;

    normalizedData.value.forEach((group) => {
      if (!group.children) return;

      group.children.forEach((item) => {
        if (item.state === "hid") return;
        total += 1;
        if (item.state === "end") end += 1;
        if (item.state === "mod") mod += 1;
      });
    });

    const per = total === 0 ? 0 : (((end + mod) * 100) / total).toFixed(1);

    emit("updatePageInfo", {
      total,
      end: end + mod,
      per,
    });
  }

  onMounted(calculatePageInfo);
  watch(() => props.data, calculatePageInfo, { deep: true });
</script>
