<template>
  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">Guide</h2>
      
      <div class="page_info">Animation</div>

      <div class="section">
        <h3 class="tit02">loading</h3>
        <Lottie name="loading" />
      </div>

      <div class="section">
        <h3 class="tit02">complete</h3>
        <Lottie name="complete" />
      </div>

      <div class="section">
        <h3 class="tit02">joinComplate</h3>
        <Lottie name="joinComplate" />
      </div>

      <div class="section">
        <h3 class="tit02">mainChar</h3>
        <Lottie name="mainChar" />
      </div>

      <div class="section">
        <h3 class="tit02">plan01</h3>
        <Lottie name="plan01" />
      </div>

      <div class="section">
        <h3 class="tit02">plan02</h3>
        <Lottie name="plan02" />
      </div>

      <div class="section">
        <h3 class="tit02">plan03</h3>
        <Lottie name="plan03" />
      </div>

      <div class="section">
        <h3 class="tit02">plan04</h3>
        <Lottie name="plan04" />
      </div> <!-- // section -->

    </div> <!-- // content -->
  </div> <!-- // container -->
</template>



<script>
import Lottie from "@/components/Lottie";

export default {
  name: "GuideAnimation",
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub2', footer: '', title: '' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components: {
    Lottie,
  }
};
</script>