<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{ type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">
        가지고 계신 eSIM 단말기의 <br />
        정보(EID, IMEI1, IMEI2)를 <br />
        입력해 주세요
      </div>

      <div class="section">
        <div class="box_gray">
          <strong>정보(EID, IMEI1, IMEI2) 확인 방법</strong>
          <ul class="text_list bull">
            <li>
              통화 키패드에서 [<span class="fc01">*#06#</span>] 입력하여 표시되는 화면을 캡처
              <br /><NuxtLink :to="{}" role="button" class="btn xsm c07 mgt8">자세히 보기</NuxtLink>
            </li>
          </ul>
          <ul class="text_info">
            <li>
              U+/U+알뜰통신사 이용 중 이시라면, ‘이심(eSIM) → 이심(eSIM) 번호이동’이 현재 불가하여
              조치중입니다.<br class="pc_show" />
              불편하시겠지만, 해당 고객분이시면 유심개통으로 진행부탁드립니다.
            </li>
          </ul>
        </div>

        <div class="btn_group mgt20">
          <label class="btn md c03" for="imgUpload">캡처한 이미지 올리기</label>
          <input class="blind" type="file" id="imgUpload" name="imgUpload" accept="image/*" />
        </div>

        <button type="button" class="btn_text" @click="selfInput = true">직접 입력하기</button>
      </div>
      <!-- // section -->

      <div class="section">
        <div class="form_wrap">
          <div class="form_group">
            <strong class="form_label">EID</strong>
            <div class="form_item">
              <InputBox
                :option="{ placeholder: '앞에서부터 숫자 32자리 입력', disabled: !selfInput }"
                @inputValue="console.log($event)"
              />
            </div>
            <div class="error">error</div>
          </div>

          <div class="form_group">
            <strong class="form_label">IMEI 1</strong>
            <div class="form_item">
              <InputBox
                :option="{ placeholder: '앞에서부터 숫자 14자리 입력', disabled: !selfInput }"
                @inputValue="console.log($event)"
              />
            </div>
            <div class="error">error</div>
          </div>

          <div class="form_group">
            <strong class="form_label">IMEI 2</strong>
            <div class="form_item">
              <InputBox
                :option="{ placeholder: '앞에서부터 숫자 14자리 입력', disabled: !selfInput }"
                @inputValue="console.log($event)"
              />
            </div>
            <div class="error">error</div>
          </div>
        </div>
      </div>
      <!-- // section -->

      <div class="section">
        <div class="box_gray">
          <ul class="text_list bull">
            <li>EID, IMEI 정보는 맨 마지막 자리를 제외한 숫자를 입력해주세요.</li>
            <li>입력한 단말정보가 불일치 할 경우 eSIM 개통이 되지 않습니다. 꼭 확인해주세요.</li>
          </ul>
        </div>
      </div>
      <!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c02" v-bind:disabled="prev == false">
                이전으로
              </button>
              <button type="button" class="btn lg c01" disabled>인증하기</button>
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

<script>
import InputBox from "@/components/InputBox";

export default {
  name: "ALFM-PR03-PG04",
  emits: ["setLayout", "openPopup"],
  data() {
    return {
      layout: { header: "sub2", footer: "none", title: "eSIM 정보 입력", floatMenu: "none" },
      prev: true,
      next: false,
      selfInput: false,
    };
  },
  mounted() {
    this.$emit("setLayout", this.layout);
  },
  components: {
    InputBox,
  },
};
</script>
