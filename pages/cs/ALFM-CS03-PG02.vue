<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="usim-area">
        <!-- 원칩 교체 신청 안내 박스 -->
        <div class="section">
          <div class="box_gray usim-info-box">
            <p class="title">
              <strong>정보 인증 후 U+ 알뜰폰 사용 고객님만 원칩 교체 신청을 할 수 있습니다.</strong>
            </p>
            <p class="caption">
              알닷을 아껴 주시고, 사용해 주시는 고객님들께 불편을 끼쳐 드린 점 고개 숙여 사과의
              말씀을 드립니다. 불량 유심을 가지고 계신 고객님께서는 교체 신청을 진행 해주시면 빠른
              시일 내에 정상 유심으로 배송드리겠습니다.
            </p>
          </div>
        </div>
        <!-- // 원칩 교체 신청 안내 박스 -->

        <!-- 본인인증 -->
        <div class="section">
          <div class="page_info">
            U+알뜰폰 고객 인증을 위해<br class="pc_hide" />
            본인 인증을 진행해 주세요.
          </div>

          <div class="btn_group">
            <button type="button" class="btn md c01">본인 인증</button>
          </div>
        </div>
        <div class="section">
          <div class="form_group">
            <strong class="form_label">이름</strong>
            <div class="form_item">
              <InputBox
                :option="{ placeholder: '본인 인증을 하면 자동 입력됩니다', readonly: true }"
              />
            </div>
          </div>

          <div class="form_group">
            <strong class="form_label">휴대폰 번호</strong>
            <div class="form_item">
              <InputBox
                :option="{ placeholder: '본인 인증을 하면 자동 입력됩니다', readonly: true }"
              />
            </div>
          </div>

          <div class="form_group">
            <strong class="form_label">통신사</strong>
            <div class="form_item">
              <InputBox
                :option="{ placeholder: '본인 인증을 하면 자동 입력됩니다', readonly: true }"
              />
            </div>
          </div>
        </div>
        <!-- // 본인인증 -->

        <!-- usim 정보입력 -->
        <div class="section">
          <div class="page_info">
            USIM 정보를<br class="pc_hide" />
            입력해 주세요.
          </div>
          <div class="info_input_img">
            <img
              src="/images/component/img_bar_code.png"
              alt="LG U+ 모두의 유심, 원칩 U+ 알뜰폰(MVNO) 공용, 바코드 예시 유심 모델명 K3620XX 유심 일련번호 00001234"
            />
          </div>

          <div class="form_group form-row">
            <strong class="form_label required">모델명</strong>
            <div class="radio_st">
              <input type="radio" id="K3620" name="radio01" />
              <label for="K3620">K3620</label>
            </div>
            <div class="radio_st">
              <input type="radio" id="K3630" name="radio01" checked />
              <label for="K3630">K3630</label>
            </div>
          </div>

          <div class="form_group form-row">
            <strong class="form_label required">일련번호</strong>
            <div class="form_item">
              <InputBox
                :option="{ placeholder: '본인 인증을 하면 자동 입력됩니다', disabled: true }"
              />
            </div>
          </div>

          <div class="btn_group">
            <button type="button" class="btn md c03">USIM 인증</button>
          </div>
        </div>
        <!-- // usim 정보입력 -->

        <!-- 배송정보 -->
        <div class="section">
          <div class="page_info">
            배송 정보를<br class="pc_hide" />
            입력해 주세요.
          </div>
          <div class="form_wrap">
            <div class="form_group">
              <strong class="form_label">주소</strong>
              <div class="form_item">
                <InputBox
                  :option="{ placeholder: '우편번호', disabled: true }"
                  @inputValue="console.log($event)"
                />
                <button type="button" class="btn md c03">우편번호 찾기</button>
              </div>
              <div class="form_item">
                <InputBox
                  :option="{ placeholder: '주소', disabled: true }"
                  @inputValue="console.log($event)"
                />
              </div>
              <div class="form_item">
                <InputBox
                  :option="{ value: '', placeholder: '상세주소 입력' }"
                  @inputValue="console.log($event)"
                />
              </div>
            </div>

            <div class="form_group">
              <strong class="form_label">배송 시 요청사항</strong>
              <div class="form_item">
                <button
                  type="button"
                  class="btn_select"
                  ref="btn_deliveryRequest"
                  @click="$refs.deliveryRequest.open"
                >
                  배송 시 요청사항 선택하기
                </button>
              </div>
              <div class="form_item">
                <InputBox
                  :option="{ placeholder: '40글자 이내로 입력' }"
                  @inputValue="console.log($event)"
                />
              </div>
              <PopupSelect
                ref="deliveryRequest"
                :option="{
                  data: 'deliveryRequest',
                  popupTitle: '배송 시 요청사항 선택',
                  targetBtn: 'btn_deliveryRequest',
                }"
                @selectItem="selectDeliveryRequest($event)"
              />
            </div>

            <div class="form_group">
              <div class="check_st">
                <input type="checkbox" id="checkbox_011" />
                <label for="checkbox_011">개인 정보 수집 및 활용에 대한 동의 (필수)</label>
              </div>
              <div class="box_line box-agree">
                <p>
                  본인 인증할 때 수집된 성명, 생년월일, 성별, 휴대폰 번호 등의 개인정보가 개인정보
                  수집 및 이용 정책에 따라 활용되는 것에 동의합니다.
                </p>
                <ol>
                  <li>
                    1. 개인 정보 수집 이용 동의 (필수)
                    <ol>
                      <li>
                        2) 수집 이용 목적: 유심 교체를 위한 정보 항목 조회 서비스 이용을 위한 본인
                        확인 및 식별
                      </li>
                      <li>
                        3) 보유 이용 기간: 유심 교체 신청일로부터 6개월까지 보관 후 파기합니다.
                      </li>
                    </ol>
                  </li>
                  <li>
                    2. 동의 거부권 및 미동의에 대한 불이익 안내 고객님께서는 정보 주체로서 개인 정보
                    동의 거부권이 있으며, 미동의 시 서비스를 이용하실 수 없습니다.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <!-- // 배송정보 -->

        <div class="bottom_float">
          <div class="inner">
            <div class="float_btn_wrap">
              <div class="btn_group">
                <button type="button" class="btn lg c03" disabled>신청 완료하기</button>
              </div>
            </div>
          </div>
        </div>
        <!-- // bottom_float -->
      </div>
    </div>
  </div>
  <!-- // container -->
</template>

<script setup>
import { onMounted, defineEmits } from "vue";

const emit = defineEmits(["setLayout"]);
const layout = reactive({
  header: "sub",
  footer: "none",
  title: "U+알뜰폰 고객 원칩 USIM 교체 신청",
  floatMenu: "none",
});

onMounted(() => {
  emit("setLayout", layout);
});
</script>
