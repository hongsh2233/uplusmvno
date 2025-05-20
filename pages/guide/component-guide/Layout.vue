<template>
  
	<div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="page_info">page info</div>
      
      <div class="section">
        <h3 class="tit02">section</h3>
        
        content
      </div> <!-- // section -->

      <div class="section">
        <h3 class="tit02">section</h3>
        
        content content content content content content content content content <br>
        content content content content content content content content content <br>
        content content content content content content content content content <br>
        content content content content content content content content content <br>
        content content content content content content content content content <br>
        content content content content content content content content content <br>
        content content content content content content content content content <br>
        content content content content content content content content content <br>
        content content content content content content content content content
      </div> <!-- // section -->

      <div class="section ty02">
        <h3 class="tit02">section ty02</h3>
        
        content
      </div> <!-- // section -->

      
      <div class="section">
        <h3 class="tit02">Layout (header, footer, title)</h3>
        해당 페이지 내의 data 수정 후 mounted() 이벤트로 MainLayout.vue 에 전송<br><br>

        <b>layout: { header: 'sub', footer: 'none', title: '공통', floatMenu: 'none' },</b><br>
        <b>this.$emit('setLayout', this.layout);</b>

        <ul class="text_list bull">
          <li><b>header</b> : 'main', 'sub', 'sub2', 'none' (필수)</li>
          <li><b>footer</b> : '', 'none'</li>
          <li><b>title</b> : '', 'text'</li>
          <li><b>floatMenu</b> : '', 'none'</li>
        </ul>
        
        <br><br>

        <p><strong>'header' : 'main'</strong></p>
        <div class="header_guide">
          <div class="h_left">
            <span class="logo"></span>
          </div>
          <div class="h_right">
            <span class="rcmd"></span>
            <span class="menu"></span>
          </div>
        </div>
        
        <br>

        <p><strong>'header' : 'sub'</strong></p>
        <div class="header_guide">
          <div class="h_left">
            <span class="back"></span>
            <strong class="ttl">title</strong>
          </div>
          <div class="h_right">
            <span class="rcmd"></span>
            <span class="menu"></span>
          </div>
        </div>
        
        <br>

        <p><strong>'header' : 'sub2'</strong></p>
        <div class="header_guide">
          <div class="h_left">
            <span class="back"></span>
            <strong class="ttl">title</strong>
          </div>
          <div class="h_right">
          </div>
        </div>

        <br>
        
        <p><strong>'header' : 'none'</strong></p>
        <div class="header_guide">헤더없음</div>

      </div> <!-- // section -->

      <div class="bottom_float">
        <div class="inner">
          <div class="float_btn_wrap">
            <div class="btn_group">
              <button type="button" class="btn lg c01">button</button>
            </div>
            <div class="btn_group">
              <button type="button" class="btn lg c02">button</button>
              <button type="button" class="btn lg c03">button</button>
            </div>
          </div>
          <!-- plan_join -->
          <!-- compare_pop -->
        </div>
      </div> <!-- // bottom_float -->

    </div> <!-- // content -->
	</div> <!-- // container -->

</template>

<script>

export default {
  name: 'GuideLayout',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'main', footer: '', title: 'title nav', floatMenu: '' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>

<style>
.header_guide{border:1px solid #ddd; height:5.2rem; box-sizing:border-box; display:flex; align-items:center; justify-content: space-between; padding:0 0.8rem 0 0;}
.header_guide .h_left{margin-right:auto; display:flex; align-items:center;}
.header_guide .h_right{display:flex; align-items:center;}
.header_guide span {display:inline-block; width:4rem; height:4rem; background:url(/images/common/ico_header.png) 0 0 / 29rem auto no-repeat;}
.header_guide .ttl {flex:1 1 auto; color:#000; font-size:1.6rem; line-height:2.3rem; font-weight:700; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;}
.header_guide .logo {width:4.8rem; background:url(/images/common/logo_plusalpha.png) center center / 4.8rem auto no-repeat; margin-left:1.6rem;}
.header_guide .back {background-position:0 0;}
.header_guide .menu {background-position:-5rem 0}
.header_guide .rcmd {background-position:-25rem 0;}
</style>