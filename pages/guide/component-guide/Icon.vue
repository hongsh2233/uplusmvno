<template>

	<div class="container">
		<div class="content" id="content">
			<h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">Icon</div>

      <div class="section">
        <h3 class="tit02">Header - spr icon size:40 , width:580, height:80</h3>
        <div class="img_box"><img src="/images/common/ico_header.png"></div>

        <h3 class="tit02">Popup close - spr icon size:24 , width:200, height:80</h3>
        <div class="img_box"><img src="/images/common/ico_close_pop.png"></div>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">spr icon size:12 , width:400, height:24</h3>
        <div class="img_box"><img src="/images/common/ico_12.png"></div>

        <h3 class="tit02">spr icon size:12 , width:400, height:24</h3>
        <div class="img_box"><img src="/images/common/ico_arrow_12.png"></div>

        <h3 class="tit02">spr icon size:16 , width:400, height:32 </h3>
        <div class="img_box"><img src="/images/common/ico_arrow_16.png"></div>

        <h3 class="tit02">spr icon size:24 , width:400, height:48 </h3>
        <div class="img_box"><img src="/images/common/ico_arrow_24.png"></div>

        <h3 class="tit02">'더 볼래요' icon size:25 , width:25, height:25 </h3>
        <div class="img_box"><img src="/images/common/ico_arrow_more.png"></div>
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">spr icon size:24 , width:240, height:48</h3>
        <div class="img_box"><img src="/images/common/ico_pagination.png"></div>
      </div> <!-- // section -->


		</div> <!-- // content -->
	</div><!-- // container -->


</template>

<script>
export default {
  name: 'GuideIcon',
  emits: ['setLayout'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: 'Guide Icon' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>
<style>
.img_box {margin-bottom:20px;}
.img_box img { background:antiquewhite;}
</style>
