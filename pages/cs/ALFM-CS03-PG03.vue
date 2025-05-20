<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="usim-area">
        <!-- 원칩 교체 신청 안내 박스 -->
        <div class="section">
          <div class="box_gray usim-info-box">
            <p class="title">
              <strong
                >정보 인증 후 U+ 알뜰폰 사용 고객님만 원칩 변경 개통을 신청할 수 있습니다.</strong
              >
            </p>
            <p class="caption">
              알닷을 아껴 주시고, 사용해 주시는 고객님들께 불편을 끼쳐 드린 점 고개 숙여 사과의
              말씀을 드립니다. 변경 개통을 진행할 원칩을 가지고 계신 고객님께서는 아래의 변경 개통
              신청을 진행하여 주신 후, 휴대폰의 유심을 교체하여 주시면 정상적으로 사용이 가능합니다.
            </p>
          </div>
        </div>
        <!-- // 원칩 교체 신청 안내 박스 -->

        <!-- 본인인증 수단 선택 -->
        <div class="section">
          <div class="page_info mgb0">
            본인 인증 수단을 선택하신 후,<br class="pc_hide" />
            인증을 완료하여 주세요
          </div>
          <p class="sub-title">
            USIM 변경 신청은 고객님의 소중한 정보 보호를 위해 본인 인증 후 가능합니다.
          </p>
          <div class="check_st">
            <input type="checkbox" id="checkbox_021" />
            <label for="checkbox_021">USIM 변경 신청 본인 인증 절차 동의 (필수)</label>
          </div>
        </div>

        <div class="section">
          <div class="form_group">
            <strong class="form_label">이름</strong>
            <div class="form_item val_chk">
              <InputBox :option="{ placeholder: '이름 입력' }" />
            </div>
            <div class="error">이름을 입력해 주세요.</div>
          </div>

          <div class="form_group">
            <strong class="form_label">주민등록번호</strong>
            <div class="form_item val_chk">
              <InputBox
                :option="{ placeholder: '앞 6자리 입력' }"
                @inputValue="console.log($event)"
              />
              <span class="mark_div">-</span>
              <InputBox
                :option="{ type: 'password', placeholder: '뒤 7자리 입력' }"
                @inputValue="console.log($event)"
              />
            </div>
            <div class="error">주민등록번호를 입력해주세요</div>
          </div>

          <div class="form_group">
            <strong class="form_label">USIM을 교체할 휴대폰 번호</strong>
            <div class="form_item val_chk">
              <InputBox :option="{ placeholder: '‘-’ 없이 숫자만 입력' }" />
            </div>
            <div class="error">휴대폰 번호를 입력해주세요</div>
          </div>
        </div>

        <div class="section">
          <AuthMethod @childCheckValues="handleCheckValuesEvent" />
        </div>
        <!-- // 본인인증 수단 선택 -->

        <!-- 통신사 선택 -->
        <div class="section">
          <div class="page_info">
            통신사를<br class="pc_hide" />
            선택해 주세요.
          </div>
          <div class="form_group">
            <strong class="form_label required">알뜰폰 통신사</strong>
            <div class="form_item">
              <button type="button" class="btn_select" ref="btn_MVNO" @click="$refs.MVNO.open">
                선택
              </button>
            </div>
            <PopupSelect
              ref="MVNO"
              :option="{ data: 'MVNO', popupTitle: '알뜰폰 통신사 선택', targetBtn: 'btn_MVNO' }"
              @selectItem="console.log($event)"
            />
          </div>
        </div>
        <!-- // 통신사 선택 -->

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
              <input type="radio" id="U8680" name="U8680" checked />
              <label for="U8680">U8680</label>
            </div>
          </div>

          <div class="form_group form-row">
            <strong class="form_label required">일련번호</strong>
            <div class="form_item">
              <InputBox :option="{ placeholder: '일련 번호를 입력해주세요.' }" />
            </div>
          </div>

          <div class="btn_group">
            <button type="button" class="btn md c03">USIM 인증</button>
          </div>
        </div>
        <div class="section">
          <div class="form_group">
            <strong class="form_label">연락받을 전화번호</strong>
            <div class="form_item">
              <InputBox :option="{ placeholder: '처리 결과를 알림톡으로 보내드립니다.' }" />
            </div>
          </div>

          <div class="check_st mgt8">
            <input type="checkbox" id="checkbox_031" />
            <label for="checkbox_031">신청 회선과 동일</label>
          </div>
        </div>
        <!-- // usim 정보입력 -->

        <!-- 배송정보 -->
        <div class="section">
          <div class="page_info">
            신청 전에 <br class="pc_hide" />
            꼭 확인해 주세요.
          </div>
          <div class="form_wrap">
            <div class="form_group">
              <div class="box_line">
                <ul class="text_list bull">
                  <li>
                    청소년, 외국인, 법인 가입자는 온라인 유심변경신청이 불가하며, 각 파트너사의
                    고객센터 상담을 통해 가능합니다.
                  </li>
                  <li>
                    유심 불량에 따른 유심 변경 신청은 이용하고 계신 카드사 홈페이지에서 본인확인
                    서비스 신청완료 후 PC에서 본인인증 가능합니다.
                  </li>
                  <li>
                    유심 변경 처리완료 알림톡(또는 문자)을 받으신 후, 새 유심을 휴대폰에 장착하여
                    전원을 1~3회 껐다 켜시고 LG U+ 데이터 정상 접속 여부를 확인 바랍니다.
                  </li>
                  <li>
                    해외에서 온라인 유심 변경 신청을 완료하여도 고객님의 휴대폰에서 LG U+ 데이터
                    접속이 불가하기 때문에, 유심 변경 처리가 완료되지 않습니다.
                  </li>
                  <li class="import">
                    평일 18시 이후/주말/공휴일 유심 변경 신청건은 다음 영업일에 신청 순서대로 처리
                    됩니다.
                  </li>
                  <li>유심 변경 신청 후에는 취소가 불가합니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- // 배송정보 -->

        <div class="bottom_float">
          <div class="inner">
            <div class="float_btn_wrap">
              <div class="btn_group">
                <button type="button" class="btn lg c03" disabled>USIM 변경 개통 신청하기</button>
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

const checkValues = ref({});
const handleCheckValuesEvent = (val) => {
  checkValues.value = val;
};

onMounted(() => {
  emit("setLayout", layout);
});
</script>
