<template>
  <div class="first-content-item">
    <div class="content-item">
      <div class="content-inner">
        <div class="cont-head">
          <h3 class="cont-title-main">
            해외 로밍 요금제를<br />
            <strong class="txt-primary">해지</strong>하시겠어요?
          </h3>
          <p class="cont-sub-title">로밍 이용기간 전에는 이용 요금이 청구되지 않아요.</p>
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
          <li>
            요금제 해지 시, 과도한 데이터 로밍 요금이 발생하는 것을 방지하기 위해 자동으로 [데이터로밍차단]
            서비스(무료)에 가입됩니다.
          </li>
        </ul>
      </template>
    </Accodian>

    <div class="bottom_float on-selfcare">
      <div class="inner">
        <div class="float_btn_wrap">
          <div class="btn-area">
            <NuxtLink
              role="button"
              class="btn-rounded type-outline"
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
              해지하기
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
      { name: "이용 기간", value: "최대 30일" },
      { name: "금액", value: "12,900원", description: "(부가세포함)" },
      { name: "방문 국가", value: "미국" },
      { name: "가입일", value: "2025.07.16" },
    ],
  },
]);
</script>
