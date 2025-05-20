<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar -->
      <ProgressBar :barInfo="{ type: 'ty03', step: 2 }" />
      <!-- //progress bar -->

      <div class="page_info">
        청소년 보호를 위한 유해정보 차단<br class="pc_hide" />서비스 가입을 해주세요
      </div>

      <div class="section">
        <div class="box_gray legal_requirements">
          <p class="title">[청소년 유해정보 차단 서비스 법적 의무사항]</p>
          <p class="param">
            전기통신사업법 제 32조의 7 청소년 유해매체물 차단 관련 법률에 따라 청소년 가입고객은
            이용하시는 휴대폰에 유해정보 차단 앱을 의무적으로 설치 하셔야 합니다.
          </p>
          <p class="param">
            이에, 만 19세 이하 청소년 고객(또는 청소년 자녀를 둔 부모님)께서는 아래 유해정보 차단
            앱을 확인하시어, 휴대폰 사용 중 무분별하게 노출 될 수 있는 유해정보로부터 보호 받을 수
            있도록 설치를 부탁 드립니다.
          </p>
        </div>
      </div>

      <div class="section ty03">
        <div class="harmful-info">
          <p class="harmful-info-title"><em>[필수]</em> 청소년 유해정보 네트워크 차단</p>
          <dl class="harmful-info-dl">
            <div>
              <dt>서비스명</dt>
              <dd>네트워크 차단(무료)</dd>
            </div>
            <div>
              <dt>이용요금</dt>
              <dd>무료</dd>
            </div>
            <div>
              <dt>설명</dt>
              <dd>
                만 19세 미만 고객이 유해한 사이트에 접속 시, 네트워크가 자동으로 차단되는 서비스
                입니다.
              </dd>
            </div>
          </dl>
        </div>

        <div class="form_group">
          <div class="form_item">
            <v-expansion-panels class="acd_wrap" v-model="acd">
              <v-expansion-panel class="acd_item ty02">
                <div class="acd_title">
                  <div class="acd_tab">
                    <div class="check_st">
                      <input type="checkbox" id="check_consent01" name="" @click="allCheckAgree" />
                      <label for="check_consent01"
                        >청소년 유해정보 네트워크 차단 동의의 내용을 확인하였으며 그 내용에
                        동의합니다.
                      </label>
                    </div>
                  </div>
                </div>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
          <div class="error" v-if="!acd[0]">약관에 동의해 주세요</div>
        </div>
      </div>

      <div class="section ty03">
        <div class="harmful-info">
          <p class="harmful-info-title"><em>[필수]</em> 청소년 유해정보 차단 APP</p>

          <div class="radio_item ty01">
            <input type="radio" id="radio01_01" name="radio01" checked />
            <label for="radio01_01" class="box_line">
              <h3 class="tit02">자녀폰 지킴이(무료)</h3>
              <ul class="text_list bull">
                <li>유해 웹사이트 접속 및 유해 앱 실행 차단</li>
                <li>앱 사용 이력 확인</li>
              </ul>
            </label>
          </div>
          <div class="radio_item ty01 mgt12">
            <input type="radio" id="radio01_02" name="radio01" />
            <label for="radio01_02" class="box_line">
              <h3 class="tit02">자녀폰 지킴이(유료-월 2,200원)</h3>
              <ul class="text_list bull">
                <li>앱 사용 시간 관리</li>
                <li>자녀에게 위급한 상황이 있을 때 보호자에게 문자 메시지 전송</li>
                <li>자녀의 현재 위치 확인</li>
                <li>자녀의 휴대폰 분실 시, 원격으로 잠금</li>
                <li>차단할 사이트 등록 및 접속한 사이트 이력 확인</li>
              </ul>
            </label>
          </div>

          <dl class="harmful-info-dl">
            <div>
              <dt>서비스명</dt>
              <dd>자녀폰 지킴이</dd>
            </div>
            <div>
              <dt>이용요금</dt>
              <dd>무료 / 유료(월 2,200원)</dd>
            </div>
            <div>
              <dt>설명</dt>
              <dd>
                만 19세 미만 고객이 스마트폰 유해 정보에 노출되지 않도록 하고, 앱 사용 시간 관리 및
                자녀 안심 기능을 제공합니다.
              </dd>
            </div>
          </dl>
        </div>

        <p class="box_title">APP설치 안내</p>
        <ul class="text_list bull">
          <li>안드로이드 폰 : 구글플레이(또는 원스토어) 실행 후, 'U+자녀폰 지킴이' 설치</li>
          <li>아이폰 : 앱 스토어 실행 후 '사이버가디언' 설치</li>
          <li>
            차단 앱 종류 및 설치를 위한 자세한 내용은 방송통신이용자포털 와이즈유저
            홈페이지(<NuxtLink to="https://www.wiseuser.go.kr/usermain.do" target="_blank"
              >www.wiseuser.go.kr</NuxtLink
            >)나 포털에서 해당 서비스 검색하셔서 내용을 참조하시기 바랍니다.
          </li>
        </ul>
      </div>

      <div class="section ty03">
        <div class="form_group">
          <div class="form_item">
            <v-expansion-panels class="acd_wrap" v-model="acd">
              <v-expansion-panel class="acd_item ty02">
                <div class="acd_title">
                  <div class="acd_tab">
                    <div class="check_st">
                      <input type="checkbox" id="check_consent02" name="" @click="allCheckAgree" />
                      <label for="check_consent02"
                        >청소년 유해정보 차단 APP 이용 동의의 내용을 확인하였으며 그 내용에
                        동의합니다.
                      </label>
                    </div>
                  </div>
                </div>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
          <div class="error" v-if="!acd[1]">약관에 동의해 주세요</div>
        </div>
      </div>
      <!-- .section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01" :disabled="!isAllAgreed">다음으로</button>
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

const emit = defineEmits(["setLayout"]);
const layout = reactive({
  header: "sub2",
  footer: "none",
  title: "유해정보 차단 서비스 가입",
  floatMenu: "none",
});

// 동의
const acd: Ref<boolean[]> = ref([false, false]);
const isAllAgreed = computed(() => acd.value.every((val) => val));
function allCheckAgree(e: any) {
  const index = e.target.id === "check_consent01" ? 0 : 1;
  acd.value[index] = e.target.checked;
}

onMounted(() => {
  emit("setLayout", layout);
});
</script>
