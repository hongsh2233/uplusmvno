<template>
  <div class="container deps4" @click="closeTooltip">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="crp_wrap">
        <!-- LNB -->
        <PcLnb :currentLink="'/sc/AL-MY-07-001'" />
        <!-- // LNB -->

        <!-- contents -->
        <div class="crp_r">
          <h2 class="pc-title">{{ layout.title }}</h2>

          <div class="content-item">
            <div class="content-inner">
              <div class="cont-head title-main">
                <h3 class="cont-title-main">
                  유심보호서비스를<br />
                  <strong class="txt-primary">신청/해지</strong>하세요
                </h3>
              </div>
              <ul class="text-list bull text-list-content">
                <li>유심보호서비스를 신청하면 내 유심(USIM) 카드를 다른 기기에서 사용하지 못하도록 예방할 수 있어요.</li>
                <li><p class="import">유심보호서비스는 U+알뜰폰 사용 고객만 가능해요.</p></li>
              </ul>

              <div class="content-item item-nobox">
                <div class="btn-area">
                  <NuxtLink :to="'/sc/AL-MY-07-002'" class="btn-rounded btn-line">서비스 신청/해지</NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <div class="content-item">
            <div class="content-inner">
              <div class="cont-head">
                <h3 class="cont-title">유심보호서비스 안내</h3>
              </div>
              
              <div class="table">
                <table>
                  <caption>
                    휴대폰정보
                  </caption>
                  <colgroup>
                    <col/>
                    <col/>
                  </colgroup>
                  <thead>
                    <tr>
                      <td scope="col" class="txt-gray">이용요금</td>
                      <td scope="col" class="txt-gray">대상</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>무료</strong></td>
                      <td><strong>U+알뜰폰 사용고객</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul class="text-list bull dividers">
                <li>내 유심 카드 또는 eSIM을 다른 사람의 기기에서 사용할 수 없도록 차단할 수 있어요.</li>
                <li>해외로밍을 신청/이용할 수 없도록 제한할 수 있어요. 단, 월활한 이용을 위해 서비스 가입 후 반드시 기기 전원을 껐다가 다시 켜주세요.</li>
                <li>기업(법인) 고객의 경우 고객센터를 통해서만 가입 가능합니다.</li>
              </ul>
            </div>
          </div>
          <!-- // 로그인 후 -->
          <Accodian title="꼭 알아두세요!" styleClass="acco-notice" :isExpanded="true">
            <template #content>
              <ul class="text-list bull">
                <li>유심보호서비스를 신청하시면 음성 로밍차단, 데이터 로밍 차단 서비스도 함께 신청되어요. 해외로밍을 이용하시려면 서비스를 해지해 주세요.</li>
                <li>부가서비스를 가입할 때 등록하고 사용 중인 기기에만 적용되는 서비스예요. 이후에 기기를 바꿨다면 서비스를 반드시 해지하고 다시 가입해 주세요.</li>
                <li>서비스의 정상적인 작동을 위해서는 유심이 기기에 장착된 상태에서 신청을 진행해야 해요. 유심이 없는 상태에서 신청할 경우, 기능이 정상적으로 작동하지 않을 수 있어요.</li>
                <li>기기 고장으로 인해 유심(가입자 정보 저장)카드를 다른 기기에 꽂아 사용해야 하는 경우, 이전 내 명의로 개통한 기기에 한해 1회 기기 변경을 허용해요.</li>
                <li>번호를 바꾸거나 유심카드를 바꿔도 서비스는 유지돼요. (사용 중인 단말 유지시)</li>
                <li>유심 카드를 2개 꽂아 사용할 수 있거나, eSIM/유심 카드를 동시에 사용할 수 있는 듀얼심 기기(A)에서 새 듀얼심 기기(B)로 변경하는 경우, 먼저 '유심보호서비스'를 해지한 후 새 듀얼심 기기(B)에 유심 카드를 꽂아주세요. 해지하지 않고 꽂으면, 유심 카드 이용이 차단될 수 있어요. 유심 카드를 꽂은 새 듀얼심 기기(B)에서 '유심보호서비스'를 재가입해 주세요.</li>
                <li>듀얼심 기기가 아닌 기기에서 듀얼심 기기로 변경하는 경우, 듀얼심 기기에 유심 카드를 등록한 후 '유심보호서비스'를 해지하고 재가입해 주세요.</li>
                <li>원활한 이용을 위해 서비스 가입 후 기기 전원을 반드시 껐다가 다시 켜주세요.</li>
                <li>이미 내 명의로 개통한 기기로 1회 변경했거나 내 명의가 아닌 기기로 변경하는 경우 '유심보호서비스' 해지 후 기기 변경하고, 새 기기에서 재가입해 주세요.</li>
              </ul>
            </template>
          </Accodian>

          <!-- // bottom_button -->
        </div>
        <!-- // contents -->
      </div>
    </div>
  </div>
</template>

<script setup>
import PcLnb from "@/components/v2/common/PcLnb";
import Accodian from "@/components/v2/common/Accodian";

// 헤더 정보
const layout = ref({
  header: "sub",
  footer: "",
  floatMenu: "none",
  title: "유심보호서비스 신청/해지",
});

// HOOK
const emit = defineEmits(["setLayout"]);

onMounted(() => {
  emit("setLayout", layout);
});
</script>
