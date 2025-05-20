<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{type: 'ty02' }" />
      <!-- //progress bar -->

      <div class="page_info">추천인의 정보를 <br>입력해주세요 <span class="fc02">(선택)</span></div>

      <div class="section">
        <div class="form_wrap">
          <div class="form_group">
            <strong class="form_label">추천인 이름</strong>
            <!-- Default 노출 -->
            <div class="form_item">
              <InputBox :option="{ placeholder:'추천인 이름 입력' }" @inputValue="console.log($event)" />
            </div>
            <div class="error">고객명을 입력해 주세요</div>
            <!-- 링크를 통해서 진입 시 노출 -->
            <div class="form_item">
              <InputBox :option="{ placeholder:'홍*동', disabled:true }" @inputValue="console.log($event)" />
            </div>
          </div>
          <div class="form_group">
            <strong class="form_label">추천인 휴대폰번호</strong>
            <!-- Default 노출 -->
            <div class="form_item"> <!-- class="form_item val_chk" 유효성 check -->
              <InputBox :option="{ placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력' }" @inputValue="console.log($event)" />
              <button type="button" class="btn md c03">추천인 확인</button>
            </div>
            <div class="error">추천인 휴대폰번호를 입력해주세요.</div>
            <div class="error">입력하신 추천인은 알뜰폰닷컴 사용자가 아니므로 혜택을 받을 수 없습니다.</div>
            <div class="error">추천인과 피추천인의 휴대폰번호가 동일할 경우 혜택을 받을 수 없습니다.</div>

            <!-- 링크를 통해서 진입 시 노출 -->
            <div class="form_item">
              <InputBox :option="{ value:'010-12**-56**', placeholder:'&lsquo;-&rsquo; 없이 숫자만 입력', disabled:true }" @inputValue="console.log($event)" />
              <button type="button" class="btn md c03" disabled>추천인 확인</button>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
				<div class="box_gray">
					<ul class="text_list bull">
						<li>추천해주신 분의 이름과 휴대폰번호를 입력해주세요. 
              개통완료 후 추천인을 입력하신 개통고객님과 추천인
              모두에게 혜택을 드립니다. (개통 2달 후 지급)
            </li>
					</ul>
				</div>
      </div>

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c02" v-bind:disabled="prev == false">이전으로</button>
              <button type="button" class="btn lg c01">다음으로</button> <!-- 버튼명 수정 ; 23/11/21 -->
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import InputBox from '@/components/InputBox'

export default {
  name: 'ALFM-PR03-PG18',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', floatMenu: 'none', title: '추천인 정보' },
      prev: true
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    InputBox,
  },
}
</script>
