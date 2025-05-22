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
      </div>
    </div>
    <Accodian title="꼭 알아두세요!" styleClass="ro acco-notice" :isExpanded="true">
      <template #content>
        <ul class="text-list bull">
          <li>다른 데이터 및 음성통화 해외로밍 요금제와 중복으로 이용할 수 없습니다.</li>
          <li>데이터 해외로밍 요금제 가입 시, 데이터로밍 차단 서비스는 자동으로 해지됩니다.</li>
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

const cardObject1 = ref([
  {
    sub: "",
    chip: "",
    url: "",
    list: [
      { name: "신청 회선", value: "010-78**-88**" },
      { name: "부가 서비스명", value: "데이터로밍차단" },
      { name: "금액", value: "무료" },
    ],
  },
]);
</script>
