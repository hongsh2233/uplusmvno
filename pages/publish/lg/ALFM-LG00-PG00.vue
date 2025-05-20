<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">
        알닷에 가입하실 회원님의<br class="pc_hide" />
        유형을 선택해 주세요
      </div>

      <div class="section">
        <RadioActive :data="selectedOptions" @checkItem="handleChecked" />
      </div>
      <!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01" :disabled="!isButtonActive">다음으로</button>
            </div>
          </div>
        </div>
      </div>
      <!-- // bottom_float -->
    </div>
    <!-- // content -->
  </div>
  <!-- // container -->
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

interface OptionItem {
  checked: boolean;
  id: string;
  value: string;
  info: string;
  img: string;
}

interface SelectedOptions {
  option: { type: string; itemList: number };
  data: OptionItem[];
}

const emit = defineEmits(["setLayout"]);

const layout = reactive({
  header: "sub2",
  footer: "none",
  title: "회원 유형 선택",
  floatMenu: "none",
});

const selectedOptions: Ref<SelectedOptions> = ref({
  option: { type: "ty08", itemList: 1 },
  data: [
    {
      checked: false,
      id: "ty08_radio_01",
      value: "14세 이상 개인",
      info: "※외국인도 가입하실 수 있어요",
      img: "/images/component/thumb_fourteen_more.png",
    },
    {
      checked: false,
      id: "ty08_radio_02",
      value: "14세 미만 개인",
      info: "※외국인도 가입하실 수 있어요",
      img: "/images/component/thumb_fourteen_less.png",
    },
  ],
});

const isButtonActive: Ref<boolean> = ref(false);

function handleChecked(e: string): void {
  isButtonActive.value = selectedOptions.value.data.some((item) => {
    if (e === item.id) {
      item.checked = true;
      return true;
    } else {
      item.checked = false;
      return false;
    }
  });
}

onMounted(() => {
  emit("setLayout", layout);
});
</script>
