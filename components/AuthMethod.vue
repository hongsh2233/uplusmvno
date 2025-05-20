<template>
  <div class="form_group">
    <strong class="form_label">인증방법</strong>
    <div class="cir_icon_radio">
      <ul>
        <li v-for="item in checkValues" :key="item.id">
          <div class="icon_link" :class="item.val.slice(5)">
            <input
              type="radio"
              :id="item.val"
              name="authmethod"
              :value="item.val"
              :checked="item.isChecked"
              @change="isChangeText(item.id)"
            />
            <label :for="item.val">
              <span v-if="item.method === '카카오'">{{ item.method }}톡 인증</span>
              <span v-else>{{ item.method }} 인증</span>
            </label>
          </div>
        </li>
      </ul>
    </div>

    <section v-if="authText" class="auth_notice_info">
      <div v-if="authText === '신용카드'" class="box_gray">
        <h3 class="tit02">유의사항</h3>
        <ul class="text_list bull">
          <li>
            본인명의의 신용카드로 인증을 진행해 주세요. 체크카드로는 본인인증을 할 수 없습니다.
          </li>
          <li>만 19세 미만은 신용카드로 인증할 수 없으니, 다른 인증방법을 선택해 주세요.</li>
        </ul>
      </div>
      <div v-else class="box_gray">
        <h3 class="tit02">유의사항</h3>
        <ul class="text_list bull">
          <li>
            인증이 정상적으로 진행되지 않을 경우 <strong>{{ authText }}</strong
            >인증서를 재발급 받으신 후 이용해 주세요.
          </li>
        </ul>
      </div>

      <div class="btn_group">
        <button type="button" class="btn lg c03" disabled>인증 요청하기</button>
      </div>

      <div v-if="authText !== '신용카드'" class="message_area">
        <h3 class="tit">
          인증 요청한 앱에서 서명절차를 마무리 하신 후<br class="pc" />
          아래 [인증 확인하기] 버튼을 눌러 주세요.
        </h3>
        <div class="line_list">
          <ul>
            <li>
              <div class="list_con">
                <span class="num">01</span>
                <span class="tit"
                  >선택한 서비스의 앱에서 인증 요청 메시지를 확인해 주세요. (푸시 메시지)</span
                >
                <span class="icon"
                  ><img src="/images/common/ico_push_message.png" alt="푸쉬  메세지 아이콘"
                /></span>
              </div>
            </li>
            <li>
              <div class="list_con">
                <span class="num">02</span>
                <span class="tit">앱 내에서 인증을 진행해 주세요.</span>
                <span class="icon"
                  ><img src="/images/common/ico_auth_doc.png" alt="인증 문서 아이콘"
                /></span>
              </div>
            </li>
            <li>
              <div class="list_con ty03">
                <span class="num">03</span>
                <span class="tit">인증 완료 후 아래의 [인증 확인하기]를 눌러 주세요.</span>
                <span class="icon"
                  ><img src="/images/common/ico_auth_cfm.png" alt="인증 확인 아이콘"
                /></span>
              </div>
            </li>
          </ul>
        </div>
        <div class="text_info">
          만약 푸시 메시지를 받지 못한 경우, {{ authText }}<em v-if="authText === '카카오'">톡</em
          ><em v-else>앱</em>을 직접 실행한 뒤 알림 내역을 확인해 주세요.
        </div>
      </div>

      <!-- 유심 교환 신청에 나오는 버튼 -->
      <div v-if="isUsimChange" class="btn_group mgt20">
        <button type="button" class="btn lg c03" disabled>인증 확인하기</button>
      </div>
      <!-- // 유심 교환 신청에 나오는 버튼 -->
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, defineEmits } from "vue";

interface AuthInfo {
  id: number;
  method?: string;
  val: string;
  isChecked: boolean;
}
const authText: Ref<string> = ref("");
const checkValues: Ref<AuthInfo[]> = ref([
  {
    id: 0,
    method: "카카오",
    val: "auth_kakao",
    isChecked: false,
  },
  {
    id: 1,
    method: "네이버",
    val: "auth_naver",
    isChecked: false,
  },
  {
    id: 2,
    method: "PASS",
    val: "auth_pass",
    isChecked: false,
  },
  {
    id: 3,
    method: "토스",
    val: "auth_toss",
    isChecked: false,
  },
  {
    id: 4,
    method: "신용카드",
    val: "auth_credit",
    isChecked: false,
  },
]);

const emit = defineEmits(["childCheckValues"]);
const isChangeText = (index: number): string => {
  if (checkValues.value[index]) {
    authText.value = checkValues.value[index].method || "";
    emit("childCheckValues", checkValues.value[index]);
  }
  return authText.value;
};

// 유심 교환 신청
const isUsimChange: Ref<boolean> = ref(true);

onMounted(() => {
  checkValues.value.forEach((el) => {
    if (el.isChecked) {
      authText.value = el.method || "";
    }
  });
});
</script>
