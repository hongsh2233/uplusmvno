<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <!-- progress bar 추가 ; 23/11/23 -->
      <ProgressBar :barInfo="{type: 'ty02' }" />
      <!-- //progress bar -->

      <!-- 사전 인증 -->
      <div class="section">
        <AuthSelect :newSign="newSign" :isAuthShow="isAuthShow" :handleOption="handleOption" @openAlert="this.$emit('openAlert', $event)" />
      </div>
      <!-- // 사전 인증 -->

      <!-- 사전 인증 후 정보 -->
      <div class="section">
        <AuthMyInfoPage />
      </div>
      <!-- // 사전 인증 후 정보 -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c02" v-bind:disabled="prev == false">이전으로</button>
              <button type="button" class="btn lg c01" disabled>다음으로</button>
            </div>
          </div>
        </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
  </div><!-- // container -->
</template>

<script>
import AuthSelect from '@/components/page/AuthSelect'
import AuthMyInfoPage from '@/components/page/AuthMyInfoPage'

export default {
  name: 'ALFM-PR03-PG11',
  emits: ['setLayout', 'openPopup', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub2', footer: 'none', title: '고객정보 입력', floatMenu:'none' },
      newSign: true,
      isAuthShow: true,
      prev: true,
      handleOption: {placeholder:"'-' 없이 숫자만 입력" }
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components:{
    AuthSelect,
    AuthMyInfoPage
  }
}
</script>
