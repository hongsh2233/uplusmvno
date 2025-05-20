<template>
  <div class="auth-wrap">
    <div class="cont-head title-main">
      <h3 class="cont-title-main">
        본인 확인을 위한<br/>
        <b class="txt-primary">인증 정보</b>를 입력해 주세요
      </h3>
      <!-- <h3 class="cont-title-main" v-else>
        본인 인증이<br/>
        <b class="txt-primary">완료</b>되었어요
      </h3> -->
    </div>
    <div class="form-box">
      <div class="title-area">
        <strong class="title">이름</strong>
      </div>
      <div class="form_group">            
        <div class="form_item" :class="{'val_chk' : !confirmAuth}">
          <InputForm
            class="combobox-bottom"
            :class="{'text view': confirmAuth}"
            :option="{ placeholder: '이름을 입력해 주세요', value: inpVal1, readonly: confirmAuth}"
            @change="inpVal1 = $event.target.value"
            />
        </div>
        <div class="error">
          <em>이름을 입력해주세요</em>
          <!-- <em>이름을 정확히 입력해 주세요</em> -->
        </div>
      </div>
    </div>

    <div class="form-box">
      <div class="title-area">
        <strong class="title">주민등록번호</strong>
      </div>
      <div class="form_group">
        <div class="form_item" :class="{'val_chk' : !confirmAuth}">
          <div class="form-flex">
            <InputForm
              class="combobox-bottom"
              :class="{'text view': confirmAuth}"
              :option="{ placeholder: '앞 6자리 입력', value: inpVal2, readonly: confirmAuth}"
              @change="inpVal2 = $event.target.value"
            />
            <span class="mark_div">-</span>
            <InputForm
              class="combobox-bottom"
              :class="{'text view': confirmAuth}"
              :option="{ placeholder: '뒤 7자리 입력', value: inpVal3, readonly: confirmAuth}"
              @change="inpVal3 = $event.target.value"
            />
          </div>       
        </div>
        <div class="error">
          <em>주민등록번호를 입력해 주세요</em>
          <!-- <em>주민등록번호를 정확히 입력해 주세요</em> -->
        </div>
      </div>
    </div>

    <div class="form-box">
      <div class="title-area">
        <strong class="title">휴대폰 번호</strong>
      </div>
      <div class="form_group">
        <div class="form_item" :class="{'val_chk' : !confirmAuth}">
          <InputForm
            class="combobox-bottom"
            :class="{'text view': confirmAuth}"
            :option="{ placeholder: '숫자만 입력해 주세요', value: inpVal4, readonly: confirmAuth}"
            @change="inpVal4 = $event.target.value"
            />
        </div>
        <div class="error">
          <em>휴대폰 번호를 입력해 주세요</em>
        </div>
      </div>
    </div>
    <div class="form-box">
      <div class="btn-area">
        <NuxtLink class="txt-link gray">다른 방법으로 인증하기</NuxtLink>
      </div>
    </div>
    <!-- // bottom_button -->
  </div>
</template>

<script setup>
  import InputForm from "@/components/v2/common/InputForm";

  const props = defineProps({
    confirmAuth: {
      type: Boolean,
      default: false,
    },
  })

  const inpVal1 = ref('홍길동')
  const inpVal2 = ref('010101')
  const inpVal3 = ref('1010101')
  const inpVal4 = ref('01012341234')

  
</script>
