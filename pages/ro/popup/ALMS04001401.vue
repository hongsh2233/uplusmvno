<template>
  <div class="first-content-item">
    <div class="content-item">
      <div class="content-inner">
        <div class="cont-head">
          <h3 class="cont-title-main">
            해외 로밍 부가 서비스를<br />
            <strong class="txt-primary">신청</strong>하시겠어요?
          </h3>
        </div>

        <div class="con_rounded">
          <CardGroup :card-object="cardObject1">
            <template #default="{ item }">
              <!-- 글씨 색상 class : txt-orange -->
              <p :class="item.class">
                {{ item.value }}
              </p>
            </template>
          </CardGroup>
        </div>

        <div class="form-box">
          <div class="title-area">
            <strong class="title">요금제 적용 기준 시간</strong>
          </div>

          <div class="btn-flex">
            <div v-for="item in radioData" :key="item.id" class="radio_item ty05">
              <input type="radio" name="radio01" :id="item.id" :value="item.value" v-model="radioSelected" />
              <label :for="item.id">{{ item.text }}</label>
            </div>
          </div>

          <div class="check-txt check_st">
            <input type="checkbox" id="checkbox01_02" name="" @click="handleTerms" />
            <label for="checkbox01_02">현지 시간을 함께 안내해요</label>
          </div>
        </div>
      </div>
    </div>
    <Accodian title="꼭 알아두세요!" styleClass="ro acco-notice" :isExpanded="true">
      <template #content>
        <ul class="text-list bull">
          <li>해외 로밍 중인 고객에게 국제전화 요금이 부과 됩니다.</li>
        </ul>
      </template>
    </Accodian>

    <div class="bottom_float on-selfcare">
      <div class="inner">
        <div class="float_btn_wrap">
          <div class="btn-area">
            <NuxtLink
              role="button"
              class="btn-rounded"
              :class="{ disabled: disabled }"
              :disabled="disabled"
              @click="emit('click')"
            >
              취소
            </NuxtLink>

            <button
              class="btn-rounded primary"
              :class="{ disabled: disabled }"
              :disabled="disabled"
              @click="emit('click')"
            >
              신청하기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardGroup from "@/components/v2/common/CardGroup";
import Accodian from "@/components/v2/common/Accodian";
import { useRouter } from "vue-router";

const router = useRouter();
const emit = defineEmits(["nextStep"]);

//라디오 목업
const radioData = ref([
  { id: "radio01_01", value: "로밍", checked: true, text: "로밍" },
  { id: "radio01_02", value: "여행", checked: false, text: "여행" },
  { id: "radio01_03", value: "출장", checked: false, text: "출장" },
  { id: "radio01_04", value: "미사용(국내연결음)", checked: false, text: "미사용(국내연결음)" },
]);
const radioSelected = ref(radioData.value[0].value);

const cardObject1 = ref([
  {
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "신청 회선", value: "010-78**-88**" },
      { name: "부가 서비스명", value: "로밍 안내방송" },
      { name: "금액", value: "무료" },
    ],
  },
]);
</script>
