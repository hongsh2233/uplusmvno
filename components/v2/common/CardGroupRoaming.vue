<template>
  <div class="content-item__wrap" :class="className">
    <div v-for="(items, i) in cardObject" :key="i" class="content-item">
      <div class="content-inner">
        <div v-if="items.title" class="cont-head fl-sb">
          <h3 class="cont-title">
            <!-- {{ items.title }} -->
            <span v-html="items.title" />
            <span v-if="items.sub" class="sub">{{ items.sub }}</span>
          </h3>

          <div class="chips-wrap" v-if="Array.isArray(items.chip) && items.chip.length > 0">
            <template v-for="(btnItem, index) in items.chip">
              <template v-if="items.url">
                <NuxtLink :href="btnItem.url" class="btn-rounded chip">
                  {{ btnItem.name }}
                </NuxtLink>
              </template>
              <template v-else>
                <button type="button" class="btn-rounded chip" @click="_onClickChip(btnItem.value)">
                  {{ btnItem.name }}
                </button>
              </template>
            </template>
          </div>
          <div class="chips-wrap" v-else-if="typeof items.chip === 'string' && items.chip.length > 0">
            <template v-if="items.url">
              <NuxtLink :to="items.url" class="btn-rounded chip">
                {{ items.chip }}
              </NuxtLink>
            </template>
            <template v-else>
              <button type="button" class="btn-rounded chip" @click="_onClickChip(items.chip)">
                {{ items.chip }}
              </button>
            </template>
          </div>
        </div>
        <ul class="card-group">
          <li v-for="(item, j) in items.list" :key="j" :class="[item.class && item.class.list]">
            <div class="name" :class="[item.class && item.class.title]">
              <slot name="name" :item="item">{{ item.name }}</slot>
              <p v-if="item.nameDesc" class="description-sub" v-html="item.nameDesc"></p>
            </div>
            <div class="value" :class="[item.class && item.class.value]">
              <slot :item="item">{{ item.value }}</slot>
              <p v-if="item.description" class="description">{{ item.description }}</p>
            </div>
          </li>
        </ul>
        <ul v-if="items.notice" class="text-list bull">
          <li v-for="(notice, noticeIndex) in items.notice" :key="noticeIndex">
            {{ notice }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Props Options
 *
 * @function cardObject - 목업 데이터
 * @function dataSelectList - 팝업 목업 데이터
 * @string className - 클래스 추가 옵션
 * @boolean isPopFooter - 푸터 여부
 * @boolean isPopCustom - 푸터 커스텀 여부
 *
 */

const emit = defineEmits<{
  (e: "onClickChip", val?: string | number): void;
}>();

const _onClickChip = (val: string | number) => {
  emit("onClickChip", val);
};

const router = useRouter();
const props = defineProps({
  cardObject: {
    type: [Array, Object],
    required: true,
  },
  dataSelectList: {
    type: [Array, Object],
    default: () => {},
  },
  className: {
    type: String,
    default: "",
  },
  isPopFooter: {
    type: Boolean,
    default: false,
  },
  isPopCustom: {
    type: Boolean,
    default: false,
  },
});
// 팝업
const isOpen = ref(false);
const popupOpen = (items: any) => {
  isOpen.value = true;
};
</script>
