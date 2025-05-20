<template>
  <div class="first-content-item">
    <div class="content-item">
      <div class="content-inner">
        <div class="cont-head">
          <h3 class="cont-title-main">
            해외 로밍 요금제 설정 정보를<br />
            <strong class="txt-primary">변경</strong>하시겠어요?
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
      </div>
    </div>
    <Accodian title="꼭 알아두세요!" styleClass="ro acco-notice" :isExpanded="true">
      <template #content>
        <ul class="text-list bull">
          <li>방문 국가는 변경할 수 없어요</li>
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
              이전
            </NuxtLink>

            <button
              class="btn-rounded primary"
              :class="{ disabled: disabled }"
              :disabled="disabled"
              @click="emit('click')"
            >
              다음으로
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

const cardObject1 = ref([
  {
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "신청 회선", value: "010-78**-88**" },
      { name: "요금제명", value: "로밍패스 3GB" },
      { name: "금액", value: "29,000원", description: "(부가세포함)" },
      { name: "방문 국가", value: "미국" },
      { name: "기준 시간", value: "한국 시간" },
      { name: "이용 시작 일시", value: "2025.05.01 20:00" },
      { name: "가입일", value: "2025.06.20" },
    ],
  },
]);
</script>
