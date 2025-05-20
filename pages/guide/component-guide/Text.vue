<template>

	<div class="container">
		<div class="content" id="content">
			<h2 class="title_nav">PC 페이지 nav (class="title_nav") Guide</h2>

			<div class="page_info">페이지 안내 (class="page_info") page info</div>
			
			<div class="section">
				<h3 class="tit02">sub title in section (class="tit02")</h3>
				<h3 class="tit03">sub title in section (class="tit03")</h3>

				<div class="tit_wrap">
					<h3 class="tit03">title (class="tit03")</h3>
					<NuxtLink :to="{}" class="more">더보기</NuxtLink>
				</div>

				<div class="tit_wrap">
					<h3 class="tit03">타이틀이 두 줄 이상<br>일 때 더보기 .more.bottom</h3>
					<NuxtLink :to="{}" class="more bottom">더보기</NuxtLink>
				</div>

				<br><br>
				<strong class="sub"> sub box title in section(class="sub")</strong>

				<br>
				<div>MO body (font-size:1.4rem; line-height:2rem; color:#222;)</div>
				<br>
				<div>PC body (font-size:1.6rem;)</div>
				<br>
				<div>
        	<NuxtLink :to="{}" class="txt_more">제휴카드 자세히 알아보기</NuxtLink>
				</div>
				<div class="share_box">
					<span>text</span>
					<button type="button" class="btn_share" id="btn_CM12PG00" @click="this.$emit('openAlert', ['CM12PG00', 'btn_CM12PG00', 101]);"><span class="blind">공유하기</span></button>
				</div>
			</div> <!-- // section -->

			<div class="section">
				<h3 class="tit02">text_list bull</h3>
				<ul class="text_list bull">
					<li>
						비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.
						<ul class="text_list dash">
							<li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
							<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
						</ul>
					</li>
					<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
				</ul>

				<ul class="text_list bull">
					<li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
					<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
					<li>text_list 내에서 <strong>강조 문구</strong> 표기는 strong tag 사용</li>
				</ul>
			</div> <!-- // section -->

			<div class="section">
				<h3 class="tit02">text_list dash</h3>
				<ul class="text_list dash">
					<li>
						비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.
						<ul class="text_list bull">
							<li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
							<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
						</ul>
					</li>
					<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
				</ul>
				<ul class="text_list dash">
					<li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
					<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
				</ul>
			</div> <!-- // section -->

			<div class="section">
				<h3 class="tit02">text_info</h3>
				
				<div class="text_info">종료일 기준으로 최근 2개월간 지난 이벤트 조회가 가능합니다</div>
			</div> <!-- // section -->

			<div class="section">
				<h3 class="tit02">box</h3>
				<div class="box_gray">
					<ul class="text_list bull">
						<li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
						<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
					</ul>
				</div>

				<div class="box_line">
					<ul class="text_list bull">
						<li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
						<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
					</ul>
				</div>

				<div class="box_red">
					<ul class="text_list bull">
						<li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
						<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
					</ul>
				</div>

				<div class="box_yellow">
					<ul class="text_list bull">
						<li>비밀번호는 10~20자의 영문, 숫자 조합으로 생성해주세요.</li>
						<li>특수문자 중 &lt;>()#&`"/|?\공백은 사용할 수 없습니다.</li>
					</ul>
				</div>
			</div> <!-- // section -->


		</div> <!-- // content -->
	</div><!-- // container -->


</template>

<script>
export default {
  name: 'GuideText',
  emits: ['setLayout', 'openAlert'],
  data(){
    return {
      layout: { header: 'sub', footer: '', title: '' },
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
}
</script>
