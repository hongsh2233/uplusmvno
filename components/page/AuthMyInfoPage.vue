<template>
  <v-expansion-panels class="acd_wrap" v-model="acd">
    <v-expansion-panel class="acd_item ty05">
      <div class="acd_title">
        <v-expansion-panel-title>이용 중인 통신사 요금 안내</v-expansion-panel-title>
      </div>
      <div class="acd_panel">
        <v-expansion-panel-text>
          <div class="form_wrap">
            <div class="form_group">
              <strong class="form_label">이용기간</strong>
              <div class="form_item">
                2024년 3월 1일(금) ~ 29일(금)(개통일)
              </div>
            </div>
            <div class="form_group">
              <div class="form_row">
                <strong class="form_label">서비스 이용 요금</strong>
                <strong class="form_right price">42,328원</strong>
              </div>
              <div class="form_item">
                <div class="table ty04">
                  <table>
                    <caption>통신요금정보</caption>
                    <colgroup>
                      <col style="width:35%" />
                      <col style="width:65%" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">기본료</th>
                        <td class="num"><b>38,480원</b></td>
                      </tr>
                      <tr>
                        <th scope="row">국내통화료</th>
                        <td class="num"><b>0원</b></td>
                      </tr>
                      <tr>
                        <th scope="row">국제통화료</th>
                        <td class="num"><b>0원</b></td>
                      </tr>
                      <tr>
                        <th scope="row">부가서비스</th>
                        <td class="num"><b>0원</b></td>
                      </tr>
                      <tr>
                        <th scope="row">기타사용료</th>
                        <td class="num"><b>0원</b></td>
                      </tr>
                      <tr>
                        <th scope="row">부가세</th>
                        <td class="num"><b>38,480원</b></td>
                      </tr>
                      <tr>
                        <th scope="row">미리납부금액</th>
                        <td class="num"><b>38,480원</b></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <ul class="text_list bull">
            <li>사용하신 요금 및 기타 사용료는 신청하신 파트너사의 첫 달 이용요금과 합산하여 청구합니다.</li>
            <li>기타사용료는 소액결제, 위약금액, 할인금액을 모두 포함한 사용료 입니다.</li>
          </ul>
        </v-expansion-panel-text>
      </div>
    </v-expansion-panel>

    <v-expansion-panel class="acd_item ty05">
      <div class="acd_title">
        <v-expansion-panel-title>휴대폰 남은 할부금 및 기타</v-expansion-panel-title>
      </div>
      <div class="acd_panel">
        <v-expansion-panel-text>
          <div class="form_wrap">
            <div class="form_group">
              <!-- <div class="form_row">
                <strong class="form_label">휴대폰 남은 할부금</strong>
                <strong class="form_right price">66,260원</strong>
              </div> -->
              <div class="form_item">
                <div class="table ty04">
                  <table>
                    <caption>통신요금정보</caption>
                    <colgroup>
                      <col style="width:35%" />
                      <col style="width:65%" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">휴대폰 남은 할부금</th>
                        <td class="num"><b>66,260원</b></td>
                      </tr>
                      <tr>
                        <th scope="row">체납금액</th>
                        <td class="num"><b>0원</b></td>
                      </tr>
                      <tr>
                        <th scope="row">할인반환금</th>
                        <td class="num"><b>246,900원</b></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <ul class="text_list bull">
            <li>휴대폰 남은 할부금이 있는 경우 변경 전 통신사에서 청구됩니다.</li>
            <li>체납금액 존재 시 번호이동 가입 불가합니다.</li>
            <li>이전 통신사에서 약정 기간이 끝나지 않았을 때, 번호이동 하시는 경우 할인반환금이 발생할 수 있습니다.</li>
          </ul>
        </v-expansion-panel-text>
      </div>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
import { ref } from 'vue'

const acd = ref([0])
</script>
