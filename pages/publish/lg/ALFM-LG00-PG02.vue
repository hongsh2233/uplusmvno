<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info mgb0">본인인증 수단을 <br class="pc_hide" />선택해 주세요</div>

      <div class="section">
        <span class="sub"
          >※ 만 14세 미만인 고객님께서는<br class="pc_hide" />
          법정대리인의 본인확인이 추가로 필요합니다.</span
        >
        <RadioActive :data="selectedOptions" @checkItem="handleChecked" class="mgt32" />
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

// 타입 정의
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

// 레이아웃 정의
const emit = defineEmits(["setLayout"]);
const layout = reactive({
  header: "sub2",
  footer: "none",
  title: "본인인증 수단 선택",
  floatMenu: "none",
});

// 상태 변수 정의
const selectedOptions: Ref<SelectedOptions> = ref({
  option: { type: "ty08", itemList: 1 },
  data: [
    {
      checked: false,
      id: "ty08_radio_01",
      value: "휴대폰 인증",
      info: "만 14세 미만 자녀 명의의<br class='pc_hide' /> 휴대폰으로 인증 가능합니다",
      img: "/images/component/thumb_certified.png",
    },
    {
      checked: false,
      id: "ty08_radio_02",
      value: "아이핀(i-pin)",
      info: "만 14세 미만 자녀 명의의 휴대폰이 없는<br class='pc_hide' /> 경우 아이핀으로 인증 가능합니다",
      img: "/images/component/thumb_ipin.png",
    },
  ],
});

const isButtonActive: Ref<boolean> = ref(false);

// 체크 이벤트 핸들러
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

// 컴포넌트가 마운트될 때 실행
onMounted(() => {
  emit("setLayout", layout);
});
</script>
