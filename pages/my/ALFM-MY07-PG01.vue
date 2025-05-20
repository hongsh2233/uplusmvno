<template>

  <div class="container">
    <div class="content" id="content">
      <h2 class="title_nav">{{ layout.title }}</h2>

      <div class="section">
        <h3 class="tit02">요금제</h3>
        <div class="list_info_ty01">
          <dl v-for="(d, i) in dataProduct" :key="i">
            <dt>{{ d.label }}</dt>
            <dd v-html="d.info"></dd>
          </dl>
        </div>
        <div class="eval_wrap">
          <div class="eval_item">
            <h3 class="tit02">개통과정은 잘 되었나요?</h3>
            <div class="eval_star">
              <v-rating v-model="rating"></v-rating>
            </div>
            <div class="eval_desc" v-if="rating < 1">{{ ratingText[0] }}</div>
            <div class="eval_desc" v-else>{{ rating }}점 ({{ ratingText[rating] }})</div>
          </div>
          <div class="eval_item">
            <h3 class="tit02">고객상담은 어떠셨나요?</h3>
            <div class="eval_star">
              <v-rating v-model="rating2" item-aria-label="custom icon label text {0} of {1}"></v-rating>
            </div>
            <div class="eval_desc" v-if="rating2 < 1">{{ ratingText[0] }}</div>
            <div class="eval_desc" v-else>{{ rating2 }}점 ({{ ratingText[rating2] }})</div>
          </div>
          <div class="eval_item">
            <h3 class="tit02">개통 이후 만족하셨나요?</h3>
            <div class="eval_star">
              <v-rating v-model="rating3"></v-rating>
            </div>
            <div class="eval_desc" v-if="rating3 < 1">{{ ratingText[0] }}</div>
            <div class="eval_desc" v-else>{{ rating3 }}점 ({{ ratingText[rating3] }})</div>
          </div>
          <div class="eval_item">
            <h3 class="tit02">어떤점이 좋았나요?</h3>

            <TextareaBox :data="{ type:'ty01', placeholder:'최소 10자 이상 입력해주세요', maxlength: 1000, byteCheck: true, }"
              @textareaValue="console.log($event)" @textareaSubmit="console.log($event)"
            />

            <div class="text_info">관련없는 내용이나 동일문자의 반복 등 부적합한 내용의 후기작성은 통보없이 삭제됩니다. </div>
          </div>
        </div>

      </div>
      <div class="section">
        <div class="btn_group">
          <button type="button" class="btn md c06">취소하기</button>
          <button type="button" class="btn md c03" disabled>등록하기</button>
        </div>
      </div>

    </div> <!-- // content -->
  </div><!-- // container -->

</template>

<script>
import TextareaBox from '@/components/TextareaBox';

export default {
  name: 'ALFM-MY07-PG01',
  emits: ['setLayout', 'openPopup'],
  data(){
    return {
      layout: { header: 'sub', footer: '', floatMenu: '', title: '사용자 평점·후기 등록' },
      dataProduct: [
        {label: '사업자', info:'프리티',},
        {label: '요금제', info:'5G 더빠른 180GB+',},
        {label: '개통일', info:'2022.10.03',},
        {label: '월 통신 요금', info:'51,700원',},
        {label: '부가서비스', info:'<span>2</span>건',},
      ],
			rating: 0,
      rating2: 0,
      rating3: 0,
      ratingText: ['선택해주세요', '별로예요', '그저그래요', '괜찮아요', '좋아요', '최고에요'],
    }
  },
  mounted(){
    this.$emit('setLayout', this.layout);
  },
  components: {
    TextareaBox,
  }
}
</script>
