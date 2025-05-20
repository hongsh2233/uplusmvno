<template>
  <Transition name="popupNormal">
    <div class="pop_layer" :class="[popType, { open: isOpen, close: isOpen }]" v-if="isOpen">
      <div @focus="focus" tabindex="0"></div>
      <div class="pop_wrap" ref="popWrap" tabindex="0">
        <div class="pop_header">
          <NuxtLink v-if="titleLink" :to="titleLink"><h3 v-html="title" /></NuxtLink>
          <h3 v-else v-html="title" />
        </div>

        <div class="pop_content">
          <slot></slot>
        </div>

        <div v-if="isPopFooter" class="pop_footer">
          <div v-if="!isPopCustom" 
            class="btn-area" 
            :class="{'use-cancle': showCancelButton && showConfirmButton}"
          >
            <button
              v-if="showCancelButton"
              type="button"
              class="btn-rounded white"
              @click="clickCancel"
            >
              {{ cancelText }}
            </button>
            <button
              v-if="showConfirmButton"
              type="button"
              class="btn-rounded primary"
              @click="clickConfirm"
              :disabled="confirmDisabled"
            >
              {{ confirmText }}
            </button>
          </div>
          <slot v-else name="footer"></slot>
        </div>
        <button type="button" class="pop_close" @click="closePopupLayer">
          <span class="blind">팝업 닫기</span>
        </button>
      </div>
      <div @focus="focus" tabindex="0"></div>
    </div>
  </Transition>
</template>

<script setup>
/**
 * Props Options
 *
 * @boolean isOpen - 팝업 열기, 닫기 여부
 * @string popType - 팝업 형태
 * @string title - 팝업 타이틀
 * @boolean showConfirmButton - 하단 확인 버튼
 * @boolean confirmDisabled - 하단 확인 버튼 disabled
 * @string confirmText - 하단 확인 텍스트
 * @boolean showCancelButton - 하단 취소 버튼
 * @boolean cancelText - 하단 취소 텍스트
 * @boolean isPopFooter - 팝업 푸터 여부
 * @boolean isPopCustom - 팝업 푸터 커스텀 여부
 *
 */

/**
 * Emit Options
 *
 * @function confirm - 팝업 확인 버튼
 * @function cancel - 팝업 취소 버튼
 * @function close - 팝업 닫기 버튼
 *
 */

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  popType: {
    type: String,
    default: "normal",
  },
  title: {
    type: String,
  },
  titleLink: {
    type: String,
  },
  showConfirmButton: {
    type: Boolean,
    default: true,
  },
  confirmDisabled: {
    type: Boolean,
    default: false,
  },
  showCancelButton: {
    type: Boolean,
    default: false,
  },
  confirmText: {
    type: String,
    default: "확인",
  },
  cancelText: {
    type: String,
    default: "취소",
  },
  isPopFooter: {
    type: Boolean,
    default: true,
  },
  isPopCustom: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:isOpen", "close", "confirm", "cancel"]);

const closePopup = () => {
  emit("update:isOpen", false);
};

const closePopupLayer = () => {
  emit("close");
  closePopup();
};

const clickConfirm = () => {
  emit("confirm");
  closePopup();
};

const clickCancel = () => {
  emit("cancel");
  closePopup();
};

watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      scroll.noScroll();
    } else {
      scroll.scroll();
    }
  }
);
</script>
